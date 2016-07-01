(ns lellis-guarderya.service
  (:require [io.pedestal.http :as bootstrap]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.body-params :as body-params]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [io.pedestal.interceptor.helpers :as interceptor :refer [on-response]]
            [io.pedestal.http.ring-middlewares :as middlewares]
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [clojure.walk :refer :all]
            [clojure.tools.logging :as log]
            [geheimtur.interceptor :refer [interactive guard http-basic]]
            [geheimtur.impl.form-based :refer [default-login-handler default-logout-handler]]
            [geheimtur.impl.oauth2 :refer [authenticate-handler callback-handler]]
            [geheimtur.util.auth :as auth :refer [authenticate]]
            [ring.util.codec :as codec]
            [hiccup.page :as page]
            [schema.coerce :as coerce]
            [ring.util.response :as ring-resp]
            [lellis-guarderya.datomic.utils :as utils]
            [lellis-guarderya.views :as views]
            [lellis-guarderya.users :refer [users]]
            [datomic.api :as d]
            [cheshire.core :as cheshire]
            [io.pedestal.http :as pedestal-http]
            [ring.util.codec :as ring-codec]
            [ring.middleware.session.cookie :as cookie]))


(def login-form
  [:div {:class "row"}
   [:div {:class "columns small-12"}
    [:h3 "Login"]
    [:div {:class "row"}
     [:form {:method "POST" :action "login" :class "columns small-4"}
      [:div "Username" [:input {:type "text" :name "username"}]]
      [:div "Password" [:input {:type "password" :name "password"}]]
      [:div [:input {:type "submit" :class "button" :value "Login"}]]]]]])



(defn credentials
  [_ {:keys [username password]}]
  (when-let [identity (get users username)]
    (when (= password (:password identity))
      (dissoc identity :password))))

(def access-forbidden-interceptor
  (on-response
    ::access-forbidden-interceptor
    (fn [response]
      (if (or
            (= 401 (:status response))
            (= 403 (:status response)))
        (->
          (views/error-page {:title "Access Forbidden" :message (:body response)})
          (ring-resp/content-type "text/html;charset=UTF-8"))
        response))))

(def not-found-interceptor
  (on-response
    ::not-found-interceptor
    (fn [response]
      (if-not (ring-resp/response? response)
        (->
          (views/error-page {:title   "Not Found"
                             :message "We are sorry, but the page you are looking for does not exist."})
          (ring-resp/content-type "text/html;charset=UTF-8"))
        response))))

(defn on-github-success
  [_ {:keys [identity return]}]
  (let [user {:name      (:login identity)
              :roles     #{:user}
              :full-name (:name identity)}]
    (->
      (ring-resp/redirect return)
      (authenticate user))))

(defn on-google-success
  [_ {:keys [identity return]}]
  (let [user {:name      (:displayName identity)
              :roles     #{:user}
              :full-name (:displayName identity)}]
    (->
      (ring-resp/redirect return)
      (authenticate user))))

(def providers
  {:github {:auth-url           "https://github.com/login/oauth/authorize"
            :client-id          (or (System/getenv "github_client_id") "client-id")
            :client-secret      (or (System/getenv "github_client_secret") "client-secret")
            :scope              "user:email"
            :token-url          "https://github.com/login/oauth/access_token"
            ;; use a custom function until (and if) https://github.com/dakrone/clj-http/pull/264 is merged
            :token-parse-fn     #(-> % :body ring-codec/form-decode keywordize-keys)
            :user-info-url      "https://api.github.com/user"
            ;; it is not really needed but serves as an example of how to use a custom parser
            :user-info-parse-fn #(-> % :body (parse-string true))
            :on-success-handler on-github-success}
   :google {:auth-url           "https://accounts.google.com/o/oauth2/auth"
            :client-id          (or (System/getenv "google_client_id") "client-id")
            :client-secret      (or (System/getenv "google_client_secret") "client-secret")
            :callback-uri       "http://geheimtur.herokuapp.com/oauth.callback"
            :scope              "profile email"
            :token-url          "https://accounts.google.com/o/oauth2/token"
            :user-info-url      "https://www.googleapis.com/plus/v1/people/me"
            :on-success-handler on-google-success}})

(defroutes routes
           [[["/" {:get views/home-page}
              ^:interceptors [(body-params/body-params)
                              bootstrap/html-body]
              ["/login" {:get views/login-page :post (default-login-handler {:credential-fn credentials})}]
              ["/logout" {:get default-logout-handler}]
              ["/oauth.login" {:get (authenticate-handler providers)}]
              ["/oauth.callback" {:get (callback-handler providers)}]
              ["/unauthorized" {:get views/unauthorized}]
              ["/interactive" {:get views/interactive-index} ^:interceptors [access-forbidden-interceptor (interactive {})]
               ["/info" {:get views/info} ^:interceptors [(guard :silent? false)]]
               ["/agendamentos" {:get views/page-list-agendamento} ^:interceptors [(guard :silent? false)]]
               ["/restricted" {:get views/interactive-restricted} ^:interceptors [(guard :silent? false)]]
               ["/admin-restricted" {:get views/interactive-admin-restricted} ^:interceptors [(guard :silent? false :roles #{:admin})]]
               ["/admin-restricted-hidden" {:get views/interactive-admin-restricted-hidden} ^:interceptors [(guard :roles #{:admin})]]]
              ["/http-basic" {:get views/http-basic-index} ^:interceptors [(http-basic "Geheimtür Demo" credentials)]
               ["/restricted" {:get views/http-basic-restricted} ^:interceptors [(guard :silent? false)]]
               ["/admin-restricted" {:get views/http-basic-admin-restricted} ^:interceptors [(guard :silent? false :roles #{:admin})]]
               ["/admin-restricted-hidden" {:get views/http-basic-admin-restricted-hidden} ^:interceptors [(guard :roles #{:admin})]]]]]])

(def porta
  (env :porta))

;; Consumed by formiguinhas-service.server/create-server
;; See bootstrap/default-interceptors for additional options you can configure
(def service {:env                              :prod
              ;; You can bring your own non-default interceptors. Make
              ;; sure you include routing and set it up right for
              ;; dev-mode. If you do, many other keys for configuring
              ;; default interceptors will be ignored.
              ;; :bootstrap/interceptors []
              ;;::bootstrap/wrap-session {:store (redis-store redis-conn {:expire-secs 5 :reset-on-read true})}
              ::bootstrap/not-found-interceptor not-found-interceptor
              ::bootstrap/routes                routes
              ;;::bootstrap/enable-session {:store (memory/memory-store security/session-store)}
              ;; Uncomment next line to enable CORS support, add
              ;; string(s) specifying scheme, host and port for
              ;; allowed source(s):
              ;;
              ;; "http://localhost:8080"
              ;;
              ::bootstrap/allowed-origins       {:creds true :allowed-origins (constantly true)}
              ::bootstrap/cred                  true
              ::bootstrap/join?                 false
              ;; Root for resource interceptor that is available by default.
              ::bootstrap/resource-path         "/public"
              ::bootstrap/enable-session        {:cookie-name "SID"
                                                 :store       (cookie/cookie-store)}

              ;; Either :jetty, :immutant or :tomcat (see comments in project.clj)
              ::bootstrap/type                  :jetty
              ;;::bootstrap/host "localhost"
              ::bootstrap/port                  porta})






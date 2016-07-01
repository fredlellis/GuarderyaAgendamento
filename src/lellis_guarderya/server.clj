(ns lellis-guarderya.server
  (:gen-class :main true)                                   ; for -main method in uberjar
  (:require [io.pedestal.http :as server]
            [clojure.tools.logging :as log]
            [lellis-guarderya.service :as service]
            [clojure.java.io :as io]
            [datomic.api :as d]
            [io.pedestal.interceptor.error :as error-int]
            [ring.middleware.session :as Session]
            [ns-tracker.core :as tracker]
            [environ.core :refer [env]]
            [ring.middleware.stacktrace :as trace]
            [ring.middleware.reload :as reload]
            [ring.middleware.session.cookie :as cookie]
            [lellis-guarderya.datomic.install :as install]
            [lellis-guarderya.datomic.config :as config]
            [lellis-guarderya.schedule :as schedule]
            [frinj.repl :as fj]
            [clojure.stacktrace :as stacktrace]
            [ring.util.response :as resp]
            [hiccup.page :as h]
            [lellis-guarderya.datomic.remada :as remada]))






;(defn wrap-error-page [handler]
;  (fn [req]
;    (try (handler req)
;         (catch Exception e
;           (log/error "Erro Inesrperado -> " (stacktrace/print-cause-trace e))
;           (if (instance? clojure.lang.ExceptionInfo e)
;             (http/response-error (http/parse-keyword-barra->underline {:error (validation/parse-ErrorContainer e)}))
;             (http/response-error e))))))

(defn- ns-reload [track]
  (try
    (doseq [ns-sym (track)]
      (require ns-sym :reload))
    (catch Throwable e (.printStackTrace e))))

(defn watch "Funcao para dar reload no codigo (hot deploy)"
  ([] (watch ["src"]))
  ([src-paths]
   (let [track (tracker/ns-tracker src-paths)
         done (atom false)]
     (doto
       (Thread. (fn []
                  (while (not @done)
                    (ns-reload track)
                    (Thread/sleep 500))))
       (.setDaemon true)
       (.start))
     (fn [] (swap! done not)))))

;(defn run-dev
;  "The entry-point for 'lein run-dev'"
;  [& args]
;  (log/info "Criando conexão com datomic..")
;  (config/init-conn)
;  (install/install-schema)
;  (log/info "\nCriando servidor [DEV]...")
;  (watch)
;  (-> service/service ;; start with production configuration
;      (merge {:env :dev
;             ;; do not block thread that starts web server
;             ::server/join? false
;             ;; Routes can be a function that resolve routes,
;             ;;  we can use this to set the routes to be reloadable
;             ::server/routes #(deref #'service/routes)
;             ;;::server/enable-session {:cookie-name "SID" :store (cookie/cookie-store)}
;             ;; all origins are allowed in dev mode
;             ::server/allowed-origins {:creds true :allowed-origins (constantly true)}})
;      ;; Wire up interceptor chains
;      server/default-interceptors
;      server/dev-interceptors
;      server/create-server
;      server/start))

(defn init-database []
  (if (and (not (nil? (env :delete-db))) (env :delete-db))
    (do (d/delete-database config/db-uri)
        (d/create-database config/db-uri)
        (lellis-guarderya.datomic.utils/init-db)
        (install/install-schema))
    (do
      (config/init-conn)
      (install/install-schema))))


(defn -main [& args]
  ;;java -Ddatabase.url=jdbc:postgres://localhost/prod -jar standalone.jar para rodar url de producao
  (log/info "The entry-point for lein run")
  (log/info "\nCriando conexão com datomic..")
  (fj/frinj-init!)

  (init-database)

  (remada/criar-remadas-da-semana true)

  (schedule/doJobs)
  (log/info "\nCriando seu servidor..")
  (watch)
  (-> service/service
      server/default-interceptors
      server/create-server
      server/start))



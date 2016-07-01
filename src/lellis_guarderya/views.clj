(ns lellis-guarderya.views
  (:require [geheimtur.util.auth :refer [get-identity]]
            [lellis-guarderya.users :refer [users]]
            [ring.util.response :as ring-resp]
            [hiccup.page :as h]
            [lellis-guarderya.datomic.remada :as remada]
            [hiccup.element :as e]
            [hiccup.page :as page]))

(def head
  [:head
   [:title "Agendamento Demo"]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
   [:link {:href "/css/bootstrap.min.css" :media "screen" :rel "stylesheet" :type "text/css"}]
   [:link {:href "/css/bootstrap-social.css" :media "screen" :rel "stylesheet" :type "text/css"}]
   [:link {:href "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" :media "screen" :rel "stylesheet" :type "text/css"}]
   "<!--[if lt IE 9]>"
   [:script {:src "/js/html5shiv.js"}]
   [:script {:src "/js/respond.min.js"}]
   "<![endif]-->"])

(defn navbar
  [user]
  [:nav {:class "navbar navbar-default" :role "navigation"}
   [:div {:class "navbar-header"}
    [:button {:type "button" :class "navbar-toggle" :data-toggle "collapse" :data-target ".navbar-collapse"}
     [:span {:class "sr-only"} "Toggle navigation"]
     [:span {:class "icon-bar"}]
     [:span {:class "icon-bar"}]
     [:span {:class "icon-bar"}]]
    [:a {:class "navbar-brand" :href "/"} "Agendamento Demo"]]
   [:div {:class "collapse navbar-collapse"}
    [:ul {:class "nav navbar-nav"}
     [:li
      [:a {:href "/interactive/agendamentos"} "Agendamento"]]
     [:li
      [:a {:href "/interactive/info"} "Informações"]]
     ]
    (when-not (nil? user)
      [:div {:class "navbar-right"}
       [:p {:class "navbar-text"}
        "Signed in as " [:strong (:full-name user)]]
       [:a {:href "/logout" :class "btn btn-primary navbar-btn"}
        "Logout"]])]])

(defn body
  [user & content]
  [:body
   (navbar user)
   [:div {:class "container"}
    [:div {:class "row"}
     content]]
   [:script {:src "//code.jquery.com/jquery.js"}]
   [:script {:src "/js/bootstrap.min.js"}]])

(defn login-form
  [return has-error]
  [:div {:class "col-lg-6 col-lg-offset-3"}
   (when has-error
     [:div {:class "alert alert-danger alert-dismissable"}
      [:button {:type "button" :class "close" :data-dismiss "alert" :aria-hidden "true"} "&times;"]
      "Usuário e/ou senha inválidos"])
   [:h1 "Área reservada aos remadores."]
   [:form {:method "POST" :action (if return (str "/login?return=" return) "/login") :accept-charset "UTF-8"}
    [:fieldset
     [:legend "Sign in"]
     [:div {:class "form-group"}
      [:label {:for "username" :class "control-label hidden"} "Username"]
      [:input {:type "text" :class "form-control" :id "username" :name "username" :placeholder "Username" :autocomplete "off"}]]
     [:div {:class "form-group"}
      [:label {:for "password" :class "control-label hidden"} "Password"]
      [:input {:type "password" :class "form-control" :id "password" :name "password" :placeholder "Password"}]]
     [:div {:class "form-group"}
      [:button {:type "submit" :class "btn btn-default btn-block"} "Sign in"]]

     ]]])

(defn error-page
  [context]
  (ring-resp/response
    (h/html5 head (body (:user context)
                        [:div {:class "col-lg-8 col-lg-offset-2"}
                         [:h2 (:title context)]
                         [:p (:message context)]]))))

(defn unauthorized
  [request]
  (ring-resp/response
    (h/html5 head (body nil
                        [:div {:class "col-lg-8 col-lg-offset-2"}
                         [:h2 "Unauthorized"]
                         [:p "It looks like there was a problem authenticating you, sir. Please try again."]]))))

(defn home-page
  [request]
  (ring-resp/response
    (h/html5 head (body (get-identity request)
                        [:div {:class "col-lg-8 col-lg-offset-2"}
                         [:p [:a {:href "/"} "Demo Agendamento"]
                          " Esta é uma aplicação para agendamentos. Selecione Agendamento para inciar."
                          ]
                         [:a {:href "/interactive/info" :class "btn btn-primary navbar-btn"}
                          "Agendamento"]
                         ]))))


(defn page-list-agendamento [request]
  (ring-resp/response
    (h/html5 head (body (get-identity request)
                        [:div {:class "col-lg-8 col-lg-offset-2"}
                         [:h2 "Quadro de agendamento"]
                         [:table.table.table-bordered {:class ".table-responsive"}
                          [:thead
                           [:tr
                            [:th "Dia"]
                            [:th "Horário"]
                            [:th "Confirmado"]
                            ]]
                          [:tbody

                           (for [x (remada/listar-remadas-da-semana)]
                             [:tr
                              [:td (first (clojure.string/split (clj-time.format/unparse (clj-time.format/formatter "dd/MM/yyyy hh:mm") (clj-time.coerce/from-date (:remada/diahora x))) #" "))]
                              [:td (second (clojure.string/split (clj-time.format/unparse (clj-time.format/formatter "dd/MM/yyyy hh:mm") (clj-time.coerce/from-date (:remada/diahora x))) #" "))]
                              [:td [:div.checkbox
                                    [:label [:input {:value "", :type "checkbox"}] ""]]]
                              ])

                           ]

                          ]
                         ]))))

(defn interactive-index
  [request]
  (ring-resp/response
    (h/html5 head (body (get-identity request)
                        [:div {:class "col-lg-8 col-lg-offset-2"}
                         [:h2 "Interactive authentication"]
                         [:p "This part of the application demonstrated the interactive authentication flow.
                             You can use one of the known credentials or an external service like GitHub or Google to log in.
                             Below you can find links that lead to the pages with different access level.
                             Geheimtur allows to to hide pages from anonymous users or users that have not enough access rights. "
                          [:strong "admin-restricted-hidden"] " - is an example of such a page, instead of getting \"Access Forbidden\" page "
                          "or being prompted their password, users are shown 404 \"Page Not Found\" in response."]
                         [:div {:class "alert alert-danger"}
                          "If you use GitHub or Google to login into the demo application, for security reasons, don't forget to revoke access to \"Geheimur Application\" when you are done,
                           even though the demo applicaiton does not store obtained access token."]
                         [:p "You can proceed the following ways:"
                          [:ul
                           [:li
                            [:a {:href "/interactive/restricted"} "restricted"] " - open for any authenticated user"]
                           [:li
                            [:a {:href "/interactive/admin-restricted"} "admin-restricted"] " - open for administrators only"]
                           [:li
                            [:a {:href "/interactive/admin-restricted-hidden"} "admin-restricted-hidden"] " - open for administrators and hidden for the rest of the world"]]]]))))

(defn interactive-restricted
  [request]
  (let [identity (get-identity request)]
    (ring-resp/response (h/html5 head (body identity
                                            [:div {:class "col-lg-8 col-lg-offset-2"}
                                             [:h2 "Restricted area"]
                                             [:p "Hello, " (:name identity) "! We are happy you found a way to reach this page. Only real users can achieve such an amazing page!"]])))))

(defn interactive-admin-restricted
  [request]
  (let [identity (get-identity request)]
    (ring-resp/response (h/html5 head (body identity
                                            [:div {:class "col-lg-8 col-lg-offset-2"}
                                             [:h2 "Administrator Only Area"]
                                             [:p "Here is what we know about you: " identity]])))))

(defn interactive-admin-restricted-hidden
  [request]
  (ring-resp/response (h/html5 head (body (get-identity request)
                                          [:div {:class "col-lg-8 col-lg-offset-2"}
                                           [:h2 "Administrator Only Area"]
                                           [:p "This is our most secret area and we wanted to make it really special, so here's the list of all system users:"]
                                           [:ul
                                            (for [rec users
                                                  :let [u (second rec)]]
                                              [:li [:strong (:full-name u)] ": " (:name u) "/" (:password u)])]]))))

(defn login-page
  [{:keys [params] :as request}]
  (let [has-error (contains? params :error)]
    (ring-resp/response (h/html5 head (body (get-identity request) (login-form (:return params) has-error))))))

(defn http-basic-index
  [request]
  (ring-resp/response (h/html5 head (body (get-identity request)
                                          [:div {:class "col-lg-8 col-lg-offset-2"}
                                           [:h2 "HTTP Basic Authentication"]
                                           [:p "This part of the application demonstrated the HTTP Basic authentication flow.
                                               That flow provides the same authorization options as the form-based flow, but instead of redirecting
                                               users to the authentication page, they are prompted for HTTP Basic credentials."]
                                           [:p "If you try to access any restricted area, you will be prompted (by your browser) to enter valid credentials. You can try accessing the following pages:"
                                            [:ul
                                             [:li
                                              [:a {:href "/http-basic/restricted"} "restricted"] " - available to any authenticated user"]
                                             [:li
                                              [:a {:href "/http-basic/admin-restricted"} "admin-restricted"] " - available to administrators only"]
                                             [:li
                                              [:a {:href "/http-basic/admin-restricted-hidden"} "admin-restricted-hidden"] " - available to administrators and hidden for the rest of the world"]]]
                                           [:div {:class "alert alert-warning"}
                                            "Some browsers save HTTP Basic credentials for the duration of the session and resend them automatically, so logging out might not work as expected."]]))))

(defn http-basic-restricted
  [request]
  (let [identity (get-identity request)]
    (ring-resp/response (h/html5 head (body identity
                                            [:div {:class "col-lg-8 col-lg-offset-2"}
                                             [:h2 "HTTP Basic restricted area"]
                                             [:p "Congratulations, " (:full-name identity) ", you successfuly bypassed HTTP Basic authentication!"]])))))

(defn http-basic-admin-restricted
  [request]
  (let [identity (get-identity request)]
    (ring-resp/response (h/html5 head (body identity
                                            [:div {:class "col-lg-8 col-lg-offset-2"}
                                             [:h2 "HTTP Basic Administrator Only Area"]
                                             [:p "Here is what we know about you: " identity]])))))


(defn http-basic-admin-restricted-hidden
  [request]
  (ring-resp/response (h/html5 head (body (get-identity request)
                                          [:div {:class "col-lg-8 col-lg-offset-2"}
                                           [:h2 "HTTP Basic Administrator Only Area"]
                                           [:p "This is our most secret area and we wanted to make it really special, so here's the list of all system users:"]
                                           [:ul
                                            (for [rec users
                                                  :let [u (second rec)]]
                                              [:li [:strong (:full-name u)] ": " (:name u) "/" (:password u)])]]))))


(defn info
  [request]
  (let [identity (get-identity request)]
    (ring-resp/response (h/html5 head (body identity
                                            [:div {:class "col-lg-8 col-lg-offset-2"}
                                             [:h2 "Espaço para informações aos remadores."]
                                             [:p "Olá " (:full-name identity)]
                                             [:ul
                                              [:li
                                               "Lorem ipsum dolor sit amet, vestibulum wisi morbi in tincidunt mi eget, ac in wisi ultricies, nec ad nibh per ut, nunc per nisl vivamus montes, senectus in vestibulum elit. Inceptos rem condimentum arcu lectus metus, commodi arcu purus felis, in suscipit aliquet purus velit ligula. Parturient pede tellus. Iaculis sit lorem felis sit feugiat. Vivamus nec magna. Justo eget pellentesque vehicula quisque et. Cupiditate imperdiet, imperdiet nec est, urna neque sit id quia. Pede dolor cras et, scelerisque mi vivamus. Maecenas lacus a, pulvinar libero, orci eu lectus. Elit mi eu massa eros. Est posuere arcu. Aenean amet vivamus vel, non a semper commodo elit neque lectus, sed pellentesque egestas"
                                               [:br]
                                               [:br]]
                                              [:li
                                               "Tortor sed adipiscing, nunc eu, morbi elit neque ante eros, suspendisse sed, vitae semper nam quis imperdiet vitae nunc. Consectetuer scelerisque torquent, erat tristique dolor ultricies dolor neque felis. Integer at, ac a. Metus ut sapien id nibh dui, urna adipiscing, urna faucibus, lobortis purus sagittis eget vel, ullamcorper semper. Autem pellentesque"
                                               [:br]
                                               [:br]]
                                              [:li
                                               "Massa consectetuer placerat curabitur, est urna viverra, ut sed nulla in mi praesent, ipsum ante justo lacinia sodales velit, suspendisse vitae nulla eleifend molestie. Justo nec. Gravida quisque lorem malesuada, sapien eu, convallis libero elementum volutpat adipiscing, wisi justo luctus tellus vivamus metus scelerisque, dolor eu laborum fringilla augue. Justo eleifend, a dolor elit. Cursus est eget, mauris lorem"
                                               [:br]
                                               [:br]]
                                              [:li
                                               "Tempor rhoncus. Arcu purus, donec convallis, ridiculus tellus ullamcorper, rerum luctus elit, duis eget molestie enim. Erat vitae id, quia lorem a amet, parturient nunc aptent sit sapien mus vehicula, mattis condimentum. In at vehicula justo lorem, praesent wisi ut egestas non ornare, nam nonummy vel ante malesuada, congue lectus. Lorem vulputate imperdiet curabitur. Neque mi libero ac, adipiscing nec. Aliquam sed libero amet nec pellentesque, vel id fringilla, phasellus eget rhoncus, a in dui venenatis. Luctus nam diam elit mollis, vehicula libero maecenas porttitor, aenean elit libero congue sunt justo, a suspendisse vehicula vitae eget fusce. Nibh cras magna, commodo vestibulum in aliquam ante dictum, erat sit non accumsan sed enim, lectus ornare"
                                               [:br]
                                               [:br]]]
                                             ])))))
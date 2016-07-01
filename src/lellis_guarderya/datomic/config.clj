(ns lellis-guarderya.datomic.config
  (:require [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [datomic.api :as d]
            [environ.core :refer [env]])
  (:import (java.io FileNotFoundException PushbackReader)))



(def db-uri
  (env :database-url))

(defn try-read [path]
  (try (with-open [r (io/reader path)]
         (read (PushbackReader. r)))
       (catch FileNotFoundException e nil)))

(defonce #^{:doc "Connection to Datomic"}
         conn (atom nil))

(defn init-conn ([]
                 (log/info "DB URI utilizada" db-uri)
                 (reset! conn (d/connect db-uri)))
  ([url] (log/info "DB URI utilizada" url)
   (reset! conn (d/connect url)))
  )



(ns lellis-guarderya.schedule
  (:require [clojurewerkz.quartzite.scheduler :as qs]
            [clojurewerkz.quartzite.triggers :as t]
            [clojurewerkz.quartzite.jobs :as j]
            [clojurewerkz.quartzite.jobs :refer [defjob]]
            [clojurewerkz.quartzite.schedule.cron :refer [schedule cron-schedule]]
            [datomic.api :as d]
            [lellis-guarderya.datomic.remada :as datomic-remada]
            [lellis-guarderya.datomic.utils :as utils]
            [clojure.tools.logging :as log])
  (:import (java.util Date)))





(defjob criarRemadasDaSemanaJob
        [ctx]
        (do
          (datomic-remada/criar-remadas-da-semana true)
          (comment "Criado as Remadas da semana")))


(defn doJobs []
  (do
    (log/info "Jobs Inicializados")
    (let [s (-> (qs/initialize) qs/start)
          job (j/build
                (j/of-type criarRemadasDaSemanaJob)
                (j/with-identity (j/key "jobs.noop.1")))
          trigger (t/build
                    (t/with-identity (t/key "triggers.1"))
                    (t/start-now)
                    (t/with-schedule (schedule
                                       (cron-schedule "5 0 * ? * SUN")

                                       )))]
      (qs/schedule s job trigger))))
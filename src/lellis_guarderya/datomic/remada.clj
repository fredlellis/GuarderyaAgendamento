(ns lellis-guarderya.datomic.remada
  (:require [datomic.api :as d]
            [clj-time.core :as time]
            [clj-time.local :as local]
            [clj-time.format :as format]
            [clj-time.predicates :as pred]
            [clojure.tools.logging :as log]
            [lellis-guarderya.datomic.config :refer :all]
            [lellis-guarderya.datomic.utils :as utils]
            [lellis-guarderya.datomic.config :as config]
            [lellis-guarderya.datomic.install :as install])
  (:import (org.joda.time DateTimeConstants)))



(def Agenda-DiaHoraDasAulas
  [{:segunda ["6:00"]
    :terca   ["6:00" "7:30"]
    :quarta  ["6:00"]
    :quinta  ["6:00" "7:30"]
    :sexta   ["6:00"]
    :sabado  ["7:00"]}])


(defn criar-remadas-da-semana [admin]
  (let [now (local/local-now)]
    (cond (or (pred/sunday? now) admin)
          (loop [agenda (first Agenda-DiaHoraDasAulas)
                 dia now]
            (if (empty? agenda)
              (log/info "Terminou Criação do Agendamento semanal" agenda)
              (recur
                (dissoc agenda (ffirst agenda))
                (let [novo-dia (time/date-time (time/year dia) (time/month dia) (time/day (time/plus dia (time/days 1))))]
                  (do
                    (doseq [hora (second (first agenda))]
                      (let [hora-split (clojure.string/split hora #":")
                            hora (Integer. (first hora-split))
                            minuto (Integer. (second hora-split))]
                        (utils/install-data [{:remada/gid     (d/squuid)
                                              :remada/diahora (.toDate (time/date-time
                                                                         (time/year novo-dia)
                                                                         (time/month novo-dia)
                                                                         (time/day novo-dia)
                                                                         hora minuto))}])))
                    novo-dia))
                )
              )
            )


          :else (log/error "Não é domingo e nao é admin, possível erro no scheduler.")))
  )

(defn listar-remadas-da-semana []
  (let [inicioDaSemana (.toDate  (clj-time.core/minus (.withDayOfWeek (clj-time.local/local-now) (DateTimeConstants/MONDAY)) (clj-time.core/days 1)))]
    (sort-by :remada/diahora (flatten (d/q '[:find (pull ?e [*])
                                             :in $ ?date
                                             :where [?e :remada/gid]
                                             [?e :remada/diahora ?diahora]
                                             [(> ?diahora ?date )]] (d/db @conn) inicioDaSemana))))
  )

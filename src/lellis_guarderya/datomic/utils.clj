(ns lellis-guarderya.datomic.utils
  (:require [datomic.api :as d]
            [clojure.java.io :as io]
            [datomic-helpers :refer [to-transaction]]
            [lellis-guarderya.datomic.config :as config :refer [conn]]
            [clojure.tools.logging :as log]
            [clj-time.coerce :as time-coerce]
            [clj-time.local :as local]
            [clj-time.format :as formatter])
  (:use [com.rpl.specter])
  (:import datomic.Util
           (java.util Locale)
           (org.joda.time DateTimeZone)))

;(do (d/delete-database "datomic:mem://guarderya") (d/create-database "datomic:mem://guarderya") (config/init-conn "datomic:mem://guarderya") (install/install-schema))

;===============================================================================
; convert utils
;===============================================================================


(defn uuid-from-string [data]
  (java.util.UUID/fromString
    (clojure.string/replace data
                            #"(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})"
                            "$1-$2-$3-$4-$5")))

;===============================================================================
; io utils
;===============================================================================

(defn read-all
  "Read all forms in f, where f is any resource that can
   be opened by io/reader"
  [f]
  (Util/readAll (io/reader f)))

(defn transact-all
  "Load and run all transactions from f, where f is any
   resource that can be opened by io/reader."
  [conn f]
  (doseq [txd (read-all f)]
    (d/transact conn txd))
  :done)

;===============================================================================
; schema utils
;===============================================================================

(defn cardinality
  "Returns the cardinality (:db.cardinality/one or
   :db.cardinality/many) of the attribute"
  [db attr]
  (->>
    (d/q '[:find ?v
           :in $ ?attr
           :where
           [?attr :db/cardinality ?card]
           [?card :db/ident ?v]]
         db attr)
    ffirst))

(defn has-attribute?
  "Does database have an attribute named attr-name?"
  [db attr-name]
  (-> (d/entity db attr-name)
      :db.install/_attribute
      boolean))

(defn has-schema?
  "Does database have a schema named schema-name installed?
   Uses schema-attr (an attribute of transactions!) to track
   which schema names are installed."
  [db schema-attr schema-name]
  (and (has-attribute? db schema-attr)
       (-> (d/q '[:find ?e
                  :in $ ?sa ?sn
                  :where [?e ?sa ?sn]]
                db schema-attr schema-name)
           seq boolean)))

(defn- ensure-schema-attribute
  "Ensure that schema-attr, a keyword-valued attribute used
   as a value on transactions to track named schemas, is
   installed in database."
  [conn schema-attr]
  (when-not (has-attribute? (d/db conn) schema-attr)
    (d/transact conn [{:db/id                 (d/tempid :db.part/db) ;; ver https://github.com/Datomic/day-of-datomic/blob/master/samples/literals_vs_code.clj
                       :db/ident              schema-attr
                       :db/valueType          :db.type/keyword
                       :db/cardinality        :db.cardinality/one
                       :db/doc                "Name of schema installed by this transaction"
                       :db/index              true
                       :db.install/_attribute :db.part/db}])))

(defn ensure-schemas
  "Ensure that schemas are installed.

      schema-attr   a keyword valued attribute of a transaction,
                    naming the schema
      schema-map    a map from schema names to schema installation
                    maps. A schema installation map contains two
                    keys: :txes is the data to install, and :requires
                    is a list of other schema names that must also
                    be installed
      schema-names  the names of schemas to install"
  [conn schema-attr schema-map & schema-names]
  (ensure-schema-attribute conn schema-attr)
  (doseq [schema-name schema-names]
    (if (has-schema? (d/db conn) schema-attr schema-name)
      (println "Schema" schema-name "already installed")
      (let [{:keys [requires txes]} (get schema-map schema-name)]
        (println "Installing schema" schema-name "...")
        (apply ensure-schemas conn schema-attr schema-map requires)
        (if txes
          (doseq [tx txes]
            ;; hrm, could mark the last tx specially
            (d/transact conn (cons {:db/id      (d/tempid :db.part/tx)
                                    schema-attr schema-name}
                                   tx)))
          (throw (ex-info (str "No data provided for schema" schema-name)
                          {:schema/missing schema-name})))))))


;-------------------------------------------------------------------------------------


(def mapa-acentos
  {:á "a"
   :é "e"
   :í "i"
   :ó "o"
   :ú "u"
   :à "a"
   :è "e"
   :ì "i"
   :ò "o"
   :ù "u"
   :ã "a"
   :õ "o"
   :â "a"
   :ê "e"
   :î "i"
   :ô "o"
   :ä "a"
   :ë "e"
   :ï "i"
   :ö "o"
   :ü "u"
   :ç "c"
   :Á "A"
   :É "E"
   :Í "I"
   :Ó "O"
   :Ú "U"
   :À "A"
   :È "E"
   :Ì "I"
   :Ò "O"
   :Ù "U"
   :Ã "A"
   :Õ "O"
   :Â "A"
   :Ê "E"
   :Î "I"
   :Ô "O"
   :Û "U"
   :Ä "A"
   :Ë "E"
   :Ï "I"
   :Ö "O"
   :Ü "U"
   :Ç "C"})

(defn acento-insensitive [string]
  (clojure.string/replace string #"[áéíóúàèìòùãõâêîôôäëïöüçÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÄËÏÖÜÇ]" #(str ((keyword %1) mapa-acentos))))

(defn with-all [db & transactions]
  (reduce #(:db-after (d/with %1 %2))
          db
          transactions))

(defn install-data [data]
  (d/transact @conn (mapcat to-transaction data)))

(defn install-data-audit [data audit-user-facebook-id]
  (d/transact @conn (cons [:db/add (d/tempid :db.part/tx) :usuario/facebook (str audit-user-facebook-id)]
                          (mapcat to-transaction [data]))))



(defn install-data-no-commit [data conn]
  (with-all (d/db @conn) (mapcat to-transaction data)))

(defn apaga-entidade
  ([conn entity-id]
   (d/transact conn [[:db.fn/retractEntity entity-id]]))
  ([vec-key-value]
   (d/transact @conn [[:db.fn/retractEntity vec-key-value]])))

(defn apaga-por-atributo-e-valor [conn atributo valor]
  (empty? (d/q '[:find ?e ?i
                 :in $ ?atributo ?valor
                 :where [?e ?attr ?valor]
                 [?i :db/ident ?atributo]]
               (:db-after @(d/transact conn [[:db.fn/retractEntity [atributo valor]]]))
               atributo
               valor)))


(defn not-has-value [chave value]
  "Returns a predicate that tests whether a map contains a specific value"
  (fn [m]
    (log/debug "Comparando " value " com " (chave m))
    (not (=
           (str value)
           (str (chave m))))))


(defn- comparar-tags [tags-banco tags-chegaram chave]
  (log/debug "Chave para comparar  -> " chave)
  (into [] (flatten (mapv (fn [y]
                            (filter
                              (not-has-value chave (val y))
                              tags-banco))
                          tags-chegaram))))


(defn apagar-entidade [tags-para-remover]
  (map (fn [valor]
         (d/transact @conn [[:db.fn/retractEntity (:db/id valor)]]))
       tags-para-remover))





(defn tags-entidade-para-remover [entidade-banco entidade-local vec-chave-tag]
  (mapv (fn [x]
          (cond (nil? ((first (first x)) entidade-local))
                nil
                :else
                (let [tags-banco (into [] ((first (first x)) entidade-banco))
                      tags-chegaram (reduce into [] ((first (first x)) entidade-local))
                      id-tags (if (empty? tags-chegaram)    ;// APAGA se nao estiver vazio o que chegou ex: :entidade/tags []
                                tags-banco
                                (comparar-tags tags-banco tags-chegaram (second (first x))))
                      apagou (apagar-entidade id-tags)]
                  apagou))) vec-chave-tag))

(defn apagar-enum [entidade-db entidade-enum-key enums]
  (mapv
    (fn [enum]
      (d/transact @conn [[:db/retract (:db/id entidade-db) entidade-enum-key enum]]))
    enums))

(defn enums-para-remover [entidade-db entidade-local chave-enums]
  (mapv (fn [x]
          (let [enums-banco (into [] (x entidade-db))
                enums-chegaram (x entidade-local)
                id-tags (if (empty? enums-chegaram)         ;// APAGA se nao estiver vazio o que chegou ex: :entidade/enums []
                          enums-banco
                          (filter (fn [x] (not (nil? x))) (first (clojure.data/diff (set enums-banco) (set enums-chegaram)))))
                apagou (apagar-enum entidade-db x (into [] id-tags))]
            apagou)) chave-enums))


;; find attributes with AVET unique
(defn find-attributes-with-AVET-unique-in-namespace [db namespace]
  (sort (d/q '[:find [?ident ...]
               :in $ $namespace
               :where
               [?e :db/ident ?ident]
               [?e :db/unique :db.unique/identity]
               [(namespace ?ident) ?ns]
               [(= ?ns $namespace)]
               [_ :db.install/attribute ?e]]
             db
             namespace)))

(defn find-attribute-valueType [db attr]
  (ffirst (d/q '[:find ?value
                 :in $ ?key
                 :where
                 [?e :db/ident ?key]
                 [?e :db/valueType ?valueType]
                 [?valueType :db/ident ?value]
                 [_ :db.install/attribute ?e]]
               db
               attr)))

;; find attributes in the user namespace
(defn find-attributes-in-the-namespace [db namespace]
  (sort (d/q '[:find [?ident ...]
               :in $ $namespace
               :where
               [?e :db/ident ?ident]
               [_ :db.install/attribute ?e]
               [(namespace ?ident) ?ns]
               [(.contains ?ns $namespace)]]
             db
             namespace)))

;; find all reference attributes
(defn find-all-reference-attributes [db]
  (sort (d/q '[:find [?ident ...]
               :where
               [?e :db/ident ?ident]
               [_ :db.install/attribute ?e]
               [?e :db/valueType :db.type/ref]]
             db)))

;; find all attributes that are cardinality-many
(defn find-all-attributes-that-are-cardinality-many-in-namespace [db namespace]
  (sort (d/q '[:find [?ident ...]
               :in $ $namespace
               :where
               [?e :db/ident ?ident]
               [_ :db.install/attribute ?e]
               [(namespace ?ident) ?ns]
               [(= ?ns $namespace)]
               [?e :db/cardinality :db.cardinality/many]]
             db
             namespace)))


(defn find-uuid-atribute-in-namespace [db namespace]
  (sort (d/q '[:find [?ident ...]
               :in $ $namespace
               :where
               [?e :db/ident ?ident]
               [_ :db.install/attribute ?e]
               [(namespace ?ident) ?ns]
               [(= ?ns $namespace)]
               [?e :db/valueType :db.type/uuid]]
             db
             namespace)))

(defn pull-visibilidade-from-unique [db vec]
  (d/pull db '[{:entidade/visibilidade [:visibilidade/atributo :visibilidade/tipo]}] vec))


(defn unique-identifier-squuid [mapa chave]
  "retorna um identificardor unico para ser utilizado como ids de nodes no datomic"
  (if (not (contains? mapa chave))
    (merge mapa {chave (d/squuid)})
    mapa))

(defn gerar-gid [mapa]
  "Metodo que percorre todos os niveis do mapa e gera um GID caso a entidade possua no schema mas nao o tenha ainda"
  (clojure.walk/prewalk (fn [item-walk]
                          (if (map? item-walk)
                            (into {} (map (fn [map-key]
                                            (if-let [namespace-gid (first (find-uuid-atribute-in-namespace (d/db @conn) (namespace map-key)))]
                                              (unique-identifier-squuid item-walk namespace-gid)
                                              item-walk)) (keys item-walk)))
                            item-walk))
                        mapa))


(def date-format
  (formatter/formatter "dd/MM/yyyy"))

(def date-format-dd-mm-yyyy-hh-mm
  (formatter/formatter-local "dd/MM/yyyy HH:mm:ss"))


(defn in?
  "true if coll contains elm"
  [coll elm]
  (some #(= elm %) coll))

(defn convert-type-from-dbType [map]
  (clojure.walk/prewalk (fn [map-item]
                          (cond (map-entry? map-item)
                                (if-let [type (find-attribute-valueType (d/db @conn) (first map-item))]
                                  (case type
                                    :db.type/double [(first map-item) (-> (BigDecimal. (second map-item)) (.setScale 2 (java.math.RoundingMode/HALF_UP)) (.doubleValue))]
                                    :db.type/bigdec [(first map-item) (-> (BigDecimal. (second map-item)) (.setScale 2 (java.math.RoundingMode/HALF_UP)))]
                                    :db.type/instant [(first map-item) (try (time-coerce/to-date (formatter/parse date-format (second map-item))) (catch Exception e "Data inválida"))]
                                    map-item)
                                  map-item)
                                :else map-item)) map))

(defn date-to-string ([map-to-update to-many-key key-to-parse]
                      (cond (contains? map-to-update to-many-key)
                            (assoc map-to-update to-many-key
                                                 (mapv (fn [x] (cond (contains? x key-to-parse)
                                                                     (let [into-map (into {} x)]
                                                                       (update into-map key-to-parse (fn [y] (formatter/unparse date-format (time-coerce/from-long (.getTime (key-to-parse x)))))))
                                                                     :else x)) (to-many-key map-to-update)))
                            :else map-to-update))

  ([map vkeys]
   (clojure.walk/prewalk (fn [map-item]
                           (if (vector? map-item)
                             (if (contains? (into #{} vkeys) (first map-item))
                               [(first map-item) (formatter/unparse date-format (time-coerce/from-long (clj-time.local/to-local-date-time (second map-item))))]
                               map-item)
                             map-item))
                         map))
  ([date]
   (formatter/unparse date-format-dd-mm-yyyy-hh-mm date)))



(defn init-db []
  (try
    (config/init-conn)
    (catch Exception e
      (do
        (println (str "Aguardando banco inicializar" (:failed e)))
        (Thread/sleep 20000)
        (init-db)))))


(defn get-values-from-keys [mapa itens-para-comparar]
  (map (fn [chave-item-para-comparar]
         (select-keys mapa [chave-item-para-comparar]))
       itens-para-comparar))


(defn get-values-to-compare [mapa]
  (into [] (keys (clojure.walk/prewalk (fn [item-walk]
                                         (if (map? item-walk)
                                           (let [namespaces (distinct (mapv (fn [x] (namespace (key x))) item-walk))
                                                 item-walk-many (reduce into [] (into [] (map (fn [namespace-item]
                                                                                                (if-let [entity-to-manys (into [] (find-all-attributes-that-are-cardinality-many-in-namespace (d/db @conn) namespace-item))]
                                                                                                  entity-to-manys)) namespaces)))]
                                             (select-keys item-walk item-walk-many))
                                           item-walk))
                                       mapa))))

(defn update-to-many ([mapa-to-save mapa-db]
                      "Metodo que percorre todos os niveis do mapa e procura por atrobutos to-may para remover os legados do banco"
                      (doall (let [itens-para-comparar (get-values-to-compare mapa-to-save)
                                   itens-para-salvar (get-values-from-keys mapa-to-save itens-para-comparar)
                                   itens-do-banco (get-values-from-keys mapa-db itens-para-comparar)
                                   itens-para-apagar (filter #(not (nil? %)) (second (clojure.data/diff itens-para-salvar itens-do-banco)))]

                               (clojure.walk/prewalk (fn [item-walk]
                                                       (if (not (nil? item-walk))
                                                         (cond (and (vector? item-walk) (keyword? (first item-walk)) (= (name (first item-walk)) "gid"))
                                                               (cond (empty? (select
                                                                               (codewalker
                                                                                 (fn [x] (and (vector? x) (= (second item-walk) (second x)))))
                                                                               itens-para-salvar))
                                                                     (do (log/info "Apagando entidade to-many ->" item-walk)
                                                                         (apaga-entidade item-walk)
                                                                         {:delete true})
                                                                     :else (log/info "ESSA NAO E PRA APAGAR ->" item-walk))
                                                               :else item-walk) item-walk)) itens-para-apagar))))

  ([mapa-to-save mapa-db exception-key & ks]
   "Metodo que percorre todos os niveis do mapa e procura por atrobutos to-may para remover os legados do banco"
   (let [itens-para-comparar (get-values-to-compare (dissoc mapa-to-save exception-key ks))
         itens-para-salvar (get-values-from-keys mapa-to-save itens-para-comparar)
         itens-do-banco (get-values-from-keys mapa-db itens-para-comparar)
         itens-para-apagar (filter #(not (nil? %)) (second (clojure.data/diff itens-para-salvar itens-do-banco)))]

     (clojure.walk/prewalk (fn [item-walk]
                             (if (not (nil? item-walk))
                               (cond (and (vector? item-walk) (keyword? (first item-walk)) (= (name (first item-walk)) "gid"))
                                     (do
                                       (apaga-entidade item-walk)
                                       {:delete true})
                                     :else item-walk) item-walk)) itens-para-apagar))))

(defn find-entity [atributo valor]
  (d/q '[:find ?a
         :in $ ?atributo ?valor
         :where
         [?a ?atributo ?valor]]
       (d/db @conn)
       atributo
       valor))


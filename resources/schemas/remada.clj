{:remada/all
 {:txes
  [[

    ;ID UNICO

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remada/gid
     :db/valueType          :db.type/uuid
     :db/cardinality        :db.cardinality/one
     :db/unique             :db.unique/identity
     :db/index              true
     :db/doc                "Identificador unico do remada"
     :db.install/_attribute :db.part/db}

    ;NOME

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remada/diahora
     :db/valueType          :db.type/instant
     :db/cardinality        :db.cardinality/one
     :db/index              true
     :db/doc                "Dia e Hora da remada"
     :db.install/_attribute :db.part/db}

    ;EMAIL

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remada/remadores
     :db/valueType          :db.type/ref
     :db/cardinality        :db.cardinality/many
     :db/doc                "Remadores que fazem parte desta Remada"
     :db.install/_attribute :db.part/db}


    ]]}}
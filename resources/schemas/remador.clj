{:remador/all
 {:txes
  [[

    ;ID UNICO

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/gid
     :db/valueType          :db.type/uuid
     :db/cardinality        :db.cardinality/one
     :db/unique             :db.unique/identity
     :db/index              true
     :db/doc                "Identificador unico do remador"
     :db.install/_attribute :db.part/db}

    ;NOME

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/nome
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db/fulltext           true
     :db/index              true
     :db/doc                "Nome do remador"
     :db.install/_attribute :db.part/db}

    ;EMAIL

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/email
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db/unique             :db.unique/identity
     :db/fulltext           true
     :db/index              true
     :db/doc                "Email do remador"
     :db.install/_attribute :db.part/db}

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/senha
     :db/valueType          :db.type/string
     :db/cardinality        :db.cardinality/one
     :db/index              true
     :db/doc                "Senha do remador - armazenada criptografada"
     :db.install/_attribute :db.part/db}

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/enderecos
     :db/valueType          :db.type/ref
     :db/cardinality        :db.cardinality/many
     :db/index              true
     :db/isComponent        true
     :db/doc                "Enderecos do remador"
     :db.install/_attribute :db.part/db}

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/emailConfirmado
     :db/valueType          :db.type/boolean
     :db/cardinality        :db.cardinality/one
     :db/doc                "remador ja confirmou o email?"
     :db.install/_attribute :db.part/db}

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/tagsDeInteresse
     :db/valueType          :db.type/ref
     :db/cardinality        :db.cardinality/many
     :db/index              true
     :db/isComponent        true
     :db/doc                "tags que especificam que tipo de evento este remador tem interesse"
     :db.install/_attribute :db.part/db}

    {:db/id                 #db/id[:db.part/db]
     :db/ident              :remador/contatos
     :db/valueType          :db.type/ref
     :db/cardinality        :db.cardinality/many
     :db/index              true
     :db/isComponent        true
     :db/doc                "Contatos do remador"
     :db.install/_attribute :db.part/db}

    ]]}}
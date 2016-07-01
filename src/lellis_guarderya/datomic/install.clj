(ns lellis-guarderya.datomic.install
  "https://github.com/Datomic/day-of-datomic/blob/master/src/datomic/samples/io.clj
   and
   https://github.com/Datomic/day-of-datomic/blob/master/src/datomic/samples/schema.clj"
  (:require [datomic.api :as d]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [datomic-helpers :refer [to-transaction]]
            [lellis-guarderya.resource-utils :as resource]
            [lellis-guarderya.datomic.utils :as utils :refer [install-data install-data-no-commit]]
            [lellis-guarderya.datomic.config :as config :refer [conn db-uri]]
            [lellis-guarderya.datomic.utils :refer [read-all ensure-schemas]]
            [clojure.tools.logging :as log])
  (:import datomic.Util))

;===============================================================================
; install schema and sample data
;===============================================================================

(def path "")
;
;
;(def schema-map-dados-bancarios (first (read-all (io/input-stream (io/resource (str path "schemas/schema-dadosBancarios.edn"))))))
;(def schema-map-caracteristica-produto (first (read-all (io/input-stream (io/resource (str path "schemas/schema-caracteristicaProduto.edn"))))))
;(def schema-map-usuario (first (read-all (io/input-stream (io/resource (str path "schemas/schema-usuario.edn"))))))
;(def schema-map-fornecedor (first (read-all (io/input-stream (io/resource (str path "schemas/schema-fornecedores.edn"))))))
;(def schema-map-contato (first (read-all (io/input-stream (io/resource (str path "schemas/schema-contato.edn"))))))
;(def schema-map-entidade (first (read-all (io/input-stream (io/resource (str path "schemas/schema-entidade.edn"))))))
;(def schema-map-dinheiro (first (read-all (io/input-stream (io/resource (str path "schemas/schema-dinheiro.edn"))))))
;(def schema-map-endereco (first (read-all (io/input-stream (io/resource (str path "schemas/schema-endereco.edn"))))))
;(def schema-map-geojson (first (read-all (io/input-stream (io/resource (str path "schemas/schema-geojson.edn"))))))
;(def schema-map-lista-de-compra (first (read-all (io/input-stream (io/resource (str path "schemas/schema-lista-de-compras.edn"))))))
;(def schema-map-medida (first (read-all (io/input-stream (io/resource (str path "schemas/schema-medida.edn"))))))
;(def schema-map-produto (first (read-all (io/input-stream (io/resource (str path "schemas/schema-produto.edn"))))))
;(def schema-map-tags (first (read-all (io/input-stream (io/resource (str path "schemas/schema-tags.edn"))))))
;(def schema-map-midia-social (first (read-all (io/input-stream (io/resource (str path "schemas/schema-midiaSocial.edn"))))))
;(def schema-map-catalogo (first (read-all (io/input-stream (io/resource (str path "schemas/schema-catalogo.edn"))))))
;(def schema-map-forma-comercializacao (first (read-all (io/input-stream (io/resource (str path "schemas/schema-forma-comercializacao.edn"))))))
;(def schema-map-esquema-preco (first (read-all (io/input-stream (io/resource (str path "schemas/schema-esquema-preco.edn"))))))
;(def schema-map-appFormiguinhas (first (read-all (io/input-stream (io/resource (str path "schemas/schema-appformiguinhas.edn"))))))
;(def schema-map-identificadorNacional (first (read-all (io/input-stream (io/resource (str path "schemas/schema-identificadorNacional.edn"))))))
;(def schema-map-visibilidade (first (read-all (io/input-stream (io/resource (str path "schemas/schema-visibilidade.edn"))))))
;(def schema-map-reajuste (first (read-all (io/input-stream (io/resource (str path "schemas/schema-reajuste-preco.edn"))))))
;(def schema-map-precificacao (first (read-all (io/input-stream (io/resource (str path "schemas/schema-precificacao.edn"))))))
;(def schema-map-tempo (first (read-all (io/input-stream (io/resource (str path "schemas/schema-tempo.edn"))))))
;(def schema-map-foto (first (read-all (io/input-stream (io/resource (str path "schemas/schema-foto.edn"))))))
;
;(def schema-map-validade (first (read-all (io/input-stream (io/resource (str path "schemas/schema-validade.edn"))))))
;;(def data-map-tags (first (read-all (io/input-stream (io/resource (str path "data-tags.edn"))))))
;
;
;(def schema-map-enum (first (read-all (io/input-stream (io/resource (str path "enum/enumsGerais.edn"))))))
;(def schema-map-caracteristica-produto-enum (first (read-all (io/input-stream (io/resource (str path "enum/caracteristicaProduto.edn"))))))
;(def schema-map-tipo-produto-enum (first (read-all (io/input-stream (io/resource (str path "enum/tipoProduto.edn"))))))
;(def schema-map-midia-social-enum (first (read-all (io/input-stream (io/resource (str path "enum/midiaSocial.edn"))))))
;(def schema-map-tipo-fornecedor-enum (first (read-all (io/input-stream (io/resource (str path "enum/tipoFornecedor.edn"))))))
;(def schema-map-embalagem-enum (first (read-all (io/input-stream (io/resource (str path "enum/embalagem.edn"))))))
;(def schema-map-agregador-enum (first (read-all (io/input-stream (io/resource (str path "enum/agregador.edn"))))))
;(def schema-map-tipo-validade-enum (first (read-all (io/input-stream (io/resource (str path "enum/tipoValidade.edn"))))))
;(def schema-map-status-produto-enum (first (read-all (io/input-stream (io/resource (str path "enum/statusProduto.edn"))))))
;(def schema-map-quem-produz-fornecedor-enum (first (read-all (io/input-stream (io/resource (str path "enum/quemProduzFornecedor.edn"))))))







(defn schema-map-schemas [] (map (fn [item] (read-all (io/input-stream (io/resource item)))) (resource/list-resources "schemas/")))

(defn schema-map-enum [] (map (fn [item] (read-all (io/input-stream (io/resource item)))) (resource/list-resources "enum/")))

(defn install-schema []
  (let [schemas (schema-map-schemas)
        ]
    (doall
      (doseq [file-to-install [schemas]]
        (doseq [itens-to-install file-to-install]
          (doseq [item itens-to-install]
            (ensure-schemas @conn (keyword (str "formiguinhas/" (namespace (key (first item))) "-" (name (key (first item))) "-tx-tag")) item (key (first item))))))
      )
    )
  )


;(defn inst all-schema []
;  (do
;    (ensure-schemas @conn :formiguinhas/dados-bancarios-tx-tag schema-map-dados-bancarios :dadosBancarios/all)
;    (ensure-schemas @conn :formiguinhas/usuario-tx-tag schema-map-usuario :usuario/all)
;    (ensure-schemas @conn :formiguinhas/fornecedor-tx-tag schema-map-fornecedor :fornecedor/all)
;
;    (ensure-schemas @conn :formiguinhas/contato-tx-tag schema-map-contato :contato/all)
;    (ensure-schemas @conn :formiguinhas/dinheiro-tx-tag schema-map-dinheiro :dinheiro/all)
;    (ensure-schemas @conn :formiguinhas/entidade-tx-tag schema-map-entidade :entidade/all)
;    (ensure-schemas @conn :formiguinhas/endereco-tx-tag schema-map-endereco :endereco/all)
;    (ensure-schemas @conn :formiguinhas/geojson-tx-tag schema-map-geojson :geojson/all)
;    (ensure-schemas @conn :formiguinhas/lista-de-compra-tx-tag schema-map-lista-de-compra :lista-de-compras/all)
;    (ensure-schemas @conn :formiguinhas/medida-tx-tag schema-map-medida :medida/all)
;    (ensure-schemas @conn :formiguinhas/produto-tx-tag schema-map-produto :produto/all)
;    (ensure-schemas @conn :formiguinhas/tags-tx-tag schema-map-tags :tags/all)
;    (ensure-schemas @conn :formiguinhas/midia-social-tx-tag schema-map-midia-social :midia-social/all)
;    (ensure-schemas @conn :formiguinhas/catalogo-tx-tag schema-map-catalogo :catalogo/all)
;    (ensure-schemas @conn :formiguinhas/forma-comercializacao-tx-tag schema-map-forma-comercializacao :forma-comercializacao/all)
;    (ensure-schemas @conn :formiguinhas/esquema-preco-tx-tag schema-map-esquema-preco :esquemaPreco/all)
;    (ensure-schemas @conn :formiguinhas/caracteristica-produto-preco-tx-tag schema-map-caracteristica-produto :caracteristica-produto/all)
;    (ensure-schemas @conn :formiguinhas/appFormiguinha-preco-tx-tag schema-map-appFormiguinhas :app-formiguinhas/all)
;    (ensure-schemas @conn :formiguinhas/identificadorNacional-tx-tag schema-map-identificadorNacional :identificadorNacional/all)
;    (ensure-schemas @conn :formiguinhas/visibilidade-tx-tag schema-map-visibilidade :visibilidade/all)
;    (ensure-schemas @conn :formiguinhas/reajuste-tx-tag schema-map-reajuste :reajustePreco/all)
;    (ensure-schemas @conn :formiguinhas/precificacao-tx-tag schema-map-precificacao :precificacao/all)
;    (ensure-schemas @conn :formiguinhas/validade-tx-tag schema-map-validade :validade/all)
;    (ensure-schemas @conn :formiguinhas/tempo-tx-tag schema-map-tempo :tempo/all)
;    (ensure-schemas @conn :formiguinhas/foto-tx-tag schema-map-foto :foto/all)
;
;    (ensure-schemas @conn :formiguinhas/dominio-tx-tag schema-map-enum :dominio/all)
;    (ensure-schemas @conn :formiguinhas/dominio-caracteristica-produto-enums-tx-tag schema-map-caracteristica-produto-enum :dominio-caracteristica-produto-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-tipo-produto-enums-tx-tag schema-map-tipo-produto-enum :dominio-tipo-produto-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-midia-social-enum-tx-tag schema-map-midia-social-enum :dominio-midia-social-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-tipo-fornecedor-enum-tx-tag schema-map-tipo-fornecedor-enum :dominio-tipo-fornecedor-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-embalagem-enum-tx-tag schema-map-embalagem-enum :dominio-embalagem-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-agregador-enum-tx-tag schema-map-agregador-enum :dominio-agregador-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-tipo-validade-enum-tx-tag schema-map-tipo-validade-enum :dominio-tipo-validade-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-status-produto-enum-tx-tag schema-map-status-produto-enum :dominio-status-produto-enum/all)
;    (ensure-schemas @conn :formiguinhas/dominio-quem-produz-enum-tx-tag schema-map-quem-produz-fornecedor-enum :dominio-quem-produz-fornecedor-enum/all)))



(defn install-data-dominio []
  (do
    ;(d/transact @conn (mapcat to-transaction data-map-tags))
    ))


(defn wake-schema-in-mem-db []
  (do (d/delete-database "datomic:mem://guarderya") (d/create-database "datomic:mem://guarderya") (config/init-conn "datomic:mem://guarderya") (install-schema)))
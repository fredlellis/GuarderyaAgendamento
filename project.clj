(defproject guarderyaAgendamento "0.0.1-SNAPSHOT"
  :description "Aplicação para registro de Remadas da Guarderya"
  :url ""
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :repositories {"my.datomic.com" {:url      "https://my.datomic.com/repo"
                                   :username "frederico.lellis@gmail.com"
                                   :password "47cd921f-407c-44ee-b86d-726840dfd6ad"}
                 "confluent"      {:url "http://packages.confluent.io/maven/"}}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha34"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]

                 [geheimtur "0.3.0"]
                 [compojure "1.5.1"]

                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/tools.cli "0.3.3"]

                 ;[ch.qos.logback/logback-classic "1.1.2" :exclusions [org.slf4j/slf4j-api]]
                 [clojurewerkz/money "1.6.0"]
                 [clojurewerkz/scrypt "1.2.0"]              ;encryption

                 [hiccup "1.0.5"]

                 [frinj "0.2.5"]                            ;conversão de medidas
                 [io.pedestal/pedestal.service "0.4.1"]
                 ;[io.pedestal/pedestal.service "0.4.1" :exclusions [com.fasterxml.jackson.core/jackson-annotations org.slf4j/log4j-over-slf4j
                 ;org.clojure/core.async org.clojure/tools.analyzer.jvm]]
                 [io.pedestal/pedestal.service-tools "0.4.1"]
                 ;[io.pedestal/pedestal.service-tools "0.4.1" :exclusions [com.fasterxml.jackson.core/jackson-annotations org.slf4j/log4j-over-slf4j org.clojure/tools.reader]] ;; Only needed for ns-watching
                 [io.pedestal/pedestal.jetty "0.4.1"]
                 [io.pedestal/pedestal.immutant "0.4.1"]
                 [io.pedestal/pedestal.tomcat "0.4.1"]
                 [ring "1.4.0"]
                 ;[cheshire "5.5.0" :exclusions [com.fasterxml.jackson.core/jackson-core]]
                 [cheshire "5.6.1"]
                 ;[org.toomuchcode/clara-rules "0.11.1"]      ;rule engine https://github.com/rbrush/clara-rules

                 ;[mysql/mysql-connector-java "5.1.18"]

                 [com.rpl/specter "0.10.0"]

                 ;[com.rpl/specter "0.9.3"]
                 ;[prismatic/plumbing "0.5.3"]
                 [prismatic/schema "1.1.0"]
                 [metosin/schema-tools "0.9.0"]

                 [com.datomic/datomic-pro "0.9.5372" :exclusions [joda-time org.slf4j/slf4j-nop]]

                 [com.amazonaws/aws-java-sdk "1.10.65" :exclusions [org.slf4j/slf4j-nop]]
                 [com.amazonaws/aws-java-sdk-dynamodb "1.10.65" :exclusions [org.slf4j/slf4j-nop]]
                 ;[com.datomic/simulant "0.1.6" :exclusions [com.datomic/datomic-free org.hornetq/hornetq-core org.clojure/test.generative org.apache.lucene/lucene-core]]
                 [datomic-helpers "1.0.0"]

                 ;[incanter/incanter-charts "1.3.0"]
                 ;[incanter/incanter-pdf "1.3.0"]

                 [lein-figwheel "0.5.4-5"]
                 [clojurewerkz/propertied "1.2.0"]
                 [clojurewerkz/quartzite "2.0.0"]

                 [org.apache.httpcomponents/httpclient "4.5.2"]
                 [org.clojure/tools.logging "0.3.1"]
                 ;[geheimtur "0.3.0" :exclusions [com.fasterxml.jackson.core/jackson-annotations]]
                 [geheimtur "0.3.0"]
                 [com.draines/postal "1.11.3"]
                 [clj-http "2.1.0"]
                 [clj-jwt "0.1.1"]
                 [clj-aws-s3 "0.3.10" :exclusions [joda-time com.amazonaws/aws-java-sdk-core]]
                 [clj-time "0.11.0"]                        ;joda-time
                 [environ "1.0.1"]

                 ;[io.confluent/kafka-avro-serializer "2.0.1" :exclusions [org.xerial.snappy/snappy-java]]
                 ;[io.confluent/kafka-schema-registry-client "2.0.1" :exclusions [log4j] ]
                 ;[org.apache.kafka/kafka_2.11 "0.9.0.1-cp1" :exclusions [io.netty/netty net.jpountz.lz4/lz4 log4j]]
                 ; [org.apache.kafka/kafka_2.10 "0.8.2.1"]

                 ;[aero "0.1.5" :exclusions [prismatic/schema]]
                 ;[org.onyxplatform/onyx "0.9.6" :exclusions [com.taoensso/encore prismatic/schema log4j]]
                 ;[org.onyxplatform/onyx-kafka "0.9.6.0" :exclusions [org.apache.kafka/kafka_2.10 org.xerial.snappy/snappy-java prismatic/schema]]
                 ;[org.onyxplatform/onyx-seq "0.9.6.0" :exclusions [io.netty/netty prismatic/schema]]
                 ;[org.onyxplatform/onyx-datomic "0.9.6.0" :exclusions [prismatic/schema]]
                 ;[org.onyxplatform/onyx-sql "0.9.6.0" :exclusions [prismatic/schema]]
                 ;[org.onyxplatform/onyx-durable-queue "0.9.6.0" :exclusions [prismatic/schema]]]
                 ]
  :dev-dependencies [[org.clojure/test.check "0.9.0"]
                     [org.clojure/tools.namespace "0.2.11"]
                     [midje "1.8.3"]]

  :min-lein-version "2.0.0"

  :source-paths ["src"]
  :java-source-paths ["src/main/java"]                      ; Java source is stored separately.
  :test-paths ["test"]
  :resource-paths ["config", "resources"]
  :clean-targets [:target-path "out"]
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main "agendamento.core"}
                        }]
              }
  :profiles {:uberjar {:aot :all}}
  :uberjar {:main        ^{:skip-aot true} [lellis-guarderya.server]
            :omit-source true
            :aot         :all}
  :plugins [[lein-environ "1.0.1"]
            [lein-figwheel "0.5.0-1"]]
  :main lellis-guarderya.server)

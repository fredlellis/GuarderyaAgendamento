{:dev     {:env          {
                          :resource-paths ["config", "resources"]

                          :database-url   "datomic:mem://guarderya"
                          :porta          8181
                          :delete-db      true
                          }
           :dependencies [[io.pedestal/pedestal.service-tools "0.4.1"]
                          [midje "1.8.3"]
                          [org.clojure/test.check "0.9.0"]
                          [org.clojure/tools.namespace "0.2.11"]
                          [prismatic/schema-generators "0.1.0"]
                          [repetition-hunter "1.0.0"]
                          [vvvvalvalval/datomock "0.1.0"]]
           :plugins      [[lein-midje "3.2"]
                          [lein-cloverage "1.0.6"]
                          [jonase/eastwood "0.2.3"]
                          [lein-repetition-hunter "0.1.0-SNAPSHOT"]]
           :source-paths ["env/dev" "src"]}
 :test    {:env            {:delete-db    false
                            :database-url ""
                            :porta        8181
                            }
           :dependencies   [[io.pedestal/pedestal.service-tools "0.4.1"]
                            [midje "1.8.3"]
                            [org.clojure/test.check "0.9.0"]
                            [vvvvalvalval/datomock "0.1.0"]
                            [prismatic/schema-generators "0.1.0"]
                            [org.clojure/tools.namespace "0.2.11"]]
           :plugins        [[lein-midje "3.2"]]
           :resource-paths ["config", "resources"]
           :source-paths   ["env/dev" "src"]}
 :repl    {:env {:delete-db    false
                 :database-url "datomic:mem://guarderya"
                 :jvm-opts     ["-Xmx2g" "-Xms1g" "-XX:MaxPermSize=2g" "-Ddatomic.txTimeoutMsec=300000"]
                 :porta        8181
                 }}
 :prod    {:env {:delete-db    false
                 :aliases      {"run-dev" ["trampoline" "run" "-m" "lellis-guarderya.server/main"]}
                 :jvm-opts     ["-Xmx2g" "-Xms1g" "-Ddatomic.txTimeoutMsec=300000"]
                 :database-url ""
                 }}
 :homolog {:env {:delete-db      false
                 :aliases        {"run-dev" ["trampoline" "run" "-m" "lellis-guarderya.server/main"]}
                 :jvm-opts       ["-Xmx2g" "-Xms1g" "-Ddatomic.txTimeoutMsec=300000"]
                 :resource-paths ["config", "resources"]
                 :porta          1414
                 :database-url   ""
                 }}
 }
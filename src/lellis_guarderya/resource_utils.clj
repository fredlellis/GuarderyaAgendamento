(ns lellis-guarderya.resource-utils
  (:require [clojure.java.io :as io]))



(def ^:private running-jar
  "Resolves the path to the current running jar file."
  (-> :keyword class (.. getProtectionDomain getCodeSource getLocation getPath)))

(defn list-resources [subfolder]
  (let [jar (java.util.jar.JarFile. running-jar)
        entries (.entries jar)
        result (loop [result []]
                 (if (.hasMoreElements entries)
                   (recur (conj result (.. entries nextElement getName)))
                   result))]
    (cond (.contains running-jar "formiguinhas" )
          (rest (into [] (filter #(clojure.string/starts-with? % subfolder) result)))
          :else (into [] (rest (mapv (fn [x] (str subfolder (.getName x)))
                                     (file-seq (io/file (io/resource subfolder)))))))))


(defn list-resource [fileName]
  (let [jar (java.util.jar.JarFile. running-jar)
        entries (.entries jar)
        result (loop [result []]
                 (if (.hasMoreElements entries)
                   (recur (conj result (.. entries nextElement getName)))
                   result))]
    (cond (.contains running-jar "formiguinhas" )
          (rest (into [] (filter #(clojure.string/starts-with? % fileName) result)))
          :else (into [] (rest (mapv (fn [x] (str fileName (.getName x)))
                                     (file-seq (io/file (io/resource fileName)))))))))



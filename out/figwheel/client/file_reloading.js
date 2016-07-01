// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17219__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17219__auto__){
return or__17219__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__17219__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25307_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25307_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25312 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25313 = null;
var count__25314 = (0);
var i__25315 = (0);
while(true){
if((i__25315 < count__25314)){
var n = cljs.core._nth.call(null,chunk__25313,i__25315);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25316 = seq__25312;
var G__25317 = chunk__25313;
var G__25318 = count__25314;
var G__25319 = (i__25315 + (1));
seq__25312 = G__25316;
chunk__25313 = G__25317;
count__25314 = G__25318;
i__25315 = G__25319;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25312);
if(temp__4657__auto__){
var seq__25312__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25312__$1)){
var c__18022__auto__ = cljs.core.chunk_first.call(null,seq__25312__$1);
var G__25320 = cljs.core.chunk_rest.call(null,seq__25312__$1);
var G__25321 = c__18022__auto__;
var G__25322 = cljs.core.count.call(null,c__18022__auto__);
var G__25323 = (0);
seq__25312 = G__25320;
chunk__25313 = G__25321;
count__25314 = G__25322;
i__25315 = G__25323;
continue;
} else {
var n = cljs.core.first.call(null,seq__25312__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25324 = cljs.core.next.call(null,seq__25312__$1);
var G__25325 = null;
var G__25326 = (0);
var G__25327 = (0);
seq__25312 = G__25324;
chunk__25313 = G__25325;
count__25314 = G__25326;
i__25315 = G__25327;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25366_25373 = cljs.core.seq.call(null,deps);
var chunk__25367_25374 = null;
var count__25368_25375 = (0);
var i__25369_25376 = (0);
while(true){
if((i__25369_25376 < count__25368_25375)){
var dep_25377 = cljs.core._nth.call(null,chunk__25367_25374,i__25369_25376);
topo_sort_helper_STAR_.call(null,dep_25377,(depth + (1)),state);

var G__25378 = seq__25366_25373;
var G__25379 = chunk__25367_25374;
var G__25380 = count__25368_25375;
var G__25381 = (i__25369_25376 + (1));
seq__25366_25373 = G__25378;
chunk__25367_25374 = G__25379;
count__25368_25375 = G__25380;
i__25369_25376 = G__25381;
continue;
} else {
var temp__4657__auto___25382 = cljs.core.seq.call(null,seq__25366_25373);
if(temp__4657__auto___25382){
var seq__25366_25383__$1 = temp__4657__auto___25382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25366_25383__$1)){
var c__18022__auto___25384 = cljs.core.chunk_first.call(null,seq__25366_25383__$1);
var G__25385 = cljs.core.chunk_rest.call(null,seq__25366_25383__$1);
var G__25386 = c__18022__auto___25384;
var G__25387 = cljs.core.count.call(null,c__18022__auto___25384);
var G__25388 = (0);
seq__25366_25373 = G__25385;
chunk__25367_25374 = G__25386;
count__25368_25375 = G__25387;
i__25369_25376 = G__25388;
continue;
} else {
var dep_25389 = cljs.core.first.call(null,seq__25366_25383__$1);
topo_sort_helper_STAR_.call(null,dep_25389,(depth + (1)),state);

var G__25390 = cljs.core.next.call(null,seq__25366_25383__$1);
var G__25391 = null;
var G__25392 = (0);
var G__25393 = (0);
seq__25366_25373 = G__25390;
chunk__25367_25374 = G__25391;
count__25368_25375 = G__25392;
i__25369_25376 = G__25393;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25370){
var vec__25372 = p__25370;
var x = cljs.core.nth.call(null,vec__25372,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25372,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25372,x,xs,get_deps__$1){
return (function (p1__25328_SHARP_){
return clojure.set.difference.call(null,p1__25328_SHARP_,x);
});})(vec__25372,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25406 = cljs.core.seq.call(null,provides);
var chunk__25407 = null;
var count__25408 = (0);
var i__25409 = (0);
while(true){
if((i__25409 < count__25408)){
var prov = cljs.core._nth.call(null,chunk__25407,i__25409);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25410_25418 = cljs.core.seq.call(null,requires);
var chunk__25411_25419 = null;
var count__25412_25420 = (0);
var i__25413_25421 = (0);
while(true){
if((i__25413_25421 < count__25412_25420)){
var req_25422 = cljs.core._nth.call(null,chunk__25411_25419,i__25413_25421);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25422,prov);

var G__25423 = seq__25410_25418;
var G__25424 = chunk__25411_25419;
var G__25425 = count__25412_25420;
var G__25426 = (i__25413_25421 + (1));
seq__25410_25418 = G__25423;
chunk__25411_25419 = G__25424;
count__25412_25420 = G__25425;
i__25413_25421 = G__25426;
continue;
} else {
var temp__4657__auto___25427 = cljs.core.seq.call(null,seq__25410_25418);
if(temp__4657__auto___25427){
var seq__25410_25428__$1 = temp__4657__auto___25427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25410_25428__$1)){
var c__18022__auto___25429 = cljs.core.chunk_first.call(null,seq__25410_25428__$1);
var G__25430 = cljs.core.chunk_rest.call(null,seq__25410_25428__$1);
var G__25431 = c__18022__auto___25429;
var G__25432 = cljs.core.count.call(null,c__18022__auto___25429);
var G__25433 = (0);
seq__25410_25418 = G__25430;
chunk__25411_25419 = G__25431;
count__25412_25420 = G__25432;
i__25413_25421 = G__25433;
continue;
} else {
var req_25434 = cljs.core.first.call(null,seq__25410_25428__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25434,prov);

var G__25435 = cljs.core.next.call(null,seq__25410_25428__$1);
var G__25436 = null;
var G__25437 = (0);
var G__25438 = (0);
seq__25410_25418 = G__25435;
chunk__25411_25419 = G__25436;
count__25412_25420 = G__25437;
i__25413_25421 = G__25438;
continue;
}
} else {
}
}
break;
}

var G__25439 = seq__25406;
var G__25440 = chunk__25407;
var G__25441 = count__25408;
var G__25442 = (i__25409 + (1));
seq__25406 = G__25439;
chunk__25407 = G__25440;
count__25408 = G__25441;
i__25409 = G__25442;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25406);
if(temp__4657__auto__){
var seq__25406__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25406__$1)){
var c__18022__auto__ = cljs.core.chunk_first.call(null,seq__25406__$1);
var G__25443 = cljs.core.chunk_rest.call(null,seq__25406__$1);
var G__25444 = c__18022__auto__;
var G__25445 = cljs.core.count.call(null,c__18022__auto__);
var G__25446 = (0);
seq__25406 = G__25443;
chunk__25407 = G__25444;
count__25408 = G__25445;
i__25409 = G__25446;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25406__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25414_25447 = cljs.core.seq.call(null,requires);
var chunk__25415_25448 = null;
var count__25416_25449 = (0);
var i__25417_25450 = (0);
while(true){
if((i__25417_25450 < count__25416_25449)){
var req_25451 = cljs.core._nth.call(null,chunk__25415_25448,i__25417_25450);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25451,prov);

var G__25452 = seq__25414_25447;
var G__25453 = chunk__25415_25448;
var G__25454 = count__25416_25449;
var G__25455 = (i__25417_25450 + (1));
seq__25414_25447 = G__25452;
chunk__25415_25448 = G__25453;
count__25416_25449 = G__25454;
i__25417_25450 = G__25455;
continue;
} else {
var temp__4657__auto___25456__$1 = cljs.core.seq.call(null,seq__25414_25447);
if(temp__4657__auto___25456__$1){
var seq__25414_25457__$1 = temp__4657__auto___25456__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25414_25457__$1)){
var c__18022__auto___25458 = cljs.core.chunk_first.call(null,seq__25414_25457__$1);
var G__25459 = cljs.core.chunk_rest.call(null,seq__25414_25457__$1);
var G__25460 = c__18022__auto___25458;
var G__25461 = cljs.core.count.call(null,c__18022__auto___25458);
var G__25462 = (0);
seq__25414_25447 = G__25459;
chunk__25415_25448 = G__25460;
count__25416_25449 = G__25461;
i__25417_25450 = G__25462;
continue;
} else {
var req_25463 = cljs.core.first.call(null,seq__25414_25457__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25463,prov);

var G__25464 = cljs.core.next.call(null,seq__25414_25457__$1);
var G__25465 = null;
var G__25466 = (0);
var G__25467 = (0);
seq__25414_25447 = G__25464;
chunk__25415_25448 = G__25465;
count__25416_25449 = G__25466;
i__25417_25450 = G__25467;
continue;
}
} else {
}
}
break;
}

var G__25468 = cljs.core.next.call(null,seq__25406__$1);
var G__25469 = null;
var G__25470 = (0);
var G__25471 = (0);
seq__25406 = G__25468;
chunk__25407 = G__25469;
count__25408 = G__25470;
i__25409 = G__25471;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25476_25480 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25477_25481 = null;
var count__25478_25482 = (0);
var i__25479_25483 = (0);
while(true){
if((i__25479_25483 < count__25478_25482)){
var ns_25484 = cljs.core._nth.call(null,chunk__25477_25481,i__25479_25483);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25484);

var G__25485 = seq__25476_25480;
var G__25486 = chunk__25477_25481;
var G__25487 = count__25478_25482;
var G__25488 = (i__25479_25483 + (1));
seq__25476_25480 = G__25485;
chunk__25477_25481 = G__25486;
count__25478_25482 = G__25487;
i__25479_25483 = G__25488;
continue;
} else {
var temp__4657__auto___25489 = cljs.core.seq.call(null,seq__25476_25480);
if(temp__4657__auto___25489){
var seq__25476_25490__$1 = temp__4657__auto___25489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25476_25490__$1)){
var c__18022__auto___25491 = cljs.core.chunk_first.call(null,seq__25476_25490__$1);
var G__25492 = cljs.core.chunk_rest.call(null,seq__25476_25490__$1);
var G__25493 = c__18022__auto___25491;
var G__25494 = cljs.core.count.call(null,c__18022__auto___25491);
var G__25495 = (0);
seq__25476_25480 = G__25492;
chunk__25477_25481 = G__25493;
count__25478_25482 = G__25494;
i__25479_25483 = G__25495;
continue;
} else {
var ns_25496 = cljs.core.first.call(null,seq__25476_25490__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25496);

var G__25497 = cljs.core.next.call(null,seq__25476_25490__$1);
var G__25498 = null;
var G__25499 = (0);
var G__25500 = (0);
seq__25476_25480 = G__25497;
chunk__25477_25481 = G__25498;
count__25478_25482 = G__25499;
i__25479_25483 = G__25500;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__17219__auto__ = goog.require__;
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25501__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25502__i = 0, G__25502__a = new Array(arguments.length -  0);
while (G__25502__i < G__25502__a.length) {G__25502__a[G__25502__i] = arguments[G__25502__i + 0]; ++G__25502__i;}
  args = new cljs.core.IndexedSeq(G__25502__a,0);
} 
return G__25501__delegate.call(this,args);};
G__25501.cljs$lang$maxFixedArity = 0;
G__25501.cljs$lang$applyTo = (function (arglist__25503){
var args = cljs.core.seq(arglist__25503);
return G__25501__delegate(args);
});
G__25501.cljs$core$IFn$_invoke$arity$variadic = G__25501__delegate;
return G__25501;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25505 = cljs.core._EQ_;
var expr__25506 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25505.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25506))){
var path_parts = ((function (pred__25505,expr__25506){
return (function (p1__25504_SHARP_){
return clojure.string.split.call(null,p1__25504_SHARP_,/[\/\\]/);
});})(pred__25505,expr__25506))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25505,expr__25506){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25508){if((e25508 instanceof Error)){
var e = e25508;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25508;

}
}})());
});
;})(path_parts,sep,root,pred__25505,expr__25506))
} else {
if(cljs.core.truth_(pred__25505.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25506))){
return ((function (pred__25505,expr__25506){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25505,expr__25506){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25505,expr__25506))
);

return deferred.addErrback(((function (deferred,pred__25505,expr__25506){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25505,expr__25506))
);
});
;})(pred__25505,expr__25506))
} else {
return ((function (pred__25505,expr__25506){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25505,expr__25506))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25509,callback){
var map__25512 = p__25509;
var map__25512__$1 = ((((!((map__25512 == null)))?((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var file_msg = map__25512__$1;
var request_url = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25512,map__25512__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25512,map__25512__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_25536){
var state_val_25537 = (state_25536[(1)]);
if((state_val_25537 === (7))){
var inst_25532 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
var statearr_25538_25558 = state_25536__$1;
(statearr_25538_25558[(2)] = inst_25532);

(statearr_25538_25558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (1))){
var state_25536__$1 = state_25536;
var statearr_25539_25559 = state_25536__$1;
(statearr_25539_25559[(2)] = null);

(statearr_25539_25559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (4))){
var inst_25516 = (state_25536[(7)]);
var inst_25516__$1 = (state_25536[(2)]);
var state_25536__$1 = (function (){var statearr_25540 = state_25536;
(statearr_25540[(7)] = inst_25516__$1);

return statearr_25540;
})();
if(cljs.core.truth_(inst_25516__$1)){
var statearr_25541_25560 = state_25536__$1;
(statearr_25541_25560[(1)] = (5));

} else {
var statearr_25542_25561 = state_25536__$1;
(statearr_25542_25561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (6))){
var state_25536__$1 = state_25536;
var statearr_25543_25562 = state_25536__$1;
(statearr_25543_25562[(2)] = null);

(statearr_25543_25562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (3))){
var inst_25534 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25536__$1,inst_25534);
} else {
if((state_val_25537 === (2))){
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25536__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25537 === (11))){
var inst_25528 = (state_25536[(2)]);
var state_25536__$1 = (function (){var statearr_25544 = state_25536;
(statearr_25544[(8)] = inst_25528);

return statearr_25544;
})();
var statearr_25545_25563 = state_25536__$1;
(statearr_25545_25563[(2)] = null);

(statearr_25545_25563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (9))){
var inst_25520 = (state_25536[(9)]);
var inst_25522 = (state_25536[(10)]);
var inst_25524 = inst_25522.call(null,inst_25520);
var state_25536__$1 = state_25536;
var statearr_25546_25564 = state_25536__$1;
(statearr_25546_25564[(2)] = inst_25524);

(statearr_25546_25564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (5))){
var inst_25516 = (state_25536[(7)]);
var inst_25518 = figwheel.client.file_reloading.blocking_load.call(null,inst_25516);
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25536__$1,(8),inst_25518);
} else {
if((state_val_25537 === (10))){
var inst_25520 = (state_25536[(9)]);
var inst_25526 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25520);
var state_25536__$1 = state_25536;
var statearr_25547_25565 = state_25536__$1;
(statearr_25547_25565[(2)] = inst_25526);

(statearr_25547_25565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (8))){
var inst_25516 = (state_25536[(7)]);
var inst_25522 = (state_25536[(10)]);
var inst_25520 = (state_25536[(2)]);
var inst_25521 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25522__$1 = cljs.core.get.call(null,inst_25521,inst_25516);
var state_25536__$1 = (function (){var statearr_25548 = state_25536;
(statearr_25548[(9)] = inst_25520);

(statearr_25548[(10)] = inst_25522__$1);

return statearr_25548;
})();
if(cljs.core.truth_(inst_25522__$1)){
var statearr_25549_25566 = state_25536__$1;
(statearr_25549_25566[(1)] = (9));

} else {
var statearr_25550_25567 = state_25536__$1;
(statearr_25550_25567[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22253__auto__ = null;
var figwheel$client$file_reloading$state_machine__22253__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = figwheel$client$file_reloading$state_machine__22253__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var figwheel$client$file_reloading$state_machine__22253__auto____1 = (function (state_25536){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__22256__auto__ = e25555;
var statearr_25556_25568 = state_25536;
(statearr_25556_25568[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25569 = state_25536;
state_25536 = G__25569;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22253__auto__ = function(state_25536){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22253__auto____1.call(this,state_25536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22253__auto____0;
figwheel$client$file_reloading$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22253__auto____1;
return figwheel$client$file_reloading$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_25557 = f__22365__auto__.call(null);
(statearr_25557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25570,callback){
var map__25573 = p__25570;
var map__25573__$1 = ((((!((map__25573 == null)))?((((map__25573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);
var file_msg = map__25573__$1;
var namespace = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25573,map__25573__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25573,map__25573__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25575){
var map__25578 = p__25575;
var map__25578__$1 = ((((!((map__25578 == null)))?((((map__25578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25578):map__25578);
var file_msg = map__25578__$1;
var namespace = cljs.core.get.call(null,map__25578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17207__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17207__auto__){
var or__17219__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
var or__17219__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17219__auto____$1)){
return or__17219__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17207__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25580,callback){
var map__25583 = p__25580;
var map__25583__$1 = ((((!((map__25583 == null)))?((((map__25583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25583):map__25583);
var file_msg = map__25583__$1;
var request_url = cljs.core.get.call(null,map__25583__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22364__auto___25671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___25671,out){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___25671,out){
return (function (state_25653){
var state_val_25654 = (state_25653[(1)]);
if((state_val_25654 === (1))){
var inst_25631 = cljs.core.nth.call(null,files,(0),null);
var inst_25632 = cljs.core.nthnext.call(null,files,(1));
var inst_25633 = files;
var state_25653__$1 = (function (){var statearr_25655 = state_25653;
(statearr_25655[(7)] = inst_25631);

(statearr_25655[(8)] = inst_25633);

(statearr_25655[(9)] = inst_25632);

return statearr_25655;
})();
var statearr_25656_25672 = state_25653__$1;
(statearr_25656_25672[(2)] = null);

(statearr_25656_25672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (2))){
var inst_25633 = (state_25653[(8)]);
var inst_25636 = (state_25653[(10)]);
var inst_25636__$1 = cljs.core.nth.call(null,inst_25633,(0),null);
var inst_25637 = cljs.core.nthnext.call(null,inst_25633,(1));
var inst_25638 = (inst_25636__$1 == null);
var inst_25639 = cljs.core.not.call(null,inst_25638);
var state_25653__$1 = (function (){var statearr_25657 = state_25653;
(statearr_25657[(11)] = inst_25637);

(statearr_25657[(10)] = inst_25636__$1);

return statearr_25657;
})();
if(inst_25639){
var statearr_25658_25673 = state_25653__$1;
(statearr_25658_25673[(1)] = (4));

} else {
var statearr_25659_25674 = state_25653__$1;
(statearr_25659_25674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (3))){
var inst_25651 = (state_25653[(2)]);
var state_25653__$1 = state_25653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25653__$1,inst_25651);
} else {
if((state_val_25654 === (4))){
var inst_25636 = (state_25653[(10)]);
var inst_25641 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25636);
var state_25653__$1 = state_25653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25653__$1,(7),inst_25641);
} else {
if((state_val_25654 === (5))){
var inst_25647 = cljs.core.async.close_BANG_.call(null,out);
var state_25653__$1 = state_25653;
var statearr_25660_25675 = state_25653__$1;
(statearr_25660_25675[(2)] = inst_25647);

(statearr_25660_25675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (6))){
var inst_25649 = (state_25653[(2)]);
var state_25653__$1 = state_25653;
var statearr_25661_25676 = state_25653__$1;
(statearr_25661_25676[(2)] = inst_25649);

(statearr_25661_25676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25654 === (7))){
var inst_25637 = (state_25653[(11)]);
var inst_25643 = (state_25653[(2)]);
var inst_25644 = cljs.core.async.put_BANG_.call(null,out,inst_25643);
var inst_25633 = inst_25637;
var state_25653__$1 = (function (){var statearr_25662 = state_25653;
(statearr_25662[(12)] = inst_25644);

(statearr_25662[(8)] = inst_25633);

return statearr_25662;
})();
var statearr_25663_25677 = state_25653__$1;
(statearr_25663_25677[(2)] = null);

(statearr_25663_25677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22364__auto___25671,out))
;
return ((function (switch__22252__auto__,c__22364__auto___25671,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto____0 = (function (){
var statearr_25667 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25667[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto__);

(statearr_25667[(1)] = (1));

return statearr_25667;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto____1 = (function (state_25653){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25668){if((e25668 instanceof Object)){
var ex__22256__auto__ = e25668;
var statearr_25669_25678 = state_25653;
(statearr_25669_25678[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25679 = state_25653;
state_25653 = G__25679;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto__ = function(state_25653){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto____1.call(this,state_25653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___25671,out))
})();
var state__22366__auto__ = (function (){var statearr_25670 = f__22365__auto__.call(null);
(statearr_25670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___25671);

return statearr_25670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___25671,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25680,opts){
var map__25684 = p__25680;
var map__25684__$1 = ((((!((map__25684 == null)))?((((map__25684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25684):map__25684);
var eval_body__$1 = cljs.core.get.call(null,map__25684__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25684__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17207__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17207__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17207__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25686){var e = e25686;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25687_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25687_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25692){
var vec__25693 = p__25692;
var k = cljs.core.nth.call(null,vec__25693,(0),null);
var v = cljs.core.nth.call(null,vec__25693,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25694){
var vec__25695 = p__25694;
var k = cljs.core.nth.call(null,vec__25695,(0),null);
var v = cljs.core.nth.call(null,vec__25695,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25699,p__25700){
var map__25947 = p__25699;
var map__25947__$1 = ((((!((map__25947 == null)))?((((map__25947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25947):map__25947);
var opts = map__25947__$1;
var before_jsload = cljs.core.get.call(null,map__25947__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25947__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25947__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25948 = p__25700;
var map__25948__$1 = ((((!((map__25948 == null)))?((((map__25948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25948):map__25948);
var msg = map__25948__$1;
var files = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25948__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26101){
var state_val_26102 = (state_26101[(1)]);
if((state_val_26102 === (7))){
var inst_25964 = (state_26101[(7)]);
var inst_25962 = (state_26101[(8)]);
var inst_25965 = (state_26101[(9)]);
var inst_25963 = (state_26101[(10)]);
var inst_25970 = cljs.core._nth.call(null,inst_25963,inst_25965);
var inst_25971 = figwheel.client.file_reloading.eval_body.call(null,inst_25970,opts);
var inst_25972 = (inst_25965 + (1));
var tmp26103 = inst_25964;
var tmp26104 = inst_25962;
var tmp26105 = inst_25963;
var inst_25962__$1 = tmp26104;
var inst_25963__$1 = tmp26105;
var inst_25964__$1 = tmp26103;
var inst_25965__$1 = inst_25972;
var state_26101__$1 = (function (){var statearr_26106 = state_26101;
(statearr_26106[(7)] = inst_25964__$1);

(statearr_26106[(8)] = inst_25962__$1);

(statearr_26106[(9)] = inst_25965__$1);

(statearr_26106[(10)] = inst_25963__$1);

(statearr_26106[(11)] = inst_25971);

return statearr_26106;
})();
var statearr_26107_26193 = state_26101__$1;
(statearr_26107_26193[(2)] = null);

(statearr_26107_26193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (20))){
var inst_26005 = (state_26101[(12)]);
var inst_26013 = figwheel.client.file_reloading.sort_files.call(null,inst_26005);
var state_26101__$1 = state_26101;
var statearr_26108_26194 = state_26101__$1;
(statearr_26108_26194[(2)] = inst_26013);

(statearr_26108_26194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (27))){
var state_26101__$1 = state_26101;
var statearr_26109_26195 = state_26101__$1;
(statearr_26109_26195[(2)] = null);

(statearr_26109_26195[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (1))){
var inst_25954 = (state_26101[(13)]);
var inst_25951 = before_jsload.call(null,files);
var inst_25952 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25953 = (function (){return ((function (inst_25954,inst_25951,inst_25952,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25696_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25696_SHARP_);
});
;})(inst_25954,inst_25951,inst_25952,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25954__$1 = cljs.core.filter.call(null,inst_25953,files);
var inst_25955 = cljs.core.not_empty.call(null,inst_25954__$1);
var state_26101__$1 = (function (){var statearr_26110 = state_26101;
(statearr_26110[(13)] = inst_25954__$1);

(statearr_26110[(14)] = inst_25951);

(statearr_26110[(15)] = inst_25952);

return statearr_26110;
})();
if(cljs.core.truth_(inst_25955)){
var statearr_26111_26196 = state_26101__$1;
(statearr_26111_26196[(1)] = (2));

} else {
var statearr_26112_26197 = state_26101__$1;
(statearr_26112_26197[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (24))){
var state_26101__$1 = state_26101;
var statearr_26113_26198 = state_26101__$1;
(statearr_26113_26198[(2)] = null);

(statearr_26113_26198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (39))){
var inst_26055 = (state_26101[(16)]);
var state_26101__$1 = state_26101;
var statearr_26114_26199 = state_26101__$1;
(statearr_26114_26199[(2)] = inst_26055);

(statearr_26114_26199[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (46))){
var inst_26096 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
var statearr_26115_26200 = state_26101__$1;
(statearr_26115_26200[(2)] = inst_26096);

(statearr_26115_26200[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (4))){
var inst_25999 = (state_26101[(2)]);
var inst_26000 = cljs.core.List.EMPTY;
var inst_26001 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26000);
var inst_26002 = (function (){return ((function (inst_25999,inst_26000,inst_26001,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25697_SHARP_){
var and__17207__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25697_SHARP_);
if(cljs.core.truth_(and__17207__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25697_SHARP_));
} else {
return and__17207__auto__;
}
});
;})(inst_25999,inst_26000,inst_26001,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26003 = cljs.core.filter.call(null,inst_26002,files);
var inst_26004 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26005 = cljs.core.concat.call(null,inst_26003,inst_26004);
var state_26101__$1 = (function (){var statearr_26116 = state_26101;
(statearr_26116[(17)] = inst_25999);

(statearr_26116[(18)] = inst_26001);

(statearr_26116[(12)] = inst_26005);

return statearr_26116;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26117_26201 = state_26101__$1;
(statearr_26117_26201[(1)] = (16));

} else {
var statearr_26118_26202 = state_26101__$1;
(statearr_26118_26202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (15))){
var inst_25989 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
var statearr_26119_26203 = state_26101__$1;
(statearr_26119_26203[(2)] = inst_25989);

(statearr_26119_26203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (21))){
var inst_26015 = (state_26101[(19)]);
var inst_26015__$1 = (state_26101[(2)]);
var inst_26016 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26015__$1);
var state_26101__$1 = (function (){var statearr_26120 = state_26101;
(statearr_26120[(19)] = inst_26015__$1);

return statearr_26120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26101__$1,(22),inst_26016);
} else {
if((state_val_26102 === (31))){
var inst_26099 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26101__$1,inst_26099);
} else {
if((state_val_26102 === (32))){
var inst_26055 = (state_26101[(16)]);
var inst_26060 = inst_26055.cljs$lang$protocol_mask$partition0$;
var inst_26061 = (inst_26060 & (64));
var inst_26062 = inst_26055.cljs$core$ISeq$;
var inst_26063 = (inst_26061) || (inst_26062);
var state_26101__$1 = state_26101;
if(cljs.core.truth_(inst_26063)){
var statearr_26121_26204 = state_26101__$1;
(statearr_26121_26204[(1)] = (35));

} else {
var statearr_26122_26205 = state_26101__$1;
(statearr_26122_26205[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (40))){
var inst_26076 = (state_26101[(20)]);
var inst_26075 = (state_26101[(2)]);
var inst_26076__$1 = cljs.core.get.call(null,inst_26075,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26077 = cljs.core.get.call(null,inst_26075,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26078 = cljs.core.not_empty.call(null,inst_26076__$1);
var state_26101__$1 = (function (){var statearr_26123 = state_26101;
(statearr_26123[(20)] = inst_26076__$1);

(statearr_26123[(21)] = inst_26077);

return statearr_26123;
})();
if(cljs.core.truth_(inst_26078)){
var statearr_26124_26206 = state_26101__$1;
(statearr_26124_26206[(1)] = (41));

} else {
var statearr_26125_26207 = state_26101__$1;
(statearr_26125_26207[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (33))){
var state_26101__$1 = state_26101;
var statearr_26126_26208 = state_26101__$1;
(statearr_26126_26208[(2)] = false);

(statearr_26126_26208[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (13))){
var inst_25975 = (state_26101[(22)]);
var inst_25979 = cljs.core.chunk_first.call(null,inst_25975);
var inst_25980 = cljs.core.chunk_rest.call(null,inst_25975);
var inst_25981 = cljs.core.count.call(null,inst_25979);
var inst_25962 = inst_25980;
var inst_25963 = inst_25979;
var inst_25964 = inst_25981;
var inst_25965 = (0);
var state_26101__$1 = (function (){var statearr_26127 = state_26101;
(statearr_26127[(7)] = inst_25964);

(statearr_26127[(8)] = inst_25962);

(statearr_26127[(9)] = inst_25965);

(statearr_26127[(10)] = inst_25963);

return statearr_26127;
})();
var statearr_26128_26209 = state_26101__$1;
(statearr_26128_26209[(2)] = null);

(statearr_26128_26209[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (22))){
var inst_26018 = (state_26101[(23)]);
var inst_26023 = (state_26101[(24)]);
var inst_26015 = (state_26101[(19)]);
var inst_26019 = (state_26101[(25)]);
var inst_26018__$1 = (state_26101[(2)]);
var inst_26019__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26018__$1);
var inst_26020 = (function (){var all_files = inst_26015;
var res_SINGLEQUOTE_ = inst_26018__$1;
var res = inst_26019__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26018,inst_26023,inst_26015,inst_26019,inst_26018__$1,inst_26019__$1,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25698_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25698_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26018,inst_26023,inst_26015,inst_26019,inst_26018__$1,inst_26019__$1,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26021 = cljs.core.filter.call(null,inst_26020,inst_26018__$1);
var inst_26022 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26023__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26022);
var inst_26024 = cljs.core.not_empty.call(null,inst_26023__$1);
var state_26101__$1 = (function (){var statearr_26129 = state_26101;
(statearr_26129[(23)] = inst_26018__$1);

(statearr_26129[(24)] = inst_26023__$1);

(statearr_26129[(25)] = inst_26019__$1);

(statearr_26129[(26)] = inst_26021);

return statearr_26129;
})();
if(cljs.core.truth_(inst_26024)){
var statearr_26130_26210 = state_26101__$1;
(statearr_26130_26210[(1)] = (23));

} else {
var statearr_26131_26211 = state_26101__$1;
(statearr_26131_26211[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (36))){
var state_26101__$1 = state_26101;
var statearr_26132_26212 = state_26101__$1;
(statearr_26132_26212[(2)] = false);

(statearr_26132_26212[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (41))){
var inst_26076 = (state_26101[(20)]);
var inst_26080 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26081 = cljs.core.map.call(null,inst_26080,inst_26076);
var inst_26082 = cljs.core.pr_str.call(null,inst_26081);
var inst_26083 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26082)].join('');
var inst_26084 = figwheel.client.utils.log.call(null,inst_26083);
var state_26101__$1 = state_26101;
var statearr_26133_26213 = state_26101__$1;
(statearr_26133_26213[(2)] = inst_26084);

(statearr_26133_26213[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (43))){
var inst_26077 = (state_26101[(21)]);
var inst_26087 = (state_26101[(2)]);
var inst_26088 = cljs.core.not_empty.call(null,inst_26077);
var state_26101__$1 = (function (){var statearr_26134 = state_26101;
(statearr_26134[(27)] = inst_26087);

return statearr_26134;
})();
if(cljs.core.truth_(inst_26088)){
var statearr_26135_26214 = state_26101__$1;
(statearr_26135_26214[(1)] = (44));

} else {
var statearr_26136_26215 = state_26101__$1;
(statearr_26136_26215[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (29))){
var inst_26018 = (state_26101[(23)]);
var inst_26023 = (state_26101[(24)]);
var inst_26015 = (state_26101[(19)]);
var inst_26019 = (state_26101[(25)]);
var inst_26055 = (state_26101[(16)]);
var inst_26021 = (state_26101[(26)]);
var inst_26051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26054 = (function (){var all_files = inst_26015;
var res_SINGLEQUOTE_ = inst_26018;
var res = inst_26019;
var files_not_loaded = inst_26021;
var dependencies_that_loaded = inst_26023;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26055,inst_26021,inst_26051,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26053){
var map__26137 = p__26053;
var map__26137__$1 = ((((!((map__26137 == null)))?((((map__26137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26137):map__26137);
var namespace = cljs.core.get.call(null,map__26137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26055,inst_26021,inst_26051,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26055__$1 = cljs.core.group_by.call(null,inst_26054,inst_26021);
var inst_26057 = (inst_26055__$1 == null);
var inst_26058 = cljs.core.not.call(null,inst_26057);
var state_26101__$1 = (function (){var statearr_26139 = state_26101;
(statearr_26139[(28)] = inst_26051);

(statearr_26139[(16)] = inst_26055__$1);

return statearr_26139;
})();
if(inst_26058){
var statearr_26140_26216 = state_26101__$1;
(statearr_26140_26216[(1)] = (32));

} else {
var statearr_26141_26217 = state_26101__$1;
(statearr_26141_26217[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (44))){
var inst_26077 = (state_26101[(21)]);
var inst_26090 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26077);
var inst_26091 = cljs.core.pr_str.call(null,inst_26090);
var inst_26092 = [cljs.core.str("not required: "),cljs.core.str(inst_26091)].join('');
var inst_26093 = figwheel.client.utils.log.call(null,inst_26092);
var state_26101__$1 = state_26101;
var statearr_26142_26218 = state_26101__$1;
(statearr_26142_26218[(2)] = inst_26093);

(statearr_26142_26218[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (6))){
var inst_25996 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
var statearr_26143_26219 = state_26101__$1;
(statearr_26143_26219[(2)] = inst_25996);

(statearr_26143_26219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (28))){
var inst_26021 = (state_26101[(26)]);
var inst_26048 = (state_26101[(2)]);
var inst_26049 = cljs.core.not_empty.call(null,inst_26021);
var state_26101__$1 = (function (){var statearr_26144 = state_26101;
(statearr_26144[(29)] = inst_26048);

return statearr_26144;
})();
if(cljs.core.truth_(inst_26049)){
var statearr_26145_26220 = state_26101__$1;
(statearr_26145_26220[(1)] = (29));

} else {
var statearr_26146_26221 = state_26101__$1;
(statearr_26146_26221[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (25))){
var inst_26019 = (state_26101[(25)]);
var inst_26035 = (state_26101[(2)]);
var inst_26036 = cljs.core.not_empty.call(null,inst_26019);
var state_26101__$1 = (function (){var statearr_26147 = state_26101;
(statearr_26147[(30)] = inst_26035);

return statearr_26147;
})();
if(cljs.core.truth_(inst_26036)){
var statearr_26148_26222 = state_26101__$1;
(statearr_26148_26222[(1)] = (26));

} else {
var statearr_26149_26223 = state_26101__$1;
(statearr_26149_26223[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (34))){
var inst_26070 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
if(cljs.core.truth_(inst_26070)){
var statearr_26150_26224 = state_26101__$1;
(statearr_26150_26224[(1)] = (38));

} else {
var statearr_26151_26225 = state_26101__$1;
(statearr_26151_26225[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (17))){
var state_26101__$1 = state_26101;
var statearr_26152_26226 = state_26101__$1;
(statearr_26152_26226[(2)] = recompile_dependents);

(statearr_26152_26226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (3))){
var state_26101__$1 = state_26101;
var statearr_26153_26227 = state_26101__$1;
(statearr_26153_26227[(2)] = null);

(statearr_26153_26227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (12))){
var inst_25992 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
var statearr_26154_26228 = state_26101__$1;
(statearr_26154_26228[(2)] = inst_25992);

(statearr_26154_26228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (2))){
var inst_25954 = (state_26101[(13)]);
var inst_25961 = cljs.core.seq.call(null,inst_25954);
var inst_25962 = inst_25961;
var inst_25963 = null;
var inst_25964 = (0);
var inst_25965 = (0);
var state_26101__$1 = (function (){var statearr_26155 = state_26101;
(statearr_26155[(7)] = inst_25964);

(statearr_26155[(8)] = inst_25962);

(statearr_26155[(9)] = inst_25965);

(statearr_26155[(10)] = inst_25963);

return statearr_26155;
})();
var statearr_26156_26229 = state_26101__$1;
(statearr_26156_26229[(2)] = null);

(statearr_26156_26229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (23))){
var inst_26018 = (state_26101[(23)]);
var inst_26023 = (state_26101[(24)]);
var inst_26015 = (state_26101[(19)]);
var inst_26019 = (state_26101[(25)]);
var inst_26021 = (state_26101[(26)]);
var inst_26026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26028 = (function (){var all_files = inst_26015;
var res_SINGLEQUOTE_ = inst_26018;
var res = inst_26019;
var files_not_loaded = inst_26021;
var dependencies_that_loaded = inst_26023;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26021,inst_26026,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26027){
var map__26157 = p__26027;
var map__26157__$1 = ((((!((map__26157 == null)))?((((map__26157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26157):map__26157);
var request_url = cljs.core.get.call(null,map__26157__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26021,inst_26026,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26029 = cljs.core.reverse.call(null,inst_26023);
var inst_26030 = cljs.core.map.call(null,inst_26028,inst_26029);
var inst_26031 = cljs.core.pr_str.call(null,inst_26030);
var inst_26032 = figwheel.client.utils.log.call(null,inst_26031);
var state_26101__$1 = (function (){var statearr_26159 = state_26101;
(statearr_26159[(31)] = inst_26026);

return statearr_26159;
})();
var statearr_26160_26230 = state_26101__$1;
(statearr_26160_26230[(2)] = inst_26032);

(statearr_26160_26230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (35))){
var state_26101__$1 = state_26101;
var statearr_26161_26231 = state_26101__$1;
(statearr_26161_26231[(2)] = true);

(statearr_26161_26231[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (19))){
var inst_26005 = (state_26101[(12)]);
var inst_26011 = figwheel.client.file_reloading.expand_files.call(null,inst_26005);
var state_26101__$1 = state_26101;
var statearr_26162_26232 = state_26101__$1;
(statearr_26162_26232[(2)] = inst_26011);

(statearr_26162_26232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (11))){
var state_26101__$1 = state_26101;
var statearr_26163_26233 = state_26101__$1;
(statearr_26163_26233[(2)] = null);

(statearr_26163_26233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (9))){
var inst_25994 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
var statearr_26164_26234 = state_26101__$1;
(statearr_26164_26234[(2)] = inst_25994);

(statearr_26164_26234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (5))){
var inst_25964 = (state_26101[(7)]);
var inst_25965 = (state_26101[(9)]);
var inst_25967 = (inst_25965 < inst_25964);
var inst_25968 = inst_25967;
var state_26101__$1 = state_26101;
if(cljs.core.truth_(inst_25968)){
var statearr_26165_26235 = state_26101__$1;
(statearr_26165_26235[(1)] = (7));

} else {
var statearr_26166_26236 = state_26101__$1;
(statearr_26166_26236[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (14))){
var inst_25975 = (state_26101[(22)]);
var inst_25984 = cljs.core.first.call(null,inst_25975);
var inst_25985 = figwheel.client.file_reloading.eval_body.call(null,inst_25984,opts);
var inst_25986 = cljs.core.next.call(null,inst_25975);
var inst_25962 = inst_25986;
var inst_25963 = null;
var inst_25964 = (0);
var inst_25965 = (0);
var state_26101__$1 = (function (){var statearr_26167 = state_26101;
(statearr_26167[(7)] = inst_25964);

(statearr_26167[(8)] = inst_25962);

(statearr_26167[(32)] = inst_25985);

(statearr_26167[(9)] = inst_25965);

(statearr_26167[(10)] = inst_25963);

return statearr_26167;
})();
var statearr_26168_26237 = state_26101__$1;
(statearr_26168_26237[(2)] = null);

(statearr_26168_26237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (45))){
var state_26101__$1 = state_26101;
var statearr_26169_26238 = state_26101__$1;
(statearr_26169_26238[(2)] = null);

(statearr_26169_26238[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (26))){
var inst_26018 = (state_26101[(23)]);
var inst_26023 = (state_26101[(24)]);
var inst_26015 = (state_26101[(19)]);
var inst_26019 = (state_26101[(25)]);
var inst_26021 = (state_26101[(26)]);
var inst_26038 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26040 = (function (){var all_files = inst_26015;
var res_SINGLEQUOTE_ = inst_26018;
var res = inst_26019;
var files_not_loaded = inst_26021;
var dependencies_that_loaded = inst_26023;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26021,inst_26038,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26039){
var map__26170 = p__26039;
var map__26170__$1 = ((((!((map__26170 == null)))?((((map__26170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26170):map__26170);
var namespace = cljs.core.get.call(null,map__26170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26021,inst_26038,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26041 = cljs.core.map.call(null,inst_26040,inst_26019);
var inst_26042 = cljs.core.pr_str.call(null,inst_26041);
var inst_26043 = figwheel.client.utils.log.call(null,inst_26042);
var inst_26044 = (function (){var all_files = inst_26015;
var res_SINGLEQUOTE_ = inst_26018;
var res = inst_26019;
var files_not_loaded = inst_26021;
var dependencies_that_loaded = inst_26023;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26021,inst_26038,inst_26040,inst_26041,inst_26042,inst_26043,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26018,inst_26023,inst_26015,inst_26019,inst_26021,inst_26038,inst_26040,inst_26041,inst_26042,inst_26043,state_val_26102,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26045 = setTimeout(inst_26044,(10));
var state_26101__$1 = (function (){var statearr_26172 = state_26101;
(statearr_26172[(33)] = inst_26038);

(statearr_26172[(34)] = inst_26043);

return statearr_26172;
})();
var statearr_26173_26239 = state_26101__$1;
(statearr_26173_26239[(2)] = inst_26045);

(statearr_26173_26239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (16))){
var state_26101__$1 = state_26101;
var statearr_26174_26240 = state_26101__$1;
(statearr_26174_26240[(2)] = reload_dependents);

(statearr_26174_26240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (38))){
var inst_26055 = (state_26101[(16)]);
var inst_26072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26055);
var state_26101__$1 = state_26101;
var statearr_26175_26241 = state_26101__$1;
(statearr_26175_26241[(2)] = inst_26072);

(statearr_26175_26241[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (30))){
var state_26101__$1 = state_26101;
var statearr_26176_26242 = state_26101__$1;
(statearr_26176_26242[(2)] = null);

(statearr_26176_26242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (10))){
var inst_25975 = (state_26101[(22)]);
var inst_25977 = cljs.core.chunked_seq_QMARK_.call(null,inst_25975);
var state_26101__$1 = state_26101;
if(inst_25977){
var statearr_26177_26243 = state_26101__$1;
(statearr_26177_26243[(1)] = (13));

} else {
var statearr_26178_26244 = state_26101__$1;
(statearr_26178_26244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (18))){
var inst_26009 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
if(cljs.core.truth_(inst_26009)){
var statearr_26179_26245 = state_26101__$1;
(statearr_26179_26245[(1)] = (19));

} else {
var statearr_26180_26246 = state_26101__$1;
(statearr_26180_26246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (42))){
var state_26101__$1 = state_26101;
var statearr_26181_26247 = state_26101__$1;
(statearr_26181_26247[(2)] = null);

(statearr_26181_26247[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (37))){
var inst_26067 = (state_26101[(2)]);
var state_26101__$1 = state_26101;
var statearr_26182_26248 = state_26101__$1;
(statearr_26182_26248[(2)] = inst_26067);

(statearr_26182_26248[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26102 === (8))){
var inst_25962 = (state_26101[(8)]);
var inst_25975 = (state_26101[(22)]);
var inst_25975__$1 = cljs.core.seq.call(null,inst_25962);
var state_26101__$1 = (function (){var statearr_26183 = state_26101;
(statearr_26183[(22)] = inst_25975__$1);

return statearr_26183;
})();
if(inst_25975__$1){
var statearr_26184_26249 = state_26101__$1;
(statearr_26184_26249[(1)] = (10));

} else {
var statearr_26185_26250 = state_26101__$1;
(statearr_26185_26250[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22252__auto__,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto____0 = (function (){
var statearr_26189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26189[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto__);

(statearr_26189[(1)] = (1));

return statearr_26189;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto____1 = (function (state_26101){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_26101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object)){
var ex__22256__auto__ = e26190;
var statearr_26191_26251 = state_26101;
(statearr_26191_26251[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26252 = state_26101;
state_26101 = G__26252;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto__ = function(state_26101){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto____1.call(this,state_26101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22366__auto__ = (function (){var statearr_26192 = f__22365__auto__.call(null);
(statearr_26192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_26192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__,map__25947,map__25947__$1,opts,before_jsload,on_jsload,reload_dependents,map__25948,map__25948__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22364__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26255,link){
var map__26258 = p__26255;
var map__26258__$1 = ((((!((map__26258 == null)))?((((map__26258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26258):map__26258);
var file = cljs.core.get.call(null,map__26258__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26258,map__26258__$1,file){
return (function (p1__26253_SHARP_,p2__26254_SHARP_){
if(cljs.core._EQ_.call(null,p1__26253_SHARP_,p2__26254_SHARP_)){
return p1__26253_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26258,map__26258__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26264){
var map__26265 = p__26264;
var map__26265__$1 = ((((!((map__26265 == null)))?((((map__26265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26265):map__26265);
var match_length = cljs.core.get.call(null,map__26265__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26265__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26260_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26260_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26267 = [];
var len__18277__auto___26270 = arguments.length;
var i__18278__auto___26271 = (0);
while(true){
if((i__18278__auto___26271 < len__18277__auto___26270)){
args26267.push((arguments[i__18278__auto___26271]));

var G__26272 = (i__18278__auto___26271 + (1));
i__18278__auto___26271 = G__26272;
continue;
} else {
}
break;
}

var G__26269 = args26267.length;
switch (G__26269) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26267.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26274_SHARP_,p2__26275_SHARP_){
return cljs.core.assoc.call(null,p1__26274_SHARP_,cljs.core.get.call(null,p2__26275_SHARP_,key),p2__26275_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26276){
var map__26279 = p__26276;
var map__26279__$1 = ((((!((map__26279 == null)))?((((map__26279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26279):map__26279);
var f_data = map__26279__$1;
var file = cljs.core.get.call(null,map__26279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26281,files_msg){
var map__26288 = p__26281;
var map__26288__$1 = ((((!((map__26288 == null)))?((((map__26288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26288):map__26288);
var opts = map__26288__$1;
var on_cssload = cljs.core.get.call(null,map__26288__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26290_26294 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26291_26295 = null;
var count__26292_26296 = (0);
var i__26293_26297 = (0);
while(true){
if((i__26293_26297 < count__26292_26296)){
var f_26298 = cljs.core._nth.call(null,chunk__26291_26295,i__26293_26297);
figwheel.client.file_reloading.reload_css_file.call(null,f_26298);

var G__26299 = seq__26290_26294;
var G__26300 = chunk__26291_26295;
var G__26301 = count__26292_26296;
var G__26302 = (i__26293_26297 + (1));
seq__26290_26294 = G__26299;
chunk__26291_26295 = G__26300;
count__26292_26296 = G__26301;
i__26293_26297 = G__26302;
continue;
} else {
var temp__4657__auto___26303 = cljs.core.seq.call(null,seq__26290_26294);
if(temp__4657__auto___26303){
var seq__26290_26304__$1 = temp__4657__auto___26303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26290_26304__$1)){
var c__18022__auto___26305 = cljs.core.chunk_first.call(null,seq__26290_26304__$1);
var G__26306 = cljs.core.chunk_rest.call(null,seq__26290_26304__$1);
var G__26307 = c__18022__auto___26305;
var G__26308 = cljs.core.count.call(null,c__18022__auto___26305);
var G__26309 = (0);
seq__26290_26294 = G__26306;
chunk__26291_26295 = G__26307;
count__26292_26296 = G__26308;
i__26293_26297 = G__26309;
continue;
} else {
var f_26310 = cljs.core.first.call(null,seq__26290_26304__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26310);

var G__26311 = cljs.core.next.call(null,seq__26290_26304__$1);
var G__26312 = null;
var G__26313 = (0);
var G__26314 = (0);
seq__26290_26294 = G__26311;
chunk__26291_26295 = G__26312;
count__26292_26296 = G__26313;
i__26293_26297 = G__26314;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26288,map__26288__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26288,map__26288__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
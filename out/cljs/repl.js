// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26331_26345 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26332_26346 = null;
var count__26333_26347 = (0);
var i__26334_26348 = (0);
while(true){
if((i__26334_26348 < count__26333_26347)){
var f_26349 = cljs.core._nth.call(null,chunk__26332_26346,i__26334_26348);
cljs.core.println.call(null,"  ",f_26349);

var G__26350 = seq__26331_26345;
var G__26351 = chunk__26332_26346;
var G__26352 = count__26333_26347;
var G__26353 = (i__26334_26348 + (1));
seq__26331_26345 = G__26350;
chunk__26332_26346 = G__26351;
count__26333_26347 = G__26352;
i__26334_26348 = G__26353;
continue;
} else {
var temp__4657__auto___26354 = cljs.core.seq.call(null,seq__26331_26345);
if(temp__4657__auto___26354){
var seq__26331_26355__$1 = temp__4657__auto___26354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26331_26355__$1)){
var c__18022__auto___26356 = cljs.core.chunk_first.call(null,seq__26331_26355__$1);
var G__26357 = cljs.core.chunk_rest.call(null,seq__26331_26355__$1);
var G__26358 = c__18022__auto___26356;
var G__26359 = cljs.core.count.call(null,c__18022__auto___26356);
var G__26360 = (0);
seq__26331_26345 = G__26357;
chunk__26332_26346 = G__26358;
count__26333_26347 = G__26359;
i__26334_26348 = G__26360;
continue;
} else {
var f_26361 = cljs.core.first.call(null,seq__26331_26355__$1);
cljs.core.println.call(null,"  ",f_26361);

var G__26362 = cljs.core.next.call(null,seq__26331_26355__$1);
var G__26363 = null;
var G__26364 = (0);
var G__26365 = (0);
seq__26331_26345 = G__26362;
chunk__26332_26346 = G__26363;
count__26333_26347 = G__26364;
i__26334_26348 = G__26365;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26366 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17219__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26366);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26366)))?cljs.core.second.call(null,arglists_26366):arglists_26366));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26335 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26336 = null;
var count__26337 = (0);
var i__26338 = (0);
while(true){
if((i__26338 < count__26337)){
var vec__26339 = cljs.core._nth.call(null,chunk__26336,i__26338);
var name = cljs.core.nth.call(null,vec__26339,(0),null);
var map__26340 = cljs.core.nth.call(null,vec__26339,(1),null);
var map__26340__$1 = ((((!((map__26340 == null)))?((((map__26340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26340):map__26340);
var doc = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26367 = seq__26335;
var G__26368 = chunk__26336;
var G__26369 = count__26337;
var G__26370 = (i__26338 + (1));
seq__26335 = G__26367;
chunk__26336 = G__26368;
count__26337 = G__26369;
i__26338 = G__26370;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26335);
if(temp__4657__auto__){
var seq__26335__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26335__$1)){
var c__18022__auto__ = cljs.core.chunk_first.call(null,seq__26335__$1);
var G__26371 = cljs.core.chunk_rest.call(null,seq__26335__$1);
var G__26372 = c__18022__auto__;
var G__26373 = cljs.core.count.call(null,c__18022__auto__);
var G__26374 = (0);
seq__26335 = G__26371;
chunk__26336 = G__26372;
count__26337 = G__26373;
i__26338 = G__26374;
continue;
} else {
var vec__26342 = cljs.core.first.call(null,seq__26335__$1);
var name = cljs.core.nth.call(null,vec__26342,(0),null);
var map__26343 = cljs.core.nth.call(null,vec__26342,(1),null);
var map__26343__$1 = ((((!((map__26343 == null)))?((((map__26343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26343):map__26343);
var doc = cljs.core.get.call(null,map__26343__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26343__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26375 = cljs.core.next.call(null,seq__26335__$1);
var G__26376 = null;
var G__26377 = (0);
var G__26378 = (0);
seq__26335 = G__26375;
chunk__26336 = G__26376;
count__26337 = G__26377;
i__26338 = G__26378;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
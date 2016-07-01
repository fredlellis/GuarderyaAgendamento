// Compiled by ClojureScript 1.7.170 {}
goog.provide('agendamento.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
agendamento.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
agendamento.core.read = (function agendamento$core$read(p__21285,key,params){
var map__21289 = p__21285;
var map__21289__$1 = ((((!((map__21289 == null)))?((((map__21289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21289):map__21289);
var env = map__21289__$1;
var state = cljs.core.get.call(null,map__21289__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__21291 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__21291,(0),null);
var value = cljs.core.nth.call(null,vec__21291,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
agendamento.core.mutate = (function agendamento$core$mutate(p__21292,key,params){
var map__21295 = p__21292;
var map__21295__$1 = ((((!((map__21295 == null)))?((((map__21295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21295):map__21295);
var env = map__21295__$1;
var state = cljs.core.get.call(null,map__21295__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21295,map__21295__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__21295,map__21295__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
agendamento.core.Counter = (function agendamento$core$Counter(){
var this__20469__auto__ = this;
React.Component.apply(this__20469__auto__,arguments);

if(!((this__20469__auto__.initLocalState == null))){
this__20469__auto__.state = this__20469__auto__.initLocalState();
} else {
this__20469__auto__.state = {};
}

return this__20469__auto__;
});

agendamento.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x21301_21313 = agendamento.core.Counter.prototype;
x21301_21313.componentWillUpdate = ((function (x21301_21313){
return (function (next_props__20405__auto__,next_state__20406__auto__){
var this__20404__auto__ = this;
if(((!((this__20404__auto__ == null)))?(((false) || (this__20404__auto__.om$next$Ident$))?true:false):false)){
var ident__20408__auto___21314 = om.next.ident.call(null,this__20404__auto__,om.next.props.call(null,this__20404__auto__));
var next_ident__20409__auto___21315 = om.next.ident.call(null,this__20404__auto__,om.next._next_props.call(null,next_props__20405__auto__,this__20404__auto__));
if(cljs.core.not_EQ_.call(null,ident__20408__auto___21314,next_ident__20409__auto___21315)){
var idxr__20410__auto___21316 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20404__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20410__auto___21316 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20410__auto___21316),((function (idxr__20410__auto___21316,ident__20408__auto___21314,next_ident__20409__auto___21315,this__20404__auto__,x21301_21313){
return (function (indexes__20411__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20411__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20408__auto___21314], null),cljs.core.disj,this__20404__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20409__auto___21315], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20404__auto__);
});})(idxr__20410__auto___21316,ident__20408__auto___21314,next_ident__20409__auto___21315,this__20404__auto__,x21301_21313))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20404__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20404__auto__);
});})(x21301_21313))
;

x21301_21313.shouldComponentUpdate = ((function (x21301_21313){
return (function (next_props__20405__auto__,next_state__20406__auto__){
var this__20404__auto__ = this;
var next_children__20407__auto__ = next_props__20405__auto__.children;
var next_props__20405__auto____$1 = goog.object.get(next_props__20405__auto__,"omcljs$value");
var next_props__20405__auto____$2 = (function (){var G__21303 = next_props__20405__auto____$1;
if((next_props__20405__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__21303);
} else {
return G__21303;
}
})();
var or__17219__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20404__auto__),next_props__20405__auto____$2);
if(or__17219__auto__){
return or__17219__auto__;
} else {
var or__17219__auto____$1 = (function (){var and__17207__auto__ = this__20404__auto__.state;
if(cljs.core.truth_(and__17207__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20404__auto__.state,"omcljs$state"),goog.object.get(next_state__20406__auto__,"omcljs$state"));
} else {
return and__17207__auto__;
}
})();
if(cljs.core.truth_(or__17219__auto____$1)){
return or__17219__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20404__auto__.props.children,next_children__20407__auto__);
}
}
});})(x21301_21313))
;

x21301_21313.componentWillUnmount = ((function (x21301_21313){
return (function (){
var this__20404__auto__ = this;
var r__20415__auto__ = om.next.get_reconciler.call(null,this__20404__auto__);
var cfg__20416__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20415__auto__);
var st__20417__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20416__auto__);
var indexer__20414__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20416__auto__);
if(cljs.core.truth_((function (){var and__17207__auto__ = !((st__20417__auto__ == null));
if(and__17207__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20417__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20404__auto__], null));
} else {
return and__17207__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20417__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20404__auto__);
} else {
}

if((indexer__20414__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20414__auto__,this__20404__auto__);
}
});})(x21301_21313))
;

x21301_21313.componentDidUpdate = ((function (x21301_21313){
return (function (prev_props__20412__auto__,prev_state__20413__auto__){
var this__20404__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20404__auto__);
});})(x21301_21313))
;

x21301_21313.isMounted = ((function (x21301_21313){
return (function (){
var this__20404__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20404__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21301_21313))
;

x21301_21313.componentWillMount = ((function (x21301_21313){
return (function (){
var this__20404__auto__ = this;
var indexer__20414__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20404__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20414__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20414__auto__,this__20404__auto__);
}
});})(x21301_21313))
;

x21301_21313.render = ((function (x21301_21313){
return (function (){
var this__20403__auto__ = this;
var this$ = this__20403__auto__;
var _STAR_reconciler_STAR_21304 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21305 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21306 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21307 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21308 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20403__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20403__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20403__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20403__auto__);

om.next._STAR_parent_STAR_ = this__20403__auto__;

try{var map__21309 = om.next.props.call(null,this$);
var map__21309__$1 = ((((!((map__21309 == null)))?((((map__21309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21309):map__21309);
var count = cljs.core.get.call(null,map__21309__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21309,map__21309__$1,count,_STAR_reconciler_STAR_21304,_STAR_depth_STAR_21305,_STAR_shared_STAR_21306,_STAR_instrument_STAR_21307,_STAR_parent_STAR_21308,this$,this__20403__auto__,x21301_21313){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__21309,map__21309__$1,count,_STAR_reconciler_STAR_21304,_STAR_depth_STAR_21305,_STAR_shared_STAR_21306,_STAR_instrument_STAR_21307,_STAR_parent_STAR_21308,this$,this__20403__auto__,x21301_21313))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21308;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21307;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21306;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21305;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21304;
}});})(x21301_21313))
;


agendamento.core.Counter.prototype.constructor = agendamento.core.Counter;

agendamento.core.Counter.prototype.constructor.displayName = "agendamento.core/Counter";

agendamento.core.Counter.prototype.om$isComponent = true;

var x21311_21317 = agendamento.core.Counter;
x21311_21317.om$next$IQuery$ = true;

x21311_21317.om$next$IQuery$query$arity$1 = ((function (x21311_21317){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21311_21317))
;


var x21312_21318 = agendamento.core.Counter.prototype;
x21312_21318.om$next$IQuery$ = true;

x21312_21318.om$next$IQuery$query$arity$1 = ((function (x21312_21318){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x21312_21318))
;


agendamento.core.Counter.cljs$lang$type = true;

agendamento.core.Counter.cljs$lang$ctorStr = "agendamento.core/Counter";

agendamento.core.Counter.cljs$lang$ctorPrWriter = (function (this__20471__auto__,writer__20472__auto__,opt__20473__auto__){
return cljs.core._write.call(null,writer__20472__auto__,"agendamento.core/Counter");
});
agendamento.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),agendamento.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),agendamento.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),agendamento.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,agendamento.core.reconciler,agendamento.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map
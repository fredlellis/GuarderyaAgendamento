// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__18284__auto__ = [];
var len__18277__auto___26516 = arguments.length;
var i__18278__auto___26517 = (0);
while(true){
if((i__18278__auto___26517 < len__18277__auto___26516)){
args__18284__auto__.push((arguments[i__18278__auto___26517]));

var G__26518 = (i__18278__auto___26517 + (1));
i__18278__auto___26517 = G__26518;
continue;
} else {
}
break;
}

var argseq__18285__auto__ = ((((2) < args__18284__auto__.length))?(new cljs.core.IndexedSeq(args__18284__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18285__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26508_26519 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26509_26520 = null;
var count__26510_26521 = (0);
var i__26511_26522 = (0);
while(true){
if((i__26511_26522 < count__26510_26521)){
var k_26523 = cljs.core._nth.call(null,chunk__26509_26520,i__26511_26522);
e.setAttribute(cljs.core.name.call(null,k_26523),cljs.core.get.call(null,attrs,k_26523));

var G__26524 = seq__26508_26519;
var G__26525 = chunk__26509_26520;
var G__26526 = count__26510_26521;
var G__26527 = (i__26511_26522 + (1));
seq__26508_26519 = G__26524;
chunk__26509_26520 = G__26525;
count__26510_26521 = G__26526;
i__26511_26522 = G__26527;
continue;
} else {
var temp__4657__auto___26528 = cljs.core.seq.call(null,seq__26508_26519);
if(temp__4657__auto___26528){
var seq__26508_26529__$1 = temp__4657__auto___26528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26508_26529__$1)){
var c__18022__auto___26530 = cljs.core.chunk_first.call(null,seq__26508_26529__$1);
var G__26531 = cljs.core.chunk_rest.call(null,seq__26508_26529__$1);
var G__26532 = c__18022__auto___26530;
var G__26533 = cljs.core.count.call(null,c__18022__auto___26530);
var G__26534 = (0);
seq__26508_26519 = G__26531;
chunk__26509_26520 = G__26532;
count__26510_26521 = G__26533;
i__26511_26522 = G__26534;
continue;
} else {
var k_26535 = cljs.core.first.call(null,seq__26508_26529__$1);
e.setAttribute(cljs.core.name.call(null,k_26535),cljs.core.get.call(null,attrs,k_26535));

var G__26536 = cljs.core.next.call(null,seq__26508_26529__$1);
var G__26537 = null;
var G__26538 = (0);
var G__26539 = (0);
seq__26508_26519 = G__26536;
chunk__26509_26520 = G__26537;
count__26510_26521 = G__26538;
i__26511_26522 = G__26539;
continue;
}
} else {
}
}
break;
}

var seq__26512_26540 = cljs.core.seq.call(null,children);
var chunk__26513_26541 = null;
var count__26514_26542 = (0);
var i__26515_26543 = (0);
while(true){
if((i__26515_26543 < count__26514_26542)){
var ch_26544 = cljs.core._nth.call(null,chunk__26513_26541,i__26515_26543);
e.appendChild(ch_26544);

var G__26545 = seq__26512_26540;
var G__26546 = chunk__26513_26541;
var G__26547 = count__26514_26542;
var G__26548 = (i__26515_26543 + (1));
seq__26512_26540 = G__26545;
chunk__26513_26541 = G__26546;
count__26514_26542 = G__26547;
i__26515_26543 = G__26548;
continue;
} else {
var temp__4657__auto___26549 = cljs.core.seq.call(null,seq__26512_26540);
if(temp__4657__auto___26549){
var seq__26512_26550__$1 = temp__4657__auto___26549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26512_26550__$1)){
var c__18022__auto___26551 = cljs.core.chunk_first.call(null,seq__26512_26550__$1);
var G__26552 = cljs.core.chunk_rest.call(null,seq__26512_26550__$1);
var G__26553 = c__18022__auto___26551;
var G__26554 = cljs.core.count.call(null,c__18022__auto___26551);
var G__26555 = (0);
seq__26512_26540 = G__26552;
chunk__26513_26541 = G__26553;
count__26514_26542 = G__26554;
i__26515_26543 = G__26555;
continue;
} else {
var ch_26556 = cljs.core.first.call(null,seq__26512_26550__$1);
e.appendChild(ch_26556);

var G__26557 = cljs.core.next.call(null,seq__26512_26550__$1);
var G__26558 = null;
var G__26559 = (0);
var G__26560 = (0);
seq__26512_26540 = G__26557;
chunk__26513_26541 = G__26558;
count__26514_26542 = G__26559;
i__26515_26543 = G__26560;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26505){
var G__26506 = cljs.core.first.call(null,seq26505);
var seq26505__$1 = cljs.core.next.call(null,seq26505);
var G__26507 = cljs.core.first.call(null,seq26505__$1);
var seq26505__$2 = cljs.core.next.call(null,seq26505__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26506,G__26507,seq26505__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18136__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18132__auto__,prefer_table__18133__auto__,method_cache__18134__auto__,cached_hierarchy__18135__auto__,hierarchy__18136__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18132__auto__,prefer_table__18133__auto__,method_cache__18134__auto__,cached_hierarchy__18135__auto__,hierarchy__18136__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18136__auto__,method_table__18132__auto__,prefer_table__18133__auto__,method_cache__18134__auto__,cached_hierarchy__18135__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26561 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26561.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26561.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26561.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26561);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26562,st_map){
var map__26567 = p__26562;
var map__26567__$1 = ((((!((map__26567 == null)))?((((map__26567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26567):map__26567);
var container_el = cljs.core.get.call(null,map__26567__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26567,map__26567__$1,container_el){
return (function (p__26569){
var vec__26570 = p__26569;
var k = cljs.core.nth.call(null,vec__26570,(0),null);
var v = cljs.core.nth.call(null,vec__26570,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26567,map__26567__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26571,dom_str){
var map__26574 = p__26571;
var map__26574__$1 = ((((!((map__26574 == null)))?((((map__26574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26574):map__26574);
var c = map__26574__$1;
var content_area_el = cljs.core.get.call(null,map__26574__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26576){
var map__26579 = p__26576;
var map__26579__$1 = ((((!((map__26579 == null)))?((((map__26579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26579):map__26579);
var content_area_el = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_26622){
var state_val_26623 = (state_26622[(1)]);
if((state_val_26623 === (1))){
var inst_26607 = (state_26622[(7)]);
var inst_26607__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26608 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26609 = ["10px","10px","100%","68px","1.0"];
var inst_26610 = cljs.core.PersistentHashMap.fromArrays(inst_26608,inst_26609);
var inst_26611 = cljs.core.merge.call(null,inst_26610,style);
var inst_26612 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26607__$1,inst_26611);
var inst_26613 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26607__$1,msg);
var inst_26614 = cljs.core.async.timeout.call(null,(300));
var state_26622__$1 = (function (){var statearr_26624 = state_26622;
(statearr_26624[(7)] = inst_26607__$1);

(statearr_26624[(8)] = inst_26613);

(statearr_26624[(9)] = inst_26612);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26622__$1,(2),inst_26614);
} else {
if((state_val_26623 === (2))){
var inst_26607 = (state_26622[(7)]);
var inst_26616 = (state_26622[(2)]);
var inst_26617 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26618 = ["auto"];
var inst_26619 = cljs.core.PersistentHashMap.fromArrays(inst_26617,inst_26618);
var inst_26620 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26607,inst_26619);
var state_26622__$1 = (function (){var statearr_26625 = state_26622;
(statearr_26625[(10)] = inst_26616);

return statearr_26625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26622__$1,inst_26620);
} else {
return null;
}
}
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto____0 = (function (){
var statearr_26629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26629[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto__);

(statearr_26629[(1)] = (1));

return statearr_26629;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto____1 = (function (state_26622){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_26622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26630){if((e26630 instanceof Object)){
var ex__22256__auto__ = e26630;
var statearr_26631_26633 = state_26622;
(statearr_26631_26633[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26634 = state_26622;
state_26622 = G__26634;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto__ = function(state_26622){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto____1.call(this,state_26622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_26632 = f__22365__auto__.call(null);
(statearr_26632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_26632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__26636 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__26636,(0),null);
var ln = cljs.core.nth.call(null,vec__26636,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26639 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26639,(0),null);
var file_line = cljs.core.nth.call(null,vec__26639,(1),null);
var file_column = cljs.core.nth.call(null,vec__26639,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26639,file_name,file_line,file_column){
return (function (p1__26637_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26637_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26639,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17219__auto__ = file_line;
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
var and__17207__auto__ = cause;
if(cljs.core.truth_(and__17207__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17207__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26642 = figwheel.client.heads_up.ensure_container.call(null);
var map__26642__$1 = ((((!((map__26642 == null)))?((((map__26642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26642):map__26642);
var content_area_el = cljs.core.get.call(null,map__26642__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_26690){
var state_val_26691 = (state_26690[(1)]);
if((state_val_26691 === (1))){
var inst_26673 = (state_26690[(7)]);
var inst_26673__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26674 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26675 = ["0.0"];
var inst_26676 = cljs.core.PersistentHashMap.fromArrays(inst_26674,inst_26675);
var inst_26677 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26673__$1,inst_26676);
var inst_26678 = cljs.core.async.timeout.call(null,(300));
var state_26690__$1 = (function (){var statearr_26692 = state_26690;
(statearr_26692[(7)] = inst_26673__$1);

(statearr_26692[(8)] = inst_26677);

return statearr_26692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26690__$1,(2),inst_26678);
} else {
if((state_val_26691 === (2))){
var inst_26673 = (state_26690[(7)]);
var inst_26680 = (state_26690[(2)]);
var inst_26681 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26682 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26683 = cljs.core.PersistentHashMap.fromArrays(inst_26681,inst_26682);
var inst_26684 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26673,inst_26683);
var inst_26685 = cljs.core.async.timeout.call(null,(200));
var state_26690__$1 = (function (){var statearr_26693 = state_26690;
(statearr_26693[(9)] = inst_26684);

(statearr_26693[(10)] = inst_26680);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26690__$1,(3),inst_26685);
} else {
if((state_val_26691 === (3))){
var inst_26673 = (state_26690[(7)]);
var inst_26687 = (state_26690[(2)]);
var inst_26688 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26673,"");
var state_26690__$1 = (function (){var statearr_26694 = state_26690;
(statearr_26694[(11)] = inst_26687);

return statearr_26694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26690__$1,inst_26688);
} else {
return null;
}
}
}
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22253__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22253__auto____0 = (function (){
var statearr_26698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26698[(0)] = figwheel$client$heads_up$clear_$_state_machine__22253__auto__);

(statearr_26698[(1)] = (1));

return statearr_26698;
});
var figwheel$client$heads_up$clear_$_state_machine__22253__auto____1 = (function (state_26690){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_26690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26699){if((e26699 instanceof Object)){
var ex__22256__auto__ = e26699;
var statearr_26700_26702 = state_26690;
(statearr_26700_26702[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26703 = state_26690;
state_26690 = G__26703;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22253__auto__ = function(state_26690){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22253__auto____1.call(this,state_26690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22253__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22253__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_26701 = f__22365__auto__.call(null);
(statearr_26701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_26701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_26735){
var state_val_26736 = (state_26735[(1)]);
if((state_val_26736 === (1))){
var inst_26725 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26735__$1,(2),inst_26725);
} else {
if((state_val_26736 === (2))){
var inst_26727 = (state_26735[(2)]);
var inst_26728 = cljs.core.async.timeout.call(null,(400));
var state_26735__$1 = (function (){var statearr_26737 = state_26735;
(statearr_26737[(7)] = inst_26727);

return statearr_26737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26735__$1,(3),inst_26728);
} else {
if((state_val_26736 === (3))){
var inst_26730 = (state_26735[(2)]);
var inst_26731 = figwheel.client.heads_up.clear.call(null);
var state_26735__$1 = (function (){var statearr_26738 = state_26735;
(statearr_26738[(8)] = inst_26730);

return statearr_26738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26735__$1,(4),inst_26731);
} else {
if((state_val_26736 === (4))){
var inst_26733 = (state_26735[(2)]);
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26735__$1,inst_26733);
} else {
return null;
}
}
}
}
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto____0 = (function (){
var statearr_26742 = [null,null,null,null,null,null,null,null,null];
(statearr_26742[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto__);

(statearr_26742[(1)] = (1));

return statearr_26742;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto____1 = (function (state_26735){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_26735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26743){if((e26743 instanceof Object)){
var ex__22256__auto__ = e26743;
var statearr_26744_26746 = state_26735;
(statearr_26744_26746[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26747 = state_26735;
state_26735 = G__26747;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto__ = function(state_26735){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto____1.call(this,state_26735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_26745 = f__22365__auto__.call(null);
(statearr_26745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_26745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map
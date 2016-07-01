// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26750 = cljs.core._EQ_;
var expr__26751 = (function (){var or__17219__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26750.call(null,"true",expr__26751))){
return true;
} else {
if(cljs.core.truth_(pred__26750.call(null,"false",expr__26751))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26751)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26753__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26754__i = 0, G__26754__a = new Array(arguments.length -  0);
while (G__26754__i < G__26754__a.length) {G__26754__a[G__26754__i] = arguments[G__26754__i + 0]; ++G__26754__i;}
  args = new cljs.core.IndexedSeq(G__26754__a,0);
} 
return G__26753__delegate.call(this,args);};
G__26753.cljs$lang$maxFixedArity = 0;
G__26753.cljs$lang$applyTo = (function (arglist__26755){
var args = cljs.core.seq(arglist__26755);
return G__26753__delegate(args);
});
G__26753.cljs$core$IFn$_invoke$arity$variadic = G__26753__delegate;
return G__26753;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26756){
var map__26759 = p__26756;
var map__26759__$1 = ((((!((map__26759 == null)))?((((map__26759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26759):map__26759);
var message = cljs.core.get.call(null,map__26759__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26759__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17219__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17207__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17207__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17207__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22364__auto___26921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___26921,ch){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___26921,ch){
return (function (state_26890){
var state_val_26891 = (state_26890[(1)]);
if((state_val_26891 === (7))){
var inst_26886 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
var statearr_26892_26922 = state_26890__$1;
(statearr_26892_26922[(2)] = inst_26886);

(statearr_26892_26922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (1))){
var state_26890__$1 = state_26890;
var statearr_26893_26923 = state_26890__$1;
(statearr_26893_26923[(2)] = null);

(statearr_26893_26923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (4))){
var inst_26843 = (state_26890[(7)]);
var inst_26843__$1 = (state_26890[(2)]);
var state_26890__$1 = (function (){var statearr_26894 = state_26890;
(statearr_26894[(7)] = inst_26843__$1);

return statearr_26894;
})();
if(cljs.core.truth_(inst_26843__$1)){
var statearr_26895_26924 = state_26890__$1;
(statearr_26895_26924[(1)] = (5));

} else {
var statearr_26896_26925 = state_26890__$1;
(statearr_26896_26925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (15))){
var inst_26850 = (state_26890[(8)]);
var inst_26865 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26850);
var inst_26866 = cljs.core.first.call(null,inst_26865);
var inst_26867 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26866);
var inst_26868 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26867)].join('');
var inst_26869 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26868);
var state_26890__$1 = state_26890;
var statearr_26897_26926 = state_26890__$1;
(statearr_26897_26926[(2)] = inst_26869);

(statearr_26897_26926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (13))){
var inst_26874 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
var statearr_26898_26927 = state_26890__$1;
(statearr_26898_26927[(2)] = inst_26874);

(statearr_26898_26927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (6))){
var state_26890__$1 = state_26890;
var statearr_26899_26928 = state_26890__$1;
(statearr_26899_26928[(2)] = null);

(statearr_26899_26928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (17))){
var inst_26872 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
var statearr_26900_26929 = state_26890__$1;
(statearr_26900_26929[(2)] = inst_26872);

(statearr_26900_26929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (3))){
var inst_26888 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26890__$1,inst_26888);
} else {
if((state_val_26891 === (12))){
var inst_26849 = (state_26890[(9)]);
var inst_26863 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26849,opts);
var state_26890__$1 = state_26890;
if(cljs.core.truth_(inst_26863)){
var statearr_26901_26930 = state_26890__$1;
(statearr_26901_26930[(1)] = (15));

} else {
var statearr_26902_26931 = state_26890__$1;
(statearr_26902_26931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (2))){
var state_26890__$1 = state_26890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26890__$1,(4),ch);
} else {
if((state_val_26891 === (11))){
var inst_26850 = (state_26890[(8)]);
var inst_26855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26856 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26850);
var inst_26857 = cljs.core.async.timeout.call(null,(1000));
var inst_26858 = [inst_26856,inst_26857];
var inst_26859 = (new cljs.core.PersistentVector(null,2,(5),inst_26855,inst_26858,null));
var state_26890__$1 = state_26890;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26890__$1,(14),inst_26859);
} else {
if((state_val_26891 === (9))){
var inst_26850 = (state_26890[(8)]);
var inst_26876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26877 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26850);
var inst_26878 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26877);
var inst_26879 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26878)].join('');
var inst_26880 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26879);
var state_26890__$1 = (function (){var statearr_26903 = state_26890;
(statearr_26903[(10)] = inst_26876);

return statearr_26903;
})();
var statearr_26904_26932 = state_26890__$1;
(statearr_26904_26932[(2)] = inst_26880);

(statearr_26904_26932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (5))){
var inst_26843 = (state_26890[(7)]);
var inst_26845 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26846 = (new cljs.core.PersistentArrayMap(null,2,inst_26845,null));
var inst_26847 = (new cljs.core.PersistentHashSet(null,inst_26846,null));
var inst_26848 = figwheel.client.focus_msgs.call(null,inst_26847,inst_26843);
var inst_26849 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26848);
var inst_26850 = cljs.core.first.call(null,inst_26848);
var inst_26851 = figwheel.client.autoload_QMARK_.call(null);
var state_26890__$1 = (function (){var statearr_26905 = state_26890;
(statearr_26905[(9)] = inst_26849);

(statearr_26905[(8)] = inst_26850);

return statearr_26905;
})();
if(cljs.core.truth_(inst_26851)){
var statearr_26906_26933 = state_26890__$1;
(statearr_26906_26933[(1)] = (8));

} else {
var statearr_26907_26934 = state_26890__$1;
(statearr_26907_26934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (14))){
var inst_26861 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
var statearr_26908_26935 = state_26890__$1;
(statearr_26908_26935[(2)] = inst_26861);

(statearr_26908_26935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (16))){
var state_26890__$1 = state_26890;
var statearr_26909_26936 = state_26890__$1;
(statearr_26909_26936[(2)] = null);

(statearr_26909_26936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (10))){
var inst_26882 = (state_26890[(2)]);
var state_26890__$1 = (function (){var statearr_26910 = state_26890;
(statearr_26910[(11)] = inst_26882);

return statearr_26910;
})();
var statearr_26911_26937 = state_26890__$1;
(statearr_26911_26937[(2)] = null);

(statearr_26911_26937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (8))){
var inst_26849 = (state_26890[(9)]);
var inst_26853 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26849,opts);
var state_26890__$1 = state_26890;
if(cljs.core.truth_(inst_26853)){
var statearr_26912_26938 = state_26890__$1;
(statearr_26912_26938[(1)] = (11));

} else {
var statearr_26913_26939 = state_26890__$1;
(statearr_26913_26939[(1)] = (12));

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
});})(c__22364__auto___26921,ch))
;
return ((function (switch__22252__auto__,c__22364__auto___26921,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22253__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22253__auto____0 = (function (){
var statearr_26917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26917[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22253__auto__);

(statearr_26917[(1)] = (1));

return statearr_26917;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22253__auto____1 = (function (state_26890){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_26890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e26918){if((e26918 instanceof Object)){
var ex__22256__auto__ = e26918;
var statearr_26919_26940 = state_26890;
(statearr_26919_26940[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26941 = state_26890;
state_26890 = G__26941;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22253__auto__ = function(state_26890){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22253__auto____1.call(this,state_26890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22253__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22253__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___26921,ch))
})();
var state__22366__auto__ = (function (){var statearr_26920 = f__22365__auto__.call(null);
(statearr_26920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___26921);

return statearr_26920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___26921,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26942_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26942_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26949 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26949){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26947 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26948 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26947,_STAR_print_newline_STAR_26948,base_path_26949){
return (function() { 
var G__26950__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26951__i = 0, G__26951__a = new Array(arguments.length -  0);
while (G__26951__i < G__26951__a.length) {G__26951__a[G__26951__i] = arguments[G__26951__i + 0]; ++G__26951__i;}
  args = new cljs.core.IndexedSeq(G__26951__a,0);
} 
return G__26950__delegate.call(this,args);};
G__26950.cljs$lang$maxFixedArity = 0;
G__26950.cljs$lang$applyTo = (function (arglist__26952){
var args = cljs.core.seq(arglist__26952);
return G__26950__delegate(args);
});
G__26950.cljs$core$IFn$_invoke$arity$variadic = G__26950__delegate;
return G__26950;
})()
;})(_STAR_print_fn_STAR_26947,_STAR_print_newline_STAR_26948,base_path_26949))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26948;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26947;
}}catch (e26946){if((e26946 instanceof Error)){
var e = e26946;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26949], null));
} else {
var e = e26946;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26949))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26953){
var map__26960 = p__26953;
var map__26960__$1 = ((((!((map__26960 == null)))?((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var opts = map__26960__$1;
var build_id = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26960,map__26960__$1,opts,build_id){
return (function (p__26962){
var vec__26963 = p__26962;
var map__26964 = cljs.core.nth.call(null,vec__26963,(0),null);
var map__26964__$1 = ((((!((map__26964 == null)))?((((map__26964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26964):map__26964);
var msg = map__26964__$1;
var msg_name = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26963,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26963,map__26964,map__26964__$1,msg,msg_name,_,map__26960,map__26960__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26963,map__26964,map__26964__$1,msg,msg_name,_,map__26960,map__26960__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26960,map__26960__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26970){
var vec__26971 = p__26970;
var map__26972 = cljs.core.nth.call(null,vec__26971,(0),null);
var map__26972__$1 = ((((!((map__26972 == null)))?((((map__26972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26972):map__26972);
var msg = map__26972__$1;
var msg_name = cljs.core.get.call(null,map__26972__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26971,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26974){
var map__26984 = p__26974;
var map__26984__$1 = ((((!((map__26984 == null)))?((((map__26984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26984):map__26984);
var on_compile_warning = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26984,map__26984__$1,on_compile_warning,on_compile_fail){
return (function (p__26986){
var vec__26987 = p__26986;
var map__26988 = cljs.core.nth.call(null,vec__26987,(0),null);
var map__26988__$1 = ((((!((map__26988 == null)))?((((map__26988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26988):map__26988);
var msg = map__26988__$1;
var msg_name = cljs.core.get.call(null,map__26988__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26987,(1));
var pred__26990 = cljs.core._EQ_;
var expr__26991 = msg_name;
if(cljs.core.truth_(pred__26990.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26991))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26990.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26991))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26984,map__26984__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__,msg_hist,msg_names,msg){
return (function (state_27207){
var state_val_27208 = (state_27207[(1)]);
if((state_val_27208 === (7))){
var inst_27131 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27131)){
var statearr_27209_27255 = state_27207__$1;
(statearr_27209_27255[(1)] = (8));

} else {
var statearr_27210_27256 = state_27207__$1;
(statearr_27210_27256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (20))){
var inst_27201 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27211_27257 = state_27207__$1;
(statearr_27211_27257[(2)] = inst_27201);

(statearr_27211_27257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (27))){
var inst_27197 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27212_27258 = state_27207__$1;
(statearr_27212_27258[(2)] = inst_27197);

(statearr_27212_27258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (1))){
var inst_27124 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27124)){
var statearr_27213_27259 = state_27207__$1;
(statearr_27213_27259[(1)] = (2));

} else {
var statearr_27214_27260 = state_27207__$1;
(statearr_27214_27260[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (24))){
var inst_27199 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27215_27261 = state_27207__$1;
(statearr_27215_27261[(2)] = inst_27199);

(statearr_27215_27261[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (4))){
var inst_27205 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27207__$1,inst_27205);
} else {
if((state_val_27208 === (15))){
var inst_27203 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27216_27262 = state_27207__$1;
(statearr_27216_27262[(2)] = inst_27203);

(statearr_27216_27262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (21))){
var inst_27162 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27217_27263 = state_27207__$1;
(statearr_27217_27263[(2)] = inst_27162);

(statearr_27217_27263[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (31))){
var inst_27186 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27186)){
var statearr_27218_27264 = state_27207__$1;
(statearr_27218_27264[(1)] = (34));

} else {
var statearr_27219_27265 = state_27207__$1;
(statearr_27219_27265[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (32))){
var inst_27195 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27220_27266 = state_27207__$1;
(statearr_27220_27266[(2)] = inst_27195);

(statearr_27220_27266[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (33))){
var inst_27184 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27221_27267 = state_27207__$1;
(statearr_27221_27267[(2)] = inst_27184);

(statearr_27221_27267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (13))){
var inst_27145 = figwheel.client.heads_up.clear.call(null);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(16),inst_27145);
} else {
if((state_val_27208 === (22))){
var inst_27166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27167 = figwheel.client.heads_up.append_message.call(null,inst_27166);
var state_27207__$1 = state_27207;
var statearr_27222_27268 = state_27207__$1;
(statearr_27222_27268[(2)] = inst_27167);

(statearr_27222_27268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (36))){
var inst_27193 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27223_27269 = state_27207__$1;
(statearr_27223_27269[(2)] = inst_27193);

(statearr_27223_27269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (29))){
var inst_27177 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27224_27270 = state_27207__$1;
(statearr_27224_27270[(2)] = inst_27177);

(statearr_27224_27270[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (6))){
var inst_27126 = (state_27207[(7)]);
var state_27207__$1 = state_27207;
var statearr_27225_27271 = state_27207__$1;
(statearr_27225_27271[(2)] = inst_27126);

(statearr_27225_27271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (28))){
var inst_27173 = (state_27207[(2)]);
var inst_27174 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27175 = figwheel.client.heads_up.display_warning.call(null,inst_27174);
var state_27207__$1 = (function (){var statearr_27226 = state_27207;
(statearr_27226[(8)] = inst_27173);

return statearr_27226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(29),inst_27175);
} else {
if((state_val_27208 === (25))){
var inst_27171 = figwheel.client.heads_up.clear.call(null);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(28),inst_27171);
} else {
if((state_val_27208 === (34))){
var inst_27188 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(37),inst_27188);
} else {
if((state_val_27208 === (17))){
var inst_27153 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27227_27272 = state_27207__$1;
(statearr_27227_27272[(2)] = inst_27153);

(statearr_27227_27272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (3))){
var inst_27143 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27143)){
var statearr_27228_27273 = state_27207__$1;
(statearr_27228_27273[(1)] = (13));

} else {
var statearr_27229_27274 = state_27207__$1;
(statearr_27229_27274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (12))){
var inst_27139 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27230_27275 = state_27207__$1;
(statearr_27230_27275[(2)] = inst_27139);

(statearr_27230_27275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (2))){
var inst_27126 = (state_27207[(7)]);
var inst_27126__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27207__$1 = (function (){var statearr_27231 = state_27207;
(statearr_27231[(7)] = inst_27126__$1);

return statearr_27231;
})();
if(cljs.core.truth_(inst_27126__$1)){
var statearr_27232_27276 = state_27207__$1;
(statearr_27232_27276[(1)] = (5));

} else {
var statearr_27233_27277 = state_27207__$1;
(statearr_27233_27277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (23))){
var inst_27169 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27169)){
var statearr_27234_27278 = state_27207__$1;
(statearr_27234_27278[(1)] = (25));

} else {
var statearr_27235_27279 = state_27207__$1;
(statearr_27235_27279[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (35))){
var state_27207__$1 = state_27207;
var statearr_27236_27280 = state_27207__$1;
(statearr_27236_27280[(2)] = null);

(statearr_27236_27280[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (19))){
var inst_27164 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27164)){
var statearr_27237_27281 = state_27207__$1;
(statearr_27237_27281[(1)] = (22));

} else {
var statearr_27238_27282 = state_27207__$1;
(statearr_27238_27282[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (11))){
var inst_27135 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27239_27283 = state_27207__$1;
(statearr_27239_27283[(2)] = inst_27135);

(statearr_27239_27283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (9))){
var inst_27137 = figwheel.client.heads_up.clear.call(null);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(12),inst_27137);
} else {
if((state_val_27208 === (5))){
var inst_27128 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27207__$1 = state_27207;
var statearr_27240_27284 = state_27207__$1;
(statearr_27240_27284[(2)] = inst_27128);

(statearr_27240_27284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (14))){
var inst_27155 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27155)){
var statearr_27241_27285 = state_27207__$1;
(statearr_27241_27285[(1)] = (18));

} else {
var statearr_27242_27286 = state_27207__$1;
(statearr_27242_27286[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (26))){
var inst_27179 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27207__$1 = state_27207;
if(cljs.core.truth_(inst_27179)){
var statearr_27243_27287 = state_27207__$1;
(statearr_27243_27287[(1)] = (30));

} else {
var statearr_27244_27288 = state_27207__$1;
(statearr_27244_27288[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (16))){
var inst_27147 = (state_27207[(2)]);
var inst_27148 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27149 = figwheel.client.format_messages.call(null,inst_27148);
var inst_27150 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27151 = figwheel.client.heads_up.display_error.call(null,inst_27149,inst_27150);
var state_27207__$1 = (function (){var statearr_27245 = state_27207;
(statearr_27245[(9)] = inst_27147);

return statearr_27245;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(17),inst_27151);
} else {
if((state_val_27208 === (30))){
var inst_27181 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27182 = figwheel.client.heads_up.display_warning.call(null,inst_27181);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(33),inst_27182);
} else {
if((state_val_27208 === (10))){
var inst_27141 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27246_27289 = state_27207__$1;
(statearr_27246_27289[(2)] = inst_27141);

(statearr_27246_27289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (18))){
var inst_27157 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27158 = figwheel.client.format_messages.call(null,inst_27157);
var inst_27159 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27160 = figwheel.client.heads_up.display_error.call(null,inst_27158,inst_27159);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(21),inst_27160);
} else {
if((state_val_27208 === (37))){
var inst_27190 = (state_27207[(2)]);
var state_27207__$1 = state_27207;
var statearr_27247_27290 = state_27207__$1;
(statearr_27247_27290[(2)] = inst_27190);

(statearr_27247_27290[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27208 === (8))){
var inst_27133 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27207__$1 = state_27207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27207__$1,(11),inst_27133);
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
});})(c__22364__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22252__auto__,c__22364__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto____0 = (function (){
var statearr_27251 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27251[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto__);

(statearr_27251[(1)] = (1));

return statearr_27251;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto____1 = (function (state_27207){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_27207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e27252){if((e27252 instanceof Object)){
var ex__22256__auto__ = e27252;
var statearr_27253_27291 = state_27207;
(statearr_27253_27291[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27292 = state_27207;
state_27207 = G__27292;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto__ = function(state_27207){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto____1.call(this,state_27207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__,msg_hist,msg_names,msg))
})();
var state__22366__auto__ = (function (){var statearr_27254 = f__22365__auto__.call(null);
(statearr_27254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_27254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__,msg_hist,msg_names,msg))
);

return c__22364__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22364__auto___27355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___27355,ch){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___27355,ch){
return (function (state_27338){
var state_val_27339 = (state_27338[(1)]);
if((state_val_27339 === (1))){
var state_27338__$1 = state_27338;
var statearr_27340_27356 = state_27338__$1;
(statearr_27340_27356[(2)] = null);

(statearr_27340_27356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (2))){
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27338__$1,(4),ch);
} else {
if((state_val_27339 === (3))){
var inst_27336 = (state_27338[(2)]);
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27338__$1,inst_27336);
} else {
if((state_val_27339 === (4))){
var inst_27326 = (state_27338[(7)]);
var inst_27326__$1 = (state_27338[(2)]);
var state_27338__$1 = (function (){var statearr_27341 = state_27338;
(statearr_27341[(7)] = inst_27326__$1);

return statearr_27341;
})();
if(cljs.core.truth_(inst_27326__$1)){
var statearr_27342_27357 = state_27338__$1;
(statearr_27342_27357[(1)] = (5));

} else {
var statearr_27343_27358 = state_27338__$1;
(statearr_27343_27358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (5))){
var inst_27326 = (state_27338[(7)]);
var inst_27328 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27326);
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27338__$1,(8),inst_27328);
} else {
if((state_val_27339 === (6))){
var state_27338__$1 = state_27338;
var statearr_27344_27359 = state_27338__$1;
(statearr_27344_27359[(2)] = null);

(statearr_27344_27359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (7))){
var inst_27334 = (state_27338[(2)]);
var state_27338__$1 = state_27338;
var statearr_27345_27360 = state_27338__$1;
(statearr_27345_27360[(2)] = inst_27334);

(statearr_27345_27360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (8))){
var inst_27330 = (state_27338[(2)]);
var state_27338__$1 = (function (){var statearr_27346 = state_27338;
(statearr_27346[(8)] = inst_27330);

return statearr_27346;
})();
var statearr_27347_27361 = state_27338__$1;
(statearr_27347_27361[(2)] = null);

(statearr_27347_27361[(1)] = (2));


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
});})(c__22364__auto___27355,ch))
;
return ((function (switch__22252__auto__,c__22364__auto___27355,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22253__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22253__auto____0 = (function (){
var statearr_27351 = [null,null,null,null,null,null,null,null,null];
(statearr_27351[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22253__auto__);

(statearr_27351[(1)] = (1));

return statearr_27351;
});
var figwheel$client$heads_up_plugin_$_state_machine__22253__auto____1 = (function (state_27338){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_27338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e27352){if((e27352 instanceof Object)){
var ex__22256__auto__ = e27352;
var statearr_27353_27362 = state_27338;
(statearr_27353_27362[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27363 = state_27338;
state_27338 = G__27363;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22253__auto__ = function(state_27338){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22253__auto____1.call(this,state_27338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22253__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22253__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___27355,ch))
})();
var state__22366__auto__ = (function (){var statearr_27354 = f__22365__auto__.call(null);
(statearr_27354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___27355);

return statearr_27354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___27355,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_27384){
var state_val_27385 = (state_27384[(1)]);
if((state_val_27385 === (1))){
var inst_27379 = cljs.core.async.timeout.call(null,(3000));
var state_27384__$1 = state_27384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27384__$1,(2),inst_27379);
} else {
if((state_val_27385 === (2))){
var inst_27381 = (state_27384[(2)]);
var inst_27382 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27384__$1 = (function (){var statearr_27386 = state_27384;
(statearr_27386[(7)] = inst_27381);

return statearr_27386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27384__$1,inst_27382);
} else {
return null;
}
}
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22253__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22253__auto____0 = (function (){
var statearr_27390 = [null,null,null,null,null,null,null,null];
(statearr_27390[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22253__auto__);

(statearr_27390[(1)] = (1));

return statearr_27390;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22253__auto____1 = (function (state_27384){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_27384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e27391){if((e27391 instanceof Object)){
var ex__22256__auto__ = e27391;
var statearr_27392_27394 = state_27384;
(statearr_27392_27394[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27395 = state_27384;
state_27384 = G__27395;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22253__auto__ = function(state_27384){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22253__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22253__auto____1.call(this,state_27384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22253__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22253__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_27393 = f__22365__auto__.call(null);
(statearr_27393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_27393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27396){
var map__27403 = p__27396;
var map__27403__$1 = ((((!((map__27403 == null)))?((((map__27403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403):map__27403);
var ed = map__27403__$1;
var formatted_exception = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27405_27409 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27406_27410 = null;
var count__27407_27411 = (0);
var i__27408_27412 = (0);
while(true){
if((i__27408_27412 < count__27407_27411)){
var msg_27413 = cljs.core._nth.call(null,chunk__27406_27410,i__27408_27412);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27413);

var G__27414 = seq__27405_27409;
var G__27415 = chunk__27406_27410;
var G__27416 = count__27407_27411;
var G__27417 = (i__27408_27412 + (1));
seq__27405_27409 = G__27414;
chunk__27406_27410 = G__27415;
count__27407_27411 = G__27416;
i__27408_27412 = G__27417;
continue;
} else {
var temp__4657__auto___27418 = cljs.core.seq.call(null,seq__27405_27409);
if(temp__4657__auto___27418){
var seq__27405_27419__$1 = temp__4657__auto___27418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27405_27419__$1)){
var c__18022__auto___27420 = cljs.core.chunk_first.call(null,seq__27405_27419__$1);
var G__27421 = cljs.core.chunk_rest.call(null,seq__27405_27419__$1);
var G__27422 = c__18022__auto___27420;
var G__27423 = cljs.core.count.call(null,c__18022__auto___27420);
var G__27424 = (0);
seq__27405_27409 = G__27421;
chunk__27406_27410 = G__27422;
count__27407_27411 = G__27423;
i__27408_27412 = G__27424;
continue;
} else {
var msg_27425 = cljs.core.first.call(null,seq__27405_27419__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27425);

var G__27426 = cljs.core.next.call(null,seq__27405_27419__$1);
var G__27427 = null;
var G__27428 = (0);
var G__27429 = (0);
seq__27405_27409 = G__27426;
chunk__27406_27410 = G__27427;
count__27407_27411 = G__27428;
i__27408_27412 = G__27429;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27430){
var map__27433 = p__27430;
var map__27433__$1 = ((((!((map__27433 == null)))?((((map__27433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27433):map__27433);
var w = map__27433__$1;
var message = cljs.core.get.call(null,map__27433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17207__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17207__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17207__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27441 = cljs.core.seq.call(null,plugins);
var chunk__27442 = null;
var count__27443 = (0);
var i__27444 = (0);
while(true){
if((i__27444 < count__27443)){
var vec__27445 = cljs.core._nth.call(null,chunk__27442,i__27444);
var k = cljs.core.nth.call(null,vec__27445,(0),null);
var plugin = cljs.core.nth.call(null,vec__27445,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27447 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27441,chunk__27442,count__27443,i__27444,pl_27447,vec__27445,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27447.call(null,msg_hist);
});})(seq__27441,chunk__27442,count__27443,i__27444,pl_27447,vec__27445,k,plugin))
);
} else {
}

var G__27448 = seq__27441;
var G__27449 = chunk__27442;
var G__27450 = count__27443;
var G__27451 = (i__27444 + (1));
seq__27441 = G__27448;
chunk__27442 = G__27449;
count__27443 = G__27450;
i__27444 = G__27451;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27441);
if(temp__4657__auto__){
var seq__27441__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27441__$1)){
var c__18022__auto__ = cljs.core.chunk_first.call(null,seq__27441__$1);
var G__27452 = cljs.core.chunk_rest.call(null,seq__27441__$1);
var G__27453 = c__18022__auto__;
var G__27454 = cljs.core.count.call(null,c__18022__auto__);
var G__27455 = (0);
seq__27441 = G__27452;
chunk__27442 = G__27453;
count__27443 = G__27454;
i__27444 = G__27455;
continue;
} else {
var vec__27446 = cljs.core.first.call(null,seq__27441__$1);
var k = cljs.core.nth.call(null,vec__27446,(0),null);
var plugin = cljs.core.nth.call(null,vec__27446,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27456 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27441,chunk__27442,count__27443,i__27444,pl_27456,vec__27446,k,plugin,seq__27441__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27456.call(null,msg_hist);
});})(seq__27441,chunk__27442,count__27443,i__27444,pl_27456,vec__27446,k,plugin,seq__27441__$1,temp__4657__auto__))
);
} else {
}

var G__27457 = cljs.core.next.call(null,seq__27441__$1);
var G__27458 = null;
var G__27459 = (0);
var G__27460 = (0);
seq__27441 = G__27457;
chunk__27442 = G__27458;
count__27443 = G__27459;
i__27444 = G__27460;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27461 = [];
var len__18277__auto___27464 = arguments.length;
var i__18278__auto___27465 = (0);
while(true){
if((i__18278__auto___27465 < len__18277__auto___27464)){
args27461.push((arguments[i__18278__auto___27465]));

var G__27466 = (i__18278__auto___27465 + (1));
i__18278__auto___27465 = G__27466;
continue;
} else {
}
break;
}

var G__27463 = args27461.length;
switch (G__27463) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27461.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__18284__auto__ = [];
var len__18277__auto___27472 = arguments.length;
var i__18278__auto___27473 = (0);
while(true){
if((i__18278__auto___27473 < len__18277__auto___27472)){
args__18284__auto__.push((arguments[i__18278__auto___27473]));

var G__27474 = (i__18278__auto___27473 + (1));
i__18278__auto___27473 = G__27474;
continue;
} else {
}
break;
}

var argseq__18285__auto__ = ((((0) < args__18284__auto__.length))?(new cljs.core.IndexedSeq(args__18284__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18285__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27469){
var map__27470 = p__27469;
var map__27470__$1 = ((((!((map__27470 == null)))?((((map__27470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27470):map__27470);
var opts = map__27470__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27468){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27468));
});

//# sourceMappingURL=client.js.map
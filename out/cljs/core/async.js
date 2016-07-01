// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22409 = [];
var len__18277__auto___22415 = arguments.length;
var i__18278__auto___22416 = (0);
while(true){
if((i__18278__auto___22416 < len__18277__auto___22415)){
args22409.push((arguments[i__18278__auto___22416]));

var G__22417 = (i__18278__auto___22416 + (1));
i__18278__auto___22416 = G__22417;
continue;
} else {
}
break;
}

var G__22411 = args22409.length;
switch (G__22411) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22409.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22412 = (function (f,blockable,meta22413){
this.f = f;
this.blockable = blockable;
this.meta22413 = meta22413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22414,meta22413__$1){
var self__ = this;
var _22414__$1 = this;
return (new cljs.core.async.t_cljs$core$async22412(self__.f,self__.blockable,meta22413__$1));
});

cljs.core.async.t_cljs$core$async22412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22414){
var self__ = this;
var _22414__$1 = this;
return self__.meta22413;
});

cljs.core.async.t_cljs$core$async22412.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22413","meta22413",-2106388110,null)], null);
});

cljs.core.async.t_cljs$core$async22412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22412";

cljs.core.async.t_cljs$core$async22412.cljs$lang$ctorPrWriter = (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async22412");
});

cljs.core.async.__GT_t_cljs$core$async22412 = (function cljs$core$async$__GT_t_cljs$core$async22412(f__$1,blockable__$1,meta22413){
return (new cljs.core.async.t_cljs$core$async22412(f__$1,blockable__$1,meta22413));
});

}

return (new cljs.core.async.t_cljs$core$async22412(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22421 = [];
var len__18277__auto___22424 = arguments.length;
var i__18278__auto___22425 = (0);
while(true){
if((i__18278__auto___22425 < len__18277__auto___22424)){
args22421.push((arguments[i__18278__auto___22425]));

var G__22426 = (i__18278__auto___22425 + (1));
i__18278__auto___22425 = G__22426;
continue;
} else {
}
break;
}

var G__22423 = args22421.length;
switch (G__22423) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22421.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22428 = [];
var len__18277__auto___22431 = arguments.length;
var i__18278__auto___22432 = (0);
while(true){
if((i__18278__auto___22432 < len__18277__auto___22431)){
args22428.push((arguments[i__18278__auto___22432]));

var G__22433 = (i__18278__auto___22432 + (1));
i__18278__auto___22432 = G__22433;
continue;
} else {
}
break;
}

var G__22430 = args22428.length;
switch (G__22430) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22428.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22435 = [];
var len__18277__auto___22438 = arguments.length;
var i__18278__auto___22439 = (0);
while(true){
if((i__18278__auto___22439 < len__18277__auto___22438)){
args22435.push((arguments[i__18278__auto___22439]));

var G__22440 = (i__18278__auto___22439 + (1));
i__18278__auto___22439 = G__22440;
continue;
} else {
}
break;
}

var G__22437 = args22435.length;
switch (G__22437) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22435.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22442,ret){
return (function (){
return fn1.call(null,val_22442);
});})(val_22442,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22443 = [];
var len__18277__auto___22446 = arguments.length;
var i__18278__auto___22447 = (0);
while(true){
if((i__18278__auto___22447 < len__18277__auto___22446)){
args22443.push((arguments[i__18278__auto___22447]));

var G__22448 = (i__18278__auto___22447 + (1));
i__18278__auto___22447 = G__22448;
continue;
} else {
}
break;
}

var G__22445 = args22443.length;
switch (G__22445) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22443.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18122__auto___22450 = n;
var x_22451 = (0);
while(true){
if((x_22451 < n__18122__auto___22450)){
(a[x_22451] = (0));

var G__22452 = (x_22451 + (1));
x_22451 = G__22452;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22453 = (i + (1));
i = G__22453;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22457 = (function (alt_flag,flag,meta22458){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22458 = meta22458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22459,meta22458__$1){
var self__ = this;
var _22459__$1 = this;
return (new cljs.core.async.t_cljs$core$async22457(self__.alt_flag,self__.flag,meta22458__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22459){
var self__ = this;
var _22459__$1 = this;
return self__.meta22458;
});})(flag))
;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22457.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22458","meta22458",-1102917667,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22457";

cljs.core.async.t_cljs$core$async22457.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async22457");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22457 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22457(alt_flag__$1,flag__$1,meta22458){
return (new cljs.core.async.t_cljs$core$async22457(alt_flag__$1,flag__$1,meta22458));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22457(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22463 = (function (alt_handler,flag,cb,meta22464){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22464 = meta22464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22465,meta22464__$1){
var self__ = this;
var _22465__$1 = this;
return (new cljs.core.async.t_cljs$core$async22463(self__.alt_handler,self__.flag,self__.cb,meta22464__$1));
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22465){
var self__ = this;
var _22465__$1 = this;
return self__.meta22464;
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22464","meta22464",1690192552,null)], null);
});

cljs.core.async.t_cljs$core$async22463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22463";

cljs.core.async.t_cljs$core$async22463.cljs$lang$ctorPrWriter = (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async22463");
});

cljs.core.async.__GT_t_cljs$core$async22463 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22463(alt_handler__$1,flag__$1,cb__$1,meta22464){
return (new cljs.core.async.t_cljs$core$async22463(alt_handler__$1,flag__$1,cb__$1,meta22464));
});

}

return (new cljs.core.async.t_cljs$core$async22463(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22466_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22466_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22467_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22467_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17219__auto__ = wport;
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22468 = (i + (1));
i = G__22468;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17219__auto__ = ret;
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__17207__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17207__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17207__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__18284__auto__ = [];
var len__18277__auto___22474 = arguments.length;
var i__18278__auto___22475 = (0);
while(true){
if((i__18278__auto___22475 < len__18277__auto___22474)){
args__18284__auto__.push((arguments[i__18278__auto___22475]));

var G__22476 = (i__18278__auto___22475 + (1));
i__18278__auto___22475 = G__22476;
continue;
} else {
}
break;
}

var argseq__18285__auto__ = ((((1) < args__18284__auto__.length))?(new cljs.core.IndexedSeq(args__18284__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18285__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22471){
var map__22472 = p__22471;
var map__22472__$1 = ((((!((map__22472 == null)))?((((map__22472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22472):map__22472);
var opts = map__22472__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22469){
var G__22470 = cljs.core.first.call(null,seq22469);
var seq22469__$1 = cljs.core.next.call(null,seq22469);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22470,seq22469__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22477 = [];
var len__18277__auto___22527 = arguments.length;
var i__18278__auto___22528 = (0);
while(true){
if((i__18278__auto___22528 < len__18277__auto___22527)){
args22477.push((arguments[i__18278__auto___22528]));

var G__22529 = (i__18278__auto___22528 + (1));
i__18278__auto___22528 = G__22529;
continue;
} else {
}
break;
}

var G__22479 = args22477.length;
switch (G__22479) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22477.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22364__auto___22531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___22531){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___22531){
return (function (state_22503){
var state_val_22504 = (state_22503[(1)]);
if((state_val_22504 === (7))){
var inst_22499 = (state_22503[(2)]);
var state_22503__$1 = state_22503;
var statearr_22505_22532 = state_22503__$1;
(statearr_22505_22532[(2)] = inst_22499);

(statearr_22505_22532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (1))){
var state_22503__$1 = state_22503;
var statearr_22506_22533 = state_22503__$1;
(statearr_22506_22533[(2)] = null);

(statearr_22506_22533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (4))){
var inst_22482 = (state_22503[(7)]);
var inst_22482__$1 = (state_22503[(2)]);
var inst_22483 = (inst_22482__$1 == null);
var state_22503__$1 = (function (){var statearr_22507 = state_22503;
(statearr_22507[(7)] = inst_22482__$1);

return statearr_22507;
})();
if(cljs.core.truth_(inst_22483)){
var statearr_22508_22534 = state_22503__$1;
(statearr_22508_22534[(1)] = (5));

} else {
var statearr_22509_22535 = state_22503__$1;
(statearr_22509_22535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (13))){
var state_22503__$1 = state_22503;
var statearr_22510_22536 = state_22503__$1;
(statearr_22510_22536[(2)] = null);

(statearr_22510_22536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (6))){
var inst_22482 = (state_22503[(7)]);
var state_22503__$1 = state_22503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22503__$1,(11),to,inst_22482);
} else {
if((state_val_22504 === (3))){
var inst_22501 = (state_22503[(2)]);
var state_22503__$1 = state_22503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22503__$1,inst_22501);
} else {
if((state_val_22504 === (12))){
var state_22503__$1 = state_22503;
var statearr_22511_22537 = state_22503__$1;
(statearr_22511_22537[(2)] = null);

(statearr_22511_22537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (2))){
var state_22503__$1 = state_22503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22503__$1,(4),from);
} else {
if((state_val_22504 === (11))){
var inst_22492 = (state_22503[(2)]);
var state_22503__$1 = state_22503;
if(cljs.core.truth_(inst_22492)){
var statearr_22512_22538 = state_22503__$1;
(statearr_22512_22538[(1)] = (12));

} else {
var statearr_22513_22539 = state_22503__$1;
(statearr_22513_22539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (9))){
var state_22503__$1 = state_22503;
var statearr_22514_22540 = state_22503__$1;
(statearr_22514_22540[(2)] = null);

(statearr_22514_22540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (5))){
var state_22503__$1 = state_22503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22515_22541 = state_22503__$1;
(statearr_22515_22541[(1)] = (8));

} else {
var statearr_22516_22542 = state_22503__$1;
(statearr_22516_22542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (14))){
var inst_22497 = (state_22503[(2)]);
var state_22503__$1 = state_22503;
var statearr_22517_22543 = state_22503__$1;
(statearr_22517_22543[(2)] = inst_22497);

(statearr_22517_22543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (10))){
var inst_22489 = (state_22503[(2)]);
var state_22503__$1 = state_22503;
var statearr_22518_22544 = state_22503__$1;
(statearr_22518_22544[(2)] = inst_22489);

(statearr_22518_22544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22504 === (8))){
var inst_22486 = cljs.core.async.close_BANG_.call(null,to);
var state_22503__$1 = state_22503;
var statearr_22519_22545 = state_22503__$1;
(statearr_22519_22545[(2)] = inst_22486);

(statearr_22519_22545[(1)] = (10));


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
});})(c__22364__auto___22531))
;
return ((function (switch__22252__auto__,c__22364__auto___22531){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_22523 = [null,null,null,null,null,null,null,null];
(statearr_22523[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_22523[(1)] = (1));

return statearr_22523;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_22503){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_22503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e22524){if((e22524 instanceof Object)){
var ex__22256__auto__ = e22524;
var statearr_22525_22546 = state_22503;
(statearr_22525_22546[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22547 = state_22503;
state_22503 = G__22547;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_22503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_22503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___22531))
})();
var state__22366__auto__ = (function (){var statearr_22526 = f__22365__auto__.call(null);
(statearr_22526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___22531);

return statearr_22526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___22531))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22731){
var vec__22732 = p__22731;
var v = cljs.core.nth.call(null,vec__22732,(0),null);
var p = cljs.core.nth.call(null,vec__22732,(1),null);
var job = vec__22732;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22364__auto___22914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___22914,res,vec__22732,v,p,job,jobs,results){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___22914,res,vec__22732,v,p,job,jobs,results){
return (function (state_22737){
var state_val_22738 = (state_22737[(1)]);
if((state_val_22738 === (1))){
var state_22737__$1 = state_22737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22737__$1,(2),res,v);
} else {
if((state_val_22738 === (2))){
var inst_22734 = (state_22737[(2)]);
var inst_22735 = cljs.core.async.close_BANG_.call(null,res);
var state_22737__$1 = (function (){var statearr_22739 = state_22737;
(statearr_22739[(7)] = inst_22734);

return statearr_22739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22737__$1,inst_22735);
} else {
return null;
}
}
});})(c__22364__auto___22914,res,vec__22732,v,p,job,jobs,results))
;
return ((function (switch__22252__auto__,c__22364__auto___22914,res,vec__22732,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_22743 = [null,null,null,null,null,null,null,null];
(statearr_22743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_22743[(1)] = (1));

return statearr_22743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_22737){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_22737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e22744){if((e22744 instanceof Object)){
var ex__22256__auto__ = e22744;
var statearr_22745_22915 = state_22737;
(statearr_22745_22915[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22916 = state_22737;
state_22737 = G__22916;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_22737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_22737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___22914,res,vec__22732,v,p,job,jobs,results))
})();
var state__22366__auto__ = (function (){var statearr_22746 = f__22365__auto__.call(null);
(statearr_22746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___22914);

return statearr_22746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___22914,res,vec__22732,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22747){
var vec__22748 = p__22747;
var v = cljs.core.nth.call(null,vec__22748,(0),null);
var p = cljs.core.nth.call(null,vec__22748,(1),null);
var job = vec__22748;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18122__auto___22917 = n;
var __22918 = (0);
while(true){
if((__22918 < n__18122__auto___22917)){
var G__22749_22919 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22749_22919) {
case "compute":
var c__22364__auto___22921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22918,c__22364__auto___22921,G__22749_22919,n__18122__auto___22917,jobs,results,process,async){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (__22918,c__22364__auto___22921,G__22749_22919,n__18122__auto___22917,jobs,results,process,async){
return (function (state_22762){
var state_val_22763 = (state_22762[(1)]);
if((state_val_22763 === (1))){
var state_22762__$1 = state_22762;
var statearr_22764_22922 = state_22762__$1;
(statearr_22764_22922[(2)] = null);

(statearr_22764_22922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (2))){
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22762__$1,(4),jobs);
} else {
if((state_val_22763 === (3))){
var inst_22760 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22762__$1,inst_22760);
} else {
if((state_val_22763 === (4))){
var inst_22752 = (state_22762[(2)]);
var inst_22753 = process.call(null,inst_22752);
var state_22762__$1 = state_22762;
if(cljs.core.truth_(inst_22753)){
var statearr_22765_22923 = state_22762__$1;
(statearr_22765_22923[(1)] = (5));

} else {
var statearr_22766_22924 = state_22762__$1;
(statearr_22766_22924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (5))){
var state_22762__$1 = state_22762;
var statearr_22767_22925 = state_22762__$1;
(statearr_22767_22925[(2)] = null);

(statearr_22767_22925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (6))){
var state_22762__$1 = state_22762;
var statearr_22768_22926 = state_22762__$1;
(statearr_22768_22926[(2)] = null);

(statearr_22768_22926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (7))){
var inst_22758 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22769_22927 = state_22762__$1;
(statearr_22769_22927[(2)] = inst_22758);

(statearr_22769_22927[(1)] = (3));


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
});})(__22918,c__22364__auto___22921,G__22749_22919,n__18122__auto___22917,jobs,results,process,async))
;
return ((function (__22918,switch__22252__auto__,c__22364__auto___22921,G__22749_22919,n__18122__auto___22917,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_22773 = [null,null,null,null,null,null,null];
(statearr_22773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_22773[(1)] = (1));

return statearr_22773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_22762){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_22762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e22774){if((e22774 instanceof Object)){
var ex__22256__auto__ = e22774;
var statearr_22775_22928 = state_22762;
(statearr_22775_22928[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22929 = state_22762;
state_22762 = G__22929;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_22762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_22762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(__22918,switch__22252__auto__,c__22364__auto___22921,G__22749_22919,n__18122__auto___22917,jobs,results,process,async))
})();
var state__22366__auto__ = (function (){var statearr_22776 = f__22365__auto__.call(null);
(statearr_22776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___22921);

return statearr_22776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(__22918,c__22364__auto___22921,G__22749_22919,n__18122__auto___22917,jobs,results,process,async))
);


break;
case "async":
var c__22364__auto___22930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22918,c__22364__auto___22930,G__22749_22919,n__18122__auto___22917,jobs,results,process,async){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (__22918,c__22364__auto___22930,G__22749_22919,n__18122__auto___22917,jobs,results,process,async){
return (function (state_22789){
var state_val_22790 = (state_22789[(1)]);
if((state_val_22790 === (1))){
var state_22789__$1 = state_22789;
var statearr_22791_22931 = state_22789__$1;
(statearr_22791_22931[(2)] = null);

(statearr_22791_22931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (2))){
var state_22789__$1 = state_22789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22789__$1,(4),jobs);
} else {
if((state_val_22790 === (3))){
var inst_22787 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22789__$1,inst_22787);
} else {
if((state_val_22790 === (4))){
var inst_22779 = (state_22789[(2)]);
var inst_22780 = async.call(null,inst_22779);
var state_22789__$1 = state_22789;
if(cljs.core.truth_(inst_22780)){
var statearr_22792_22932 = state_22789__$1;
(statearr_22792_22932[(1)] = (5));

} else {
var statearr_22793_22933 = state_22789__$1;
(statearr_22793_22933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (5))){
var state_22789__$1 = state_22789;
var statearr_22794_22934 = state_22789__$1;
(statearr_22794_22934[(2)] = null);

(statearr_22794_22934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (6))){
var state_22789__$1 = state_22789;
var statearr_22795_22935 = state_22789__$1;
(statearr_22795_22935[(2)] = null);

(statearr_22795_22935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22790 === (7))){
var inst_22785 = (state_22789[(2)]);
var state_22789__$1 = state_22789;
var statearr_22796_22936 = state_22789__$1;
(statearr_22796_22936[(2)] = inst_22785);

(statearr_22796_22936[(1)] = (3));


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
});})(__22918,c__22364__auto___22930,G__22749_22919,n__18122__auto___22917,jobs,results,process,async))
;
return ((function (__22918,switch__22252__auto__,c__22364__auto___22930,G__22749_22919,n__18122__auto___22917,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_22800 = [null,null,null,null,null,null,null];
(statearr_22800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_22800[(1)] = (1));

return statearr_22800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_22789){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_22789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e22801){if((e22801 instanceof Object)){
var ex__22256__auto__ = e22801;
var statearr_22802_22937 = state_22789;
(statearr_22802_22937[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22938 = state_22789;
state_22789 = G__22938;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_22789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_22789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(__22918,switch__22252__auto__,c__22364__auto___22930,G__22749_22919,n__18122__auto___22917,jobs,results,process,async))
})();
var state__22366__auto__ = (function (){var statearr_22803 = f__22365__auto__.call(null);
(statearr_22803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___22930);

return statearr_22803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(__22918,c__22364__auto___22930,G__22749_22919,n__18122__auto___22917,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22939 = (__22918 + (1));
__22918 = G__22939;
continue;
} else {
}
break;
}

var c__22364__auto___22940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___22940,jobs,results,process,async){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___22940,jobs,results,process,async){
return (function (state_22825){
var state_val_22826 = (state_22825[(1)]);
if((state_val_22826 === (1))){
var state_22825__$1 = state_22825;
var statearr_22827_22941 = state_22825__$1;
(statearr_22827_22941[(2)] = null);

(statearr_22827_22941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (2))){
var state_22825__$1 = state_22825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22825__$1,(4),from);
} else {
if((state_val_22826 === (3))){
var inst_22823 = (state_22825[(2)]);
var state_22825__$1 = state_22825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22825__$1,inst_22823);
} else {
if((state_val_22826 === (4))){
var inst_22806 = (state_22825[(7)]);
var inst_22806__$1 = (state_22825[(2)]);
var inst_22807 = (inst_22806__$1 == null);
var state_22825__$1 = (function (){var statearr_22828 = state_22825;
(statearr_22828[(7)] = inst_22806__$1);

return statearr_22828;
})();
if(cljs.core.truth_(inst_22807)){
var statearr_22829_22942 = state_22825__$1;
(statearr_22829_22942[(1)] = (5));

} else {
var statearr_22830_22943 = state_22825__$1;
(statearr_22830_22943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (5))){
var inst_22809 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22825__$1 = state_22825;
var statearr_22831_22944 = state_22825__$1;
(statearr_22831_22944[(2)] = inst_22809);

(statearr_22831_22944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (6))){
var inst_22806 = (state_22825[(7)]);
var inst_22811 = (state_22825[(8)]);
var inst_22811__$1 = cljs.core.async.chan.call(null,(1));
var inst_22812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22813 = [inst_22806,inst_22811__$1];
var inst_22814 = (new cljs.core.PersistentVector(null,2,(5),inst_22812,inst_22813,null));
var state_22825__$1 = (function (){var statearr_22832 = state_22825;
(statearr_22832[(8)] = inst_22811__$1);

return statearr_22832;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22825__$1,(8),jobs,inst_22814);
} else {
if((state_val_22826 === (7))){
var inst_22821 = (state_22825[(2)]);
var state_22825__$1 = state_22825;
var statearr_22833_22945 = state_22825__$1;
(statearr_22833_22945[(2)] = inst_22821);

(statearr_22833_22945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22826 === (8))){
var inst_22811 = (state_22825[(8)]);
var inst_22816 = (state_22825[(2)]);
var state_22825__$1 = (function (){var statearr_22834 = state_22825;
(statearr_22834[(9)] = inst_22816);

return statearr_22834;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22825__$1,(9),results,inst_22811);
} else {
if((state_val_22826 === (9))){
var inst_22818 = (state_22825[(2)]);
var state_22825__$1 = (function (){var statearr_22835 = state_22825;
(statearr_22835[(10)] = inst_22818);

return statearr_22835;
})();
var statearr_22836_22946 = state_22825__$1;
(statearr_22836_22946[(2)] = null);

(statearr_22836_22946[(1)] = (2));


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
});})(c__22364__auto___22940,jobs,results,process,async))
;
return ((function (switch__22252__auto__,c__22364__auto___22940,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_22840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_22840[(1)] = (1));

return statearr_22840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_22825){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_22825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e22841){if((e22841 instanceof Object)){
var ex__22256__auto__ = e22841;
var statearr_22842_22947 = state_22825;
(statearr_22842_22947[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22948 = state_22825;
state_22825 = G__22948;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_22825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_22825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___22940,jobs,results,process,async))
})();
var state__22366__auto__ = (function (){var statearr_22843 = f__22365__auto__.call(null);
(statearr_22843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___22940);

return statearr_22843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___22940,jobs,results,process,async))
);


var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__,jobs,results,process,async){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__,jobs,results,process,async){
return (function (state_22881){
var state_val_22882 = (state_22881[(1)]);
if((state_val_22882 === (7))){
var inst_22877 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22883_22949 = state_22881__$1;
(statearr_22883_22949[(2)] = inst_22877);

(statearr_22883_22949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (20))){
var state_22881__$1 = state_22881;
var statearr_22884_22950 = state_22881__$1;
(statearr_22884_22950[(2)] = null);

(statearr_22884_22950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (1))){
var state_22881__$1 = state_22881;
var statearr_22885_22951 = state_22881__$1;
(statearr_22885_22951[(2)] = null);

(statearr_22885_22951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (4))){
var inst_22846 = (state_22881[(7)]);
var inst_22846__$1 = (state_22881[(2)]);
var inst_22847 = (inst_22846__$1 == null);
var state_22881__$1 = (function (){var statearr_22886 = state_22881;
(statearr_22886[(7)] = inst_22846__$1);

return statearr_22886;
})();
if(cljs.core.truth_(inst_22847)){
var statearr_22887_22952 = state_22881__$1;
(statearr_22887_22952[(1)] = (5));

} else {
var statearr_22888_22953 = state_22881__$1;
(statearr_22888_22953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (15))){
var inst_22859 = (state_22881[(8)]);
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22881__$1,(18),to,inst_22859);
} else {
if((state_val_22882 === (21))){
var inst_22872 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22889_22954 = state_22881__$1;
(statearr_22889_22954[(2)] = inst_22872);

(statearr_22889_22954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (13))){
var inst_22874 = (state_22881[(2)]);
var state_22881__$1 = (function (){var statearr_22890 = state_22881;
(statearr_22890[(9)] = inst_22874);

return statearr_22890;
})();
var statearr_22891_22955 = state_22881__$1;
(statearr_22891_22955[(2)] = null);

(statearr_22891_22955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (6))){
var inst_22846 = (state_22881[(7)]);
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22881__$1,(11),inst_22846);
} else {
if((state_val_22882 === (17))){
var inst_22867 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
if(cljs.core.truth_(inst_22867)){
var statearr_22892_22956 = state_22881__$1;
(statearr_22892_22956[(1)] = (19));

} else {
var statearr_22893_22957 = state_22881__$1;
(statearr_22893_22957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (3))){
var inst_22879 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22881__$1,inst_22879);
} else {
if((state_val_22882 === (12))){
var inst_22856 = (state_22881[(10)]);
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22881__$1,(14),inst_22856);
} else {
if((state_val_22882 === (2))){
var state_22881__$1 = state_22881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22881__$1,(4),results);
} else {
if((state_val_22882 === (19))){
var state_22881__$1 = state_22881;
var statearr_22894_22958 = state_22881__$1;
(statearr_22894_22958[(2)] = null);

(statearr_22894_22958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (11))){
var inst_22856 = (state_22881[(2)]);
var state_22881__$1 = (function (){var statearr_22895 = state_22881;
(statearr_22895[(10)] = inst_22856);

return statearr_22895;
})();
var statearr_22896_22959 = state_22881__$1;
(statearr_22896_22959[(2)] = null);

(statearr_22896_22959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (9))){
var state_22881__$1 = state_22881;
var statearr_22897_22960 = state_22881__$1;
(statearr_22897_22960[(2)] = null);

(statearr_22897_22960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (5))){
var state_22881__$1 = state_22881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22898_22961 = state_22881__$1;
(statearr_22898_22961[(1)] = (8));

} else {
var statearr_22899_22962 = state_22881__$1;
(statearr_22899_22962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (14))){
var inst_22859 = (state_22881[(8)]);
var inst_22861 = (state_22881[(11)]);
var inst_22859__$1 = (state_22881[(2)]);
var inst_22860 = (inst_22859__$1 == null);
var inst_22861__$1 = cljs.core.not.call(null,inst_22860);
var state_22881__$1 = (function (){var statearr_22900 = state_22881;
(statearr_22900[(8)] = inst_22859__$1);

(statearr_22900[(11)] = inst_22861__$1);

return statearr_22900;
})();
if(inst_22861__$1){
var statearr_22901_22963 = state_22881__$1;
(statearr_22901_22963[(1)] = (15));

} else {
var statearr_22902_22964 = state_22881__$1;
(statearr_22902_22964[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (16))){
var inst_22861 = (state_22881[(11)]);
var state_22881__$1 = state_22881;
var statearr_22903_22965 = state_22881__$1;
(statearr_22903_22965[(2)] = inst_22861);

(statearr_22903_22965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (10))){
var inst_22853 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22904_22966 = state_22881__$1;
(statearr_22904_22966[(2)] = inst_22853);

(statearr_22904_22966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (18))){
var inst_22864 = (state_22881[(2)]);
var state_22881__$1 = state_22881;
var statearr_22905_22967 = state_22881__$1;
(statearr_22905_22967[(2)] = inst_22864);

(statearr_22905_22967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22882 === (8))){
var inst_22850 = cljs.core.async.close_BANG_.call(null,to);
var state_22881__$1 = state_22881;
var statearr_22906_22968 = state_22881__$1;
(statearr_22906_22968[(2)] = inst_22850);

(statearr_22906_22968[(1)] = (10));


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
});})(c__22364__auto__,jobs,results,process,async))
;
return ((function (switch__22252__auto__,c__22364__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_22910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__);

(statearr_22910[(1)] = (1));

return statearr_22910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1 = (function (state_22881){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_22881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e22911){if((e22911 instanceof Object)){
var ex__22256__auto__ = e22911;
var statearr_22912_22969 = state_22881;
(statearr_22912_22969[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22970 = state_22881;
state_22881 = G__22970;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__ = function(state_22881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1.call(this,state_22881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__,jobs,results,process,async))
})();
var state__22366__auto__ = (function (){var statearr_22913 = f__22365__auto__.call(null);
(statearr_22913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_22913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__,jobs,results,process,async))
);

return c__22364__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22971 = [];
var len__18277__auto___22974 = arguments.length;
var i__18278__auto___22975 = (0);
while(true){
if((i__18278__auto___22975 < len__18277__auto___22974)){
args22971.push((arguments[i__18278__auto___22975]));

var G__22976 = (i__18278__auto___22975 + (1));
i__18278__auto___22975 = G__22976;
continue;
} else {
}
break;
}

var G__22973 = args22971.length;
switch (G__22973) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22971.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22978 = [];
var len__18277__auto___22981 = arguments.length;
var i__18278__auto___22982 = (0);
while(true){
if((i__18278__auto___22982 < len__18277__auto___22981)){
args22978.push((arguments[i__18278__auto___22982]));

var G__22983 = (i__18278__auto___22982 + (1));
i__18278__auto___22982 = G__22983;
continue;
} else {
}
break;
}

var G__22980 = args22978.length;
switch (G__22980) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22978.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22985 = [];
var len__18277__auto___23038 = arguments.length;
var i__18278__auto___23039 = (0);
while(true){
if((i__18278__auto___23039 < len__18277__auto___23038)){
args22985.push((arguments[i__18278__auto___23039]));

var G__23040 = (i__18278__auto___23039 + (1));
i__18278__auto___23039 = G__23040;
continue;
} else {
}
break;
}

var G__22987 = args22985.length;
switch (G__22987) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22985.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22364__auto___23042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___23042,tc,fc){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___23042,tc,fc){
return (function (state_23013){
var state_val_23014 = (state_23013[(1)]);
if((state_val_23014 === (7))){
var inst_23009 = (state_23013[(2)]);
var state_23013__$1 = state_23013;
var statearr_23015_23043 = state_23013__$1;
(statearr_23015_23043[(2)] = inst_23009);

(statearr_23015_23043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (1))){
var state_23013__$1 = state_23013;
var statearr_23016_23044 = state_23013__$1;
(statearr_23016_23044[(2)] = null);

(statearr_23016_23044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (4))){
var inst_22990 = (state_23013[(7)]);
var inst_22990__$1 = (state_23013[(2)]);
var inst_22991 = (inst_22990__$1 == null);
var state_23013__$1 = (function (){var statearr_23017 = state_23013;
(statearr_23017[(7)] = inst_22990__$1);

return statearr_23017;
})();
if(cljs.core.truth_(inst_22991)){
var statearr_23018_23045 = state_23013__$1;
(statearr_23018_23045[(1)] = (5));

} else {
var statearr_23019_23046 = state_23013__$1;
(statearr_23019_23046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (13))){
var state_23013__$1 = state_23013;
var statearr_23020_23047 = state_23013__$1;
(statearr_23020_23047[(2)] = null);

(statearr_23020_23047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (6))){
var inst_22990 = (state_23013[(7)]);
var inst_22996 = p.call(null,inst_22990);
var state_23013__$1 = state_23013;
if(cljs.core.truth_(inst_22996)){
var statearr_23021_23048 = state_23013__$1;
(statearr_23021_23048[(1)] = (9));

} else {
var statearr_23022_23049 = state_23013__$1;
(statearr_23022_23049[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (3))){
var inst_23011 = (state_23013[(2)]);
var state_23013__$1 = state_23013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23013__$1,inst_23011);
} else {
if((state_val_23014 === (12))){
var state_23013__$1 = state_23013;
var statearr_23023_23050 = state_23013__$1;
(statearr_23023_23050[(2)] = null);

(statearr_23023_23050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (2))){
var state_23013__$1 = state_23013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23013__$1,(4),ch);
} else {
if((state_val_23014 === (11))){
var inst_22990 = (state_23013[(7)]);
var inst_23000 = (state_23013[(2)]);
var state_23013__$1 = state_23013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23013__$1,(8),inst_23000,inst_22990);
} else {
if((state_val_23014 === (9))){
var state_23013__$1 = state_23013;
var statearr_23024_23051 = state_23013__$1;
(statearr_23024_23051[(2)] = tc);

(statearr_23024_23051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (5))){
var inst_22993 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22994 = cljs.core.async.close_BANG_.call(null,fc);
var state_23013__$1 = (function (){var statearr_23025 = state_23013;
(statearr_23025[(8)] = inst_22993);

return statearr_23025;
})();
var statearr_23026_23052 = state_23013__$1;
(statearr_23026_23052[(2)] = inst_22994);

(statearr_23026_23052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (14))){
var inst_23007 = (state_23013[(2)]);
var state_23013__$1 = state_23013;
var statearr_23027_23053 = state_23013__$1;
(statearr_23027_23053[(2)] = inst_23007);

(statearr_23027_23053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (10))){
var state_23013__$1 = state_23013;
var statearr_23028_23054 = state_23013__$1;
(statearr_23028_23054[(2)] = fc);

(statearr_23028_23054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23014 === (8))){
var inst_23002 = (state_23013[(2)]);
var state_23013__$1 = state_23013;
if(cljs.core.truth_(inst_23002)){
var statearr_23029_23055 = state_23013__$1;
(statearr_23029_23055[(1)] = (12));

} else {
var statearr_23030_23056 = state_23013__$1;
(statearr_23030_23056[(1)] = (13));

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
});})(c__22364__auto___23042,tc,fc))
;
return ((function (switch__22252__auto__,c__22364__auto___23042,tc,fc){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_23034 = [null,null,null,null,null,null,null,null,null];
(statearr_23034[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_23034[(1)] = (1));

return statearr_23034;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_23013){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_23013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e23035){if((e23035 instanceof Object)){
var ex__22256__auto__ = e23035;
var statearr_23036_23057 = state_23013;
(statearr_23036_23057[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23058 = state_23013;
state_23013 = G__23058;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_23013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_23013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___23042,tc,fc))
})();
var state__22366__auto__ = (function (){var statearr_23037 = f__22365__auto__.call(null);
(statearr_23037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___23042);

return statearr_23037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___23042,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_23122){
var state_val_23123 = (state_23122[(1)]);
if((state_val_23123 === (7))){
var inst_23118 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23124_23145 = state_23122__$1;
(statearr_23124_23145[(2)] = inst_23118);

(statearr_23124_23145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (1))){
var inst_23102 = init;
var state_23122__$1 = (function (){var statearr_23125 = state_23122;
(statearr_23125[(7)] = inst_23102);

return statearr_23125;
})();
var statearr_23126_23146 = state_23122__$1;
(statearr_23126_23146[(2)] = null);

(statearr_23126_23146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (4))){
var inst_23105 = (state_23122[(8)]);
var inst_23105__$1 = (state_23122[(2)]);
var inst_23106 = (inst_23105__$1 == null);
var state_23122__$1 = (function (){var statearr_23127 = state_23122;
(statearr_23127[(8)] = inst_23105__$1);

return statearr_23127;
})();
if(cljs.core.truth_(inst_23106)){
var statearr_23128_23147 = state_23122__$1;
(statearr_23128_23147[(1)] = (5));

} else {
var statearr_23129_23148 = state_23122__$1;
(statearr_23129_23148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (6))){
var inst_23102 = (state_23122[(7)]);
var inst_23109 = (state_23122[(9)]);
var inst_23105 = (state_23122[(8)]);
var inst_23109__$1 = f.call(null,inst_23102,inst_23105);
var inst_23110 = cljs.core.reduced_QMARK_.call(null,inst_23109__$1);
var state_23122__$1 = (function (){var statearr_23130 = state_23122;
(statearr_23130[(9)] = inst_23109__$1);

return statearr_23130;
})();
if(inst_23110){
var statearr_23131_23149 = state_23122__$1;
(statearr_23131_23149[(1)] = (8));

} else {
var statearr_23132_23150 = state_23122__$1;
(statearr_23132_23150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (3))){
var inst_23120 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23122__$1,inst_23120);
} else {
if((state_val_23123 === (2))){
var state_23122__$1 = state_23122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23122__$1,(4),ch);
} else {
if((state_val_23123 === (9))){
var inst_23109 = (state_23122[(9)]);
var inst_23102 = inst_23109;
var state_23122__$1 = (function (){var statearr_23133 = state_23122;
(statearr_23133[(7)] = inst_23102);

return statearr_23133;
})();
var statearr_23134_23151 = state_23122__$1;
(statearr_23134_23151[(2)] = null);

(statearr_23134_23151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (5))){
var inst_23102 = (state_23122[(7)]);
var state_23122__$1 = state_23122;
var statearr_23135_23152 = state_23122__$1;
(statearr_23135_23152[(2)] = inst_23102);

(statearr_23135_23152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (10))){
var inst_23116 = (state_23122[(2)]);
var state_23122__$1 = state_23122;
var statearr_23136_23153 = state_23122__$1;
(statearr_23136_23153[(2)] = inst_23116);

(statearr_23136_23153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23123 === (8))){
var inst_23109 = (state_23122[(9)]);
var inst_23112 = cljs.core.deref.call(null,inst_23109);
var state_23122__$1 = state_23122;
var statearr_23137_23154 = state_23122__$1;
(statearr_23137_23154[(2)] = inst_23112);

(statearr_23137_23154[(1)] = (10));


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
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22253__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22253__auto____0 = (function (){
var statearr_23141 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23141[(0)] = cljs$core$async$reduce_$_state_machine__22253__auto__);

(statearr_23141[(1)] = (1));

return statearr_23141;
});
var cljs$core$async$reduce_$_state_machine__22253__auto____1 = (function (state_23122){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_23122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e23142){if((e23142 instanceof Object)){
var ex__22256__auto__ = e23142;
var statearr_23143_23155 = state_23122;
(statearr_23143_23155[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23156 = state_23122;
state_23122 = G__23156;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22253__auto__ = function(state_23122){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22253__auto____1.call(this,state_23122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22253__auto____0;
cljs$core$async$reduce_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22253__auto____1;
return cljs$core$async$reduce_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_23144 = f__22365__auto__.call(null);
(statearr_23144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_23144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23157 = [];
var len__18277__auto___23209 = arguments.length;
var i__18278__auto___23210 = (0);
while(true){
if((i__18278__auto___23210 < len__18277__auto___23209)){
args23157.push((arguments[i__18278__auto___23210]));

var G__23211 = (i__18278__auto___23210 + (1));
i__18278__auto___23210 = G__23211;
continue;
} else {
}
break;
}

var G__23159 = args23157.length;
switch (G__23159) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23157.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_23184){
var state_val_23185 = (state_23184[(1)]);
if((state_val_23185 === (7))){
var inst_23166 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23186_23213 = state_23184__$1;
(statearr_23186_23213[(2)] = inst_23166);

(statearr_23186_23213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (1))){
var inst_23160 = cljs.core.seq.call(null,coll);
var inst_23161 = inst_23160;
var state_23184__$1 = (function (){var statearr_23187 = state_23184;
(statearr_23187[(7)] = inst_23161);

return statearr_23187;
})();
var statearr_23188_23214 = state_23184__$1;
(statearr_23188_23214[(2)] = null);

(statearr_23188_23214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (4))){
var inst_23161 = (state_23184[(7)]);
var inst_23164 = cljs.core.first.call(null,inst_23161);
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23184__$1,(7),ch,inst_23164);
} else {
if((state_val_23185 === (13))){
var inst_23178 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23189_23215 = state_23184__$1;
(statearr_23189_23215[(2)] = inst_23178);

(statearr_23189_23215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (6))){
var inst_23169 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
if(cljs.core.truth_(inst_23169)){
var statearr_23190_23216 = state_23184__$1;
(statearr_23190_23216[(1)] = (8));

} else {
var statearr_23191_23217 = state_23184__$1;
(statearr_23191_23217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (3))){
var inst_23182 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23184__$1,inst_23182);
} else {
if((state_val_23185 === (12))){
var state_23184__$1 = state_23184;
var statearr_23192_23218 = state_23184__$1;
(statearr_23192_23218[(2)] = null);

(statearr_23192_23218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (2))){
var inst_23161 = (state_23184[(7)]);
var state_23184__$1 = state_23184;
if(cljs.core.truth_(inst_23161)){
var statearr_23193_23219 = state_23184__$1;
(statearr_23193_23219[(1)] = (4));

} else {
var statearr_23194_23220 = state_23184__$1;
(statearr_23194_23220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (11))){
var inst_23175 = cljs.core.async.close_BANG_.call(null,ch);
var state_23184__$1 = state_23184;
var statearr_23195_23221 = state_23184__$1;
(statearr_23195_23221[(2)] = inst_23175);

(statearr_23195_23221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (9))){
var state_23184__$1 = state_23184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23196_23222 = state_23184__$1;
(statearr_23196_23222[(1)] = (11));

} else {
var statearr_23197_23223 = state_23184__$1;
(statearr_23197_23223[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (5))){
var inst_23161 = (state_23184[(7)]);
var state_23184__$1 = state_23184;
var statearr_23198_23224 = state_23184__$1;
(statearr_23198_23224[(2)] = inst_23161);

(statearr_23198_23224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (10))){
var inst_23180 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23199_23225 = state_23184__$1;
(statearr_23199_23225[(2)] = inst_23180);

(statearr_23199_23225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (8))){
var inst_23161 = (state_23184[(7)]);
var inst_23171 = cljs.core.next.call(null,inst_23161);
var inst_23161__$1 = inst_23171;
var state_23184__$1 = (function (){var statearr_23200 = state_23184;
(statearr_23200[(7)] = inst_23161__$1);

return statearr_23200;
})();
var statearr_23201_23226 = state_23184__$1;
(statearr_23201_23226[(2)] = null);

(statearr_23201_23226[(1)] = (2));


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
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_23205 = [null,null,null,null,null,null,null,null];
(statearr_23205[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_23205[(1)] = (1));

return statearr_23205;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_23184){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_23184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e23206){if((e23206 instanceof Object)){
var ex__22256__auto__ = e23206;
var statearr_23207_23227 = state_23184;
(statearr_23207_23227[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23228 = state_23184;
state_23184 = G__23228;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_23184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_23184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_23208 = f__22365__auto__.call(null);
(statearr_23208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_23208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17874__auto__ = (((_ == null))?null:_);
var m__17875__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,_);
} else {
var m__17875__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17875__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m,ch);
} else {
var m__17875__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m);
} else {
var m__17875__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23450 = (function (mult,ch,cs,meta23451){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23451 = meta23451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23452,meta23451__$1){
var self__ = this;
var _23452__$1 = this;
return (new cljs.core.async.t_cljs$core$async23450(self__.mult,self__.ch,self__.cs,meta23451__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23452){
var self__ = this;
var _23452__$1 = this;
return self__.meta23451;
});})(cs))
;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23450.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23450.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23451","meta23451",1289671548,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23450";

cljs.core.async.t_cljs$core$async23450.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async23450");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23450 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23450(mult__$1,ch__$1,cs__$1,meta23451){
return (new cljs.core.async.t_cljs$core$async23450(mult__$1,ch__$1,cs__$1,meta23451));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23450(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22364__auto___23671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___23671,cs,m,dchan,dctr,done){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___23671,cs,m,dchan,dctr,done){
return (function (state_23583){
var state_val_23584 = (state_23583[(1)]);
if((state_val_23584 === (7))){
var inst_23579 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23585_23672 = state_23583__$1;
(statearr_23585_23672[(2)] = inst_23579);

(statearr_23585_23672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (20))){
var inst_23484 = (state_23583[(7)]);
var inst_23494 = cljs.core.first.call(null,inst_23484);
var inst_23495 = cljs.core.nth.call(null,inst_23494,(0),null);
var inst_23496 = cljs.core.nth.call(null,inst_23494,(1),null);
var state_23583__$1 = (function (){var statearr_23586 = state_23583;
(statearr_23586[(8)] = inst_23495);

return statearr_23586;
})();
if(cljs.core.truth_(inst_23496)){
var statearr_23587_23673 = state_23583__$1;
(statearr_23587_23673[(1)] = (22));

} else {
var statearr_23588_23674 = state_23583__$1;
(statearr_23588_23674[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (27))){
var inst_23531 = (state_23583[(9)]);
var inst_23524 = (state_23583[(10)]);
var inst_23455 = (state_23583[(11)]);
var inst_23526 = (state_23583[(12)]);
var inst_23531__$1 = cljs.core._nth.call(null,inst_23524,inst_23526);
var inst_23532 = cljs.core.async.put_BANG_.call(null,inst_23531__$1,inst_23455,done);
var state_23583__$1 = (function (){var statearr_23589 = state_23583;
(statearr_23589[(9)] = inst_23531__$1);

return statearr_23589;
})();
if(cljs.core.truth_(inst_23532)){
var statearr_23590_23675 = state_23583__$1;
(statearr_23590_23675[(1)] = (30));

} else {
var statearr_23591_23676 = state_23583__$1;
(statearr_23591_23676[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (1))){
var state_23583__$1 = state_23583;
var statearr_23592_23677 = state_23583__$1;
(statearr_23592_23677[(2)] = null);

(statearr_23592_23677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (24))){
var inst_23484 = (state_23583[(7)]);
var inst_23501 = (state_23583[(2)]);
var inst_23502 = cljs.core.next.call(null,inst_23484);
var inst_23464 = inst_23502;
var inst_23465 = null;
var inst_23466 = (0);
var inst_23467 = (0);
var state_23583__$1 = (function (){var statearr_23593 = state_23583;
(statearr_23593[(13)] = inst_23501);

(statearr_23593[(14)] = inst_23466);

(statearr_23593[(15)] = inst_23464);

(statearr_23593[(16)] = inst_23467);

(statearr_23593[(17)] = inst_23465);

return statearr_23593;
})();
var statearr_23594_23678 = state_23583__$1;
(statearr_23594_23678[(2)] = null);

(statearr_23594_23678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (39))){
var state_23583__$1 = state_23583;
var statearr_23598_23679 = state_23583__$1;
(statearr_23598_23679[(2)] = null);

(statearr_23598_23679[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (4))){
var inst_23455 = (state_23583[(11)]);
var inst_23455__$1 = (state_23583[(2)]);
var inst_23456 = (inst_23455__$1 == null);
var state_23583__$1 = (function (){var statearr_23599 = state_23583;
(statearr_23599[(11)] = inst_23455__$1);

return statearr_23599;
})();
if(cljs.core.truth_(inst_23456)){
var statearr_23600_23680 = state_23583__$1;
(statearr_23600_23680[(1)] = (5));

} else {
var statearr_23601_23681 = state_23583__$1;
(statearr_23601_23681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (15))){
var inst_23466 = (state_23583[(14)]);
var inst_23464 = (state_23583[(15)]);
var inst_23467 = (state_23583[(16)]);
var inst_23465 = (state_23583[(17)]);
var inst_23480 = (state_23583[(2)]);
var inst_23481 = (inst_23467 + (1));
var tmp23595 = inst_23466;
var tmp23596 = inst_23464;
var tmp23597 = inst_23465;
var inst_23464__$1 = tmp23596;
var inst_23465__$1 = tmp23597;
var inst_23466__$1 = tmp23595;
var inst_23467__$1 = inst_23481;
var state_23583__$1 = (function (){var statearr_23602 = state_23583;
(statearr_23602[(18)] = inst_23480);

(statearr_23602[(14)] = inst_23466__$1);

(statearr_23602[(15)] = inst_23464__$1);

(statearr_23602[(16)] = inst_23467__$1);

(statearr_23602[(17)] = inst_23465__$1);

return statearr_23602;
})();
var statearr_23603_23682 = state_23583__$1;
(statearr_23603_23682[(2)] = null);

(statearr_23603_23682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (21))){
var inst_23505 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23607_23683 = state_23583__$1;
(statearr_23607_23683[(2)] = inst_23505);

(statearr_23607_23683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (31))){
var inst_23531 = (state_23583[(9)]);
var inst_23535 = done.call(null,null);
var inst_23536 = cljs.core.async.untap_STAR_.call(null,m,inst_23531);
var state_23583__$1 = (function (){var statearr_23608 = state_23583;
(statearr_23608[(19)] = inst_23535);

return statearr_23608;
})();
var statearr_23609_23684 = state_23583__$1;
(statearr_23609_23684[(2)] = inst_23536);

(statearr_23609_23684[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (32))){
var inst_23525 = (state_23583[(20)]);
var inst_23523 = (state_23583[(21)]);
var inst_23524 = (state_23583[(10)]);
var inst_23526 = (state_23583[(12)]);
var inst_23538 = (state_23583[(2)]);
var inst_23539 = (inst_23526 + (1));
var tmp23604 = inst_23525;
var tmp23605 = inst_23523;
var tmp23606 = inst_23524;
var inst_23523__$1 = tmp23605;
var inst_23524__$1 = tmp23606;
var inst_23525__$1 = tmp23604;
var inst_23526__$1 = inst_23539;
var state_23583__$1 = (function (){var statearr_23610 = state_23583;
(statearr_23610[(22)] = inst_23538);

(statearr_23610[(20)] = inst_23525__$1);

(statearr_23610[(21)] = inst_23523__$1);

(statearr_23610[(10)] = inst_23524__$1);

(statearr_23610[(12)] = inst_23526__$1);

return statearr_23610;
})();
var statearr_23611_23685 = state_23583__$1;
(statearr_23611_23685[(2)] = null);

(statearr_23611_23685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (40))){
var inst_23551 = (state_23583[(23)]);
var inst_23555 = done.call(null,null);
var inst_23556 = cljs.core.async.untap_STAR_.call(null,m,inst_23551);
var state_23583__$1 = (function (){var statearr_23612 = state_23583;
(statearr_23612[(24)] = inst_23555);

return statearr_23612;
})();
var statearr_23613_23686 = state_23583__$1;
(statearr_23613_23686[(2)] = inst_23556);

(statearr_23613_23686[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (33))){
var inst_23542 = (state_23583[(25)]);
var inst_23544 = cljs.core.chunked_seq_QMARK_.call(null,inst_23542);
var state_23583__$1 = state_23583;
if(inst_23544){
var statearr_23614_23687 = state_23583__$1;
(statearr_23614_23687[(1)] = (36));

} else {
var statearr_23615_23688 = state_23583__$1;
(statearr_23615_23688[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (13))){
var inst_23474 = (state_23583[(26)]);
var inst_23477 = cljs.core.async.close_BANG_.call(null,inst_23474);
var state_23583__$1 = state_23583;
var statearr_23616_23689 = state_23583__$1;
(statearr_23616_23689[(2)] = inst_23477);

(statearr_23616_23689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (22))){
var inst_23495 = (state_23583[(8)]);
var inst_23498 = cljs.core.async.close_BANG_.call(null,inst_23495);
var state_23583__$1 = state_23583;
var statearr_23617_23690 = state_23583__$1;
(statearr_23617_23690[(2)] = inst_23498);

(statearr_23617_23690[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (36))){
var inst_23542 = (state_23583[(25)]);
var inst_23546 = cljs.core.chunk_first.call(null,inst_23542);
var inst_23547 = cljs.core.chunk_rest.call(null,inst_23542);
var inst_23548 = cljs.core.count.call(null,inst_23546);
var inst_23523 = inst_23547;
var inst_23524 = inst_23546;
var inst_23525 = inst_23548;
var inst_23526 = (0);
var state_23583__$1 = (function (){var statearr_23618 = state_23583;
(statearr_23618[(20)] = inst_23525);

(statearr_23618[(21)] = inst_23523);

(statearr_23618[(10)] = inst_23524);

(statearr_23618[(12)] = inst_23526);

return statearr_23618;
})();
var statearr_23619_23691 = state_23583__$1;
(statearr_23619_23691[(2)] = null);

(statearr_23619_23691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (41))){
var inst_23542 = (state_23583[(25)]);
var inst_23558 = (state_23583[(2)]);
var inst_23559 = cljs.core.next.call(null,inst_23542);
var inst_23523 = inst_23559;
var inst_23524 = null;
var inst_23525 = (0);
var inst_23526 = (0);
var state_23583__$1 = (function (){var statearr_23620 = state_23583;
(statearr_23620[(27)] = inst_23558);

(statearr_23620[(20)] = inst_23525);

(statearr_23620[(21)] = inst_23523);

(statearr_23620[(10)] = inst_23524);

(statearr_23620[(12)] = inst_23526);

return statearr_23620;
})();
var statearr_23621_23692 = state_23583__$1;
(statearr_23621_23692[(2)] = null);

(statearr_23621_23692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (43))){
var state_23583__$1 = state_23583;
var statearr_23622_23693 = state_23583__$1;
(statearr_23622_23693[(2)] = null);

(statearr_23622_23693[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (29))){
var inst_23567 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23623_23694 = state_23583__$1;
(statearr_23623_23694[(2)] = inst_23567);

(statearr_23623_23694[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (44))){
var inst_23576 = (state_23583[(2)]);
var state_23583__$1 = (function (){var statearr_23624 = state_23583;
(statearr_23624[(28)] = inst_23576);

return statearr_23624;
})();
var statearr_23625_23695 = state_23583__$1;
(statearr_23625_23695[(2)] = null);

(statearr_23625_23695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (6))){
var inst_23515 = (state_23583[(29)]);
var inst_23514 = cljs.core.deref.call(null,cs);
var inst_23515__$1 = cljs.core.keys.call(null,inst_23514);
var inst_23516 = cljs.core.count.call(null,inst_23515__$1);
var inst_23517 = cljs.core.reset_BANG_.call(null,dctr,inst_23516);
var inst_23522 = cljs.core.seq.call(null,inst_23515__$1);
var inst_23523 = inst_23522;
var inst_23524 = null;
var inst_23525 = (0);
var inst_23526 = (0);
var state_23583__$1 = (function (){var statearr_23626 = state_23583;
(statearr_23626[(20)] = inst_23525);

(statearr_23626[(29)] = inst_23515__$1);

(statearr_23626[(21)] = inst_23523);

(statearr_23626[(10)] = inst_23524);

(statearr_23626[(12)] = inst_23526);

(statearr_23626[(30)] = inst_23517);

return statearr_23626;
})();
var statearr_23627_23696 = state_23583__$1;
(statearr_23627_23696[(2)] = null);

(statearr_23627_23696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (28))){
var inst_23542 = (state_23583[(25)]);
var inst_23523 = (state_23583[(21)]);
var inst_23542__$1 = cljs.core.seq.call(null,inst_23523);
var state_23583__$1 = (function (){var statearr_23628 = state_23583;
(statearr_23628[(25)] = inst_23542__$1);

return statearr_23628;
})();
if(inst_23542__$1){
var statearr_23629_23697 = state_23583__$1;
(statearr_23629_23697[(1)] = (33));

} else {
var statearr_23630_23698 = state_23583__$1;
(statearr_23630_23698[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (25))){
var inst_23525 = (state_23583[(20)]);
var inst_23526 = (state_23583[(12)]);
var inst_23528 = (inst_23526 < inst_23525);
var inst_23529 = inst_23528;
var state_23583__$1 = state_23583;
if(cljs.core.truth_(inst_23529)){
var statearr_23631_23699 = state_23583__$1;
(statearr_23631_23699[(1)] = (27));

} else {
var statearr_23632_23700 = state_23583__$1;
(statearr_23632_23700[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (34))){
var state_23583__$1 = state_23583;
var statearr_23633_23701 = state_23583__$1;
(statearr_23633_23701[(2)] = null);

(statearr_23633_23701[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (17))){
var state_23583__$1 = state_23583;
var statearr_23634_23702 = state_23583__$1;
(statearr_23634_23702[(2)] = null);

(statearr_23634_23702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (3))){
var inst_23581 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23583__$1,inst_23581);
} else {
if((state_val_23584 === (12))){
var inst_23510 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23635_23703 = state_23583__$1;
(statearr_23635_23703[(2)] = inst_23510);

(statearr_23635_23703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (2))){
var state_23583__$1 = state_23583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23583__$1,(4),ch);
} else {
if((state_val_23584 === (23))){
var state_23583__$1 = state_23583;
var statearr_23636_23704 = state_23583__$1;
(statearr_23636_23704[(2)] = null);

(statearr_23636_23704[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (35))){
var inst_23565 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23637_23705 = state_23583__$1;
(statearr_23637_23705[(2)] = inst_23565);

(statearr_23637_23705[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (19))){
var inst_23484 = (state_23583[(7)]);
var inst_23488 = cljs.core.chunk_first.call(null,inst_23484);
var inst_23489 = cljs.core.chunk_rest.call(null,inst_23484);
var inst_23490 = cljs.core.count.call(null,inst_23488);
var inst_23464 = inst_23489;
var inst_23465 = inst_23488;
var inst_23466 = inst_23490;
var inst_23467 = (0);
var state_23583__$1 = (function (){var statearr_23638 = state_23583;
(statearr_23638[(14)] = inst_23466);

(statearr_23638[(15)] = inst_23464);

(statearr_23638[(16)] = inst_23467);

(statearr_23638[(17)] = inst_23465);

return statearr_23638;
})();
var statearr_23639_23706 = state_23583__$1;
(statearr_23639_23706[(2)] = null);

(statearr_23639_23706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (11))){
var inst_23464 = (state_23583[(15)]);
var inst_23484 = (state_23583[(7)]);
var inst_23484__$1 = cljs.core.seq.call(null,inst_23464);
var state_23583__$1 = (function (){var statearr_23640 = state_23583;
(statearr_23640[(7)] = inst_23484__$1);

return statearr_23640;
})();
if(inst_23484__$1){
var statearr_23641_23707 = state_23583__$1;
(statearr_23641_23707[(1)] = (16));

} else {
var statearr_23642_23708 = state_23583__$1;
(statearr_23642_23708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (9))){
var inst_23512 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23643_23709 = state_23583__$1;
(statearr_23643_23709[(2)] = inst_23512);

(statearr_23643_23709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (5))){
var inst_23462 = cljs.core.deref.call(null,cs);
var inst_23463 = cljs.core.seq.call(null,inst_23462);
var inst_23464 = inst_23463;
var inst_23465 = null;
var inst_23466 = (0);
var inst_23467 = (0);
var state_23583__$1 = (function (){var statearr_23644 = state_23583;
(statearr_23644[(14)] = inst_23466);

(statearr_23644[(15)] = inst_23464);

(statearr_23644[(16)] = inst_23467);

(statearr_23644[(17)] = inst_23465);

return statearr_23644;
})();
var statearr_23645_23710 = state_23583__$1;
(statearr_23645_23710[(2)] = null);

(statearr_23645_23710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (14))){
var state_23583__$1 = state_23583;
var statearr_23646_23711 = state_23583__$1;
(statearr_23646_23711[(2)] = null);

(statearr_23646_23711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (45))){
var inst_23573 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23647_23712 = state_23583__$1;
(statearr_23647_23712[(2)] = inst_23573);

(statearr_23647_23712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (26))){
var inst_23515 = (state_23583[(29)]);
var inst_23569 = (state_23583[(2)]);
var inst_23570 = cljs.core.seq.call(null,inst_23515);
var state_23583__$1 = (function (){var statearr_23648 = state_23583;
(statearr_23648[(31)] = inst_23569);

return statearr_23648;
})();
if(inst_23570){
var statearr_23649_23713 = state_23583__$1;
(statearr_23649_23713[(1)] = (42));

} else {
var statearr_23650_23714 = state_23583__$1;
(statearr_23650_23714[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (16))){
var inst_23484 = (state_23583[(7)]);
var inst_23486 = cljs.core.chunked_seq_QMARK_.call(null,inst_23484);
var state_23583__$1 = state_23583;
if(inst_23486){
var statearr_23651_23715 = state_23583__$1;
(statearr_23651_23715[(1)] = (19));

} else {
var statearr_23652_23716 = state_23583__$1;
(statearr_23652_23716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (38))){
var inst_23562 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23653_23717 = state_23583__$1;
(statearr_23653_23717[(2)] = inst_23562);

(statearr_23653_23717[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (30))){
var state_23583__$1 = state_23583;
var statearr_23654_23718 = state_23583__$1;
(statearr_23654_23718[(2)] = null);

(statearr_23654_23718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (10))){
var inst_23467 = (state_23583[(16)]);
var inst_23465 = (state_23583[(17)]);
var inst_23473 = cljs.core._nth.call(null,inst_23465,inst_23467);
var inst_23474 = cljs.core.nth.call(null,inst_23473,(0),null);
var inst_23475 = cljs.core.nth.call(null,inst_23473,(1),null);
var state_23583__$1 = (function (){var statearr_23655 = state_23583;
(statearr_23655[(26)] = inst_23474);

return statearr_23655;
})();
if(cljs.core.truth_(inst_23475)){
var statearr_23656_23719 = state_23583__$1;
(statearr_23656_23719[(1)] = (13));

} else {
var statearr_23657_23720 = state_23583__$1;
(statearr_23657_23720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (18))){
var inst_23508 = (state_23583[(2)]);
var state_23583__$1 = state_23583;
var statearr_23658_23721 = state_23583__$1;
(statearr_23658_23721[(2)] = inst_23508);

(statearr_23658_23721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (42))){
var state_23583__$1 = state_23583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23583__$1,(45),dchan);
} else {
if((state_val_23584 === (37))){
var inst_23542 = (state_23583[(25)]);
var inst_23551 = (state_23583[(23)]);
var inst_23455 = (state_23583[(11)]);
var inst_23551__$1 = cljs.core.first.call(null,inst_23542);
var inst_23552 = cljs.core.async.put_BANG_.call(null,inst_23551__$1,inst_23455,done);
var state_23583__$1 = (function (){var statearr_23659 = state_23583;
(statearr_23659[(23)] = inst_23551__$1);

return statearr_23659;
})();
if(cljs.core.truth_(inst_23552)){
var statearr_23660_23722 = state_23583__$1;
(statearr_23660_23722[(1)] = (39));

} else {
var statearr_23661_23723 = state_23583__$1;
(statearr_23661_23723[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23584 === (8))){
var inst_23466 = (state_23583[(14)]);
var inst_23467 = (state_23583[(16)]);
var inst_23469 = (inst_23467 < inst_23466);
var inst_23470 = inst_23469;
var state_23583__$1 = state_23583;
if(cljs.core.truth_(inst_23470)){
var statearr_23662_23724 = state_23583__$1;
(statearr_23662_23724[(1)] = (10));

} else {
var statearr_23663_23725 = state_23583__$1;
(statearr_23663_23725[(1)] = (11));

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
});})(c__22364__auto___23671,cs,m,dchan,dctr,done))
;
return ((function (switch__22252__auto__,c__22364__auto___23671,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22253__auto__ = null;
var cljs$core$async$mult_$_state_machine__22253__auto____0 = (function (){
var statearr_23667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23667[(0)] = cljs$core$async$mult_$_state_machine__22253__auto__);

(statearr_23667[(1)] = (1));

return statearr_23667;
});
var cljs$core$async$mult_$_state_machine__22253__auto____1 = (function (state_23583){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_23583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e23668){if((e23668 instanceof Object)){
var ex__22256__auto__ = e23668;
var statearr_23669_23726 = state_23583;
(statearr_23669_23726[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23727 = state_23583;
state_23583 = G__23727;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22253__auto__ = function(state_23583){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22253__auto____1.call(this,state_23583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22253__auto____0;
cljs$core$async$mult_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22253__auto____1;
return cljs$core$async$mult_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___23671,cs,m,dchan,dctr,done))
})();
var state__22366__auto__ = (function (){var statearr_23670 = f__22365__auto__.call(null);
(statearr_23670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___23671);

return statearr_23670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___23671,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23728 = [];
var len__18277__auto___23731 = arguments.length;
var i__18278__auto___23732 = (0);
while(true){
if((i__18278__auto___23732 < len__18277__auto___23731)){
args23728.push((arguments[i__18278__auto___23732]));

var G__23733 = (i__18278__auto___23732 + (1));
i__18278__auto___23732 = G__23733;
continue;
} else {
}
break;
}

var G__23730 = args23728.length;
switch (G__23730) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23728.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m,ch);
} else {
var m__17875__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m,ch);
} else {
var m__17875__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m);
} else {
var m__17875__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m,state_map);
} else {
var m__17875__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17874__auto__ = (((m == null))?null:m);
var m__17875__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,m,mode);
} else {
var m__17875__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18284__auto__ = [];
var len__18277__auto___23745 = arguments.length;
var i__18278__auto___23746 = (0);
while(true){
if((i__18278__auto___23746 < len__18277__auto___23745)){
args__18284__auto__.push((arguments[i__18278__auto___23746]));

var G__23747 = (i__18278__auto___23746 + (1));
i__18278__auto___23746 = G__23747;
continue;
} else {
}
break;
}

var argseq__18285__auto__ = ((((3) < args__18284__auto__.length))?(new cljs.core.IndexedSeq(args__18284__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18285__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23739){
var map__23740 = p__23739;
var map__23740__$1 = ((((!((map__23740 == null)))?((((map__23740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23740):map__23740);
var opts = map__23740__$1;
var statearr_23742_23748 = state;
(statearr_23742_23748[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23740,map__23740__$1,opts){
return (function (val){
var statearr_23743_23749 = state;
(statearr_23743_23749[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23740,map__23740__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23744_23750 = state;
(statearr_23744_23750[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23735){
var G__23736 = cljs.core.first.call(null,seq23735);
var seq23735__$1 = cljs.core.next.call(null,seq23735);
var G__23737 = cljs.core.first.call(null,seq23735__$1);
var seq23735__$2 = cljs.core.next.call(null,seq23735__$1);
var G__23738 = cljs.core.first.call(null,seq23735__$2);
var seq23735__$3 = cljs.core.next.call(null,seq23735__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23736,G__23737,G__23738,seq23735__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23914 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23915){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23915 = meta23915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23916,meta23915__$1){
var self__ = this;
var _23916__$1 = this;
return (new cljs.core.async.t_cljs$core$async23914(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23915__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23916){
var self__ = this;
var _23916__$1 = this;
return self__.meta23915;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23915","meta23915",-1702611187,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23914";

cljs.core.async.t_cljs$core$async23914.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async23914");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23914 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23914(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23915){
return (new cljs.core.async.t_cljs$core$async23914(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23915));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23914(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22364__auto___24077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___24077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___24077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24014){
var state_val_24015 = (state_24014[(1)]);
if((state_val_24015 === (7))){
var inst_23932 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24016_24078 = state_24014__$1;
(statearr_24016_24078[(2)] = inst_23932);

(statearr_24016_24078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (20))){
var inst_23944 = (state_24014[(7)]);
var state_24014__$1 = state_24014;
var statearr_24017_24079 = state_24014__$1;
(statearr_24017_24079[(2)] = inst_23944);

(statearr_24017_24079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (27))){
var state_24014__$1 = state_24014;
var statearr_24018_24080 = state_24014__$1;
(statearr_24018_24080[(2)] = null);

(statearr_24018_24080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (1))){
var inst_23920 = (state_24014[(8)]);
var inst_23920__$1 = calc_state.call(null);
var inst_23922 = (inst_23920__$1 == null);
var inst_23923 = cljs.core.not.call(null,inst_23922);
var state_24014__$1 = (function (){var statearr_24019 = state_24014;
(statearr_24019[(8)] = inst_23920__$1);

return statearr_24019;
})();
if(inst_23923){
var statearr_24020_24081 = state_24014__$1;
(statearr_24020_24081[(1)] = (2));

} else {
var statearr_24021_24082 = state_24014__$1;
(statearr_24021_24082[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (24))){
var inst_23988 = (state_24014[(9)]);
var inst_23974 = (state_24014[(10)]);
var inst_23967 = (state_24014[(11)]);
var inst_23988__$1 = inst_23967.call(null,inst_23974);
var state_24014__$1 = (function (){var statearr_24022 = state_24014;
(statearr_24022[(9)] = inst_23988__$1);

return statearr_24022;
})();
if(cljs.core.truth_(inst_23988__$1)){
var statearr_24023_24083 = state_24014__$1;
(statearr_24023_24083[(1)] = (29));

} else {
var statearr_24024_24084 = state_24014__$1;
(statearr_24024_24084[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (4))){
var inst_23935 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_23935)){
var statearr_24025_24085 = state_24014__$1;
(statearr_24025_24085[(1)] = (8));

} else {
var statearr_24026_24086 = state_24014__$1;
(statearr_24026_24086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (15))){
var inst_23961 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_23961)){
var statearr_24027_24087 = state_24014__$1;
(statearr_24027_24087[(1)] = (19));

} else {
var statearr_24028_24088 = state_24014__$1;
(statearr_24028_24088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (21))){
var inst_23966 = (state_24014[(12)]);
var inst_23966__$1 = (state_24014[(2)]);
var inst_23967 = cljs.core.get.call(null,inst_23966__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23968 = cljs.core.get.call(null,inst_23966__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23969 = cljs.core.get.call(null,inst_23966__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24014__$1 = (function (){var statearr_24029 = state_24014;
(statearr_24029[(12)] = inst_23966__$1);

(statearr_24029[(11)] = inst_23967);

(statearr_24029[(13)] = inst_23968);

return statearr_24029;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24014__$1,(22),inst_23969);
} else {
if((state_val_24015 === (31))){
var inst_23996 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_23996)){
var statearr_24030_24089 = state_24014__$1;
(statearr_24030_24089[(1)] = (32));

} else {
var statearr_24031_24090 = state_24014__$1;
(statearr_24031_24090[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (32))){
var inst_23973 = (state_24014[(14)]);
var state_24014__$1 = state_24014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24014__$1,(35),out,inst_23973);
} else {
if((state_val_24015 === (33))){
var inst_23966 = (state_24014[(12)]);
var inst_23944 = inst_23966;
var state_24014__$1 = (function (){var statearr_24032 = state_24014;
(statearr_24032[(7)] = inst_23944);

return statearr_24032;
})();
var statearr_24033_24091 = state_24014__$1;
(statearr_24033_24091[(2)] = null);

(statearr_24033_24091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (13))){
var inst_23944 = (state_24014[(7)]);
var inst_23951 = inst_23944.cljs$lang$protocol_mask$partition0$;
var inst_23952 = (inst_23951 & (64));
var inst_23953 = inst_23944.cljs$core$ISeq$;
var inst_23954 = (inst_23952) || (inst_23953);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_23954)){
var statearr_24034_24092 = state_24014__$1;
(statearr_24034_24092[(1)] = (16));

} else {
var statearr_24035_24093 = state_24014__$1;
(statearr_24035_24093[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (22))){
var inst_23973 = (state_24014[(14)]);
var inst_23974 = (state_24014[(10)]);
var inst_23972 = (state_24014[(2)]);
var inst_23973__$1 = cljs.core.nth.call(null,inst_23972,(0),null);
var inst_23974__$1 = cljs.core.nth.call(null,inst_23972,(1),null);
var inst_23975 = (inst_23973__$1 == null);
var inst_23976 = cljs.core._EQ_.call(null,inst_23974__$1,change);
var inst_23977 = (inst_23975) || (inst_23976);
var state_24014__$1 = (function (){var statearr_24036 = state_24014;
(statearr_24036[(14)] = inst_23973__$1);

(statearr_24036[(10)] = inst_23974__$1);

return statearr_24036;
})();
if(cljs.core.truth_(inst_23977)){
var statearr_24037_24094 = state_24014__$1;
(statearr_24037_24094[(1)] = (23));

} else {
var statearr_24038_24095 = state_24014__$1;
(statearr_24038_24095[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (36))){
var inst_23966 = (state_24014[(12)]);
var inst_23944 = inst_23966;
var state_24014__$1 = (function (){var statearr_24039 = state_24014;
(statearr_24039[(7)] = inst_23944);

return statearr_24039;
})();
var statearr_24040_24096 = state_24014__$1;
(statearr_24040_24096[(2)] = null);

(statearr_24040_24096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (29))){
var inst_23988 = (state_24014[(9)]);
var state_24014__$1 = state_24014;
var statearr_24041_24097 = state_24014__$1;
(statearr_24041_24097[(2)] = inst_23988);

(statearr_24041_24097[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (6))){
var state_24014__$1 = state_24014;
var statearr_24042_24098 = state_24014__$1;
(statearr_24042_24098[(2)] = false);

(statearr_24042_24098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (28))){
var inst_23984 = (state_24014[(2)]);
var inst_23985 = calc_state.call(null);
var inst_23944 = inst_23985;
var state_24014__$1 = (function (){var statearr_24043 = state_24014;
(statearr_24043[(15)] = inst_23984);

(statearr_24043[(7)] = inst_23944);

return statearr_24043;
})();
var statearr_24044_24099 = state_24014__$1;
(statearr_24044_24099[(2)] = null);

(statearr_24044_24099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (25))){
var inst_24010 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24045_24100 = state_24014__$1;
(statearr_24045_24100[(2)] = inst_24010);

(statearr_24045_24100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (34))){
var inst_24008 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24046_24101 = state_24014__$1;
(statearr_24046_24101[(2)] = inst_24008);

(statearr_24046_24101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (17))){
var state_24014__$1 = state_24014;
var statearr_24047_24102 = state_24014__$1;
(statearr_24047_24102[(2)] = false);

(statearr_24047_24102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (3))){
var state_24014__$1 = state_24014;
var statearr_24048_24103 = state_24014__$1;
(statearr_24048_24103[(2)] = false);

(statearr_24048_24103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (12))){
var inst_24012 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24014__$1,inst_24012);
} else {
if((state_val_24015 === (2))){
var inst_23920 = (state_24014[(8)]);
var inst_23925 = inst_23920.cljs$lang$protocol_mask$partition0$;
var inst_23926 = (inst_23925 & (64));
var inst_23927 = inst_23920.cljs$core$ISeq$;
var inst_23928 = (inst_23926) || (inst_23927);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_23928)){
var statearr_24049_24104 = state_24014__$1;
(statearr_24049_24104[(1)] = (5));

} else {
var statearr_24050_24105 = state_24014__$1;
(statearr_24050_24105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (23))){
var inst_23973 = (state_24014[(14)]);
var inst_23979 = (inst_23973 == null);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_23979)){
var statearr_24051_24106 = state_24014__$1;
(statearr_24051_24106[(1)] = (26));

} else {
var statearr_24052_24107 = state_24014__$1;
(statearr_24052_24107[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (35))){
var inst_23999 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
if(cljs.core.truth_(inst_23999)){
var statearr_24053_24108 = state_24014__$1;
(statearr_24053_24108[(1)] = (36));

} else {
var statearr_24054_24109 = state_24014__$1;
(statearr_24054_24109[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (19))){
var inst_23944 = (state_24014[(7)]);
var inst_23963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23944);
var state_24014__$1 = state_24014;
var statearr_24055_24110 = state_24014__$1;
(statearr_24055_24110[(2)] = inst_23963);

(statearr_24055_24110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (11))){
var inst_23944 = (state_24014[(7)]);
var inst_23948 = (inst_23944 == null);
var inst_23949 = cljs.core.not.call(null,inst_23948);
var state_24014__$1 = state_24014;
if(inst_23949){
var statearr_24056_24111 = state_24014__$1;
(statearr_24056_24111[(1)] = (13));

} else {
var statearr_24057_24112 = state_24014__$1;
(statearr_24057_24112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (9))){
var inst_23920 = (state_24014[(8)]);
var state_24014__$1 = state_24014;
var statearr_24058_24113 = state_24014__$1;
(statearr_24058_24113[(2)] = inst_23920);

(statearr_24058_24113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (5))){
var state_24014__$1 = state_24014;
var statearr_24059_24114 = state_24014__$1;
(statearr_24059_24114[(2)] = true);

(statearr_24059_24114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (14))){
var state_24014__$1 = state_24014;
var statearr_24060_24115 = state_24014__$1;
(statearr_24060_24115[(2)] = false);

(statearr_24060_24115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (26))){
var inst_23974 = (state_24014[(10)]);
var inst_23981 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23974);
var state_24014__$1 = state_24014;
var statearr_24061_24116 = state_24014__$1;
(statearr_24061_24116[(2)] = inst_23981);

(statearr_24061_24116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (16))){
var state_24014__$1 = state_24014;
var statearr_24062_24117 = state_24014__$1;
(statearr_24062_24117[(2)] = true);

(statearr_24062_24117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (38))){
var inst_24004 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24063_24118 = state_24014__$1;
(statearr_24063_24118[(2)] = inst_24004);

(statearr_24063_24118[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (30))){
var inst_23974 = (state_24014[(10)]);
var inst_23967 = (state_24014[(11)]);
var inst_23968 = (state_24014[(13)]);
var inst_23991 = cljs.core.empty_QMARK_.call(null,inst_23967);
var inst_23992 = inst_23968.call(null,inst_23974);
var inst_23993 = cljs.core.not.call(null,inst_23992);
var inst_23994 = (inst_23991) && (inst_23993);
var state_24014__$1 = state_24014;
var statearr_24064_24119 = state_24014__$1;
(statearr_24064_24119[(2)] = inst_23994);

(statearr_24064_24119[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (10))){
var inst_23920 = (state_24014[(8)]);
var inst_23940 = (state_24014[(2)]);
var inst_23941 = cljs.core.get.call(null,inst_23940,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23942 = cljs.core.get.call(null,inst_23940,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23943 = cljs.core.get.call(null,inst_23940,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23944 = inst_23920;
var state_24014__$1 = (function (){var statearr_24065 = state_24014;
(statearr_24065[(16)] = inst_23943);

(statearr_24065[(17)] = inst_23941);

(statearr_24065[(18)] = inst_23942);

(statearr_24065[(7)] = inst_23944);

return statearr_24065;
})();
var statearr_24066_24120 = state_24014__$1;
(statearr_24066_24120[(2)] = null);

(statearr_24066_24120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (18))){
var inst_23958 = (state_24014[(2)]);
var state_24014__$1 = state_24014;
var statearr_24067_24121 = state_24014__$1;
(statearr_24067_24121[(2)] = inst_23958);

(statearr_24067_24121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (37))){
var state_24014__$1 = state_24014;
var statearr_24068_24122 = state_24014__$1;
(statearr_24068_24122[(2)] = null);

(statearr_24068_24122[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24015 === (8))){
var inst_23920 = (state_24014[(8)]);
var inst_23937 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23920);
var state_24014__$1 = state_24014;
var statearr_24069_24123 = state_24014__$1;
(statearr_24069_24123[(2)] = inst_23937);

(statearr_24069_24123[(1)] = (10));


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
});})(c__22364__auto___24077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22252__auto__,c__22364__auto___24077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22253__auto__ = null;
var cljs$core$async$mix_$_state_machine__22253__auto____0 = (function (){
var statearr_24073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24073[(0)] = cljs$core$async$mix_$_state_machine__22253__auto__);

(statearr_24073[(1)] = (1));

return statearr_24073;
});
var cljs$core$async$mix_$_state_machine__22253__auto____1 = (function (state_24014){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24074){if((e24074 instanceof Object)){
var ex__22256__auto__ = e24074;
var statearr_24075_24124 = state_24014;
(statearr_24075_24124[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24125 = state_24014;
state_24014 = G__24125;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22253__auto__ = function(state_24014){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22253__auto____1.call(this,state_24014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22253__auto____0;
cljs$core$async$mix_$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22253__auto____1;
return cljs$core$async$mix_$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___24077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22366__auto__ = (function (){var statearr_24076 = f__22365__auto__.call(null);
(statearr_24076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___24077);

return statearr_24076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___24077,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17874__auto__ = (((p == null))?null:p);
var m__17875__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17875__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17874__auto__ = (((p == null))?null:p);
var m__17875__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,p,v,ch);
} else {
var m__17875__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24126 = [];
var len__18277__auto___24129 = arguments.length;
var i__18278__auto___24130 = (0);
while(true){
if((i__18278__auto___24130 < len__18277__auto___24129)){
args24126.push((arguments[i__18278__auto___24130]));

var G__24131 = (i__18278__auto___24130 + (1));
i__18278__auto___24130 = G__24131;
continue;
} else {
}
break;
}

var G__24128 = args24126.length;
switch (G__24128) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24126.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17874__auto__ = (((p == null))?null:p);
var m__17875__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,p);
} else {
var m__17875__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17874__auto__ = (((p == null))?null:p);
var m__17875__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17874__auto__)]);
if(!((m__17875__auto__ == null))){
return m__17875__auto__.call(null,p,v);
} else {
var m__17875__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17875__auto____$1 == null))){
return m__17875__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24134 = [];
var len__18277__auto___24259 = arguments.length;
var i__18278__auto___24260 = (0);
while(true){
if((i__18278__auto___24260 < len__18277__auto___24259)){
args24134.push((arguments[i__18278__auto___24260]));

var G__24261 = (i__18278__auto___24260 + (1));
i__18278__auto___24260 = G__24261;
continue;
} else {
}
break;
}

var G__24136 = args24134.length;
switch (G__24136) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24134.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17219__auto__)){
return or__17219__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17219__auto__,mults){
return (function (p1__24133_SHARP_){
if(cljs.core.truth_(p1__24133_SHARP_.call(null,topic))){
return p1__24133_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24133_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17219__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24137 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24138){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24138 = meta24138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24139,meta24138__$1){
var self__ = this;
var _24139__$1 = this;
return (new cljs.core.async.t_cljs$core$async24137(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24138__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24139){
var self__ = this;
var _24139__$1 = this;
return self__.meta24138;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24138","meta24138",-1265353064,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24137";

cljs.core.async.t_cljs$core$async24137.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async24137");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24137 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24138){
return (new cljs.core.async.t_cljs$core$async24137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24138));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24137(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22364__auto___24263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___24263,mults,ensure_mult,p){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___24263,mults,ensure_mult,p){
return (function (state_24211){
var state_val_24212 = (state_24211[(1)]);
if((state_val_24212 === (7))){
var inst_24207 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24213_24264 = state_24211__$1;
(statearr_24213_24264[(2)] = inst_24207);

(statearr_24213_24264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (20))){
var state_24211__$1 = state_24211;
var statearr_24214_24265 = state_24211__$1;
(statearr_24214_24265[(2)] = null);

(statearr_24214_24265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (1))){
var state_24211__$1 = state_24211;
var statearr_24215_24266 = state_24211__$1;
(statearr_24215_24266[(2)] = null);

(statearr_24215_24266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (24))){
var inst_24190 = (state_24211[(7)]);
var inst_24199 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24190);
var state_24211__$1 = state_24211;
var statearr_24216_24267 = state_24211__$1;
(statearr_24216_24267[(2)] = inst_24199);

(statearr_24216_24267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (4))){
var inst_24142 = (state_24211[(8)]);
var inst_24142__$1 = (state_24211[(2)]);
var inst_24143 = (inst_24142__$1 == null);
var state_24211__$1 = (function (){var statearr_24217 = state_24211;
(statearr_24217[(8)] = inst_24142__$1);

return statearr_24217;
})();
if(cljs.core.truth_(inst_24143)){
var statearr_24218_24268 = state_24211__$1;
(statearr_24218_24268[(1)] = (5));

} else {
var statearr_24219_24269 = state_24211__$1;
(statearr_24219_24269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (15))){
var inst_24184 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24220_24270 = state_24211__$1;
(statearr_24220_24270[(2)] = inst_24184);

(statearr_24220_24270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (21))){
var inst_24204 = (state_24211[(2)]);
var state_24211__$1 = (function (){var statearr_24221 = state_24211;
(statearr_24221[(9)] = inst_24204);

return statearr_24221;
})();
var statearr_24222_24271 = state_24211__$1;
(statearr_24222_24271[(2)] = null);

(statearr_24222_24271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (13))){
var inst_24166 = (state_24211[(10)]);
var inst_24168 = cljs.core.chunked_seq_QMARK_.call(null,inst_24166);
var state_24211__$1 = state_24211;
if(inst_24168){
var statearr_24223_24272 = state_24211__$1;
(statearr_24223_24272[(1)] = (16));

} else {
var statearr_24224_24273 = state_24211__$1;
(statearr_24224_24273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (22))){
var inst_24196 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24196)){
var statearr_24225_24274 = state_24211__$1;
(statearr_24225_24274[(1)] = (23));

} else {
var statearr_24226_24275 = state_24211__$1;
(statearr_24226_24275[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (6))){
var inst_24190 = (state_24211[(7)]);
var inst_24142 = (state_24211[(8)]);
var inst_24192 = (state_24211[(11)]);
var inst_24190__$1 = topic_fn.call(null,inst_24142);
var inst_24191 = cljs.core.deref.call(null,mults);
var inst_24192__$1 = cljs.core.get.call(null,inst_24191,inst_24190__$1);
var state_24211__$1 = (function (){var statearr_24227 = state_24211;
(statearr_24227[(7)] = inst_24190__$1);

(statearr_24227[(11)] = inst_24192__$1);

return statearr_24227;
})();
if(cljs.core.truth_(inst_24192__$1)){
var statearr_24228_24276 = state_24211__$1;
(statearr_24228_24276[(1)] = (19));

} else {
var statearr_24229_24277 = state_24211__$1;
(statearr_24229_24277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (25))){
var inst_24201 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24230_24278 = state_24211__$1;
(statearr_24230_24278[(2)] = inst_24201);

(statearr_24230_24278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (17))){
var inst_24166 = (state_24211[(10)]);
var inst_24175 = cljs.core.first.call(null,inst_24166);
var inst_24176 = cljs.core.async.muxch_STAR_.call(null,inst_24175);
var inst_24177 = cljs.core.async.close_BANG_.call(null,inst_24176);
var inst_24178 = cljs.core.next.call(null,inst_24166);
var inst_24152 = inst_24178;
var inst_24153 = null;
var inst_24154 = (0);
var inst_24155 = (0);
var state_24211__$1 = (function (){var statearr_24231 = state_24211;
(statearr_24231[(12)] = inst_24177);

(statearr_24231[(13)] = inst_24152);

(statearr_24231[(14)] = inst_24155);

(statearr_24231[(15)] = inst_24153);

(statearr_24231[(16)] = inst_24154);

return statearr_24231;
})();
var statearr_24232_24279 = state_24211__$1;
(statearr_24232_24279[(2)] = null);

(statearr_24232_24279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (3))){
var inst_24209 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24211__$1,inst_24209);
} else {
if((state_val_24212 === (12))){
var inst_24186 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24233_24280 = state_24211__$1;
(statearr_24233_24280[(2)] = inst_24186);

(statearr_24233_24280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (2))){
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24211__$1,(4),ch);
} else {
if((state_val_24212 === (23))){
var state_24211__$1 = state_24211;
var statearr_24234_24281 = state_24211__$1;
(statearr_24234_24281[(2)] = null);

(statearr_24234_24281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (19))){
var inst_24142 = (state_24211[(8)]);
var inst_24192 = (state_24211[(11)]);
var inst_24194 = cljs.core.async.muxch_STAR_.call(null,inst_24192);
var state_24211__$1 = state_24211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24211__$1,(22),inst_24194,inst_24142);
} else {
if((state_val_24212 === (11))){
var inst_24152 = (state_24211[(13)]);
var inst_24166 = (state_24211[(10)]);
var inst_24166__$1 = cljs.core.seq.call(null,inst_24152);
var state_24211__$1 = (function (){var statearr_24235 = state_24211;
(statearr_24235[(10)] = inst_24166__$1);

return statearr_24235;
})();
if(inst_24166__$1){
var statearr_24236_24282 = state_24211__$1;
(statearr_24236_24282[(1)] = (13));

} else {
var statearr_24237_24283 = state_24211__$1;
(statearr_24237_24283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (9))){
var inst_24188 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24238_24284 = state_24211__$1;
(statearr_24238_24284[(2)] = inst_24188);

(statearr_24238_24284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (5))){
var inst_24149 = cljs.core.deref.call(null,mults);
var inst_24150 = cljs.core.vals.call(null,inst_24149);
var inst_24151 = cljs.core.seq.call(null,inst_24150);
var inst_24152 = inst_24151;
var inst_24153 = null;
var inst_24154 = (0);
var inst_24155 = (0);
var state_24211__$1 = (function (){var statearr_24239 = state_24211;
(statearr_24239[(13)] = inst_24152);

(statearr_24239[(14)] = inst_24155);

(statearr_24239[(15)] = inst_24153);

(statearr_24239[(16)] = inst_24154);

return statearr_24239;
})();
var statearr_24240_24285 = state_24211__$1;
(statearr_24240_24285[(2)] = null);

(statearr_24240_24285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (14))){
var state_24211__$1 = state_24211;
var statearr_24244_24286 = state_24211__$1;
(statearr_24244_24286[(2)] = null);

(statearr_24244_24286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (16))){
var inst_24166 = (state_24211[(10)]);
var inst_24170 = cljs.core.chunk_first.call(null,inst_24166);
var inst_24171 = cljs.core.chunk_rest.call(null,inst_24166);
var inst_24172 = cljs.core.count.call(null,inst_24170);
var inst_24152 = inst_24171;
var inst_24153 = inst_24170;
var inst_24154 = inst_24172;
var inst_24155 = (0);
var state_24211__$1 = (function (){var statearr_24245 = state_24211;
(statearr_24245[(13)] = inst_24152);

(statearr_24245[(14)] = inst_24155);

(statearr_24245[(15)] = inst_24153);

(statearr_24245[(16)] = inst_24154);

return statearr_24245;
})();
var statearr_24246_24287 = state_24211__$1;
(statearr_24246_24287[(2)] = null);

(statearr_24246_24287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (10))){
var inst_24152 = (state_24211[(13)]);
var inst_24155 = (state_24211[(14)]);
var inst_24153 = (state_24211[(15)]);
var inst_24154 = (state_24211[(16)]);
var inst_24160 = cljs.core._nth.call(null,inst_24153,inst_24155);
var inst_24161 = cljs.core.async.muxch_STAR_.call(null,inst_24160);
var inst_24162 = cljs.core.async.close_BANG_.call(null,inst_24161);
var inst_24163 = (inst_24155 + (1));
var tmp24241 = inst_24152;
var tmp24242 = inst_24153;
var tmp24243 = inst_24154;
var inst_24152__$1 = tmp24241;
var inst_24153__$1 = tmp24242;
var inst_24154__$1 = tmp24243;
var inst_24155__$1 = inst_24163;
var state_24211__$1 = (function (){var statearr_24247 = state_24211;
(statearr_24247[(13)] = inst_24152__$1);

(statearr_24247[(14)] = inst_24155__$1);

(statearr_24247[(15)] = inst_24153__$1);

(statearr_24247[(17)] = inst_24162);

(statearr_24247[(16)] = inst_24154__$1);

return statearr_24247;
})();
var statearr_24248_24288 = state_24211__$1;
(statearr_24248_24288[(2)] = null);

(statearr_24248_24288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (18))){
var inst_24181 = (state_24211[(2)]);
var state_24211__$1 = state_24211;
var statearr_24249_24289 = state_24211__$1;
(statearr_24249_24289[(2)] = inst_24181);

(statearr_24249_24289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24212 === (8))){
var inst_24155 = (state_24211[(14)]);
var inst_24154 = (state_24211[(16)]);
var inst_24157 = (inst_24155 < inst_24154);
var inst_24158 = inst_24157;
var state_24211__$1 = state_24211;
if(cljs.core.truth_(inst_24158)){
var statearr_24250_24290 = state_24211__$1;
(statearr_24250_24290[(1)] = (10));

} else {
var statearr_24251_24291 = state_24211__$1;
(statearr_24251_24291[(1)] = (11));

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
});})(c__22364__auto___24263,mults,ensure_mult,p))
;
return ((function (switch__22252__auto__,c__22364__auto___24263,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24255[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24255[(1)] = (1));

return statearr_24255;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24211){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24256){if((e24256 instanceof Object)){
var ex__22256__auto__ = e24256;
var statearr_24257_24292 = state_24211;
(statearr_24257_24292[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24293 = state_24211;
state_24211 = G__24293;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___24263,mults,ensure_mult,p))
})();
var state__22366__auto__ = (function (){var statearr_24258 = f__22365__auto__.call(null);
(statearr_24258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___24263);

return statearr_24258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___24263,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24294 = [];
var len__18277__auto___24297 = arguments.length;
var i__18278__auto___24298 = (0);
while(true){
if((i__18278__auto___24298 < len__18277__auto___24297)){
args24294.push((arguments[i__18278__auto___24298]));

var G__24299 = (i__18278__auto___24298 + (1));
i__18278__auto___24298 = G__24299;
continue;
} else {
}
break;
}

var G__24296 = args24294.length;
switch (G__24296) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24294.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24301 = [];
var len__18277__auto___24304 = arguments.length;
var i__18278__auto___24305 = (0);
while(true){
if((i__18278__auto___24305 < len__18277__auto___24304)){
args24301.push((arguments[i__18278__auto___24305]));

var G__24306 = (i__18278__auto___24305 + (1));
i__18278__auto___24305 = G__24306;
continue;
} else {
}
break;
}

var G__24303 = args24301.length;
switch (G__24303) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24301.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24308 = [];
var len__18277__auto___24379 = arguments.length;
var i__18278__auto___24380 = (0);
while(true){
if((i__18278__auto___24380 < len__18277__auto___24379)){
args24308.push((arguments[i__18278__auto___24380]));

var G__24381 = (i__18278__auto___24380 + (1));
i__18278__auto___24380 = G__24381;
continue;
} else {
}
break;
}

var G__24310 = args24308.length;
switch (G__24310) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24308.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22364__auto___24383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___24383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___24383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24349){
var state_val_24350 = (state_24349[(1)]);
if((state_val_24350 === (7))){
var state_24349__$1 = state_24349;
var statearr_24351_24384 = state_24349__$1;
(statearr_24351_24384[(2)] = null);

(statearr_24351_24384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (1))){
var state_24349__$1 = state_24349;
var statearr_24352_24385 = state_24349__$1;
(statearr_24352_24385[(2)] = null);

(statearr_24352_24385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (4))){
var inst_24313 = (state_24349[(7)]);
var inst_24315 = (inst_24313 < cnt);
var state_24349__$1 = state_24349;
if(cljs.core.truth_(inst_24315)){
var statearr_24353_24386 = state_24349__$1;
(statearr_24353_24386[(1)] = (6));

} else {
var statearr_24354_24387 = state_24349__$1;
(statearr_24354_24387[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (15))){
var inst_24345 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24355_24388 = state_24349__$1;
(statearr_24355_24388[(2)] = inst_24345);

(statearr_24355_24388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (13))){
var inst_24338 = cljs.core.async.close_BANG_.call(null,out);
var state_24349__$1 = state_24349;
var statearr_24356_24389 = state_24349__$1;
(statearr_24356_24389[(2)] = inst_24338);

(statearr_24356_24389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (6))){
var state_24349__$1 = state_24349;
var statearr_24357_24390 = state_24349__$1;
(statearr_24357_24390[(2)] = null);

(statearr_24357_24390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (3))){
var inst_24347 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24349__$1,inst_24347);
} else {
if((state_val_24350 === (12))){
var inst_24335 = (state_24349[(8)]);
var inst_24335__$1 = (state_24349[(2)]);
var inst_24336 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24335__$1);
var state_24349__$1 = (function (){var statearr_24358 = state_24349;
(statearr_24358[(8)] = inst_24335__$1);

return statearr_24358;
})();
if(cljs.core.truth_(inst_24336)){
var statearr_24359_24391 = state_24349__$1;
(statearr_24359_24391[(1)] = (13));

} else {
var statearr_24360_24392 = state_24349__$1;
(statearr_24360_24392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (2))){
var inst_24312 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24313 = (0);
var state_24349__$1 = (function (){var statearr_24361 = state_24349;
(statearr_24361[(7)] = inst_24313);

(statearr_24361[(9)] = inst_24312);

return statearr_24361;
})();
var statearr_24362_24393 = state_24349__$1;
(statearr_24362_24393[(2)] = null);

(statearr_24362_24393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (11))){
var inst_24313 = (state_24349[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24349,(10),Object,null,(9));
var inst_24322 = chs__$1.call(null,inst_24313);
var inst_24323 = done.call(null,inst_24313);
var inst_24324 = cljs.core.async.take_BANG_.call(null,inst_24322,inst_24323);
var state_24349__$1 = state_24349;
var statearr_24363_24394 = state_24349__$1;
(statearr_24363_24394[(2)] = inst_24324);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (9))){
var inst_24313 = (state_24349[(7)]);
var inst_24326 = (state_24349[(2)]);
var inst_24327 = (inst_24313 + (1));
var inst_24313__$1 = inst_24327;
var state_24349__$1 = (function (){var statearr_24364 = state_24349;
(statearr_24364[(7)] = inst_24313__$1);

(statearr_24364[(10)] = inst_24326);

return statearr_24364;
})();
var statearr_24365_24395 = state_24349__$1;
(statearr_24365_24395[(2)] = null);

(statearr_24365_24395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (5))){
var inst_24333 = (state_24349[(2)]);
var state_24349__$1 = (function (){var statearr_24366 = state_24349;
(statearr_24366[(11)] = inst_24333);

return statearr_24366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24349__$1,(12),dchan);
} else {
if((state_val_24350 === (14))){
var inst_24335 = (state_24349[(8)]);
var inst_24340 = cljs.core.apply.call(null,f,inst_24335);
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24349__$1,(16),out,inst_24340);
} else {
if((state_val_24350 === (16))){
var inst_24342 = (state_24349[(2)]);
var state_24349__$1 = (function (){var statearr_24367 = state_24349;
(statearr_24367[(12)] = inst_24342);

return statearr_24367;
})();
var statearr_24368_24396 = state_24349__$1;
(statearr_24368_24396[(2)] = null);

(statearr_24368_24396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (10))){
var inst_24317 = (state_24349[(2)]);
var inst_24318 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24349__$1 = (function (){var statearr_24369 = state_24349;
(statearr_24369[(13)] = inst_24317);

return statearr_24369;
})();
var statearr_24370_24397 = state_24349__$1;
(statearr_24370_24397[(2)] = inst_24318);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (8))){
var inst_24331 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24371_24398 = state_24349__$1;
(statearr_24371_24398[(2)] = inst_24331);

(statearr_24371_24398[(1)] = (5));


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
});})(c__22364__auto___24383,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22252__auto__,c__22364__auto___24383,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24375[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24375[(1)] = (1));

return statearr_24375;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24349){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24376){if((e24376 instanceof Object)){
var ex__22256__auto__ = e24376;
var statearr_24377_24399 = state_24349;
(statearr_24377_24399[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24400 = state_24349;
state_24349 = G__24400;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___24383,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22366__auto__ = (function (){var statearr_24378 = f__22365__auto__.call(null);
(statearr_24378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___24383);

return statearr_24378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___24383,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24402 = [];
var len__18277__auto___24458 = arguments.length;
var i__18278__auto___24459 = (0);
while(true){
if((i__18278__auto___24459 < len__18277__auto___24458)){
args24402.push((arguments[i__18278__auto___24459]));

var G__24460 = (i__18278__auto___24459 + (1));
i__18278__auto___24459 = G__24460;
continue;
} else {
}
break;
}

var G__24404 = args24402.length;
switch (G__24404) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24402.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22364__auto___24462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___24462,out){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___24462,out){
return (function (state_24434){
var state_val_24435 = (state_24434[(1)]);
if((state_val_24435 === (7))){
var inst_24414 = (state_24434[(7)]);
var inst_24413 = (state_24434[(8)]);
var inst_24413__$1 = (state_24434[(2)]);
var inst_24414__$1 = cljs.core.nth.call(null,inst_24413__$1,(0),null);
var inst_24415 = cljs.core.nth.call(null,inst_24413__$1,(1),null);
var inst_24416 = (inst_24414__$1 == null);
var state_24434__$1 = (function (){var statearr_24436 = state_24434;
(statearr_24436[(9)] = inst_24415);

(statearr_24436[(7)] = inst_24414__$1);

(statearr_24436[(8)] = inst_24413__$1);

return statearr_24436;
})();
if(cljs.core.truth_(inst_24416)){
var statearr_24437_24463 = state_24434__$1;
(statearr_24437_24463[(1)] = (8));

} else {
var statearr_24438_24464 = state_24434__$1;
(statearr_24438_24464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (1))){
var inst_24405 = cljs.core.vec.call(null,chs);
var inst_24406 = inst_24405;
var state_24434__$1 = (function (){var statearr_24439 = state_24434;
(statearr_24439[(10)] = inst_24406);

return statearr_24439;
})();
var statearr_24440_24465 = state_24434__$1;
(statearr_24440_24465[(2)] = null);

(statearr_24440_24465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (4))){
var inst_24406 = (state_24434[(10)]);
var state_24434__$1 = state_24434;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24434__$1,(7),inst_24406);
} else {
if((state_val_24435 === (6))){
var inst_24430 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24441_24466 = state_24434__$1;
(statearr_24441_24466[(2)] = inst_24430);

(statearr_24441_24466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (3))){
var inst_24432 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24434__$1,inst_24432);
} else {
if((state_val_24435 === (2))){
var inst_24406 = (state_24434[(10)]);
var inst_24408 = cljs.core.count.call(null,inst_24406);
var inst_24409 = (inst_24408 > (0));
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24409)){
var statearr_24443_24467 = state_24434__$1;
(statearr_24443_24467[(1)] = (4));

} else {
var statearr_24444_24468 = state_24434__$1;
(statearr_24444_24468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (11))){
var inst_24406 = (state_24434[(10)]);
var inst_24423 = (state_24434[(2)]);
var tmp24442 = inst_24406;
var inst_24406__$1 = tmp24442;
var state_24434__$1 = (function (){var statearr_24445 = state_24434;
(statearr_24445[(11)] = inst_24423);

(statearr_24445[(10)] = inst_24406__$1);

return statearr_24445;
})();
var statearr_24446_24469 = state_24434__$1;
(statearr_24446_24469[(2)] = null);

(statearr_24446_24469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (9))){
var inst_24414 = (state_24434[(7)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24434__$1,(11),out,inst_24414);
} else {
if((state_val_24435 === (5))){
var inst_24428 = cljs.core.async.close_BANG_.call(null,out);
var state_24434__$1 = state_24434;
var statearr_24447_24470 = state_24434__$1;
(statearr_24447_24470[(2)] = inst_24428);

(statearr_24447_24470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (10))){
var inst_24426 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24448_24471 = state_24434__$1;
(statearr_24448_24471[(2)] = inst_24426);

(statearr_24448_24471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (8))){
var inst_24415 = (state_24434[(9)]);
var inst_24414 = (state_24434[(7)]);
var inst_24413 = (state_24434[(8)]);
var inst_24406 = (state_24434[(10)]);
var inst_24418 = (function (){var cs = inst_24406;
var vec__24411 = inst_24413;
var v = inst_24414;
var c = inst_24415;
return ((function (cs,vec__24411,v,c,inst_24415,inst_24414,inst_24413,inst_24406,state_val_24435,c__22364__auto___24462,out){
return (function (p1__24401_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24401_SHARP_);
});
;})(cs,vec__24411,v,c,inst_24415,inst_24414,inst_24413,inst_24406,state_val_24435,c__22364__auto___24462,out))
})();
var inst_24419 = cljs.core.filterv.call(null,inst_24418,inst_24406);
var inst_24406__$1 = inst_24419;
var state_24434__$1 = (function (){var statearr_24449 = state_24434;
(statearr_24449[(10)] = inst_24406__$1);

return statearr_24449;
})();
var statearr_24450_24472 = state_24434__$1;
(statearr_24450_24472[(2)] = null);

(statearr_24450_24472[(1)] = (2));


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
});})(c__22364__auto___24462,out))
;
return ((function (switch__22252__auto__,c__22364__auto___24462,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24454[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24454[(1)] = (1));

return statearr_24454;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24434){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24455){if((e24455 instanceof Object)){
var ex__22256__auto__ = e24455;
var statearr_24456_24473 = state_24434;
(statearr_24456_24473[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24474 = state_24434;
state_24434 = G__24474;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___24462,out))
})();
var state__22366__auto__ = (function (){var statearr_24457 = f__22365__auto__.call(null);
(statearr_24457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___24462);

return statearr_24457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___24462,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24475 = [];
var len__18277__auto___24524 = arguments.length;
var i__18278__auto___24525 = (0);
while(true){
if((i__18278__auto___24525 < len__18277__auto___24524)){
args24475.push((arguments[i__18278__auto___24525]));

var G__24526 = (i__18278__auto___24525 + (1));
i__18278__auto___24525 = G__24526;
continue;
} else {
}
break;
}

var G__24477 = args24475.length;
switch (G__24477) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24475.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22364__auto___24528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___24528,out){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___24528,out){
return (function (state_24501){
var state_val_24502 = (state_24501[(1)]);
if((state_val_24502 === (7))){
var inst_24483 = (state_24501[(7)]);
var inst_24483__$1 = (state_24501[(2)]);
var inst_24484 = (inst_24483__$1 == null);
var inst_24485 = cljs.core.not.call(null,inst_24484);
var state_24501__$1 = (function (){var statearr_24503 = state_24501;
(statearr_24503[(7)] = inst_24483__$1);

return statearr_24503;
})();
if(inst_24485){
var statearr_24504_24529 = state_24501__$1;
(statearr_24504_24529[(1)] = (8));

} else {
var statearr_24505_24530 = state_24501__$1;
(statearr_24505_24530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (1))){
var inst_24478 = (0);
var state_24501__$1 = (function (){var statearr_24506 = state_24501;
(statearr_24506[(8)] = inst_24478);

return statearr_24506;
})();
var statearr_24507_24531 = state_24501__$1;
(statearr_24507_24531[(2)] = null);

(statearr_24507_24531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (4))){
var state_24501__$1 = state_24501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24501__$1,(7),ch);
} else {
if((state_val_24502 === (6))){
var inst_24496 = (state_24501[(2)]);
var state_24501__$1 = state_24501;
var statearr_24508_24532 = state_24501__$1;
(statearr_24508_24532[(2)] = inst_24496);

(statearr_24508_24532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (3))){
var inst_24498 = (state_24501[(2)]);
var inst_24499 = cljs.core.async.close_BANG_.call(null,out);
var state_24501__$1 = (function (){var statearr_24509 = state_24501;
(statearr_24509[(9)] = inst_24498);

return statearr_24509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24501__$1,inst_24499);
} else {
if((state_val_24502 === (2))){
var inst_24478 = (state_24501[(8)]);
var inst_24480 = (inst_24478 < n);
var state_24501__$1 = state_24501;
if(cljs.core.truth_(inst_24480)){
var statearr_24510_24533 = state_24501__$1;
(statearr_24510_24533[(1)] = (4));

} else {
var statearr_24511_24534 = state_24501__$1;
(statearr_24511_24534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (11))){
var inst_24478 = (state_24501[(8)]);
var inst_24488 = (state_24501[(2)]);
var inst_24489 = (inst_24478 + (1));
var inst_24478__$1 = inst_24489;
var state_24501__$1 = (function (){var statearr_24512 = state_24501;
(statearr_24512[(8)] = inst_24478__$1);

(statearr_24512[(10)] = inst_24488);

return statearr_24512;
})();
var statearr_24513_24535 = state_24501__$1;
(statearr_24513_24535[(2)] = null);

(statearr_24513_24535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (9))){
var state_24501__$1 = state_24501;
var statearr_24514_24536 = state_24501__$1;
(statearr_24514_24536[(2)] = null);

(statearr_24514_24536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (5))){
var state_24501__$1 = state_24501;
var statearr_24515_24537 = state_24501__$1;
(statearr_24515_24537[(2)] = null);

(statearr_24515_24537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (10))){
var inst_24493 = (state_24501[(2)]);
var state_24501__$1 = state_24501;
var statearr_24516_24538 = state_24501__$1;
(statearr_24516_24538[(2)] = inst_24493);

(statearr_24516_24538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24502 === (8))){
var inst_24483 = (state_24501[(7)]);
var state_24501__$1 = state_24501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24501__$1,(11),out,inst_24483);
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
});})(c__22364__auto___24528,out))
;
return ((function (switch__22252__auto__,c__22364__auto___24528,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24520[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24520[(1)] = (1));

return statearr_24520;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24501){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24521){if((e24521 instanceof Object)){
var ex__22256__auto__ = e24521;
var statearr_24522_24539 = state_24501;
(statearr_24522_24539[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24540 = state_24501;
state_24501 = G__24540;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___24528,out))
})();
var state__22366__auto__ = (function (){var statearr_24523 = f__22365__auto__.call(null);
(statearr_24523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___24528);

return statearr_24523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___24528,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24548 = (function (map_LT_,f,ch,meta24549){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24549 = meta24549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24550,meta24549__$1){
var self__ = this;
var _24550__$1 = this;
return (new cljs.core.async.t_cljs$core$async24548(self__.map_LT_,self__.f,self__.ch,meta24549__$1));
});

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24550){
var self__ = this;
var _24550__$1 = this;
return self__.meta24549;
});

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24551 = (function (map_LT_,f,ch,meta24549,_,fn1,meta24552){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24549 = meta24549;
this._ = _;
this.fn1 = fn1;
this.meta24552 = meta24552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24553,meta24552__$1){
var self__ = this;
var _24553__$1 = this;
return (new cljs.core.async.t_cljs$core$async24551(self__.map_LT_,self__.f,self__.ch,self__.meta24549,self__._,self__.fn1,meta24552__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24553){
var self__ = this;
var _24553__$1 = this;
return self__.meta24552;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24551.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24541_SHARP_){
return f1.call(null,(((p1__24541_SHARP_ == null))?null:self__.f.call(null,p1__24541_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24551.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24549","meta24549",1021471365,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24548","cljs.core.async/t_cljs$core$async24548",-384363677,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24552","meta24552",-381002158,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24551";

cljs.core.async.t_cljs$core$async24551.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async24551");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24551 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24551(map_LT___$1,f__$1,ch__$1,meta24549__$1,___$2,fn1__$1,meta24552){
return (new cljs.core.async.t_cljs$core$async24551(map_LT___$1,f__$1,ch__$1,meta24549__$1,___$2,fn1__$1,meta24552));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24551(self__.map_LT_,self__.f,self__.ch,self__.meta24549,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17207__auto__ = ret;
if(cljs.core.truth_(and__17207__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17207__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24549","meta24549",1021471365,null)], null);
});

cljs.core.async.t_cljs$core$async24548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24548";

cljs.core.async.t_cljs$core$async24548.cljs$lang$ctorPrWriter = (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async24548");
});

cljs.core.async.__GT_t_cljs$core$async24548 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24548(map_LT___$1,f__$1,ch__$1,meta24549){
return (new cljs.core.async.t_cljs$core$async24548(map_LT___$1,f__$1,ch__$1,meta24549));
});

}

return (new cljs.core.async.t_cljs$core$async24548(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24557 = (function (map_GT_,f,ch,meta24558){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24558 = meta24558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24559,meta24558__$1){
var self__ = this;
var _24559__$1 = this;
return (new cljs.core.async.t_cljs$core$async24557(self__.map_GT_,self__.f,self__.ch,meta24558__$1));
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24559){
var self__ = this;
var _24559__$1 = this;
return self__.meta24558;
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24558","meta24558",-897552111,null)], null);
});

cljs.core.async.t_cljs$core$async24557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24557";

cljs.core.async.t_cljs$core$async24557.cljs$lang$ctorPrWriter = (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async24557");
});

cljs.core.async.__GT_t_cljs$core$async24557 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24557(map_GT___$1,f__$1,ch__$1,meta24558){
return (new cljs.core.async.t_cljs$core$async24557(map_GT___$1,f__$1,ch__$1,meta24558));
});

}

return (new cljs.core.async.t_cljs$core$async24557(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24563 = (function (filter_GT_,p,ch,meta24564){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24564 = meta24564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24565,meta24564__$1){
var self__ = this;
var _24565__$1 = this;
return (new cljs.core.async.t_cljs$core$async24563(self__.filter_GT_,self__.p,self__.ch,meta24564__$1));
});

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24565){
var self__ = this;
var _24565__$1 = this;
return self__.meta24564;
});

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24564","meta24564",-778321323,null)], null);
});

cljs.core.async.t_cljs$core$async24563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24563";

cljs.core.async.t_cljs$core$async24563.cljs$lang$ctorPrWriter = (function (this__17817__auto__,writer__17818__auto__,opt__17819__auto__){
return cljs.core._write.call(null,writer__17818__auto__,"cljs.core.async/t_cljs$core$async24563");
});

cljs.core.async.__GT_t_cljs$core$async24563 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24563(filter_GT___$1,p__$1,ch__$1,meta24564){
return (new cljs.core.async.t_cljs$core$async24563(filter_GT___$1,p__$1,ch__$1,meta24564));
});

}

return (new cljs.core.async.t_cljs$core$async24563(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24566 = [];
var len__18277__auto___24610 = arguments.length;
var i__18278__auto___24611 = (0);
while(true){
if((i__18278__auto___24611 < len__18277__auto___24610)){
args24566.push((arguments[i__18278__auto___24611]));

var G__24612 = (i__18278__auto___24611 + (1));
i__18278__auto___24611 = G__24612;
continue;
} else {
}
break;
}

var G__24568 = args24566.length;
switch (G__24568) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24566.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22364__auto___24614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___24614,out){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___24614,out){
return (function (state_24589){
var state_val_24590 = (state_24589[(1)]);
if((state_val_24590 === (7))){
var inst_24585 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24591_24615 = state_24589__$1;
(statearr_24591_24615[(2)] = inst_24585);

(statearr_24591_24615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (1))){
var state_24589__$1 = state_24589;
var statearr_24592_24616 = state_24589__$1;
(statearr_24592_24616[(2)] = null);

(statearr_24592_24616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (4))){
var inst_24571 = (state_24589[(7)]);
var inst_24571__$1 = (state_24589[(2)]);
var inst_24572 = (inst_24571__$1 == null);
var state_24589__$1 = (function (){var statearr_24593 = state_24589;
(statearr_24593[(7)] = inst_24571__$1);

return statearr_24593;
})();
if(cljs.core.truth_(inst_24572)){
var statearr_24594_24617 = state_24589__$1;
(statearr_24594_24617[(1)] = (5));

} else {
var statearr_24595_24618 = state_24589__$1;
(statearr_24595_24618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (6))){
var inst_24571 = (state_24589[(7)]);
var inst_24576 = p.call(null,inst_24571);
var state_24589__$1 = state_24589;
if(cljs.core.truth_(inst_24576)){
var statearr_24596_24619 = state_24589__$1;
(statearr_24596_24619[(1)] = (8));

} else {
var statearr_24597_24620 = state_24589__$1;
(statearr_24597_24620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (3))){
var inst_24587 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24589__$1,inst_24587);
} else {
if((state_val_24590 === (2))){
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24589__$1,(4),ch);
} else {
if((state_val_24590 === (11))){
var inst_24579 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24598_24621 = state_24589__$1;
(statearr_24598_24621[(2)] = inst_24579);

(statearr_24598_24621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (9))){
var state_24589__$1 = state_24589;
var statearr_24599_24622 = state_24589__$1;
(statearr_24599_24622[(2)] = null);

(statearr_24599_24622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (5))){
var inst_24574 = cljs.core.async.close_BANG_.call(null,out);
var state_24589__$1 = state_24589;
var statearr_24600_24623 = state_24589__$1;
(statearr_24600_24623[(2)] = inst_24574);

(statearr_24600_24623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (10))){
var inst_24582 = (state_24589[(2)]);
var state_24589__$1 = (function (){var statearr_24601 = state_24589;
(statearr_24601[(8)] = inst_24582);

return statearr_24601;
})();
var statearr_24602_24624 = state_24589__$1;
(statearr_24602_24624[(2)] = null);

(statearr_24602_24624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (8))){
var inst_24571 = (state_24589[(7)]);
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24589__$1,(11),out,inst_24571);
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
});})(c__22364__auto___24614,out))
;
return ((function (switch__22252__auto__,c__22364__auto___24614,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24606 = [null,null,null,null,null,null,null,null,null];
(statearr_24606[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24606[(1)] = (1));

return statearr_24606;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24589){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24607){if((e24607 instanceof Object)){
var ex__22256__auto__ = e24607;
var statearr_24608_24625 = state_24589;
(statearr_24608_24625[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24626 = state_24589;
state_24589 = G__24626;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___24614,out))
})();
var state__22366__auto__ = (function (){var statearr_24609 = f__22365__auto__.call(null);
(statearr_24609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___24614);

return statearr_24609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___24614,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24627 = [];
var len__18277__auto___24630 = arguments.length;
var i__18278__auto___24631 = (0);
while(true){
if((i__18278__auto___24631 < len__18277__auto___24630)){
args24627.push((arguments[i__18278__auto___24631]));

var G__24632 = (i__18278__auto___24631 + (1));
i__18278__auto___24631 = G__24632;
continue;
} else {
}
break;
}

var G__24629 = args24627.length;
switch (G__24629) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24627.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto__){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto__){
return (function (state_24799){
var state_val_24800 = (state_24799[(1)]);
if((state_val_24800 === (7))){
var inst_24795 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24801_24842 = state_24799__$1;
(statearr_24801_24842[(2)] = inst_24795);

(statearr_24801_24842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (20))){
var inst_24765 = (state_24799[(7)]);
var inst_24776 = (state_24799[(2)]);
var inst_24777 = cljs.core.next.call(null,inst_24765);
var inst_24751 = inst_24777;
var inst_24752 = null;
var inst_24753 = (0);
var inst_24754 = (0);
var state_24799__$1 = (function (){var statearr_24802 = state_24799;
(statearr_24802[(8)] = inst_24751);

(statearr_24802[(9)] = inst_24754);

(statearr_24802[(10)] = inst_24753);

(statearr_24802[(11)] = inst_24752);

(statearr_24802[(12)] = inst_24776);

return statearr_24802;
})();
var statearr_24803_24843 = state_24799__$1;
(statearr_24803_24843[(2)] = null);

(statearr_24803_24843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (1))){
var state_24799__$1 = state_24799;
var statearr_24804_24844 = state_24799__$1;
(statearr_24804_24844[(2)] = null);

(statearr_24804_24844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (4))){
var inst_24740 = (state_24799[(13)]);
var inst_24740__$1 = (state_24799[(2)]);
var inst_24741 = (inst_24740__$1 == null);
var state_24799__$1 = (function (){var statearr_24805 = state_24799;
(statearr_24805[(13)] = inst_24740__$1);

return statearr_24805;
})();
if(cljs.core.truth_(inst_24741)){
var statearr_24806_24845 = state_24799__$1;
(statearr_24806_24845[(1)] = (5));

} else {
var statearr_24807_24846 = state_24799__$1;
(statearr_24807_24846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (15))){
var state_24799__$1 = state_24799;
var statearr_24811_24847 = state_24799__$1;
(statearr_24811_24847[(2)] = null);

(statearr_24811_24847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (21))){
var state_24799__$1 = state_24799;
var statearr_24812_24848 = state_24799__$1;
(statearr_24812_24848[(2)] = null);

(statearr_24812_24848[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (13))){
var inst_24751 = (state_24799[(8)]);
var inst_24754 = (state_24799[(9)]);
var inst_24753 = (state_24799[(10)]);
var inst_24752 = (state_24799[(11)]);
var inst_24761 = (state_24799[(2)]);
var inst_24762 = (inst_24754 + (1));
var tmp24808 = inst_24751;
var tmp24809 = inst_24753;
var tmp24810 = inst_24752;
var inst_24751__$1 = tmp24808;
var inst_24752__$1 = tmp24810;
var inst_24753__$1 = tmp24809;
var inst_24754__$1 = inst_24762;
var state_24799__$1 = (function (){var statearr_24813 = state_24799;
(statearr_24813[(8)] = inst_24751__$1);

(statearr_24813[(9)] = inst_24754__$1);

(statearr_24813[(10)] = inst_24753__$1);

(statearr_24813[(11)] = inst_24752__$1);

(statearr_24813[(14)] = inst_24761);

return statearr_24813;
})();
var statearr_24814_24849 = state_24799__$1;
(statearr_24814_24849[(2)] = null);

(statearr_24814_24849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (22))){
var state_24799__$1 = state_24799;
var statearr_24815_24850 = state_24799__$1;
(statearr_24815_24850[(2)] = null);

(statearr_24815_24850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (6))){
var inst_24740 = (state_24799[(13)]);
var inst_24749 = f.call(null,inst_24740);
var inst_24750 = cljs.core.seq.call(null,inst_24749);
var inst_24751 = inst_24750;
var inst_24752 = null;
var inst_24753 = (0);
var inst_24754 = (0);
var state_24799__$1 = (function (){var statearr_24816 = state_24799;
(statearr_24816[(8)] = inst_24751);

(statearr_24816[(9)] = inst_24754);

(statearr_24816[(10)] = inst_24753);

(statearr_24816[(11)] = inst_24752);

return statearr_24816;
})();
var statearr_24817_24851 = state_24799__$1;
(statearr_24817_24851[(2)] = null);

(statearr_24817_24851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (17))){
var inst_24765 = (state_24799[(7)]);
var inst_24769 = cljs.core.chunk_first.call(null,inst_24765);
var inst_24770 = cljs.core.chunk_rest.call(null,inst_24765);
var inst_24771 = cljs.core.count.call(null,inst_24769);
var inst_24751 = inst_24770;
var inst_24752 = inst_24769;
var inst_24753 = inst_24771;
var inst_24754 = (0);
var state_24799__$1 = (function (){var statearr_24818 = state_24799;
(statearr_24818[(8)] = inst_24751);

(statearr_24818[(9)] = inst_24754);

(statearr_24818[(10)] = inst_24753);

(statearr_24818[(11)] = inst_24752);

return statearr_24818;
})();
var statearr_24819_24852 = state_24799__$1;
(statearr_24819_24852[(2)] = null);

(statearr_24819_24852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (3))){
var inst_24797 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24799__$1,inst_24797);
} else {
if((state_val_24800 === (12))){
var inst_24785 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24820_24853 = state_24799__$1;
(statearr_24820_24853[(2)] = inst_24785);

(statearr_24820_24853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (2))){
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24799__$1,(4),in$);
} else {
if((state_val_24800 === (23))){
var inst_24793 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24821_24854 = state_24799__$1;
(statearr_24821_24854[(2)] = inst_24793);

(statearr_24821_24854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (19))){
var inst_24780 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24822_24855 = state_24799__$1;
(statearr_24822_24855[(2)] = inst_24780);

(statearr_24822_24855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (11))){
var inst_24751 = (state_24799[(8)]);
var inst_24765 = (state_24799[(7)]);
var inst_24765__$1 = cljs.core.seq.call(null,inst_24751);
var state_24799__$1 = (function (){var statearr_24823 = state_24799;
(statearr_24823[(7)] = inst_24765__$1);

return statearr_24823;
})();
if(inst_24765__$1){
var statearr_24824_24856 = state_24799__$1;
(statearr_24824_24856[(1)] = (14));

} else {
var statearr_24825_24857 = state_24799__$1;
(statearr_24825_24857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (9))){
var inst_24787 = (state_24799[(2)]);
var inst_24788 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24799__$1 = (function (){var statearr_24826 = state_24799;
(statearr_24826[(15)] = inst_24787);

return statearr_24826;
})();
if(cljs.core.truth_(inst_24788)){
var statearr_24827_24858 = state_24799__$1;
(statearr_24827_24858[(1)] = (21));

} else {
var statearr_24828_24859 = state_24799__$1;
(statearr_24828_24859[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (5))){
var inst_24743 = cljs.core.async.close_BANG_.call(null,out);
var state_24799__$1 = state_24799;
var statearr_24829_24860 = state_24799__$1;
(statearr_24829_24860[(2)] = inst_24743);

(statearr_24829_24860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (14))){
var inst_24765 = (state_24799[(7)]);
var inst_24767 = cljs.core.chunked_seq_QMARK_.call(null,inst_24765);
var state_24799__$1 = state_24799;
if(inst_24767){
var statearr_24830_24861 = state_24799__$1;
(statearr_24830_24861[(1)] = (17));

} else {
var statearr_24831_24862 = state_24799__$1;
(statearr_24831_24862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (16))){
var inst_24783 = (state_24799[(2)]);
var state_24799__$1 = state_24799;
var statearr_24832_24863 = state_24799__$1;
(statearr_24832_24863[(2)] = inst_24783);

(statearr_24832_24863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24800 === (10))){
var inst_24754 = (state_24799[(9)]);
var inst_24752 = (state_24799[(11)]);
var inst_24759 = cljs.core._nth.call(null,inst_24752,inst_24754);
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24799__$1,(13),out,inst_24759);
} else {
if((state_val_24800 === (18))){
var inst_24765 = (state_24799[(7)]);
var inst_24774 = cljs.core.first.call(null,inst_24765);
var state_24799__$1 = state_24799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24799__$1,(20),out,inst_24774);
} else {
if((state_val_24800 === (8))){
var inst_24754 = (state_24799[(9)]);
var inst_24753 = (state_24799[(10)]);
var inst_24756 = (inst_24754 < inst_24753);
var inst_24757 = inst_24756;
var state_24799__$1 = state_24799;
if(cljs.core.truth_(inst_24757)){
var statearr_24833_24864 = state_24799__$1;
(statearr_24833_24864[(1)] = (10));

} else {
var statearr_24834_24865 = state_24799__$1;
(statearr_24834_24865[(1)] = (11));

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
});})(c__22364__auto__))
;
return ((function (switch__22252__auto__,c__22364__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____0 = (function (){
var statearr_24838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24838[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__);

(statearr_24838[(1)] = (1));

return statearr_24838;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____1 = (function (state_24799){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24839){if((e24839 instanceof Object)){
var ex__22256__auto__ = e24839;
var statearr_24840_24866 = state_24799;
(statearr_24840_24866[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24867 = state_24799;
state_24799 = G__24867;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__ = function(state_24799){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____1.call(this,state_24799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22253__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto__))
})();
var state__22366__auto__ = (function (){var statearr_24841 = f__22365__auto__.call(null);
(statearr_24841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto__);

return statearr_24841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto__))
);

return c__22364__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24868 = [];
var len__18277__auto___24871 = arguments.length;
var i__18278__auto___24872 = (0);
while(true){
if((i__18278__auto___24872 < len__18277__auto___24871)){
args24868.push((arguments[i__18278__auto___24872]));

var G__24873 = (i__18278__auto___24872 + (1));
i__18278__auto___24872 = G__24873;
continue;
} else {
}
break;
}

var G__24870 = args24868.length;
switch (G__24870) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24868.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24875 = [];
var len__18277__auto___24878 = arguments.length;
var i__18278__auto___24879 = (0);
while(true){
if((i__18278__auto___24879 < len__18277__auto___24878)){
args24875.push((arguments[i__18278__auto___24879]));

var G__24880 = (i__18278__auto___24879 + (1));
i__18278__auto___24879 = G__24880;
continue;
} else {
}
break;
}

var G__24877 = args24875.length;
switch (G__24877) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24875.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24882 = [];
var len__18277__auto___24933 = arguments.length;
var i__18278__auto___24934 = (0);
while(true){
if((i__18278__auto___24934 < len__18277__auto___24933)){
args24882.push((arguments[i__18278__auto___24934]));

var G__24935 = (i__18278__auto___24934 + (1));
i__18278__auto___24934 = G__24935;
continue;
} else {
}
break;
}

var G__24884 = args24882.length;
switch (G__24884) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24882.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22364__auto___24937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___24937,out){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___24937,out){
return (function (state_24908){
var state_val_24909 = (state_24908[(1)]);
if((state_val_24909 === (7))){
var inst_24903 = (state_24908[(2)]);
var state_24908__$1 = state_24908;
var statearr_24910_24938 = state_24908__$1;
(statearr_24910_24938[(2)] = inst_24903);

(statearr_24910_24938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (1))){
var inst_24885 = null;
var state_24908__$1 = (function (){var statearr_24911 = state_24908;
(statearr_24911[(7)] = inst_24885);

return statearr_24911;
})();
var statearr_24912_24939 = state_24908__$1;
(statearr_24912_24939[(2)] = null);

(statearr_24912_24939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (4))){
var inst_24888 = (state_24908[(8)]);
var inst_24888__$1 = (state_24908[(2)]);
var inst_24889 = (inst_24888__$1 == null);
var inst_24890 = cljs.core.not.call(null,inst_24889);
var state_24908__$1 = (function (){var statearr_24913 = state_24908;
(statearr_24913[(8)] = inst_24888__$1);

return statearr_24913;
})();
if(inst_24890){
var statearr_24914_24940 = state_24908__$1;
(statearr_24914_24940[(1)] = (5));

} else {
var statearr_24915_24941 = state_24908__$1;
(statearr_24915_24941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (6))){
var state_24908__$1 = state_24908;
var statearr_24916_24942 = state_24908__$1;
(statearr_24916_24942[(2)] = null);

(statearr_24916_24942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (3))){
var inst_24905 = (state_24908[(2)]);
var inst_24906 = cljs.core.async.close_BANG_.call(null,out);
var state_24908__$1 = (function (){var statearr_24917 = state_24908;
(statearr_24917[(9)] = inst_24905);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24908__$1,inst_24906);
} else {
if((state_val_24909 === (2))){
var state_24908__$1 = state_24908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24908__$1,(4),ch);
} else {
if((state_val_24909 === (11))){
var inst_24888 = (state_24908[(8)]);
var inst_24897 = (state_24908[(2)]);
var inst_24885 = inst_24888;
var state_24908__$1 = (function (){var statearr_24918 = state_24908;
(statearr_24918[(7)] = inst_24885);

(statearr_24918[(10)] = inst_24897);

return statearr_24918;
})();
var statearr_24919_24943 = state_24908__$1;
(statearr_24919_24943[(2)] = null);

(statearr_24919_24943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (9))){
var inst_24888 = (state_24908[(8)]);
var state_24908__$1 = state_24908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24908__$1,(11),out,inst_24888);
} else {
if((state_val_24909 === (5))){
var inst_24888 = (state_24908[(8)]);
var inst_24885 = (state_24908[(7)]);
var inst_24892 = cljs.core._EQ_.call(null,inst_24888,inst_24885);
var state_24908__$1 = state_24908;
if(inst_24892){
var statearr_24921_24944 = state_24908__$1;
(statearr_24921_24944[(1)] = (8));

} else {
var statearr_24922_24945 = state_24908__$1;
(statearr_24922_24945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (10))){
var inst_24900 = (state_24908[(2)]);
var state_24908__$1 = state_24908;
var statearr_24923_24946 = state_24908__$1;
(statearr_24923_24946[(2)] = inst_24900);

(statearr_24923_24946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24909 === (8))){
var inst_24885 = (state_24908[(7)]);
var tmp24920 = inst_24885;
var inst_24885__$1 = tmp24920;
var state_24908__$1 = (function (){var statearr_24924 = state_24908;
(statearr_24924[(7)] = inst_24885__$1);

return statearr_24924;
})();
var statearr_24925_24947 = state_24908__$1;
(statearr_24925_24947[(2)] = null);

(statearr_24925_24947[(1)] = (2));


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
});})(c__22364__auto___24937,out))
;
return ((function (switch__22252__auto__,c__22364__auto___24937,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_24929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24929[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_24929[(1)] = (1));

return statearr_24929;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24908){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e24930){if((e24930 instanceof Object)){
var ex__22256__auto__ = e24930;
var statearr_24931_24948 = state_24908;
(statearr_24931_24948[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24949 = state_24908;
state_24908 = G__24949;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___24937,out))
})();
var state__22366__auto__ = (function (){var statearr_24932 = f__22365__auto__.call(null);
(statearr_24932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___24937);

return statearr_24932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___24937,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24950 = [];
var len__18277__auto___25020 = arguments.length;
var i__18278__auto___25021 = (0);
while(true){
if((i__18278__auto___25021 < len__18277__auto___25020)){
args24950.push((arguments[i__18278__auto___25021]));

var G__25022 = (i__18278__auto___25021 + (1));
i__18278__auto___25021 = G__25022;
continue;
} else {
}
break;
}

var G__24952 = args24950.length;
switch (G__24952) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24950.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22364__auto___25024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___25024,out){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___25024,out){
return (function (state_24990){
var state_val_24991 = (state_24990[(1)]);
if((state_val_24991 === (7))){
var inst_24986 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_24992_25025 = state_24990__$1;
(statearr_24992_25025[(2)] = inst_24986);

(statearr_24992_25025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (1))){
var inst_24953 = (new Array(n));
var inst_24954 = inst_24953;
var inst_24955 = (0);
var state_24990__$1 = (function (){var statearr_24993 = state_24990;
(statearr_24993[(7)] = inst_24955);

(statearr_24993[(8)] = inst_24954);

return statearr_24993;
})();
var statearr_24994_25026 = state_24990__$1;
(statearr_24994_25026[(2)] = null);

(statearr_24994_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (4))){
var inst_24958 = (state_24990[(9)]);
var inst_24958__$1 = (state_24990[(2)]);
var inst_24959 = (inst_24958__$1 == null);
var inst_24960 = cljs.core.not.call(null,inst_24959);
var state_24990__$1 = (function (){var statearr_24995 = state_24990;
(statearr_24995[(9)] = inst_24958__$1);

return statearr_24995;
})();
if(inst_24960){
var statearr_24996_25027 = state_24990__$1;
(statearr_24996_25027[(1)] = (5));

} else {
var statearr_24997_25028 = state_24990__$1;
(statearr_24997_25028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (15))){
var inst_24980 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_24998_25029 = state_24990__$1;
(statearr_24998_25029[(2)] = inst_24980);

(statearr_24998_25029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (13))){
var state_24990__$1 = state_24990;
var statearr_24999_25030 = state_24990__$1;
(statearr_24999_25030[(2)] = null);

(statearr_24999_25030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (6))){
var inst_24955 = (state_24990[(7)]);
var inst_24976 = (inst_24955 > (0));
var state_24990__$1 = state_24990;
if(cljs.core.truth_(inst_24976)){
var statearr_25000_25031 = state_24990__$1;
(statearr_25000_25031[(1)] = (12));

} else {
var statearr_25001_25032 = state_24990__$1;
(statearr_25001_25032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (3))){
var inst_24988 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24990__$1,inst_24988);
} else {
if((state_val_24991 === (12))){
var inst_24954 = (state_24990[(8)]);
var inst_24978 = cljs.core.vec.call(null,inst_24954);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24990__$1,(15),out,inst_24978);
} else {
if((state_val_24991 === (2))){
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24990__$1,(4),ch);
} else {
if((state_val_24991 === (11))){
var inst_24970 = (state_24990[(2)]);
var inst_24971 = (new Array(n));
var inst_24954 = inst_24971;
var inst_24955 = (0);
var state_24990__$1 = (function (){var statearr_25002 = state_24990;
(statearr_25002[(7)] = inst_24955);

(statearr_25002[(8)] = inst_24954);

(statearr_25002[(10)] = inst_24970);

return statearr_25002;
})();
var statearr_25003_25033 = state_24990__$1;
(statearr_25003_25033[(2)] = null);

(statearr_25003_25033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (9))){
var inst_24954 = (state_24990[(8)]);
var inst_24968 = cljs.core.vec.call(null,inst_24954);
var state_24990__$1 = state_24990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24990__$1,(11),out,inst_24968);
} else {
if((state_val_24991 === (5))){
var inst_24963 = (state_24990[(11)]);
var inst_24955 = (state_24990[(7)]);
var inst_24958 = (state_24990[(9)]);
var inst_24954 = (state_24990[(8)]);
var inst_24962 = (inst_24954[inst_24955] = inst_24958);
var inst_24963__$1 = (inst_24955 + (1));
var inst_24964 = (inst_24963__$1 < n);
var state_24990__$1 = (function (){var statearr_25004 = state_24990;
(statearr_25004[(11)] = inst_24963__$1);

(statearr_25004[(12)] = inst_24962);

return statearr_25004;
})();
if(cljs.core.truth_(inst_24964)){
var statearr_25005_25034 = state_24990__$1;
(statearr_25005_25034[(1)] = (8));

} else {
var statearr_25006_25035 = state_24990__$1;
(statearr_25006_25035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (14))){
var inst_24983 = (state_24990[(2)]);
var inst_24984 = cljs.core.async.close_BANG_.call(null,out);
var state_24990__$1 = (function (){var statearr_25008 = state_24990;
(statearr_25008[(13)] = inst_24983);

return statearr_25008;
})();
var statearr_25009_25036 = state_24990__$1;
(statearr_25009_25036[(2)] = inst_24984);

(statearr_25009_25036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (10))){
var inst_24974 = (state_24990[(2)]);
var state_24990__$1 = state_24990;
var statearr_25010_25037 = state_24990__$1;
(statearr_25010_25037[(2)] = inst_24974);

(statearr_25010_25037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24991 === (8))){
var inst_24963 = (state_24990[(11)]);
var inst_24954 = (state_24990[(8)]);
var tmp25007 = inst_24954;
var inst_24954__$1 = tmp25007;
var inst_24955 = inst_24963;
var state_24990__$1 = (function (){var statearr_25011 = state_24990;
(statearr_25011[(7)] = inst_24955);

(statearr_25011[(8)] = inst_24954__$1);

return statearr_25011;
})();
var statearr_25012_25038 = state_24990__$1;
(statearr_25012_25038[(2)] = null);

(statearr_25012_25038[(1)] = (2));


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
});})(c__22364__auto___25024,out))
;
return ((function (switch__22252__auto__,c__22364__auto___25024,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_25016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25016[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_25016[(1)] = (1));

return statearr_25016;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_24990){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_24990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25017){if((e25017 instanceof Object)){
var ex__22256__auto__ = e25017;
var statearr_25018_25039 = state_24990;
(statearr_25018_25039[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25040 = state_24990;
state_24990 = G__25040;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_24990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_24990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___25024,out))
})();
var state__22366__auto__ = (function (){var statearr_25019 = f__22365__auto__.call(null);
(statearr_25019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___25024);

return statearr_25019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___25024,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25041 = [];
var len__18277__auto___25115 = arguments.length;
var i__18278__auto___25116 = (0);
while(true){
if((i__18278__auto___25116 < len__18277__auto___25115)){
args25041.push((arguments[i__18278__auto___25116]));

var G__25117 = (i__18278__auto___25116 + (1));
i__18278__auto___25116 = G__25117;
continue;
} else {
}
break;
}

var G__25043 = args25041.length;
switch (G__25043) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25041.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22364__auto___25119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22364__auto___25119,out){
return (function (){
var f__22365__auto__ = (function (){var switch__22252__auto__ = ((function (c__22364__auto___25119,out){
return (function (state_25085){
var state_val_25086 = (state_25085[(1)]);
if((state_val_25086 === (7))){
var inst_25081 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25087_25120 = state_25085__$1;
(statearr_25087_25120[(2)] = inst_25081);

(statearr_25087_25120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (1))){
var inst_25044 = [];
var inst_25045 = inst_25044;
var inst_25046 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25085__$1 = (function (){var statearr_25088 = state_25085;
(statearr_25088[(7)] = inst_25046);

(statearr_25088[(8)] = inst_25045);

return statearr_25088;
})();
var statearr_25089_25121 = state_25085__$1;
(statearr_25089_25121[(2)] = null);

(statearr_25089_25121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (4))){
var inst_25049 = (state_25085[(9)]);
var inst_25049__$1 = (state_25085[(2)]);
var inst_25050 = (inst_25049__$1 == null);
var inst_25051 = cljs.core.not.call(null,inst_25050);
var state_25085__$1 = (function (){var statearr_25090 = state_25085;
(statearr_25090[(9)] = inst_25049__$1);

return statearr_25090;
})();
if(inst_25051){
var statearr_25091_25122 = state_25085__$1;
(statearr_25091_25122[(1)] = (5));

} else {
var statearr_25092_25123 = state_25085__$1;
(statearr_25092_25123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (15))){
var inst_25075 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25093_25124 = state_25085__$1;
(statearr_25093_25124[(2)] = inst_25075);

(statearr_25093_25124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (13))){
var state_25085__$1 = state_25085;
var statearr_25094_25125 = state_25085__$1;
(statearr_25094_25125[(2)] = null);

(statearr_25094_25125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (6))){
var inst_25045 = (state_25085[(8)]);
var inst_25070 = inst_25045.length;
var inst_25071 = (inst_25070 > (0));
var state_25085__$1 = state_25085;
if(cljs.core.truth_(inst_25071)){
var statearr_25095_25126 = state_25085__$1;
(statearr_25095_25126[(1)] = (12));

} else {
var statearr_25096_25127 = state_25085__$1;
(statearr_25096_25127[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (3))){
var inst_25083 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25085__$1,inst_25083);
} else {
if((state_val_25086 === (12))){
var inst_25045 = (state_25085[(8)]);
var inst_25073 = cljs.core.vec.call(null,inst_25045);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(15),out,inst_25073);
} else {
if((state_val_25086 === (2))){
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25085__$1,(4),ch);
} else {
if((state_val_25086 === (11))){
var inst_25049 = (state_25085[(9)]);
var inst_25053 = (state_25085[(10)]);
var inst_25063 = (state_25085[(2)]);
var inst_25064 = [];
var inst_25065 = inst_25064.push(inst_25049);
var inst_25045 = inst_25064;
var inst_25046 = inst_25053;
var state_25085__$1 = (function (){var statearr_25097 = state_25085;
(statearr_25097[(11)] = inst_25065);

(statearr_25097[(12)] = inst_25063);

(statearr_25097[(7)] = inst_25046);

(statearr_25097[(8)] = inst_25045);

return statearr_25097;
})();
var statearr_25098_25128 = state_25085__$1;
(statearr_25098_25128[(2)] = null);

(statearr_25098_25128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (9))){
var inst_25045 = (state_25085[(8)]);
var inst_25061 = cljs.core.vec.call(null,inst_25045);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25085__$1,(11),out,inst_25061);
} else {
if((state_val_25086 === (5))){
var inst_25049 = (state_25085[(9)]);
var inst_25053 = (state_25085[(10)]);
var inst_25046 = (state_25085[(7)]);
var inst_25053__$1 = f.call(null,inst_25049);
var inst_25054 = cljs.core._EQ_.call(null,inst_25053__$1,inst_25046);
var inst_25055 = cljs.core.keyword_identical_QMARK_.call(null,inst_25046,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25056 = (inst_25054) || (inst_25055);
var state_25085__$1 = (function (){var statearr_25099 = state_25085;
(statearr_25099[(10)] = inst_25053__$1);

return statearr_25099;
})();
if(cljs.core.truth_(inst_25056)){
var statearr_25100_25129 = state_25085__$1;
(statearr_25100_25129[(1)] = (8));

} else {
var statearr_25101_25130 = state_25085__$1;
(statearr_25101_25130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (14))){
var inst_25078 = (state_25085[(2)]);
var inst_25079 = cljs.core.async.close_BANG_.call(null,out);
var state_25085__$1 = (function (){var statearr_25103 = state_25085;
(statearr_25103[(13)] = inst_25078);

return statearr_25103;
})();
var statearr_25104_25131 = state_25085__$1;
(statearr_25104_25131[(2)] = inst_25079);

(statearr_25104_25131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (10))){
var inst_25068 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25105_25132 = state_25085__$1;
(statearr_25105_25132[(2)] = inst_25068);

(statearr_25105_25132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (8))){
var inst_25049 = (state_25085[(9)]);
var inst_25053 = (state_25085[(10)]);
var inst_25045 = (state_25085[(8)]);
var inst_25058 = inst_25045.push(inst_25049);
var tmp25102 = inst_25045;
var inst_25045__$1 = tmp25102;
var inst_25046 = inst_25053;
var state_25085__$1 = (function (){var statearr_25106 = state_25085;
(statearr_25106[(7)] = inst_25046);

(statearr_25106[(14)] = inst_25058);

(statearr_25106[(8)] = inst_25045__$1);

return statearr_25106;
})();
var statearr_25107_25133 = state_25085__$1;
(statearr_25107_25133[(2)] = null);

(statearr_25107_25133[(1)] = (2));


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
});})(c__22364__auto___25119,out))
;
return ((function (switch__22252__auto__,c__22364__auto___25119,out){
return (function() {
var cljs$core$async$state_machine__22253__auto__ = null;
var cljs$core$async$state_machine__22253__auto____0 = (function (){
var statearr_25111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25111[(0)] = cljs$core$async$state_machine__22253__auto__);

(statearr_25111[(1)] = (1));

return statearr_25111;
});
var cljs$core$async$state_machine__22253__auto____1 = (function (state_25085){
while(true){
var ret_value__22254__auto__ = (function (){try{while(true){
var result__22255__auto__ = switch__22252__auto__.call(null,state_25085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22255__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22255__auto__;
}
break;
}
}catch (e25112){if((e25112 instanceof Object)){
var ex__22256__auto__ = e25112;
var statearr_25113_25134 = state_25085;
(statearr_25113_25134[(5)] = ex__22256__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25135 = state_25085;
state_25085 = G__25135;
continue;
} else {
return ret_value__22254__auto__;
}
break;
}
});
cljs$core$async$state_machine__22253__auto__ = function(state_25085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22253__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22253__auto____1.call(this,state_25085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22253__auto____0;
cljs$core$async$state_machine__22253__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22253__auto____1;
return cljs$core$async$state_machine__22253__auto__;
})()
;})(switch__22252__auto__,c__22364__auto___25119,out))
})();
var state__22366__auto__ = (function (){var statearr_25114 = f__22365__auto__.call(null);
(statearr_25114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22364__auto___25119);

return statearr_25114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22366__auto__);
});})(c__22364__auto___25119,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
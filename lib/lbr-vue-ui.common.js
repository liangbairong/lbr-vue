module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "c497");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00d5":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("01f5");
var call = __webpack_require__("8bbc");
var isArrayIter = __webpack_require__("c847");
var anObject = __webpack_require__("a013");
var toLength = __webpack_require__("b146");
var getIterFn = __webpack_require__("1a9b");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "01f5":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("648a");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "03b3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0d5f":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("a013");
var aFunction = __webpack_require__("648a");
var SPECIES = __webpack_require__("8b37")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "14fc":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "1a9b":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("4819");
var ITERATOR = __webpack_require__("8b37")('iterator');
var Iterators = __webpack_require__("14fc");
module.exports = __webpack_require__("a4cc").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "1d09":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue Scroller 
 * version: 2.2.4 
 * repo: https://github.com/wangdahoo/vue-scroller 
 * build: 2017-09-21 16:25:35
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e){t.exports=function(t,e,n,o){var i,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,r=t.default);var l="function"==typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),n&&(l._scopeId=n),o){var s=Object.create(l.computed||null);Object.keys(o).forEach(function(t){var e=o[t];s[t]=function(){return e}}),l.computed=s}return{esModule:i,exports:r,options:l}}},function(t,e,n){n(14);var o=n(0)(n(3),n(13),"data-v-ecaca2b0",null);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fillColor:{type:String,default:"#AAA"}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=o(i),a=n(6),l=o(a),s=n(10),c=o(s),_=n(9),u=o(_),f=/^[\d]+(\%)?$/,p=function(t){return"%"!=t[t.length-1]?t+"px":t},h=function(t){return f.test(t)};e.default={components:{Spinner:c.default,Arrow:u.default},props:{onRefresh:Function,onInfinite:Function,refreshText:{type:String,default:"下拉刷新"},noDataText:{type:String,default:"没有更多数据"},width:{type:String,default:"100%",validator:h},height:{type:String,default:"100%",validator:h},snapping:{type:Boolean,default:!1},snapWidth:{type:Number,default:100},snapHeight:{type:Number,default:100},animating:{type:Boolean,default:!0},animationDuration:{type:Number,default:250},bouncing:{type:Boolean,default:!0},refreshLayerColor:{type:String,default:"#AAA"},loadingLayerColor:{type:String,default:"#AAA"},cssClass:String,minContentHeight:{type:Number,default:0}},computed:{w:function(){return p(this.width)},h:function(){return p(this.height)},showInfiniteLayer:function(){var t=0;return this.content&&(t=this.content.offsetHeight),!!this.onInfinite&&t>this.minContentHeight}},data:function(){return{containerId:"outer-"+Math.random().toString(36).substring(3,8),contentId:"inner-"+Math.random().toString(36).substring(3,8),state:0,loadingState:0,showLoading:!1,container:void 0,content:void 0,scroller:void 0,pullToRefreshLayer:void 0,mousedown:!1,infiniteTimer:void 0,resizeTimer:void 0}},mounted:function(){var t=this;this.container=document.getElementById(this.containerId),this.container.style.width=this.w,this.container.style.height=this.h,this.content=document.getElementById(this.contentId),this.cssClass&&this.content.classList.add(this.cssClass),this.pullToRefreshLayer=this.content.getElementsByTagName("div")[0];var e=(0,l.default)(this.content);this.scroller=new r.default(e,{scrollingX:!1,snapping:this.snapping,animating:this.animating,animationDuration:this.animationDuration,bouncing:this.bouncing}),this.onRefresh&&this.scroller.activatePullToRefresh(60,function(){t.state=1},function(){t.state=0},function(){t.state=2,t.$on("$finishPullToRefresh",function(){setTimeout(function(){t.state=0,t.finishPullToRefresh()})}),t.onRefresh(t.finishPullToRefresh)}),this.onInfinite&&(this.infiniteTimer=setInterval(function(){var e=t.scroller.getValues(),n=(e.left,e.top);e.zoom;if(t.content.offsetHeight>0&&n+60>t.content.offsetHeight-t.container.clientHeight){if(t.loadingState)return;t.loadingState=1,t.showLoading=!0,t.onInfinite(t.finishInfinite)}},10));var n=this.container.getBoundingClientRect();this.scroller.setPosition(n.left+this.container.clientLeft,n.top+this.container.clientTop),this.snapping&&this.scroller.setSnapSize(this.snapWidth,this.snapHeight);var o=function(){return{width:t.content.offsetWidth,height:t.content.offsetHeight}},i=o(),a=i.content_width,s=i.content_height;this.resizeTimer=setInterval(function(){var e=o(),n=e.width,i=e.height;n===a&&i===s||(a=n,s=i,t.resize())},10)},destroyed:function(){clearInterval(this.resizeTimer),this.infiniteTimer&&clearInterval(this.infiniteTimer)},methods:{resize:function(){var t=this.container,e=this.content;this.scroller.setDimensions(t.clientWidth,t.clientHeight,e.offsetWidth,e.offsetHeight)},finishPullToRefresh:function(){this.scroller.finishPullToRefresh()},finishInfinite:function(t){this.loadingState=t?2:0,this.showLoading=!1,2==this.loadingState&&this.resetLoadingState()},triggerPullToRefresh:function(){this.scroller.triggerPullToRefresh()},scrollTo:function(t,e,n){this.scroller.scrollTo(t,e,n)},scrollBy:function(t,e,n){this.scroller.scrollBy(t,e,n)},touchStart:function(t){t.target.tagName.match(/input|textarea|select/i)||this.scroller.doTouchStart(t.touches,t.timeStamp)},touchMove:function(t){t.preventDefault(),this.scroller.doTouchMove(t.touches,t.timeStamp)},touchEnd:function(t){this.scroller.doTouchEnd(t.timeStamp)},mouseDown:function(t){t.target.tagName.match(/input|textarea|select/i)||(this.scroller.doTouchStart([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.mousedown=!0)},mouseMove:function(t){this.mousedown&&(this.scroller.doTouchMove([{pageX:t.pageX,pageY:t.pageY}],t.timeStamp),this.mousedown=!0)},mouseUp:function(t){this.mousedown&&(this.scroller.doTouchEnd(t.timeStamp),this.mousedown=!1)},getPosition:function(){var t=this.scroller.getValues();return{left:parseInt(t.left),top:parseInt(t.top)}},resetLoadingState:function(){var t=this,e=this.scroller.getValues(),n=(e.left,e.top);e.zoom,this.container,this.content;n+60>this.content.offsetHeight-this.container.clientHeight?setTimeout(function(){t.resetLoadingState()},1e3):this.loadingState=0}}}},function(t,e,n){"use strict";function o(t){o.installed||(o.installed=!0,t.component("scroller",a.default))}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=n(1),a=function(t){return t&&t.__esModule?t:{default:t}}(r),l={install:o,Scroller:a.default};void 0!==("undefined"==typeof window?"undefined":i(window))&&window.Vue&&window.Vue.use(l),e.default=l},function(t,e,n){"use strict";var o;!function(i){var r=function(){},a=function(t){var e=Date.now||function(){return+new Date},n={},o=1,i={effect:{}};return i.effect.Animate={requestAnimationFrame:function(){var e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame,n=!!e;if(e&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(e.toString())&&(n=!1),n)return function(t,n){e(t,n)};var o={},i=0,r=1,a=null,l=+new Date;return function(t,e){var n=r++;return o[n]=t,i++,null===a&&(a=setInterval(function(){var t=+new Date,e=o;o={},i=0;for(var n in e)e.hasOwnProperty(n)&&(e[n](t),l=t);t-l>2500&&(clearInterval(a),a=null)},1e3/60)),n}}(),stop:function(t){var e=null!=n[t];return e&&(n[t]=null),e},isRunning:function(t){return null!=n[t]},start:function(t,r,a,l,s,c){var _=e(),u=_,f=0,p=0,h=o++;if(c||(c=document.body),h%20==0){var d={};for(var m in n)d[m]=!0;n=d}var g=function o(d){var m=!0!==d,g=e();if(!n[h]||r&&!r(h))return n[h]=null,void(a&&a(60-p/((g-_)/1e3),h,!1));if(m)for(var v=Math.round((g-u)/(1e3/60))-1,y=0;y<Math.min(v,4);y++)o(!0),p++;l&&(f=(g-_)/l)>1&&(f=1);var T=s?s(f):f;!1!==t(T,g,m)&&1!==f||!m?m&&(u=g,i.effect.Animate.requestAnimationFrame(o,c)):(n[h]=null,a&&a(60-p/((g-_)/1e3),h,1===f||null==l))};return n[h]=!0,i.effect.Animate.requestAnimationFrame(g,c),h}},i}(i),l=function(t,e){this.__callback=t,this.options={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:r,penetrationDeceleration:.03,penetrationAcceleration:.08};for(var n in e)this.options[n]=e[n]},s=function(t){return Math.pow(t-1,3)+1},c=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},_={__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(t,e,n,o){var i=this;t===+t&&(i.__clientWidth=t),e===+e&&(i.__clientHeight=e),n===+n&&(i.__contentWidth=n),o===+o&&(i.__contentHeight=o),i.__computeScrollMax(),i.scrollTo(i.__scrollLeft,i.__scrollTop,!0)},setPosition:function(t,e){var n=this;n.__clientLeft=t||0,n.__clientTop=e||0},setSnapSize:function(t,e){var n=this;n.__snapWidth=t,n.__snapHeight=e},activatePullToRefresh:function(t,e,n,o){var i=this;i.__refreshHeight=t,i.__refreshActivate=e,i.__refreshDeactivate=n,i.__refreshStart=o},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var t=this;t.__refreshActive=!1,t.__refreshDeactivate&&t.__refreshDeactivate(),t.scrollTo(t.__scrollLeft,t.__scrollTop,!0)},getValues:function(){var t=this;return{left:t.__scrollLeft,top:t.__scrollTop,zoom:t.__zoomLevel}},getScrollMax:function(){var t=this;return{left:t.__maxScrollLeft,top:t.__maxScrollTop}},zoomTo:function(t,e,n,o,i){var r=this;if(!r.options.zooming)throw new Error("Zooming is not enabled!");i&&(r.__zoomComplete=i),r.__isDecelerating&&(a.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1);var l=r.__zoomLevel;null==n&&(n=r.__clientWidth/2),null==o&&(o=r.__clientHeight/2),t=Math.max(Math.min(t,r.options.maxZoom),r.options.minZoom),r.__computeScrollMax(t);var s=(n+r.__scrollLeft)*t/l-n,c=(o+r.__scrollTop)*t/l-o;s>r.__maxScrollLeft?s=r.__maxScrollLeft:s<0&&(s=0),c>r.__maxScrollTop?c=r.__maxScrollTop:c<0&&(c=0),r.__publish(s,c,t,e)},zoomBy:function(t,e,n,o,i){var r=this;r.zoomTo(r.__zoomLevel*t,e,n,o,i)},scrollTo:function(t,e,n,o){var i=this;if(i.__isDecelerating&&(a.effect.Animate.stop(i.__isDecelerating),i.__isDecelerating=!1),null!=o&&o!==i.__zoomLevel){if(!i.options.zooming)throw new Error("Zooming is not enabled!");t*=o,e*=o,i.__computeScrollMax(o)}else o=i.__zoomLevel;i.options.scrollingX?i.options.paging?t=Math.round(t/i.__clientWidth)*i.__clientWidth:i.options.snapping&&(t=Math.round(t/i.__snapWidth)*i.__snapWidth):t=i.__scrollLeft,i.options.scrollingY?i.options.paging?e=Math.round(e/i.__clientHeight)*i.__clientHeight:i.options.snapping&&(e=Math.round(e/i.__snapHeight)*i.__snapHeight):e=i.__scrollTop,t=Math.max(Math.min(i.__maxScrollLeft,t),0),e=Math.max(Math.min(i.__maxScrollTop,e),0),t===i.__scrollLeft&&e===i.__scrollTop&&(n=!1),i.__isTracking||i.__publish(t,e,o,n)},scrollBy:function(t,e,n){var o=this,i=o.__isAnimating?o.__scheduledLeft:o.__scrollLeft,r=o.__isAnimating?o.__scheduledTop:o.__scrollTop;o.scrollTo(i+(t||0),r+(e||0),n)},doMouseZoom:function(t,e,n,o){var i=this,r=t>0?.97:1.03;return i.zoomTo(i.__zoomLevel*r,!1,n-i.__clientLeft,o-i.__clientTop)},doTouchStart:function(t,e){if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);var n=this;n.__interruptedAnimation=!0,n.__isDecelerating&&(a.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(a.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var o,i,r=1===t.length;r?(o=t[0].pageX,i=t[0].pageY):(o=Math.abs(t[0].pageX+t[1].pageX)/2,i=Math.abs(t[0].pageY+t[1].pageY)/2),n.__initialTouchLeft=o,n.__initialTouchTop=i,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=o,n.__lastTouchTop=i,n.__lastTouchMove=e,n.__lastScale=1,n.__enableScrollX=!r&&n.options.scrollingX,n.__enableScrollY=!r&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!r,n.__isSingleTouch=r,n.__positions=[]},doTouchMove:function(t,e,n){if(null==t.length)throw new Error("Invalid touch list: "+t);if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);var o=this;if(o.__isTracking){var i,r;2===t.length?(i=Math.abs(t[0].pageX+t[1].pageX)/2,r=Math.abs(t[0].pageY+t[1].pageY)/2):(i=t[0].pageX,r=t[0].pageY);var a=o.__positions;if(o.__isDragging){var l=i-o.__lastTouchLeft,s=r-o.__lastTouchTop,c=o.__scrollLeft,_=o.__scrollTop,u=o.__zoomLevel;if(null!=n&&o.options.zooming){var f=u;if(u=u/o.__lastScale*n,u=Math.max(Math.min(u,o.options.maxZoom),o.options.minZoom),f!==u){var p=i-o.__clientLeft,h=r-o.__clientTop;c=(p+c)*u/f-p,_=(h+_)*u/f-h,o.__computeScrollMax(u)}}if(o.__enableScrollX){c-=l*this.options.speedMultiplier;var d=o.__maxScrollLeft;(c>d||c<0)&&(o.options.bouncing?c+=l/2*this.options.speedMultiplier:c=c>d?d:0)}if(o.__enableScrollY){_-=s*this.options.speedMultiplier;var m=o.__maxScrollTop;(_>m||_<0)&&(o.options.bouncing?(_+=s/2*this.options.speedMultiplier,o.__enableScrollX||null==o.__refreshHeight||(!o.__refreshActive&&_<=-o.__refreshHeight?(o.__refreshActive=!0,o.__refreshActivate&&o.__refreshActivate()):o.__refreshActive&&_>-o.__refreshHeight&&(o.__refreshActive=!1,o.__refreshDeactivate&&o.__refreshDeactivate()))):_=_>m?m:0)}a.length>60&&a.splice(0,30),a.push(c,_,e),o.__publish(c,_,u)}else{var g=o.options.locking?3:0,v=Math.abs(i-o.__initialTouchLeft),y=Math.abs(r-o.__initialTouchTop);o.__enableScrollX=o.options.scrollingX&&v>=g,o.__enableScrollY=o.options.scrollingY&&y>=g,a.push(o.__scrollLeft,o.__scrollTop,e),o.__isDragging=(o.__enableScrollX||o.__enableScrollY)&&(v>=5||y>=5),o.__isDragging&&(o.__interruptedAnimation=!1)}o.__lastTouchLeft=i,o.__lastTouchTop=r,o.__lastTouchMove=e,o.__lastScale=n}},doTouchEnd:function(t){if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);var e=this;if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging)if(e.__isDragging=!1,e.__isSingleTouch&&e.options.animating&&t-e.__lastTouchMove<=100){for(var n=e.__positions,o=n.length-1,i=o,r=o;r>0&&n[r]>e.__lastTouchMove-100;r-=3)i=r;if(i!==o){var a=n[o]-n[i],l=e.__scrollLeft-n[i-2],s=e.__scrollTop-n[i-1];e.__decelerationVelocityX=l/a*(1e3/60),e.__decelerationVelocityY=s/a*(1e3/60);var c=e.options.paging||e.options.snapping?4:1;Math.abs(e.__decelerationVelocityX)>c||Math.abs(e.__decelerationVelocityY)>c?e.__refreshActive||e.__startDeceleration(t):e.options.scrollingComplete()}else e.options.scrollingComplete()}else t-e.__lastTouchMove>100&&e.options.scrollingComplete();e.__isDecelerating||(e.__refreshActive&&e.__refreshStart?(e.__publish(e.__scrollLeft,-e.__refreshHeight,e.__zoomLevel,!0),e.__refreshStart&&e.__refreshStart()):((e.__interruptedAnimation||e.__isDragging)&&e.options.scrollingComplete(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0,e.__zoomLevel),e.__refreshActive&&(e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate()))),e.__positions.length=0}},__publish:function(t,e,n,o){var i=this,r=i.__isAnimating;if(r&&(a.effect.Animate.stop(r),i.__isAnimating=!1),o&&i.options.animating){i.__scheduledLeft=t,i.__scheduledTop=e,i.__scheduledZoom=n;var l=i.__scrollLeft,_=i.__scrollTop,u=i.__zoomLevel,f=t-l,p=e-_,h=n-u,d=function(t,e,n){n&&(i.__scrollLeft=l+f*t,i.__scrollTop=_+p*t,i.__zoomLevel=u+h*t,i.__callback&&i.__callback(i.__scrollLeft,i.__scrollTop,i.__zoomLevel))},m=function(t){return i.__isAnimating===t},g=function(t,e,n){e===i.__isAnimating&&(i.__isAnimating=!1),(i.__didDecelerationComplete||n)&&i.options.scrollingComplete(),i.options.zooming&&(i.__computeScrollMax(),i.__zoomComplete&&(i.__zoomComplete(),i.__zoomComplete=null))};i.__isAnimating=a.effect.Animate.start(d,m,g,i.options.animationDuration,r?s:c)}else i.__scheduledLeft=i.__scrollLeft=t,i.__scheduledTop=i.__scrollTop=e,i.__scheduledZoom=i.__zoomLevel=n,i.__callback&&i.__callback(t,e,n),i.options.zooming&&(i.__computeScrollMax(),i.__zoomComplete&&(i.__zoomComplete(),i.__zoomComplete=null))},__computeScrollMax:function(t){var e=this;null==t&&(t=e.__zoomLevel),e.__maxScrollLeft=Math.max(e.__contentWidth*t-e.__clientWidth,0),e.__maxScrollTop=Math.max(e.__contentHeight*t-e.__clientHeight,0)},__startDeceleration:function(t){var e=this;if(e.options.paging){var n=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0),o=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0),i=e.__clientWidth,r=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(n/i)*i,e.__minDecelerationScrollTop=Math.floor(o/r)*r,e.__maxDecelerationScrollLeft=Math.ceil(n/i)*i,e.__maxDecelerationScrollTop=Math.ceil(o/r)*r}else e.__minDecelerationScrollLeft=0,e.__minDecelerationScrollTop=0,e.__maxDecelerationScrollLeft=e.__maxScrollLeft,e.__maxDecelerationScrollTop=e.__maxScrollTop;var l=function(t,n,o){e.__stepThroughDeceleration(o)},s=e.options.snapping?4:.001,c=function(){var t=Math.abs(e.__decelerationVelocityX)>=s||Math.abs(e.__decelerationVelocityY)>=s;return t||(e.__didDecelerationComplete=!0),t},_=function(t,n,o){e.__isDecelerating=!1,e.__didDecelerationComplete&&e.options.scrollingComplete(),e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)};e.__isDecelerating=a.effect.Animate.start(l,c,_)},__stepThroughDeceleration:function(t){var e=this,n=e.__scrollLeft+e.__decelerationVelocityX,o=e.__scrollTop+e.__decelerationVelocityY;if(!e.options.bouncing){var i=Math.max(Math.min(e.__maxDecelerationScrollLeft,n),e.__minDecelerationScrollLeft);i!==n&&(n=i,e.__decelerationVelocityX=0);var r=Math.max(Math.min(e.__maxDecelerationScrollTop,o),e.__minDecelerationScrollTop);r!==o&&(o=r,e.__decelerationVelocityY=0)}if(t?e.__publish(n,o,e.__zoomLevel):(e.__scrollLeft=n,e.__scrollTop=o),!e.options.paging){e.__decelerationVelocityX*=.95,e.__decelerationVelocityY*=.95}if(e.options.bouncing){var a=0,l=0,s=e.options.penetrationDeceleration,c=e.options.penetrationAcceleration;n<e.__minDecelerationScrollLeft?a=e.__minDecelerationScrollLeft-n:n>e.__maxDecelerationScrollLeft&&(a=e.__maxDecelerationScrollLeft-n),o<e.__minDecelerationScrollTop?l=e.__minDecelerationScrollTop-o:o>e.__maxDecelerationScrollTop&&(l=e.__maxDecelerationScrollTop-o),0!==a&&(a*e.__decelerationVelocityX<=0?e.__decelerationVelocityX+=a*s:e.__decelerationVelocityX=a*c),0!==l&&(l*e.__decelerationVelocityY<=0?e.__decelerationVelocityY+=l*s:e.__decelerationVelocityY=l*c)}}};for(var u in _)l.prototype[u]=_[u];void 0!==t&&t.exports?t.exports=l:void 0!==(o=function(){return l}.call(e,n,e,t))&&(t.exports=o)}(window)},function(t,e,n){"use strict";function o(t){var e,n=window,o=document.documentElement.style;n.opera&&"[object Opera]"===Object.prototype.toString.call(opera)?e="presto":"MozAppearance"in o?e="gecko":"WebkitAppearance"in o?e="webkit":"string"==typeof navigator.cpuClass&&(e="trident");var i={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[e],r=document.createElement("div"),a=i+"Perspective",l=i+"Transform";return void 0!==r.style[a]?function(e,n,o){t.style[l]="translate3d("+-e+"px,"+-n+"px,0) scale("+o+")"}:void 0!==r.style[l]?function(e,n,o){t.style[l]="translate("+-e+"px,"+-n+"px) scale("+o+")"}:function(e,n,o){t.style.marginLeft=e?-e/o+"px":"",t.style.marginTop=n?-n/o+"px":"",t.style.zoom=o||""}}t.exports=o},function(t,e,n){e=t.exports=n(8)(),e.push([t.i,"._v-container[data-v-ecaca2b0]{-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}._v-container>._v-content[data-v-ecaca2b0]{width:100%;-webkit-transform-origin:left top;-webkit-transform:translateZ(0);-moz-transform-origin:left top;-moz-transform:translateZ(0);-ms-transform-origin:left top;-ms-transform:translateZ(0);-o-transform-origin:left top;-o-transform:translateZ(0);transform-origin:left top;transform:translateZ(0)}._v-container>._v-content>.pull-to-refresh-layer[data-v-ecaca2b0]{width:100%;height:60px;margin-top:-60px;text-align:center;font-size:16px;color:#aaa}._v-container>._v-content>.loading-layer[data-v-ecaca2b0]{width:100%;height:60px;text-align:center;font-size:16px;line-height:60px;color:#aaa;position:relative}._v-container>._v-content>.loading-layer>.no-data-text[data-v-ecaca2b0]{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}._v-container>._v-content>.loading-layer>.no-data-text[data-v-ecaca2b0],._v-container>._v-content>.loading-layer>.spinner-holder[data-v-ecaca2b0]{opacity:0;transition:opacity .15s linear;-webkit-transition:opacity .15s linear}._v-container>._v-content>.loading-layer>.no-data-text.active[data-v-ecaca2b0],._v-container>._v-content>.loading-layer>.spinner-holder.active[data-v-ecaca2b0]{opacity:1}._v-container>._v-content>.loading-layer .spinner-holder[data-v-ecaca2b0],._v-container>._v-content>.pull-to-refresh-layer .spinner-holder[data-v-ecaca2b0]{text-align:center;-webkit-font-smoothing:antialiased}._v-container>._v-content>.loading-layer .spinner-holder .arrow[data-v-ecaca2b0],._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .arrow[data-v-ecaca2b0]{width:20px;height:20px;margin:8px auto 0;-webkit-transform:translateZ(0) rotate(0deg);transform:translateZ(0) rotate(0deg);transition:transform .2s linear}._v-container>._v-content>.loading-layer .spinner-holder .text[data-v-ecaca2b0],._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .text[data-v-ecaca2b0]{display:block;margin:0 auto;font-size:14px;line-height:20px;color:#aaa}._v-container>._v-content>.loading-layer .spinner-holder .spinner[data-v-ecaca2b0],._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .spinner[data-v-ecaca2b0]{margin-top:14px;width:32px;height:32px;fill:#444;stroke:#69717d}._v-container>._v-content>.pull-to-refresh-layer.active .spinner-holder .arrow[data-v-ecaca2b0]{-webkit-transform:translateZ(0) rotate(180deg);transform:translateZ(0) rotate(180deg)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){var o=n(0)(n(2),n(11),null,null);t.exports=o.exports},function(t,e,n){var o=n(0)(null,n(12),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 63.657 63.657"},attrs:{viewBox:"0 0 63.657 63.657","xml:space":"preserve",width:"512px",height:"512px"}},[n("g",[n("g",[n("g",[n("g",[n("polygon",{attrs:{points:"31.891,63.657 0.012,35.835 2.642,32.821 31.886,58.343 61.009,32.824 63.645,35.832",fill:t.fillColor}})])]),t._v(" "),n("g",[n("g",[n("rect",{attrs:{x:"29.827",width:"4",height:"60",fill:t.fillColor}})])])]),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g")]),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"spinner",attrs:{viewBox:"0 0 64 64"}},[n("g",{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(180)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(210)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(240)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(270)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(300)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(330)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(0)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(30)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(60)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(90)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(120)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",repeatCount:"indefinite"}})]),n("line",{attrs:{y1:"17",y2:"29",transform:"translate(32,32) rotate(150)"}},[n("animate",{attrs:{attributeName:"stroke-opacity",dur:"750ms",values:"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",repeatCount:"indefinite"}})])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_v-container",attrs:{id:t.containerId},on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},mousedown:function(e){t.mouseDown(e)},mousemove:function(e){t.mouseMove(e)},mouseup:function(e){t.mouseUp(e)}}},[n("div",{staticClass:"_v-content",attrs:{id:t.contentId}},[t.onRefresh?n("div",{staticClass:"pull-to-refresh-layer",class:{active:1==t.state,"active refreshing":2==t.state}},[n("span",{staticClass:"spinner-holder"},[2!=t.state?n("arrow",{staticClass:"arrow",attrs:{fillColor:t.refreshLayerColor}}):t._e(),t._v(" "),2!=t.state?n("span",{staticClass:"text",style:{color:t.refreshLayerColor},domProps:{textContent:t._s(t.refreshText)}}):t._e(),t._v(" "),2==t.state?n("span",[t._t("refresh-spinner",[n("spinner",{style:{fill:t.refreshLayerColor,stroke:t.refreshLayerColor}})])],2):t._e()],1)]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.showInfiniteLayer?n("div",{staticClass:"loading-layer"},[n("span",{staticClass:"spinner-holder",class:{active:t.showLoading}},[t._t("infinite-spinner",[n("spinner",{style:{fill:t.loadingLayerColor,stroke:t.loadingLayerColor}})])],2),t._v(" "),n("div",{staticClass:"no-data-text",class:{active:!t.showLoading&&2==t.loadingState},style:{color:t.loadingLayerColor},domProps:{textContent:t._s(t.noDataText)}})]):t._e()],2)])},staticRenderFns:[]}},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(15)("1ca3e1c8",o,!0)},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=_[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(r(n.parts[i]));_[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return d;o.parentNode.removeChild(o)}if(m){var r=p++;o=f||(f=i()),e=a.bind(null,o,r,!1),n=a.bind(null,o,r,!0)}else o=i(),e=l.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function a(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function l(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(16),_={},u=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,d=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return o(i),function(e){for(var n=[],r=0;r<i.length;r++){var a=i[r],l=_[a.id];l.refs--,n.push(l)}e?(i=c(t,e),o(i)):i=[];for(var r=0;r<n.length;r++){var l=n[r];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete _[l.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],a=r[0],l=r[1],s=r[2],c=r[3],_={id:t+":"+i,css:l,media:s,sourceMap:c};o[a]?o[a].parts.push(_):n.push(o[a]={id:a,parts:[_]})}return n}}])});
//# sourceMappingURL=vue-scroller.min.js.map

/***/ }),

/***/ "22e9":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("88dd");
var cof = __webpack_require__("94ac");
var MATCH = __webpack_require__("8b37")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "265a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3754").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "2e78":
/***/ (function(module, exports) {

/**
 * Created by 二哲 on 15/12/6.
 */

/*
 * 不带参数指令
 * v-tap=handler
 * or
 * 带参数指令
 * v-tap=handler($index,el,$event)
 *
 * !!!新增!!!
 * 把tapObj对象注册在原生event对象上
 * 	event.tapObj拥有6个值
 * 	pageX,pageY,clientX,clientY,distanceX,distanceY
 * 后面2个分别的手指可能移动的位置(以后可用于拓展手势)
 *
 * */
(function () {
  var vueTap = {};
  var isVue2 = false;
  /**                               公用方法开始                 **/

  function isPc() {
    var uaInfo = navigator.userAgent;
    var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
    var flag = true;

    for (var i = 0; i < agents.length; i++) {
      if (uaInfo.indexOf(agents[i]) > 0) {
        flag = false;
        break;
      }
    }

    return flag;
  }

  function isTap(self) {
    if (isVue2 ? self.disabled : self.el.disabled) {
      return false;
    }

    var tapObj = self.tapObj;
    return self.time < 300 && Math.abs(tapObj.distanceX) < 10 && Math.abs(tapObj.distanceY) < 10;
  }

  function touchstart(e, self) {
    var touches = e.touches[0];
    var tapObj = self.tapObj;
    tapObj.pageX = touches.pageX;
    tapObj.pageY = touches.pageY;
    tapObj.clientX = touches.clientX;
    tapObj.clientY = touches.clientY;
    self.time = +new Date();
  }

  function touchend(e, self) {
    var touches = e.changedTouches[0];
    var tapObj = self.tapObj;
    self.time = +new Date() - self.time;
    tapObj.distanceX = tapObj.pageX - touches.pageX;
    tapObj.distanceY = tapObj.pageY - touches.pageY;
    if (!isTap(self)) return;
    self.handler(e);
  }
  /**                               公用方法结束                 * */


  var vue1 = {
    isFn: true,
    acceptStatement: true,
    update: function update(fn) {
      var self = this;
      self.tapObj = {};

      if (typeof fn !== 'function' && self.el.tagName.toLocaleLowerCase() !== 'a') {
        return console.error('The param of directive "v-tap" must be a function!');
      }

      self.handler = function (e) {
        //This directive.handler
        e.tapObj = self.tapObj;

        if (self.el.href && !self.modifiers.prevent) {
          return window.location = self.el.href;
        }

        var tagName = e.target.tagName.toLocaleLowerCase();

        if (tagName === 'input' || tagName === 'textarea') {
          return e.target.focus();
        }

        fn.call(self, e);
      };

      if (isPc()) {
        self.el.addEventListener('click', function (e) {
          if (self.el.href && !self.modifiers.prevent) {
            return window.location = self.el.href;
          }

          self.handler.call(self, e);
        }, false);
      } else {
        self.el.addEventListener('touchstart', function (e) {
          if (self.modifiers.stop) e.stopPropagation();
          if (self.modifiers.prevent) e.preventDefault();
          touchstart(e, self);
        }, false);
        self.el.addEventListener('touchend', function (e) {
          try {
            Object.defineProperty(e, 'currentTarget', {
              // 重写currentTarget对象 与jq相同
              value: self.el,
              writable: true,
              enumerable: true,
              configurable: true
            });
          } catch (e) {
            // ios 7下对 e.currentTarget 用defineProperty会报错。
            // 报“TypeError：Attempting to configurable attribute of unconfigurable property”错误
            // 在catch里重写
            console.error(e.message);
            e.currentTarget = self.el;
          }

          e.preventDefault();
          return touchend(e, self);
        }, false);
      }
    }
  };
  var vue2 = {
    bind: function bind(el, binding) {
      el.tapObj = {};

      el.handler = function (e, isPc) {
        //This directive.handler
        var value = binding.value;

        if (!value && el.href && !binding.modifiers.prevent) {
          return window.location = el.href;
        }

        value.event = e;
        var tagName = value.event.target.tagName.toLocaleLowerCase();
        !isPc ? value.tapObj = el.tapObj : null;

        if (tagName === 'input' || tagName === 'textarea') {
          return value.event.target.focus();
        }

        value.methods.call(this, value);
      };

      if (isPc()) {
        el.addEventListener('click', function (e) {
          if (binding.modifiers.stop) e.stopPropagation();
          if (binding.modifiers.prevent) e.preventDefault();
          el.handler(e, true);
        }, false);
      } else {
        el.addEventListener('touchstart', function (e) {
          if (binding.modifiers.stop) e.stopPropagation();
          if (binding.modifiers.prevent) e.preventDefault();
          touchstart(e, el);
        }, false);
        el.addEventListener('touchend', function (e) {
          try {
            Object.defineProperty(e, 'currentTarget', {
              // 重写currentTarget对象 与jq相同
              value: el,
              writable: true,
              enumerable: true,
              configurable: true
            });
          } catch (e) {
            // ios 7下对 e.currentTarget 用defineProperty会报错。
            // 报“TypeError：Attempting to configurable attribute of unconfigurable property”错误
            // 在catch里重写
            console.error(e.message);
            e.currentTarget = el;
          }

          e.preventDefault();
          return touchend(e, el);
        }, false);
      }
    },
    componentUpdated: function componentUpdated(el, binding) {
      el.tapObj = {};

      el.handler = function (e, isPc) {
        //This directive.handler
        var value = binding.value;

        if (!value && el.href && !binding.modifiers.prevent) {
          return window.location = el.href;
        }

        value.event = e;
        !isPc ? value.tapObj = el.tapObj : null;
        value.methods.call(this, value);
      };
    },
    unbind: function unbind(el) {
      // 卸载，别说了都是泪
      el.handler = function () {};
    }
  };

  vueTap.install = function (Vue) {
    if (Vue.version.substr(0, 1) > 1) {
      isVue2 = true;
    }

    Vue.directive('tap', isVue2 ? vue2 : vue1);
  };

  vueTap.version = '3.0.3'; // if (typeof exports == "object") {
  //   module.exports = vueTap;
  // } else if (typeof define == "function" && define.amd) {
  //   define([], function () {
  //     return vueTap
  //   })
  // } else if (window.Vue) {
  //   window.vueTap = vueTap;
  //   Vue.use(vueTap);
  // }

  module.exports = vueTap;
})();

/***/ }),

/***/ "3754":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "3a68":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6462");
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3bbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_6e706e05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae42");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_6e706e05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_6e706e05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_6e706e05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4619":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("811e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4819":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("94ac");
var TAG = __webpack_require__("8b37")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "5325":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("88dd");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "540f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("648a");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "568a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("dad2") && !__webpack_require__("b6f1")(function () {
  return Object.defineProperty(__webpack_require__("e3e0")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "5b34":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var isObject = __webpack_require__("88dd");
var newPromiseCapability = __webpack_require__("540f");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "5b55":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("8b37")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5fe5":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "644a":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("8b37")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("743d")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "6462":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("94ac");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "648a":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "6594":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("ddf7").f;
var has = __webpack_require__("03b3");
var TAG = __webpack_require__("8b37")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "6e26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ca2b");
var global = __webpack_require__("3754");
var ctx = __webpack_require__("01f5");
var classof = __webpack_require__("4819");
var $export = __webpack_require__("b2f5");
var isObject = __webpack_require__("88dd");
var aFunction = __webpack_require__("648a");
var anInstance = __webpack_require__("d74e");
var forOf = __webpack_require__("00d5");
var speciesConstructor = __webpack_require__("0d5f");
var task = __webpack_require__("d1f6").set;
var microtask = __webpack_require__("9d86")();
var newPromiseCapabilityModule = __webpack_require__("540f");
var perform = __webpack_require__("e588");
var userAgent = __webpack_require__("82cd");
var promiseResolve = __webpack_require__("5b34");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("8b37")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("f216")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("6594")($Promise, PROMISE);
__webpack_require__("c650")(PROMISE);
Wrapper = __webpack_require__("a4cc")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5b55")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "7364":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("dad2") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "743d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var createDesc = __webpack_require__("7dea");
module.exports = __webpack_require__("dad2") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "7d84":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_24712a76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a862");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_24712a76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_24712a76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_24712a76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7dea":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "811e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "82cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "8812":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "88dd":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8b37":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("adbd")('wks');
var uid = __webpack_require__("9d01");
var Symbol = __webpack_require__("3754").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "8bbc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("a013");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "91a1":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("22e9");
var defined = __webpack_require__("f01a");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "94ac":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "984f":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("8b37")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "9d01":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "9d86":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var macrotask = __webpack_require__("d1f6").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("94ac")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "9eee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9f58":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("3a68");
var toLength = __webpack_require__("b146");
var toAbsoluteIndex = __webpack_require__("5fe5");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "a013":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "a4cc":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a862":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "adae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "adbd":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a4cc");
var global = __webpack_require__("3754");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("ca2b") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "ae42":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b146":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("c481");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b2f5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var core = __webpack_require__("a4cc");
var hide = __webpack_require__("743d");
var redefine = __webpack_require__("e5ef");
var ctx = __webpack_require__("01f5");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "b6f1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "c481":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c497":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.8.4@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6e26");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7364");

// EXTERNAL MODULE: ./src/assets/css/public.scss
var css_public = __webpack_require__("9eee");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/_vue-scroller@2.2.4@vue-scroller/dist/vue-scroller.min.js
var vue_scroller_min = __webpack_require__("1d09");
var vue_scroller_min_default = /*#__PURE__*/__webpack_require__.n(vue_scroller_min);

// CONCATENATED MODULE: ./src/packages/resetInput.js

var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.directive('resetInput', {
  inserted: function inserted(el) {
    if (isAndroid) {
      return;
    }

    el.addEventListener('blur', function () {
      var input = document.getElementById('reset-input');

      if (!input) {
        input = document.createElement('INPUT');
        input.type = 'text';
        input.style.height = '0px';
        input.style.width = '0px';
        input.style.position = 'absolute';
        input.id = 'reset-input';
        document.body.prepend(input);
      }

      input.focus();
      input.blur();
    });
  }
});
// CONCATENATED MODULE: ./src/packages/utils.js


var createElement = function createElement(marker, tag) {
  var el = document.createElement(tag || 'div');
  el.setAttribute(marker, '');
  document.body.appendChild(el);
};

var removeElement = function removeElement(marker) {
  var el = document.querySelector(marker) || document.querySelector("[".concat(marker, "]"));
  if (el) document.body.removeChild(el);
};

var timeout = function timeout() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, duration);
  });
};


/* harmony default export */ var utils = ({
  createElement: createElement,
  removeElement: removeElement,
  timeout: timeout
});
// EXTERNAL MODULE: ./src/packages/v-tap/v-tap.js
var v_tap = __webpack_require__("2e78");
var v_tap_default = /*#__PURE__*/__webpack_require__.n(v_tap);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-button/src/lbr-button.vue?vue&type=template&id=d4181e76&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"button",on:{"click":_vm.click}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=template&id=d4181e76&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-button/src/lbr-button.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var lbr_buttonvue_type_script_lang_js_ = ({
  name: 'lbr-button',
  data: function data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "按钮"
    }
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_buttonvue_type_script_lang_js_ = (lbr_buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=style&index=0&id=d4181e76&lang=scss&scoped=true&
var lbr_buttonvue_type_style_index_0_id_d4181e76_lang_scss_scoped_true_ = __webpack_require__("ed2d");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/packages/lbr-button/src/lbr-button.vue






/* normalize component */

var component = normalizeComponent(
  src_lbr_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d4181e76",
  null
  
)

/* harmony default export */ var lbr_button = (component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-button/index.js

// 导入组件，组件必须声明 name
 // 为组件提供 install 安装方法，供按需引入

lbr_button.install = function (Vue) {
  Vue.component(lbr_button.name, lbr_button);
}; // 默认导出组件


/* harmony default export */ var packages_lbr_button = (lbr_button);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=template&id=5368cf36&
var lbr_srcollvue_type_template_id_5368cf36_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isPaging)?_c('scroller',{ref:"my_scroller",attrs:{"on-refresh":_vm.refresh,"on-infinite":_vm.infinite}},[_vm._t("default")],2):_c('scroller',{ref:"my_scroller",attrs:{"on-refresh":_vm.refresh}},[_vm._t("default")],2)],1)}
var lbr_srcollvue_type_template_id_5368cf36_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=template&id=5368cf36&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lbr_srcollvue_type_script_lang_js_ = ({
  name: "lbr-srcoll",
  data: function data() {
    return {
      page: 1
    };
  },
  props: {
    //是否分页
    isPaging: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      if (this.isPaging) {
        this.$refs.my_scroller.finishInfinite(true); // 禁止上拉加载更多
      }
    },
    refresh: function refresh() {
      var _this = this;

      this.$emit("refresh", function () {
        _this.$refs.my_scroller.finishPullToRefresh();
      });
    },

    /**
     * 加载更多
     */
    infinite: function infinite() {
      var _this2 = this;

      this.$emit("loadMove", function () {
        _this2.$refs.my_scroller.finishInfinite(true); // 禁止上拉加载更多

      });
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_srcollvue_type_script_lang_js_ = (lbr_srcollvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=style&index=0&lang=scss&
var lbr_srcollvue_type_style_index_0_lang_scss_ = __webpack_require__("4619");

// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/lbr-srcoll.vue






/* normalize component */

var lbr_srcoll_component = normalizeComponent(
  src_lbr_srcollvue_type_script_lang_js_,
  lbr_srcollvue_type_template_id_5368cf36_render,
  lbr_srcollvue_type_template_id_5368cf36_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lbr_srcoll = (lbr_srcoll_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-load-moves/index.js

// 导入组件，组件必须声明 name
 // 为组件提供 install 安装方法，供按需引入

lbr_srcoll.install = function (Vue) {
  Vue.component(lbr_srcoll.name, lbr_srcoll);
}; // 默认导出组件


/* harmony default export */ var lbr_load_moves = (lbr_srcoll);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-message/src/lbr-message.vue?vue&type=template&id=6e706e05&scoped=true&
var lbr_messagevue_type_template_id_6e706e05_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"message",class:_vm.type},[_c('i',{staticClass:"icon"}),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.text))])])])}
var lbr_messagevue_type_template_id_6e706e05_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-message/src/lbr-message.vue?vue&type=template&id=6e706e05&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("f301");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("df99");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-message/src/lbr-message.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
/* harmony default export */ var lbr_messagevue_type_script_lang_js_ = ({
  name: "lbr-message",
  props: {
    type: {
      type: String,
      default: "info",
      validator: function validator(val) {
        return ["info", "success", "warning", "error"].includes(val);
      } //['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件

    },
    text: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-message/src/lbr-message.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_messagevue_type_script_lang_js_ = (lbr_messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-message/src/lbr-message.vue?vue&type=style&index=0&id=6e706e05&scoped=true&lang=scss&
var lbr_messagevue_type_style_index_0_id_6e706e05_scoped_true_lang_scss_ = __webpack_require__("3bbf");

// CONCATENATED MODULE: ./src/packages/lbr-message/src/lbr-message.vue






/* normalize component */

var lbr_message_component = normalizeComponent(
  src_lbr_messagevue_type_script_lang_js_,
  lbr_messagevue_type_template_id_6e706e05_scoped_true_render,
  lbr_messagevue_type_template_id_6e706e05_scoped_true_staticRenderFns,
  false,
  null,
  "6e706e05",
  null
  
)

/* harmony default export */ var lbr_message = (lbr_message_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-message/index.js



lbr_message.install = function (Vue) {
  Vue.component(lbr_message.name, lbr_message);
};

/* harmony default export */ var packages_lbr_message = (lbr_message);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=template&id=24712a76&scoped=true&
var lbr_loadingvue_type_template_id_24712a76_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading-container",class:{'visible': _vm.state == 1, 'visible active': _vm.state == 2},attrs:{"von-loading":""}},[(_vm.showSpinner)?_c('div',{staticClass:"loading"},[_c('div',[_c('div',{staticClass:"spinner spinner-ios"},[_c('svg',{attrs:{"viewBox":"0 0 64 64"}},[_c('g',{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(180)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(210)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(240)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(270)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(300)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(330)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(0)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(30)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(60)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(90)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(120)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(150)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})])])])]),(_vm.tips)?_c('div',{staticClass:"tips",domProps:{"innerHTML":_vm._s(_vm.tips)}}):_vm._e()])]):_vm._e()])}
var lbr_loadingvue_type_template_id_24712a76_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=template&id=24712a76&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var lbr_loadingvue_type_script_lang_js_removeElement = function removeElement(marker) {
  var el = document.querySelector(marker) || document.querySelector("[".concat(marker, "]"));
  if (el) document.body.removeChild(el);
};

function preventDefault(e) {
  e.preventDefault();
}

/* harmony default export */ var lbr_loadingvue_type_script_lang_js_ = ({
  name: "lbrLoading",
  data: function data() {
    return {
      state: 0,
      tips: "加载中",
      showSpinner: true
    };
  },
  destroyed: function destroyed() {
    lbr_loadingvue_type_script_lang_js_removeElement("von-loading");
  },
  methods: {
    show: function show(options) {
      var _this = this;

      this.tips = options.tips;
      this.showSpinner = !!options.showSpinner;
      this.state = 1;
      setTimeout(function () {
        _this.state = 2;
      });
      document.body.addEventListener("touchmove", preventDefault);
    },
    hide: function hide() {
      var _this2 = this;

      this.state = 1;
      setTimeout(function () {
        _this2.state = 0;
        setTimeout(function () {
          _this2.$destroy();
        });
      }, 300);
      document.body.removeEventListener("touchmove", preventDefault);
    },
    update: function update(options) {
      this.tips = options.tips;
      this.showSpinner = !!options.showSpinner;
    },
    getState: function getState() {
      return this.state;
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_loadingvue_type_script_lang_js_ = (lbr_loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=style&index=0&id=24712a76&lang=scss&scoped=true&
var lbr_loadingvue_type_style_index_0_id_24712a76_lang_scss_scoped_true_ = __webpack_require__("7d84");

// CONCATENATED MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue






/* normalize component */

var lbr_loading_component = normalizeComponent(
  src_lbr_loadingvue_type_script_lang_js_,
  lbr_loadingvue_type_template_id_24712a76_scoped_true_render,
  lbr_loadingvue_type_template_id_24712a76_scoped_true_staticRenderFns,
  false,
  null,
  "24712a76",
  null
  
)

/* harmony default export */ var lbr_loading = (lbr_loading_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-loading/index.js

// 导入组件，组件必须声明 name


lbr_loading.install = function (Vue) {
  Vue.component(lbr_loading.name, lbr_loading);
};

/* harmony default export */ var packages_lbr_loading = (lbr_loading);
// CONCATENATED MODULE: ./src/packages/index.js





external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_scroller_min_default.a);






 // import lbrDatepicker from './lbr-datepicker'
// 存储组件列表

var components = [packages_lbr_button, lbr_load_moves, packages_lbr_message, packages_lbr_loading];

var install = function install(Vue) {
  if (install.installed) return;
  components.map(function (component) {
    return Vue.component(component.name, component);
  });
  messageOffer(Vue);
  loadingOffer(Vue);
}; // 消息提示


function messageOffer(Vue) {
  function msg(param, callBack) {
    var msg;
    var duration = param.duration || 3000;

    if (typeof param.title === 'string') {
      msg = param.title;
    } else if (param.title instanceof Object) {
      msg = param.title || '';

      if (param.duration) {
        duration = param.duration;
      }
    }

    var VueMessage = Vue.extend({
      render: function render(h) {
        var props = {
          text: msg,
          show: this.show
        };
        return h('lbr-message', {
          props: props
        });
      },
      data: function data() {
        return {
          show: false
        };
      }
    });
    var newMessage = new VueMessage();
    var vm = newMessage.$mount();
    var el = vm.$el;
    document.body.appendChild(el); // 把生成的提示的dom插入body中

    vm.show = true;
    var t1 = setTimeout(function () {
      clearTimeout(t1);
      vm.show = false; //隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从body中移除dom

      var t2 = setTimeout(function () {
        clearTimeout(t2);
        document.body.removeChild(el); //从body中移除dom

        newMessage.$destroy();
        vm = null; // 设置为null，好让js垃圾回收算法回收，释放内存

        callBack && typeof callBack === 'function' && callBack(); // 如果有回调函数就执行，没有就不执行，用&&操作符，
        // 只有&&左边 的代码为true才执行&&右边的代码，避免用面条代码：
        // if(true){
        //   ... 
        //   if(true){
        //   ...
        //   }
        // }
      }, 300);
    }, duration);
  } // 挂载到vue原型上，暴露四个方法


  Vue.prototype.$lbrMessage = function (param) {
    return new Promise(function (succ) {
      if (!param.title) return;
      msg(param, function () {
        succ();
      });
    });
  };
}

function loadingOffer(Vue) {
  function VonicLoading() {
    var vm = undefined;

    function showToast(tips, duration) {
      if (vm && vm.getState() > 0) {
        vm.update({
          tips: tips
        });
        setTimeout(function () {
          vm.hide();
        }, duration || 1500);
        return;
      }

      createElement('von-loading');
      vm = new Vue(packages_lbr_loading).$mount('[von-loading]');
      vm.show({
        tips: tips
      });
      return timeout(duration || 1500).then(function () {
        return vm.hide();
      });
    }

    function showLoading() {
      var tips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

      if (vm && vm.getState() > 0) {
        vm.update({
          tips: tips,
          showSpinner: true
        });
        return;
      }

      createElement('von-loading');
      vm = new Vue(packages_lbr_loading).$mount('[von-loading]');
      vm.show({
        tips: tips,
        showSpinner: true
      });
    }

    function hide() {
      if (vm) vm.hide();
    }

    function update(options) {
      vm.update(options);
    }

    return {
      showToast: showToast,
      showLoading: showLoading,
      hide: hide,
      update: update
    };
  }

  var loading = new VonicLoading();
  window.$lbrLoading = {
    show: loading.showLoading,
    hide: loading.hide
  };
  Vue.prototype.$lbrLoading = window.$lbrLoading;
} // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ var src_packages = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install,
  // 以下是具体的组件列表
  LbrButton: packages_lbr_button,
  LbrSrcoll: lbr_load_moves
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.8.4@@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport vTap */__webpack_require__.d(__webpack_exports__, "vTap", function() { return v_tap_default.a; });
/* concated harmony reexport LbrButton */__webpack_require__.d(__webpack_exports__, "LbrButton", function() { return packages_lbr_button; });
/* concated harmony reexport LbrSrcoll */__webpack_require__.d(__webpack_exports__, "LbrSrcoll", function() { return lbr_load_moves; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_packages);



/***/ }),

/***/ "c650":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var dP = __webpack_require__("ddf7");
var DESCRIPTORS = __webpack_require__("dad2");
var SPECIES = __webpack_require__("8b37")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "c847":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("14fc");
var ITERATOR = __webpack_require__("8b37")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "ca2b":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "d1f6":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("01f5");
var invoke = __webpack_require__("8812");
var html = __webpack_require__("265a");
var cel = __webpack_require__("e3e0");
var global = __webpack_require__("3754");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("94ac")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "d74e":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "dad2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("b6f1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "daf2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("adbd")('native-function-to-string', Function.toString);


/***/ }),

/***/ "ddf7":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var toPrimitive = __webpack_require__("5325");
var dP = Object.defineProperty;

exports.f = __webpack_require__("dad2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "df99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("b2f5");
var context = __webpack_require__("91a1");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("984f")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "e3e0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var document = __webpack_require__("3754").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "e588":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "e5ef":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var has = __webpack_require__("03b3");
var SRC = __webpack_require__("9d01")('src');
var $toString = __webpack_require__("daf2");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("a4cc").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "ed2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_d4181e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("adae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_d4181e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_d4181e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_d4181e76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f01a":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "f216":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("e5ef");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "f301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("b2f5");
var $includes = __webpack_require__("9f58")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("644a")('includes');


/***/ })

/******/ });
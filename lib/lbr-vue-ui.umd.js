(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lbr-vue-ui"] = factory(require("vue"));
	else
		root["lbr-vue-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "112a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00a5":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("42cc");
var classof = __webpack_require__("3d7c");
var wellKnownSymbol = __webpack_require__("1f17");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "0119":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("0296");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "0288":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "0296":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "029f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var userAgent = __webpack_require__("6406");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "0bd5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var exec = __webpack_require__("5133");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "0c09":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "0e69":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0ef8":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("2bc8");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "0fca":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var createNonEnumerableProperty = __webpack_require__("d53e");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "vTap", function() { return /* reexport */ v_tap_default.a; });
__webpack_require__.d(__webpack_exports__, "LbrMessage", function() { return /* reexport */ packages_lbr_message; });
__webpack_require__.d(__webpack_exports__, "LbrLoading", function() { return /* reexport */ packages_lbr_loading; });
__webpack_require__.d(__webpack_exports__, "LbrButton", function() { return /* reexport */ packages_lbr_button; });
__webpack_require__.d(__webpack_exports__, "LbrSrcoll", function() { return /* reexport */ lbr_srcoll; });
__webpack_require__.d(__webpack_exports__, "lbrDatepicker", function() { return /* reexport */ lbr_datepicker; });
__webpack_require__.d(__webpack_exports__, "LbrSwipe", function() { return /* reexport */ swipe; });
__webpack_require__.d(__webpack_exports__, "LbrSwipeItem", function() { return /* reexport */ swipe_item; });
__webpack_require__.d(__webpack_exports__, "LbrForm", function() { return /* reexport */ packages_lbr_form; });
__webpack_require__.d(__webpack_exports__, "LbrFormItem", function() { return /* reexport */ packages_lbr_form_item; });
__webpack_require__.d(__webpack_exports__, "LbrInput", function() { return /* reexport */ packages_lbr_input; });

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
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

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("6540");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("1d7a");

// EXTERNAL MODULE: ./src/assets/css/public.scss
var css_public = __webpack_require__("9eee");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("a543");

// CONCATENATED MODULE: ./src/packages/resetInput/index.js

var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端

var resetInput_install = function install(Vue) {
  Vue.directive('resetInput', {
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
};

/* harmony default export */ var resetInput = ({
  install: resetInput_install
});
// EXTERNAL MODULE: ./src/packages/v-tap/v-tap.js
var v_tap = __webpack_require__("2e78");
var v_tap_default = /*#__PURE__*/__webpack_require__.n(v_tap);

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-button/src/lbr-button.vue?vue&type=template&id=80e60462&scoped=true&
var lbr_buttonvue_type_template_id_80e60462_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:{'lbr-button':true,'lbr-max-button':_vm.max},style:(("border-radius: " + _vm.radius + "px;")),attrs:{"disabled":_vm.disabled},on:{"click":_vm.click}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=template&id=80e60462&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("d0bf");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-button/src/lbr-button.vue?vue&type=script&lang=js&

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
/* harmony default export */ var lbr_buttonvue_type_script_lang_js_ = ({
  name: "lbr-button",
  data: function data() {
    return {
      color: "red"
    };
  },
  props: {
    title: {
      type: String,
      default: "按钮"
    },
    max: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 0
    }
  },
  methods: {
    click: function click() {
      this.$emit("click");
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_buttonvue_type_script_lang_js_ = (lbr_buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=style&index=0&id=80e60462&lang=scss&scoped=true&
var lbr_buttonvue_type_style_index_0_id_80e60462_lang_scss_scoped_true_ = __webpack_require__("3592");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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
  lbr_buttonvue_type_template_id_80e60462_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "80e60462",
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=template&id=5e0e806d&
var lbr_srcollvue_type_template_id_5e0e806d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isPaging)?_c('scroller',{ref:"my_scroller",attrs:{"refreshText":_vm.refreshText,"noDataText":_vm.noDataText,"on-refresh":_vm.refresh,"on-infinite":_vm.loadMove}},[_vm._t("default")],2):_c('scroller',{ref:"my_scroller",attrs:{"on-refresh":_vm.refresh,"refreshText":_vm.refreshText,"noDataText":_vm.noDataText}},[_vm._t("default")],2)],1)}
var lbr_srcollvue_type_template_id_5e0e806d_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=template&id=5e0e806d&

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=template&id=50ca95e2&scoped=true&
var Scrollervue_type_template_id_50ca95e2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_v-container",attrs:{"id":_vm.containerId},on:{"touchstart":function($event){return _vm.touchStart($event)},"touchmove":function($event){return _vm.touchMove($event)},"touchend":function($event){return _vm.touchEnd($event)},"mousedown":function($event){return _vm.mouseDown($event)},"mousemove":function($event){return _vm.mouseMove($event)},"mouseup":function($event){return _vm.mouseUp($event)}}},[_c('div',{staticClass:"_v-content",attrs:{"id":_vm.contentId}},[(_vm.onRefresh)?_c('div',{staticClass:"pull-to-refresh-layer",class:{'active': _vm.state == 1, 'active refreshing': _vm.state == 2}},[_c('span',{staticClass:"spinner-holder"},[(_vm.state != 2)?_c('arrow',{staticClass:"arrow",attrs:{"fillColor":_vm.refreshLayerColor}}):_vm._e(),(_vm.state != 2)?_c('span',{staticClass:"text",style:({color: _vm.refreshLayerColor}),domProps:{"textContent":_vm._s(_vm.refreshText)}}):_vm._e(),(_vm.state == 2)?_c('span',[_vm._t("refresh-spinner",[_c('spinner',{style:({fill: _vm.refreshLayerColor, stroke: _vm.refreshLayerColor})})])],2):_vm._e()],1)]):_vm._e(),_vm._t("default"),(_vm.showInfiniteLayer)?_c('div',{staticClass:"loading-layer"},[_c('span',{staticClass:"spinner-holder",class:{'active': _vm.showLoading}},[_vm._t("infinite-spinner",[_c('spinner',{style:({fill: _vm.loadingLayerColor, stroke: _vm.loadingLayerColor})})])],2),_c('div',{staticClass:"no-data-text",class:{'active': !_vm.showLoading && _vm.loadingState == 2},style:({color: _vm.loadingLayerColor}),domProps:{"textContent":_vm._s(_vm.noDataText)}})]):_vm._e()],2)])}
var Scrollervue_type_template_id_50ca95e2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=template&id=50ca95e2&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("402f");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("0bd5");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("836b");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("5a4c");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("989e");

// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/module/core.js




var NOOP = function NOOP() {};

var core = function Animate(global) {
  var time = Date.now || function () {
    return +new Date();
  };

  var desiredFrames = 60;
  var millisecondsPerSecond = 1000;
  var running = {};
  var counter = 1;
  var core = {
    effect: {}
  };
  core.effect.Animate = {
    /**
     * A requestAnimationFrame wrapper / polyfill.
     *
     * @param callback {Function} The callback to be invoked before the next repaint.
     * @param root {HTMLElement} The root element for the repaint
     */
    requestAnimationFrame: function () {
      // Check for request animation Frame support
      var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;
      var isNative = !!requestFrame;

      if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
        isNative = false;
      }

      if (isNative) {
        return function (callback, root) {
          requestFrame(callback, root);
        };
      }

      var TARGET_FPS = 60;
      var requests = {}; // eslint-disable-next-line no-unused-vars

      var requestCount = 0;
      var rafHandle = 1;
      var intervalHandle = null;
      var lastActive = +new Date(); // eslint-disable-next-line no-unused-vars

      return function (callback, root) {
        var callbackHandle = rafHandle++; // Store callback

        requests[callbackHandle] = callback;
        requestCount++; // Create timeout at first request

        if (intervalHandle === null) {
          intervalHandle = setInterval(function () {
            var time = +new Date();
            var currentRequests = requests; // Reset data structure before executing callbacks

            requests = {};
            requestCount = 0;

            for (var key in currentRequests) {
              if (currentRequests.hasOwnProperty(key)) {
                currentRequests[key](time);
                lastActive = time;
              }
            } // Disable the timeout when nothing happens for a certain
            // period of time


            if (time - lastActive > 2500) {
              clearInterval(intervalHandle);
              intervalHandle = null;
            }
          }, 1000 / TARGET_FPS);
        }

        return callbackHandle;
      };
    }(),

    /**
     * Stops the given animation.
     *
     * @param id {Integer} Unique animation ID
     * @return {Boolean} Whether the animation was stopped (aka, was running before)
     */
    stop: function stop(id) {
      var cleared = running[id] != null;

      if (cleared) {
        running[id] = null;
      }

      return cleared;
    },

    /**
     * Whether the given animation is still running.
     *
     * @param id {Integer} Unique animation ID
     * @return {Boolean} Whether the animation is still running
     */
    isRunning: function isRunning(id) {
      return running[id] != null;
    },

    /**
     * Start the animation.
     *
     * @param stepCallback {Function} Pointer to function which is executed on every step.
     *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
     * @param verifyCallback {Function} Executed before every animation step.
     *   Signature of the method should be `function() { return continueWithAnimation; }`
     * @param completedCallback {Function}
     *   Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
     * @param duration {Integer} Milliseconds to run the animation
     * @param easingMethod {Function} Pointer to easing function
     *   Signature of the method should be `function(percent) { return modifiedValue; }`
     * @param root {Element ? document.body} Render root, when available. Used for internal
     *   usage of requestAnimationFrame.
     * @return {Integer} Identifier of animation. Can be used to stop it any time.
     */
    start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {
      var start = time();
      var lastFrame = start;
      var percent = 0;
      var dropCounter = 0;
      var id = counter++;

      if (!root) {
        root = document.body;
      } // Compacting running db automatically every few new animations


      if (id % 20 === 0) {
        var newRunning = {};

        for (var usedId in running) {
          newRunning[usedId] = true;
        }

        running = newRunning;
      } // This is the internal step method which is called every few milliseconds


      var step = function step(virtual) {
        // Normalize virtual value
        var render = virtual !== true; // Get current time

        var now = time(); // Verification is executed before next animation step

        if (!running[id] || verifyCallback && !verifyCallback(id)) {
          running[id] = null;
          completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
          return;
        } // For the current rendering to apply let's update omitted steps in memory.
        // This is important to bring internal state variables up-to-date with progress in time.


        if (render) {
          var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;

          for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
            step(true);
            dropCounter++;
          }
        } // Compute percent value


        if (duration) {
          percent = (now - start) / duration;

          if (percent > 1) {
            percent = 1;
          }
        } // Execute step callback, then...


        var value = easingMethod ? easingMethod(percent) : percent;

        if ((stepCallback(value, now, render) === false || percent === 1) && render) {
          running[id] = null;
          completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
        } else if (render) {
          lastFrame = now;
          core.effect.Animate.requestAnimationFrame(step, root);
        }
      }; // Mark as running


      running[id] = true; // Init first step

      core.effect.Animate.requestAnimationFrame(step, root); // Return unique animation ID

      return id;
    }
  };
  return core;
}(window);
/**
 * A pure logic 'component' for 'virtual' scrolling/zooming.
 */


var Scroller = function Scroller(callback, options) {
  this.__callback = callback; // core = animate;

  this.options = {
    /** Enable scrolling on x-axis */
    scrollingX: true,

    /** Enable scrolling on y-axis */
    scrollingY: true,

    /** Enable animations for deceleration, snap back, zooming and scrolling */
    animating: true,

    /** duration for animations triggered by scrollTo/zoomTo */
    animationDuration: 250,

    /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
    bouncing: true,

    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true,

    /** Enable pagination mode (switching between full page content panes) */
    paging: false,

    /** Enable snapping of content to a configured pixel grid */
    snapping: false,

    /** Enable zooming of content via API, fingers and mouse wheel */
    zooming: false,

    /** Minimum zoom level */
    minZoom: 0.5,

    /** Maximum zoom level */
    maxZoom: 3,

    /** Multiply or decrease scrolling speed **/
    speedMultiplier: 1,

    /** Callback that is fired on the later of touch end or deceleration end,
      provided that another scrolling action has not begun. Used to know
      when to fade out a scrollbar. */
    scrollingComplete: NOOP,

    /** This configures the amount of change applied to deceleration when reaching boundaries  **/
    penetrationDeceleration: 0.03,

    /** This configures the amount of change applied to acceleration when reaching boundaries  **/
    penetrationAcceleration: 0.08
  };

  for (var key in options) {
    this.options[key] = options[key];
  }
}; // Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.

/**
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
**/


var easeOutCubic = function easeOutCubic(pos) {
  return Math.pow(pos - 1, 3) + 1;
};
/**
 * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)
**/


var easeInOutCubic = function easeInOutCubic(pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3);
  }

  return 0.5 * (Math.pow(pos - 2, 3) + 2);
};

var members = {
  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: STATUS
  ---------------------------------------------------------------------------
  */

  /** {Boolean} Whether only a single finger is used in touch handling */
  __isSingleTouch: false,

  /** {Boolean} Whether a touch event sequence is in progress */
  __isTracking: false,

  /** {Boolean} Whether a deceleration animation went to completion. */
  __didDecelerationComplete: false,

  /**
   * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when
   * a gesturestart event happens. This has higher priority than dragging.
   */
  __isGesturing: false,

  /**
   * {Boolean} Whether the user has moved by such a distance that we have enabled
   * dragging mode. Hint: It's only enabled after some pixels of movement to
   * not interrupt with clicks etc.
   */
  __isDragging: false,

  /**
   * {Boolean} Not touching and dragging anymore, and smoothly animating the
   * touch sequence using deceleration.
   */
  __isDecelerating: false,

  /**
   * {Boolean} Smoothly animating the currently configured change
   */
  __isAnimating: false,

  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: DIMENSIONS
  ---------------------------------------------------------------------------
  */

  /** {Integer} Available outer left position (from document perspective) */
  __clientLeft: 0,

  /** {Integer} Available outer top position (from document perspective) */
  __clientTop: 0,

  /** {Integer} Available outer width */
  __clientWidth: 0,

  /** {Integer} Available outer height */
  __clientHeight: 0,

  /** {Integer} Outer width of content */
  __contentWidth: 0,

  /** {Integer} Outer height of content */
  __contentHeight: 0,

  /** {Integer} Snapping width for content */
  __snapWidth: 100,

  /** {Integer} Snapping height for content */
  __snapHeight: 100,

  /** {Integer} Height to assign to refresh area */
  __refreshHeight: null,

  /** {Boolean} Whether the refresh process is enabled when the event is released now */
  __refreshActive: false,

  /** {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release */
  __refreshActivate: null,

  /** {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled */
  __refreshDeactivate: null,

  /** {Function} Callback to execute to start the actual refresh. Call {@link #refreshFinish} when done */
  __refreshStart: null,

  /** {Number} Zoom level */
  __zoomLevel: 1,

  /** {Number} Scroll position on x-axis */
  __scrollLeft: 0,

  /** {Number} Scroll position on y-axis */
  __scrollTop: 0,

  /** {Integer} Maximum allowed scroll position on x-axis */
  __maxScrollLeft: 0,

  /** {Integer} Maximum allowed scroll position on y-axis */
  __maxScrollTop: 0,

  /* {Number} Scheduled left position (final position when animating) */
  __scheduledLeft: 0,

  /* {Number} Scheduled top position (final position when animating) */
  __scheduledTop: 0,

  /* {Number} Scheduled zoom level (final scale when animating) */
  __scheduledZoom: 0,

  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: LAST POSITIONS
  ---------------------------------------------------------------------------
  */

  /** {Number} Left position of finger at start */
  __lastTouchLeft: null,

  /** {Number} Top position of finger at start */
  __lastTouchTop: null,

  /** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */
  __lastTouchMove: null,

  /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */
  __positions: null,

  /*
  ---------------------------------------------------------------------------
    INTERNAL FIELDS :: DECELERATION SUPPORT
  ---------------------------------------------------------------------------
  */

  /** {Integer} Minimum left scroll position during deceleration */
  __minDecelerationScrollLeft: null,

  /** {Integer} Minimum top scroll position during deceleration */
  __minDecelerationScrollTop: null,

  /** {Integer} Maximum left scroll position during deceleration */
  __maxDecelerationScrollLeft: null,

  /** {Integer} Maximum top scroll position during deceleration */
  __maxDecelerationScrollTop: null,

  /** {Number} Current factor to modify horizontal scroll position with on every step */
  __decelerationVelocityX: null,

  /** {Number} Current factor to modify vertical scroll position with on every step */
  __decelerationVelocityY: null,

  /*
  ---------------------------------------------------------------------------
    PUBLIC API
  ---------------------------------------------------------------------------
  */

  /**
   * Configures the dimensions of the client (outer) and content (inner) elements.
   * Requires the available space for the outer element and the outer size of the inner element.
   * All values which are falsy (null or zero etc.) are ignored and the old value is kept.
   *
   * @param clientWidth {Integer ? null} Inner width of outer element
   * @param clientHeight {Integer ? null} Inner height of outer element
   * @param contentWidth {Integer ? null} Outer width of inner element
   * @param contentHeight {Integer ? null} Outer height of inner element
   */
  setDimensions: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {
    var self = this; // Only update values which are defined

    if (clientWidth === +clientWidth) {
      self.__clientWidth = clientWidth;
    }

    if (clientHeight === +clientHeight) {
      self.__clientHeight = clientHeight;
    }

    if (contentWidth === +contentWidth) {
      self.__contentWidth = contentWidth;
    }

    if (contentHeight === +contentHeight) {
      self.__contentHeight = contentHeight;
    } // Refresh maximums


    self.__computeScrollMax(); // Refresh scroll position


    self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
  },

  /**
   * Sets the client coordinates in relation to the document.
   *
   * @param left {Integer ? 0} Left position of outer element
   * @param top {Integer ? 0} Top position of outer element
   */
  setPosition: function setPosition(left, top) {
    var self = this;
    self.__clientLeft = left || 0;
    self.__clientTop = top || 0;
  },

  /**
   * Configures the snapping (when snapping is active)
   *
   * @param width {Integer} Snapping width
   * @param height {Integer} Snapping height
   */
  setSnapSize: function setSnapSize(width, height) {
    var self = this;
    self.__snapWidth = width;
    self.__snapHeight = height;
  },

  /**
   * Activates pull-to-refresh. A special zone on the top of the list to start a list refresh whenever
   * the user event is released during visibility of this zone. This was introduced by some apps on iOS like
   * the official Twitter client.
   *
   * @param height {Integer} Height of pull-to-refresh zone on top of rendered list
   * @param activateCallback {Function} Callback to execute on activation. This is for signalling the user about a refresh is about to happen when he release.
   * @param deactivateCallback {Function} Callback to execute on deactivation. This is for signalling the user about the refresh being cancelled.
   * @param startCallback {Function} Callback to execute to start the real async refresh action. Call {@link #finishPullToRefresh} after finish of refresh.
   */
  activatePullToRefresh: function activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {
    var self = this;
    self.__refreshHeight = height;
    self.__refreshActivate = activateCallback;
    self.__refreshDeactivate = deactivateCallback;
    self.__refreshStart = startCallback;
  },

  /**
   * Starts pull-to-refresh manually.
   */
  triggerPullToRefresh: function triggerPullToRefresh() {
    // Use publish instead of scrollTo to allow scrolling to out of boundary position
    // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
    this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);

    if (this.__refreshStart) {
      this.__refreshStart();
    }
  },

  /**
   * Signalizes that pull-to-refresh is finished.
   */
  finishPullToRefresh: function finishPullToRefresh() {
    var self = this;
    self.__refreshActive = false;

    if (self.__refreshDeactivate) {
      self.__refreshDeactivate();
    }

    self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
  },

  /**
   * Returns the scroll position and zooming values
   *
   * @return {Map} `left` and `top` scroll position and `zoom` level
   */
  getValues: function getValues() {
    var self = this;
    return {
      left: self.__scrollLeft,
      top: self.__scrollTop,
      zoom: self.__zoomLevel
    };
  },

  /**
   * Returns the maximum scroll values
   *
   * @return {Map} `left` and `top` maximum scroll values
   */
  getScrollMax: function getScrollMax() {
    var self = this;
    return {
      left: self.__maxScrollLeft,
      top: self.__maxScrollTop
    };
  },

  /**
   * Zooms to the given level. Supports optional animation. Zooms
   * the center when no coordinates are given.
   *
   * @param level {Number} Level to zoom to
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? null} Zoom in at given left coordinate
   * @param originTop {Number ? null} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomTo: function zoomTo(level, animate, originLeft, originTop, callback) {
    var self = this;

    if (!self.options.zooming) {
      throw new Error("Zooming is not enabled!");
    } // Add callback if exists


    if (callback) {
      self.__zoomComplete = callback;
    } // Stop deceleration


    if (self.__isDecelerating) {
      core.effect.Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
    }

    var oldLevel = self.__zoomLevel; // Normalize input origin to center of viewport if not defined

    if (originLeft == null) {
      originLeft = self.__clientWidth / 2;
    }

    if (originTop == null) {
      originTop = self.__clientHeight / 2;
    } // Limit level according to configuration


    level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom); // Recompute maximum values while temporary tweaking maximum scroll ranges

    self.__computeScrollMax(level); // Recompute left and top coordinates based on new zoom level


    var left = (originLeft + self.__scrollLeft) * level / oldLevel - originLeft;
    var top = (originTop + self.__scrollTop) * level / oldLevel - originTop; // Limit x-axis

    if (left > self.__maxScrollLeft) {
      left = self.__maxScrollLeft;
    } else if (left < 0) {
      left = 0;
    } // Limit y-axis


    if (top > self.__maxScrollTop) {
      top = self.__maxScrollTop;
    } else if (top < 0) {
      top = 0;
    } // Push values out


    self.__publish(left, top, level, animate);
  },

  /**
   * Zooms the content by the given factor.
   *
   * @param factor {Number} Zoom by given factor
   * @param animate {Boolean ? false} Whether to use animation
   * @param originLeft {Number ? 0} Zoom in at given left coordinate
   * @param originTop {Number ? 0} Zoom in at given top coordinate
   * @param callback {Function ? null} A callback that gets fired when the zoom is complete.
   */
  zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {
    var self = this;
    self.zoomTo(self.__zoomLevel * factor, animate, originLeft, originTop, callback);
  },

  /**
   * Scrolls to the given position. Respect limitations and snapping automatically.
   *
   * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>
   * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>
   * @param animate {Boolean?false} Whether the scrolling should happen using an animation
   * @param zoom {Number?null} Zoom level to go to
   */
  scrollTo: function scrollTo(left, top, animate, zoom) {
    var self = this; // Stop deceleration

    if (self.__isDecelerating) {
      core.effect.Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
    } // Correct coordinates based on new zoom level


    if (zoom != null && zoom !== self.__zoomLevel) {
      if (!self.options.zooming) {
        throw new Error("Zooming is not enabled!");
      }

      left *= zoom;
      top *= zoom; // Recompute maximum values while temporary tweaking maximum scroll ranges

      self.__computeScrollMax(zoom);
    } else {
      // Keep zoom when not defined
      zoom = self.__zoomLevel;
    }

    if (!self.options.scrollingX) {
      left = self.__scrollLeft;
    } else {
      if (self.options.paging) {
        left = Math.round(left / self.__clientWidth) * self.__clientWidth;
      } else if (self.options.snapping) {
        left = Math.round(left / self.__snapWidth) * self.__snapWidth;
      }
    }

    if (!self.options.scrollingY) {
      top = self.__scrollTop;
    } else {
      if (self.options.paging) {
        top = Math.round(top / self.__clientHeight) * self.__clientHeight;
      } else if (self.options.snapping) {
        top = Math.round(top / self.__snapHeight) * self.__snapHeight;
      }
    } // Limit for allowed ranges


    left = Math.max(Math.min(self.__maxScrollLeft, left), 0);
    top = Math.max(Math.min(self.__maxScrollTop, top), 0); // Don't animate when no change detected, still call publish to make sure
    // that rendered position is really in-sync with internal data

    if (left === self.__scrollLeft && top === self.__scrollTop) {
      animate = false;
    } // Publish new values


    if (!self.__isTracking) {
      self.__publish(left, top, zoom, animate);
    }
  },

  /**
   * Scroll by the given offset
   *
   * @param left {Number ? 0} Scroll x-axis by given offset
   * @param top {Number ? 0} Scroll x-axis by given offset
   * @param animate {Boolean ? false} Whether to animate the given change
   */
  scrollBy: function scrollBy(left, top, animate) {
    var self = this;
    var startLeft = self.__isAnimating ? self.__scheduledLeft : self.__scrollLeft;
    var startTop = self.__isAnimating ? self.__scheduledTop : self.__scrollTop;
    self.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
  },

  /*
  ---------------------------------------------------------------------------
    EVENT CALLBACKS
  ---------------------------------------------------------------------------
  */

  /**
   * Mouse wheel handler for zooming support
   */
  doMouseZoom: function doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {
    var self = this;
    var change = wheelDelta > 0 ? 0.97 : 1.03;
    return self.zoomTo(self.__zoomLevel * change, false, pageX - self.__clientLeft, pageY - self.__clientTop);
  },

  /**
   * Touch start handler for scrolling support
   */
  doTouchStart: function doTouchStart(touches, timeStamp) {
    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error("Invalid touch list: " + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }

    if (typeof timeStamp !== "number") {
      throw new Error("Invalid timestamp value: " + timeStamp);
    }

    var self = this; // Reset interruptedAnimation flag

    self.__interruptedAnimation = true; // Stop deceleration

    if (self.__isDecelerating) {
      core.effect.Animate.stop(self.__isDecelerating);
      self.__isDecelerating = false;
      self.__interruptedAnimation = true;
    } // Stop animation


    if (self.__isAnimating) {
      core.effect.Animate.stop(self.__isAnimating);
      self.__isAnimating = false;
      self.__interruptedAnimation = true;
    } // Use center point when dealing with two fingers


    var currentTouchLeft, currentTouchTop;
    var isSingleTouch = touches.length === 1;

    if (isSingleTouch) {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    } else {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    } // Store initial positions


    self.__initialTouchLeft = currentTouchLeft;
    self.__initialTouchTop = currentTouchTop; // Store current zoom level

    self.__zoomLevelStart = self.__zoomLevel; // Store initial touch positions

    self.__lastTouchLeft = currentTouchLeft;
    self.__lastTouchTop = currentTouchTop; // Store initial move time stamp

    self.__lastTouchMove = timeStamp; // Reset initial scale

    self.__lastScale = 1; // Reset locking flags

    self.__enableScrollX = !isSingleTouch && self.options.scrollingX;
    self.__enableScrollY = !isSingleTouch && self.options.scrollingY; // Reset tracking flag

    self.__isTracking = true; // Reset deceleration complete flag

    self.__didDecelerationComplete = false; // Dragging starts directly with two fingers, otherwise lazy with an offset

    self.__isDragging = !isSingleTouch; // Some features are disabled in multi touch scenarios

    self.__isSingleTouch = isSingleTouch; // Clearing data structure

    self.__positions = [];
  },

  /**
   * Touch move handler for scrolling support
   */
  doTouchMove: function doTouchMove(touches, timeStamp, scale) {
    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error("Invalid touch list: " + touches);
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }

    if (typeof timeStamp !== "number") {
      throw new Error("Invalid timestamp value: " + timeStamp);
    }

    var self = this; // Ignore event when tracking is not enabled (event might be outside of element)

    if (!self.__isTracking) {
      return;
    }

    var currentTouchLeft, currentTouchTop; // Compute move based around of center of fingers

    if (touches.length === 2) {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
    } else {
      currentTouchLeft = touches[0].pageX;
      currentTouchTop = touches[0].pageY;
    }

    var positions = self.__positions; // Are we already is dragging mode?

    if (self.__isDragging) {
      // Compute move distance
      var moveX = currentTouchLeft - self.__lastTouchLeft;
      var moveY = currentTouchTop - self.__lastTouchTop; // Read previous scroll position and zooming

      var scrollLeft = self.__scrollLeft;
      var scrollTop = self.__scrollTop;
      var level = self.__zoomLevel; // Work with scaling

      if (scale != null && self.options.zooming) {
        var oldLevel = level; // Recompute level based on previous scale and new scale

        level = level / self.__lastScale * scale; // Limit level according to configuration

        level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom); // Only do further compution when change happened

        if (oldLevel !== level) {
          // Compute relative event position to container
          var currentTouchLeftRel = currentTouchLeft - self.__clientLeft;
          var currentTouchTopRel = currentTouchTop - self.__clientTop; // Recompute left and top coordinates based on new zoom level

          scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
          scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel; // Recompute max scroll values

          self.__computeScrollMax(level);
        }
      }

      if (self.__enableScrollX) {
        scrollLeft -= moveX * this.options.speedMultiplier;
        var maxScrollLeft = self.__maxScrollLeft;

        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
          // Slow down on the edges
          if (self.options.bouncing) {
            scrollLeft += moveX / 2 * this.options.speedMultiplier;
          } else if (scrollLeft > maxScrollLeft) {
            scrollLeft = maxScrollLeft;
          } else {
            scrollLeft = 0;
          }
        }
      } // Compute new vertical scroll position


      if (self.__enableScrollY) {
        scrollTop -= moveY * this.options.speedMultiplier;
        var maxScrollTop = self.__maxScrollTop;

        if (scrollTop > maxScrollTop || scrollTop < 0) {
          // Slow down on the edges
          if (self.options.bouncing) {
            scrollTop += moveY / 2 * this.options.speedMultiplier; // Support pull-to-refresh (only when only y is scrollable)

            if (!self.__enableScrollX && self.__refreshHeight != null) {
              if (!self.__refreshActive && scrollTop <= -self.__refreshHeight) {
                self.__refreshActive = true;

                if (self.__refreshActivate) {
                  self.__refreshActivate();
                }
              } else if (self.__refreshActive && scrollTop > -self.__refreshHeight) {
                self.__refreshActive = false;

                if (self.__refreshDeactivate) {
                  self.__refreshDeactivate();
                }
              }
            }
          } else if (scrollTop > maxScrollTop) {
            scrollTop = maxScrollTop;
          } else {
            scrollTop = 0;
          }
        }
      } // Keep list from growing infinitely (holding min 10, max 20 measure points)


      if (positions.length > 60) {
        positions.splice(0, 30);
      } // Track scroll movement for decleration


      positions.push(scrollLeft, scrollTop, timeStamp); // Sync scroll position

      self.__publish(scrollLeft, scrollTop, level); // Otherwise figure out whether we are switching into dragging mode now.

    } else {
      var minimumTrackingForScroll = self.options.locking ? 3 : 0;
      var minimumTrackingForDrag = 5;
      var distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft);
      var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);
      self.__enableScrollX = self.options.scrollingX && distanceX >= minimumTrackingForScroll;
      self.__enableScrollY = self.options.scrollingY && distanceY >= minimumTrackingForScroll;
      positions.push(self.__scrollLeft, self.__scrollTop, timeStamp);
      self.__isDragging = (self.__enableScrollX || self.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);

      if (self.__isDragging) {
        self.__interruptedAnimation = false;
      }
    } // Update last touch positions and time stamp for next event


    self.__lastTouchLeft = currentTouchLeft;
    self.__lastTouchTop = currentTouchTop;
    self.__lastTouchMove = timeStamp;
    self.__lastScale = scale;
  },

  /**
   * Touch end handler for scrolling support
   */
  doTouchEnd: function doTouchEnd(timeStamp) {
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf();
    }

    if (typeof timeStamp !== "number") {
      throw new Error("Invalid timestamp value: " + timeStamp);
    }

    var self = this; // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove') sits on the document and not on the element itself.

    if (!self.__isTracking) {
      return;
    } // Not touching anymore (when two finger hit the screen there are two touch end events)


    self.__isTracking = false; // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.

    if (self.__isDragging) {
      // Reset dragging flag
      self.__isDragging = false; // Start deceleration
      // Verify that the last move detected was in some relevant time frame

      if (self.__isSingleTouch && self.options.animating && timeStamp - self.__lastTouchMove <= 100) {
        // Then figure out what the scroll position was about 100ms ago
        var positions = self.__positions;
        var endPos = positions.length - 1;
        var startPos = endPos; // Move pointer to position measured 100ms ago

        for (var i = endPos; i > 0 && positions[i] > self.__lastTouchMove - 100; i -= 3) {
          startPos = i;
        } // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.


        if (startPos !== endPos) {
          // Compute relative movement between these two points
          var timeOffset = positions[endPos] - positions[startPos];
          var movedLeft = self.__scrollLeft - positions[startPos - 2];
          var movedTop = self.__scrollTop - positions[startPos - 1]; // Based on 50ms compute the movement to apply for each render step

          self.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
          self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60); // How much velocity is required to start the deceleration

          var minVelocityToStartDeceleration = self.options.paging || self.options.snapping ? 4 : 1; // Verify that we have enough velocity to start deceleration

          if (Math.abs(self.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {
            // Deactivate pull-to-refresh when decelerating
            if (!self.__refreshActive) {
              self.__startDeceleration(timeStamp);
            }
          } else {
            self.options.scrollingComplete();
          }
        } else {
          self.options.scrollingComplete();
        }
      } else if (timeStamp - self.__lastTouchMove > 100) {
        self.options.scrollingComplete();
      }
    } // If this was a slower move it is per default non decelerated, but this
    // still means that we want snap back to the bounds which is done here.
    // This is placed outside the condition above to improve edge case stability
    // e.g. touchend fired without enabled dragging. This should normally do not
    // have modified the scroll positions or even showed the scrollbars though.


    if (!self.__isDecelerating) {
      if (self.__refreshActive && self.__refreshStart) {
        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
        self.__publish(self.__scrollLeft, -self.__refreshHeight, self.__zoomLevel, true);

        if (self.__refreshStart) {
          self.__refreshStart();
        }
      } else {
        if (self.__interruptedAnimation || self.__isDragging) {
          self.options.scrollingComplete();
        }

        self.scrollTo(self.__scrollLeft, self.__scrollTop, true, self.__zoomLevel); // Directly signalize deactivation (nothing todo on refresh?)

        if (self.__refreshActive) {
          self.__refreshActive = false;

          if (self.__refreshDeactivate) {
            self.__refreshDeactivate();
          }
        }
      }
    } // Fully cleanup list


    self.__positions.length = 0;
  },

  /*
  ---------------------------------------------------------------------------
    PRIVATE API
  ---------------------------------------------------------------------------
  */

  /**
   * Applies the scroll position to the content element
   *
   * @param left {Number} Left scroll position
   * @param top {Number} Top scroll position
   * @param animate {Boolean?false} Whether animation should be used to move to the new coordinates
   */
  __publish: function __publish(left, top, zoom, animate) {
    var self = this; // Remember whether we had an animation, then we try to continue based on the current "drive" of the animation

    var wasAnimating = self.__isAnimating;

    if (wasAnimating) {
      core.effect.Animate.stop(wasAnimating);
      self.__isAnimating = false;
    }

    if (animate && self.options.animating) {
      // Keep scheduled positions for scrollBy/zoomBy functionality
      self.__scheduledLeft = left;
      self.__scheduledTop = top;
      self.__scheduledZoom = zoom;
      var oldLeft = self.__scrollLeft;
      var oldTop = self.__scrollTop;
      var oldZoom = self.__zoomLevel;
      var diffLeft = left - oldLeft;
      var diffTop = top - oldTop;
      var diffZoom = zoom - oldZoom;

      var step = function step(percent, now, render) {
        if (render) {
          self.__scrollLeft = oldLeft + diffLeft * percent;
          self.__scrollTop = oldTop + diffTop * percent;
          self.__zoomLevel = oldZoom + diffZoom * percent; // Push values out

          if (self.__callback) {
            self.__callback(self.__scrollLeft, self.__scrollTop, self.__zoomLevel);
          }
        }
      };

      var verify = function verify(id) {
        return self.__isAnimating === id;
      };

      var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
        if (animationId === self.__isAnimating) {
          self.__isAnimating = false;
        }

        if (self.__didDecelerationComplete || wasFinished) {
          self.options.scrollingComplete();
        }

        if (self.options.zooming) {
          self.__computeScrollMax();

          if (self.__zoomComplete) {
            self.__zoomComplete();

            self.__zoomComplete = null;
          }
        }
      }; // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out


      self.__isAnimating = core.effect.Animate.start(step, verify, completed, self.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
    } else {
      self.__scheduledLeft = self.__scrollLeft = left;
      self.__scheduledTop = self.__scrollTop = top;
      self.__scheduledZoom = self.__zoomLevel = zoom; // Push values out

      if (self.__callback) {
        self.__callback(left, top, zoom);
      } // Fix max scroll ranges


      if (self.options.zooming) {
        self.__computeScrollMax();

        if (self.__zoomComplete) {
          self.__zoomComplete();

          self.__zoomComplete = null;
        }
      }
    }
  },

  /**
   * Recomputes scroll minimum values based on client dimensions and content dimensions.
   */
  __computeScrollMax: function __computeScrollMax(zoomLevel) {
    var self = this;

    if (zoomLevel == null) {
      zoomLevel = self.__zoomLevel;
    }

    self.__maxScrollLeft = Math.max(self.__contentWidth * zoomLevel - self.__clientWidth, 0);
    self.__maxScrollTop = Math.max(self.__contentHeight * zoomLevel - self.__clientHeight, 0);
  },

  /*
  ---------------------------------------------------------------------------
    ANIMATION (DECELERATION) SUPPORT
  ---------------------------------------------------------------------------
  */

  /**
   * Called when a touch sequence end and the speed of the finger was high enough
   * to switch into deceleration mode.
   */
  // eslint-disable-next-line no-unused-vars
  __startDeceleration: function __startDeceleration(timeStamp) {
    var self = this;

    if (self.options.paging) {
      var scrollLeft = Math.max(Math.min(self.__scrollLeft, self.__maxScrollLeft), 0);
      var scrollTop = Math.max(Math.min(self.__scrollTop, self.__maxScrollTop), 0);
      var clientWidth = self.__clientWidth;
      var clientHeight = self.__clientHeight; // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
      // Each page should have exactly the size of the client area.

      self.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
      self.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
      self.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
      self.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
    } else {
      self.__minDecelerationScrollLeft = 0;
      self.__minDecelerationScrollTop = 0;
      self.__maxDecelerationScrollLeft = self.__maxScrollLeft;
      self.__maxDecelerationScrollTop = self.__maxScrollTop;
    } // Wrap class method


    var step = function step(percent, now, render) {
      self.__stepThroughDeceleration(render);
    }; // How much velocity is required to keep the deceleration running


    var minVelocityToKeepDecelerating = self.options.snapping ? 4 : 0.001; // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.

    var verify = function verify() {
      var shouldContinue = Math.abs(self.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;

      if (!shouldContinue) {
        self.__didDecelerationComplete = true;
      }

      return shouldContinue;
    }; // eslint-disable-next-line no-unused-vars


    var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
      self.__isDecelerating = false;

      if (self.__didDecelerationComplete) {
        self.options.scrollingComplete();
      } // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions


      self.scrollTo(self.__scrollLeft, self.__scrollTop, self.options.snapping);
    }; // Start animation and switch on flag


    self.__isDecelerating = core.effect.Animate.start(step, verify, completed);
  },

  /**
   * Called on every step of the animation
   *
   * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!
   */
  __stepThroughDeceleration: function __stepThroughDeceleration(render) {
    var self = this; //
    // COMPUTE NEXT SCROLL POSITION
    //
    // Add deceleration to scroll position

    var scrollLeft = self.__scrollLeft + self.__decelerationVelocityX;
    var scrollTop = self.__scrollTop + self.__decelerationVelocityY; //
    // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
    //

    if (!self.options.bouncing) {
      var scrollLeftFixed = Math.max(Math.min(self.__maxDecelerationScrollLeft, scrollLeft), self.__minDecelerationScrollLeft);

      if (scrollLeftFixed !== scrollLeft) {
        scrollLeft = scrollLeftFixed;
        self.__decelerationVelocityX = 0;
      }

      var scrollTopFixed = Math.max(Math.min(self.__maxDecelerationScrollTop, scrollTop), self.__minDecelerationScrollTop);

      if (scrollTopFixed !== scrollTop) {
        scrollTop = scrollTopFixed;
        self.__decelerationVelocityY = 0;
      }
    } //
    // UPDATE SCROLL POSITION
    //


    if (render) {
      self.__publish(scrollLeft, scrollTop, self.__zoomLevel);
    } else {
      self.__scrollLeft = scrollLeft;
      self.__scrollTop = scrollTop;
    } //
    // SLOW DOWN
    //
    // Slow down velocity on every iteration


    if (!self.options.paging) {
      // This is the factor applied to every iteration of the animation
      // to slow down the process. This should emulate natural behavior where
      // objects slow down when the initiator of the movement is removed
      var frictionFactor = 0.95;
      self.__decelerationVelocityX *= frictionFactor;
      self.__decelerationVelocityY *= frictionFactor;
    } //
    // BOUNCING SUPPORT
    //


    if (self.options.bouncing) {
      var scrollOutsideX = 0;
      var scrollOutsideY = 0; // This configures the amount of change applied to deceleration/acceleration when reaching boundaries

      var penetrationDeceleration = self.options.penetrationDeceleration;
      var penetrationAcceleration = self.options.penetrationAcceleration; // Check limits

      if (scrollLeft < self.__minDecelerationScrollLeft) {
        scrollOutsideX = self.__minDecelerationScrollLeft - scrollLeft;
      } else if (scrollLeft > self.__maxDecelerationScrollLeft) {
        scrollOutsideX = self.__maxDecelerationScrollLeft - scrollLeft;
      }

      if (scrollTop < self.__minDecelerationScrollTop) {
        scrollOutsideY = self.__minDecelerationScrollTop - scrollTop;
      } else if (scrollTop > self.__maxDecelerationScrollTop) {
        scrollOutsideY = self.__maxDecelerationScrollTop - scrollTop;
      } // Slow down until slow enough, then flip back to snap position


      if (scrollOutsideX !== 0) {
        if (scrollOutsideX * self.__decelerationVelocityX <= 0) {
          self.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
        } else {
          self.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
        }
      }

      if (scrollOutsideY !== 0) {
        if (scrollOutsideY * self.__decelerationVelocityY <= 0) {
          self.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
        } else {
          self.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
        }
      }
    }
  }
}; // Copy over members to prototype

for (var key in members) {
  Scroller.prototype[key] = members[key];
}

/* harmony default export */ var module_core = (Scroller);
// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/module/render.js



function getContentRender(content) {
  var global = window;
  var docStyle = document.documentElement.style;
  var engine;

  if (global.opera && Object.prototype.toString.call(global.opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }

  var vendorPrefix = {
    trident: 'ms',
    gecko: 'Moz',
    webkit: 'Webkit',
    presto: 'O'
  }[engine];
  var helperElem = document.createElement("div");
  var undef;
  var perspectiveProperty = vendorPrefix + "Perspective";
  var transformProperty = vendorPrefix + "Transform";

  if (helperElem.style[perspectiveProperty] !== undef) {
    return function (left, top, zoom) {
      content.style[transformProperty] = 'translate3d(' + -left + 'px,' + -top + 'px,0) scale(' + zoom + ')';
    };
  } else if (helperElem.style[transformProperty] !== undef) {
    return function (left, top, zoom) {
      content.style[transformProperty] = 'translate(' + -left + 'px,' + -top + 'px) scale(' + zoom + ')';
    };
  } else {
    return function (left, top, zoom) {
      content.style.marginLeft = left ? -left / zoom + 'px' : '';
      content.style.marginTop = top ? -top / zoom + 'px' : '';
      content.style.zoom = zoom || '';
    };
  }
}

/* harmony default export */ var module_render = (getContentRender);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Spinner.vue?vue&type=template&id=6b590b30&
var Spinnervue_type_template_id_6b590b30_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"spinner",attrs:{"viewBox":"0 0 64 64"}},[_c('g',{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(180)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(210)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(240)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(270)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(300)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(330)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(0)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(30)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(60)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(90)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(120)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(150)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})])])])}
var Spinnervue_type_template_id_6b590b30_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Spinner.vue?vue&type=template&id=6b590b30&

// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Spinner.vue

var script = {}


/* normalize component */

var Spinner_component = normalizeComponent(
  script,
  Spinnervue_type_template_id_6b590b30_render,
  Spinnervue_type_template_id_6b590b30_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Spinner = (Spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Arrow.vue?vue&type=template&id=faf47c2e&
var Arrowvue_type_template_id_faf47c2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"enable-background":"new 0 0 63.657 63.657"},attrs:{"viewBox":"0 0 63.657 63.657","xml:space":"preserve","width":"512px","height":"512px"}},[_c('g',[_c('g',[_c('g',[_c('g',[_c('polygon',{attrs:{"points":"31.891,63.657 0.012,35.835 2.642,32.821 31.886,58.343 61.009,32.824 63.645,35.832","fill":_vm.fillColor}})])]),_c('g',[_c('g',[_c('rect',{attrs:{"x":"29.827","width":"4","height":"60","fill":_vm.fillColor}})])])]),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g')]),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g')])}
var Arrowvue_type_template_id_faf47c2e_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Arrow.vue?vue&type=template&id=faf47c2e&

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Arrow.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Arrowvue_type_script_lang_js_ = ({
  props: {
    fillColor: {
      type: String,
      default: '#AAA'
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Arrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Arrowvue_type_script_lang_js_ = (Arrowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Arrow.vue





/* normalize component */

var Arrow_component = normalizeComponent(
  components_Arrowvue_type_script_lang_js_,
  Arrowvue_type_template_id_faf47c2e_render,
  Arrowvue_type_template_id_faf47c2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Arrow = (Arrow_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=script&lang=js&





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




var re = /^[\d]+(\%)?$/;

var widthAndHeightCoerce = function widthAndHeightCoerce(v) {
  if (v[v.length - 1] != '%') return v + 'px';
  return v;
};

var widthAndHeightValidator = function widthAndHeightValidator(v) {
  return re.test(v);
};

/* harmony default export */ var Scrollervue_type_script_lang_js_ = ({
  components: {
    Spinner: Spinner,
    Arrow: Arrow
  },
  props: {
    onRefresh: Function,
    onInfinite: Function,
    refreshText: {
      type: String,
      default: '下拉刷新'
    },
    noDataText: {
      type: String,
      default: '没有更多数据'
    },
    width: {
      type: String,
      default: '100%',
      validator: widthAndHeightValidator
    },
    height: {
      type: String,
      default: '100%',
      validator: widthAndHeightValidator
    },
    snapping: {
      type: Boolean,
      default: false
    },
    snapWidth: {
      type: Number,
      default: 100
    },
    snapHeight: {
      type: Number,
      default: 100
    },
    animating: {
      type: Boolean,
      default: true
    },
    animationDuration: {
      type: Number,
      default: 250
    },
    bouncing: {
      type: Boolean,
      default: true
    },
    refreshLayerColor: {
      type: String,
      default: '#AAA'
    },
    loadingLayerColor: {
      type: String,
      default: '#AAA'
    },
    cssClass: String,
    // content css class
    minContentHeight: {
      type: Number,
      default: 0 // px

    }
  },
  computed: {
    w: function w() {
      return widthAndHeightCoerce(this.width);
    },
    h: function h() {
      return widthAndHeightCoerce(this.height);
    },
    showInfiniteLayer: function showInfiniteLayer() {
      var contentHeight = 0;
      this.content ? contentHeight = this.content.offsetHeight : void 666;
      return this.onInfinite ? contentHeight > this.minContentHeight : false;
    }
  },
  data: function data() {
    return {
      containerId: 'outer-' + Math.random().toString(36).substring(3, 8),
      contentId: 'inner-' + Math.random().toString(36).substring(3, 8),
      state: 0,
      // 0: pull to refresh, 1: release to refresh, 2: refreshing
      loadingState: 0,
      // 0: stop, 1: loading, 2: stopping loading
      showLoading: false,
      container: undefined,
      content: undefined,
      scroller: undefined,
      pullToRefreshLayer: undefined,
      mousedown: false,
      infiniteTimer: undefined,
      resizeTimer: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.container = document.getElementById(this.containerId);
    this.container.style.width = this.w;
    this.container.style.height = this.h;
    this.content = document.getElementById(this.contentId);
    if (this.cssClass) this.content.classList.add(this.cssClass);
    this.pullToRefreshLayer = this.content.getElementsByTagName("div")[0];
    var render = module_render(this.content);
    var scrollerOptions = {
      scrollingX: false
    };
    this.scroller = new module_core(render, {
      scrollingX: false,
      snapping: this.snapping,
      animating: this.animating,
      animationDuration: this.animationDuration,
      bouncing: this.bouncing
    }); // enable PullToRefresh

    if (this.onRefresh) {
      this.scroller.activatePullToRefresh(60, function () {
        _this.state = 1;
      }, function () {
        _this.state = 0;
      }, function () {
        _this.state = 2;

        _this.$on('$finishPullToRefresh', function () {
          setTimeout(function () {
            _this.state = 0;

            _this.finishPullToRefresh();
          });
        });

        _this.onRefresh(_this.finishPullToRefresh);
      });
    } // enable infinite loading


    if (this.onInfinite) {
      this.infiniteTimer = setInterval(function () {
        var _this$scroller$getVal = _this.scroller.getValues(),
            left = _this$scroller$getVal.left,
            top = _this$scroller$getVal.top,
            zoom = _this$scroller$getVal.zoom; // 在 keep alive 中 deactivated 的组件长宽变为 0 


        if (_this.content.offsetHeight > 0 && top + 60 > _this.content.offsetHeight - _this.container.clientHeight) {
          if (_this.loadingState) return;
          _this.loadingState = 1;
          _this.showLoading = true;

          _this.onInfinite(_this.finishInfinite);
        }
      }, 10);
    } // setup scroller


    var rect = this.container.getBoundingClientRect();
    this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop); // snapping

    if (this.snapping) {
      // console.log(this.snapWidth, this.snapHeight)
      this.scroller.setSnapSize(this.snapWidth, this.snapHeight);
    } // onContentResize


    var contentSize = function contentSize() {
      return {
        width: _this.content.offsetWidth,
        height: _this.content.offsetHeight
      };
    };

    var _contentSize = contentSize(),
        content_width = _contentSize.content_width,
        content_height = _contentSize.content_height;

    this.resizeTimer = setInterval(function () {
      var _contentSize2 = contentSize(),
          width = _contentSize2.width,
          height = _contentSize2.height;

      if (width !== content_width || height !== content_height) {
        content_width = width;
        content_height = height;

        _this.resize();
      }
    }, 10);
  },
  destroyed: function destroyed() {
    clearInterval(this.resizeTimer);
    if (this.infiniteTimer) clearInterval(this.infiniteTimer);
  },
  methods: {
    resize: function resize() {
      var container = this.container;
      var content = this.content;
      this.scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
    },
    finishPullToRefresh: function finishPullToRefresh() {
      this.scroller.finishPullToRefresh();
    },
    finishInfinite: function finishInfinite(hideSpinner) {
      this.loadingState = hideSpinner ? 2 : 0;
      this.showLoading = false;

      if (this.loadingState == 2) {
        this.resetLoadingState();
      }
    },
    triggerPullToRefresh: function triggerPullToRefresh() {
      this.scroller.triggerPullToRefresh();
    },
    scrollTo: function scrollTo(x, y, animate) {
      this.scroller.scrollTo(x, y, animate);
    },
    scrollBy: function scrollBy(x, y, animate) {
      this.scroller.scrollBy(x, y, animate);
    },
    touchStart: function touchStart(e) {
      // Don't react if initial down happens on a form element
      if (e.target.tagName.match(/input|textarea|select/i)) {
        return;
      }

      this.scroller.doTouchStart(e.touches, e.timeStamp);
    },
    touchMove: function touchMove(e) {
      console.log("S");
      e.preventDefault();
      this.scroller.doTouchMove(e.touches, e.timeStamp);
    },
    touchEnd: function touchEnd(e) {
      console.log("x");
      this.scroller.doTouchEnd(e.timeStamp);
    },
    mouseDown: function mouseDown(e) {
      // Don't react if initial down happens on a form element
      if (e.target.tagName.match(/input|textarea|select/i)) {
        return;
      }

      this.scroller.doTouchStart([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp);
      this.mousedown = true;
    },
    mouseMove: function mouseMove(e) {
      if (!this.mousedown) {
        return;
      }

      this.scroller.doTouchMove([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp);
      this.mousedown = true;
    },
    mouseUp: function mouseUp(e) {
      if (!this.mousedown) {
        return;
      }

      this.scroller.doTouchEnd(e.timeStamp);
      this.mousedown = false;
    },
    // 获取位置
    getPosition: function getPosition() {
      var v = this.scroller.getValues();
      return {
        left: parseInt(v.left),
        top: parseInt(v.top)
      };
    },
    resetLoadingState: function resetLoadingState() {
      var _this2 = this;

      var _this$scroller$getVal2 = this.scroller.getValues(),
          left = _this$scroller$getVal2.left,
          top = _this$scroller$getVal2.top,
          zoom = _this$scroller$getVal2.zoom;

      var container = this.container;
      var content = this.content;

      if (top + 60 > this.content.offsetHeight - this.container.clientHeight) {
        setTimeout(function () {
          _this2.resetLoadingState();
        }, 1000);
      } else {
        this.loadingState = 0;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Scrollervue_type_script_lang_js_ = (Scrollervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=style&index=0&id=50ca95e2&lang=css&scoped=true&
var Scrollervue_type_style_index_0_id_50ca95e2_lang_css_scoped_true_ = __webpack_require__("3c53");

// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Scroller.vue






/* normalize component */

var Scroller_component = normalizeComponent(
  components_Scrollervue_type_script_lang_js_,
  Scrollervue_type_template_id_50ca95e2_scoped_true_render,
  Scrollervue_type_template_id_50ca95e2_scoped_true_staticRenderFns,
  false,
  null,
  "50ca95e2",
  null
  
)

/* harmony default export */ var components_Scroller = (Scroller_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=script&lang=js&
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
    return {};
  },
  components: {
    scroller: components_Scroller
  },
  props: {
    //是否开启下拉加载
    isPaging: {
      type: Boolean,
      default: false
    },
    //下拉刷新的提示文字
    refreshText: {
      type: String,
      default: '下拉刷新'
    },
    //下拉刷新的提示文字
    noDataText: {
      type: String,
      default: '数据已加载完'
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
    // 下拉刷新
    refresh: function refresh() {
      var _this = this;

      this.$emit("refresh", function () {
        _this.$refs.my_scroller.finishPullToRefresh();
      });
    },

    /**
     * 加载更多
     */
    loadMove: function loadMove() {
      var _this2 = this;

      this.$emit("loadMove", function () {
        _this2.$refs.my_scroller.finishInfinite(true); // 禁止上拉加载更多

      });
    },
    // 滚动到指定位置
    scrollTo: function scrollTo(x, y, times) {
      this.$refs.my_scroller.scrollTo(x, y, times);
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
  lbr_srcollvue_type_template_id_5e0e806d_render,
  lbr_srcollvue_type_template_id_5e0e806d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lbr_srcoll = (lbr_srcoll_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-load-moves/index.js

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-message/src/lbr-message.vue?vue&type=template&id=5e2ed731&scoped=true&
var lbr_messagevue_type_template_id_5e2ed731_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"message",class:_vm.type},[_vm._v("\n    "+_vm._s(_vm.text)+"\n  ")])])}
var lbr_messagevue_type_template_id_5e2ed731_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-message/src/lbr-message.vue?vue&type=template&id=5e2ed731&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("c726");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-message/src/lbr-message.vue?vue&type=script&lang=js&

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
      }
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
// EXTERNAL MODULE: ./src/packages/lbr-message/src/lbr-message.vue?vue&type=style&index=0&id=5e2ed731&scoped=true&lang=scss&
var lbr_messagevue_type_style_index_0_id_5e2ed731_scoped_true_lang_scss_ = __webpack_require__("32ca");

// CONCATENATED MODULE: ./src/packages/lbr-message/src/lbr-message.vue






/* normalize component */

var lbr_message_component = normalizeComponent(
  src_lbr_messagevue_type_script_lang_js_,
  lbr_messagevue_type_template_id_5e2ed731_scoped_true_render,
  lbr_messagevue_type_template_id_5e2ed731_scoped_true_staticRenderFns,
  false,
  null,
  "5e2ed731",
  null
  
)

/* harmony default export */ var lbr_message = (lbr_message_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-message/index.js



function Message() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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

  var VueMessage = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    render: function render(h) {
      var props = {
        text: msg,
        show: this.show
      };
      return h(lbr_message, {
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

  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
    vm.show = true;
    var t1 = setTimeout(function () {
      clearTimeout(t1);
      vm.show = false; //隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从body中移除dom

      var t2 = setTimeout(function () {
        clearTimeout(t2);
        document.body.removeChild(el); //从body中移除dom

        newMessage.$destroy();
        vm = null; // 设置为null，好让js垃圾回收算法回收，释放内存

        param.callBack && typeof param.callBack === 'function' && param.callBack();
      }, 300);
    }, duration);
  });
  return newMessage;
}

/* harmony default export */ var packages_lbr_message = (Message);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=template&id=73999612&scoped=true&
var lbr_loadingvue_type_template_id_73999612_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('div',{staticClass:"loading-container",class:{'visible': _vm.state == 1, 'visible active': _vm.state == 2}},[_c('div',{staticClass:"loading"},[_c('div',[_c('div',{staticClass:"spinner spinner-ios"},[_c('svg',{attrs:{"viewBox":"0 0 64 64"}},[_c('g',{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(180)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(210)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(240)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(270)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(300)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(330)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(0)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(30)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(60)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(90)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(120)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(150)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})])])])]),(_vm.title)?_c('div',{staticClass:"tips",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e()])])]):_vm._e()])}
var lbr_loadingvue_type_template_id_73999612_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=template&id=73999612&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=script&lang=js&
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
//
//
var removeElement = function removeElement(marker) {
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
      state: 0
    };
  },
  props: {
    title: {
      type: String,
      default: "加载中"
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  destroyed: function destroyed() {
    removeElement("von-loading");
  },
  methods: {
    // show(options) {
    //   this.tips = options.tips;
    //   this.showSpinner = !!options.showSpinner;
    //   this.state = 1;
    //   setTimeout(() => {
    //     this.state = 2;
    //   });
    //   document.body.addEventListener("touchmove", preventDefault);
    // },
    hide: function hide() {
      var _this = this;

      this.state = 1;
      setTimeout(function () {
        _this.state = 0;
        setTimeout(function () {
          _this.$destroy();
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
// EXTERNAL MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=style&index=0&id=73999612&lang=scss&scoped=true&
var lbr_loadingvue_type_style_index_0_id_73999612_lang_scss_scoped_true_ = __webpack_require__("1407");

// CONCATENATED MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue






/* normalize component */

var lbr_loading_component = normalizeComponent(
  src_lbr_loadingvue_type_script_lang_js_,
  lbr_loadingvue_type_template_id_73999612_scoped_true_render,
  lbr_loadingvue_type_template_id_73999612_scoped_true_staticRenderFns,
  false,
  null,
  "73999612",
  null
  
)

/* harmony default export */ var lbr_loading = (lbr_loading_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-loading/index.js


var Indicator = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(lbr_loading);
var instance;
/* harmony default export */ var packages_lbr_loading = ({
  open: function open() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    instance = new Indicator({
      el: document.createElement('div')
    });
    instance.title = options.title || '加载中';
    document.body.appendChild(instance.$el);
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
      instance.show = true;
    });
  },
  close: function close() {
    if (instance) {
      instance.show = false;
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
        document.body.removeChild(instance.$el);
        instance = null;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/index.vue?vue&type=template&id=6625e4fc&
var srcvue_type_template_id_6625e4fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item item-borderless item-input",attrs:{"von-datepicker":""},on:{"click":function($event){return _vm.showPicker()}}},[(_vm.label != '')?_c('span',{staticClass:"input-label",domProps:{"textContent":_vm._s(_vm.label)}}):_vm._e(),_c('input',{ref:"datetime",attrs:{"type":"datetime"},domProps:{"value":_vm.v}}),_c('span',{domProps:{"textContent":_vm._s(_vm.formatedDate)}}),_c('div',{staticClass:"hairline-top"}),_c('div',{staticClass:"hairline-bottom"})])}
var srcvue_type_template_id_6625e4fc_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/index.vue?vue&type=template&id=6625e4fc&

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("cca2");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("79a8");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/Picker.vue?vue&type=template&id=ceb40ba0&
var Pickervue_type_template_id_ceb40ba0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"von-datepicker",class:{'active': _vm.state == 1},attrs:{"von-picker":""}},[_c('div',{staticClass:"dp-header"},[_c('button',{staticClass:"button button-clear button-stable",on:{"click":function($event){return _vm.cancel()}}},[_vm._t("cancel",[_vm._v("\n        取消\n      ")])],2),_c('button',{staticClass:"button button-clear button-balanced btn-confirm",on:{"click":function($event){return _vm.confirm()}}},[_vm._t("confirm",[_vm._v("\n        确定\n      ")])],2)]),_c('div',{staticClass:"dp-body"},[_c('scroller',{ref:"y_scroller",staticClass:"dp-list dp-years",attrs:{"snapping":_vm.snapping,"snapHeight":_vm.snapHeight,"animation-duration":_vm.animationDuration,"width":"34%"}},_vm._l((_vm.years),function(y,index){return _c('div',{key:index,staticClass:"dp-item",domProps:{"textContent":_vm._s(y)}})}),0),_c('scroller',{ref:"m_scroller",staticClass:"dp-list dp-months",attrs:{"snapping":_vm.snapping,"snapHeight":_vm.snapHeight,"animationDuration":_vm.animationDuration,"width":"33%"}},_vm._l((_vm.months),function(m,index){return _c('div',{key:index,staticClass:"dp-item",domProps:{"textContent":_vm._s(m)}})}),0),_c('scroller',{ref:"d_scroller",staticClass:"dp-list dp-dates",attrs:{"snapping":_vm.snapping,"snapHeight":_vm.snapHeight,"animationDuration":_vm.animationDuration,"width":"33%"}},_vm._l((_vm.dates),function(d,index){return _c('div',{key:index,staticClass:"dp-item",domProps:{"textContent":_vm._s(d)}})}),0)],1)])}
var Pickervue_type_template_id_ceb40ba0_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/Picker.vue?vue&type=template&id=ceb40ba0&

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("445a");

// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/channel.js

var channel_vm = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var channel = (channel_vm);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/Picker.vue?vue&type=script&lang=js&




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


var defaultYears = function defaultYears() {
  var years = ['', '', ''];
  var today = new Date();
  var passed = today.getFullYear() - 1975;
  var start = today.getFullYear() - passed;
  var end = today.getFullYear() + passed;

  for (var y = start; y <= end; y++) {
    years.push(y + '');
  }

  return years.concat(['', '', '']);
};

var defaultMonths = function defaultMonths() {
  return ['', '', '', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '', '', ''];
};

var defaultDates = function defaultDates(yyyy, mm) {
  var dates = ['', '', ''];
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  if (yyyy) year = parseInt(yyyy);
  if (mm) month = parseInt(mm) - 1;
  var end = 30;

  if ([0, 2, 4, 6, 7, 9, 11].indexOf(month) > -1) {
    // 闰月：一月、三月、五月、七月、八月、十月、十二月
    end = 31;
  } else if (month == 1) {
    // 二月
    // 计算闰二月
    end = year % 100 == 0 ? year % 400 == 0 ? 29 : 28 : year % 4 == 0 ? 29 : 28;
  }

  for (var d = 1; d <= end; d++) {
    dates.push((100 + d + '').substr(1, 2));
  }

  return dates.concat(['', '', '']);
};

var item_height = 34;

var setOpacity = function setOpacity(el, index) {
  var dp_items = el.querySelectorAll('.dp-item');

  for (var i = 0; i < dp_items.length; i++) {
    var e = dp_items[i];

    if (i == index) {
      e.style.opacity = '1';
    } else if (Math.abs(i - index) == 1) {
      e.style.opacity = '0.4';
    } else if (Math.abs(i - index) == 2) {
      e.style.opacity = '0.2';
    } else if (Math.abs(i - index) >= 3) {
      e.style.opacity = '0.1';
    }
  }
};

/* harmony default export */ var Pickervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      state: 0,
      // 0: hide, 1: show
      value: '',
      years: defaultYears(),
      months: defaultMonths(),
      dates: defaultDates(),
      timer: undefined,
      // scroller settings
      snapping: true,
      snapHeight: 34,
      animationDuration: 1
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.timer = setInterval(function () {
      _this.updateYmd();
    }, 50);
    channel.$on('PickerCancelEvent', function () {
      _this.hide();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },
  destroyed: function destroyed() {
    document.body.removeChild(document.querySelector('[von-backdrop]'));
  },
  methods: {
    show: function show() {
      var _this2 = this;

      $backdrop.show().then(function () {
        var backdrop = document.querySelector('[von-backdrop]');

        backdrop.onclick = function () {
          channel.$emit('PickerCancelEvent');
          backdrop.onclick = null;
        };
      }); //     let backdrop = document.querySelector('.von-datepicker')
      // backdrop.onclick = () => {
      //   channel.$emit('PickerCancelEvent')
      //   backdrop.onclick = null
      // }

      setTimeout(function () {
        _this2.state = 1;

        _this2.$refs.y_scroller.resize();

        _this2.$refs.m_scroller.resize();

        _this2.$refs.d_scroller.resize();

        _this2.setYmd();
      });
    },
    hide: function hide() {
      var _this3 = this;

      this.state = 0; // $backdrop.hide()

      setTimeout(function () {
        _this3.$destroy();
      }, 300);
    },
    confirm: function confirm() {
      channel.$emit('PickerOkEvent', this.value);
    },
    cancel: function cancel() {
      channel.$emit('PickerCancelEvent');
    },
    updateYmd: function updateYmd() {
      var yPosition = this.$refs.y_scroller.getPosition();
      var yIndex = parseInt(yPosition.top / item_height) + 3;
      var mPosition = this.$refs.m_scroller.getPosition();
      var mIndex = parseInt(mPosition.top / item_height) + 3;
      var dPosition = this.$refs.d_scroller.getPosition();
      var dIndex = parseInt(dPosition.top / item_height) + 3;
      setOpacity(this.$refs.y_scroller.$el, yIndex);
      setOpacity(this.$refs.m_scroller.$el, mIndex);
      setOpacity(this.$refs.d_scroller.$el, dIndex);
      var yyyy = this.years[yIndex];
      var mm = this.months[mIndex];
      var dd = this.dates[dIndex];
      var newDates = defaultDates(yyyy, mm);

      if (newDates.length !== this.dates.length) {
        this.dates = newDates;
        setTimeout(this.$refs.d_scroller.resize, 0);
      }

      if (this.dates.indexOf(dd) === -1) {
        dIndex = this.dates.length - 4;
      }

      this.value = this.years[yIndex] + '-' + this.months[mIndex] + '-' + this.dates[dIndex];
    },
    setYmd: function setYmd() {
      var ymd = this.value.split('-');
      var yIndex = this.years.indexOf(ymd[0]);
      var mIndex = this.months.indexOf(ymd[1]);
      var dIndex = this.dates.indexOf(ymd[2]);
      this.$refs.y_scroller.scrollTo(0, item_height * (yIndex - 3));
      this.$refs.m_scroller.scrollTo(0, item_height * (mIndex - 3));
      this.$refs.d_scroller.scrollTo(0, item_height * (dIndex - 3));
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/Picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Pickervue_type_script_lang_js_ = (Pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/Picker.vue





/* normalize component */

var Picker_component = normalizeComponent(
  src_Pickervue_type_script_lang_js_,
  Pickervue_type_template_id_ceb40ba0_render,
  Pickervue_type_template_id_ceb40ba0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Picker = (Picker_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/index.vue?vue&type=script&lang=js&




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




var formatDate = function formatDate(value, format) {
  switch (format) {
    case 'yyyy/mm/dd':
      return value.split('-').join('/');
      break;

    default:
      return value;
  }
};

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'lbr-date-picker',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    dateFormat: {
      type: String,
      default: 'yyyy-mm-dd',
      validator: function validator(value) {
        return ['yyyy-mm-dd', 'yyyy/mm/dd'].indexOf(value) > -1;
      }
    }
  },
  computed: {
    v: function v() {
      return this.value;
    }
  },
  data: function data() {
    return {
      picker: undefined,
      // picker vm
      formatedDate: ''
    };
  },
  mounted: function mounted() {
    this.formatedDate = formatDate(this.value, this.dateFormat);
  },
  methods: {
    showPicker: function showPicker() {
      var _this = this;

      var el = document.createElement('div');
      el.setAttribute('von-picker', '');
      document.body.appendChild(el);
      var PickerComponent = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(Picker);
      this.picker = new PickerComponent({
        data: {
          value: this.v
        }
      }).$mount('[von-picker]');
      channel.$on('PickerOkEvent', function (value) {
        _this.v = value;
        console.log('datetime input =>', _this.$refs.datetime);
        _this.$refs.datetime.value = value;

        _this.$emit('input', value);

        _this.formatedDate = formatDate(value, _this.dateFormat);
        if (_this.picker) _this.picker.hide();
        channel.$off('PickerOkEvent');
      });
      this.picker.show();
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var lbr_datepicker_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-datepicker/src/index.vue?vue&type=style&index=0&lang=scss&
var srcvue_type_style_index_0_lang_scss_ = __webpack_require__("763b");

// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  lbr_datepicker_srcvue_type_script_lang_js_,
  srcvue_type_template_id_6625e4fc_render,
  srcvue_type_template_id_6625e4fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-datepicker/index.js

// 导入组件，组件必须声明 name
 // 为组件提供 install 安装方法，供按需引入

src.install = function (Vue) {
  Vue.component(src.name, src);
}; // 默认导出组件


/* harmony default export */ var lbr_datepicker = (src);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe.vue?vue&type=template&id=3d5ec9ea&
var swipevue_type_template_id_3d5ec9ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lbr-swipe"},[_c('div',{ref:"wrap",staticClass:"lbr-swipe-items-wrap"},[_vm._t("default")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showIndicators),expression:"showIndicators"}],staticClass:"lbr-swipe-indicators"},_vm._l((_vm.pages),function(page,$index){return _c('div',{key:$index,staticClass:"lbr-swipe-indicator",class:{ 'is-active': $index === _vm.index }})}),0)])}
var swipevue_type_template_id_3d5ec9ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe.vue?vue&type=template&id=3d5ec9ea&

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("72b3");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("270f");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("cb3c");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("9b42");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./src/packages/dom.js








/* istanbul ignore next */

var isServer = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);
/* istanbul ignore next */

var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */


var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};
/* istanbul ignore next */


var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();
/* istanbul ignore next */

var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();
/* istanbul ignore next */

var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }

    off(el, event, listener);
  };

  on(el, event, listener);
};
/* istanbul ignore next */

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
;
/* istanbul ignore next */

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}
;
/* istanbul ignore next */

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}
;
/* istanbul ignore next */

var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === 'float') {
    styleName = 'styleFloat';
  }

  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }

      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === 'float') {
    styleName = 'cssFloat';
  }

  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};
/* istanbul ignore next */

function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (_typeof(styleName) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);

    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
}
;
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe.vue?vue&type=script&lang=js&



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

/* harmony default export */ var swipevue_type_script_lang_js_ = ({
  name: 'lbr-swipe',
  created: function created() {
    this.dragState = {};
  },
  data: function data() {
    return {
      ready: false,
      dragging: false,
      userScrolling: false,
      animating: false,
      index: 0,
      pages: [],
      timer: null,
      reInitTimer: null,
      noDrag: false,
      isDone: false
    };
  },
  props: {
    speed: {
      type: Number,
      default: 300
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    auto: {
      type: Number,
      default: 3000
    },
    continuous: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    noDragWhenSingle: {
      type: Boolean,
      default: true
    },
    prevent: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    index: function index(newIndex) {
      this.$emit('change', newIndex);
    }
  },
  methods: {
    swipeItemCreated: function swipeItemCreated() {
      var _this = this;

      if (!this.ready) return;
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(function () {
        _this.reInitPages();
      }, 100);
    },
    swipeItemDestroyed: function swipeItemDestroyed() {
      var _this2 = this;

      if (!this.ready) return;
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(function () {
        _this2.reInitPages();
      }, 100);
    },
    rafTranslate: function rafTranslate(element, initOffset, offset, callback, nextElement) {
      var ALPHA = 0.88;
      this.animating = true;
      var _offset = initOffset;
      var raf = 0;

      function animationLoop() {
        if (Math.abs(_offset - offset) < 0.5) {
          this.animating = false;
          _offset = offset;
          element.style.webkitTransform = '';

          if (nextElement) {
            nextElement.style.webkitTransform = '';
          }

          cancelAnimationFrame(raf);

          if (callback) {
            callback();
          }

          return;
        }

        _offset = ALPHA * _offset + (1.0 - ALPHA) * offset;
        element.style.webkitTransform = "translate3d(".concat(_offset, "px, 0, 0)");

        if (nextElement) {
          nextElement.style.webkitTransform = "translate3d(".concat(_offset - offset, "px, 0, 0)");
        }

        raf = requestAnimationFrame(animationLoop.bind(this));
      }

      animationLoop.call(this);
    },
    translate: function translate(element, offset, speed, callback) {
      var _arguments = arguments,
          _this3 = this;

      if (speed) {
        this.animating = true;
        element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
        setTimeout(function () {
          element.style.webkitTransform = "translate3d(".concat(offset, "px, 0, 0)");
        }, 50);
        var called = false;

        var transitionEndCallback = function transitionEndCallback() {
          if (called) return;
          called = true;
          _this3.animating = false;
          element.style.webkitTransition = '';
          element.style.webkitTransform = '';

          if (callback) {
            callback.apply(_this3, _arguments);
          }
        };

        once(element, 'webkitTransitionEnd', transitionEndCallback);
        setTimeout(transitionEndCallback, speed + 100); // webkitTransitionEnd maybe not fire on lower version android.
      } else {
        element.style.webkitTransition = '';
        element.style.webkitTransform = "translate3d(".concat(offset, "px, 0, 0)");
      }
    },
    reInitPages: function reInitPages() {
      var children = this.$children;
      this.noDrag = children.length === 1 && this.noDragWhenSingle;
      var pages = [];
      var intDefaultIndex = Math.floor(this.defaultIndex);
      var defaultIndex = intDefaultIndex >= 0 && intDefaultIndex < children.length ? intDefaultIndex : 0;
      this.index = defaultIndex;
      children.forEach(function (child, index) {
        pages.push(child.$el);
        removeClass(child.$el, 'is-active');

        if (index === defaultIndex) {
          addClass(child.$el, 'is-active');
        }
      });
      this.pages = pages;
    },
    doAnimate: function doAnimate(towards, options) {
      var _this4 = this;

      if (this.$children.length === 0) return;
      if (!options && this.$children.length < 2) return;
      var prevPage, nextPage, currentPage, pageWidth, offsetLeft, speedX;
      var speed = this.speed || 300;
      var index = this.index;
      var pages = this.pages;
      var pageCount = pages.length;

      if (!options) {
        pageWidth = this.$el.clientWidth;
        currentPage = pages[index];
        prevPage = pages[index - 1];
        nextPage = pages[index + 1];

        if (this.continuous && pages.length > 1) {
          if (!prevPage) {
            prevPage = pages[pages.length - 1];
          }

          if (!nextPage) {
            nextPage = pages[0];
          }
        }

        if (prevPage) {
          prevPage.style.display = 'block';
          this.translate(prevPage, -pageWidth);
        }

        if (nextPage) {
          nextPage.style.display = 'block';
          this.translate(nextPage, pageWidth);
        }
      } else {
        prevPage = options.prevPage;
        currentPage = options.currentPage;
        nextPage = options.nextPage;
        pageWidth = options.pageWidth;
        offsetLeft = options.offsetLeft;
        speedX = options.speedX;
      }

      var newIndex;
      var oldPage = this.$children[index].$el;

      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1;
        }

        if (this.continuous && index === 0) {
          newIndex = pageCount - 1;
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1;
        }

        if (this.continuous && index === pageCount - 1) {
          newIndex = 0;
        }
      }

      var callback = function callback() {
        if (newIndex !== undefined) {
          var newPage = _this4.$children[newIndex].$el;
          removeClass(oldPage, 'is-active');
          addClass(newPage, 'is-active');
          _this4.index = newIndex;
        }

        if (_this4.isDone) {
          _this4.end();
        }

        if (prevPage) {
          prevPage.style.display = '';
        }

        if (nextPage) {
          nextPage.style.display = '';
        }
      };

      setTimeout(function () {
        if (towards === 'next') {
          _this4.isDone = true;

          _this4.before(currentPage);

          if (speedX) {
            _this4.rafTranslate(currentPage, offsetLeft, -pageWidth, callback, nextPage);
          } else {
            _this4.translate(currentPage, -pageWidth, speed, callback);

            if (nextPage) {
              _this4.translate(nextPage, 0, speed);
            }
          }
        } else if (towards === 'prev') {
          _this4.isDone = true;

          _this4.before(currentPage);

          if (speedX) {
            _this4.rafTranslate(currentPage, offsetLeft, pageWidth, callback, prevPage);
          } else {
            _this4.translate(currentPage, pageWidth, speed, callback);

            if (prevPage) {
              _this4.translate(prevPage, 0, speed);
            }
          }
        } else {
          _this4.isDone = false;

          _this4.translate(currentPage, 0, speed, callback);

          if (typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              _this4.translate(prevPage, pageWidth * -1, speed);
            }

            if (nextPage && offsetLeft < 0) {
              _this4.translate(nextPage, pageWidth, speed);
            }
          } else {
            if (prevPage) {
              _this4.translate(prevPage, pageWidth * -1, speed);
            }

            if (nextPage) {
              _this4.translate(nextPage, pageWidth, speed);
            }
          }
        }
      }, 10);
    },
    next: function next() {
      this.doAnimate('next');
    },
    prev: function prev() {
      this.doAnimate('prev');
    },
    before: function before() {
      this.$emit('before', this.index);
    },
    end: function end() {
      this.$emit('end', this.index);
    },
    doOnTouchStart: function doOnTouchStart(event) {
      if (this.noDrag) return;
      var element = this.$el;
      var dragState = this.dragState;
      var touch = event.touches[0];
      dragState.startTime = new Date();
      dragState.startLeft = touch.pageX;
      dragState.startTop = touch.pageY;
      dragState.startTopAbsolute = touch.clientY;
      dragState.pageWidth = element.offsetWidth;
      dragState.pageHeight = element.offsetHeight;
      var prevPage = this.$children[this.index - 1];
      var dragPage = this.$children[this.index];
      var nextPage = this.$children[this.index + 1];

      if (this.continuous && this.pages.length > 1) {
        if (!prevPage) {
          prevPage = this.$children[this.$children.length - 1];
        }

        if (!nextPage) {
          nextPage = this.$children[0];
        }
      }

      dragState.prevPage = prevPage ? prevPage.$el : null;
      dragState.dragPage = dragPage ? dragPage.$el : null;
      dragState.nextPage = nextPage ? nextPage.$el : null;

      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block';
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block';
      }
    },
    doOnTouchMove: function doOnTouchMove(event) {
      if (this.noDrag) return;
      var dragState = this.dragState;
      var touch = event.touches[0];
      dragState.speedX = touch.pageX - dragState.currentLeft;
      dragState.currentLeft = touch.pageX;
      dragState.currentTop = touch.pageY;
      dragState.currentTopAbsolute = touch.clientY;
      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;
      var distanceX = Math.abs(offsetLeft);
      var distanceY = Math.abs(offsetTop);

      if (distanceX < 5 || distanceX >= 5 && distanceY >= 1.73 * distanceX) {
        this.userScrolling = true;
        return;
      } else {
        this.userScrolling = false;
        event.preventDefault();
      }

      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);
      var towards = offsetLeft < 0 ? 'next' : 'prev';

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
      }

      this.translate(dragState.dragPage, offsetLeft);

      if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
      }
    },
    doOnTouchEnd: function doOnTouchEnd() {
      if (this.noDrag) return;
      var dragState = this.dragState;
      var dragDuration = new Date() - dragState.startTime;
      var towards = null;
      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTop - dragState.startTop;
      var pageWidth = dragState.pageWidth;
      var index = this.index;
      var pageCount = this.pages.length;

      if (dragDuration < 300) {
        var fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;

        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true;
        }

        if (fireTap) {
          this.$children[this.index].$emit('tap');
        }
      }

      if (dragDuration < 300 && dragState.currentLeft === undefined) return;

      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev';
      }

      if (!this.continuous) {
        if (index === 0 && towards === 'prev' || index === pageCount - 1 && towards === 'next') {
          towards = null;
        }
      }

      if (this.$children.length < 2) {
        towards = null;
      }

      this.doAnimate(towards, {
        offsetLeft: offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage,
        speedX: dragState.speedX
      });
      this.dragState = {};
    },
    initTimer: function initTimer() {
      var _this5 = this;

      if (this.auto > 0 && !this.timer) {
        this.timer = setInterval(function () {
          if (!_this5.continuous && _this5.index >= _this5.pages.length - 1) {
            return _this5.clearTimer();
          }

          if (!_this5.dragging && !_this5.animating) {
            _this5.next();
          }
        }, this.auto);
      }
    },
    clearTimer: function clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  destroyed: function destroyed() {
    if (this.timer) {
      this.clearTimer();
    }

    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer);
      this.reInitTimer = null;
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.ready = true;
    this.initTimer();
    this.reInitPages();
    var element = this.$el;
    element.addEventListener('touchstart', function (event) {
      if (_this6.prevent) event.preventDefault();
      if (_this6.stopPropagation) event.stopPropagation();
      if (_this6.animating) return;
      _this6.dragging = true;
      _this6.userScrolling = false;

      _this6.doOnTouchStart(event);
    });
    element.addEventListener('touchmove', function (event) {
      if (!_this6.dragging) return;
      if (_this6.timer) _this6.clearTimer();

      _this6.doOnTouchMove(event);
    });
    element.addEventListener('touchend', function (event) {
      if (_this6.userScrolling) {
        _this6.dragging = false;
        _this6.dragState = {};
        return;
      }

      if (!_this6.dragging) return;

      _this6.initTimer();

      _this6.doOnTouchEnd(event);

      _this6.dragging = false;
    });
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_swipevue_type_script_lang_js_ = (swipevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/lbr-swipe/src/swipe.vue?vue&type=style&index=0&lang=scss&
var swipevue_type_style_index_0_lang_scss_ = __webpack_require__("bffe");

// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe.vue






/* normalize component */

var swipe_component = normalizeComponent(
  src_swipevue_type_script_lang_js_,
  swipevue_type_template_id_3d5ec9ea_render,
  swipevue_type_template_id_3d5ec9ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swipe = (swipe_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-swipe/index.js

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe-item.vue?vue&type=template&id=d3edba00&
var swipe_itemvue_type_template_id_d3edba00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lbr-swipe-item"},[_vm._t("default")],2)}
var swipe_itemvue_type_template_id_d3edba00_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe-item.vue?vue&type=template&id=d3edba00&

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var swipe_itemvue_type_script_lang_js_ = ({
  name: 'lbr-swipe-item',
  mounted: function mounted() {
    this.$parent && this.$parent.swipeItemCreated(this);
  },
  destroyed: function destroyed() {
    this.$parent && this.$parent.swipeItemDestroyed(this);
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_swipe_itemvue_type_script_lang_js_ = (swipe_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe-item.vue





/* normalize component */

var swipe_item_component = normalizeComponent(
  src_swipe_itemvue_type_script_lang_js_,
  swipe_itemvue_type_template_id_d3edba00_render,
  swipe_itemvue_type_template_id_d3edba00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swipe_item = (swipe_item_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-swipe-item/index.js

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-form/src/lbr-form.vue?vue&type=template&id=1e9ac51c&
var lbr_formvue_type_template_id_1e9ac51c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',[_vm._t("default")],2)}
var lbr_formvue_type_template_id_1e9ac51c_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-form/src/lbr-form.vue?vue&type=template&id=1e9ac51c&

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("139e");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.promise.js
var es_promise = __webpack_require__("fae9");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("2db5");

// EXTERNAL MODULE: ./node_modules/_core-js@3.8.1@core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("6ab7");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-form/src/lbr-form.vue?vue&type=script&lang=js&







//
//
//
//
//
/* harmony default export */ var lbr_formvue_type_script_lang_js_ = ({
  name: 'lbr-form',
  provide: function provide() {
    return {
      form: this
    };
  },
  props: ['rules', 'model'],
  methods: {
    validate: function validate(cb) {
      //执行所有的FormItem的方法
      var tasks = this.$children.filter(function (v) {
        return v.prop;
      }).map(function (item) {
        return item.validate();
      });
      Promise.all(tasks).then(function () {
        return cb(true);
      }).catch(function () {
        return cb(false);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-form/src/lbr-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_formvue_type_script_lang_js_ = (lbr_formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/lbr-form/src/lbr-form.vue





/* normalize component */

var lbr_form_component = normalizeComponent(
  src_lbr_formvue_type_script_lang_js_,
  lbr_formvue_type_template_id_1e9ac51c_render,
  lbr_formvue_type_template_id_1e9ac51c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lbr_form = (lbr_form_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-form/index.js



lbr_form.install = function (Vue) {
  Vue.component(lbr_form.name, lbr_form);
};

/* harmony default export */ var packages_lbr_form = (lbr_form);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-form-item/src/lbr-form-item.vue?vue&type=template&id=27ba094c&
var lbr_form_itemvue_type_template_id_27ba094c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.lable)?_c('div',[_vm._v(_vm._s(_vm.lable))]):_vm._e(),_vm._t("default"),(_vm.error)?_c('p',{staticStyle:{"color":"red"}},[_vm._v(_vm._s(_vm.error))]):_vm._e()],2)}
var lbr_form_itemvue_type_template_id_27ba094c_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-form-item/src/lbr-form-item.vue?vue&type=template&id=27ba094c&

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/_async-validator@3.5.1@async-validator/dist-web/index.js
var dist_web = __webpack_require__("dc9b");

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-form-item/src/lbr-form-item.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//

/* harmony default export */ var lbr_form_itemvue_type_script_lang_js_ = ({
  name: "lbr-form-item",
  props: ["lable", "prop"],
  //能够获取全局的规则
  inject: ["form"],
  data: function data() {
    return {
      error: ""
    };
  },
  mounted: function mounted() {
    this.$on("validate", this.validate);
  },
  methods: {
    validate: function validate() {
      var _this = this;

      //每个item都有一个validata方法
      //1、获取rule校验规则
      var rules = this.form.rules[this.prop]; //2、获取model数据模型

      var value = this.form.model[this.prop];

      var descriptor = _defineProperty({}, this.prop, rules);

      var schema = new dist_web["a" /* default */](descriptor);
      return schema.validate(_defineProperty({}, this.prop, value), function (errors) {
        if (errors) {
          _this.error = errors[0].message;
        } else {
          _this.error = "";
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-form-item/src/lbr-form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_form_itemvue_type_script_lang_js_ = (lbr_form_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/lbr-form-item/src/lbr-form-item.vue





/* normalize component */

var lbr_form_item_component = normalizeComponent(
  src_lbr_form_itemvue_type_script_lang_js_,
  lbr_form_itemvue_type_template_id_27ba094c_render,
  lbr_form_itemvue_type_template_id_27ba094c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lbr_form_item = (lbr_form_item_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-form-item/index.js



lbr_form_item.install = function (Vue) {
  Vue.component(lbr_form_item.name, lbr_form_item);
};

/* harmony default export */ var packages_lbr_form_item = (lbr_form_item);
// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11a2e0df-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-input/src/lbr-input.vue?vue&type=template&id=3bdc244a&
var lbr_inputvue_type_template_id_3bdc244a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('input',{attrs:{"type":_vm.type,"blur":_vm.onBlur},domProps:{"value":_vm.value}})])}
var lbr_inputvue_type_template_id_3bdc244a_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-input/src/lbr-input.vue?vue&type=template&id=3bdc244a&

// CONCATENATED MODULE: ./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@3.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/packages/lbr-input/src/lbr-input.vue?vue&type=script&lang=js&
//
//
//
//
//
//失去焦点时触发校验以及用户输入的时候触发校验
/* harmony default export */ var lbr_inputvue_type_script_lang_js_ = ({
  name: "lbr-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput: function onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    },
    onBlur: function onBlur() {
      this.$dispatch("validate");
    }
  }
});
// CONCATENATED MODULE: ./src/packages/lbr-input/src/lbr-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lbr_inputvue_type_script_lang_js_ = (lbr_inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/lbr-input/src/lbr-input.vue





/* normalize component */

var lbr_input_component = normalizeComponent(
  src_lbr_inputvue_type_script_lang_js_,
  lbr_inputvue_type_template_id_3bdc244a_render,
  lbr_inputvue_type_template_id_3bdc244a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lbr_input = (lbr_input_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-input/index.js



lbr_input.install = function (Vue) {
  Vue.component(lbr_input.name, lbr_input);
};

/* harmony default export */ var packages_lbr_input = (lbr_input);
// CONCATENATED MODULE: ./src/packages/index.js














 // import picker from './picker'
// 存储组件列表

var components = [packages_lbr_button, lbr_srcoll, lbr_datepicker, swipe, swipe_item, packages_lbr_form, packages_lbr_form_item, packages_lbr_input];

var packages_install = function install(Vue) {
  if (install.installed) return;
  components.map(function (component) {
    return Vue.component(component.name, component);
  });
  Vue.prototype.$LbrMessage = packages_lbr_message;
  Vue.prototype.$LbrLoading = packages_lbr_loading;
  Vue.use(resetInput);
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  packages_install(window.Vue);
}


/* harmony default export */ var src_packages = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: packages_install,
  // 以下是具体的组件列表
  LbrButton: packages_lbr_button,
  LbrSrcoll: lbr_srcoll,
  lbrDatepicker: lbr_datepicker,
  LbrMessage: packages_lbr_message,
  LbrSwipe: swipe,
  LbrSwipeItem: swipe_item,
  LbrLoading: packages_lbr_loading,
  LbrForm: packages_lbr_form,
  LbrFormItem: packages_lbr_form_item,
  LbrInput: packages_lbr_input
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_packages);



/***/ }),

/***/ "1132":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "139e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("ec87");
var addToUnscopables = __webpack_require__("c119");
var Iterators = __webpack_require__("27c4");
var InternalStateModule = __webpack_require__("891c");
var defineIterator = __webpack_require__("cf0a");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "1407":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_73999612_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4004");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_73999612_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_73999612_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "15cc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("42cc");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "1a81":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("22af").f;
var has = __webpack_require__("b64f");
var wellKnownSymbol = __webpack_require__("1f17");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "1b04":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1c02":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("755c");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "1c94":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3d7c");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "1d7a":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("aba0");
var defineProperty = __webpack_require__("22af").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "1e51":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("b9ec");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "1f17":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var shared = __webpack_require__("fe3d");
var has = __webpack_require__("b64f");
var uid = __webpack_require__("95bd");
var NATIVE_SYMBOL = __webpack_require__("c1d9");
var USE_SYMBOL_AS_UID = __webpack_require__("89e2");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "1fef":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "20ca":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fc3a");
var isObject = __webpack_require__("42cc");
var newPromiseCapability = __webpack_require__("3781");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "225c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");

module.exports = global.Promise;


/***/ }),

/***/ "22af":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("aba0");
var IE8_DOM_DEFINE = __webpack_require__("5e7a");
var anObject = __webpack_require__("fc3a");
var toPrimitive = __webpack_require__("34e1");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "2374":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("4154");
var Iterators = __webpack_require__("27c4");
var wellKnownSymbol = __webpack_require__("1f17");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "270f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var DOMIterables = __webpack_require__("6c5f");
var forEach = __webpack_require__("d8a8");
var createNonEnumerableProperty = __webpack_require__("d53e");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "27c4":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "287a":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fc3a");
var aFunction = __webpack_require__("b9ec");
var wellKnownSymbol = __webpack_require__("1f17");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "28ea":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("42cc");
var isArray = __webpack_require__("1c94");
var wellKnownSymbol = __webpack_require__("1f17");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "2bc8":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "2db5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("f71e").charAt;
var InternalStateModule = __webpack_require__("891c");
var defineIterator = __webpack_require__("cf0a");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "2e78":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a543");

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

/***/ "32ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_5e2ed731_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("935b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_5e2ed731_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_5e2ed731_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3449":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("8843");
var getOwnPropertyNamesModule = __webpack_require__("3de6");
var getOwnPropertySymbolsModule = __webpack_require__("b91c");
var anObject = __webpack_require__("fc3a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "34e1":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("42cc");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "3592":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_80e60462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1b04");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_80e60462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_80e60462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3781":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("b9ec");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "3afd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fc3a");
var isArrayIteratorMethod = __webpack_require__("8c6c");
var toLength = __webpack_require__("c3a3");
var bind = __webpack_require__("1e51");
var getIteratorMethod = __webpack_require__("2374");
var iteratorClose = __webpack_require__("bc89");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "3c53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Scroller_vue_vue_type_style_index_0_id_50ca95e2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c6a4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Scroller_vue_vue_type_style_index_0_id_50ca95e2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_Scroller_vue_vue_type_style_index_0_id_50ca95e2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3d7c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "3de6":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("8b3a");
var enumBugKeys = __webpack_require__("65bb");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "4004":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "402f":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("6526");
var redefine = __webpack_require__("4450");
var toString = __webpack_require__("9985");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "408b":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("1f17");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "4154":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("6526");
var classofRaw = __webpack_require__("3d7c");
var wellKnownSymbol = __webpack_require__("1f17");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "42cc":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "4340":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "4450":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var createNonEnumerableProperty = __webpack_require__("d53e");
var has = __webpack_require__("b64f");
var setGlobal = __webpack_require__("0fca");
var inspectSource = __webpack_require__("1c02");
var InternalStateModule = __webpack_require__("891c");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "445a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var fails = __webpack_require__("2bc8");
var isArray = __webpack_require__("1c94");
var isObject = __webpack_require__("42cc");
var toObject = __webpack_require__("6050");
var toLength = __webpack_require__("c3a3");
var createProperty = __webpack_require__("8863");
var arraySpeciesCreate = __webpack_require__("28ea");
var arrayMethodHasSpeciesSupport = __webpack_require__("4d7f");
var wellKnownSymbol = __webpack_require__("1f17");
var V8_VERSION = __webpack_require__("029f");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "4619":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0e69");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4c39":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "4d7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("2bc8");
var wellKnownSymbol = __webpack_require__("1f17");
var V8_VERSION = __webpack_require__("029f");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "4f3e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var isObject = __webpack_require__("42cc");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "5133":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("9ffc");
var stickyHelpers = __webpack_require__("6fe2");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "56c3":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var inspectSource = __webpack_require__("1c02");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "5a4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("9b16");
var anObject = __webpack_require__("fc3a");
var toLength = __webpack_require__("c3a3");
var requireObjectCoercible = __webpack_require__("4340");
var advanceStringIndex = __webpack_require__("9a45");
var regExpExec = __webpack_require__("5fd8");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "5bfe":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "5cbf":
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

/***/ "5e7a":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("aba0");
var fails = __webpack_require__("2bc8");
var createElement = __webpack_require__("4f3e");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "5fd8":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3d7c");
var regexpExec = __webpack_require__("5133");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "6050":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("4340");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "6158":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("ec87");
var toLength = __webpack_require__("c3a3");
var toAbsoluteIndex = __webpack_require__("0119");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "6406":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("8843");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "6526":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("1f17");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "6540":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var $map = __webpack_require__("bfc3").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("4d7f");
var arrayMethodUsesToLength = __webpack_require__("c1e5");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "6564":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("42cc");
var setPrototypeOf = __webpack_require__("dbfe");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "65bb":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "67d5":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "6ab7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var DOMIterables = __webpack_require__("6c5f");
var ArrayIteratorMethods = __webpack_require__("139e");
var createNonEnumerableProperty = __webpack_require__("d53e");
var wellKnownSymbol = __webpack_require__("1f17");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "6c14":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c5f":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "6d96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("8843");
var definePropertyModule = __webpack_require__("22af");
var wellKnownSymbol = __webpack_require__("1f17");
var DESCRIPTORS = __webpack_require__("aba0");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "6f75":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var getOwnPropertyDescriptor = __webpack_require__("e329").f;
var macrotask = __webpack_require__("8acc").set;
var IS_IOS = __webpack_require__("f7bb");
var IS_NODE = __webpack_require__("eee5");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!IS_IOS && !IS_NODE && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
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
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "6fe2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("2bc8");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "72b3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var forEach = __webpack_require__("d8a8");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "755c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var setGlobal = __webpack_require__("0fca");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "763b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c14");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7866":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("2bc8");
var classof = __webpack_require__("3d7c");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "79a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("9b16");
var isRegExp = __webpack_require__("00a5");
var anObject = __webpack_require__("fc3a");
var requireObjectCoercible = __webpack_require__("4340");
var speciesConstructor = __webpack_require__("287a");
var advanceStringIndex = __webpack_require__("9a45");
var toLength = __webpack_require__("c3a3");
var callRegExpExec = __webpack_require__("5fd8");
var regexpExec = __webpack_require__("5133");
var fails = __webpack_require__("2bc8");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "836b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("4450");
var anObject = __webpack_require__("fc3a");
var fails = __webpack_require__("2bc8");
var flags = __webpack_require__("9ffc");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "8573":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("4450");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "8587":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("aba0");
var definePropertyModule = __webpack_require__("22af");
var anObject = __webpack_require__("fc3a");
var objectKeys = __webpack_require__("9c6a");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "8843":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("e469");
var global = __webpack_require__("8d5c");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "8863":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("34e1");
var definePropertyModule = __webpack_require__("22af");
var createPropertyDescriptor = __webpack_require__("5cbf");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "891c":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("56c3");
var global = __webpack_require__("8d5c");
var isObject = __webpack_require__("42cc");
var createNonEnumerableProperty = __webpack_require__("d53e");
var objectHas = __webpack_require__("b64f");
var shared = __webpack_require__("755c");
var sharedKey = __webpack_require__("9800");
var hiddenKeys = __webpack_require__("0c09");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "89e2":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("c1d9");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "8acc":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var fails = __webpack_require__("2bc8");
var bind = __webpack_require__("1e51");
var html = __webpack_require__("beb6");
var createElement = __webpack_require__("4f3e");
var IS_IOS = __webpack_require__("f7bb");
var IS_NODE = __webpack_require__("eee5");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "8b3a":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b64f");
var toIndexedObject = __webpack_require__("ec87");
var indexOf = __webpack_require__("6158").indexOf;
var hiddenKeys = __webpack_require__("0c09");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8c6c":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("1f17");
var Iterators = __webpack_require__("27c4");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "8d5c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("0288")))

/***/ }),

/***/ "935b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9414":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("4340");
var whitespaces = __webpack_require__("1fef");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "9456":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("a717").IteratorPrototype;
var create = __webpack_require__("b921");
var createPropertyDescriptor = __webpack_require__("5cbf");
var setToStringTag = __webpack_require__("1a81");
var Iterators = __webpack_require__("27c4");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "95bd":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "97c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "9800":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("fe3d");
var uid = __webpack_require__("95bd");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "989e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var toAbsoluteIndex = __webpack_require__("0119");
var toInteger = __webpack_require__("0296");
var toLength = __webpack_require__("c3a3");
var toObject = __webpack_require__("6050");
var arraySpeciesCreate = __webpack_require__("28ea");
var createProperty = __webpack_require__("8863");
var arrayMethodHasSpeciesSupport = __webpack_require__("4d7f");
var arrayMethodUsesToLength = __webpack_require__("c1e5");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "9985":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("6526");
var classof = __webpack_require__("4154");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "9a45":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("f71e").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "9b16":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("0bd5");
var redefine = __webpack_require__("4450");
var fails = __webpack_require__("2bc8");
var wellKnownSymbol = __webpack_require__("1f17");
var regexpExec = __webpack_require__("5133");
var createNonEnumerableProperty = __webpack_require__("d53e");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "9b42":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("9b16");
var anObject = __webpack_require__("fc3a");
var toObject = __webpack_require__("6050");
var toLength = __webpack_require__("c3a3");
var toInteger = __webpack_require__("0296");
var requireObjectCoercible = __webpack_require__("4340");
var advanceStringIndex = __webpack_require__("9a45");
var regExpExec = __webpack_require__("5fd8");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "9c6a":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("8b3a");
var enumBugKeys = __webpack_require__("65bb");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "9eee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ffc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("fc3a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "a09b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");
var getOwnPropertyDescriptor = __webpack_require__("e329").f;
var createNonEnumerableProperty = __webpack_require__("d53e");
var redefine = __webpack_require__("4450");
var setGlobal = __webpack_require__("0fca");
var copyConstructorProperties = __webpack_require__("e27c");
var isForced = __webpack_require__("0ef8");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "a543":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var $indexOf = __webpack_require__("6158").indexOf;
var arrayMethodIsStrict = __webpack_require__("f8b2");
var arrayMethodUsesToLength = __webpack_require__("c1e5");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "a717":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("c43f");
var createNonEnumerableProperty = __webpack_require__("d53e");
var has = __webpack_require__("b64f");
var wellKnownSymbol = __webpack_require__("1f17");
var IS_PURE = __webpack_require__("67d5");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aba0":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("2bc8");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "ae7c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b64f":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "b91c":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "b921":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fc3a");
var defineProperties = __webpack_require__("8587");
var enumBugKeys = __webpack_require__("65bb");
var hiddenKeys = __webpack_require__("0c09");
var html = __webpack_require__("beb6");
var documentCreateElement = __webpack_require__("4f3e");
var sharedKey = __webpack_require__("9800");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "b9ec":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "bc89":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fc3a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "beb6":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("8843");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "bfc3":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("1e51");
var IndexedObject = __webpack_require__("7866");
var toObject = __webpack_require__("6050");
var toLength = __webpack_require__("c3a3");
var arraySpeciesCreate = __webpack_require__("28ea");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "bffe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae7c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_3_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c119":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("1f17");
var create = __webpack_require__("b921");
var definePropertyModule = __webpack_require__("22af");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "c1d9":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("2bc8");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "c1e5":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("aba0");
var fails = __webpack_require__("2bc8");
var has = __webpack_require__("b64f");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "c3a3":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("0296");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "c43f":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b64f");
var toObject = __webpack_require__("6050");
var sharedKey = __webpack_require__("9800");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("cf67");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "c6a4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c726":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var $includes = __webpack_require__("6158").includes;
var addToUnscopables = __webpack_require__("c119");
var arrayMethodUsesToLength = __webpack_require__("c1e5");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var $filter = __webpack_require__("bfc3").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("4d7f");
var arrayMethodUsesToLength = __webpack_require__("c1e5");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "cca2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var IndexedObject = __webpack_require__("7866");
var toIndexedObject = __webpack_require__("ec87");
var arrayMethodIsStrict = __webpack_require__("f8b2");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "cf0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var createIteratorConstructor = __webpack_require__("9456");
var getPrototypeOf = __webpack_require__("c43f");
var setPrototypeOf = __webpack_require__("dbfe");
var setToStringTag = __webpack_require__("1a81");
var createNonEnumerableProperty = __webpack_require__("d53e");
var redefine = __webpack_require__("4450");
var wellKnownSymbol = __webpack_require__("1f17");
var IS_PURE = __webpack_require__("67d5");
var Iterators = __webpack_require__("27c4");
var IteratorsCore = __webpack_require__("a717");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "cf67":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("2bc8");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "d0bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("aba0");
var global = __webpack_require__("8d5c");
var isForced = __webpack_require__("0ef8");
var redefine = __webpack_require__("4450");
var has = __webpack_require__("b64f");
var classof = __webpack_require__("3d7c");
var inheritIfRequired = __webpack_require__("6564");
var toPrimitive = __webpack_require__("34e1");
var fails = __webpack_require__("2bc8");
var create = __webpack_require__("b921");
var getOwnPropertyNames = __webpack_require__("3de6").f;
var getOwnPropertyDescriptor = __webpack_require__("e329").f;
var defineProperty = __webpack_require__("22af").f;
var trim = __webpack_require__("9414").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "d53e":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("aba0");
var definePropertyModule = __webpack_require__("22af");
var createPropertyDescriptor = __webpack_require__("5cbf");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "d8a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("bfc3").forEach;
var arrayMethodIsStrict = __webpack_require__("f8b2");
var arrayMethodUsesToLength = __webpack_require__("c1e5");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "da02":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "dbfe":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("fc3a");
var aPossiblePrototype = __webpack_require__("15cc");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "dc9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"NODE_ENV":"production","BASE_URL":""}) && "production" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends(_extends({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends(_extends({}, schema), {}, {
          fullField: rule.fullField + "." + key
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message !== undefined) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends(_extends({}, fieldsSchema), data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;

/* harmony default export */ __webpack_exports__["a"] = (Schema);
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4c39")))

/***/ }),

/***/ "e27c":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("b64f");
var ownKeys = __webpack_require__("3449");
var getOwnPropertyDescriptorModule = __webpack_require__("e329");
var definePropertyModule = __webpack_require__("22af");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e329":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("aba0");
var propertyIsEnumerableModule = __webpack_require__("97c2");
var createPropertyDescriptor = __webpack_require__("5cbf");
var toIndexedObject = __webpack_require__("ec87");
var toPrimitive = __webpack_require__("34e1");
var has = __webpack_require__("b64f");
var IE8_DOM_DEFINE = __webpack_require__("5e7a");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "e469":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("8d5c");

module.exports = global;


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

/***/ "ec87":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("7866");
var requireObjectCoercible = __webpack_require__("4340");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "eee5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3d7c");
var global = __webpack_require__("8d5c");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "f71e":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("0296");
var requireObjectCoercible = __webpack_require__("4340");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "f7bb":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("6406");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "f8b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("2bc8");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "fae9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("a09b");
var IS_PURE = __webpack_require__("67d5");
var global = __webpack_require__("8d5c");
var getBuiltIn = __webpack_require__("8843");
var NativePromise = __webpack_require__("225c");
var redefine = __webpack_require__("4450");
var redefineAll = __webpack_require__("8573");
var setToStringTag = __webpack_require__("1a81");
var setSpecies = __webpack_require__("6d96");
var isObject = __webpack_require__("42cc");
var aFunction = __webpack_require__("b9ec");
var anInstance = __webpack_require__("da02");
var inspectSource = __webpack_require__("1c02");
var iterate = __webpack_require__("3afd");
var checkCorrectnessOfIteration = __webpack_require__("408b");
var speciesConstructor = __webpack_require__("287a");
var task = __webpack_require__("8acc").set;
var microtask = __webpack_require__("6f75");
var promiseResolve = __webpack_require__("20ca");
var hostReportErrors = __webpack_require__("5bfe");
var newPromiseCapabilityModule = __webpack_require__("3781");
var perform = __webpack_require__("1132");
var InternalStateModule = __webpack_require__("891c");
var isForced = __webpack_require__("0ef8");
var wellKnownSymbol = __webpack_require__("1f17");
var IS_NODE = __webpack_require__("eee5");
var V8_VERSION = __webpack_require__("029f");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
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
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "fc3a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("42cc");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "fe3d":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("67d5");
var store = __webpack_require__("755c");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ })

/******/ });
});
//# sourceMappingURL=lbr-vue-ui.umd.js.map
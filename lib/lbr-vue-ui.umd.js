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
/******/ 	return __webpack_require__(__webpack_require__.s = "c497");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "0857":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("a0e0");
var anObject = __webpack_require__("a013");
var $flags = __webpack_require__("f425");
var DESCRIPTORS = __webpack_require__("dad2");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("e5ef")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("b6f1")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "0b8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_7a6c33c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c455");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_7a6c33c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_7a6c33c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_button_vue_vue_type_style_index_0_id_7a6c33c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "0e44":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("88dd");
var anObject = __webpack_require__("a013");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("01f5")(Function.call, __webpack_require__("acb9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "14fc":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "1914":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1f98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("f425");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
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

/***/ "2f03":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var defined = __webpack_require__("f01a");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "339b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "34a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a013");
var toObject = __webpack_require__("db4b");
var toLength = __webpack_require__("b146");
var toInteger = __webpack_require__("c481");
var advanceStringIndex = __webpack_require__("b0f4");
var regExpExec = __webpack_require__("35dd");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("629c")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

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
    return $replace.call(replacement, symbols, function (match, ch) {
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

/***/ "35dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("4819");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


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

/***/ "3964":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a59":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("1f98");
__webpack_require__("b2f5")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


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

/***/ "3c53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_Scroller_vue_vue_type_style_index_0_id_50ca95e2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1914");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_Scroller_vue_vue_type_style_index_0_id_50ca95e2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_Scroller_vue_vue_type_style_index_0_id_50ca95e2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_Scroller_vue_vue_type_style_index_0_id_50ca95e2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3c6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a013");
var toLength = __webpack_require__("b146");
var advanceStringIndex = __webpack_require__("b0f4");
var regExpExec = __webpack_require__("35dd");

// @@match logic
__webpack_require__("629c")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
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

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var setPrototypeOf = __webpack_require__("0e44").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "4619":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("811e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_srcoll_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4713":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("03b3");
var toObject = __webpack_require__("db4b");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


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

/***/ "539d":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("b2f5");
var defined = __webpack_require__("f01a");
var fails = __webpack_require__("b6f1");
var spaces = __webpack_require__("c9ea");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "568a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("dad2") && !__webpack_require__("b6f1")(function () {
  return Object.defineProperty(__webpack_require__("e3e0")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


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

/***/ "629c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3a59");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var fails = __webpack_require__("b6f1");
var defined = __webpack_require__("f01a");
var wks = __webpack_require__("8b37");
var regexpExec = __webpack_require__("1f98");

var SPECIES = wks('species');

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

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
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
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
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

/***/ "7266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a7b8");
var descriptor = __webpack_require__("7dea");
var setToStringTag = __webpack_require__("6594");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("743d")(IteratorPrototype, __webpack_require__("8b37")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


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

/***/ "763b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3964");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7656":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ca2b");
var $export = __webpack_require__("b2f5");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var $iterCreate = __webpack_require__("7266");
var setToStringTag = __webpack_require__("6594");
var getPrototypeOf = __webpack_require__("4713");
var ITERATOR = __webpack_require__("8b37")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "7bc1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("22e9");
var anObject = __webpack_require__("a013");
var speciesConstructor = __webpack_require__("0d5f");
var advanceStringIndex = __webpack_require__("b0f4");
var toLength = __webpack_require__("b146");
var callRegExpExec = __webpack_require__("35dd");
var regexpExec = __webpack_require__("1f98");
var fails = __webpack_require__("b6f1");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("629c")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
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
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
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
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
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
});


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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

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

/***/ "9228":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_b2607874_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f476");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_b2607874_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_b2607874_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_message_vue_vue_type_style_index_0_id_b2607874_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "a0e0":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("dad2") && /./g.flags != 'g') __webpack_require__("ddf7").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("f425")
});


/***/ }),

/***/ "a4cc":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a7b8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("a013");
var dPs = __webpack_require__("bf29");
var enumBugKeys = __webpack_require__("b4e0");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("e3e0")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("265a").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a891":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("fb6d");
var hiddenKeys = __webpack_require__("b4e0").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "acb9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d217");
var createDesc = __webpack_require__("7dea");
var toIObject = __webpack_require__("3a68");
var toPrimitive = __webpack_require__("5325");
var has = __webpack_require__("03b3");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("dad2") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


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

/***/ "b0f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("2f03")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


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

/***/ "b4e0":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


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

/***/ "bde3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_7c816490_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fcd3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_7c816490_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_7c816490_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_lbr_loading_vue_vue_type_style_index_0_id_7c816490_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bf29":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var anObject = __webpack_require__("a013");
var getKeys = __webpack_require__("cfc7");

module.exports = __webpack_require__("dad2") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "bffe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("339b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_6_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_1_0_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c455":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7364");

// EXTERNAL MODULE: ./src/assets/css/public.scss
var css_public = __webpack_require__("9eee");

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

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-button/src/lbr-button.vue?vue&type=template&id=7a6c33c4&scoped=true&
var lbr_buttonvue_type_template_id_7a6c33c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:{'button':true,'min-button':_vm.min},on:{"click":_vm.click}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=template&id=7a6c33c4&scoped=true&

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
    },
    min: {
      type: Boolean,
      default: false
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
// EXTERNAL MODULE: ./src/packages/lbr-button/src/lbr-button.vue?vue&type=style&index=0&id=7a6c33c4&lang=scss&scoped=true&
var lbr_buttonvue_type_style_index_0_id_7a6c33c4_lang_scss_scoped_true_ = __webpack_require__("0b8d");

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
  lbr_buttonvue_type_template_id_7a6c33c4_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "7a6c33c4",
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=template&id=20708bd4&
var lbr_srcollvue_type_template_id_20708bd4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isPaging)?_c('scroller',{ref:"my_scroller",attrs:{"refreshText":_vm.refreshText,"noDataText":_vm.noDataText,"on-refresh":_vm.refresh,"on-infinite":_vm.loadMove}},[_vm._t("default")],2):_c('scroller',{ref:"my_scroller",attrs:{"on-refresh":_vm.refresh,"refreshText":_vm.refreshText,"noDataText":_vm.noDataText}},[_vm._t("default")],2)],1)}
var lbr_srcollvue_type_template_id_20708bd4_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/lbr-srcoll.vue?vue&type=template&id=20708bd4&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=template&id=50ca95e2&scoped=true&
var Scrollervue_type_template_id_50ca95e2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_v-container",attrs:{"id":_vm.containerId},on:{"touchstart":function($event){return _vm.touchStart($event)},"touchmove":function($event){return _vm.touchMove($event)},"touchend":function($event){return _vm.touchEnd($event)},"mousedown":function($event){return _vm.mouseDown($event)},"mousemove":function($event){return _vm.mouseMove($event)},"mouseup":function($event){return _vm.mouseUp($event)}}},[_c('div',{staticClass:"_v-content",attrs:{"id":_vm.contentId}},[(_vm.onRefresh)?_c('div',{staticClass:"pull-to-refresh-layer",class:{'active': _vm.state == 1, 'active refreshing': _vm.state == 2}},[_c('span',{staticClass:"spinner-holder"},[(_vm.state != 2)?_c('arrow',{staticClass:"arrow",attrs:{"fillColor":_vm.refreshLayerColor}}):_vm._e(),(_vm.state != 2)?_c('span',{staticClass:"text",style:({color: _vm.refreshLayerColor}),domProps:{"textContent":_vm._s(_vm.refreshText)}}):_vm._e(),(_vm.state == 2)?_c('span',[_vm._t("refresh-spinner",[_c('spinner',{style:({fill: _vm.refreshLayerColor, stroke: _vm.refreshLayerColor})})])],2):_vm._e()],1)]):_vm._e(),_vm._t("default"),(_vm.showInfiniteLayer)?_c('div',{staticClass:"loading-layer"},[_c('span',{staticClass:"spinner-holder",class:{'active': _vm.showLoading}},[_vm._t("infinite-spinner",[_c('spinner',{style:({fill: _vm.loadingLayerColor, stroke: _vm.loadingLayerColor})})])],2),_c('div',{staticClass:"no-data-text",class:{'active': !_vm.showLoading && _vm.loadingState == 2},style:({color: _vm.loadingLayerColor}),domProps:{"textContent":_vm._s(_vm.noDataText)}})]):_vm._e()],2)])}
var Scrollervue_type_template_id_50ca95e2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=template&id=50ca95e2&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("3c6b");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("0857");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("d4d5");

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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Spinner.vue?vue&type=template&id=6b590b30&
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Arrow.vue?vue&type=template&id=faf47c2e&
var Arrowvue_type_template_id_faf47c2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"enable-background":"new 0 0 63.657 63.657"},attrs:{"viewBox":"0 0 63.657 63.657","xml:space":"preserve","width":"512px","height":"512px"}},[_c('g',[_c('g',[_c('g',[_c('g',[_c('polygon',{attrs:{"points":"31.891,63.657 0.012,35.835 2.642,32.821 31.886,58.343 61.009,32.824 63.645,35.832","fill":_vm.fillColor}})])]),_c('g',[_c('g',[_c('rect',{attrs:{"x":"29.827","width":"4","height":"60","fill":_vm.fillColor}})])])]),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g')]),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g'),_c('g')])}
var Arrowvue_type_template_id_faf47c2e_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-load-moves/src/components/Arrow.vue?vue&type=template&id=faf47c2e&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Arrow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-load-moves/src/components/Scroller.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  lbr_srcollvue_type_template_id_20708bd4_render,
  lbr_srcollvue_type_template_id_20708bd4_staticRenderFns,
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

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-message/src/lbr-message.vue?vue&type=template&id=b2607874&scoped=true&
var lbr_messagevue_type_template_id_b2607874_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"message",class:_vm.type},[_vm._v("\n    "+_vm._s(_vm.text)+"\n  ")])])}
var lbr_messagevue_type_template_id_b2607874_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-message/src/lbr-message.vue?vue&type=template&id=b2607874&scoped=true&

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
// EXTERNAL MODULE: ./src/packages/lbr-message/src/lbr-message.vue?vue&type=style&index=0&id=b2607874&scoped=true&lang=scss&
var lbr_messagevue_type_style_index_0_id_b2607874_scoped_true_lang_scss_ = __webpack_require__("9228");

// CONCATENATED MODULE: ./src/packages/lbr-message/src/lbr-message.vue






/* normalize component */

var lbr_message_component = normalizeComponent(
  src_lbr_messagevue_type_script_lang_js_,
  lbr_messagevue_type_template_id_b2607874_scoped_true_render,
  lbr_messagevue_type_template_id_b2607874_scoped_true_staticRenderFns,
  false,
  null,
  "b2607874",
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=template&id=7c816490&scoped=true&
var lbr_loadingvue_type_template_id_7c816490_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('div',{staticClass:"loading-container",class:{'visible': _vm.state == 1, 'visible active': _vm.state == 2}},[_c('div',{staticClass:"loading"},[_c('div',[_c('div',{staticClass:"spinner spinner-ios"},[_c('svg',{attrs:{"viewBox":"0 0 64 64"}},[_c('g',{attrs:{"stroke-width":"4","stroke-linecap":"round"}},[_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(180)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(210)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(240)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(270)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(300)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(330)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(0)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(30)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(60)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(90)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(120)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85","repeatCount":"indefinite"}})]),_c('line',{attrs:{"y1":"17","y2":"29","transform":"translate(32,32) rotate(150)"}},[_c('animate',{attrs:{"attributeName":"stroke-opacity","dur":"750ms","values":"1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1","repeatCount":"indefinite"}})])])])]),(_vm.title)?_c('div',{staticClass:"tips",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e()])])]):_vm._e()])}
var lbr_loadingvue_type_template_id_7c816490_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=template&id=7c816490&scoped=true&

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
// EXTERNAL MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue?vue&type=style&index=0&id=7c816490&lang=scss&scoped=true&
var lbr_loadingvue_type_style_index_0_id_7c816490_lang_scss_scoped_true_ = __webpack_require__("bde3");

// CONCATENATED MODULE: ./src/packages/lbr-loading/src/lbr-loading.vue






/* normalize component */

var lbr_loading_component = normalizeComponent(
  src_lbr_loadingvue_type_script_lang_js_,
  lbr_loadingvue_type_template_id_7c816490_scoped_true_render,
  lbr_loadingvue_type_template_id_7c816490_scoped_true_staticRenderFns,
  false,
  null,
  "7c816490",
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/index.vue?vue&type=template&id=6625e4fc&
var srcvue_type_template_id_6625e4fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item item-borderless item-input",attrs:{"von-datepicker":""},on:{"click":function($event){return _vm.showPicker()}}},[(_vm.label != '')?_c('span',{staticClass:"input-label",domProps:{"textContent":_vm._s(_vm.label)}}):_vm._e(),_c('input',{ref:"datetime",attrs:{"type":"datetime"},domProps:{"value":_vm.v}}),_c('span',{domProps:{"textContent":_vm._s(_vm.formatedDate)}}),_c('div',{staticClass:"hairline-top"}),_c('div',{staticClass:"hairline-bottom"})])}
var srcvue_type_template_id_6625e4fc_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/index.vue?vue&type=template&id=6625e4fc&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("7bc1");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/Picker.vue?vue&type=template&id=ceb40ba0&
var Pickervue_type_template_id_ceb40ba0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"von-datepicker",class:{'active': _vm.state == 1},attrs:{"von-picker":""}},[_c('div',{staticClass:"dp-header"},[_c('button',{staticClass:"button button-clear button-stable",on:{"click":function($event){return _vm.cancel()}}},[_vm._t("cancel",[_vm._v("\n        取消\n      ")])],2),_c('button',{staticClass:"button button-clear button-balanced btn-confirm",on:{"click":function($event){return _vm.confirm()}}},[_vm._t("confirm",[_vm._v("\n        确定\n      ")])],2)]),_c('div',{staticClass:"dp-body"},[_c('scroller',{ref:"y_scroller",staticClass:"dp-list dp-years",attrs:{"snapping":_vm.snapping,"snapHeight":_vm.snapHeight,"animation-duration":_vm.animationDuration,"width":"34%"}},_vm._l((_vm.years),function(y,index){return _c('div',{key:index,staticClass:"dp-item",domProps:{"textContent":_vm._s(y)}})}),0),_c('scroller',{ref:"m_scroller",staticClass:"dp-list dp-months",attrs:{"snapping":_vm.snapping,"snapHeight":_vm.snapHeight,"animationDuration":_vm.animationDuration,"width":"33%"}},_vm._l((_vm.months),function(m,index){return _c('div',{key:index,staticClass:"dp-item",domProps:{"textContent":_vm._s(m)}})}),0),_c('scroller',{ref:"d_scroller",staticClass:"dp-list dp-dates",attrs:{"snapping":_vm.snapping,"snapHeight":_vm.snapHeight,"animationDuration":_vm.animationDuration,"width":"33%"}},_vm._l((_vm.dates),function(d,index){return _c('div',{key:index,staticClass:"dp-item",domProps:{"textContent":_vm._s(d)}})}),0)],1)])}
var Pickervue_type_template_id_ceb40ba0_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/Picker.vue?vue&type=template&id=ceb40ba0&

// CONCATENATED MODULE: ./src/packages/lbr-datepicker/src/channel.js

var channel_vm = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var channel = (channel_vm);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/Picker.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-datepicker/src/index.vue?vue&type=script&lang=js&

//
//
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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe.vue?vue&type=template&id=78efbbc2&
var swipevue_type_template_id_78efbbc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lbr-swipe"},[_c('div',{ref:"wrap",staticClass:"lbr-swipe-items-wrap"},[_vm._t("default")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showIndicators),expression:"showIndicators"}],staticClass:"lbr-swipe-indicators"},_vm._l((_vm.pages),function(page,$index){return _c('div',{key:$index,staticClass:"lbr-swipe-indicator",class:{ 'is-active': $index === _vm.index }})}),0)])}
var swipevue_type_template_id_78efbbc2_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe.vue?vue&type=template&id=78efbbc2&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("f763");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.4.5@@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("34a3");

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
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe.vue?vue&type=script&lang=js&


//
//
//
//
//
//
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
      var _this3 = this,
          _arguments = arguments;

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
  swipevue_type_template_id_78efbbc2_render,
  swipevue_type_template_id_78efbbc2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swipe = (swipe_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-swipe/index.js

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"681366e2-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe-item.vue?vue&type=template&id=4deea131&
var swipe_itemvue_type_template_id_4deea131_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lbr-swipe-item"},[_vm._t("default")],2)}
var swipe_itemvue_type_template_id_4deea131_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/lbr-swipe/src/swipe-item.vue?vue&type=template&id=4deea131&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/packages/lbr-swipe/src/swipe-item.vue?vue&type=script&lang=js&
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
  swipe_itemvue_type_template_id_4deea131_render,
  swipe_itemvue_type_template_id_4deea131_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swipe_item = (swipe_item_component.exports);
// CONCATENATED MODULE: ./src/packages/lbr-swipe-item/index.js

// CONCATENATED MODULE: ./src/packages/index.js










 // import picker from './picker'
// 存储组件列表

var components = [packages_lbr_button, lbr_srcoll, lbr_datepicker, swipe, swipe_item];

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
  LbrLoading: packages_lbr_loading
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.8.4@@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport vTap */__webpack_require__.d(__webpack_exports__, "vTap", function() { return v_tap_default.a; });
/* concated harmony reexport LbrMessage */__webpack_require__.d(__webpack_exports__, "LbrMessage", function() { return packages_lbr_message; });
/* concated harmony reexport LbrLoading */__webpack_require__.d(__webpack_exports__, "LbrLoading", function() { return packages_lbr_loading; });
/* concated harmony reexport LbrButton */__webpack_require__.d(__webpack_exports__, "LbrButton", function() { return packages_lbr_button; });
/* concated harmony reexport LbrSrcoll */__webpack_require__.d(__webpack_exports__, "LbrSrcoll", function() { return lbr_srcoll; });
/* concated harmony reexport lbrDatepicker */__webpack_require__.d(__webpack_exports__, "lbrDatepicker", function() { return lbr_datepicker; });
/* concated harmony reexport LbrSwipe */__webpack_require__.d(__webpack_exports__, "LbrSwipe", function() { return swipe; });
/* concated harmony reexport LbrSwipeItem */__webpack_require__.d(__webpack_exports__, "LbrSwipeItem", function() { return swipe_item; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_packages);



/***/ }),

/***/ "c9ea":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ca2b":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "cfc7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("fb6d");
var enumBugKeys = __webpack_require__("b4e0");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "d217":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d4d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var has = __webpack_require__("03b3");
var cof = __webpack_require__("94ac");
var inheritIfRequired = __webpack_require__("44de");
var toPrimitive = __webpack_require__("5325");
var fails = __webpack_require__("b6f1");
var gOPN = __webpack_require__("a891").f;
var gOPD = __webpack_require__("acb9").f;
var dP = __webpack_require__("ddf7").f;
var $trim = __webpack_require__("539d").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("a7b8")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("dad2") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("e5ef")(global, NUMBER, $Number);
}


/***/ }),

/***/ "dac5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("644a");
var step = __webpack_require__("e650");
var Iterators = __webpack_require__("14fc");
var toIObject = __webpack_require__("3a68");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("7656")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


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

/***/ "db4b":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return Object(defined(it));
};


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

/***/ "dfab":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("adbd")('keys');
var uid = __webpack_require__("9d01");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


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

/***/ "e650":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


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

/***/ "f01a":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
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


/***/ }),

/***/ "f425":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("a013");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "f476":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f763":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("dac5");
var getKeys = __webpack_require__("cfc7");
var redefine = __webpack_require__("e5ef");
var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var wks = __webpack_require__("8b37");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "fb6d":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("03b3");
var toIObject = __webpack_require__("3a68");
var arrayIndexOf = __webpack_require__("9f58")(false);
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "fcd3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=lbr-vue-ui.umd.js.map
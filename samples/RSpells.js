/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/is/index.js":
/*!**********************************!*\
  !*** ./node_modules/is/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals window, HTMLElement */



/**!
 * is
 * the definitive JavaScript type testing library
 *
 * @copyright 2013-2014 Enrico Marino / Jordan Harband
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf;
if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}
var bigIntValueOf;
if (typeof BigInt === 'function') {
  bigIntValueOf = BigInt.prototype.valueOf;
}
var isActualNaN = function (value) {
  return value !== value;
};
var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};

var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;

/**
 * Expose `is`
 */

var is = {};

/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {*} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return typeof value === type;
};

/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

is.defined = function (value) {
  return typeof value !== 'undefined';
};

/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */

is.empty = function (value) {
  var type = toStr.call(value);
  var key;

  if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
    return value.length === 0;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (owns.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  return !value;
};

/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {*} value value to test
 * @param {*} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */

is.equal = function equal(value, other) {
  if (value === other) {
    return true;
  }

  var type = toStr.call(value);
  var key;

  if (type !== toStr.call(other)) {
    return false;
  }

  if (type === '[object Object]') {
    for (key in value) {
      if (!is.equal(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!is.equal(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Array]') {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (key--) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }

  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }

  return false;
};

/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {*} value to test
 * @param {*} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */

is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};

/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */

is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};

/**
 * is.nil / is.null
 * Test if `value` is null.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */

is.nil = is['null'] = function (value) {
  return value === null;
};

/**
 * is.undef / is.undefined
 * Test if `value` is undefined.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */

is.undef = is.undefined = function (value) {
  return typeof value === 'undefined';
};

/**
 * Test arguments.
 */

/**
 * is.args
 * Test if `value` is an arguments object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.args = is.arguments = function (value) {
  var isStandardArguments = toStr.call(value) === '[object Arguments]';
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};

/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */

is.array = Array.isArray || function (value) {
  return toStr.call(value) === '[object Array]';
};

/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */
is.args.empty = function (value) {
  return is.args(value) && value.length === 0;
};

/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */
is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};

/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arraylike = function (value) {
  return !!value && !is.bool(value)
    && owns.call(value, 'length')
    && isFinite(value.length)
    && is.number(value.length)
    && value.length >= 0;
};

/**
 * Test boolean.
 */

/**
 * is.bool
 * Test if `value` is a boolean.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */

is.bool = is['boolean'] = function (value) {
  return toStr.call(value) === '[object Boolean]';
};

/**
 * is.false
 * Test if `value` is false.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */

is['false'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === false;
};

/**
 * is.true
 * Test if `value` is true.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */

is['true'] = function (value) {
  return is.bool(value) && Boolean(Number(value)) === true;
};

/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */

is.date = function (value) {
  return toStr.call(value) === '[object Date]';
};

/**
 * is.date.valid
 * Test if `value` is a valid date.
 *
 * @param {*} value value to test
 * @returns {Boolean} true if `value` is a valid date, false otherwise
 */
is.date.valid = function (value) {
  return is.date(value) && !isNaN(Number(value));
};

/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */

is.element = function (value) {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
};

/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */

is.error = function (value) {
  return toStr.call(value) === '[object Error]';
};

/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */

is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  if (isAlert) {
    return true;
  }
  var str = toStr.call(value);
  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
};

/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */

is.number = function (value) {
  return toStr.call(value) === '[object Number]';
};

/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */
is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */

is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};

/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */

is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
};

/**
 * is.integer
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */

is.integer = is['int'] = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};

/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */

is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */

is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};

/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value >= other;
};

/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value > other;
};

/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */

is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value <= other;
};

/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */

is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value < other;
};

/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */
is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }
  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || (value >= start && value <= finish);
};

/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */
is.object = function (value) {
  return toStr.call(value) === '[object Object]';
};

/**
 * is.primitive
 * Test if `value` is a primitive.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a primitive, false otherwise
 * @api public
 */
is.primitive = function isPrimitive(value) {
  if (!value) {
    return true;
  }
  if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
    return false;
  }
  return true;
};

/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */

is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};

/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */

is.regexp = function (value) {
  return toStr.call(value) === '[object RegExp]';
};

/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */

is.string = function (value) {
  return toStr.call(value) === '[object String]';
};

/**
 * Test base64 string.
 */

/**
 * is.base64
 * Test if `value` is a valid base64 encoded string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a base64 encoded string, false otherwise
 * @api public
 */

is.base64 = function (value) {
  return is.string(value) && (!value.length || base64Regex.test(value));
};

/**
 * Test base64 string.
 */

/**
 * is.hex
 * Test if `value` is a valid hex encoded string.
 *
 * @param {*} value value to test
 * @return {Boolean} true if 'value' is a hex encoded string, false otherwise
 * @api public
 */

is.hex = function (value) {
  return is.string(value) && (!value.length || hexRegex.test(value));
};

/**
 * is.symbol
 * Test if `value` is an ES6 Symbol
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a Symbol, false otherise
 * @api public
 */

is.symbol = function (value) {
  return typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol';
};

/**
 * is.bigint
 * Test if `value` is an ES-proposed BigInt
 *
 * @param {*} value value to test
 * @return {Boolean} true if `value` is a BigInt, false otherise
 * @api public
 */

is.bigint = function (value) {
  // eslint-disable-next-line valid-typeof
  return typeof BigInt === 'function' && toStr.call(value) === '[object BigInt]' && typeof bigIntValueOf.call(value) === 'bigint';
};

module.exports = is;


/***/ }),

/***/ "./node_modules/nanoid/format.js":
/*!***************************************!*\
  !*** ./node_modules/nanoid/format.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Secure random string generator with custom alphabet.
 *
 * Alphabet must contain 256 symbols or less. Otherwise, the generator
 * will not be secure.
 *
 * @param {generator} random The random bytes generator.
 * @param {string} alphabet Symbols to be used in new random string.
 * @param {size} size The number of symbols in new random string.
 *
 * @return {string} Random string.
 *
 * @example
 * const format = require('nanoid/format')
 *
 * function random (size) {
 *   const result = []
 *   for (let i = 0; i < size; i++) {
 *     result.push(randomByte())
 *   }
 *   return result
 * }
 *
 * format(random, "abcdef", 5) //=> "fbaef"
 *
 * @name format
 * @function
 */
module.exports = function (random, alphabet, size) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  var step = Math.ceil(1.6 * mask * size / alphabet.length)
  size = +size

  var id = ''
  while (true) {
    var bytes = random(step)
    for (var i = 0; i < step; i++) {
      var byte = bytes[i] & mask
      if (alphabet[byte]) {
        id += alphabet[byte]
        if (id.length === size) return id
      }
    }
  }
}

/**
 * @callback generator
 * @param {number} bytes The number of bytes to generate.
 * @return {number[]} Random bytes.
 */


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.9.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be converted to ReactError during
// build, and in production they will be minified.

function ReactError(error) {
  error.name = 'Invariant Violation';
  return error;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  (function () {
    if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
      {
        throw ReactError(Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.'));
      }
    }
  })();
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
          break;
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */

var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */


/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */
function jsxDEV(type, config, maybeKey, source, self) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;

  if (hasValidRef(config)) {
    ref = config.ref;
  }

  if (hasValidKey(config)) {
    key = '' + config.key;
  }

  // Remaining properties are added to a new props object
  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  }

  // intentionally not checking if key was set above
  // this key is higher priority as it's static
  if (maybeKey !== undefined) {
    key = '' + maybeKey;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (key || ref) {
    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
    if (key) {
      defineKeyPropWarningGetter(props, displayName);
    }
    if (ref) {
      defineRefPropWarningGetter(props, displayName);
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  (function () {
    if (!!(element === null || element === undefined)) {
      {
        throw ReactError(Error('React.cloneElement(...): The argument must be a React element, but you passed ' + element + '.'));
      }
    }
  })();

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      (function () {
        {
          {
            throw ReactError(Error('Objects are not valid as a React child (found: ' + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ').' + addendum));
          }
        }
      })();
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  (function () {
    if (!isValidElement(children)) {
      {
        throw ReactError(Error('React.Children.only expected to receive a single React element child.'));
      }
    }
  })();
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  (function () {
    if (!(dispatcher !== null)) {
      {
        throw ReactError(Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.'));
      }
    }
  })();
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var emptyObject$1 = {};

function useResponder(responder, listenerProps) {
  var dispatcher = resolveDispatcher();
  {
    if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
      warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
      return;
    }
  }
  return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
}

// Within the scope of the callback, mark all updates as being allowed to suspend.
function withSuspenseConfig(scope, config) {
  var previousConfig = ReactCurrentBatchConfig.suspense;
  ReactCurrentBatchConfig.suspense = config === undefined ? null : config;
  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.suspense = previousConfig;
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(source);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = jsxDEV(type, props, key, source, self);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    var children = props.children;
    if (children !== undefined) {
      if (isStaticChildren) {
        for (var i = 0; i < children.length; i++) {
          validateChildKeys(children[i], type);
        }
      } else {
        validateChildKeys(children, type);
      }
    }
  }

  if (props.key !== undefined) {
    warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

// These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.
function jsxWithValidationStatic(type, props, key) {
  return jsxWithValidation(type, props, key, true);
}

function jsxWithValidationDynamic(type, props, key) {
  return jsxWithValidation(type, props, key, false);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var hasBadMapPolyfill = void 0;

{
  hasBadMapPolyfill = false;
  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]);
    // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.
    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

function createFundamentalComponent(impl) {
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if ( true && !hasBadMapPolyfill) {
    Object.freeze(impl);
  }
  var fundamantalComponent = {
    $$typeof: REACT_FUNDAMENTAL_TYPE,
    impl: impl
  };
  {
    Object.freeze(fundamantalComponent);
  }
  return fundamantalComponent;
}

function createEventResponder(displayName, responderConfig) {
  var getInitialState = responderConfig.getInitialState,
      onEvent = responderConfig.onEvent,
      onMount = responderConfig.onMount,
      onUnmount = responderConfig.onUnmount,
      onOwnershipChange = responderConfig.onOwnershipChange,
      onRootEvent = responderConfig.onRootEvent,
      rootEventTypes = responderConfig.rootEventTypes,
      targetEventTypes = responderConfig.targetEventTypes;

  var eventResponder = {
    $$typeof: REACT_RESPONDER_TYPE,
    displayName: displayName,
    getInitialState: getInitialState || null,
    onEvent: onEvent || null,
    onMount: onMount || null,
    onOwnershipChange: onOwnershipChange || null,
    onRootEvent: onRootEvent || null,
    onUnmount: onUnmount || null,
    rootEventTypes: rootEventTypes || null,
    targetEventTypes: targetEventTypes || null
  };
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if ( true && !hasBadMapPolyfill) {
    Object.freeze(eventResponder);
  }
  return eventResponder;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// Disable javascript: URL strings in href for XSS protection.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.




// See https://github.com/react-native-community/discussions-and-proposals/issues/72 for more information
// This is a flag so we can fix warnings in RN core before turning it on


// Experimental React Flare event system and event components support.
var enableFlareAPI = false;

// Experimental Host Component support.
var enableFundamentalAPI = false;

// New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
var enableJSXTransformAPI = false;

// We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a sync mode compatible version

// Temporary flag to revert the fix in #15650


// For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.


// Changes priority of some events like mousemove to user-blocking priority,
// but without making them discrete. The flag exists in case it causes
// starvation problems.


// Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.


// Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  Profiler: REACT_PROFILER_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  unstable_SuspenseList: REACT_SUSPENSE_LIST_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_withSuspenseConfig: withSuspenseConfig,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (enableFlareAPI) {
  React.unstable_useResponder = useResponder;
  React.unstable_createResponder = createEventResponder;
}

if (enableFundamentalAPI) {
  React.unstable_createFundamental = createFundamentalComponent;
}

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableJSXTransformAPI) {
  {
    React.jsxDEV = jsxWithValidation;
    React.jsx = jsxWithValidationDynamic;
    React.jsxs = jsxWithValidationStatic;
  }
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/rescope/dist/reScope.js":
/*!**********************************************!*\
  !*** ./node_modules/rescope/dist/reScope.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports=function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s(s.s=14)}([function(t,e){t.exports=__webpack_require__(/*! is */ "./node_modules/is/index.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js")},function(t,e,s){"use strict";s.r(e),s.d(e,"walknSet",function(){return o}),s.d(e,"walknGet",function(){return a}),s.d(e,"keyWalknSet",function(){return c}),s.d(e,"keyWalknGet",function(){return u});var i=s(1),r=s.n(i),n=s(0);function o(t,e,s,i){return n.string(e)&&(e=e.split(".")),!!e.length&&(1==e.length?t[e[0]]=i?[].concat(r()(t[e[0]]||[]),[s]):s:o(t[e[0]]=t[e[0]]||{},e.slice(1),s,i))}function a(t,e,s){return n.string(e)&&(e=e.split(".")),e.length?t[e[0]]&&a(t[e[0]],e.slice(1)):t}function c(t,e,s,i){return n.string(e)&&(e=e.split(/(\>|\/)/gi).filter(function(t){return">"!==t&&t})),o(t,e,s)}function u(t,e,s){return n.string(e)&&(e=e.split(/(\>|\/)/gi).filter(function(t){return">"!==t&&t})),e.length?t[e[0]]&&a(t[e[0]],e.slice(1)):t}!function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var s=void 0!==e?e:exports;if(s)if("function"!=typeof s){for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var r=void 0;try{r=s[i]}catch(t){continue}t.register(r,i,"G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\utils.js")}}else t.register(s,"module.exports","G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\utils.js")}}()},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js")},function(t,e){t.exports=__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js")},function(t,e){t.exports=__webpack_require__(/*! shortid */ "./node_modules/shortid/index.js")},function(t,e,s){"use strict";s.r(e),s.d(e,"default",function(){return h});var i=s(1),r=s.n(i),n=s(7),o=s.n(n),a=s(6),c=s.n(a),u=s(0),l=s.n(u),h=function(){function t(){o()(this,t),this._events={}}return c()(t,[{key:"on",value:function(t,e){var s=this;if(!l.a.string(t)&&t)return Object.keys(t).forEach(function(e){return s.on(e,t[e])});this._events[t]=this._events[t]||[],this._events[t].push(e)}},{key:"un",value:function(t,e){var s=this;if(!l.a.string(t)&&t)return Object.keys(t).forEach(function(e){return s.un(e,t[e])});if(this._events[t]){var i=this._events[t].indexOf(e);this._events[t].splice(i,1)}}},{key:"emit",value:function(t){if(this._events[t]){for(var e=r()(this._events[t]),s=arguments.length,i=new Array(s>1?s-1:0),n=1;n<s;n++)i[n-1]=arguments[n];for(var o=0;o<e.length;o++)e[o].apply(e,i)}}},{key:"addListener",value:function(){this.on.apply(this,arguments)}},{key:"removeListener",value:function(){this.un.apply(this,arguments)}},{key:"removeAllListeners",value:function(){this._events={}}},{key:"once",value:function(t,e){var s,i=this;this.on(t,s=function(){i.un(t,s),e.apply(void 0,arguments)})}}]),t}();!function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var s=void 0!==e?e:exports;if(s)if("function"!=typeof s){for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var r=void 0;try{r=s[i]}catch(t){continue}t.register(r,i,"G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\Emitter.js")}}else t.register(s,"module.exports","G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\Emitter.js")}}()},function(t,e,s){"use strict";s.r(e);var i=s(1),r=s.n(i),n=s(3),o=s.n(n),a=s(7),c=s.n(a),u=s(8),l=s.n(u),h=s(5),f=s.n(h),p=s(4),d=s.n(p),_=s(6),v=s.n(_),y=s(10),b=s.n(y),g=s(0),m=s.n(g),k=s(11),S=s.n(k),w=s(12),O=s(2);function j(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,i)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?j(s,!0).forEach(function(e){o()(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):j(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var x=function(t,e,s){var i=function(){};i.prototype=s?new s._[e]:t[e]||{},t[e]=new i,t._[e]=i},C={},E=function(t){function e(t){var s,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.parent,n=i.upperScope,o=i.key,a=i.id,u=i.snapshot,h=i.state,p=i.data,_=i.incrementId,v=void 0===_?!!o:_,y=i.persistenceTm,b=i.autoDestroy,g=i.rootEmitter,k=i.boundedActions;c()(this,e),s=l()(this,f()(e).call(this));var w={keyPID:n&&n._id||r&&r._id||S.a.generate(),key:o,incrementId:v,baseId:a};if(a=a||o&&w.keyPID+">"+o,w.isLocalId=!a,a=a||"_____"+S.a.generate(),C[a]&&!v)return s._id=a,C[a].register(t),l()(s,C[a]);if(C[a]&&v){for(var O=-1;C[a+"["+ ++O+"]"];);a=a+"["+O+"]"}if(C[a]=d()(s),s._id=a,s._rev=0,s._=w,s.actions={},s.stores={},s.state={},s.data={},s.parent=r,"inherit"==b&&(b=r&&r._autoDestroy),s._autoDestroy=b,w.persistenceTm=y||s.constructor.persistenceTm,r&&r.dead)throw new Error("Can't use a dead scope as parent !");return x(d()(s),"actions",r),x(d()(s),"stores",r),x(d()(s),"state",r),x(d()(s),"data",r),s.sources=[],w.childScopes=[],w.childScopesList=[],w.unStableChilds=0,w.seenChilds=0,w._listening={},w._scope={},w._mixed=[],w._mixedList=[],w.followers=[],s.__retains={all:0},s.__locks={all:1},w._boundedActions=m.a.array(k)?{test:k.includes.bind(k)}:k,r&&(r.retain("isMyParent"),g?r.on(w._parentList={update:function(t){return s._propag()}}):(!r._stable&&s.wait("waitingParent"),r.on(w._parentList={stable:function(t){return s.release("waitingParent")},unstable:function(t){return s.wait("waitingParent")},update:function(t){return s._propag()}}))),s.register(t,h,p),s.__locks.all--,s._stable=!s.__locks.all,r&&r._addChild(d()(s)),s.restore(u),b&&setTimeout(function(t){s.retain("autoDestroy"),s.dispose("autoDestroy")}),s}return b()(e,t),v()(e,null,[{key:"stateMapToRefList",value:function(t){var s,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return Object.keys(t).forEach(function(a){var c=o?o+"."+a:a;t[a]instanceof e.scopeRef?r.push(t[a].path+":"+c):t[a]&&t[a]instanceof Function?"$apply"==a?s=t[a]:n[a]=t[a]:t[a]&&t[a].prototype instanceof e.Store?r.push(t[a].as(c)):i[c]=t[a]}),s}},{key:"getScope",value:function(t){var s=m.a.array(t)?t.sort(function(t,e){return t.firstname<e.firstname?-1:t.firstname>e.firstname?1:0}).join("+"):t;return C[s]=C[s]||new e({},{id:s})}}]),v()(e,[{key:"mount",value:function(t,e,s,i){var r=this;return m.a.array(t)?t.forEach(function(t){return r._mount(t,e,s,i)}):this._mount.apply(this,arguments),this}},{key:"_mount",value:function(t,s,i,r){var n,o=this._;if(n=this.parseRef(t),"$parent"!=t){if(!o._scope[n.storeId]){var a;if(o._mixed.reduceRight(function(e,n){return e||n._mount(t,s,i,r)},!1)||!this.parent)return;return(a=this.parent)._mount.apply(a,arguments)}var c=o._scope[n.storeId],u=[];if(e.isStoreClass(c))for(o._scope[n.storeId]=new c(this,{name:n.storeId,state:i,data:r},u);u.length;)u.shift()();else e.isScopeClass(c)&&(c=o._scope[n.storeId]=new c({$parent:this},{key:n.storeId,incrementId:!0,upperScope:this}),n.path.length>1&&o._scope[n.storeId].mount(n.path.slice(1).join("."),s,i,r));return e.isStore(c)&&(void 0!==i&&void 0===r?c.setState(i):void 0!==i&&(c.state=i),void 0!==r&&c.push(r)),e.isScope(c)&&(void 0!==i&&c.setState(i),n.path.length>1&&c._mount(n.path.slice(1).join("."))),this._watchStore(n.storeId),o._scope[n.storeId]}}},{key:"register",value:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.relink(t,this,!1,!1),Object.keys(t).forEach(function(r){"$parent"!=r&&(t[r].singleton||m.a.fn(t[r])&&(s[r]||i[r])?e._mount(r,void 0,s[r],i[r]):s[r]||i[r]?i[r]?(s[r]&&(e.stores[r].state=s[r]),e.stores[r].push(i[r])):s[r]&&e.stores[r].setState(s[r]):e._watchStore(r))})}},{key:"relink",value:function(t){var s=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=this._;Object.keys(t).forEach(function(a){var c,u;if(!(!n&&i._._scope[a]===t[a]||i._._scope[a]&&i._._scope[a].constructor===t[a])){if(!n&&i._._scope[a]?r||m.a.fn(i._._scope[a])?!r&&m.a.fn(i._._scope[a])&&(i._._scope[a]=t[a]):(i._._scope[a].__proto__=t[a].prototype,i._._scope[a].__onHotReloaded&&i._._scope[a].__onHotReloaded(t[a])):n||r||(o._scope[a]=t[a]),Object.defineProperty(i._.stores.prototype,a,{enumerable:!0,configurable:!0,get:function(){return o._scope[a]}}),u=i._.actions.prototype,"$parent"!==a){if(Object.defineProperty(i._.state.prototype,a,{enumerable:!0,configurable:!0,get:function(){return o._scope[a]&&o._scope[a].state},set:function(t){return s._mount(a,void 0,t)}}),Object.defineProperty(i._.data.prototype,a,{enumerable:!0,configurable:!0,get:function(){return o._scope[a]&&o._scope[a].data},set:function(t){return s._mount(a,void 0,void 0,t)}}),c=t[a]instanceof e.Store?t[a].constructor.actions:t[a].actions,e.isScopeClass(o._scope[a])&&s._mount(a),e.isScope(o._scope[a]))u[a]=o._scope[a].actions;else if(!e.isStore(o._scope[a])&&!e.isStoreClass(o._scope[a]))return;c&&Object.keys(c).forEach(function(t){u.hasOwnProperty(t)?u[t].__targetStores++:(u[t]=s.dispatch.bind(s,t),u[t].__targetStores=1)})}else u[a]=t[a].actions;void 0}})}},{key:"_watchStore",value:function(t){var e=this,s=this._;return s._listening[t]||m.a.fn(s._scope[t])||(!s._scope[t]._autoDestroy&&s._scope[t].retain("scoped"),!s._scope[t].isStable()&&this.wait(t),s._scope[t].on(s._listening[t]={destroy:function(e){delete s._listening[t],s._scope[t]=s._scope[t].constructor},update:function(t){return e.propag()},stable:function(s){return e.release(t)},unstable:function(s){return e.wait(t)}})),!0}},{key:"mixin",value:function(t){var e,s=this,i=this.parent,r=this._;r._mixed.push(t),t.retain("mixedTo"),t._stable||this.wait(t._id),r._mixedList.push(e={stable:function(e){return s.release(t._id)},unstable:function(e){return s.wait(t._id)},update:function(t){return s._propag()}}),t.on(e),x(this,"actions",i),x(this,"stores",i),x(this,"state",i),x(this,"data",i),this.relink(r._scope,this,!1,!0),r._mixed.forEach(function(t){x(s,"actions"),x(s,"stores"),x(s,"state"),x(s,"data"),s.stores.__origin="mixed "+t._id,t.relink(t._._scope,s,!0,!0)})}},{key:"bind",value:function(t,e,s){var i,r,n,a=this,c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(e&&!m.a.array(e)&&(e=[e]),!1!==s&&!0!==s||(c=s,s=null),n=e.map(function(t){return m.a.string(t)?t:t.name}).map(function(t){return a.parseRef(t)}),this._.followers.push([t,e,s||void 0,i=n.reduce(function(t,e){return t[e.storeId]=t[e.storeId]||{rev:0,refs:[]},t[e.storeId].refs.push(e),t},u)]),this.mount(e),this.retainStores(Object.keys(i),"listeners"),c&&this._stable){if(!(r=this.getUpdates(i)))return this;"function"!=typeof t?s?t.setState(o()({},s,r)):t.setState(r):t(r)}return this}},{key:"unBind",value:function(t,e,s){for(var i=this._.followers,r=i&&i.length;i&&r--;)if(i[r][0]===t&&""+i[r][1]==""+e&&i[r][2]==s)return this.disposeStores(Object.keys(i[r][3]),"listeners"),i.splice(r,1)}},{key:"map",value:function(t,e){var s=this,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3?arguments[3]:void 0,n=this.constructor.Store,o=(e=m.a.array(e)?e:[e]).map(this.parseRef);if(this.mount(e),i&&t instanceof n)n.map(t,e,this,this,!1);else if(i){this.bind(t,e,void 0,!1);var a,c=t.isReactComponent?"componentWillUnmount":"destroy";t.hasOwnProperty(c)&&(a=t[c]),t[c]=function(){return delete t[c],a&&(t[c]=a),s.unBind(t,e),t[c]&&t[c].apply(t,arguments)}}return r&&this.getUpdates(r)||o.reduce(function(t,e){return Object(O.walknSet)(t,e.alias||e.path,s.retrieve(e.path)),t},{})}},{key:"retrieve",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(t=m.a.string(t)?t.split("."):t)&&this.stores[t[0]]&&this.stores[t[0]].retrieve&&this.stores[t[0]].retrieve(t.slice(1))}},{key:"restoreRefPath",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t=m.a.string(t)?t.split("."):t;for(var s,i=0,r=this;i<t.length;){if(s=r.stores[t[i]],(e.isScopeClass(s)||e.isStoreClass(s))&&(r.mount(t[0]),s=r.stores[t[i]]),!e.isScope(s)){if(e.isStore(s)){s.restore();break}break}r=s,i++}}},{key:"retrieveStore",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(t=m.a.string(t)?t.split("."):t)&&t.length&&(1!=t.length&&this.stores[t[0]].retrieveStore?this.stores[t[0]].retrieveStore(t.slice(1)):1==t.length&&this.stores[t[0]])}},{key:"getStoresRevs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,s=this._._scope;return t||(t={}),Object.keys(s).forEach(function(e){"$parent"!=e&&(m.a.fn(s[e])?t.hasOwnProperty(e)||(t[e]=!1):t[e]=s[e]._rev)}),e||(this._._mixed.reduce(function(e,s){return s.getStoresRevs(t),t},t),this.parent&&this.parent.getStoresRevs(t)),t}},{key:"_getRevMap",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._._scope;return Object.keys(e).forEach(function(s){"$parent"==s||t[s]||(t[s]={rev:e[s]._rev,refs:[]})}),this._._mixed.reduceRight(function(t,e){return e._getRevMap(t)},t),this.parent&&this.parent._getRevMap(t),t}},{key:"getRefsUpdates",value:function(t,e,s){var i=this;return e=e||t.map(function(t){return m.a.string(t)?t:t.name}).map(function(t){return i.parseRef(t)}).reduce(function(t,e){return t[e.storeId]=t[e.storeId]||{rev:0,refs:[]},t[e.storeId].refs.push(e),t},{}),this.getUpdates(e,s)}},{key:"getUpdates",value:function(t,e,s){var i=this;return e=e||{},t=t||this._getRevMap(),Object.keys(t).forEach(function(r){var n=i.stores[r];t[r]=t[r]||{rev:0,refs:[]},n&&m.a.fn(n)?(s=!0,e[r]=void 0):n&&n._rev>t[r].rev&&(t[r].rev=n._rev,s=!0,t[r].refs.forEach(function(t){e[t.alias]=i.retrieve(t.path)}))}),s&&e}},{key:"_getAllChilds",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.push.apply(t,r()(this._.childScopes)),this._.childScopes.forEach(function(e){e._getAllChilds(t)}),t}},{key:"serialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(this._._scope,this._),i=s.baseId,r=s.key,n=s.keyPID,o=(s.incrementId,t.alias),a=t.parentAlias,c=r?(a||n)+">"+r:o||a&&a+"/"+i||this._id;return this.serialize_ex(t,e,c,o,["$parent"])}},{key:"serialize_ex",value:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,a=this._,c=a._scope,u=a.incrementId,l=s.withChilds,h=void 0===l||l,f=s.withMixed,p=void 0===f||f,d=s.norefs;if(Object(O.keyWalknGet)(i,r)){if(!u)return i;if(u){for(var _=-1;Object(O.keyWalknGet)(i,r+"["+ ++_+"]"););r=r+"["+_+"]"}}return Object(O.keyWalknSet)(i,r,{}),Object.keys(c).forEach(function(t){o.includes(t)||e.isStoreClass(c[t])||e.isScopeClass(c[t])||c[t].serialize(T({},s,{parentAlias:r}),i)}),h&&a.childScopes.forEach(function(t){!t._.isLocalId&&t.serialize({withChild:!0,withParents:!1,parentAlias:r,withMixed:p,norefs:d},i)}),p&&a._mixed.forEach(function(t){!t._.isLocalId&&t.serialize({withChild:!1,withParents:!1,withMixed:p,norefs:d},i)}),n&&(i=Object.keys(i).reduce(function(e,s){return e[s===t._id?n:s]=i[s],e},{})),i}},{key:"restore",value:function(t){var e,s=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a.bool(i)&&i,n=this._._scope;t&&i&&i.alias&&i.alias!=this._id&&(delete(e=T({},t,o()({},this._id,t[i.alias])))[i.alias],t=e),(t=t&&Object(O.keyWalknGet)(t,this._id)||this.takeSnapshotByKey(this._id))&&(this._.snapshot=T({},t),e=t["/"],t["/"]=T({},e),e&&Object.keys(e).forEach(function(t){"$parent"!=t&&n[t]&&(r&&!m.a.fn(n[t])&&n[t].destroy(),s._mount(t))}),this._._mixed.forEach(function(t){!t._.isLocalId&&t.restore(void 0,r)}),this._.childScopes.forEach(function(t){!t._.isLocalId&&t.restore(void 0,r)}))}},{key:"getSnapshotByKey",value:function(t,e){return this._.snapshot&&t.startsWith(this._id)?Object(O.keyWalknGet)(this._.snapshot,t.substr(this._id.length)):!e&&this.parent&&this.parent.getSnapshotByKey(t)||this.stores.$parent&&this.stores.$parent.getSnapshotByKey(t)}},{key:"getSnapshotByKeyExt",value:function(t,e,s){if(t)return Object(O.keyWalknGet)(t,e)}},{key:"takeSnapshotByKey",value:function(t,e){if(this._.snapshot&&t.startsWith(this._id)){var s=Object(O.keyWalknGet)(this._.snapshot,t.substr(this._id.length));return s&&this.deleteSnapshotByKey(t,!0),s}return!e&&this.parent&&this.parent.takeSnapshotByKey(t)||this.stores.$parent&&this.stores.$parent.takeSnapshotByKey(t)}},{key:"deleteSnapshotByKey",value:function(t,e){if(this._.snapshot&&t.startsWith(this._id)){var s=Object(O.keyWalknGet)(this._.snapshot,t.substr(this._id.length).replace(/^(.*[\>|\/])[^\>|\/]+$/gi,"$1"));s&&delete s[t.replace(/^.*[\>|\/]([^\>|\/]+)$/gi,"$1")]}return!e&&this.parent&&this.parent.deleteSnapshotByKey(t)||this.stores.$parent&&this.stores.$parent.deleteSnapshotByKey(t)}},{key:"setState",value:function(t){var e=this;Object.keys(t).forEach(function(s){return e.state[s]=t[s]})}},{key:"parseRef",value:function(t){"string"!=typeof t&&(this.register(o()({},t.name,t.store)),t=t.name);var e=t.split(":");return e[0]=e[0].split("."),{storeId:e[0][0],path:e[0],alias:e[1]||e[0][e[0].length-1],ref:t}}},{key:"dispatch",value:function(t){for(var e,s=this,i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];if(!this.dead){var o=this._._boundedActions;return Object.keys(this._._scope).forEach(function(e){var i;"$parent"!=e&&(m.a.fn(s._._scope[e])||(i=s._._scope[e]).trigger.apply(i,[t].concat(r)))}),o&&o.test(t)?this:(this._._mixed.forEach(function(e){return e.dispatch.apply(e,[t].concat(r))}),this.parent&&(e=this.parent).dispatch.apply(e,[t].concat(r)),this)}console.warn("Dispatch was called on a dead scope, check you're async functions in this stack...",(new Error).stack)}},{key:"trigger",value:function(){this.dispatch.apply(this,arguments)}},{key:"then",value:function(t){var e=this;return this._stable?t(this.data):this.once("stable",function(s){return e.then(t)})}},{key:"onceStableTree",value:function(t){var e=this;return this._.unStableChilds?this.once("stableTree",function(s){return e.onceStableTree(t)}):t(this.data)}},{key:"retainStores",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;e.forEach(function(e){return t.stores[e]&&t.stores[e].retain&&t.stores[e].retain(s)})}},{key:"disposeStores",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;e.forEach(function(e){return t.stores[e]&&t.stores[e].dispose&&t.stores[e].dispose(s)})}},{key:"wait",value:function(t){this._stable&&!this.__locks.all&&this.emit("unstable",this),this._stable=!1,this.__locks.all++,t&&(this.__locks[t]=this.__locks[t]||0,this.__locks[t]++)}},{key:"release",value:function(t){var e=this;if(t&&(0==this.__locks[t]&&console.error("Release more than locking !",t),this.__locks[t]=this.__locks[t]||0,this.__locks[t]--),t||0!=this.__locks.all||console.error("Release more than locking !"),this.__locks.all--,!this.__locks.all){if(this._.stabilizerTM)return;this._.stabilizerTM&&clearTimeout(this._.stabilizerTM),this._.stabilizerTM=setTimeout(function(t){e._.stabilizerTM=null,e.__locks.all||(e._.propagTM&&clearTimeout(e._.propagTM),e._rev++,e._stable=!0,e.emit("stable",e),!e.dead&&e._propag())})}}},{key:"propag",value:function(){var t=this;this._.propagTM&&clearTimeout(this._.propagTM),this._.propagTM=setTimeout(function(e){t._.propagTM=null,t._propag()},2)}},{key:"_propag",value:function(){var t=this;this._.followers.length&&this._.followers.forEach(function(e){var s=e[0],i=(e[1],e[2]),r=e[3],n=(e[3],t.getUpdates(r));n&&("function"!=typeof s?i?s.setState(o()({},i,n)):s.setState(n):s(n,r&&T({},r)||"no revs"))}),this.emit("update",this.getUpdates())}},{key:"isStable",value:function(){return this._stable}},{key:"isStableTree",value:function(){return!this._.unStableChilds}},{key:"_addChild",value:function(t){var e=this;this._.childScopes.push(t),this._.seenChilds++;var s={stable:function(t){e._.unStableChilds--,e._.unStableChilds||e.emit("stableTree",e)},unstable:function(t){e._.unStableChilds++,1==e._.unStableChilds&&e.emit("unstableTree",e)},stableTree:function(t){e._.unStableChilds--,e._.unStableChilds||e.emit("stableTree",e)},unstableTree:function(t){e._.unStableChilds++,1==e._.unStableChilds&&e.emit("unstableTree",e)},destroy:function(t){t._.unStableChilds&&e._.unStableChilds--,t.isStable()||e._.unStableChilds--,e._.unStableChilds||e.emit("stableTree",e)}},i=this._.unStableChilds;!t.isStable()&&this._.unStableChilds++,t._.unStableChilds&&this._.unStableChilds++,this._.childScopesList.push(s),!i&&this._.unStableChilds&&this.emit("unstableTree",this),t.on(s)}},{key:"_rmChild",value:function(t){var e=this._.childScopes.indexOf(t),s=this._.unStableChilds;-1!=e&&(this._.childScopes.splice(e,1),!t.isStable()&&this._.unStableChilds--,t._.unStableChilds&&this._.unStableChilds--,t.un(this._.childScopesList.splice(e,1)[0]),s&&!this._.unStableChilds&&this.emit("stableTree"))}},{key:"retain",value:function(t){this.__retains.all++,t&&(this.__retains[t]=this.__retains[t]||0,this.__retains[t]++)}},{key:"dispose",value:function(t){var e=this;if(t){if(!this.__retains[t])throw new Error("Dispose more than retaining : "+t);this.__retains[t]--}if(!this.__retains.all)throw new Error("Dispose more than retaining !");this.__retains.all--,this.__retains.all||(this._.persistenceTm?(this._.destroyTM&&clearTimeout(this._.destroyTM),this._.destroyTM=setTimeout(function(t){e.then(function(t){!e.__retains.all&&!e.dead&&e.destroy()})},this._.persistenceTm)):this.then(function(t){return!e.__retains.all&&!e.dead&&e.destroy()}))}},{key:"destroy",value:function(){var t=this,e=this._._scope;for(var s in r()(this._.childScopes).map(function(t){return t.destroy()}),e)if(!m.a.fn(e[s])){if("$parent"==s)continue;!e[s]._autoDestroy&&e[s].dispose("scoped")}for(this._.stabilizerTM&&clearTimeout(this._.stabilizerTM),this._.propagTM&&clearTimeout(this._.propagTM),Object.keys(this._._listening).forEach(function(e){return"$parent"!==e&&t._._scope[e].removeListener(t._._listening[e])});this._._mixedList.length;)this._._mixed[0].removeListener(this._._mixedList.shift()),this._._mixed.shift().dispose("mixedTo");r()(this._.followers).map(function(e){return t.unBind.apply(t,r()(e))}),this._._parentList&&(this.parent._rmChild(this),this.parent.removeListener(this._._parentList),this.parent.dispose("isMyParent"),this._._parentList=null),this.dead=!0,delete C[this._id],this.emit("destroy",this)}}]),e}(w.default);E.persistenceTm=1,E.Store=null,E.scopeRef=function(t){this.path=t},E.scopes=C,E.isScope=function(t){return t instanceof E},E.isScopeClass=function(t){return E.isPrototypeOf(t)||t===E},e.default=E,function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var s=void 0!==e?e:exports;if(s)if("function"!=typeof s){for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var r=void 0;try{r=s[i]}catch(t){continue}t.register(r,i,"G:\\n8tz\\libs\\rScopes\\rescope\\src\\Scope.js")}}else t.register(s,"module.exports","G:\\n8tz\\libs\\rScopes\\rescope\\src\\Scope.js")}}()},function(t,e,s){t.exports=s(15)},function(t,e,s){"use strict";s.r(e),function(t){s.d(e,"Scope",function(){return r}),s.d(e,"Store",function(){return n}),s.d(e,"scopeRef",function(){return a});var i="undefined"!=typeof window?window:t,r=s(13).default,n=s(17).default,o=i.___rescope||{};function a(t,e){return t[e]=new r.scopeRef(t[e]),t}i.___rescope?(console.warn("ReScope is defined multiple times !! \nCheck you're packaging"),r=o.Scope,n=o.Store,a=o.scopeRef):(i.___rescope=o,r.Store=n),e.default={Scope:r,Store:n,scopeRef:a},function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var s=void 0!==e?e:exports;if(s)if("function"!=typeof s){for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var r=void 0;try{r=s[i]}catch(t){continue}t.register(r,i,"G:\\n8tz\\libs\\rScopes\\rescope\\src\\index.js")}}else t.register(s,"module.exports","G:\\n8tz\\libs\\rScopes\\rescope\\src\\index.js")}}()}.call(this,s(16))},function(t,e){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch(t){"object"==typeof window&&(s=window)}t.exports=s},function(t,e,s){"use strict";s.r(e);var i=s(3),r=s.n(i),n=s(1),o=s.n(n),a=s(7),c=s.n(a),u=s(6),l=s.n(u),h=s(8),f=s.n(h),p=s(4),d=s.n(p),_=s(5),v=s.n(_),y=s(9),b=s.n(y),g=s(10),m=s.n(g);function k(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,i)}return s}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?k(s,!0).forEach(function(e){r()(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):k(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var w=s(0),O=s(13).default,j=s(2),T=j.keyWalknSet,x=j.keyWalknGet,C=s(12).default,E=s(18).default,P=s(11),R=Object.getPrototypeOf({}),L=function(t){function e(){var t,s,i;c()(this,e),i=f()(this,v()(e).call(this));var r=Array.prototype.slice.call(arguments),n=i.constructor,a=r[0]instanceof O?r.shift():n.scope?O.getScope(n.scope):w.string(r[0])?O.getScope(r.shift()):n.staticScope,u=!r[0]||w.array(r[0])||w.string(r[0])?{}:r.shift(),l=w.array(r[0])?r.shift():null,h=u.name||n.name,p=u.use||[],_=u.apply||null,y=n.state||n.initialState||n.defaultState;return i._uid=u._uid||P.generate(),i.__retains={all:0},i.__locks={all:0},i._onStabilize=[],i._autoDestroy=!!i._persistenceTm,i._persistenceTm=u.persistenceTm||n.persistenceTm||(u.autoDestroy||n.autoDestroy)&&5,i._cfg=u,u&&u.on&&i.on(u.on),i.name=h,a.stores?(i.scopeObj=a,i.scope=a.stores):(i.scopeObj=new O(a),i.scope=a.stores),i.$scope=i.scopeObj,i.$stores=i.scopeObj.stores,i.$actions=i.scopeObj.actions,i.$dispatch=i.scopeObj.dispatch.bind(i.scopeObj),i._rev=i.constructor._rev||0,i._revs={},i.stores={},i._require=[],i._sources=[h],w.array(n.use)?i._use=[].concat(o()(p),o()((n.use||[]).map(function(t){var e=t.match(/^(\!?)([^\:]*)(?:\:(.*))?$/);if(e[1]){var s=e[2].split(".");return i._require.push(e[3]||s[s.length-1]),t.substr(1)}return t}))):i._use=[].concat(o()(p),o()(n.use?Object.keys(n.use).map(function(t){var e=t.match(/^(\!?)(.*)$/);return e[1]&&i._require.push(n.use[t]),e[2]+(!0===n.use[t]?"":":"+n.use[t])}):[])),n.require&&(t=i._require).push.apply(t,o()(n.require)),u.require&&(s=i._require).push.apply(s,o()(u.require)),i._followers=[],i._changesSW=y||{},i.state=y&&{},_&&(i.apply=_),l?l.push(i._afterConstructor.bind(d()(i))):setTimeout(i._afterConstructor.bind(d()(i))),i}return m()(e,t),l()(e,[{key:"_afterConstructor",value:function(){var t,e=this._cfg,s=this.constructor,i=(this.restore(void 0,!0),this.state),r=this.data;r?this.data=r:void 0!==s.data?this.data=S({},s.data):e.hasOwnProperty("data")&&(this.data=e.data),e.hasOwnProperty("state")&&void 0!==e.state&&(i=S({},i,{},e.state)),void 0===this.data?(i||this._use.length)&&(this._nextState=this._changesSW=S({},this._changesSW,{},i||{},{},this.$scope.map(this,this._use)),this.state={},this.shouldApply(this._nextState)&&void 0===this.data&&(this.data=this.apply(this.data,this._nextState,this._changesSW),t=!0,this.state=this._changesSW,this._nextState=this._changesSW=null)):(t=!0,this.state=S({},this._changesSW,{},i||{},{},this.$scope.map(this,this._use)),this._nextState=this._changesSW=null),void 0===this.data&&!t||this.__locks.all?(this._stable=!1,s.managed||this.state||this._use&&this._use.length||console.warn("ReScope store '",this.name,"' have no initial data, state or use. It can't stabilize...")):(this._stable=!0,this._rev++),!this._stable&&this.emit("unstable",this.state)}},{key:"shouldPropag",value:function(t){return!0}},{key:"shouldSerialize",value:function(){return!0}},{key:"hasDataChange",value:function(t){this.constructor;var e,s=this.data;return!(e=!s&&t||s!==t)&&s&&Object.keys(s).forEach(function(i){e=e||(t?s[i]!==t[i]:s&&s[i])}),!e&&t&&Object.keys(t).forEach(function(i){e=e||(t?s[i]!==t[i]:s&&s[i])}),e}},{key:"shouldApply",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,s=this.constructor;return!!this.isComplete(e)&&(w.array(s.follow)?s.follow.reduce(function(t,s){return t||e&&e[s]},!1):!s.follow||Object.keys(s.follow).reduce(function(i,r){return i||e&&w.fn(s.follow[r])&&s.follow[r].call(t,e[r])||s.follow[r]&&e[r]!==t.state[r]},!1))}},{key:"apply",value:function(t,e,s){return e}},{key:"stabilize",value:function(t){t&&this.once("stable",t),this._stabilizer||(this._stable&&this.emit("unstable",this.state,this.data),this._stable=!1,this._stabilizer=E.pushTask(this,"pushState"))}},{key:"retrieve",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.data;return t=w.string(t)?t.split("."):t,s&&t&&t.length?t.length==e+1?s[t[e]]:this.retrieve(t,e+1,s[t[e]]):s}},{key:"dispatch",value:function(t){for(var e,s=arguments.length,i=new Array(s>1?s-1:0),r=1;r<s;r++)i[r-1]=arguments[r];(e=this.scopeObj).dispatch.apply(e,[t].concat(i))}},{key:"trigger",value:function(t){var e=this.constructor.actions;if(e&&e[t]){for(var s,i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];var o=(s=e[t]).call.apply(s,[this].concat(r));w.function(o)&&(o=o(this.nextState)),o&&this.setState(o)}}},{key:"push",value:function(t,e,s){if(s=!0===e?s:e,!(e=!0===e)&&!this.hasDataChange(t)){if(s&&s(),!this.__locks.all){var i=this._stable;this._stable=!0,!i&&this.emit("stable",this.state,this.data)}return!1}this.data=t,this.wait(),this.release(s)}},{key:"pushState",value:function(t){if(this._stabilizer=null,t||this._changesSW||!this.data){var e,s=t||this._nextState||this.state;if(Object.keys(s).forEach(function(t){return void 0===s[t]&&delete s[t]}),e=this.apply(this.data,s,this._changesSW),this.state=s,this._nextState=null,this._changesSW=null,!t&&!this.hasDataChange(e)){if(!this.__locks.all){var i=this._stable;this._stable=!0,!i&&this.emit("stable",this.state,this.data),this._stabilizer=null}return!1}this.data=e,this.wait(),this.release()}}},{key:"setState",value:function(t,e,s){var i,r,n=this._changesSW=this._changesSW||{},o=this._nextState=this._nextState||S({},this.state);for(r in t)(!this.state||n.hasOwnProperty(r)&&t[r]!==n[r]||t.hasOwnProperty(r)&&t[r]!==this.state[r])&&(i=!0,o[r]=n[r]=t[r]);if(this.shouldApply(o))return s?(this.pushState(),e&&e()):i?this.stabilize(e):e&&e(),this}},{key:"setStateSync",value:function(t){var e=this._changesSW=this._changesSW||{};for(var s in t)(!this.state||t.hasOwnProperty(s)&&t[s]!==this.state[s])&&(!0,this._revs[s]=t[s]&&t[s]._rev||!0,e[s]=t[s]);return this.shouldApply(S({},this.state||{},{},e))&&this.pushState(),this.data}},{key:"as",value:function(t){return{store:this,name:t}}},{key:"on",value:function(t){var s=this;!w.string(t)&&t?Object.keys(t).forEach(function(i){return b()(v()(e.prototype),"on",s).call(s,i,t[i])}):b()(v()(e.prototype),"on",this).apply(this,arguments)}},{key:"removeListener",value:function(t){var s=this;!w.string(t)&&t?Object.keys(t).forEach(function(i){return b()(v()(e.prototype),"removeListener",s).call(s,i,t[i])}):b()(v()(e.prototype),"removeListener",this).apply(this,arguments)}},{key:"isComplete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return!this._require||!this._require.length||t&&this._require.reduce(function(e,s){return e&&t[s]},!0)}},{key:"isStable",value:function(){return this._stable}},{key:"serialize",value:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s.parentAlias||this.scopeObj._id,n=0,o=!s.norefs&&w.array(this._use)&&this._use.reduce(function(s,i){var r=t.$scope.parseRef(i),o=t.$stores[r.storeId];return o&&e.isStore(o)&&!o.scopeObj._.isLocalId&&(n++,s[r.alias]=r.path),s},{}),a=this.state||{},c=this.shouldSerialize();if(!c)return T(i,r+"/"+this.name,{dataRefs:s.dataRefs,refs:o}),i;var u=Object.keys(a)||[],l=u.map(function(t){return a[t]}),h=0,f=s.dataRefs||{},p=!s.norefs&&this.data&&Object.keys(this.data).reduce(function(e,s){var i=l.indexOf(t.data[s]);return-1!=i&&(h++,e[s]=u[i]),e},{}),d={dataRefs:s.dataRefs,state:a&&(s.norefs?S({},a):Object.keys(a).reduce(function(t,e){return!o[e]&&(t[e]=a[e]),t},{})),data:(this.data&&this.data.__proto__===R?Object.keys(this.data).reduce(function(e,s){return p[s]||f[s]||(e[s]=t.data[s],h++),e},{}):(w.bool(this.data)||w.number(this.data)||w.string(this.data))&&this.data)||void 0};return o&&n&&(d.refs=o),p&&h&&(d.inRefs=p),T(i,r+"/"+this.name,d),i}},{key:"restore",value:function(t,e){var s=this;(t=t&&x(t,this.scopeObj._id+"/"+this.name)||this.$scope.takeSnapshotByKey(this.scopeObj._id+"/"+this.name))&&t&&(this.isStable()||e||this.then(function(){return s.restore(t)}),this.state=S({},t.state),t.refs&&Object.keys(t.refs).forEach(function(e){s.state[e]=s.$scope.retrieve(t.refs[e])}),!0===t.inRefs?this.data=S({},this.state):(this.data=t.data,t.inRefs&&Object.keys(t.inRefs).forEach(function(e){s.data[e]=s.state[t.inRefs[e]]})),t.dataRefs&&(this.data=this.data||{},Object.keys(t.dataRefs).forEach(function(e){s.$scope.restoreRefPath(t.dataRefs[e]),s.data[e]=s.$scope.retrieve(t.dataRefs[e])})))}},{key:"bind",value:function(t,e){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3?arguments[3]:void 0;if(this._followers.push([t,e,i]),s&&this.data&&this._stable){var n=i?this.retrieve(i):this.data;"function"!=typeof t?e?t.setState(r()({},e,n)):t.setState(n):t(n)}}},{key:"unBind",value:function(t,e,s){for(var i=this._followers,r=i&&i.length;i&&r--;)if(i[r][0]===t&&i[r][1]===e&&i[r][2]===s)return i.splice(r,1)}},{key:"then",value:function(t){var e=this;if(this._stable)return t(this.data);this.once("stable",function(s){return t(e.data)})}},{key:"wait",value:function(t){if("number"==typeof t)return this.__locks.all+=t;if(w.array(t))return t.map(this.wait.bind(this));this._stable&&this.emit("unstable",this.state,this.data),this._stable=!1,this.__locks.all++;var e=w.string(t)?t:null;return e&&(this.__locks[e]=this.__locks[e]||0,this.__locks[e]++),t&&w.fn(t.then)&&t.then(this.release.bind(this,null)),this}},{key:"release",value:function(t,e){this.constructor;var s=this,i=this._stable;if(w.fn(t)&&(e=t,t=null),t&&(0==this.__locks[t]&&console.error("Release more than locking !",t),this.__locks[t]=this.__locks[t]||0,this.__locks[t]--),t||0!=this.__locks.all||console.error("Release more than locking !"),!--this.__locks.all&&this.isComplete()){var n=this.shouldPropag(this.data);this._stable=!0,n&&this._rev++,n&&this._followers.length&&this._followers.forEach(function(t){var e=t[2]?s.retrieve(t[2]):s.data;"function"==typeof t[0]?t[0](e):t[0].setState(t[1]?r()({},t[1],e):e)}),!i&&this.emit("stable",this.data),n&&this.emit("update",this.data),e&&e()}else e&&this.then(e);return this}},{key:"propag",value:function(t){this.emit("update",t)}},{key:"retain",value:function(t){this.__retains.all++,t&&(this.__retains[t]=this.__retains[t]||0,this.__retains[t]++)}},{key:"dispose",value:function(t){var e=this;if(t){if(!this.__retains[t])throw new Error("RS : Dispose more than retaining on store '"+this.name+"' : "+t);this.__retains[t]--}if(0==this.__retains.all)throw new Error("RS : Dispose more than retaining on store "+this.name);this.__retains.all--,this.__retains.all||(this._persistenceTm?(this._destroyTM&&clearTimeout(this._destroyTM),this._destroyTM=setTimeout(function(t){e._destroyTM=null,!e.__retains.all&&!e.dead&&e.destroy()},this._persistenceTm)):!this.__retains.all&&!this.dead&&this.destroy())}},{key:"destroy",value:function(){this._stabilizer&&(this._stabilizer=null,clearTimeout(this._stabilizer)),this.emit("destroy",this),this._followers.length&&this._followers.forEach(function(t){"function"!=typeof t[0]&&t[0].stores&&delete t[0].stores[t[1]]}),this._followers.length=0,this.constructor._rev=this.rev,this.dead=!0,this._revs=this.data=this.state=this.scope=null,this.removeAllListeners()}},{key:"nextState",get:function(){return this._nextState||this.state}}]),e}(C);L.follow=void 0,L.require=void 0,L.staticScope=new O({},{id:"static"}),L.state=void 0,L.persistenceTm=!1,L.as=function(t){return{store:this,name:t}},L.map=function(t,e,s,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],n=t._revs||{},a=t.stores||(t.stores={}),c={};return e=w.array(e)?o()(e):[e],s=s||L.staticScope,e=e.filter(function(e){var u,l,h,f,p,d;if(!e)return console.error("Not a mappable store item '"+e+"' in "+i+" !!"),!1;if(e.store&&e.name?(h=l=e.name,p=e.store):w.fn(e)?(l=h=e.name||e.defaultName,p=e):(l=(d=e.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/))[1],f=d[2]&&d[2].substr(1),p=s.stores[d[1]],h=d[3]||f&&f.match(/([^\.]*)$/)[0]||d[1]),!p){var _=[];for(var v in s.stores)_.push(v);return console.error("Not a mappable store item '"+l+"/"+h+"' in "+(t.name||t)+" !!",p,d,s.stores,_),!1}if(O.isScopeClass(p)&&s._mount(l),O.isScope(p))p=s._mount(e);else if(n[l])return!1;return w.fn(p)?(s._mount(l),s.stores[l].bind(t,h,r,f)):p.bind(t,h,r,f),s.stores[l]._sources&&(u=t._sources).push.apply(u,o()(s.stores[l]._sources)),n[h]=n[h]||!0,!a[l]&&(a[l]=s.stores[l]),s.stores[l].hasOwnProperty("data")&&(c[l]=s.data[l]),!0}),t.once("destroy",function(){e.map(function(e){var i,r,n,o;e.store&&e.name?(r=i=e.name,o=e.store):w.fn(e)?(i=r=e.name||e.defaultName,o=s.stores[i]):(i=(e=e.match(/([^\.\:]+)((?:\.[^\.\:]+)*)(?:\:([^\.\:]+))?/))[1],n=e[2]&&e[2].substr(1),o=s.stores[e[1]],r=e[3]||n&&n.match(/([^\.]*)$/)[0]||e[1]),o&&!w.fn(o)&&o.unBind(t,r,n)})}),c},L.isStore=O.isStore=function(t){return t instanceof L},L.isStoreClass=O.isStoreClass=function(t){return L.isPrototypeOf(t)||t===L},e.default=L,function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var s=void 0!==e?e:exports;if(s)if("function"!=typeof s){for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var r=void 0;try{r=s[i]}catch(t){continue}t.register(r,i,"G:\\n8tz\\libs\\rScopes\\rescope\\src\\Store.js")}}else t.register(s,"module.exports","G:\\n8tz\\libs\\rScopes\\rescope\\src\\Store.js")}}()},function(t,e,s){"use strict";s.r(e),function(t){var s,i,r=[],n=0,o=0,a=0,c={lastError:null,dispatch:function(t){c.disable(),s&&s[0].handleError?s[0].handleError(t,s):s&&console.error("ReScope : An apply task has failed !!",s[1]," on ",s[0].name||s[0].constructor.name),i=!1,s=null,u()},enable:"undefined"!=typeof window?function(){window.addEventListener("error",c.dispatch)}:function(){t.on("uncaughtException",c.dispatch)},disable:"undefined"!=typeof window?function(){window.removeEventListener("error",c.dispatch)}:function(){t.removeListener("uncaughtException",c.dispatch)}};function u(){i||function(){Date.now();i=!0,c.enable();for(;a;){for(;!r[n]||!r[n].length;)n++;a--,s=r[n].shift();try{!s[0].dead&&s[0][s[1]](s[2])}catch(t){return c.dispatch(t)}}s=void 0,c.disable(),i=!1,a&&setTimeout(u)}()}e.default={pushTask:function(t,e,s){var i=t._sources&&t._sources.length||1,c=r[i]=r[i]||[];return o=Math.max(o,i),n=Math.min(n,i),a++,c.push([t,e,s]),setTimeout(u,0),c.length}},function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var s=void 0!==e?e:exports;if(s)if("function"!=typeof s){for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var r=void 0;try{r=s[i]}catch(t){continue}t.register(r,i,"G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js")}}else t.register(s,"module.exports","G:\\n8tz\\libs\\rScopes\\rescope\\src\\utils\\TaskSequencer.js")}}()}.call(this,s(19))},function(t,e){var s,i,r=t.exports={};function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(s===setTimeout)return setTimeout(t,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(t){s=n}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var c,u=[],l=!1,h=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&p())}function p(){if(!l){var t=a(f);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function _(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)e[s-1]=arguments[s];u.push(new d(t,e)),1!==u.length||l||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]);
//# sourceMappingURL=reScope.js.map

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isSpell, asStore, asScope, asRef, withStateMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpell", function() { return isSpell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asStore", function() { return asStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asScope", function() { return asScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRef", function() { return asRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateMap", function() { return withStateMap; });
/* harmony import */ var _spellFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spellFactory */ "./src/spellFactory.js");
/* harmony import */ var _spellsLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spellsLib */ "./src/spellsLib.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */


var isSpell = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["isSpell"];
var asStore = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].asStore;
var asScope = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].asScope;
var asRef = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].asRef;
var withStateMap = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].withStateMap;
var _default = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"];
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isSpell, "isSpell", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\index.js");
  reactHotLoader.register(asStore, "asStore", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\index.js");
  reactHotLoader.register(asScope, "asScope", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\index.js");
  reactHotLoader.register(asRef, "asRef", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\index.js");
  reactHotLoader.register(withStateMap, "withStateMap", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\index.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/spellFactory.js":
/*!*****************************!*\
  !*** ./src/spellFactory.js ***!
  \*****************************/
/*! exports provided: spells, isSpell, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spells", function() { return spells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpell", function() { return isSpell; });
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescope */ "./node_modules/rescope/dist/reScope.js");
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rescope__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is */ "./node_modules/is/index.js");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

 // will use as external the index in dist

var SimpleObjectProto = {}.constructor;
var spells = {};
var castTypesToAppliable = {};
var castTypes = {};
var isSpell = rescope__WEBPACK_IMPORTED_MODULE_0___default.a.isSpell = function caster() {
  for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {
    argz[_key] = arguments[_key];
  }

  // are we decorating a member / without argz
  if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
    argz[0][argz[1]] = argz[2].value = addCaster(argz[0][argz[1]], argz);
    return argz[0];
  } else if (!is__WEBPACK_IMPORTED_MODULE_1___default.a.fn(argz[0])) {
    return function () {
      for (var _len2 = arguments.length, argz2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        argz2[_key2] = arguments[_key2];
      }

      // are we decorating a member / with argz
      if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
        argz2[0][argz2[1]] = argz2[2].value = addCaster.apply(void 0, [argz2[0][argz2[1]]].concat(argz, [argz2]));
        return argz2[0];
      } else return caster.apply(void 0, [argz2[0]].concat(argz));
    };
  }

  return addCaster.apply(void 0, argz);
};

function addCaster() {
  for (var _len3 = arguments.length, argz = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    argz[_key3] = arguments[_key3];
  }

  var cast = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_1___default.a.fn(argz[0])) && argz.shift();
  if (!cast) throw "ReScope cast : bad decorator function";
  var typeName = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_1___default.a.string(argz[0])) && argz.shift() || cast.name || cast.displayName,
      test = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_1___default.a.fn(argz[0])) && argz.shift(),
      prefix = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_1___default.a.string(argz[0])) && argz.shift() || "as",
      memberDescr = (!argz[0] || is__WEBPACK_IMPORTED_MODULE_1___default.a.bool(argz[0]) || is__WEBPACK_IMPORTED_MODULE_1___default.a.array(argz[0])) && argz.shift() || true,
      casterName = typeName && prefix + typeName[0].toUpperCase() + typeName.substr(1);

  if (!castTypesToAppliable[typeName]) {
    castTypesToAppliable[typeName] = [];

    spells[casterName] = castTypes[typeName] = function doCast() {
      for (var _len4 = arguments.length, argz = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        argz[_key4] = arguments[_key4];
      }

      // are we decorating a member / without argz
      if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
        argz[0][argz[1]] = applyCastableType(typeName, argz[0][argz[1]], [], argz);
        return argz[0];
      } else if (!isCastableType(typeName, argz[0])) {
        return function () {
          for (var _len5 = arguments.length, argz2 = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            argz2[_key5] = arguments[_key5];
          }

          // are we decorating a member / with argz
          if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
            argz2[0][argz2[1]] = applyCastableType(typeName, argz2[0][argz2[1]], argz, argz2);
            return argz2[0];
          } else return doCast.apply(void 0, [argz2[0]].concat(argz));
        };
      }

      return applyCastableType(typeName, argz[0], argz.slice(1));
    };
  }

  castTypesToAppliable[typeName].unshift({
    typeName: typeName,
    test: test,
    memberDescr: memberDescr,
    cast: cast
  });
  return spells[casterName];
}

function isCastableType(typeName, Comp, member, stateScope) {
  var castable = castTypesToAppliable[typeName];

  for (var i = 0; i < castable.length; i++) {
    if ((member === undefined || !!member == !!castable[i].memberDescr) && castable[i].test(Comp)) return castable[i];
  }

  return false;
}

function applyCastableType(typeName, Comp, argz, member, stateScope) {
  var castable = castTypesToAppliable[typeName] || [];

  for (var i = 0; i < castable.length; i++) {
    if ((member === undefined || !!member == !!castable[i].memberDescr) && castable[i].test(Comp)) return castable[i].cast(Comp, argz, member);
  }

  console.warn("reScope cast : Unknown type", typeName, Comp);
  return false;
}

var _default = rescope__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SimpleObjectProto, "SimpleObjectProto", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(spells, "spells", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(castTypesToAppliable, "castTypesToAppliable", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(castTypes, "castTypes", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(isSpell, "isSpell", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(addCaster, "addCaster", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(isCastableType, "isCastableType", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(applyCastableType, "applyCastableType", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellFactory.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/spellsLib.js":
/*!**************************!*\
  !*** ./src/spellsLib.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! is */ "./node_modules/is/index.js");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rescope */ "./node_modules/rescope/dist/reScope.js");
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rescope__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _spellFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spellFactory */ "./src/spellFactory.js");









var _dec, _dec2, _dec3, _dec4, _obj;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */




var Lib = (_dec = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("store", function (v) {
  return is__WEBPACK_IMPORTED_MODULE_8___default.a.object(v) || is__WEBPACK_IMPORTED_MODULE_8___default.a.string(v);
}), _dec2 = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("scope", function (v) {
  return is__WEBPACK_IMPORTED_MODULE_8___default.a.object(v);
}), _dec3 = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("ref", function (v) {
  return is__WEBPACK_IMPORTED_MODULE_8___default.a.string(v);
}), _dec4 = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("stateMap", function (v) {
  return v === rescope__WEBPACK_IMPORTED_MODULE_10__["Store"] || v.prototype instanceof rescope__WEBPACK_IMPORTED_MODULE_10__["Store"];
}, 'with'), (_obj = {
  store: function store(obj, _ref, ref) {
    var _class, _temp, _class2, _temp2;

    var cfg = _ref[0];
    var use = [],
        state = {},
        actions = {},
        applier = obj.$apply;
    if (applier) obj = _objectSpread({}, obj), delete obj.$apply;
    rescope__WEBPACK_IMPORTED_MODULE_10__["Scope"].stateMapToRefList(obj, state, use, actions);
    if (applier) return _temp = _class =
    /*#__PURE__*/
    function (_Store) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StateMapWA, _Store);

      function StateMapWA() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StateMapWA);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StateMapWA)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.apply = applier;
        return _this;
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StateMapWA, [{
        key: "__reactstandin__regenerateByEval",
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
          // @ts-ignore
          this[key] = eval(code);
        }
      }]);

      return StateMapWA;
    }(rescope__WEBPACK_IMPORTED_MODULE_10__["Store"]), _class.displayName = ref[1], _class.use = use, _class.state = state, _class.actions = actions, _temp;else return _temp2 = _class2 =
    /*#__PURE__*/
    function (_Store2) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StateMap, _Store2);

      function StateMap() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StateMap);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StateMap).apply(this, arguments));
      }

      return StateMap;
    }(rescope__WEBPACK_IMPORTED_MODULE_10__["Store"]), _class2.displayName = ref[1], _class2.use = use, _class2.state = state, _class2.actions = actions, _temp2;
  },
  scope: function scope(obj, _ref2, ref) {
    var cfg = _ref2[0];
    return (
      /*#__PURE__*/
      function (_Scope) {
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(childScope, _Scope);

        function childScope(map, cfg2) {
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, childScope);

          return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(childScope).call(this, _objectSpread({}, obj, {}, map), _objectSpread({}, cfg, {}, cfg2)));
        }

        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(childScope, [{
          key: "__reactstandin__regenerateByEval",
          // @ts-ignore
          value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
          }
        }]);

        return childScope;
      }(rescope__WEBPACK_IMPORTED_MODULE_10__["Scope"])
    );
  },
  ref: function ref(obj, _ref4, _ref3) {
    var cfg = _ref4[0];
    return new rescope__WEBPACK_IMPORTED_MODULE_10__["Scope"].scopeRef(obj);
  },
  stateMap: function stateMap(obj, _ref5) {
    var _class3, _temp3, _class4, _temp4;

    var _stateMap = _ref5[0];
    var use = [],
        initialState = {},
        actions = {},
        applier = _stateMap.$apply;
    if (_stateMap.$apply) _stateMap = _objectSpread({}, _stateMap), delete _stateMap.$apply;
    _stateMap && rescope__WEBPACK_IMPORTED_MODULE_10__["Scope"].stateMapToRefList(_stateMap, initialState, use, actions);
    if (applier) return _temp3 = _class3 =
    /*#__PURE__*/
    function (_obj2) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(withStateMap, _obj2);

      function withStateMap() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, withStateMap);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(withStateMap).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(withStateMap, [{
        key: "apply",
        value: function apply() {
          return applier.apply(this, arguments);
        }
      }, {
        key: "__reactstandin__regenerateByEval",
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
          // @ts-ignore
          this[key] = eval(code);
        }
      }]);

      return withStateMap;
    }(obj), _class3.displayName = obj.displayName || obj.name, _class3.actions = obj.actions && _objectSpread({}, obj.actions, {}, actions) || actions, _class3.state = obj.state && _objectSpread({}, obj.state, {}, initialState) || initialState, _class3.use = obj.use && [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(obj.use), use) || use, _temp3;else return _temp4 = _class4 =
    /*#__PURE__*/
    function (_obj3) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(withStateMap, _obj3);

      function withStateMap() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, withStateMap);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(withStateMap).apply(this, arguments));
      }

      return withStateMap;
    }(obj), _class4.displayName = obj.displayName || obj.name, _class4.actions = obj.actions && _objectSpread({}, obj.actions, {}, actions) || actions, _class4.state = obj.state && _objectSpread({}, obj.state, {}, initialState) || initialState, _class4.use = obj.use && [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(obj.use), use) || use, _temp4;
  }
}, (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "store", [_dec], Object.getOwnPropertyDescriptor(_obj, "store"), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "scope", [_dec2], Object.getOwnPropertyDescriptor(_obj, "scope"), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "ref", [_dec3], Object.getOwnPropertyDescriptor(_obj, "ref"), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "stateMap", [_dec4], Object.getOwnPropertyDescriptor(_obj, "stateMap"), _obj)), _obj));
var _default = Lib;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Lib, "Lib", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellsLib.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\rScopes\\rescope-spells\\src\\spellsLib.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=RSpells.js.map
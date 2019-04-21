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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isSpell, asStore, asScope, asRef, withStateMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpell", function() { return isSpell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asStore", function() { return asStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asScope", function() { return asScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asRef", function() { return asRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateMap", function() { return withStateMap; });
/* harmony import */ var _spellFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spellFactory */ "./src/spellFactory.js");
/* harmony import */ var _spellsLib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spellsLib */ "./src/spellsLib.js");
/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */


var isSpell = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["isSpell"];
var asStore = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].asStore;
var asScope = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].asScope;
var asRef = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].asRef;
var withStateMap = _spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"].withStateMap;
/* harmony default export */ __webpack_exports__["default"] = (_spellFactory__WEBPACK_IMPORTED_MODULE_0__["spells"]);

/***/ }),

/***/ "./src/spellFactory.js":
/*!*****************************!*\
  !*** ./src/spellFactory.js ***!
  \*****************************/
/*! exports provided: spells, isSpell, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spells", function() { return spells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpell", function() { return isSpell; });
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescope */ "undefined?8e7d");
/* harmony import */ var rescope__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rescope__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

 // will use as external the index in dist

var SimpleObjectProto = {}.constructor;
var spells = {};
var castTypesToAppliable = {};
var castTypes = {};

rescope__WEBPACK_IMPORTED_MODULE_0___default.a.isSpell = function caster() {
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

var isSpell = rescope__WEBPACK_IMPORTED_MODULE_0___default.a.isSpell;

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

/* harmony default export */ __webpack_exports__["default"] = (rescope__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/spellsLib.js":
/*!**************************!*\
  !*** ./src/spellsLib.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "undefined?e108");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "undefined?0422");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _spellFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spellFactory */ "./src/spellFactory.js");
/* harmony import */ var react_rescope__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-rescope */ "undefined?492a");
/* harmony import */ var react_rescope__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_rescope__WEBPACK_IMPORTED_MODULE_12__);









var _dec, _dec2, _dec3, _dec4, _obj;

/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */





var Lib = (_dec = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("store", function (v) {
  return is__WEBPACK_IMPORTED_MODULE_10___default.a.object(v) || is__WEBPACK_IMPORTED_MODULE_10___default.a.string(v);
}), _dec2 = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("scope", function (v) {
  return is__WEBPACK_IMPORTED_MODULE_10___default.a.object(v);
}), _dec3 = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("ref", function (v) {
  return is__WEBPACK_IMPORTED_MODULE_10___default.a.string(v);
}), _dec4 = Object(_spellFactory__WEBPACK_IMPORTED_MODULE_11__["isSpell"])("stateMap", function (v) {
  return v === react_rescope__WEBPACK_IMPORTED_MODULE_12__["Store"] || v.prototype instanceof react_rescope__WEBPACK_IMPORTED_MODULE_12__["Store"];
}, 'with'), (_obj = {
  store: function store(obj, _ref, ref) {
    var _class, _temp, _class2, _temp2;

    var cfg = _ref[0];
    var use = [],
        state = {},
        actions = {},
        applier = obj.$apply;
    if (applier) obj = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, obj), delete obj.$apply;
    react_rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].stateMapToRefList(obj, state, use, actions);
    if (applier) return _temp = _class =
    /*#__PURE__*/
    function (_Store) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StateMapWA, _Store);

      function StateMapWA() {
        var _getPrototypeOf2;

        var _this;

        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, StateMapWA);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StateMapWA)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.apply = applier;
        return _this;
      }

      return StateMapWA;
    }(react_rescope__WEBPACK_IMPORTED_MODULE_12__["Store"]), _class.displayName = ref[1], _class.use = use, _class.state = state, _class.actions = actions, _temp;else return _temp2 = _class2 =
    /*#__PURE__*/
    function (_Store2) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(StateMap, _Store2);

      function StateMap() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, StateMap);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StateMap).apply(this, arguments));
      }

      return StateMap;
    }(react_rescope__WEBPACK_IMPORTED_MODULE_12__["Store"]), _class2.displayName = ref[1], _class2.use = use, _class2.state = state, _class2.actions = actions, _temp2;
  },
  scope: function scope(obj, _ref2, ref) {
    var cfg = _ref2[0];
    return (
      /*#__PURE__*/
      function (_Scope) {
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(childScope, _Scope);

        function childScope(map, cfg2) {
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, childScope);

          return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(childScope).call(this, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, obj, map), _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, cfg, cfg2)));
        }

        return childScope;
      }(react_rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"])
    );
  },
  ref: function ref(obj, _ref4, _ref3) {
    var cfg = _ref4[0];
    return new react_rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].scopeRef(obj);
  },
  stateMap: function stateMap(obj, _ref5) {
    var _class3, _temp3, _class4, _temp4;

    var _stateMap = _ref5[0];
    var use = [],
        initialState = {},
        actions = {},
        applier = _stateMap.$apply;
    if (_stateMap.$apply) _stateMap = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, _stateMap), delete _stateMap.$apply;
    _stateMap && react_rescope__WEBPACK_IMPORTED_MODULE_12__["Scope"].stateMapToRefList(_stateMap, initialState, use, actions);
    if (applier) return _temp3 = _class3 =
    /*#__PURE__*/
    function (_obj2) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(withStateMap, _obj2);

      function withStateMap() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, withStateMap);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(withStateMap).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(withStateMap, [{
        key: "apply",
        value: function apply() {
          return applier.apply(this, arguments);
        }
      }]);

      return withStateMap;
    }(obj), _class3.displayName = obj.displayName || obj.name, _class3.actions = obj.actions && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, obj.actions, actions) || actions, _class3.state = obj.state && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, obj.state, initialState) || initialState, _class3.use = obj.use && [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(obj.use), use) || use, _temp3;else return _temp4 = _class4 =
    /*#__PURE__*/
    function (_obj3) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(withStateMap, _obj3);

      function withStateMap() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, withStateMap);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(withStateMap).apply(this, arguments));
      }

      return withStateMap;
    }(obj), _class4.displayName = obj.displayName || obj.name, _class4.actions = obj.actions && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, obj.actions, actions) || actions, _class4.state = obj.state && _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, obj.state, initialState) || initialState, _class4.use = obj.use && [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(obj.use), use) || use, _temp4;
  }
}, (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "store", [_dec], Object.getOwnPropertyDescriptor(_obj, "store"), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "scope", [_dec2], Object.getOwnPropertyDescriptor(_obj, "scope"), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "ref", [_dec3], Object.getOwnPropertyDescriptor(_obj, "ref"), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_7___default()(_obj, "stateMap", [_dec4], Object.getOwnPropertyDescriptor(_obj, "stateMap"), _obj)), _obj));
/* harmony default export */ __webpack_exports__["default"] = (Lib);

/***/ }),

/***/ "undefined?03c7":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "undefined?0422":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/applyDecoratedDescriptor" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/applyDecoratedDescriptor");

/***/ }),

/***/ "undefined?20a8":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "undefined?24b3":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "undefined?36a1":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "undefined?492a":
/*!********************************!*\
  !*** external "react-rescope" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rescope");

/***/ }),

/***/ "undefined?4d9b":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "undefined?63a5":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is");

/***/ }),

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "undefined?8e7d":
/*!**************************!*\
  !*** external "rescope" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rescope");

/***/ }),

/***/ "undefined?9439":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "undefined?e108":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ })

/******/ });
//# sourceMappingURL=RSpells.js.map
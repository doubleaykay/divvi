/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/add.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/add.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add)\n/* harmony export */ });\n/**\n * Returns the sum of two numbers.\n *\n * @param augend - The number to add to.\n * @param addend - The number to add.\n *\n * @returns The sum of the two numbers.\n */\nvar add = function add(augend, addend) {\n  return augend + addend;\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/add.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/compare.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/compare.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* binding */ compare)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/types/Calculator.js\");\n\n/**\n * Compare two numbers.\n *\n * @param a - The first number to compare.\n * @param b - The second number to compare.\n *\n * @returns Whether the two numbers are equal, or whether the first one is greater or less than the other.\n */\nvar compare = function compare(a, b) {\n  if (a < b) {\n    return _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.ComparisonOperator.LT;\n  }\n  if (a > b) {\n    return _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.ComparisonOperator.GT;\n  }\n  return _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.ComparisonOperator.EQ;\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/compare.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/decrement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/decrement.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decrement: () => (/* binding */ decrement)\n/* harmony export */ });\n/**\n * Returns an decremented number.\n *\n * @param value - The number to decrement.\n *\n * @returns The decremented number.\n */\nvar decrement = function decrement(value) {\n  return value - 1;\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/decrement.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/increment.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/increment.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   increment: () => (/* binding */ increment)\n/* harmony export */ });\n/**\n * Returns an incremented number.\n *\n * @param value - The number to increment.\n *\n * @returns The incremented number.\n */\nvar increment = function increment(value) {\n  return value + 1;\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/increment.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/integerDivide.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/integerDivide.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   integerDivide: () => (/* binding */ integerDivide)\n/* harmony export */ });\n/**\n * Returns the quotient of two numbers with no fractional part.\n *\n * @param dividend - The number to divide.\n * @param divisor - The number to divide with.\n *\n * @returns The quotient of the two numbers.\n */\nvar integerDivide = function integerDivide(dividend, divisor) {\n  return Math.trunc(dividend / divisor);\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/integerDivide.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/modulo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/modulo.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modulo: () => (/* binding */ modulo)\n/* harmony export */ });\n/**\n * Returns the remainder of two numbers.\n *\n * @param dividend - The number to divide.\n * @param divisor - The number to divide with.\n *\n * @returns The remainder of the two numbers.\n */\nvar modulo = function modulo(dividend, divisor) {\n  return dividend % divisor;\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/modulo.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/multiply.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/multiply.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   multiply: () => (/* binding */ multiply)\n/* harmony export */ });\n/**\n * Returns the product of two numbers.\n *\n * @param multiplicand - The number to multiply.\n * @param multiplier - The number to multiply with.\n *\n * @returns The product of the two numbers.\n */\nvar multiply = function multiply(multiplicand, multiplier) {\n  return multiplicand * multiplier;\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/multiply.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/power.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/power.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   power: () => (/* binding */ power)\n/* harmony export */ });\n/**\n * Returns an number to the power of an exponent.\n *\n * @param base - The base number.\n * @param exponent - The exponent to raise the base to.\n *\n * @returns The base to the power of the exponent.\n */\nvar power = function power(base, exponent) {\n  return Math.pow(base, exponent);\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/power.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/subtract.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/subtract.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   subtract: () => (/* binding */ subtract)\n/* harmony export */ });\n/**\n * Returns the difference between two numbers.\n *\n * @param minuend - The number to subtract from.\n * @param subtrahend - The number to subtract.\n *\n * @returns The difference of the two numbers.\n */\nvar subtract = function subtract(minuend, subtrahend) {\n  return minuend - subtrahend;\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/subtract.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/api/zero.js":
/*!************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/api/zero.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   zero: () => (/* binding */ zero)\n/* harmony export */ });\n/**\n * Return zero as a number.\n *\n * @returns Zero as a number.\n */\nfunction zero() {\n  return 0;\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/api/zero.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/calculator-number/dist/esm/calculator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@dinero.js/calculator-number/dist/esm/calculator.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculator: () => (/* binding */ calculator)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/add.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/compare.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/decrement.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/increment.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/integerDivide.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/modulo.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/multiply.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/power.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/subtract.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api */ \"./node_modules/@dinero.js/calculator-number/dist/esm/api/zero.js\");\n\nvar calculator = {\n  add: _api__WEBPACK_IMPORTED_MODULE_0__.add,\n  compare: _api__WEBPACK_IMPORTED_MODULE_1__.compare,\n  decrement: _api__WEBPACK_IMPORTED_MODULE_2__.decrement,\n  increment: _api__WEBPACK_IMPORTED_MODULE_3__.increment,\n  integerDivide: _api__WEBPACK_IMPORTED_MODULE_4__.integerDivide,\n  modulo: _api__WEBPACK_IMPORTED_MODULE_5__.modulo,\n  multiply: _api__WEBPACK_IMPORTED_MODULE_6__.multiply,\n  power: _api__WEBPACK_IMPORTED_MODULE_7__.power,\n  subtract: _api__WEBPACK_IMPORTED_MODULE_8__.subtract,\n  zero: _api__WEBPACK_IMPORTED_MODULE_9__.zero\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/calculator-number/dist/esm/calculator.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/add.js":
/*!**********************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/add.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   safeAdd: () => (/* binding */ safeAdd)\n/* harmony export */ });\n/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checks */ \"./node_modules/@dinero.js/core/dist/esm/checks/messages.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./node_modules/@dinero.js/core/dist/esm/helpers/assert.js\");\n/* harmony import */ var _haveSameCurrency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haveSameCurrency */ \"./node_modules/@dinero.js/core/dist/esm/api/haveSameCurrency.js\");\n/* harmony import */ var _normalizeScale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeScale */ \"./node_modules/@dinero.js/core/dist/esm/api/normalizeScale.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n/* eslint-disable functional/no-expression-statement */\n\n\n\n\nfunction unsafeAdd(calculator) {\n  return function add() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var augend = _ref[0],\n      addend = _ref[1];\n    var _augend$toJSON = augend.toJSON(),\n      augendAmount = _augend$toJSON.amount,\n      currency = _augend$toJSON.currency,\n      scale = _augend$toJSON.scale;\n    var _addend$toJSON = addend.toJSON(),\n      addendAmount = _addend$toJSON.amount;\n    var amount = calculator.add(augendAmount, addendAmount);\n    return augend.create({\n      amount: amount,\n      currency: currency,\n      scale: scale\n    });\n  };\n}\nfunction safeAdd(calculator) {\n  var normalizeFn = (0,_normalizeScale__WEBPACK_IMPORTED_MODULE_0__.normalizeScale)(calculator);\n  var addFn = unsafeAdd(calculator);\n  return function add() {\n    for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      _ref2[_key2] = arguments[_key2];\n    }\n    var augend = _ref2[0],\n      addend = _ref2[1];\n    var condition = (0,_haveSameCurrency__WEBPACK_IMPORTED_MODULE_1__.haveSameCurrency)([augend, addend]);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(condition, _checks__WEBPACK_IMPORTED_MODULE_3__.UNEQUAL_CURRENCIES_MESSAGE);\n    var _normalizeFn = normalizeFn([augend, addend]),\n      _normalizeFn2 = _slicedToArray(_normalizeFn, 2),\n      newAugend = _normalizeFn2[0],\n      newAddend = _normalizeFn2[1];\n    return addFn(newAugend, newAddend);\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/add.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/allocate.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/allocate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   safeAllocate: () => (/* binding */ safeAllocate)\n/* harmony export */ });\n/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checks */ \"./node_modules/@dinero.js/core/dist/esm/checks/messages.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ \"./node_modules/@dinero.js/core/dist/esm/helpers/assert.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/distribute.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThanOrEqual.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/maximum.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/getAmountAndScale.js\");\n/* harmony import */ var _transformScale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transformScale */ \"./node_modules/@dinero.js/core/dist/esm/api/transformScale.js\");\n/* eslint-disable functional/no-expression-statement */\n\n\n\n\nfunction unsafeAllocate(calculator) {\n  return function allocate() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObject = _ref[0],\n      ratios = _ref[1];\n    var _dineroObject$toJSON = dineroObject.toJSON(),\n      amount = _dineroObject$toJSON.amount,\n      currency = _dineroObject$toJSON.currency,\n      scale = _dineroObject$toJSON.scale;\n    var distributeFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.distribute)(calculator);\n    var shares = distributeFn(amount, ratios.map(function (ratio) {\n      return ratio.amount;\n    }));\n    return shares.map(function (share) {\n      return dineroObject.create({\n        amount: share,\n        currency: currency,\n        scale: scale\n      });\n    });\n  };\n}\nfunction safeAllocate(calculator) {\n  var allocateFn = unsafeAllocate(calculator);\n  var greaterThanOrEqualFn = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.greaterThanOrEqual)(calculator);\n  var greaterThanFn = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.greaterThan)(calculator);\n  var convertScaleFn = (0,_transformScale__WEBPACK_IMPORTED_MODULE_3__.transformScale)(calculator);\n  var maximumFn = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.maximum)(calculator);\n  var equalFn = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.equal)(calculator);\n  var zero = calculator.zero();\n  var ten = new Array(10).fill(null).reduce(calculator.increment, zero);\n  return function allocate() {\n    for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      _ref2[_key2] = arguments[_key2];\n    }\n    var dineroObject = _ref2[0],\n      ratios = _ref2[1];\n    var hasRatios = ratios.length > 0;\n    var scaledRatios = ratios.map(function (ratio) {\n      return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getAmountAndScale)(ratio, zero);\n    });\n    var highestRatioScale = hasRatios ? maximumFn(scaledRatios.map(function (_ref3) {\n      var scale = _ref3.scale;\n      return scale;\n    })) : zero;\n    var normalizedRatios = scaledRatios.map(function (_ref4) {\n      var amount = _ref4.amount,\n        scale = _ref4.scale;\n      var factor = equalFn(scale, highestRatioScale) ? zero : calculator.subtract(highestRatioScale, scale);\n      return {\n        amount: calculator.multiply(amount, calculator.power(ten, factor)),\n        scale: scale\n      };\n    });\n    var hasOnlyPositiveRatios = normalizedRatios.every(function (_ref5) {\n      var amount = _ref5.amount;\n      return greaterThanOrEqualFn(amount, zero);\n    });\n    var hasOneNonZeroRatio = normalizedRatios.some(function (_ref6) {\n      var amount = _ref6.amount;\n      return greaterThanFn(amount, zero);\n    });\n    var condition = hasRatios && hasOnlyPositiveRatios && hasOneNonZeroRatio;\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.assert)(condition, _checks__WEBPACK_IMPORTED_MODULE_8__.INVALID_RATIOS_MESSAGE);\n    var _dineroObject$toJSON2 = dineroObject.toJSON(),\n      scale = _dineroObject$toJSON2.scale;\n    var newScale = calculator.add(scale, highestRatioScale);\n    return allocateFn(convertScaleFn(dineroObject, newScale), normalizedRatios);\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/allocate.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/haveSameCurrency.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/haveSameCurrency.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   haveSameCurrency: () => (/* binding */ haveSameCurrency)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/computeBase.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction haveSameCurrency(dineroObjects) {\n  var _dineroObjects = _toArray(dineroObjects),\n    firstDinero = _dineroObjects[0],\n    otherDineros = _dineroObjects.slice(1);\n  var computeBaseFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.computeBase)(firstDinero.calculator);\n  var _firstDinero$toJSON = firstDinero.toJSON(),\n    comparator = _firstDinero$toJSON.currency;\n  var equalFn = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.equal)(firstDinero.calculator);\n  var comparatorBase = computeBaseFn(comparator.base);\n  return otherDineros.every(function (d) {\n    var _d$toJSON = d.toJSON(),\n      subject = _d$toJSON.currency;\n    var subjectBase = computeBaseFn(subject.base);\n    return subject.code === comparator.code && equalFn(subjectBase, comparatorBase) && equalFn(subject.exponent, comparator.exponent);\n  });\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/haveSameCurrency.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/isNegative.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/isNegative.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isNegative: () => (/* binding */ isNegative)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js\");\n\nfunction isNegative(calculator) {\n  var lessThanFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lessThan)(calculator);\n  return function _isNegative() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObject = _ref[0];\n    var _dineroObject$toJSON = dineroObject.toJSON(),\n      amount = _dineroObject$toJSON.amount;\n    return lessThanFn(amount, calculator.zero());\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/isNegative.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/isPositive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/isPositive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isPositive: () => (/* binding */ isPositive)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js\");\n\nfunction isPositive(calculator) {\n  var greaterThanFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.greaterThan)(calculator);\n  return function _isPositive() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObject = _ref[0];\n    var _dineroObject$toJSON = dineroObject.toJSON(),\n      amount = _dineroObject$toJSON.amount;\n    return greaterThanFn(amount, calculator.zero());\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/isPositive.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/isZero.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/isZero.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isZero: () => (/* binding */ isZero)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n\nfunction isZero(calculator) {\n  var equalFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.equal)(calculator);\n  return function _isZero() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObject = _ref[0];\n    var _dineroObject$toJSON = dineroObject.toJSON(),\n      amount = _dineroObject$toJSON.amount;\n    return equalFn(amount, calculator.zero());\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/isZero.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/normalizeScale.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/normalizeScale.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeScale: () => (/* binding */ normalizeScale)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/maximum.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n/* harmony import */ var _transformScale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transformScale */ \"./node_modules/@dinero.js/core/dist/esm/api/transformScale.js\");\n\n\nfunction normalizeScale(calculator) {\n  var maximumFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.maximum)(calculator);\n  var convertScaleFn = (0,_transformScale__WEBPACK_IMPORTED_MODULE_1__.transformScale)(calculator);\n  var equalFn = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.equal)(calculator);\n  return function _normalizeScale() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObjects = _ref[0];\n    var highestScale = dineroObjects.reduce(function (highest, current) {\n      var _current$toJSON = current.toJSON(),\n        scale = _current$toJSON.scale;\n      return maximumFn([highest, scale]);\n    }, calculator.zero());\n    return dineroObjects.map(function (d) {\n      var _d$toJSON = d.toJSON(),\n        scale = _d$toJSON.scale;\n      return !equalFn(scale, highestScale) ? convertScaleFn(d, highestScale) : d;\n    });\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/normalizeScale.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/subtract.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/subtract.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   safeSubtract: () => (/* binding */ safeSubtract)\n/* harmony export */ });\n/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checks */ \"./node_modules/@dinero.js/core/dist/esm/checks/messages.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./node_modules/@dinero.js/core/dist/esm/helpers/assert.js\");\n/* harmony import */ var _haveSameCurrency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haveSameCurrency */ \"./node_modules/@dinero.js/core/dist/esm/api/haveSameCurrency.js\");\n/* harmony import */ var _normalizeScale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeScale */ \"./node_modules/@dinero.js/core/dist/esm/api/normalizeScale.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n/* eslint-disable functional/no-expression-statement */\n\n\n\n\nfunction unsafeSubtract(calculator) {\n  return function subtract() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var minuend = _ref[0],\n      subtrahend = _ref[1];\n    var _minuend$toJSON = minuend.toJSON(),\n      minuendAmount = _minuend$toJSON.amount,\n      currency = _minuend$toJSON.currency,\n      scale = _minuend$toJSON.scale;\n    var _subtrahend$toJSON = subtrahend.toJSON(),\n      subtrahendAmount = _subtrahend$toJSON.amount;\n    var amount = calculator.subtract(minuendAmount, subtrahendAmount);\n    return minuend.create({\n      amount: amount,\n      currency: currency,\n      scale: scale\n    });\n  };\n}\nfunction safeSubtract(calculator) {\n  var normalizeFn = (0,_normalizeScale__WEBPACK_IMPORTED_MODULE_0__.normalizeScale)(calculator);\n  var subtractFn = unsafeSubtract(calculator);\n  return function subtract() {\n    for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      _ref2[_key2] = arguments[_key2];\n    }\n    var minuend = _ref2[0],\n      subtrahend = _ref2[1];\n    var condition = (0,_haveSameCurrency__WEBPACK_IMPORTED_MODULE_1__.haveSameCurrency)([minuend, subtrahend]);\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(condition, _checks__WEBPACK_IMPORTED_MODULE_3__.UNEQUAL_CURRENCIES_MESSAGE);\n    var _normalizeFn = normalizeFn([minuend, subtrahend]),\n      _normalizeFn2 = _slicedToArray(_normalizeFn, 2),\n      newMinuend = _normalizeFn2[0],\n      newSubtrahend = _normalizeFn2[1];\n    return subtractFn(newMinuend, newSubtrahend);\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/subtract.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/toDecimal.js":
/*!****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/toDecimal.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDecimal: () => (/* binding */ toDecimal)\n/* harmony export */ });\n/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checks */ \"./node_modules/@dinero.js/core/dist/esm/checks/messages.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ \"./node_modules/@dinero.js/core/dist/esm/helpers/assert.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/computeBase.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/isArray.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/absolute.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js\");\n/* harmony import */ var _toUnits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toUnits */ \"./node_modules/@dinero.js/core/dist/esm/api/toUnits.js\");\n\n\n\n\nfunction toDecimal(calculator) {\n  var toUnitsFn = (0,_toUnits__WEBPACK_IMPORTED_MODULE_0__.toUnits)(calculator);\n  var computeBaseFn = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.computeBase)(calculator);\n  var equalFn = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.equal)(calculator);\n  return function toDecimalFn() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObject = _ref[0],\n      transformer = _ref[1];\n    var _dineroObject$toJSON = dineroObject.toJSON(),\n      currency = _dineroObject$toJSON.currency,\n      scale = _dineroObject$toJSON.scale;\n    var base = computeBaseFn(currency.base);\n    var zero = calculator.zero();\n    var ten = new Array(10).fill(null).reduce(calculator.increment, zero);\n    var isMultiBase = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArray)(currency.base);\n    var isBaseTen = equalFn(calculator.modulo(base, ten), zero);\n    var isDecimal = !isMultiBase && isBaseTen;\n\n    // eslint-disable-next-line functional/no-expression-statement\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.assert)(isDecimal, _checks__WEBPACK_IMPORTED_MODULE_5__.NON_DECIMAL_CURRENCY_MESSAGE);\n    var units = toUnitsFn(dineroObject);\n    var getDecimalFn = getDecimal(calculator, dineroObject.formatter);\n    var value = getDecimalFn(units, scale);\n    if (!transformer) {\n      return value;\n    }\n    return transformer({\n      value: value,\n      currency: currency\n    });\n  };\n}\nfunction getDecimal(calculator, formatter) {\n  var absoluteFn = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.absolute)(calculator);\n  var equalFn = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.equal)(calculator);\n  var lessThanFn = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.lessThan)(calculator);\n  var zero = calculator.zero();\n  return function (units, scale) {\n    var whole = formatter.toString(units[0]);\n    var fractional = formatter.toString(absoluteFn(units[1]));\n    var scaleNumber = formatter.toNumber(scale);\n    var decimal = \"\".concat(whole, \".\").concat(fractional.padStart(scaleNumber, '0'));\n    var leadsWithZero = equalFn(units[0], zero);\n    var isNegative = lessThanFn(units[1], zero);\n\n    // A leading negative zero is a special case because the `toString`\n    // formatter won't preserve its negative sign (since 0 === -0).\n    return leadsWithZero && isNegative ? \"-\".concat(decimal) : decimal;\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/toDecimal.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/toUnits.js":
/*!**************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/toUnits.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUnits: () => (/* binding */ toUnits)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/getDivisors.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/isArray.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction toUnits(calculator) {\n  var getDivisorsFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDivisors)(calculator);\n  return function toUnitsFn() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObject = _ref[0],\n      transformer = _ref[1];\n    var _dineroObject$toJSON = dineroObject.toJSON(),\n      amount = _dineroObject$toJSON.amount,\n      currency = _dineroObject$toJSON.currency,\n      scale = _dineroObject$toJSON.scale;\n    var power = calculator.power,\n      integerDivide = calculator.integerDivide,\n      modulo = calculator.modulo;\n    var bases = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isArray)(currency.base) ? currency.base : [currency.base];\n    var divisors = getDivisorsFn(bases.map(function (base) {\n      return power(base, scale);\n    }));\n    var value = divisors.reduce(function (amounts, divisor, index) {\n      var amountLeft = amounts[index];\n      var quotient = integerDivide(amountLeft, divisor);\n      var remainder = modulo(amountLeft, divisor);\n      return [].concat(_toConsumableArray(amounts.filter(function (_, i) {\n        return i !== index;\n      })), [quotient, remainder]);\n    }, [amount]);\n    if (!transformer) {\n      return value;\n    }\n    return transformer({\n      value: value,\n      currency: currency\n    });\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/toUnits.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/api/transformScale.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/api/transformScale.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   transformScale: () => (/* binding */ transformScale)\n/* harmony export */ });\n/* harmony import */ var _divide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../divide */ \"./node_modules/@dinero.js/core/dist/esm/divide/down.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/computeBase.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction transformScale(calculator) {\n  var greaterThanFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.greaterThan)(calculator);\n  var computeBaseFn = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.computeBase)(calculator);\n  return function transformScaleFn() {\n    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n      _ref[_key] = arguments[_key];\n    }\n    var dineroObject = _ref[0],\n      newScale = _ref[1],\n      _ref$ = _ref[2],\n      divide = _ref$ === void 0 ? _divide__WEBPACK_IMPORTED_MODULE_2__.down : _ref$;\n    var _dineroObject$toJSON = dineroObject.toJSON(),\n      amount = _dineroObject$toJSON.amount,\n      currency = _dineroObject$toJSON.currency,\n      scale = _dineroObject$toJSON.scale;\n    var isLarger = greaterThanFn(newScale, scale);\n    var operation = isLarger ? calculator.multiply : divide;\n    var _ref2 = isLarger ? [newScale, scale] : [scale, newScale],\n      _ref3 = _slicedToArray(_ref2, 2),\n      a = _ref3[0],\n      b = _ref3[1];\n    var base = computeBaseFn(currency.base);\n    var factor = calculator.power(base, calculator.subtract(a, b));\n    return dineroObject.create({\n      amount: operation(amount, factor, calculator),\n      currency: currency,\n      scale: newScale\n    });\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/api/transformScale.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/checks/messages.js":
/*!******************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/checks/messages.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   INVALID_AMOUNT_MESSAGE: () => (/* binding */ INVALID_AMOUNT_MESSAGE),\n/* harmony export */   INVALID_RATIOS_MESSAGE: () => (/* binding */ INVALID_RATIOS_MESSAGE),\n/* harmony export */   INVALID_SCALE_MESSAGE: () => (/* binding */ INVALID_SCALE_MESSAGE),\n/* harmony export */   NON_DECIMAL_CURRENCY_MESSAGE: () => (/* binding */ NON_DECIMAL_CURRENCY_MESSAGE),\n/* harmony export */   UNEQUAL_CURRENCIES_MESSAGE: () => (/* binding */ UNEQUAL_CURRENCIES_MESSAGE),\n/* harmony export */   UNEQUAL_SCALES_MESSAGE: () => (/* binding */ UNEQUAL_SCALES_MESSAGE)\n/* harmony export */ });\nvar INVALID_AMOUNT_MESSAGE = 'Amount is invalid.';\nvar INVALID_SCALE_MESSAGE = 'Scale is invalid.';\nvar INVALID_RATIOS_MESSAGE = 'Ratios are invalid.';\nvar UNEQUAL_SCALES_MESSAGE = 'Objects must have the same scale.';\nvar UNEQUAL_CURRENCIES_MESSAGE = 'Objects must have the same currency.';\nvar NON_DECIMAL_CURRENCY_MESSAGE = 'Currency is not decimal.';\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/checks/messages.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/divide/down.js":
/*!**************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/divide/down.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   down: () => (/* binding */ down)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n\n\n/**\n * Divide and round down.\n *\n * Rounding down happens whenever the quotient is not an integer.\n *\n * @param amount - The amount to divide.\n * @param factor - The factor to divide by.\n * @param calculator - The calculator to use.\n *\n * @returns The rounded amount.\n */\nvar down = function down(amount, factor, calculator) {\n  var greaterThanFn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.greaterThan)(calculator);\n  var equalFn = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.equal)(calculator);\n  var zero = calculator.zero();\n  var isPositive = greaterThanFn(amount, zero);\n  var quotient = calculator.integerDivide(amount, factor);\n  var remainder = calculator.modulo(amount, factor);\n  var isInteger = equalFn(remainder, zero);\n  if (isPositive || isInteger) {\n    return quotient;\n  }\n  return calculator.decrement(quotient);\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/divide/down.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/helpers/assert.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/helpers/assert.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assert: () => (/* binding */ assert)\n/* harmony export */ });\n/* eslint-disable functional/no-throw-statement, valid-jsdoc */\n/**\n * Assert a condition.\n *\n * @param condition - The condition to verify.\n * @param message - The error message to throw.\n *\n * @throws If the condition isn't met.\n */\nfunction assert(condition, message) {\n  if (!condition) {\n    throw new Error(\"[Dinero.js] \".concat(message));\n  }\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/helpers/assert.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/helpers/createDinero.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/helpers/createDinero.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDinero: () => (/* binding */ createDinero)\n/* harmony export */ });\n/* eslint-disable functional/no-mixed-type, functional/no-return-void, functional/no-expression-statement */\n\nfunction createDinero(_ref) {\n  var calculator = _ref.calculator,\n    onCreate = _ref.onCreate,\n    _ref$formatter = _ref.formatter,\n    formatter = _ref$formatter === void 0 ? {\n      toNumber: Number,\n      toString: String\n    } : _ref$formatter;\n  return function dinero(_ref2) {\n    var amount = _ref2.amount,\n      _ref2$currency = _ref2.currency,\n      code = _ref2$currency.code,\n      base = _ref2$currency.base,\n      exponent = _ref2$currency.exponent,\n      _ref2$scale = _ref2.scale,\n      scale = _ref2$scale === void 0 ? exponent : _ref2$scale;\n    var currency = {\n      code: code,\n      base: base,\n      exponent: exponent\n    };\n    onCreate === null || onCreate === void 0 ? void 0 : onCreate({\n      amount: amount,\n      currency: currency,\n      scale: scale\n    });\n    return {\n      calculator: calculator,\n      formatter: formatter,\n      create: dinero,\n      toJSON: function toJSON() {\n        return {\n          amount: amount,\n          currency: currency,\n          scale: scale\n        };\n      }\n    };\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/helpers/createDinero.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/types/Calculator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/types/Calculator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ComparisonOperator: () => (/* binding */ ComparisonOperator)\n/* harmony export */ });\n/* eslint-disable functional/no-mixed-type */\n\nvar ComparisonOperator;\n(function (ComparisonOperator) {\n  ComparisonOperator[ComparisonOperator[\"LT\"] = -1] = \"LT\";\n  ComparisonOperator[ComparisonOperator[\"EQ\"] = 0] = \"EQ\";\n  ComparisonOperator[ComparisonOperator[\"GT\"] = 1] = \"GT\";\n})(ComparisonOperator || (ComparisonOperator = {}));\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/types/Calculator.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/absolute.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/absolute.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   absolute: () => (/* binding */ absolute)\n/* harmony export */ });\n/* harmony import */ var _equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equal */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n/* harmony import */ var _lessThan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lessThan */ \"./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js\");\n\n\nfunction absolute(calculator) {\n  var equalFn = (0,_equal__WEBPACK_IMPORTED_MODULE_0__.equal)(calculator);\n  var lessThanFn = (0,_lessThan__WEBPACK_IMPORTED_MODULE_1__.lessThan)(calculator);\n  var zero = calculator.zero();\n  return function (input) {\n    if (equalFn(input, zero)) {\n      return zero;\n    }\n    if (lessThanFn(input, zero)) {\n      var minusOne = calculator.decrement(zero);\n      return calculator.multiply(minusOne, input);\n    }\n    return input;\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/absolute.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/computeBase.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/computeBase.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeBase: () => (/* binding */ computeBase)\n/* harmony export */ });\n/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ \"./node_modules/@dinero.js/core/dist/esm/utils/isArray.js\");\n\nfunction computeBase(calculator) {\n  return function (base) {\n    if ((0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(base)) {\n      return base.reduce(function (acc, curr) {\n        return calculator.multiply(acc, curr);\n      });\n    }\n    return base;\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/computeBase.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/distribute.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/distribute.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   distribute: () => (/* binding */ distribute)\n/* harmony export */ });\n/* harmony import */ var _equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equal */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n/* harmony import */ var _greaterThan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greaterThan */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js\");\n/* harmony import */ var _greaterThanOrEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./greaterThanOrEqual */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThanOrEqual.js\");\n/* harmony import */ var _lessThan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lessThan */ \"./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js\");\n/* eslint-disable functional/no-let, functional/no-loop-statement, functional/immutable-data, functional/no-expression-statement */\n\n\n\n\n\n/**\n * Returns a distribute function.\n *\n * @param calculator - The calculator to use.\n *\n * @returns The distribute function.\n */\nfunction distribute(calculator) {\n  return function (value, ratios) {\n    var equalFn = (0,_equal__WEBPACK_IMPORTED_MODULE_0__.equal)(calculator);\n    var greaterThanFn = (0,_greaterThan__WEBPACK_IMPORTED_MODULE_1__.greaterThan)(calculator);\n    var lessThanFn = (0,_lessThan__WEBPACK_IMPORTED_MODULE_2__.lessThan)(calculator);\n    var greaterThanOrEqualFn = (0,_greaterThanOrEqual__WEBPACK_IMPORTED_MODULE_3__.greaterThanOrEqual)(calculator);\n    var zero = calculator.zero();\n    var one = calculator.increment(zero);\n    var total = ratios.reduce(function (a, b) {\n      return calculator.add(a, b);\n    }, zero);\n    if (equalFn(total, zero)) {\n      return ratios;\n    }\n    var remainder = value;\n    var shares = ratios.map(function (ratio) {\n      var share = calculator.integerDivide(calculator.multiply(value, ratio), total) || zero;\n      remainder = calculator.subtract(remainder, share);\n      return share;\n    });\n    var isPositive = greaterThanOrEqualFn(value, zero);\n    var compare = isPositive ? greaterThanFn : lessThanFn;\n    var amount = isPositive ? one : calculator.decrement(zero);\n    var i = 0;\n    while (compare(remainder, zero)) {\n      if (!equalFn(ratios[i], zero)) {\n        shares[i] = calculator.add(shares[i], amount);\n        remainder = calculator.subtract(remainder, amount);\n      }\n      i++;\n    }\n    return shares;\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/distribute.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/equal.js":
/*!**************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/equal.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   equal: () => (/* binding */ equal)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@dinero.js/core/dist/esm/types/Calculator.js\");\n\n/**\n * Returns an equal function.\n *\n * @param calculator - The calculator to use.\n *\n * @returns The equal function.\n */\nfunction equal(calculator) {\n  return function (subject, comparator) {\n    return calculator.compare(subject, comparator) === _types__WEBPACK_IMPORTED_MODULE_0__.ComparisonOperator.EQ;\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/equal.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/getAmountAndScale.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/getAmountAndScale.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAmountAndScale: () => (/* binding */ getAmountAndScale)\n/* harmony export */ });\n/* harmony import */ var _isScaledAmount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isScaledAmount */ \"./node_modules/@dinero.js/core/dist/esm/utils/isScaledAmount.js\");\n\nfunction getAmountAndScale(value, zero) {\n  if ((0,_isScaledAmount__WEBPACK_IMPORTED_MODULE_0__.isScaledAmount)(value)) {\n    var _value$scale;\n    return {\n      amount: value.amount,\n      scale: (_value$scale = value === null || value === void 0 ? void 0 : value.scale) !== null && _value$scale !== void 0 ? _value$scale : zero\n    };\n  }\n  return {\n    amount: value,\n    scale: zero\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/getAmountAndScale.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/getDivisors.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/getDivisors.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDivisors: () => (/* binding */ getDivisors)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction getDivisors(calculator) {\n  var multiply = calculator.multiply;\n  return function (bases) {\n    return bases.reduce(function (divisors, _, i) {\n      var divisor = bases.slice(i).reduce(function (acc, curr) {\n        return multiply(acc, curr);\n      });\n      return [].concat(_toConsumableArray(divisors), [divisor]);\n    }, []);\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/getDivisors.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js":
/*!********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   greaterThan: () => (/* binding */ greaterThan)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@dinero.js/core/dist/esm/types/Calculator.js\");\n\n/**\n * Returns a greaterThan function.\n *\n * @param calculator - The calculator to use.\n *\n * @returns The greaterThan function.\n */\nfunction greaterThan(calculator) {\n  return function (subject, comparator) {\n    return calculator.compare(subject, comparator) === _types__WEBPACK_IMPORTED_MODULE_0__.ComparisonOperator.GT;\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/greaterThanOrEqual.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/greaterThanOrEqual.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   greaterThanOrEqual: () => (/* binding */ greaterThanOrEqual)\n/* harmony export */ });\n/* harmony import */ var _equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equal */ \"./node_modules/@dinero.js/core/dist/esm/utils/equal.js\");\n/* harmony import */ var _greaterThan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greaterThan */ \"./node_modules/@dinero.js/core/dist/esm/utils/greaterThan.js\");\n\n\n/**\n * Returns a greaterThanOrEqual function.\n *\n * @param calculator - The calculator to use.\n *\n * @returns The greaterThanOrEqual function.\n */\nfunction greaterThanOrEqual(calculator) {\n  return function (subject, comparator) {\n    return (0,_greaterThan__WEBPACK_IMPORTED_MODULE_0__.greaterThan)(calculator)(subject, comparator) || (0,_equal__WEBPACK_IMPORTED_MODULE_1__.equal)(calculator)(subject, comparator);\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/greaterThanOrEqual.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/isArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/isArray.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isArray: () => (/* binding */ isArray)\n/* harmony export */ });\nfunction isArray(maybeArray) {\n  return Array.isArray(maybeArray);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/isArray.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/isScaledAmount.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/isScaledAmount.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isScaledAmount: () => (/* binding */ isScaledAmount)\n/* harmony export */ });\nfunction isScaledAmount(amount) {\n  return amount === null || amount === void 0 ? void 0 : amount.hasOwnProperty('amount');\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/isScaledAmount.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lessThan: () => (/* binding */ lessThan)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./node_modules/@dinero.js/core/dist/esm/types/Calculator.js\");\n\n/**\n * Returns a lessThan function.\n *\n * @param calculator - The calculator to use.\n *\n * @returns The lessThan function.\n */\nfunction lessThan(calculator) {\n  return function (subject, comparator) {\n    return calculator.compare(subject, comparator) === _types__WEBPACK_IMPORTED_MODULE_0__.ComparisonOperator.LT;\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/core/dist/esm/utils/maximum.js":
/*!****************************************************************!*\
  !*** ./node_modules/@dinero.js/core/dist/esm/utils/maximum.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   maximum: () => (/* binding */ maximum)\n/* harmony export */ });\n/* harmony import */ var _lessThan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lessThan */ \"./node_modules/@dinero.js/core/dist/esm/utils/lessThan.js\");\n\n/**\n * Returns a maximum function.\n *\n * @param calculator - The calculator to use.\n *\n * @returns The maximum function.\n */\nfunction maximum(calculator) {\n  var lessThanFn = (0,_lessThan__WEBPACK_IMPORTED_MODULE_0__.lessThan)(calculator);\n  return function (values) {\n    return values.reduce(function (acc, curr) {\n      return lessThanFn(acc, curr) ? curr : acc;\n    });\n  };\n}\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/core/dist/esm/utils/maximum.js?");

/***/ }),

/***/ "./node_modules/@dinero.js/currencies/dist/esm/iso4217/amendments/168/usd.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@dinero.js/currencies/dist/esm/iso4217/amendments/168/usd.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   USD: () => (/* binding */ USD)\n/* harmony export */ });\n/**\n * United States dollar.\n */\nvar USD = {\n  code: 'USD',\n  base: 10,\n  exponent: 2\n};\n\n//# sourceURL=webpack://divvi/./node_modules/@dinero.js/currencies/dist/esm/iso4217/amendments/168/usd.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/api/add.js":
/*!****************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/api/add.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/api/add.js\");\n\n/**\n * Add up the passed Dinero objects.\n *\n * @param augend - The Dinero object to add to.\n * @param addend - The Dinero object to add.\n *\n * @returns A new Dinero object.\n *\n * @public\n */\nfunction add() {\n  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n    _ref[_key] = arguments[_key];\n  }\n  var augend = _ref[0],\n    addend = _ref[1];\n  var calculator = augend.calculator;\n  var addFn = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.safeAdd)(calculator);\n  return addFn(augend, addend);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/api/add.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/api/allocate.js":
/*!*********************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/api/allocate.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allocate: () => (/* binding */ allocate)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/api/allocate.js\");\n\n/**\n * Distribute the amount of a Dinero object across a list of ratios.\n *\n * @param dineroObject - The Dinero object to allocate from.\n * @param ratios - The ratios to allocate the amount to.\n *\n * @returns A new Dinero object.\n *\n * @public\n */\nfunction allocate() {\n  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n    _ref[_key] = arguments[_key];\n  }\n  var dineroObject = _ref[0],\n    ratios = _ref[1];\n  var calculator = dineroObject.calculator;\n  var allocateFn = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.safeAllocate)(calculator);\n  return allocateFn(dineroObject, ratios);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/api/allocate.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/api/isNegative.js":
/*!***********************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/api/isNegative.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isNegative: () => (/* binding */ isNegative)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/api/isNegative.js\");\n\n/**\n * Check whether a Dinero object is negative.\n *\n * @param dineroObject - The Dinero object to check.\n *\n * @returns Whether the Dinero object is negative.\n *\n * @public\n */\nfunction isNegative() {\n  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n    _ref[_key] = arguments[_key];\n  }\n  var dineroObject = _ref[0];\n  var calculator = dineroObject.calculator;\n  var isNegativeFn = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.isNegative)(calculator);\n  return isNegativeFn(dineroObject);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/api/isNegative.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/api/isPositive.js":
/*!***********************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/api/isPositive.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isPositive: () => (/* binding */ isPositive)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/api/isPositive.js\");\n\n/**\n * Check whether a Dinero object is positive.\n *\n * @param dineroObject - The Dinero object to check.\n *\n * @returns Whether the Dinero object is positive.\n *\n * @public\n */\nfunction isPositive() {\n  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n    _ref[_key] = arguments[_key];\n  }\n  var dineroObject = _ref[0];\n  var calculator = dineroObject.calculator;\n  var isPositiveFn = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.isPositive)(calculator);\n  return isPositiveFn(dineroObject);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/api/isPositive.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/api/isZero.js":
/*!*******************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/api/isZero.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isZero: () => (/* binding */ isZero)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/api/isZero.js\");\n\n/**\n * Check whether the value of a Dinero object is zero.\n *\n * @param dineroObject - The Dinero object to check.\n *\n * @returns Whether the value of a Dinero object is zero.\n *\n * @public\n */\nfunction isZero() {\n  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n    _ref[_key] = arguments[_key];\n  }\n  var dineroObject = _ref[0];\n  var calculator = dineroObject.calculator;\n  var isZeroFn = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.isZero)(calculator);\n  return isZeroFn(dineroObject);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/api/isZero.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/api/subtract.js":
/*!*********************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/api/subtract.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   subtract: () => (/* binding */ subtract)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/api/subtract.js\");\n\n/**\n * Subtract the passed Dinero objects.\n *\n * @param minuend - The Dinero object to subtract from.\n * @param subtrahend - The Dinero object to subtract.\n *\n * @returns A new Dinero object.\n *\n * @public\n */\nfunction subtract() {\n  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n    _ref[_key] = arguments[_key];\n  }\n  var minuend = _ref[0],\n    subtrahend = _ref[1];\n  var calculator = minuend.calculator;\n  var subtractFn = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.safeSubtract)(calculator);\n  return subtractFn(minuend, subtrahend);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/api/subtract.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/api/toDecimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/api/toDecimal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDecimal: () => (/* binding */ toDecimal)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/api/toDecimal.js\");\n\n/**\n * Get the amount of a Dinero object in decimal form.\n *\n * @param dineroObject - The Dinero object to format.\n * @param transformer - A transformer function.\n *\n * @returns The amount in decimal form.\n *\n * @public\n */\nfunction toDecimal() {\n  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {\n    _ref[_key] = arguments[_key];\n  }\n  var dineroObject = _ref[0],\n    transformer = _ref[1];\n  var calculator = dineroObject.calculator;\n  var toDecimalFn = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.toDecimal)(calculator);\n  return toDecimalFn(dineroObject, transformer);\n}\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/api/toDecimal.js?");

/***/ }),

/***/ "./node_modules/dinero.js/dist/esm/dinero.js":
/*!***************************************************!*\
  !*** ./node_modules/dinero.js/dist/esm/dinero.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dinero: () => (/* binding */ dinero)\n/* harmony export */ });\n/* harmony import */ var _dinero_js_calculator_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dinero.js/calculator-number */ \"./node_modules/@dinero.js/calculator-number/dist/esm/calculator.js\");\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/helpers/createDinero.js\");\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/helpers/assert.js\");\n/* harmony import */ var _dinero_js_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dinero.js/core */ \"./node_modules/@dinero.js/core/dist/esm/checks/messages.js\");\n/* eslint-disable functional/no-expression-statement */\n\n\n\n/**\n * Create a Dinero object.\n *\n * @param options.amount - The amount in minor currency units.\n * @param options.currency - The currency.\n * @param options.scale - The number of decimal places to represent.\n *\n * @returns The created Dinero object.\n *\n * @public\n */\nvar dinero = (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_0__.createDinero)({\n  calculator: _dinero_js_calculator_number__WEBPACK_IMPORTED_MODULE_1__.calculator,\n  onCreate: function onCreate(_ref) {\n    var amount = _ref.amount,\n      scale = _ref.scale;\n    (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_2__.assert)(Number.isInteger(amount), _dinero_js_core__WEBPACK_IMPORTED_MODULE_3__.INVALID_AMOUNT_MESSAGE);\n    (0,_dinero_js_core__WEBPACK_IMPORTED_MODULE_2__.assert)(Number.isInteger(scale), _dinero_js_core__WEBPACK_IMPORTED_MODULE_3__.INVALID_SCALE_MESSAGE);\n  }\n});\n\n//# sourceURL=webpack://divvi/./node_modules/dinero.js/dist/esm/dinero.js?");

/***/ }),

/***/ "./src/logic.ts":
/*!**********************!*\
  !*** ./src/logic.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/api/allocate.js\");\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/api/subtract.js\");\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/dinero.js\");\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/api/isZero.js\");\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/api/isPositive.js\");\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/api/add.js\");\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/api/isNegative.js\");\n/* harmony import */ var dinero_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dinero.js */ \"./node_modules/dinero.js/dist/esm/api/toDecimal.js\");\n/* harmony import */ var _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dinero.js/currencies */ \"./node_modules/@dinero.js/currencies/dist/esm/iso4217/amendments/168/usd.js\");\n/*\nMain logic for Divvi.\n\nContains functions to get and process user input, compute a bill,\nand store results.\n\nWritten by Anoush Khan and Dan Strauss, March 2023\nAdapted from Even Split code written by Anoush Khan and Dan Strauss, 2022\n*/\n\n\n// enum for payment type for a given person\nvar PayType;\n(function (PayType) {\n    PayType[\"Cash\"] = \"Cash\";\n    PayType[\"Exact\"] = \"Exact\";\n})(PayType || (PayType = {}));\n// enum for tip calculation method for a given bill\nvar TipType;\n(function (TipType) {\n    TipType[\"PreTaxPct\"] = \"PreTaxPct\";\n    TipType[\"PostTaxPct\"] = \"PostTaxPct\";\n    TipType[\"TipDollars\"] = \"TipDollars\";\n    TipType[\"TotalDollars\"] = \"TotalDollars\";\n})(TipType || (TipType = {}));\nfunction pallocate(amount, targets) {\n    // compute total of ratio list\n    var ratio_total = Object.values(targets).reduce(function (accumulator, currentValue) {\n        return accumulator + currentValue;\n    }, 0);\n    // init result dictionary\n    var result = {};\n    // set remainder to amount\n    var remainder = amount;\n    // allocate amount to targets and floor\n    for (var key in targets) {\n        result[key] = (0,dinero_js__WEBPACK_IMPORTED_MODULE_0__.allocate)(amount, [ratio_total - targets[key], targets[key]])[1]; // this will floor (underallocate) and have a positive remainder\n        // result[key] = allocate(amount, [targets[key], ratio_total - targets[key]])[0] // this will ceil (overalloacte) and have a negative remainder\n        remainder = (0,dinero_js__WEBPACK_IMPORTED_MODULE_1__.subtract)(remainder, result[key]);\n    }\n    // define one dinero\n    var one = (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 1, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD });\n    // handle the remainder if it exists\n    if ((0,dinero_js__WEBPACK_IMPORTED_MODULE_4__.isZero)(remainder)) {\n        // no need to do anything fancy\n        return result;\n    }\n    else if ((0,dinero_js__WEBPACK_IMPORTED_MODULE_5__.isPositive)(remainder)) {\n        // add one starting at the beginning of result\n        for (var key in result) {\n            if ((0,dinero_js__WEBPACK_IMPORTED_MODULE_4__.isZero)(remainder)) {\n                return result;\n            }\n            else {\n                result[key] = (0,dinero_js__WEBPACK_IMPORTED_MODULE_6__.add)(result[key], one);\n                remainder = (0,dinero_js__WEBPACK_IMPORTED_MODULE_1__.subtract)(remainder, one);\n            }\n        }\n    }\n    else if ((0,dinero_js__WEBPACK_IMPORTED_MODULE_7__.isNegative)(remainder)) {\n        // remove one starting at the end of result\n        Object.keys(result).reverse().forEach(function (key) {\n            if ((0,dinero_js__WEBPACK_IMPORTED_MODULE_4__.isZero)(remainder)) {\n                return result;\n            }\n            else {\n                result[key] = (0,dinero_js__WEBPACK_IMPORTED_MODULE_1__.subtract)(result[key], one);\n                remainder = (0,dinero_js__WEBPACK_IMPORTED_MODULE_6__.add)(remainder, one);\n            }\n        });\n        return result;\n    }\n}\nfunction getFrontendData() {\n    /* grab data from frontend and store it in the standard internal\n    data format */\n    // PLACEHOLDER FOR CODE TO GRAB DATA FROM FRONTEND\n    // RETURN DEMO BILL IN THE MEANTIME\n    // there should be a constraint on the tip field based on the tip type:\n    // if pre or post tax percent, can only enter whole numbers\n    // if tip dollars or total dollars, then can only enter currency\n    var dco_dinner = {\n        id: \"null\",\n        timestamp: Date(),\n        people: {\n            \"Grace\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 2200, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            },\n            \"Sachin\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 1500, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            },\n            \"Anoush\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 1900, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            },\n            \"Guadalupe\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 600, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            },\n            \"Sophia\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 700, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            }\n        },\n        tax_amt: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 588, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n        tip_type: TipType.PreTaxPct,\n        tip_pct_requested: 20,\n        tip_amt_requested: undefined,\n        tip_amt_computed: undefined,\n        total_pre_tax: undefined,\n        total: undefined\n    };\n    var dumpling_dinner = {\n        id: \"null\",\n        timestamp: Date(),\n        people: {\n            \"Anoush\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 2343, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            },\n            \"Seth\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 4562, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            }\n        },\n        tax_amt: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 483, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n        tip_type: TipType.PreTaxPct,\n        tip_pct_requested: 20,\n        tip_amt_requested: undefined,\n        tip_amt_computed: undefined,\n        total_pre_tax: undefined,\n        total: undefined\n    };\n    var squad_at_99 = {\n        id: \"null\",\n        timestamp: Date(),\n        people: {\n            \"Anoush\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 2343, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            },\n            \"Dan\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 4562, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Exact,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            },\n            \"Charlie\": {\n                contribution_pre_tax: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 4562, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n                pay_type: PayType.Cash,\n                contribution_ideal: undefined,\n                contribution_calculated: undefined\n            }\n        },\n        tax_amt: (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 483, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }),\n        tip_type: TipType.PreTaxPct,\n        tip_pct_requested: 20,\n        tip_amt_requested: undefined,\n        tip_amt_computed: undefined,\n        total_pre_tax: undefined,\n        total: undefined\n    };\n    return dco_dinner;\n    // return dumpling_dinner\n    // return squad_at_99\n}\nfunction computeBill(thisBill) {\n    // 1: compute pre_tax_total using each person's pre_tax_amt\n    thisBill.total_pre_tax = Object.values(thisBill.people).reduce(function (accumulator, currentValue) {\n        return (0,dinero_js__WEBPACK_IMPORTED_MODULE_6__.add)(accumulator, currentValue.contribution_pre_tax);\n    }, (0,dinero_js__WEBPACK_IMPORTED_MODULE_2__.dinero)({ amount: 0, currency: _dinero_js_currencies__WEBPACK_IMPORTED_MODULE_3__.USD }));\n    // console.log(toDecimal(thisBill.total_pre_tax))\n    // 2: compute tip amount using method flag stored in thisBill\n    // and 3: compute thisBill's total amount\n    // use Bill.tip_type, Bill.tip_pct_requested or Bill.tip_amt_requested, and Bill.pre_tax_total to compute Bill.total\n    switch (thisBill.tip_type) {\n        case TipType.PreTaxPct: {\n            // console.log('tip type pre tax pct')\n            // multiply pre tax total by the tip decimal amount to determine the computed tip amount\n            thisBill.tip_amt_computed = (0,dinero_js__WEBPACK_IMPORTED_MODULE_0__.allocate)(thisBill.total_pre_tax, [thisBill.tip_pct_requested, 100 - thisBill.tip_pct_requested])[0];\n            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount\n            thisBill.total = [thisBill.total_pre_tax, thisBill.tax_amt, thisBill.tip_amt_computed].reduce(dinero_js__WEBPACK_IMPORTED_MODULE_6__.add);\n            // console.log(toDecimal(thisBill.tip_amt_computed))\n            // console.log(toDecimal(thisBill.total))\n            break;\n        }\n        case TipType.PostTaxPct: {\n            // console.log('tip type post tax pct')\n            // add the pre tax total and tax amount then multiply by tip decimal amount to determine computed tip amount\n            thisBill.tip_amt_computed = (0,dinero_js__WEBPACK_IMPORTED_MODULE_0__.allocate)((0,dinero_js__WEBPACK_IMPORTED_MODULE_6__.add)(thisBill.total_pre_tax, thisBill.tax_amt), [thisBill.tip_pct_requested, 100 - thisBill.tip_pct_requested])[0];\n            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount\n            thisBill.total = [thisBill.total_pre_tax, thisBill.tax_amt, thisBill.tip_amt_computed].reduce(dinero_js__WEBPACK_IMPORTED_MODULE_6__.add);\n            // console.log(toDecimal(thisBill.tip_amt_computed))\n            // console.log(toDecimal(thisBill.total))\n            break;\n        }\n        case TipType.TipDollars: {\n            // console.log('tip type tip dollars')\n            // since thisBill.tip_amt_requested already represents the amount of the tip, assign it as such\n            thisBill.tip_amt_computed = thisBill.tip_amt_requested;\n            // add the pre tax total, tax, and the computed tip amount to determine the total bill amount\n            thisBill.total = [thisBill.total_pre_tax, thisBill.tax_amt, thisBill.tip_amt_computed].reduce(dinero_js__WEBPACK_IMPORTED_MODULE_6__.add);\n            // console.log(toDecimal(thisBill.tip_amt_computed))\n            // console.log(toDecimal(thisBill.total))\n            break;\n        }\n        case TipType.TotalDollars: {\n            // console.log('tip type total dollars')\n            // since thisBill.tip_amt_requested already represents the total, assign it as such\n            thisBill.total = thisBill.tip_amt_requested;\n            // for completeness, compute tip amount\n            var total_post_tax = (0,dinero_js__WEBPACK_IMPORTED_MODULE_6__.add)(thisBill.total_pre_tax, thisBill.tax_amt);\n            thisBill.tip_amt_computed = (0,dinero_js__WEBPACK_IMPORTED_MODULE_1__.subtract)(thisBill.total, total_post_tax);\n            // console.log(toDecimal(thisBill.tip_amt_computed))\n            // console.log(toDecimal(thisBill.total))\n            break;\n        }\n        default: {\n            throw new Error(\"Tip type stored in bill does not match enum val\");\n        }\n    }\n    // 4: determine each person's ideal contribution percentage\n    var total_pre_tax_decimal = +(0,dinero_js__WEBPACK_IMPORTED_MODULE_8__.toDecimal)(thisBill.total_pre_tax);\n    for (var person in thisBill.people) {\n        thisBill.people[person].contribution_ideal = +(0,dinero_js__WEBPACK_IMPORTED_MODULE_8__.toDecimal)(thisBill.people[person].contribution_pre_tax) / total_pre_tax_decimal;\n    }\n    // 5: if everyone is paying exact, use the ideal contribution percent to determine each person's contribution\n    // otherwise, determine rounded contribution for each cash person, then\n    // Recompute remaining balance and each exact person's contribution percentage to that balance, then\n    // determine each exact person's amount\n    // 5: determine rounded contribution for each cash person\n    var keys_cash_people = Object.keys(thisBill.people).reduce(function (filtered, key) {\n        if (thisBill.people[key].pay_type == PayType.Cash)\n            filtered.push(key);\n        return filtered;\n    }, []);\n    if (keys_cash_people.length == 0) {\n        // nobody is paying cash, so allocate thisBill.total over each Person.contribution_ideal\n        // TODO: this depends on the order of people and the allocated result staying the same. that feels too hack-y... is there a better way?\n        console.log('nobody is paying cash');\n        var people_keys_1 = Object.keys(thisBill.people);\n        var allocation_array = Object.keys(thisBill.people).reduce(function (allocation_array, key) {\n            allocation_array.push(thisBill.people[key].contribution_ideal);\n            return allocation_array;\n        }, []);\n        var allocated_total = (0,dinero_js__WEBPACK_IMPORTED_MODULE_0__.allocate)(thisBill.total, allocation_array);\n        allocated_total.forEach(function (amt, index) {\n            thisBill.people[people_keys_1[index]].contribution_calculated = amt;\n        });\n    }\n    else {\n        // some people are paying cash, so determine rounded contribution for each cash person, then\n        // Recompute remaining balance and each exact person's contribution percentage to that balance, then\n        // determine each exact person's amount\n        console.log('some people are paying cash');\n        // keys_cash_people.forEach( (key) => {\n        //     thisBill.people[key].contribution_calculated = allocate(thisBill.total, [thisBill.people[key].contribution_ideal, 1-thisBill.people[key].contribution_ideal])[0]\n        // })\n    }\n    // temp print results to console\n    console.log((0,dinero_js__WEBPACK_IMPORTED_MODULE_8__.toDecimal)(thisBill.total));\n    for (var key in thisBill.people) {\n        console.log(key);\n        console.log((0,dinero_js__WEBPACK_IMPORTED_MODULE_8__.toDecimal)(thisBill.people[key].contribution_calculated, function (_a) {\n            var value = _a.value, currency = _a.currency;\n            return \"\".concat(currency.code, \" \").concat(value);\n        }));\n    }\n    console.log('TEST PALLOCATE');\n    var testpeople = {};\n    for (var key in thisBill.people) {\n        testpeople[key] = thisBill.people[key].contribution_ideal;\n    }\n    var testing = pallocate(thisBill.total, testpeople);\n    for (var key in testing) {\n        console.log(key);\n        console.log((0,dinero_js__WEBPACK_IMPORTED_MODULE_8__.toDecimal)(testing[key]));\n    }\n    // 6: Recompute remaining balance and each exact person's contribution percentage to that balance\n    // 7: determine each exact person's amount\n    // console.log(toDecimal(thisBill.total))\n    return thisBill;\n}\nfunction saveDataToSession() {\n    /* save data to sessionStorage, where it is valid until\n    the session refreshes */\n}\nfunction retrieveDataFromSession() {\n    /* retrieve data from sessionStorage */\n}\nfunction saveDataToLocal() {\n    /* save data to localStorage, where it is valid until\n    browser cache is cleared */\n}\nfunction retrieveDataFromLocal() {\n    /* retrieve data from localStorage */\n}\nfunction displayResults() {\n    /* standard way to display bill results */\n}\nfunction main() {\n    /* main logic, triggered when \"compute\" button pressed */\n    computeBill(getFrontendData());\n    saveDataToSession();\n    retrieveDataFromSession();\n    displayResults();\n}\nfunction saveCurrentBill() {\n    /* logic to save current bill, triggered when \"save bill\" button pressed */\n    retrieveDataFromSession();\n    saveDataToLocal();\n}\nfunction testing() {\n    console.log('Hello!!!!');\n}\nconsole.log(computeBill(getFrontendData()));\n\n\n//# sourceURL=webpack://divvi/./src/logic.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/logic.ts");
/******/ 	
/******/ })()
;
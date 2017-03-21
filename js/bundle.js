/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["carbon.core"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["carbon.vendor"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NumberField = undefined;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(5);

var _field = __webpack_require__(6);

var _field2 = _interopRequireDefault(_field);

var _withStore = __webpack_require__(8);

var _withStore2 = _interopRequireDefault(_withStore);

var _withSetup = __webpack_require__(7);

var _withSetup2 = _interopRequireDefault(_withSetup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a numeric field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 */
var NumberField = exports.NumberField = function NumberField(_ref) {
	var name = _ref.name,
	    field = _ref.field,
	    handleChange = _ref.handleChange;

	return _react2.default.createElement('input', {
		type: 'number',
		name: name,
		id: field.id,
		className: 'regular-text',
		value: field.value,
		max: field.max,
		min: field.min,
		step: field.step,
		pattern: '[0-9]*',
		onChange: handleChange });
};

/**
 * Validate the props.
 *
 * @type {Object}
 */


/**
 * The internal dependencies.
 */
/**
 * The external dependencies.
 */
NumberField.propTypes = {
	name: _react.PropTypes.string.isRequired,
	field: _react.PropTypes.shape({
		id: _react.PropTypes.string.isRequired,
		value: _react.PropTypes.string,
		min: _react.PropTypes.number.isRequired,
		max: _react.PropTypes.number.isRequired,
		step: _react.PropTypes.number.isRequired
	}).isRequired,
	handleChange: _react.PropTypes.func.isRequired
};

/**
 * Sync the input value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
var handleChange = function handleChange(_ref2) {
	var field = _ref2.field,
	    updateField = _ref2.updateField;
	return function (_ref3) {
		var value = _ref3.target.value;
		return updateField(field.id, { value: value });
	};
};

exports.default = (0, _recompose.compose)((0, _withStore2.default)(), (0, _withSetup2.default)(), (0, _recompose.withHandlers)({ handleChange: handleChange }))(NumberField);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(23);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(2);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(322);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registry = __webpack_require__(3);

var _field = __webpack_require__(2);

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The internal dependencies.
 */
(0, _registry.registerFieldComponent)('Number', _field2.default);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
webpackHotUpdate(0,{

/***/ 161:
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./frontend/reducers/index.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _types = __webpack_require__(/*! ../actions/types */ 354);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction rootReducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'Devany' };\n    var action = arguments[1];\n\n    switch (action.type) {\n        case types.ADD_BIO_INFO:\n            return Object.assign({}, state, {\n                bioInfo: [].concat(_toConsumableArray(state.bioInfo), [content, header]) });\n            break;\n        default:\n            return state;\n    }\n}\n\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL3JlZHVjZXJzL2luZGV4LmpzP2NmZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cblxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSB7bmFtZTogJ0RldmFueSd9LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgXHRjYXNlIHR5cGVzLkFERF9CSU9fSU5GTzpcbiAgICBcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgXHRcdFx0YmlvSW5mbzpbLi4uc3RhdGUuYmlvSW5mbyxcbiAgICBcdFx0XHRcdGNvbnRlbnQ6IGFjdGlvbi5jb250ZW50LFxuICAgIFx0XHRcdFx0aGVhZGVyOiBhY3Rpb24uaGVhZGVyXG4gICAgXHRcdFx0XX1cbiAgICBcdFx0KTtcbiAgICBcdFx0YnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL3JlZHVjZXJzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///161\n");

/***/ }),

/***/ 353:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./frontend/actions/index.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.addBioInfo = undefined;\n\nvar _types = __webpack_require__(/*! ./types */ 354);\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar addBioInfo = exports.addBioInfo = function addBioInfo(header, content) {\n\treturn {\n\t\ttype: types.ADD_BIO_INFO,\n\t\theader: header,\n\t\tcontent: content\n\t};\n}; // Action Creators//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2FjdGlvbnMvaW5kZXguanM/NGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY3Rpb24gQ3JlYXRvcnNcblxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhZGRCaW9JbmZvID0gKGhlYWRlciwgY29udGVudCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IHR5cGVzLkFERF9CSU9fSU5GTyxcblx0XHRoZWFkZXI6IGhlYWRlcixcblx0XHRjb250ZW50OiBjb250ZW50XG5cdH07XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9hY3Rpb25zL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///353\n");

/***/ })

})
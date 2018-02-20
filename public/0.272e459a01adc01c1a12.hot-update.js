webpackHotUpdate(0,{

/***/ 154:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/containers/BasicExample.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 225);\n\nvar _MemberPage = __webpack_require__(/*! ../components/MemberPage */ 152);\n\nvar _MemberPage2 = _interopRequireDefault(_MemberPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BasicExample = function BasicExample() {\n  return _react2.default.createElement(\n    _reactRouterDom.BrowserRouter,\n    null,\n    _react2.default.createElement(\n      \"div\",\n      null,\n      _react2.default.createElement(\n        \"ul\",\n        null,\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/\" },\n            \"Home\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/about\" },\n            \"About\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/topics\" },\n            \"Topics\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/memberpage\" },\n            \"MemberPage\"\n          )\n        )\n      ),\n      _react2.default.createElement(\"hr\", null),\n      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: \"/\", component: Home }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/about\", component: About }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/topics\", component: Topics }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/memberpage\", component: _MemberPage2.default })\n    )\n  );\n};\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h2\",\n      null,\n      \"Home\"\n    )\n  );\n};\n\nvar About = function About() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h2\",\n      null,\n      \"About\"\n    )\n  );\n};\n\nvar Topics = function Topics(_ref) {\n  var match = _ref.match;\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h2\",\n      null,\n      \"Topics\"\n    ),\n    _react2.default.createElement(\n      \"ul\",\n      null,\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + \"/rendering\" },\n          \"Rendering with React\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + \"/components\" },\n          \"Components\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + \"/props-v-state\" },\n          \"Props v. State\"\n        )\n      )\n    ),\n    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + \"/:topicId\", component: Topic }),\n    _react2.default.createElement(_reactRouterDom.Route, {\n      exact: true,\n      path: match.url,\n      render: function render() {\n        return _react2.default.createElement(\n          \"h3\",\n          null,\n          \"Please select a topic.\"\n        );\n      }\n    })\n  );\n};\n\nvar Topic = function Topic(_ref2) {\n  var match = _ref2.match;\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h3\",\n      null,\n      match.params.topicId\n    )\n  );\n};\n\nexports.default = BasicExample;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvQmFzaWNFeGFtcGxlLmpzPzdlN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBNZW1iZXJQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVtYmVyUGFnZSc7XG5cbmNvbnN0IEJhc2ljRXhhbXBsZSA9ICgpID0+IChcbiA8Um91dGVyPlxuICAgPGRpdj5cbiAgICAgPHVsPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgICA8bGk+XG4gICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgdG89XCIvdG9waWNzXCI+VG9waWNzPC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgdG89XCIvbWVtYmVycGFnZVwiPk1lbWJlclBhZ2U8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgPC91bD5cblxuICAgICA8aHIgLz5cblxuICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgPFJvdXRlIHBhdGg9XCIvdG9waWNzXCIgY29tcG9uZW50PXtUb3BpY3N9IC8+XG4gICAgIDxSb3V0ZSBwYXRoPVwiL21lbWJlcnBhZ2VcIiBjb21wb25lbnQ9e01lbWJlclBhZ2V9Lz5cbiAgIDwvZGl2PlxuIDwvUm91dGVyPlxuKTtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiA8ZGl2PlxuICAgPGgyPkhvbWU8L2gyPlxuIDwvZGl2PlxuKTtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiAoXG4gPGRpdj5cbiAgIDxoMj5BYm91dDwvaDI+XG4gPC9kaXY+XG4pO1xuXG5cbmNvbnN0IFRvcGljcyA9ICh7IG1hdGNoIH0pID0+IChcbiA8ZGl2PlxuICAgPGgyPlRvcGljczwvaDI+XG4gICA8dWw+XG4gICAgIDxsaT5cbiAgICAgICA8TGluayB0bz17YCR7bWF0Y2gudXJsfS9yZW5kZXJpbmdgfT5SZW5kZXJpbmcgd2l0aCBSZWFjdDwvTGluaz5cbiAgICAgPC9saT5cbiAgICAgPGxpPlxuICAgICAgIDxMaW5rIHRvPXtgJHttYXRjaC51cmx9L2NvbXBvbmVudHNgfT5Db21wb25lbnRzPC9MaW5rPlxuICAgICA8L2xpPlxuICAgICA8bGk+XG4gICAgICAgPExpbmsgdG89e2Ake21hdGNoLnVybH0vcHJvcHMtdi1zdGF0ZWB9PlByb3BzIHYuIFN0YXRlPC9MaW5rPlxuICAgICA8L2xpPlxuICAgPC91bD5cblxuICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0vOnRvcGljSWRgfSBjb21wb25lbnQ9e1RvcGljfSAvPlxuICAgPFJvdXRlXG4gICAgIGV4YWN0XG4gICAgIHBhdGg9e21hdGNoLnVybH1cbiAgICAgcmVuZGVyPXsoKSA9PiA8aDM+UGxlYXNlIHNlbGVjdCBhIHRvcGljLjwvaDM+fVxuICAgLz5cbiA8L2Rpdj5cbik7XG5cbmNvbnN0IFRvcGljID0gKHsgbWF0Y2ggfSkgPT4gKFxuIDxkaXY+XG4gICA8aDM+e21hdGNoLnBhcmFtcy50b3BpY0lkfTwvaDM+XG4gPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0V4YW1wbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29udGFpbmVycy9CYXNpY0V4YW1wbGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVkE7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBREE7QUFEQTtBQUNBO0FBMkJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFmQTtBQURBO0FBQ0E7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///154\n");

/***/ })

})
webpackHotUpdate(0,{

/***/ 154:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/containers/BasicExample.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 225);\n\nvar _MemberPage = __webpack_require__(/*! ../components/MemberPage */ 152);\n\nvar _MemberPage2 = _interopRequireDefault(_MemberPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BasicExample = function BasicExample() {\n  return _react2.default.createElement(\n    _reactRouterDom.BrowserRouter,\n    null,\n    _react2.default.createElement(\n      \"div\",\n      null,\n      _react2.default.createElement(\n        \"ul\",\n        null,\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/\" },\n            \"Home\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/about\" },\n            \"About\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/topics\" },\n            \"Topics\"\n          )\n        ),\n        _react2.default.createElement(\n          \"li\",\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/memberpage\" },\n            \"MemberPage\"\n          )\n        )\n      ),\n      _react2.default.createElement(\"hr\", null),\n      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: \"/\", component: _MemberPage2.default }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/about\", component: About }),\n      _react2.default.createElement(_reactRouterDom.Route, { path: \"/topics\", component: Topics })\n    )\n  );\n};\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h2\",\n      null,\n      \"Home\"\n    )\n  );\n};\n\nvar About = function About() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h2\",\n      null,\n      \"About\"\n    )\n  );\n};\n\nvar Topics = function Topics(_ref) {\n  var match = _ref.match;\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h2\",\n      null,\n      \"Topics\"\n    ),\n    _react2.default.createElement(\n      \"ul\",\n      null,\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + \"/rendering\" },\n          \"Rendering with React\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + \"/components\" },\n          \"Components\"\n        )\n      ),\n      _react2.default.createElement(\n        \"li\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: match.url + \"/props-v-state\" },\n          \"Props v. State\"\n        )\n      )\n    ),\n    _react2.default.createElement(_reactRouterDom.Route, { path: match.url + \"/:topicId\", component: Topic }),\n    _react2.default.createElement(_reactRouterDom.Route, {\n      exact: true,\n      path: match.url,\n      render: function render() {\n        return _react2.default.createElement(\n          \"h3\",\n          null,\n          \"Please select a topic.\"\n        );\n      }\n    })\n  );\n};\n\nvar Topic = function Topic(_ref2) {\n  var match = _ref2.match;\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"h3\",\n      null,\n      match.params.topicId\n    )\n  );\n};\n\nexports.default = BasicExample;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTU0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvQmFzaWNFeGFtcGxlLmpzPzdlN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBNZW1iZXJQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVtYmVyUGFnZSc7XG5cbmNvbnN0IEJhc2ljRXhhbXBsZSA9ICgpID0+IChcbiA8Um91dGVyPlxuICAgPGRpdj5cbiAgICAgPHVsPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgICA8bGk+XG4gICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgdG89XCIvdG9waWNzXCI+VG9waWNzPC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgdG89XCIvbWVtYmVycGFnZVwiPk1lbWJlclBhZ2U8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgPC91bD5cblxuICAgICA8aHIgLz5cblxuICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01lbWJlclBhZ2V9IC8+XG4gICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgPFJvdXRlIHBhdGg9XCIvdG9waWNzXCIgY29tcG9uZW50PXtUb3BpY3N9IC8+XG4gICA8L2Rpdj5cbiA8L1JvdXRlcj5cbik7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gPGRpdj5cbiAgIDxoMj5Ib21lPC9oMj5cbiA8L2Rpdj5cbik7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4gKFxuIDxkaXY+XG4gICA8aDI+QWJvdXQ8L2gyPlxuIDwvZGl2PlxuKTtcblxuY29uc3QgVG9waWNzID0gKHsgbWF0Y2ggfSkgPT4gKFxuIDxkaXY+XG4gICA8aDI+VG9waWNzPC9oMj5cbiAgIDx1bD5cbiAgICAgPGxpPlxuICAgICAgIDxMaW5rIHRvPXtgJHttYXRjaC51cmx9L3JlbmRlcmluZ2B9PlJlbmRlcmluZyB3aXRoIFJlYWN0PC9MaW5rPlxuICAgICA8L2xpPlxuICAgICA8bGk+XG4gICAgICAgPExpbmsgdG89e2Ake21hdGNoLnVybH0vY29tcG9uZW50c2B9PkNvbXBvbmVudHM8L0xpbms+XG4gICAgIDwvbGk+XG4gICAgIDxsaT5cbiAgICAgICA8TGluayB0bz17YCR7bWF0Y2gudXJsfS9wcm9wcy12LXN0YXRlYH0+UHJvcHMgdi4gU3RhdGU8L0xpbms+XG4gICAgIDwvbGk+XG4gICA8L3VsPlxuXG4gICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS86dG9waWNJZGB9IGNvbXBvbmVudD17VG9waWN9IC8+XG4gICA8Um91dGVcbiAgICAgZXhhY3RcbiAgICAgcGF0aD17bWF0Y2gudXJsfVxuICAgICByZW5kZXI9eygpID0+IDxoMz5QbGVhc2Ugc2VsZWN0IGEgdG9waWMuPC9oMz59XG4gICAvPlxuIDwvZGl2PlxuKTtcblxuY29uc3QgVG9waWMgPSAoeyBtYXRjaCB9KSA9PiAoXG4gPGRpdj5cbiAgIDxoMz57bWF0Y2gucGFyYW1zLnRvcGljSWR9PC9oMz5cbiA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljRXhhbXBsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL0Jhc2ljRXhhbXBsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFWQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBcEJBO0FBREE7QUFEQTtBQUNBO0FBMEJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFmQTtBQURBO0FBQ0E7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///154\n");

/***/ })

})
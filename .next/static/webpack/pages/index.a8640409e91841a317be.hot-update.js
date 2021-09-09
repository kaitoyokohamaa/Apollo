"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DogPhoto\": function() { return /* binding */ DogPhoto; }\n/* harmony export */ });\n/* harmony import */ var _Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/yoko/Desktop/Apollo/pages/index.tsx\",\n    _templateObject,\n    _templateObject2,\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar GET_DOGS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject || (_templateObject = (0,_Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query GetDogs {\\n    dogs {\\n      id\\n      breed\\n    }\\n  }\\n\"])));\nvar GET_DOC_PHOTO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject2 || (_templateObject2 = (0,_Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query Dog($breed: String!) {\\n    dog(breed: $breed) {\\n      id\\n      displayImage\\n    }\\n  }\\n\"])));\nvar DogPhoto = function DogPhoto(_ref) {\n  _s();\n\n  var breed = _ref.breed;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_DOC_PHOTO, {\n    variables: {\n      breed: breed\n    },\n    networkStatus: strue\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      refetch = _useQuery.refetch,\n      networkStatus = _useQuery.networkStatus;\n\n  if (loading) return null;\n  if (error) return \"Error! \".concat(error);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n      src: data.dog.displayImage,\n      style: {\n        height: 100,\n        width: 100\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return refetch();\n      },\n      children: \"Refetch!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DogPhoto, \"j29cbCi1dDZjgcxJlyOC7zMUc6M=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery];\n});\n\n_c = DogPhoto;\n\nvar Home = function Home(_ref2) {\n  _s2();\n\n  var onDogSelected = _ref2.onDogSelected;\n\n  var _useQuery2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_DOGS),\n      loading = _useQuery2.loading,\n      error = _useQuery2.error,\n      data = _useQuery2.data;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 23\n  }, _this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 21\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n      name: \"dog\",\n      onChange: onDogSelected,\n      children: data.dogs.map(function (dog) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n          value: dog.breed,\n          children: dog.breed\n        }, dog.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s2(Home, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery];\n});\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DogPhoto\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBLElBQU1FLFFBQVEsR0FBR0QsbURBQUgscVFBQWQ7QUFTQSxJQUFNRSxhQUFhLEdBQUdGLG1EQUFILHlTQUFuQjtBQVNPLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ3JDLGtCQUF5REwsd0RBQVEsQ0FDL0RHLGFBRCtELEVBRS9EO0FBQ0VHLElBQUFBLFNBQVMsRUFBRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUxBO0FBQUYsS0FEYjtBQUVFRSxJQUFBQSxhQUFhLEVBQUVDO0FBRmpCLEdBRitELENBQWpFO0FBQUEsTUFBUUMsT0FBUixhQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLGFBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixhQUF3QkEsSUFBeEI7QUFBQSxNQUE4QkMsT0FBOUIsYUFBOEJBLE9BQTlCO0FBQUEsTUFBdUNMLGFBQXZDLGFBQXVDQSxhQUF2Qzs7QUFPQSxNQUFJRSxPQUFKLEVBQWEsT0FBTyxJQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLHdCQUFpQkEsS0FBakI7QUFFWCxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFQyxJQUFJLENBQUNFLEdBQUwsQ0FBU0MsWUFEaEI7QUFFRSxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFLEdBQVY7QUFBZUMsUUFBQUEsS0FBSyxFQUFFO0FBQXRCO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNSixPQUFPLEVBQWI7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FwQk07O0dBQU1SO1VBQzhDSjs7O0tBRDlDSTs7QUFxQmIsSUFBTWEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixRQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxhQUFvQixTQUFwQkEsYUFBb0I7O0FBQzVDLG1CQUFpQ2xCLHdEQUFRLENBQUNFLFFBQUQsQ0FBekM7QUFBQSxNQUFRTyxPQUFSLGNBQVFBLE9BQVI7QUFBQSxNQUFpQkMsS0FBakIsY0FBaUJBLEtBQWpCO0FBQUEsTUFBd0JDLElBQXhCLGNBQXdCQSxJQUF4Qjs7QUFDQSxNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ1gsc0JBQ0U7QUFBQSwyQkFFRTtBQUFRLFVBQUksRUFBQyxLQUFiO0FBQW1CLGNBQVEsRUFBRVEsYUFBN0I7QUFBQSxnQkFDR1AsSUFBSSxDQUFDUSxJQUFMLENBQVVDLEdBQVYsQ0FBYyxVQUFDUCxHQUFEO0FBQUEsNEJBQ2I7QUFBcUIsZUFBSyxFQUFFQSxHQUFHLENBQUNSLEtBQWhDO0FBQUEsb0JBQ0dRLEdBQUcsQ0FBQ1I7QUFEUCxXQUFhUSxHQUFHLENBQUNRLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBWUQsQ0FoQkQ7O0lBQU1KO1VBQzZCakI7OztNQUQ3QmlCO0FBa0JOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD9kYjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5jb25zdCBHRVRfRE9HUyA9IGdxbGBcbiAgcXVlcnkgR2V0RG9ncyB7XG4gICAgZG9ncyB7XG4gICAgICBpZFxuICAgICAgYnJlZWRcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEdFVF9ET0NfUEhPVE8gPSBncWxgXG4gIHF1ZXJ5IERvZygkYnJlZWQ6IFN0cmluZyEpIHtcbiAgICBkb2coYnJlZWQ6ICRicmVlZCkge1xuICAgICAgaWRcbiAgICAgIGRpc3BsYXlJbWFnZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERvZ1Bob3RvID0gKHsgYnJlZWQgfSkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCByZWZldGNoLCBuZXR3b3JrU3RhdHVzIH0gPSB1c2VRdWVyeShcbiAgICBHRVRfRE9DX1BIT1RPLFxuICAgIHtcbiAgICAgIHZhcmlhYmxlczogeyBicmVlZCB9LFxuICAgICAgbmV0d29ya1N0YXR1czogc3RydWUsXG4gICAgfVxuICApO1xuICBpZiAobG9hZGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvcn1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtkYXRhLmRvZy5kaXNwbGF5SW1hZ2V9XG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogMTAwLCB3aWR0aDogMTAwIH19XG4gICAgICA+PC9pbWc+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlZmV0Y2goKX0+UmVmZXRjaCE8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICh7IG9uRG9nU2VsZWN0ZWQgfSkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfRE9HUyk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yPC9wPjtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxEb2dQaG90byAvPiAqL31cbiAgICAgIDxzZWxlY3QgbmFtZT1cImRvZ1wiIG9uQ2hhbmdlPXtvbkRvZ1NlbGVjdGVkfT5cbiAgICAgICAge2RhdGEuZG9ncy5tYXAoKGRvZykgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtkb2cuaWR9IHZhbHVlPXtkb2cuYnJlZWR9PlxuICAgICAgICAgICAge2RvZy5icmVlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJHRVRfRE9HUyIsIkdFVF9ET0NfUEhPVE8iLCJEb2dQaG90byIsImJyZWVkIiwidmFyaWFibGVzIiwibmV0d29ya1N0YXR1cyIsInN0cnVlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInJlZmV0Y2giLCJkb2ciLCJkaXNwbGF5SW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsIkhvbWUiLCJvbkRvZ1NlbGVjdGVkIiwiZG9ncyIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
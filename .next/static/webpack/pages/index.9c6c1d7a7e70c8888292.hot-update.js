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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DogPhoto\": function() { return /* binding */ DogPhoto; }\n/* harmony export */ });\n/* harmony import */ var _Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/yoko/Desktop/Apollo/pages/index.tsx\",\n    _templateObject,\n    _templateObject2,\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar GET_DOGS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject || (_templateObject = (0,_Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query GetDogs {\\n    dogs {\\n      id\\n      breed\\n    }\\n  }\\n\"])));\nvar GET_DOC_PHOTO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject2 || (_templateObject2 = (0,_Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query Dog($breed: String!) {\\n    dog(breed: $breed) {\\n      id\\n      displayImage\\n    }\\n  }\\n\"])));\nvar DogPhoto = function DogPhoto(_ref) {\n  _s();\n\n  var breed = _ref.breed;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_DOC_PHOTO, {\n    variables: {\n      breed: breed\n    },\n    notifyOnNetworkStatusChange: true\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      refetch = _useQuery.refetch,\n      networkStatus = _useQuery.networkStatus;\n\n  if (loading) return null;\n  if (error) return \"Error! \".concat(error);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n      src: data.dog.displayImage,\n      style: {\n        height: 100,\n        width: 100\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return refetch();\n      },\n      children: \"Refetch!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(DogPhoto, \"j29cbCi1dDZjgcxJlyOC7zMUc6M=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery];\n});\n\n_c = DogPhoto;\n\nvar Home = function Home(_ref2) {\n  _s2();\n\n  var onDogSelected = _ref2.onDogSelected;\n\n  var _useQuery2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_DOGS),\n      loading = _useQuery2.loading,\n      error = _useQuery2.error,\n      data = _useQuery2.data;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 23\n  }, _this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 21\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n      name: \"dog\",\n      onChange: onDogSelected,\n      children: data.dogs.map(function (dog) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n          value: dog.breed,\n          children: dog.breed\n        }, dog.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s2(Home, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery];\n});\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DogPhoto\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUVBLElBQU1FLFFBQVEsR0FBR0QsbURBQUgscVFBQWQ7QUFTQSxJQUFNRSxhQUFhLEdBQUdGLG1EQUFILHlTQUFuQjtBQVNPLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ3JDLGtCQUF5REwsd0RBQVEsQ0FDL0RHLGFBRCtELEVBRS9EO0FBQ0VHLElBQUFBLFNBQVMsRUFBRTtBQUFFRCxNQUFBQSxLQUFLLEVBQUxBO0FBQUYsS0FEYjtBQUVFRSxJQUFBQSwyQkFBMkIsRUFBRTtBQUYvQixHQUYrRCxDQUFqRTtBQUFBLE1BQVFDLE9BQVIsYUFBUUEsT0FBUjtBQUFBLE1BQWlCQyxLQUFqQixhQUFpQkEsS0FBakI7QUFBQSxNQUF3QkMsSUFBeEIsYUFBd0JBLElBQXhCO0FBQUEsTUFBOEJDLE9BQTlCLGFBQThCQSxPQUE5QjtBQUFBLE1BQXVDQyxhQUF2QyxhQUF1Q0EsYUFBdkM7O0FBT0EsTUFBSUosT0FBSixFQUFhLE9BQU8sSUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyx3QkFBaUJBLEtBQWpCO0FBRVgsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBRUMsSUFBSSxDQUFDRyxHQUFMLENBQVNDLFlBRGhCO0FBRUUsV0FBSyxFQUFFO0FBQUVDLFFBQUFBLE1BQU0sRUFBRSxHQUFWO0FBQWVDLFFBQUFBLEtBQUssRUFBRTtBQUF0QjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUwsT0FBTyxFQUFiO0FBQUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBcEJNOztHQUFNUDtVQUM4Q0o7OztLQUQ5Q0k7O0FBcUJiLElBQU1hLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsUUFBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsU0FBcEJBLGFBQW9COztBQUM1QyxtQkFBaUNsQix3REFBUSxDQUFDRSxRQUFELENBQXpDO0FBQUEsTUFBUU0sT0FBUixjQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLGNBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixjQUF3QkEsSUFBeEI7O0FBQ0EsTUFBSUYsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNYLHNCQUNFO0FBQUEsMkJBRUU7QUFBUSxVQUFJLEVBQUMsS0FBYjtBQUFtQixjQUFRLEVBQUVTLGFBQTdCO0FBQUEsZ0JBQ0dSLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQ1AsR0FBRDtBQUFBLDRCQUNiO0FBQXFCLGVBQUssRUFBRUEsR0FBRyxDQUFDUixLQUFoQztBQUFBLG9CQUNHUSxHQUFHLENBQUNSO0FBRFAsV0FBYVEsR0FBRyxDQUFDUSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERjtBQVlELENBaEJEOztJQUFNSjtVQUM2QmpCOzs7TUFEN0JpQjtBQWtCTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgR0VUX0RPR1MgPSBncWxgXG4gIHF1ZXJ5IEdldERvZ3Mge1xuICAgIGRvZ3Mge1xuICAgICAgaWRcbiAgICAgIGJyZWVkXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBHRVRfRE9DX1BIT1RPID0gZ3FsYFxuICBxdWVyeSBEb2coJGJyZWVkOiBTdHJpbmchKSB7XG4gICAgZG9nKGJyZWVkOiAkYnJlZWQpIHtcbiAgICAgIGlkXG4gICAgICBkaXNwbGF5SW1hZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEb2dQaG90byA9ICh7IGJyZWVkIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSwgcmVmZXRjaCwgbmV0d29ya1N0YXR1cyB9ID0gdXNlUXVlcnkoXG4gICAgR0VUX0RPQ19QSE9UTyxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IHsgYnJlZWQgfSxcbiAgICAgIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcbiAgICB9XG4gICk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gbnVsbDtcbiAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yISAke2Vycm9yfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2RhdGEuZG9nLmRpc3BsYXlJbWFnZX1cbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxMDAsIHdpZHRoOiAxMDAgfX1cbiAgICAgID48L2ltZz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVmZXRjaCgpfT5SZWZldGNoITwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKHsgb25Eb2dTZWxlY3RlZCB9KSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9ET0dTKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I8L3A+O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPERvZ1Bob3RvIC8+ICovfVxuICAgICAgPHNlbGVjdCBuYW1lPVwiZG9nXCIgb25DaGFuZ2U9e29uRG9nU2VsZWN0ZWR9PlxuICAgICAgICB7ZGF0YS5kb2dzLm1hcCgoZG9nKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2RvZy5pZH0gdmFsdWU9e2RvZy5icmVlZH0+XG4gICAgICAgICAgICB7ZG9nLmJyZWVkfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsIkdFVF9ET0dTIiwiR0VUX0RPQ19QSE9UTyIsIkRvZ1Bob3RvIiwiYnJlZWQiLCJ2YXJpYWJsZXMiLCJub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicmVmZXRjaCIsIm5ldHdvcmtTdGF0dXMiLCJkb2ciLCJkaXNwbGF5SW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsIkhvbWUiLCJvbkRvZ1NlbGVjdGVkIiwiZG9ncyIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
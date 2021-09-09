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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var _Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/yoko/Desktop/Apollo/pages/index.tsx\",\n    _templateObject,\n    _templateObject2,\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\n\nvar GET_DOGS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject || (_templateObject = (0,_Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query GetDogs {\\n    dogs {\\n      id\\n      breed\\n    }\\n  }\\n\"])));\nvar GET_DOC_PHOTO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject2 || (_templateObject2 = (0,_Users_yoko_Desktop_Apollo_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  query Dog($breed: String!) {\\n    dog(breed: $breed) {\\n      id\\n      displayImage\\n    }\\n  }\\n\"])));\n\nfunction DogPhoto(_ref) {\n  _s();\n\n  var breed = _ref.breed;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_DOC_PHOTO, {\n    variables: {\n      breed: breed\n    },\n    notifyOnNetworkStatusChange: true\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data,\n      refetch = _useQuery.refetch,\n      networkStatus = _useQuery.networkStatus;\n\n  if (networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_3__.NetworkStatus.refetch) return \"Refetching!\";\n  if (loading) return null;\n  if (error) return \"Error! \".concat(error);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n      src: data.dog.displayImage,\n      style: {\n        height: 100,\n        width: 100\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return refetch();\n      },\n      children: \"Refetch!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DogPhoto, \"j29cbCi1dDZjgcxJlyOC7zMUc6M=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = DogPhoto;\n\nvar Dog = function Dog(_ref2) {\n  _s2();\n\n  var onDogSelected = _ref2.onDogSelected;\n\n  var _useQuery2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_DOGS),\n      loading = _useQuery2.loading,\n      error = _useQuery2.error,\n      data = _useQuery2.data;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 23\n  }, _this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n    children: \"Error\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 21\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"select\", {\n      name: \"dog\",\n      onChange: onDogSelected,\n      children: data.dogs.map(function (dog) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"option\", {\n          value: dog.breed,\n          children: dog.breed\n        }, dog.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s2(Dog, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c2 = Dog;\nfunction App() {\n  _s3();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      selectedDog = _useState[0],\n      setSelectedDog = _useState[1];\n\n  var onDogSelected = function onDogSelected(_ref3) {\n    var target = _ref3.target;\n    setSelectedDog(target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      children: \"Building Query components \\uD83D\\uDE80\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this), selectedDog && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(DogPhoto, {\n      breed: selectedDog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 23\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Dog, {\n      onDogSelected: onDogSelected\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(App, \"CxRxG45GBy+mYDP2ftjdlkuunLg=\");\n\n_c3 = App;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"DogPhoto\");\n$RefreshReg$(_c2, \"Dog\");\n$RefreshReg$(_c3, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdILFdBQVcsaUJBQUksOERBQUMsUUFBRDtBQUFVLFdBQUssRUFBRUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZsQixlQUdFLDhEQUFDLEdBQUQ7QUFBSyxtQkFBYSxFQUFFTDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7SUFidUJJOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwsIE5ldHdvcmtTdGF0dXMgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgR0VUX0RPR1MgPSBncWxgXG4gIHF1ZXJ5IEdldERvZ3Mge1xuICAgIGRvZ3Mge1xuICAgICAgaWRcbiAgICAgIGJyZWVkXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBHRVRfRE9DX1BIT1RPID0gZ3FsYFxuICBxdWVyeSBEb2coJGJyZWVkOiBTdHJpbmchKSB7XG4gICAgZG9nKGJyZWVkOiAkYnJlZWQpIHtcbiAgICAgIGlkXG4gICAgICBkaXNwbGF5SW1hZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIERvZ1Bob3RvKHsgYnJlZWQgfSkge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCByZWZldGNoLCBuZXR3b3JrU3RhdHVzIH0gPSB1c2VRdWVyeShcbiAgICBHRVRfRE9DX1BIT1RPLFxuICAgIHtcbiAgICAgIHZhcmlhYmxlczogeyBicmVlZCB9LFxuICAgICAgbm90aWZ5T25OZXR3b3JrU3RhdHVzQ2hhbmdlOiB0cnVlLFxuICAgIH1cbiAgKTtcbiAgaWYgKG5ldHdvcmtTdGF0dXMgPT09IE5ldHdvcmtTdGF0dXMucmVmZXRjaCkgcmV0dXJuIFwiUmVmZXRjaGluZyFcIjtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiBudWxsO1xuICBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3J9YDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17ZGF0YS5kb2cuZGlzcGxheUltYWdlfVxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDEwMCwgd2lkdGg6IDEwMCB9fVxuICAgICAgPjwvaW1nPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZWZldGNoKCl9PlJlZmV0Y2ghPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IERvZyA9ICh7IG9uRG9nU2VsZWN0ZWQgfSkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfRE9HUyk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yPC9wPjtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxEb2dQaG90byAvPiAqL31cbiAgICAgIDxzZWxlY3QgbmFtZT1cImRvZ1wiIG9uQ2hhbmdlPXtvbkRvZ1NlbGVjdGVkfT5cbiAgICAgICAge2RhdGEuZG9ncy5tYXAoKGRvZykgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtkb2cuaWR9IHZhbHVlPXtkb2cuYnJlZWR9PlxuICAgICAgICAgICAge2RvZy5icmVlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZERvZywgc2V0U2VsZWN0ZWREb2ddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9uRG9nU2VsZWN0ZWQgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIHNldFNlbGVjdGVkRG9nKHRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPkJ1aWxkaW5nIFF1ZXJ5IGNvbXBvbmVudHMg8J+agDwvaDI+XG4gICAgICB7c2VsZWN0ZWREb2cgJiYgPERvZ1Bob3RvIGJyZWVkPXtzZWxlY3RlZERvZ30gLz59XG4gICAgICA8RG9nIG9uRG9nU2VsZWN0ZWQ9e29uRG9nU2VsZWN0ZWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJncWwiLCJOZXR3b3JrU3RhdHVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdFVF9ET0dTIiwiR0VUX0RPQ19QSE9UTyIsIkRvZ1Bob3RvIiwiYnJlZWQiLCJ2YXJpYWJsZXMiLCJub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicmVmZXRjaCIsIm5ldHdvcmtTdGF0dXMiLCJkb2ciLCJkaXNwbGF5SW1hZ2UiLCJoZWlnaHQiLCJ3aWR0aCIsIkRvZyIsIm9uRG9nU2VsZWN0ZWQiLCJkb2dzIiwibWFwIiwiaWQiLCJBcHAiLCJzZWxlY3RlZERvZyIsInNldFNlbGVjdGVkRG9nIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
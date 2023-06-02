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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CounterCard(param) {\n    let { value , label , color  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-xs shadow-md p-8 flex-grow-0 flex-shrink-0 w-1/2 mr-4 border border-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl font-bold \".concat(color, \" mb-2\"),\n                children: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = CounterCard;\nfunction IncomingRequestsCard(param) {\n    let { logs  } = param;\n    const unsuccessful = logs.filter((log)=>!log.success).slice(0, 3);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-xs shadow-xs p-8 ml-2 overflow-y-scroll border border-gray-200\",\n        style: {\n            maxHeight: \"400px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide mb-4\",\n                children: \"Latest Unsuccessful Requests\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-800\",\n                children: unsuccessful.map((log, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RequestContainer, {\n                        log: log\n                    }, index, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c1 = IncomingRequestsCard;\nfunction RequestContainer(param) {\n    let { log  } = param;\n    const { question , answer , success  } = log;\n    const successColor = success ? \"text-green-500\" : \"text-red-500\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-green-500 rounded-md p-4 flex items-center justify-between mb-4 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold\",\n                        children: \"Question:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-700\",\n                        children: question\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold mt-4\",\n                        children: \"Answer:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm font-bold \".concat(successColor),\n                        children: answer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-200 rounded-full px-2 py-1 \".concat(successColor),\n                children: success ? \"Answered\" : \"Unanswered\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RequestContainer;\nfunction Home() {\n    _s();\n    const [totalQueries, setTotalQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [unansweredQueries, setUnansweredQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // New loading state\n    const { getUid  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                if (getUid() && (getUid() === \"lZLIC6fK2WQOvIxyXKECEjx625w1\" || getUid() === \"Hoz3NtloWXX7MciVcTn8BNAHIJs1\")) {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://friday-backend-server-new.herokuapp.com/queries/log\");\n                    const { queries , totalQueriesCount , unansweredQueriesCount  } = response.data;\n                    setLogs(queries);\n                    setTotalQueries(totalQueriesCount);\n                    setUnansweredQueries(unansweredQueriesCount);\n                }\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setIsLoading(false); // Set loading state to false after data is fetched (or in case of error)\n            }\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"pt-8 px-4 sm:px-6 lg:px-8 mr-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4 text-green-900\",\n                children: \"My Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterCard, {\n                        value: totalQueries,\n                        label: \"Total Queries\",\n                        color: \"text-green-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterCard, {\n                        value: unansweredQueries,\n                        label: \"Unanswered Queries\",\n                        color: \"text-red-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center border border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"animate-spin h-8 w-8 text-gray-600\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            className: \"opacity-25\",\n                            cx: \"12\",\n                            cy: \"12\",\n                            r: \"10\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            className: \"opacity-75\",\n                            fill: \"currentColor\",\n                            d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IncomingRequestsCard, {\n                logs: logs\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xurknkf6wJ/Sj3VhZzODwH9t1ik=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"CounterCard\");\n$RefreshReg$(_c1, \"IncomingRequestsCard\");\n$RefreshReg$(_c2, \"RequestContainer\");\n$RefreshReg$(_c3, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVOzswQkFDZCw4REFBQ21DO2dCQUFHbkMsV0FBVTswQkFBeUM7Ozs7OzswQkFDdkQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0w7d0JBQVlDLE9BQU9xQjt3QkFBY3BCLE9BQU07d0JBQWdCQyxPQUFNOzs7Ozs7a0NBQzlELDhEQUFDSDt3QkFBWUMsT0FBT3VCO3dCQUFtQnRCLE9BQU07d0JBQXFCQyxPQUFNOzs7Ozs7Ozs7Ozs7WUFFekV3QiwwQkFDQyw4REFBQ3ZCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDb0M7b0JBQUlwQyxXQUFVO29CQUFxQ3FDLE9BQU07b0JBQTZCQyxNQUFLO29CQUFPQyxTQUFROztzQ0FDekcsOERBQUNDOzRCQUFPeEMsV0FBVTs0QkFBYXlDLElBQUc7NEJBQUtDLElBQUc7NEJBQUtDLEdBQUU7NEJBQUtDLFFBQU87NEJBQWVDLGFBQVk7Ozs7OztzQ0FDeEYsOERBQUNDOzRCQUFLOUMsV0FBVTs0QkFBYXNDLE1BQUs7NEJBQWVTLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBSXZELDhEQUFDOUM7Z0JBQXFCQyxNQUFNQTs7Ozs7b0JBQzdCOzs7Ozs7O0FBR1A7R0E3Q1NjOztRQUtZdEIseURBQU9BOzs7TUFMbkJzQjtBQStDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIENvdW50ZXJDYXJkKHsgdmFsdWUsIGxhYmVsLCBjb2xvciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctd2hpdGUgcm91bmRlZC14cyBzaGFkb3ctbWQgcC04IGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTAgdy0xLzIgbXItNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwYH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC0zeGwgZm9udC1ib2xkICR7Y29sb3J9IG1iLTJgfT5cclxuICAgICAgICB7dmFsdWV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICAgIHtsYWJlbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbmNvbWluZ1JlcXVlc3RzQ2FyZCh7IGxvZ3MgfSkge1xyXG4gIGNvbnN0IHVuc3VjY2Vzc2Z1bCA9IGxvZ3MuZmlsdGVyKChsb2cpID0+ICFsb2cuc3VjY2Vzcykuc2xpY2UoMCwgMyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctd2hpdGUgcm91bmRlZC14cyBzaGFkb3cteHMgcC04IG1sLTIgb3ZlcmZsb3cteS1zY3JvbGwgYm9yZGVyIGJvcmRlci1ncmF5LTIwMGB9IHN0eWxlPXt7IG1heEhlaWdodDogJzQwMHB4JyB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgbWItNFwiPlxyXG4gICAgICAgIExhdGVzdCBVbnN1Y2Nlc3NmdWwgUmVxdWVzdHNcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgIHt1bnN1Y2Nlc3NmdWwubWFwKChsb2csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8UmVxdWVzdENvbnRhaW5lciBrZXk9e2luZGV4fSBsb2c9e2xvZ30gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0Q29udGFpbmVyKHsgbG9nIH0pIHtcclxuICBjb25zdCB7IHF1ZXN0aW9uLCBhbnN3ZXIsIHN1Y2Nlc3MgfSA9IGxvZztcclxuICBjb25zdCBzdWNjZXNzQ29sb3IgPSBzdWNjZXNzID8gJ3RleHQtZ3JlZW4tNTAwJyA6ICd0ZXh0LXJlZC01MDAnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyZWVuLTUwMCByb3VuZGVkLW1kIHAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNCBzaGFkb3ctc21cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlF1ZXN0aW9uOjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPntxdWVzdGlvbn08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC00XCI+QW5zd2VyOjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LWJvbGQgJHtzdWNjZXNzQ29sb3J9YH0+e2Fuc3dlcn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTIgcHktMSAke3N1Y2Nlc3NDb2xvcn1gfT5cclxuICAgICAgICB7c3VjY2VzcyA/ICdBbnN3ZXJlZCcgOiAnVW5hbnN3ZXJlZCd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbdG90YWxRdWVyaWVzLCBzZXRUb3RhbFF1ZXJpZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3VuYW5zd2VyZWRRdWVyaWVzLCBzZXRVbmFuc3dlcmVkUXVlcmllc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbG9ncywgc2V0TG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBOZXcgbG9hZGluZyBzdGF0ZVxyXG4gIGNvbnN0IHsgZ2V0VWlkIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGdldFVpZCgpICYmIChnZXRVaWQoKSA9PT0gJ2xaTElDNmZLMldRT3ZJeHlYS0VDRWp4NjI1dzEnIHx8IGdldFVpZCgpID09PSAnSG96M050bG9XWFg3TWNpVmNUbjhCTkFISUpzMScpKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9mcmlkYXktYmFja2VuZC1zZXJ2ZXItbmV3Lmhlcm9rdWFwcC5jb20vcXVlcmllcy9sb2cnKTtcclxuICAgICAgICAgIGNvbnN0IHsgcXVlcmllcywgdG90YWxRdWVyaWVzQ291bnQsIHVuYW5zd2VyZWRRdWVyaWVzQ291bnQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBzZXRMb2dzKHF1ZXJpZXMpO1xyXG4gICAgICAgICAgc2V0VG90YWxRdWVyaWVzKHRvdGFsUXVlcmllc0NvdW50KTtcclxuICAgICAgICAgIHNldFVuYW5zd2VyZWRRdWVyaWVzKHVuYW5zd2VyZWRRdWVyaWVzQ291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpOyAvLyBTZXQgbG9hZGluZyBzdGF0ZSB0byBmYWxzZSBhZnRlciBkYXRhIGlzIGZldGNoZWQgKG9yIGluIGNhc2Ugb2YgZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cInB0LTggcHgtNCBzbTpweC02IGxnOnB4LTggbXItMlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1ncmVlbi05MDBcIj5NeSBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLThcIj5cclxuICAgICAgICA8Q291bnRlckNhcmQgdmFsdWU9e3RvdGFsUXVlcmllc30gbGFiZWw9XCJUb3RhbCBRdWVyaWVzXCIgY29sb3I9XCJ0ZXh0LWdyZWVuLTUwMFwiIC8+XHJcbiAgICAgICAgPENvdW50ZXJDYXJkIHZhbHVlPXt1bmFuc3dlcmVkUXVlcmllc30gbGFiZWw9XCJVbmFuc3dlcmVkIFF1ZXJpZXNcIiBjb2xvcj1cInRleHQtcmVkLTUwMFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gaC04IHctOCB0ZXh0LWdyYXktNjAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cIm9wYWNpdHktMjVcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiNFwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJvcGFjaXR5LTc1XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8SW5jb21pbmdSZXF1ZXN0c0NhcmQgbG9ncz17bG9nc30gLz5cclxuICAgICAgKX1cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlQXV0aCIsIkNvdW50ZXJDYXJkIiwidmFsdWUiLCJsYWJlbCIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiSW5jb21pbmdSZXF1ZXN0c0NhcmQiLCJsb2dzIiwidW5zdWNjZXNzZnVsIiwiZmlsdGVyIiwibG9nIiwic3VjY2VzcyIsInNsaWNlIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJtYXAiLCJpbmRleCIsIlJlcXVlc3RDb250YWluZXIiLCJxdWVzdGlvbiIsImFuc3dlciIsInN1Y2Nlc3NDb2xvciIsIkhvbWUiLCJ0b3RhbFF1ZXJpZXMiLCJzZXRUb3RhbFF1ZXJpZXMiLCJ1bmFuc3dlcmVkUXVlcmllcyIsInNldFVuYW5zd2VyZWRRdWVyaWVzIiwic2V0TG9ncyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImdldFVpZCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwicXVlcmllcyIsInRvdGFsUXVlcmllc0NvdW50IiwidW5hbnN3ZXJlZFF1ZXJpZXNDb3VudCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwiaDEiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
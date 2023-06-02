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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CounterCard(param) {\n    let { value , label , color  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-xs shadow-md p-8 flex-grow-0 flex-shrink-0 w-1/2 mr-4 border border-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl font-bold \".concat(color, \" mb-2\"),\n                children: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = CounterCard;\nfunction IncomingRequestsCard(param) {\n    let { logs  } = param;\n    const unsuccessful = logs.filter((log)=>!log.success).slice(0, 3);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-xs shadow-3xl p-8 ml-2 overflow-y-scroll border border-gray-200\",\n        style: {\n            maxHeight: \"400px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm text-gray-700 uppercase tracking-wide mb-4\",\n                children: \"Latest Unsuccessful Requests\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-800\",\n                children: unsuccessful.map((log, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RequestContainer, {\n                        log: log\n                    }, index, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c1 = IncomingRequestsCard;\nfunction RequestContainer(param) {\n    let { log  } = param;\n    const { question , answer , success  } = log;\n    const successColor = success ? \"text-green-500\" : \"text-red-500\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-green-500 rounded-md p-4 flex items-center justify-between mb-4 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold\",\n                        children: \"Question:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-700\",\n                        children: question\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold mt-4\",\n                        children: \"Answer:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm font-bold \".concat(successColor),\n                        children: answer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-200 rounded-full px-2 py-1 \".concat(successColor),\n                children: success ? \"Answered\" : \"Unanswered\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_c2 = RequestContainer;\nfunction Home() {\n    _s();\n    const [totalQueries, setTotalQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [unansweredQueries, setUnansweredQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // New loading state\n    const { getUid  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            try {\n                if (getUid() && (getUid() === \"lZLIC6fK2WQOvIxyXKECEjx625w1\" || getUid() === \"Hoz3NtloWXX7MciVcTn8BNAHIJs1\")) {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://friday-backend-server-new.herokuapp.com/queries/log\");\n                    const { queries , totalQueriesCount , unansweredQueriesCount  } = response.data;\n                    setLogs(queries);\n                    setTotalQueries(totalQueriesCount);\n                    setUnansweredQueries(unansweredQueriesCount);\n                }\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setIsLoading(false); // Set loading state to false after data is fetched (or in case of error)\n            }\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"pt-8 px-4 sm:px-6 lg:px-8 mr-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-4 text-green-900\",\n                children: \"My Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterCard, {\n                        value: totalQueries,\n                        label: \"Total Queries\",\n                        color: \"text-green-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CounterCard, {\n                        value: unansweredQueries,\n                        label: \"Unanswered Queries\",\n                        color: \"text-red-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"animate-spin h-8 w-8 text-gray-600\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                            className: \"opacity-25\",\n                            cx: \"12\",\n                            cy: \"12\",\n                            r: \"10\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            className: \"opacity-75\",\n                            fill: \"currentColor\",\n                            d: \"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IncomingRequestsCard, {\n                logs: logs\n            }, void 0, false, {\n                fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Gerald Ng\\\\Projects\\\\Year 1 Summer Projects (2023)\\\\FRIDAY\\\\FRIDAY\\\\FRIDAY Main Website\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xurknkf6wJ/Sj3VhZzODwH9t1ik=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"CounterCard\");\n$RefreshReg$(_c1, \"IncomingRequestsCard\");\n$RefreshReg$(_c2, \"RequestContainer\");\n$RefreshReg$(_c3, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVOzswQkFDZCw4REFBQ21DO2dCQUFHbkMsV0FBVTswQkFBeUM7Ozs7OzswQkFDdkQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0w7d0JBQVlDLE9BQU9xQjt3QkFBY3BCLE9BQU07d0JBQWdCQyxPQUFNOzs7Ozs7a0NBQzlELDhEQUFDSDt3QkFBWUMsT0FBT3VCO3dCQUFtQnRCLE9BQU07d0JBQXFCQyxPQUFNOzs7Ozs7Ozs7Ozs7WUFFekV3QiwwQkFDQyw4REFBQ3ZCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDb0M7b0JBQUlwQyxXQUFVO29CQUFxQ3FDLE9BQU07b0JBQTZCQyxNQUFLO29CQUFPQyxTQUFROztzQ0FDekcsOERBQUNDOzRCQUFPeEMsV0FBVTs0QkFBYXlDLElBQUc7NEJBQUtDLElBQUc7NEJBQUtDLEdBQUU7NEJBQUtDLFFBQU87NEJBQWVDLGFBQVk7Ozs7OztzQ0FDeEYsOERBQUNDOzRCQUFLOUMsV0FBVTs0QkFBYXNDLE1BQUs7NEJBQWVTLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBSXZELDhEQUFDOUM7Z0JBQXFCQyxNQUFNQTs7Ozs7b0JBQzdCOzs7Ozs7O0FBR1A7R0E3Q1NjOztRQUtZdEIseURBQU9BOzs7TUFMbkJzQjtBQStDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIENvdW50ZXJDYXJkKHsgdmFsdWUsIGxhYmVsLCBjb2xvciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctd2hpdGUgcm91bmRlZC14cyBzaGFkb3ctbWQgcC04IGZsZXgtZ3Jvdy0wIGZsZXgtc2hyaW5rLTAgdy0xLzIgbXItNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwYH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC0zeGwgZm9udC1ib2xkICR7Y29sb3J9IG1iLTJgfT5cclxuICAgICAgICB7dmFsdWV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxyXG4gICAgICAgIHtsYWJlbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbmNvbWluZ1JlcXVlc3RzQ2FyZCh7IGxvZ3MgfSkge1xyXG4gIGNvbnN0IHVuc3VjY2Vzc2Z1bCA9IGxvZ3MuZmlsdGVyKChsb2cpID0+ICFsb2cuc3VjY2Vzcykuc2xpY2UoMCwgMyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctd2hpdGUgcm91bmRlZC14cyBzaGFkb3ctM3hsIHAtOCBtbC0yIG92ZXJmbG93LXktc2Nyb2xsIGJvcmRlciBib3JkZXItZ3JheS0yMDBgfSBzdHlsZT17eyBtYXhIZWlnaHQ6ICc0MDBweCcgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIG1iLTRcIj5cclxuICAgICAgICBMYXRlc3QgVW5zdWNjZXNzZnVsIFJlcXVlc3RzXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICB7dW5zdWNjZXNzZnVsLm1hcCgobG9nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFJlcXVlc3RDb250YWluZXIga2V5PXtpbmRleH0gbG9nPXtsb2d9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVxdWVzdENvbnRhaW5lcih7IGxvZyB9KSB7XHJcbiAgY29uc3QgeyBxdWVzdGlvbiwgYW5zd2VyLCBzdWNjZXNzIH0gPSBsb2c7XHJcbiAgY29uc3Qgc3VjY2Vzc0NvbG9yID0gc3VjY2VzcyA/ICd0ZXh0LWdyZWVuLTUwMCcgOiAndGV4dC1yZWQtNTAwJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmVlbi01MDAgcm91bmRlZC1tZCBwLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5RdWVzdGlvbjo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57cXVlc3Rpb259PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtNFwiPkFuc3dlcjo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtc20gZm9udC1ib2xkICR7c3VjY2Vzc0NvbG9yfWB9PnthbnN3ZXJ9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0yIHB5LTEgJHtzdWNjZXNzQ29sb3J9YH0+XHJcbiAgICAgICAge3N1Y2Nlc3MgPyAnQW5zd2VyZWQnIDogJ1VuYW5zd2VyZWQnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3RvdGFsUXVlcmllcywgc2V0VG90YWxRdWVyaWVzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt1bmFuc3dlcmVkUXVlcmllcywgc2V0VW5hbnN3ZXJlZFF1ZXJpZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xvZ3MsIHNldExvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gTmV3IGxvYWRpbmcgc3RhdGVcclxuICBjb25zdCB7IGdldFVpZCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChnZXRVaWQoKSAmJiAoZ2V0VWlkKCkgPT09ICdsWkxJQzZmSzJXUU92SXh5WEtFQ0VqeDYyNXcxJyB8fCBnZXRVaWQoKSA9PT0gJ0hvejNOdGxvV1hYN01jaVZjVG44Qk5BSElKczEnKSkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZnJpZGF5LWJhY2tlbmQtc2VydmVyLW5ldy5oZXJva3VhcHAuY29tL3F1ZXJpZXMvbG9nJyk7XHJcbiAgICAgICAgICBjb25zdCB7IHF1ZXJpZXMsIHRvdGFsUXVlcmllc0NvdW50LCB1bmFuc3dlcmVkUXVlcmllc0NvdW50IH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgc2V0TG9ncyhxdWVyaWVzKTtcclxuICAgICAgICAgIHNldFRvdGFsUXVlcmllcyh0b3RhbFF1ZXJpZXNDb3VudCk7XHJcbiAgICAgICAgICBzZXRVbmFuc3dlcmVkUXVlcmllcyh1bmFuc3dlcmVkUXVlcmllc0NvdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTsgLy8gU2V0IGxvYWRpbmcgc3RhdGUgdG8gZmFsc2UgYWZ0ZXIgZGF0YSBpcyBmZXRjaGVkIChvciBpbiBjYXNlIG9mIGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJwdC04IHB4LTQgc206cHgtNiBsZzpweC04IG1yLTJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00IHRleHQtZ3JlZW4tOTAwXCI+TXkgRGFzaGJvYXJkPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi04XCI+XHJcbiAgICAgICAgPENvdW50ZXJDYXJkIHZhbHVlPXt0b3RhbFF1ZXJpZXN9IGxhYmVsPVwiVG90YWwgUXVlcmllc1wiIGNvbG9yPVwidGV4dC1ncmVlbi01MDBcIiAvPlxyXG4gICAgICAgIDxDb3VudGVyQ2FyZCB2YWx1ZT17dW5hbnN3ZXJlZFF1ZXJpZXN9IGxhYmVsPVwiVW5hbnN3ZXJlZCBRdWVyaWVzXCIgY29sb3I9XCJ0ZXh0LXJlZC01MDBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiBoLTggdy04IHRleHQtZ3JheS02MDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwib3BhY2l0eS0yNVwiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCI0XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxJbmNvbWluZ1JlcXVlc3RzQ2FyZCBsb2dzPXtsb2dzfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VBdXRoIiwiQ291bnRlckNhcmQiLCJ2YWx1ZSIsImxhYmVsIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJJbmNvbWluZ1JlcXVlc3RzQ2FyZCIsImxvZ3MiLCJ1bnN1Y2Nlc3NmdWwiLCJmaWx0ZXIiLCJsb2ciLCJzdWNjZXNzIiwic2xpY2UiLCJzdHlsZSIsIm1heEhlaWdodCIsIm1hcCIsImluZGV4IiwiUmVxdWVzdENvbnRhaW5lciIsInF1ZXN0aW9uIiwiYW5zd2VyIiwic3VjY2Vzc0NvbG9yIiwiSG9tZSIsInRvdGFsUXVlcmllcyIsInNldFRvdGFsUXVlcmllcyIsInVuYW5zd2VyZWRRdWVyaWVzIiwic2V0VW5hbnN3ZXJlZFF1ZXJpZXMiLCJzZXRMb2dzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZ2V0VWlkIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJxdWVyaWVzIiwidG90YWxRdWVyaWVzQ291bnQiLCJ1bmFuc3dlcmVkUXVlcmllc0NvdW50IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJoMSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
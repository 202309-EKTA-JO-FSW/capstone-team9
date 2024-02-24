"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/pages/profile/page.jsx":
/*!***************************************************!*\
  !*** ./src/app/components/pages/profile/page.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Sidebar */ \"(app-pages-browser)/./src/app/components/layout/Sidebar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Icons */ \"(app-pages-browser)/./src/app/components/shared/Icons.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserInfo = async ()=>{\n            try {\n                const response = await fetch(\"/api/user\");\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch user info\");\n                }\n                const userData = await response.json();\n                setUserInfo(userData);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchUserInfo();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black flex flex-col gap-12 mt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-normal\",\n                                children: \"Profile Information\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit Profile Details\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"rounded-full content-center object-cover\",\n                        src: _shared_Icons__WEBPACK_IMPORTED_MODULE_4__.Icons.Profile,\n                        height: 80,\n                        width: 80\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-7\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Full Name: \"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.FullName) || \"John Doe\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Location:\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Address) || \"New York, USA\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Email) || \"johndoe@email.com\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Nationality: \"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Nationality) || \"American\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Date of Birth:\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.DateOfBirth) || \"01/01/1990\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"vOwY8+j2gC2fzH0Q0HS3gN3jsRk=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wcm9maWxlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUNSO0FBQ1o7QUFDWTtBQUUzQyxNQUFNTSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU87Z0JBQzlCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLFdBQVcsTUFBTUosU0FBU0ssSUFBSTtnQkFDcENQLFlBQVlNO1lBQ2QsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQix1REFBT0E7Ozs7OzBCQUNSLDhEQUFDZTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEOzswQ0FDRCw4REFBQ0U7Z0NBQUdELFdBQVU7MENBQXVCOzs7Ozs7MENBQ3JDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBd0I7Ozs7Ozs7Ozs7OztrQ0FFckMsOERBQUNmLGtEQUFLQTt3QkFBQ2UsV0FBVTt3QkFBMkNHLEtBQUtqQixnREFBS0EsQ0FBQ2tCLE9BQU87d0JBQUVDLFFBQVE7d0JBQUlDLE9BQU87Ozs7OztrQ0FDbkcsOERBQUNQO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUdkLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVW1CLFFBQVEsS0FBSTs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQUtSLFdBQVU7MENBQXdCOzs7Ozs7MENBQ3hDLDhEQUFDRTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBR2QsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVcUIsT0FBTyxLQUFJOzs7Ozs7MENBQ3pCLDhEQUFDRDtnQ0FBS1IsV0FBVTswQ0FBd0I7Ozs7OzswQ0FFeEMsOERBQUNFOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFHZCxDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVzQixLQUFLLEtBQUk7Ozs7OzswQ0FDdkIsOERBQUNGO2dDQUFLUixXQUFVOzBDQUF3Qjs7Ozs7OzBDQUd4Qyw4REFBQ0U7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUdkLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVXVCLFdBQVcsS0FBSTs7Ozs7OzBDQUM3Qiw4REFBQ0g7Z0NBQUtSLFdBQVU7MENBQXdCOzs7Ozs7MENBRXhDLDhEQUFDRTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBR2QsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVd0IsV0FBVyxLQUFJOzs7Ozs7MENBQzdCLDhEQUFDSjtnQ0FBS1IsV0FBVTswQ0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRDtHQXRETWI7S0FBQUE7QUF3RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3Byb2ZpbGUvcGFnZS5qc3g/YTk4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi8uLi9sYXlvdXQvU2lkZWJhcic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJy4uLy4uL3NoYXJlZC9JY29ucyc7XG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFVzZXJJbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS91c2VyYCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGluZm8nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0VXNlckluZm8odXNlckRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoVXNlckluZm8oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTEwJz5cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayBmbGV4IGZsZXgtY29sIGdhcC0xMiBtdC0yMCc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtbm9ybWFsJz5Qcm9maWxlIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQgUHJvZmlsZSBEZXRhaWxzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIGNvbnRlbnQtY2VudGVyIG9iamVjdC1jb3Zlcicgc3JjPXtJY29ucy5Qcm9maWxlfSBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zIGdhcC03Jz5cbiAgICAgICAgICA8cD5GdWxsIE5hbWU6IDwvcD5cbiAgICAgICAgICA8cD57dXNlckluZm8/LkZ1bGxOYW1lIHx8IFwiSm9obiBEb2VcIn08L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG4gICAgICAgICAgPHA+TG9jYXRpb246PC9wPlxuICAgICAgICAgIDxwPnt1c2VySW5mbz8uQWRkcmVzcyB8fCBcIk5ldyBZb3JrLCBVU0FcIn08L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG5cbiAgICAgICAgICA8cD5FbWFpbDo8L3A+XG4gICAgICAgICAgPHA+e3VzZXJJbmZvPy5FbWFpbCB8fCBcImpvaG5kb2VAZW1haWwuY29tXCJ9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB0ZXh0LXNtJz5FZGl0PC9zcGFuPlxuXG5cbiAgICAgICAgICA8cD5OYXRpb25hbGl0eTogPC9wPlxuICAgICAgICAgIDxwPnt1c2VySW5mbz8uTmF0aW9uYWxpdHkgfHwgXCJBbWVyaWNhblwifTwvcD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgdGV4dC1zbSc+RWRpdDwvc3Bhbj5cblxuICAgICAgICAgIDxwPkRhdGUgb2YgQmlydGg6PC9wPlxuICAgICAgICAgIDxwPnt1c2VySW5mbz8uRGF0ZU9mQmlydGggfHwgXCIwMS8wMS8xOTkwXCJ9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB0ZXh0LXNtJz5FZGl0PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyIiwiSW1hZ2UiLCJJY29ucyIsIlBhZ2UiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiZmV0Y2hVc2VySW5mbyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwidXNlckRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic3JjIiwiUHJvZmlsZSIsImhlaWdodCIsIndpZHRoIiwiRnVsbE5hbWUiLCJzcGFuIiwiQWRkcmVzcyIsIkVtYWlsIiwiTmF0aW9uYWxpdHkiLCJEYXRlT2ZCaXJ0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/pages/profile/page.jsx\n"));

/***/ })

});
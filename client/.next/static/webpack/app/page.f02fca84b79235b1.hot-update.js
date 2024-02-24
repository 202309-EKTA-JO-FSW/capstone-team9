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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Sidebar */ \"(app-pages-browser)/./src/app/components/layout/Sidebar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Icons */ \"(app-pages-browser)/./src/app/components/shared/Icons.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserInfo = async ()=>{\n            try {\n                const response = await fetch(\"/api/user\");\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch user info\");\n                }\n                const userData = await response.json();\n                setUserInfo(userData);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchUserInfo();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-10 top-28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-normal\",\n                        children: \"Profile Information\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-sm\",\n                        children: \"Edit Profile Details\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"rounded-full content-center object-cover\",\n                        src: _shared_Icons__WEBPACK_IMPORTED_MODULE_4__.Icons.Profile,\n                        height: 80,\n                        width: 80\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"User Info\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Full Name: \"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.FullName) || \"John Doe\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Location:\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Address) || \"New York, USA\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Email: \",\n                                    (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Email) || \"johndoe@email.com\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Nationality: \",\n                                    (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Nationality) || \"American\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Date of Birth: \",\n                                    (userInfo === null || userInfo === void 0 ? void 0 : userInfo.DateOfBirth) || \"01/01/1990\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"vOwY8+j2gC2fzH0Q0HS3gN3jsRk=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wcm9maWxlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUNSO0FBQ1o7QUFDWTtBQUUzQyxNQUFNTSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU87Z0JBQzlCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLFdBQVcsTUFBTUosU0FBU0ssSUFBSTtnQkFDcENQLFlBQVlNO1lBQ2QsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQix1REFBT0E7Ozs7OzBCQUNSLDhEQUFDZTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF1Qjs7Ozs7O2tDQUNyQyw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQXdCOzs7Ozs7a0NBQ3JDLDhEQUFDZixrREFBS0E7d0JBQUNlLFdBQVU7d0JBQTJDRyxLQUFLakIsZ0RBQUtBLENBQUNrQixPQUFPO3dCQUFFQyxRQUFRO3dCQUFJQyxPQUFPOzs7Ozs7a0NBQ25HLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDUjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFHZCxDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVvQixRQUFRLEtBQUk7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUFLVCxXQUFVOzBDQUF3Qjs7Ozs7OzBDQUN4Qyw4REFBQ0U7MENBQUU7Ozs7Ozs0QkFDRmQsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVc0IsT0FBTyxLQUFJOzBDQUN0Qiw4REFBQ0Q7Z0NBQUtULFdBQVU7MENBQXdCOzs7Ozs7MENBRXhDLDhEQUFDRTs7b0NBQUU7b0NBQVFkLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVXVCLEtBQUssS0FBSTs7Ozs7OzswQ0FDOUIsOERBQUNGO2dDQUFLVCxXQUFVOzBDQUF3Qjs7Ozs7OzBDQUV4Qyw4REFBQ0U7O29DQUFFO29DQUFjZCxDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVV3QixXQUFXLEtBQUk7Ozs7Ozs7MENBQzFDLDhEQUFDSDtnQ0FBS1QsV0FBVTswQ0FBd0I7Ozs7OzswQ0FFeEMsOERBQUNFOztvQ0FBRTtvQ0FBZ0JkLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVXlCLFdBQVcsS0FBSTs7Ozs7OzswQ0FDNUMsOERBQUNKO2dDQUFLVCxXQUFVOzBDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxEO0dBakRNYjtLQUFBQTtBQW1ETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcHJvZmlsZS9wYWdlLmpzeD9hOThhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uLy4uL2xheW91dC9TaWRlYmFyJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEljb25zIH0gZnJvbSAnLi4vLi4vc2hhcmVkL0ljb25zJztcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoVXNlckluZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3VzZXJgKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHVzZXIgaW5mbycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRVc2VySW5mbyh1c2VyRGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hVc2VySW5mbygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMTAgdG9wLTI4Jz5cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtbm9ybWFsJz5Qcm9maWxlIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQgUHJvZmlsZSBEZXRhaWxzPC9wPlxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgY29udGVudC1jZW50ZXIgb2JqZWN0LWNvdmVyJyBzcmM9e0ljb25zLlByb2ZpbGV9IGhlaWdodD17ODB9IHdpZHRoPXs4MH0gLz5cbiAgICAgICAgPGgyPlVzZXIgSW5mbzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0zJz5cbiAgICAgICAgICA8cD5GdWxsIE5hbWU6IDwvcD5cbiAgICAgICAgICA8cD57dXNlckluZm8/LkZ1bGxOYW1lIHx8IFwiSm9obiBEb2VcIn08L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG4gICAgICAgICAgPHA+TG9jYXRpb246PC9wPlxuICAgICAgICAgIHt1c2VySW5mbz8uQWRkcmVzcyB8fCBcIk5ldyBZb3JrLCBVU0FcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgdGV4dC1zbSc+RWRpdDwvc3Bhbj5cblxuICAgICAgICAgIDxwPkVtYWlsOiB7dXNlckluZm8/LkVtYWlsIHx8IFwiam9obmRvZUBlbWFpbC5jb21cIn08L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG5cbiAgICAgICAgICA8cD5OYXRpb25hbGl0eToge3VzZXJJbmZvPy5OYXRpb25hbGl0eSB8fCBcIkFtZXJpY2FuXCJ9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB0ZXh0LXNtJz5FZGl0PC9zcGFuPlxuXG4gICAgICAgICAgPHA+RGF0ZSBvZiBCaXJ0aDoge3VzZXJJbmZvPy5EYXRlT2ZCaXJ0aCB8fCBcIjAxLzAxLzE5OTBcIn08L3A+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpZGViYXIiLCJJbWFnZSIsIkljb25zIiwiUGFnZSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJmZXRjaFVzZXJJbmZvIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJ1c2VyRGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzcmMiLCJQcm9maWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJoMiIsIkZ1bGxOYW1lIiwic3BhbiIsIkFkZHJlc3MiLCJFbWFpbCIsIk5hdGlvbmFsaXR5IiwiRGF0ZU9mQmlydGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/pages/profile/page.jsx\n"));

/***/ })

});
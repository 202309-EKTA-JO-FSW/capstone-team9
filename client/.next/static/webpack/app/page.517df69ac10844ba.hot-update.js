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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/Sidebar */ \"(app-pages-browser)/./src/app/components/layout/Sidebar.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _shared_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Icons */ \"(app-pages-browser)/./src/app/components/shared/Icons.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserInfo = async ()=>{\n            try {\n                const response = await fetch(\"/api/user\");\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch user info\");\n                }\n                const userData = await response.json();\n                setUserInfo(userData);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        fetchUserInfo();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-10 top-28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-normal\",\n                        children: \"Profile Information\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-sm\",\n                        children: \"Edit Profile Details\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"rounded-full content-center object-cover\",\n                        src: _shared_Icons__WEBPACK_IMPORTED_MODULE_4__.Icons.Profile,\n                        height: 80,\n                        width: 80\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"User Info\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Full Name: \",\n                            (userInfo === null || userInfo === void 0 ? void 0 : userInfo.FullName) || \"John Doe\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-500 text-sm\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Location: \",\n                            (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Address) || \"New York, USA\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-500 text-sm\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Email: \",\n                            (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Email) || \"johndoe@email.com\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-500 text-sm\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Nationality: \",\n                            (userInfo === null || userInfo === void 0 ? void 0 : userInfo.Nationality) || \"American\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-500 text-sm\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Date of Birth: \",\n                            (userInfo === null || userInfo === void 0 ? void 0 : userInfo.DateOfBirth) || \"01/01/1990\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-500\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yara/final-project/capstone-team9/client/src/app/components/pages/profile/page.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"vOwY8+j2gC2fzH0Q0HS3gN3jsRk=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wcm9maWxlL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUNSO0FBQ1o7QUFDWTtBQUUzQyxNQUFNTSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU87Z0JBQzlCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLFdBQVcsTUFBTUosU0FBU0ssSUFBSTtnQkFDcENQLFlBQVlNO1lBQ2QsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQix1REFBT0E7Ozs7OzBCQUNSLDhEQUFDZTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF1Qjs7Ozs7O2tDQUNyQyw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQXdCOzs7Ozs7a0NBQ3JDLDhEQUFDZixrREFBS0E7d0JBQUNlLFdBQVU7d0JBQTJDRyxLQUFLakIsZ0RBQUtBLENBQUNrQixPQUFPO3dCQUFFQyxRQUFRO3dCQUFJQyxPQUFPOzs7Ozs7a0NBQ25HLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDTDs7NEJBQUU7NEJBQVlkLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVW9CLFFBQVEsS0FBSTs7Ozs7OztrQ0FDckMsOERBQUNDO3dCQUFLVCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUN4Qyw4REFBQ0U7OzRCQUFFOzRCQUFXZCxDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVzQixPQUFPLEtBQUk7Ozs7Ozs7a0NBQ25DLDhEQUFDRDt3QkFBS1QsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FFeEMsOERBQUNFOzs0QkFBRTs0QkFBUWQsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVdUIsS0FBSyxLQUFJOzs7Ozs7O2tDQUM5Qiw4REFBQ0Y7d0JBQUtULFdBQVU7a0NBQXdCOzs7Ozs7a0NBRXhDLDhEQUFDRTs7NEJBQUU7NEJBQWNkLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVXdCLFdBQVcsS0FBSTs7Ozs7OztrQ0FDMUMsOERBQUNIO3dCQUFLVCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUV4Qyw4REFBQ0U7OzRCQUFFOzRCQUFnQmQsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVeUIsV0FBVyxLQUFJOzs7Ozs7O2tDQUM1Qyw4REFBQ0o7d0JBQUtULFdBQVU7a0NBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0E5Q01iO0tBQUFBO0FBZ0ROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wcm9maWxlL3BhZ2UuanN4P2E5OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vLi4vbGF5b3V0L1NpZGViYXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvSWNvbnMnO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hVc2VySW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdXNlcmApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlciBpbmZvJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFVzZXJJbmZvKHVzZXJEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFVzZXJJbmZvKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0xMCB0b3AtMjgnPlxuICAgICAgPFNpZGViYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ub3JtYWwnPlByb2ZpbGUgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgdGV4dC1zbSc+RWRpdCBQcm9maWxlIERldGFpbHM8L3A+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCBjb250ZW50LWNlbnRlciBvYmplY3QtY292ZXInIHNyYz17SWNvbnMuUHJvZmlsZX0gaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxuICAgICAgICA8aDI+VXNlciBJbmZvPC9oMj5cbiAgICAgICAgPHA+RnVsbCBOYW1lOiB7dXNlckluZm8/LkZ1bGxOYW1lIHx8IFwiSm9obiBEb2VcIn08L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCB0ZXh0LXNtJz5FZGl0PC9zcGFuPlxuICAgICAgICA8cD5Mb2NhdGlvbjoge3VzZXJJbmZvPy5BZGRyZXNzIHx8IFwiTmV3IFlvcmssIFVTQVwifTwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG5cbiAgICAgICAgPHA+RW1haWw6IHt1c2VySW5mbz8uRW1haWwgfHwgXCJqb2huZG9lQGVtYWlsLmNvbVwifTwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG5cbiAgICAgICAgPHA+TmF0aW9uYWxpdHk6IHt1c2VySW5mbz8uTmF0aW9uYWxpdHkgfHwgXCJBbWVyaWNhblwifTwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPkVkaXQ8L3NwYW4+XG5cbiAgICAgICAgPHA+RGF0ZSBvZiBCaXJ0aDoge3VzZXJJbmZvPy5EYXRlT2ZCaXJ0aCB8fCBcIjAxLzAxLzE5OTBcIn08L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCcgPkVkaXQ8L3NwYW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyIiwiSW1hZ2UiLCJJY29ucyIsIlBhZ2UiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiZmV0Y2hVc2VySW5mbyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwidXNlckRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic3JjIiwiUHJvZmlsZSIsImhlaWdodCIsIndpZHRoIiwiaDIiLCJGdWxsTmFtZSIsInNwYW4iLCJBZGRyZXNzIiwiRW1haWwiLCJOYXRpb25hbGl0eSIsIkRhdGVPZkJpcnRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/pages/profile/page.jsx\n"));

/***/ })

});
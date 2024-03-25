"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Events/BuyTicket/page",{

/***/ "(app-pages-browser)/./src/app/pages/Events/BuyTicket/CustomDropdown.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/Events/BuyTicket/CustomDropdown.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Dropdown!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CustomDropdown(param) {\n    let { onSelectEvent } = param;\n    _s();\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTitle, setSelectedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchEvents();\n    }, []);\n    const fetchEvents = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/event/getEvents\");\n            setEvents(response.data.events);\n        } catch (error) {\n            console.error(\"Error fetching events:\", error);\n        }\n    };\n    const handleTitleSelect = async (eventKey, event)=>{\n        const selectedEvent = events.find((event)=>event._id === eventKey);\n        setSelectedTitle(selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.Title);\n        onSelectEvent(eventKey);\n        // Close the dropdown manually\n        dropdownRef.current.setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            ref: dropdownRef,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Toggle, {\n                    children: selectedTitle || \"Select Event\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Menu, {\n                    children: events.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            eventKey: event._id,\n                            onSelect: handleTitleSelect,\n                            children: event.Title\n                        }, event._id, false, {\n                            fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(CustomDropdown, \"qJMqf9kc/uF+68S45qm3nnIwzao=\");\n_c = CustomDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomDropdown);\nvar _c;\n$RefreshReg$(_c, \"CustomDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvRXZlbnRzL0J1eVRpY2tldC9DdXN0b21Ecm9wZG93bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyRDtBQUNoQjtBQUNqQjtBQUUxQixTQUFTTSxlQUFlLEtBQWlCO1FBQWpCLEVBQUVDLGFBQWEsRUFBRSxHQUFqQjs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDUyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTVcsY0FBY1QsNkNBQU1BLENBQUM7SUFFM0JELGdEQUFTQSxDQUFDO1FBQ1JXO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNVCw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDO1lBQ2pDTixVQUFVSyxTQUFTRSxJQUFJLENBQUNSLE1BQU07UUFDaEMsRUFBRSxPQUFPUyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQzFDO0lBQ0Y7SUFFQSxNQUFNRSxvQkFBb0IsT0FBT0MsVUFBVUM7UUFDekMsTUFBTUMsZ0JBQWdCZCxPQUFPZSxJQUFJLENBQUNGLENBQUFBLFFBQVNBLE1BQU1HLEdBQUcsS0FBS0o7UUFDekRULGlCQUFpQlcsMEJBQUFBLG9DQUFBQSxjQUFlRyxLQUFLO1FBRXJDbEIsY0FBY2E7UUFFZCw4QkFBOEI7UUFDOUJSLFlBQVljLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDeEIsdUZBQVFBO1lBQUN5QixLQUFLakI7OzhCQUNiLDhEQUFDUix1RkFBUUEsQ0FBQzBCLE1BQU07OEJBQ2JwQixpQkFBaUI7Ozs7Ozs4QkFHcEIsOERBQUNOLHVGQUFRQSxDQUFDMkIsSUFBSTs4QkFDWHZCLE9BQU93QixHQUFHLENBQUNYLENBQUFBLHNCQUNWLDhEQUFDakIsdUZBQVFBLENBQUM2QixJQUFJOzRCQUFpQmIsVUFBVUMsTUFBTUcsR0FBRzs0QkFBRVUsVUFBVWY7c0NBQzNERSxNQUFNSSxLQUFLOzJCQURNSixNQUFNRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekM7R0E3Q1NsQjtLQUFBQTtBQStDVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL0V2ZW50cy9CdXlUaWNrZXQvQ3VzdG9tRHJvcGRvd24uanM/MjI5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gQ3VzdG9tRHJvcGRvd24oeyBvblNlbGVjdEV2ZW50IH0pIHtcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hFdmVudHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2V2ZW50L2dldEV2ZW50cycpO1xuICAgICAgc2V0RXZlbnRzKHJlc3BvbnNlLmRhdGEuZXZlbnRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZXZlbnRzOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGl0bGVTZWxlY3QgPSBhc3luYyAoZXZlbnRLZXksIGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRFdmVudCA9IGV2ZW50cy5maW5kKGV2ZW50ID0+IGV2ZW50Ll9pZCA9PT0gZXZlbnRLZXkpO1xuICAgIHNldFNlbGVjdGVkVGl0bGUoc2VsZWN0ZWRFdmVudD8uVGl0bGUpO1xuXG4gICAgb25TZWxlY3RFdmVudChldmVudEtleSk7XG5cbiAgICAvLyBDbG9zZSB0aGUgZHJvcGRvd24gbWFudWFsbHlcbiAgICBkcm9wZG93blJlZi5jdXJyZW50LnNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEcm9wZG93biByZWY9e2Ryb3Bkb3duUmVmfT5cbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICB7c2VsZWN0ZWRUaXRsZSB8fCAnU2VsZWN0IEV2ZW50J31cbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG5cbiAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAge2V2ZW50cy5tYXAoZXZlbnQgPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PXtldmVudC5faWR9IGV2ZW50S2V5PXtldmVudC5faWR9IG9uU2VsZWN0PXtoYW5kbGVUaXRsZVNlbGVjdH0+XG4gICAgICAgICAgICAgIHtldmVudC5UaXRsZX1cbiAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRHJvcGRvd247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkRyb3Bkb3duIiwiYXhpb3MiLCJDdXN0b21Ecm9wZG93biIsIm9uU2VsZWN0RXZlbnQiLCJldmVudHMiLCJzZXRFdmVudHMiLCJzZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsImRyb3Bkb3duUmVmIiwiZmV0Y2hFdmVudHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVUaXRsZVNlbGVjdCIsImV2ZW50S2V5IiwiZXZlbnQiLCJzZWxlY3RlZEV2ZW50IiwiZmluZCIsIl9pZCIsIlRpdGxlIiwiY3VycmVudCIsInNldE9wZW4iLCJkaXYiLCJyZWYiLCJUb2dnbGUiLCJNZW51IiwibWFwIiwiSXRlbSIsIm9uU2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Events/BuyTicket/CustomDropdown.js\n"));

/***/ })

});
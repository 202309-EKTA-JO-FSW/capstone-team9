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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Dropdown!=!react-bootstrap */ \"(app-pages-browser)/./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CustomDropdown(param) {\n    let { onSelectEvent } = param;\n    _s();\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTitle, setSelectedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch data from API when component mounts\n        fetchEvents();\n    }, []);\n    const fetchEvents = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/event/getEvents\");\n            setEvents(response.data.events);\n        } catch (error) {\n            console.error(\"Error fetching events:\", error);\n        }\n    };\n    const handleTitleSelect = (eventKey, event)=>{\n        const selectedEvent = events.find((event)=>event._id === eventKey);\n        setSelectedTitle(selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.Title);\n        // Invoke onSelectEvent callback with the selected event's ID\n        onSelectEvent(eventKey);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            onSelect: handleTitleSelect,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Toggle, {\n                    variant: \"success\",\n                    id: \"dropdown-basic\",\n                    children: selectedTitle || \"Select Event\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Menu, {\n                    children: events.map((event)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dropdown_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                            eventKey: event._id,\n                            children: event.Title\n                        }, event._id, false, {\n                            fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(CustomDropdown, \"rMAQZmZYBVjh4XgO032oXrZrMEE=\");\n_c = CustomDropdown;\nex;\nvar _c;\n$RefreshReg$(_c, \"CustomDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvRXZlbnRzL0J1eVRpY2tldC9DdXN0b21Ecm9wZG93bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUNIO0FBQ2pCO0FBRTFCLFNBQVNLLGVBQWUsS0FBaUI7UUFBakIsRUFBRUMsYUFBYSxFQUFFLEdBQWpCOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuREMsZ0RBQVNBLENBQUM7UUFDUiw0Q0FBNEM7UUFDNUNTO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNUiw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDO1lBQ2pDTCxVQUFVSSxTQUFTRSxJQUFJLENBQUNQLE1BQU07UUFDaEMsRUFBRSxPQUFPUSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQzFDO0lBQ0Y7SUFFQSxNQUFNRSxvQkFBb0IsQ0FBQ0MsVUFBVUM7UUFDbkMsTUFBTUMsZ0JBQWdCYixPQUFPYyxJQUFJLENBQUNGLENBQUFBLFFBQVNBLE1BQU1HLEdBQUcsS0FBS0o7UUFDekRSLGlCQUFpQlUsMEJBQUFBLG9DQUFBQSxjQUFlRyxLQUFLO1FBRXJDLDZEQUE2RDtRQUM3RGpCLGNBQWNZO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUN0Qix1RkFBUUE7WUFBQ3VCLFVBQVVUOzs4QkFDbEIsOERBQUNkLHVGQUFRQSxDQUFDd0IsTUFBTTtvQkFBQ0MsU0FBUTtvQkFBVUMsSUFBRzs4QkFDbkNwQixpQkFBaUI7Ozs7Ozs4QkFHcEIsOERBQUNOLHVGQUFRQSxDQUFDMkIsSUFBSTs4QkFDWHZCLE9BQU93QixHQUFHLENBQUNaLENBQUFBLHNCQUNWLDhEQUFDaEIsdUZBQVFBLENBQUM2QixJQUFJOzRCQUFpQmQsVUFBVUMsTUFBTUcsR0FBRztzQ0FBR0gsTUFBTUksS0FBSzsyQkFBNUNKLE1BQU1HLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QztHQXpDU2pCO0tBQUFBO0FBMENUNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlcy9FdmVudHMvQnV5VGlja2V0L0N1c3RvbURyb3Bkb3duLmpzPzIyOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBDdXN0b21Ecm9wZG93bih7IG9uU2VsZWN0RXZlbnQgfSkgeyAvLyBSZWNlaXZlIG9uU2VsZWN0RXZlbnQgYXMgYSBwcm9wXG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggZGF0YSBmcm9tIEFQSSB3aGVuIGNvbXBvbmVudCBtb3VudHNcbiAgICBmZXRjaEV2ZW50cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZXZlbnQvZ2V0RXZlbnRzJyk7XG4gICAgICBzZXRFdmVudHMocmVzcG9uc2UuZGF0YS5ldmVudHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBldmVudHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVUaXRsZVNlbGVjdCA9IChldmVudEtleSwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEV2ZW50ID0gZXZlbnRzLmZpbmQoZXZlbnQgPT4gZXZlbnQuX2lkID09PSBldmVudEtleSk7XG4gICAgc2V0U2VsZWN0ZWRUaXRsZShzZWxlY3RlZEV2ZW50Py5UaXRsZSk7XG5cbiAgICAvLyBJbnZva2Ugb25TZWxlY3RFdmVudCBjYWxsYmFjayB3aXRoIHRoZSBzZWxlY3RlZCBldmVudCdzIElEXG4gICAgb25TZWxlY3RFdmVudChldmVudEtleSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICA8RHJvcGRvd24gb25TZWxlY3Q9e2hhbmRsZVRpdGxlU2VsZWN0fT5cbiAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwic3VjY2Vzc1wiIGlkPVwiZHJvcGRvd24tYmFzaWNcIj5cbiAgICAgICAgICB7c2VsZWN0ZWRUaXRsZSB8fCAnU2VsZWN0IEV2ZW50J31cbiAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XG5cbiAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAge2V2ZW50cy5tYXAoZXZlbnQgPT4gKFxuICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0ga2V5PXtldmVudC5faWR9IGV2ZW50S2V5PXtldmVudC5faWR9PntldmVudC5UaXRsZX08L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRHJvcGRvd24iLCJheGlvcyIsIkN1c3RvbURyb3Bkb3duIiwib25TZWxlY3RFdmVudCIsImV2ZW50cyIsInNldEV2ZW50cyIsInNlbGVjdGVkVGl0bGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwiZmV0Y2hFdmVudHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVUaXRsZVNlbGVjdCIsImV2ZW50S2V5IiwiZXZlbnQiLCJzZWxlY3RlZEV2ZW50IiwiZmluZCIsIl9pZCIsIlRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25TZWxlY3QiLCJUb2dnbGUiLCJ2YXJpYW50IiwiaWQiLCJNZW51IiwibWFwIiwiSXRlbSIsImV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Events/BuyTicket/CustomDropdown.js\n"));

/***/ })

});
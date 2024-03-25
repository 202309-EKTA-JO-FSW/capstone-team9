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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../style.css */ \"(app-pages-browser)/./src/app/style.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CustomDropdown(param) {\n    let { onSelectEvent } = param;\n    _s();\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTitle, setSelectedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchEvents();\n    }, []);\n    const fetchEvents = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/event/getEvents\");\n            setEvents(response.data.events);\n        } catch (error) {\n            console.error(\"Error fetching events:\", error);\n        }\n    };\n    const handleChange = (event)=>{\n        console.log(\"Selected value:\", event.target.value);\n    };\n    // Dropdown component\n    const Dropdown = (param)=>{\n        let { options, onChange } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n            className: \"custom-dropdown\",\n            onChange: onChange,\n            children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    value: option.value,\n                    children: option.label\n                }, index, false, {\n                    fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, this);\n    };\n    // Example usage\n    const options = [\n        {\n            value: \"option1\",\n            label: \"Option 1\"\n        },\n        {\n            value: \"option2\",\n            label: \"Option 2\"\n        },\n        {\n            value: \"option3\",\n            label: \"Option 3\"\n        }\n    ];\n    const handleTitleSelect = async (eventKey, event)=>{\n        const selectedEvent = events.find((event)=>event._id === eventKey);\n        setSelectedTitle(selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.Title);\n        onSelectEvent(eventKey);\n        // Fetch additional data or perform actions related to the selected event\n        try {\n            // Example API call related to the selected event\n            const eventData = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/event/\".concat(eventKey));\n            console.log(\"Event data:\", eventData.data);\n        } catch (error) {\n            console.error(\"Error fetching event data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: selectedTitle || \"Select Event\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dropdown, {\n                options: options,\n                onChange: handleTitleSelect\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(CustomDropdown, \"VCHm+QeZNO1Zr+iK1ULQjo/mEug=\");\n_c = CustomDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomDropdown);\nvar _c;\n$RefreshReg$(_c, \"CustomDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvRXZlbnRzL0J1eVRpY2tldC9DdXN0b21Ecm9wZG93bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNSO0FBQ2pCO0FBQ0U7QUFFNUIsU0FBU0ssZUFBZSxLQUFpQjtRQUFqQixFQUFFQyxhQUFhLEVBQUUsR0FBakI7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQztRQUNSVztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLGNBQWM7UUFDbEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQztZQUNqQ1AsVUFBVU0sU0FBU0UsSUFBSSxDQUFDVCxNQUFNO1FBQ2hDLEVBQUUsT0FBT1UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztJQUNGO0lBQ0EsTUFBTUUsZUFBZSxDQUFDQztRQUNwQkYsUUFBUUcsR0FBRyxDQUFDLG1CQUFtQkQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ25EO0lBQ0YscUJBQXFCO0lBQ3JCLE1BQU1wQixXQUFXO1lBQUMsRUFBRXFCLE9BQU8sRUFBRUMsUUFBUSxFQUFFO1FBQ3JDLHFCQUNFLDhEQUFDQztZQUFPQyxXQUFVO1lBQWtCRixVQUFVQTtzQkFFM0NELFFBQVFJLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNEO29CQUFtQk4sT0FBT00sT0FBT04sS0FBSzs4QkFDcENNLE9BQU9FLEtBQUs7bUJBREZEOzs7Ozs7Ozs7O0lBTXJCO0lBR0EsZ0JBQWdCO0lBQ2hCLE1BQU1OLFVBQVU7UUFDZDtZQUFFRCxPQUFPO1lBQVdRLE9BQU87UUFBVztRQUN0QztZQUFFUixPQUFPO1lBQVdRLE9BQU87UUFBVztRQUN0QztZQUFFUixPQUFPO1lBQVdRLE9BQU87UUFBVztLQUN2QztJQUNDLE1BQU1DLG9CQUFvQixPQUFPQyxVQUFVYjtRQUN6QyxNQUFNYyxnQkFBZ0IzQixPQUFPNEIsSUFBSSxDQUFDZixDQUFBQSxRQUFTQSxNQUFNZ0IsR0FBRyxLQUFLSDtRQUV6RHZCLGlCQUFpQndCLDBCQUFBQSxvQ0FBQUEsY0FBZUcsS0FBSztRQUNyQy9CLGNBQWMyQjtRQUVkLHlFQUF5RTtRQUN6RSxJQUFJO1lBQ0YsaURBQWlEO1lBQ2pELE1BQU1LLFlBQVksTUFBTWxDLDZDQUFLQSxDQUFDVyxHQUFHLENBQUMsK0JBQXdDLE9BQVRrQjtZQUNqRWYsUUFBUUcsR0FBRyxDQUFDLGVBQWVpQixVQUFVdEIsSUFBSTtRQUMzQyxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDc0I7UUFBSVosV0FBVTs7MEJBQ2IsOERBQUNhOzBCQUFJL0IsaUJBQWlCOzs7Ozs7MEJBQ3RCLDhEQUFDTjtnQkFBU3FCLFNBQVNBO2dCQUFTQyxVQUFVTzs7Ozs7Ozs7Ozs7O0FBTzVDO0dBbkVTM0I7S0FBQUE7QUFxRVQsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlcy9FdmVudHMvQnV5VGlja2V0L0N1c3RvbURyb3Bkb3duLmpzPzIyOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBDdXN0b21Ecm9wZG93bih7IG9uU2VsZWN0RXZlbnQgfSkge1xuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRUaXRsZSwgc2V0U2VsZWN0ZWRUaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRXZlbnRzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaEV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ldmVudC9nZXRFdmVudHMnKTtcbiAgICAgIHNldEV2ZW50cyhyZXNwb25zZS5kYXRhLmV2ZW50cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV2ZW50czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgdmFsdWU6JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbi8vIERyb3Bkb3duIGNvbXBvbmVudFxuY29uc3QgRHJvcGRvd24gPSAoeyBvcHRpb25zLCBvbkNoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlbGVjdCBjbGFzc05hbWU9XCJjdXN0b20tZHJvcGRvd25cIiBvbkNoYW5nZT17b25DaGFuZ2V9PlxuICAgICAgey8qIE1hcCB0aHJvdWdoIG9wdGlvbnMgYW5kIGNyZWF0ZSBkcm9wZG93biBpdGVtcyAqL31cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gICk7XG59O1xuXG5cbi8vIEV4YW1wbGUgdXNhZ2VcbmNvbnN0IG9wdGlvbnMgPSBbXG4gIHsgdmFsdWU6ICdvcHRpb24xJywgbGFiZWw6ICdPcHRpb24gMScgfSxcbiAgeyB2YWx1ZTogJ29wdGlvbjInLCBsYWJlbDogJ09wdGlvbiAyJyB9LFxuICB7IHZhbHVlOiAnb3B0aW9uMycsIGxhYmVsOiAnT3B0aW9uIDMnIH0sXG5dO1xuICBjb25zdCBoYW5kbGVUaXRsZVNlbGVjdCA9IGFzeW5jIChldmVudEtleSwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEV2ZW50ID0gZXZlbnRzLmZpbmQoZXZlbnQgPT4gZXZlbnQuX2lkID09PSBldmVudEtleSk7XG4gICAgXG4gICAgc2V0U2VsZWN0ZWRUaXRsZShzZWxlY3RlZEV2ZW50Py5UaXRsZSk7XG4gICAgb25TZWxlY3RFdmVudChldmVudEtleSk7XG5cbiAgICAvLyBGZXRjaCBhZGRpdGlvbmFsIGRhdGEgb3IgcGVyZm9ybSBhY3Rpb25zIHJlbGF0ZWQgdG8gdGhlIHNlbGVjdGVkIGV2ZW50XG4gICAgdHJ5IHtcbiAgICAgIC8vIEV4YW1wbGUgQVBJIGNhbGwgcmVsYXRlZCB0byB0aGUgc2VsZWN0ZWQgZXZlbnRcbiAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2V2ZW50LyR7ZXZlbnRLZXl9YCk7XG4gICAgICBjb25zb2xlLmxvZygnRXZlbnQgZGF0YTonLCBldmVudERhdGEuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV2ZW50IGRhdGE6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTRcIj5cbiAgICAgIDxoMT57c2VsZWN0ZWRUaXRsZSB8fCAnU2VsZWN0IEV2ZW50J308L2gxPlxuICAgICAgPERyb3Bkb3duIG9wdGlvbnM9e29wdGlvbnN9IG9uQ2hhbmdlPXtoYW5kbGVUaXRsZVNlbGVjdH0gLz5cbiAgICA8L2Rpdj5cblxuXG5cbiAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbURyb3Bkb3duO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEcm9wZG93biIsImF4aW9zIiwiQ3VzdG9tRHJvcGRvd24iLCJvblNlbGVjdEV2ZW50IiwiZXZlbnRzIiwic2V0RXZlbnRzIiwic2VsZWN0ZWRUaXRsZSIsInNldFNlbGVjdGVkVGl0bGUiLCJzaG93RHJvcGRvd24iLCJzZXRTaG93RHJvcGRvd24iLCJmZXRjaEV2ZW50cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJzZWxlY3QiLCJjbGFzc05hbWUiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImxhYmVsIiwiaGFuZGxlVGl0bGVTZWxlY3QiLCJldmVudEtleSIsInNlbGVjdGVkRXZlbnQiLCJmaW5kIiwiX2lkIiwiVGl0bGUiLCJldmVudERhdGEiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Events/BuyTicket/CustomDropdown.js\n"));

/***/ })

});
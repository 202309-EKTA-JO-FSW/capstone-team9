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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../style.css */ \"(app-pages-browser)/./src/app/style.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CustomDropdown(param) {\n    let { onSelectEvent } = param;\n    _s();\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTitle, setSelectedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchEvents();\n    }, []);\n    const fetchEvents = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/event/getEvents\");\n            setEvents(response.data.events);\n        } catch (error) {\n            console.error(\"Error fetching events:\", error);\n        }\n    };\n    const handleChange = (event)=>{\n        console.log(\"Selected value:\", event.target.value);\n    };\n    // Dropdown component\n    const Dropdown = (param)=>{\n        let { options, onChange } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n            className: \"custom-dropdown\",\n            onChange: onChange,\n            children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    value: option.value,\n                    children: option.label\n                }, index, false, {\n                    fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, this);\n    };\n    // Example usage\n    const options = [\n        {\n            value: \"option1\",\n            label: \"Option 1\"\n        },\n        {\n            value: \"option2\",\n            label: \"Option 2\"\n        },\n        {\n            value: \"option3\",\n            label: \"Option 3\"\n        }\n    ];\n    const handleTitleSelect = async (eventKey, event)=>{\n        const selectedEvent = events.find((event)=>event._id === eventKey);\n        setSelectedTitle(selectedEvent === null || selectedEvent === void 0 ? void 0 : selectedEvent.Title);\n        onSelectEvent(eventKey);\n        // Fetch additional data or perform actions related to the selected event\n        try {\n            // Example API call related to the selected event\n            const eventData = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/event/\".concat(eventKey));\n            console.log(\"Event data:\", eventData.data);\n        } catch (error) {\n            console.error(\"Error fetching event data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: selectedTitle || \"Select Event\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dropdown, {\n                options: events.map((event)=>({\n                        value: event._id,\n                        label: event.Title\n                    })),\n                onChange: handleTitleSelect\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dropdown, {\n                options: options,\n                onChange: handleTitleSelect\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/client/src/app/pages/Events/BuyTicket/CustomDropdown.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(CustomDropdown, \"VCHm+QeZNO1Zr+iK1ULQjo/mEug=\");\n_c = CustomDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomDropdown);\nvar _c;\n$RefreshReg$(_c, \"CustomDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvRXZlbnRzL0J1eVRpY2tldC9DdXN0b21Ecm9wZG93bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNSO0FBQ2pCO0FBQ0U7QUFFNUIsU0FBU0ssZUFBZSxLQUFpQjtRQUFqQixFQUFFQyxhQUFhLEVBQUUsR0FBakI7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQztRQUNSVztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLGNBQWM7UUFDbEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQztZQUNqQ1AsVUFBVU0sU0FBU0UsSUFBSSxDQUFDVCxNQUFNO1FBQ2hDLEVBQUUsT0FBT1UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztJQUNGO0lBQ0EsTUFBTUUsZUFBZSxDQUFDQztRQUNwQkYsUUFBUUcsR0FBRyxDQUFDLG1CQUFtQkQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ25EO0lBQ0YscUJBQXFCO0lBQ3JCLE1BQU1wQixXQUFXO1lBQUMsRUFBRXFCLE9BQU8sRUFBRUMsUUFBUSxFQUFFO1FBQ3JDLHFCQUNFLDhEQUFDQztZQUFPQyxXQUFVO1lBQWtCRixVQUFVQTtzQkFFM0NELFFBQVFJLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDcEIsOERBQUNEO29CQUFtQk4sT0FBT00sT0FBT04sS0FBSzs4QkFDcENNLE9BQU9FLEtBQUs7bUJBREZEOzs7Ozs7Ozs7O0lBTXJCO0lBR0EsZ0JBQWdCO0lBQ2hCLE1BQU1OLFVBQVU7UUFDZDtZQUFFRCxPQUFPO1lBQVdRLE9BQU87UUFBVztRQUN0QztZQUFFUixPQUFPO1lBQVdRLE9BQU87UUFBVztRQUN0QztZQUFFUixPQUFPO1lBQVdRLE9BQU87UUFBVztLQUN2QztJQUNDLE1BQU1DLG9CQUFvQixPQUFPQyxVQUFVYjtRQUN6QyxNQUFNYyxnQkFBZ0IzQixPQUFPNEIsSUFBSSxDQUFDZixDQUFBQSxRQUFTQSxNQUFNZ0IsR0FBRyxLQUFLSDtRQUV6RHZCLGlCQUFpQndCLDBCQUFBQSxvQ0FBQUEsY0FBZUcsS0FBSztRQUNyQy9CLGNBQWMyQjtRQUVkLHlFQUF5RTtRQUN6RSxJQUFJO1lBQ0YsaURBQWlEO1lBQ2pELE1BQU1LLFlBQVksTUFBTWxDLDZDQUFLQSxDQUFDVyxHQUFHLENBQUMsK0JBQXdDLE9BQVRrQjtZQUNqRWYsUUFBUUcsR0FBRyxDQUFDLGVBQWVpQixVQUFVdEIsSUFBSTtRQUMzQyxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDc0I7UUFBSVosV0FBVTs7MEJBQ2IsOERBQUNhOzBCQUFJL0IsaUJBQWlCOzs7Ozs7MEJBQ2hCLDhEQUFDTjtnQkFBU3FCLFNBQVNqQixPQUFPcUIsR0FBRyxDQUFDUixDQUFBQSxRQUFXO3dCQUFFRyxPQUFNSCxNQUFNZ0IsR0FBRzt3QkFBRUwsT0FBTVgsTUFBTWlCLEtBQUs7b0JBQUE7Z0JBQUtaLFVBQVVPOzs7Ozs7MEJBRWxHLDhEQUFDN0I7Z0JBQVNxQixTQUFTQTtnQkFBU0MsVUFBVU87Ozs7Ozs7Ozs7OztBQU81QztHQXJFUzNCO0tBQUFBO0FBdUVULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvRXZlbnRzL0J1eVRpY2tldC9DdXN0b21Ecm9wZG93bi5qcz8yMjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gQ3VzdG9tRHJvcGRvd24oeyBvblNlbGVjdEV2ZW50IH0pIHtcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEV2ZW50cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZXZlbnQvZ2V0RXZlbnRzJyk7XG4gICAgICBzZXRFdmVudHMocmVzcG9uc2UuZGF0YS5ldmVudHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBldmVudHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIHZhbHVlOicsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG4vLyBEcm9wZG93biBjb21wb25lbnRcbmNvbnN0IERyb3Bkb3duID0gKHsgb3B0aW9ucywgb25DaGFuZ2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY3VzdG9tLWRyb3Bkb3duXCIgb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgIHsvKiBNYXAgdGhyb3VnaCBvcHRpb25zIGFuZCBjcmVhdGUgZHJvcGRvd24gaXRlbXMgKi99XG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICkpfVxuICAgIDwvc2VsZWN0PlxuICApO1xufTtcblxuXG4vLyBFeGFtcGxlIHVzYWdlXG5jb25zdCBvcHRpb25zID0gW1xuICB7IHZhbHVlOiAnb3B0aW9uMScsIGxhYmVsOiAnT3B0aW9uIDEnIH0sXG4gIHsgdmFsdWU6ICdvcHRpb24yJywgbGFiZWw6ICdPcHRpb24gMicgfSxcbiAgeyB2YWx1ZTogJ29wdGlvbjMnLCBsYWJlbDogJ09wdGlvbiAzJyB9LFxuXTtcbiAgY29uc3QgaGFuZGxlVGl0bGVTZWxlY3QgPSBhc3luYyAoZXZlbnRLZXksIGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRFdmVudCA9IGV2ZW50cy5maW5kKGV2ZW50ID0+IGV2ZW50Ll9pZCA9PT0gZXZlbnRLZXkpO1xuICAgIFxuICAgIHNldFNlbGVjdGVkVGl0bGUoc2VsZWN0ZWRFdmVudD8uVGl0bGUpO1xuICAgIG9uU2VsZWN0RXZlbnQoZXZlbnRLZXkpO1xuXG4gICAgLy8gRmV0Y2ggYWRkaXRpb25hbCBkYXRhIG9yIHBlcmZvcm0gYWN0aW9ucyByZWxhdGVkIHRvIHRoZSBzZWxlY3RlZCBldmVudFxuICAgIHRyeSB7XG4gICAgICAvLyBFeGFtcGxlIEFQSSBjYWxsIHJlbGF0ZWQgdG8gdGhlIHNlbGVjdGVkIGV2ZW50XG4gICAgICBjb25zdCBldmVudERhdGEgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ldmVudC8ke2V2ZW50S2V5fWApO1xuICAgICAgY29uc29sZS5sb2coJ0V2ZW50IGRhdGE6JywgZXZlbnREYXRhLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBldmVudCBkYXRhOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICA8aDE+e3NlbGVjdGVkVGl0bGUgfHwgJ1NlbGVjdCBFdmVudCd9PC9oMT5cbiAgICAgICAgICAgIDxEcm9wZG93biBvcHRpb25zPXtldmVudHMubWFwKGV2ZW50ID0+ICggeyB2YWx1ZTpldmVudC5faWQsIGxhYmVsOmV2ZW50LlRpdGxlfSkpfSBvbkNoYW5nZT17aGFuZGxlVGl0bGVTZWxlY3R9IC8+XG5cbiAgICAgIDxEcm9wZG93biBvcHRpb25zPXtvcHRpb25zfSBvbkNoYW5nZT17aGFuZGxlVGl0bGVTZWxlY3R9IC8+XG4gICAgPC9kaXY+XG5cblxuXG4gIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Ecm9wZG93bjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRHJvcGRvd24iLCJheGlvcyIsIkN1c3RvbURyb3Bkb3duIiwib25TZWxlY3RFdmVudCIsImV2ZW50cyIsInNldEV2ZW50cyIsInNlbGVjdGVkVGl0bGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3Bkb3duIiwiZmV0Y2hFdmVudHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImxvZyIsInRhcmdldCIsInZhbHVlIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwic2VsZWN0IiwiY2xhc3NOYW1lIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJsYWJlbCIsImhhbmRsZVRpdGxlU2VsZWN0IiwiZXZlbnRLZXkiLCJzZWxlY3RlZEV2ZW50IiwiZmluZCIsIl9pZCIsIlRpdGxlIiwiZXZlbnREYXRhIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Events/BuyTicket/CustomDropdown.js\n"));

/***/ })

});
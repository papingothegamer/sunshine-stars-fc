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

/***/ "(app-pages-browser)/./components/latest-videos.tsx":
/*!**************************************!*\
  !*** ./components/latest-videos.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LatestVideos: function() { return /* binding */ LatestVideos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowUpRight_Play_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowUpRight,Play!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-up-right.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowUpRight_Play_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowUpRight,Play!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/play.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _lib_data_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/data/videos */ \"(app-pages-browser)/./lib/data/videos.ts\");\n/* __next_internal_client_entry_do_not_use__ LatestVideos auto */ \n\n\n\n\n\nfunction LatestVideos() {\n    // Randomly select 4 videos\n    const shuffledVideos = [\n        ..._lib_data_videos__WEBPACK_IMPORTED_MODULE_3__.videos\n    ].sort(()=>Math.random() - 0.5);\n    const featuredVideo = shuffledVideos[0];\n    const sidebarVideos = shuffledVideos.slice(1, 4);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-white py-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl\",\n                            children: \"Latest Videos\"\n                        }, void 0, false, {\n                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/news?tab=video\",\n                            className: \"text-primary hover:underline flex items-center\",\n                            children: [\n                                \"View all videos\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowUpRight_Play_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    className: \"ml-1 h-4 w-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-8 lg:grid-cols-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            className: \"lg:col-span-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/news/video/\".concat(featuredVideo.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                    className: \"overflow-hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                                        className: \"p-0\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative aspect-video\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: featuredVideo.thumbnail || \"/placeholder.svg\",\n                                                        alt: \"\",\n                                                        className: \"w-full h-full object-cover\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                        lineNumber: 31,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowUpRight_Play_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                            className: \"h-16 w-16 text-white\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                            lineNumber: 37,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded\",\n                                                        children: featuredVideo.duration\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"p-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-xl font-bold\",\n                                                    children: featuredVideo.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4\",\n                            children: sidebarVideos.map((video, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    initial: {\n                                        opacity: 0,\n                                        x: 20\n                                    },\n                                    animate: {\n                                        opacity: 1,\n                                        x: 0\n                                    },\n                                    transition: {\n                                        delay: index * 0.1\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/news/video/\".concat(video.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                            className: \"overflow-hidden hover:bg-muted transition-colors\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n                                                className: \"p-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex gap-4\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"relative w-32 h-20 flex-shrink-0\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                    src: video.thumbnail || \"/placeholder.svg\",\n                                                                    alt: \"\",\n                                                                    className: \"w-full h-full object-cover rounded\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                                    lineNumber: 63,\n                                                                    columnNumber: 27\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded\",\n                                                                    children: video.duration\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                                    lineNumber: 68,\n                                                                    columnNumber: 27\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                            className: \"text-sm font-medium\",\n                                                            children: video.title\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                            lineNumber: 72,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this)\n                                }, video.id, false, {\n                                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/toluwanimidaramola/Documents/Projects/sunshine-stars-fc/components/latest-videos.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = LatestVideos;\nvar _c;\n$RefreshReg$(_c, \"LatestVideos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF0ZXN0LXZpZGVvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXNDO0FBQ2tCO0FBQ1A7QUFDckI7QUFDYztBQUVuQyxTQUFTTztJQUNkLDJCQUEyQjtJQUMzQixNQUFNQyxpQkFBaUI7V0FBSUYsb0RBQU1BO0tBQUMsQ0FBQ0csSUFBSSxDQUFDLElBQU1DLEtBQUtDLE1BQU0sS0FBSztJQUM5RCxNQUFNQyxnQkFBZ0JKLGNBQWMsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU1LLGdCQUFnQkwsZUFBZU0sS0FBSyxDQUFDLEdBQUc7SUFFOUMscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBVzs7Ozs7O3NDQUN6Qiw4REFBQ1gsaURBQUlBOzRCQUFDYyxNQUFLOzRCQUFrQkgsV0FBVTs7Z0NBQWlEOzhDQUV0Riw4REFBQ1osNkZBQVlBO29DQUFDWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRzVCLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNoQixpREFBTUEsQ0FBQ2lCLEdBQUc7NEJBQUNHLFNBQVM7Z0NBQUVDLFNBQVM7NEJBQUU7NEJBQUdDLFNBQVM7Z0NBQUVELFNBQVM7NEJBQUU7NEJBQUdMLFdBQVU7c0NBQ3RFLDRFQUFDWCxpREFBSUE7Z0NBQUNjLE1BQU0sZUFBZ0MsT0FBakJQLGNBQWNXLEVBQUU7MENBQ3pDLDRFQUFDdEIscURBQUlBO29DQUFDZSxXQUFVOzhDQUNkLDRFQUFDZCw0REFBV0E7d0NBQUNjLFdBQVU7OzBEQUNyQiw4REFBQ0M7Z0RBQUlELFdBQVU7O2tFQUNiLDhEQUFDUTt3REFDQ0MsS0FBS2IsY0FBY2MsU0FBUyxJQUFJO3dEQUNoQ0MsS0FBSTt3REFDSlgsV0FBVTs7Ozs7O2tFQUVaLDhEQUFDQzt3REFBSUQsV0FBVTtrRUFDYiw0RUFBQ2IsNkZBQUlBOzREQUFDYSxXQUFVOzs7Ozs7Ozs7OztrRUFFbEIsOERBQUNDO3dEQUFJRCxXQUFVO2tFQUNaSixjQUFjZ0IsUUFBUTs7Ozs7Ozs7Ozs7OzBEQUczQiw4REFBQ1g7Z0RBQUlELFdBQVU7MERBQ2IsNEVBQUNhO29EQUFHYixXQUFVOzhEQUFxQkosY0FBY2tCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU1oRSw4REFBQ2I7NEJBQUlELFdBQVU7c0NBQ1pILGNBQWNrQixHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3pCLDhEQUFDakMsaURBQU1BLENBQUNpQixHQUFHO29DQUVURyxTQUFTO3dDQUFFQyxTQUFTO3dDQUFHYSxHQUFHO29DQUFHO29DQUM3QlosU0FBUzt3Q0FBRUQsU0FBUzt3Q0FBR2EsR0FBRztvQ0FBRTtvQ0FDNUJDLFlBQVk7d0NBQUVDLE9BQU9ILFFBQVE7b0NBQUk7OENBRWpDLDRFQUFDNUIsaURBQUlBO3dDQUFDYyxNQUFNLGVBQXdCLE9BQVRhLE1BQU1ULEVBQUU7a0RBQ2pDLDRFQUFDdEIscURBQUlBOzRDQUFDZSxXQUFVO3NEQUNkLDRFQUFDZCw0REFBV0E7Z0RBQUNjLFdBQVU7MERBQ3JCLDRFQUFDQztvREFBSUQsV0FBVTs7c0VBQ2IsOERBQUNDOzREQUFJRCxXQUFVOzs4RUFDYiw4REFBQ1E7b0VBQ0NDLEtBQUtPLE1BQU1OLFNBQVMsSUFBSTtvRUFDeEJDLEtBQUk7b0VBQ0pYLFdBQVU7Ozs7Ozs4RUFFWiw4REFBQ0M7b0VBQUlELFdBQVU7OEVBQ1pnQixNQUFNSixRQUFROzs7Ozs7Ozs7Ozs7c0VBR25CLDhEQUFDUzs0REFBR3JCLFdBQVU7c0VBQXVCZ0IsTUFBTUYsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQW5CbkRFLE1BQU1ULEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCN0I7S0EzRWdCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXRlc3QtdmlkZW9zLnRzeD9iYjA3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IFBsYXksIEFycm93VXBSaWdodCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB2aWRlb3MgfSBmcm9tIFwiQC9saWIvZGF0YS92aWRlb3NcIlxuXG5leHBvcnQgZnVuY3Rpb24gTGF0ZXN0VmlkZW9zKCkge1xuICAvLyBSYW5kb21seSBzZWxlY3QgNCB2aWRlb3NcbiAgY29uc3Qgc2h1ZmZsZWRWaWRlb3MgPSBbLi4udmlkZW9zXS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpXG4gIGNvbnN0IGZlYXR1cmVkVmlkZW8gPSBzaHVmZmxlZFZpZGVvc1swXVxuICBjb25zdCBzaWRlYmFyVmlkZW9zID0gc2h1ZmZsZWRWaWRlb3Muc2xpY2UoMSwgNClcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPkxhdGVzdCBWaWRlb3M8L2gyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3cz90YWI9dmlkZW9cIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgaG92ZXI6dW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICBWaWV3IGFsbCB2aWRlb3NcbiAgICAgICAgICAgIDxBcnJvd1VwUmlnaHQgY2xhc3NOYW1lPVwibWwtMSBoLTQgdy00XCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTggbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy92aWRlby8ke2ZlYXR1cmVkVmlkZW8uaWR9YH0+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXZpZGVvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZlYXR1cmVkVmlkZW8udGh1bWJuYWlsIHx8IFwiL3BsYWNlaG9sZGVyLnN2Z1wifVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svNjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3BhY2l0eS0wIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cImgtMTYgdy0xNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIgcmlnaHQtMiBiZy1ibGFjay84MCB0ZXh0LXdoaXRlIHRleHQtc20gcHgtMiBweS0xIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZWRWaWRlby5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntmZWF0dXJlZFZpZGVvLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICB7c2lkZWJhclZpZGVvcy5tYXAoKHZpZGVvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17dmlkZW8uaWR9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAyMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGluZGV4ICogMC4xIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvdmlkZW8vJHt2aWRlby5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBob3ZlcjpiZy1tdXRlZCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMzIgaC0yMCBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3ZpZGVvLnRodW1ibmFpbCB8fCBcIi9wbGFjZWhvbGRlci5zdmdcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0xIHJpZ2h0LTEgYmctYmxhY2svODAgdGV4dC13aGl0ZSB0ZXh0LXhzIHB4LTEgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2aWRlby5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e3ZpZGVvLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlBsYXkiLCJBcnJvd1VwUmlnaHQiLCJMaW5rIiwidmlkZW9zIiwiTGF0ZXN0VmlkZW9zIiwic2h1ZmZsZWRWaWRlb3MiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImZlYXR1cmVkVmlkZW8iLCJzaWRlYmFyVmlkZW9zIiwic2xpY2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJocmVmIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiaWQiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJhbHQiLCJkdXJhdGlvbiIsImgzIiwidGl0bGUiLCJtYXAiLCJ2aWRlbyIsImluZGV4IiwieCIsInRyYW5zaXRpb24iLCJkZWxheSIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/latest-videos.tsx\n"));

/***/ })

});
"use strict";
(self["webpackChunk_kshitijraj09_sharedlib_mf"] = self["webpackChunk_kshitijraj09_sharedlib_mf"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "webpack/sharing/consume/default/@mui/material/@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SharedButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SharedButton */ "./src/components/SharedButton.tsx");
/* harmony import */ var _themeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeProvider */ "./src/themeProvider/index.ts");





var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_SharedButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "test"
  }));
};

// Render your React component instead

var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById("theme-app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
  theme: _themeProvider__WEBPACK_IMPORTED_MODULE_4__.customTheme
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Main, null)));

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src/components/SharedButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/SharedButton.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "webpack/sharing/consume/default/@mui/material/@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


var SharedButton = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'default text' : _b;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "text", sx: { backgroundColor: '#F9F4D9' }, color: "primary" }, text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedButton);


/***/ }),

/***/ "./src/themeProvider/Theme.ts":
/*!************************************!*\
  !*** ./src/themeProvider/Theme.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");

var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["default"])({
    status: {
        danger: "",
    },
    applicationBackgroundColor: "#ECF2FF",
    createPostBackgroundColor: "#E3DFFD",
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 700,
            laptop: 1300,
            largeScreen: 1600,
        },
    },
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ "./src/themeProvider/index.ts":
/*!************************************!*\
  !*** ./src/themeProvider/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customTheme: () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme */ "./src/themeProvider/Theme.ts");




/***/ })

}]);
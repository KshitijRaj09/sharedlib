"use strict";
(self["webpackChunk_kshitijraj09_sharedlib_mf"] = self["webpackChunk_kshitijraj09_sharedlib_mf"] || []).push([["src_boot_ts"],{

/***/ "./src/boot.ts":
/*!*********************!*\
  !*** ./src/boot.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomTheme: () => (/* reexport safe */ _themeProvider_Theme__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SharedButton: () => (/* reexport safe */ _components_SharedButton__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   WindowEventService: () => (/* reexport safe */ _eventservice__WEBPACK_IMPORTED_MODULE_2__.WindowEventService),
/* harmony export */   WindowEvents: () => (/* reexport safe */ _eventservice__WEBPACK_IMPORTED_MODULE_2__.WindowEvents)
/* harmony export */ });
/* harmony import */ var _themeProvider_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeProvider/Theme */ "./src/themeProvider/Theme.ts");
/* harmony import */ var _components_SharedButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SharedButton */ "./src/components/SharedButton.tsx");
/* harmony import */ var _eventservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventservice */ "./src/eventservice/index.ts");





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

/***/ "./src/eventservice/eventservice.ts":
/*!******************************************!*\
  !*** ./src/eventservice/eventservice.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var WindowEventService = {
    fire: function (event, body) {
        var customEvent = new CustomEvent(event, body);
        window.dispatchEvent(customEvent);
    },
    subscribe: function (event, listener) {
        window.addEventListener(event, listener);
    },
    unsubscribe: function (event, listener) {
        window.removeEventListener(event, listener);
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindowEventService);


/***/ }),

/***/ "./src/eventservice/index.ts":
/*!***********************************!*\
  !*** ./src/eventservice/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowEventService: () => (/* reexport safe */ _eventservice__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   WindowEvents: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.WindowEvents)
/* harmony export */ });
/* harmony import */ var _eventservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventservice */ "./src/eventservice/eventservice.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/eventservice/types.ts");





/***/ }),

/***/ "./src/eventservice/types.ts":
/*!***********************************!*\
  !*** ./src/eventservice/types.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WindowEvents: () => (/* binding */ WindowEvents)
/* harmony export */ });
var WindowEvents;
(function (WindowEvents) {
    WindowEvents["currentUser"] = "currentUser";
    WindowEvents["messageNotification"] = "messageNotification";
    WindowEvents["updateNotification"] = "updateNotification";
    WindowEvents["updatePostNotification"] = "updatePostNotification";
    WindowEvents["postNotification"] = "postNotification";
    WindowEvents["likeNotification"] = "likeNotification";
})(WindowEvents || (WindowEvents = {}));


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
    headerColor: 'cadetblue',
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


/***/ })

}]);
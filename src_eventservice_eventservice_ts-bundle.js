"use strict";
(self["webpackChunk_kshitijraj09_sharedlib_mf"] = self["webpackChunk_kshitijraj09_sharedlib_mf"] || []).push([["src_eventservice_eventservice_ts"],{

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


/***/ })

}]);
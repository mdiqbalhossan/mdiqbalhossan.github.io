"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tsparticles+plugin-easing-quad@3.8.1";
exports.ids = ["vendor-chunks/@tsparticles+plugin-easing-quad@3.8.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tsparticles+plugin-easing-quad@3.8.1/node_modules/@tsparticles/plugin-easing-quad/esm/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tsparticles+plugin-easing-quad@3.8.1/node_modules/@tsparticles/plugin-easing-quad/esm/index.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadEasingQuadPlugin: () => (/* binding */ loadEasingQuadPlugin)\n/* harmony export */ });\n/* harmony import */ var _tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsparticles/engine */ \"(ssr)/./node_modules/.pnpm/@tsparticles+engine@3.8.1/node_modules/@tsparticles/engine/esm/index.js\");\n\nasync function loadEasingQuadPlugin(engine, refresh = true) {\n    engine.checkVersion(\"3.8.1\");\n    await engine.addEasing(_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.EasingType.easeInQuad, value => value ** 2, false);\n    await engine.addEasing(_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.EasingType.easeOutQuad, value => 1 - (1 - value) ** 2, false);\n    await engine.addEasing(_tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.EasingType.easeInOutQuad, value => (value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2), false);\n    await engine.refresh(refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRzcGFydGljbGVzK3BsdWdpbi1lYXNpbmctcXVhZEAzLjguMS9ub2RlX21vZHVsZXMvQHRzcGFydGljbGVzL3BsdWdpbi1lYXNpbmctcXVhZC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFDMUM7QUFDUDtBQUNBLDJCQUEyQiwyREFBVTtBQUNyQywyQkFBMkIsMkRBQVU7QUFDckMsMkJBQTJCLDJEQUFVO0FBQ3JDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvLnBucG0vQHRzcGFydGljbGVzK3BsdWdpbi1lYXNpbmctcXVhZEAzLjguMS9ub2RlX21vZHVsZXMvQHRzcGFydGljbGVzL3BsdWdpbi1lYXNpbmctcXVhZC9lc20vaW5kZXguanM/OTM5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNpbmdUeXBlIH0gZnJvbSBcIkB0c3BhcnRpY2xlcy9lbmdpbmVcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRWFzaW5nUXVhZFBsdWdpbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgZW5naW5lLmNoZWNrVmVyc2lvbihcIjMuOC4xXCIpO1xuICAgIGF3YWl0IGVuZ2luZS5hZGRFYXNpbmcoRWFzaW5nVHlwZS5lYXNlSW5RdWFkLCB2YWx1ZSA9PiB2YWx1ZSAqKiAyLCBmYWxzZSk7XG4gICAgYXdhaXQgZW5naW5lLmFkZEVhc2luZyhFYXNpbmdUeXBlLmVhc2VPdXRRdWFkLCB2YWx1ZSA9PiAxIC0gKDEgLSB2YWx1ZSkgKiogMiwgZmFsc2UpO1xuICAgIGF3YWl0IGVuZ2luZS5hZGRFYXNpbmcoRWFzaW5nVHlwZS5lYXNlSW5PdXRRdWFkLCB2YWx1ZSA9PiAodmFsdWUgPCAwLjUgPyAyICogdmFsdWUgKiogMiA6IDEgLSAoLTIgKiB2YWx1ZSArIDIpICoqIDIgLyAyKSwgZmFsc2UpO1xuICAgIGF3YWl0IGVuZ2luZS5yZWZyZXNoKHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tsparticles+plugin-easing-quad@3.8.1/node_modules/@tsparticles/plugin-easing-quad/esm/index.js\n");

/***/ })

};
;
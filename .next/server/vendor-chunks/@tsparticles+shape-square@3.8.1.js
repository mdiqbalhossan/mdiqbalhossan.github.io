"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tsparticles+shape-square@3.8.1";
exports.ids = ["vendor-chunks/@tsparticles+shape-square@3.8.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/SquareDrawer.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/SquareDrawer.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SquareDrawer: () => (/* binding */ SquareDrawer)\n/* harmony export */ });\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ \"(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/Utils.js\");\n\nconst sides = 4;\nclass SquareDrawer {\n    constructor() {\n        this.validTypes = [\"edge\", \"square\"];\n    }\n    draw(data) {\n        (0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.drawSquare)(data);\n    }\n    getSidesCount() {\n        return sides;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRzcGFydGljbGVzK3NoYXBlLXNxdWFyZUAzLjguMS9ub2RlX21vZHVsZXMvQHRzcGFydGljbGVzL3NoYXBlLXNxdWFyZS9lc20vU3F1YXJlRHJhd2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBQ3hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy8ucG5wbS9AdHNwYXJ0aWNsZXMrc2hhcGUtc3F1YXJlQDMuOC4xL25vZGVfbW9kdWxlcy9AdHNwYXJ0aWNsZXMvc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanM/MWI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkcmF3U3F1YXJlIH0gZnJvbSBcIi4vVXRpbHMuanNcIjtcbmNvbnN0IHNpZGVzID0gNDtcbmV4cG9ydCBjbGFzcyBTcXVhcmVEcmF3ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbGlkVHlwZXMgPSBbXCJlZGdlXCIsIFwic3F1YXJlXCJdO1xuICAgIH1cbiAgICBkcmF3KGRhdGEpIHtcbiAgICAgICAgZHJhd1NxdWFyZShkYXRhKTtcbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHNpZGVzO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/Utils.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/Utils.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawSquare: () => (/* binding */ drawSquare)\n/* harmony export */ });\nconst fixFactorSquared = 2, fixFactor = Math.sqrt(fixFactorSquared), double = 2;\nfunction drawSquare(data) {\n    const { context, radius } = data, fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * double;\n    context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRzcGFydGljbGVzK3NoYXBlLXNxdWFyZUAzLjguMS9ub2RlX21vZHVsZXMvQHRzcGFydGljbGVzL3NoYXBlLXNxdWFyZS9lc20vVXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUCxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0c3BhcnRpY2xlcytzaGFwZS1zcXVhcmVAMy44LjEvbm9kZV9tb2R1bGVzL0B0c3BhcnRpY2xlcy9zaGFwZS1zcXVhcmUvZXNtL1V0aWxzLmpzPzhhMjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZml4RmFjdG9yU3F1YXJlZCA9IDIsIGZpeEZhY3RvciA9IE1hdGguc3FydChmaXhGYWN0b3JTcXVhcmVkKSwgZG91YmxlID0gMjtcbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3F1YXJlKGRhdGEpIHtcbiAgICBjb25zdCB7IGNvbnRleHQsIHJhZGl1cyB9ID0gZGF0YSwgZml4ZWRSYWRpdXMgPSByYWRpdXMgLyBmaXhGYWN0b3IsIGZpeGVkRGlhbWV0ZXIgPSBmaXhlZFJhZGl1cyAqIGRvdWJsZTtcbiAgICBjb250ZXh0LnJlY3QoLWZpeGVkUmFkaXVzLCAtZml4ZWRSYWRpdXMsIGZpeGVkRGlhbWV0ZXIsIGZpeGVkRGlhbWV0ZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/index.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSquareShape: () => (/* binding */ loadSquareShape)\n/* harmony export */ });\n/* harmony import */ var _SquareDrawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareDrawer.js */ \"(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/SquareDrawer.js\");\n\nasync function loadSquareShape(engine, refresh = true) {\n    engine.checkVersion(\"3.8.1\");\n    await engine.addShape(new _SquareDrawer_js__WEBPACK_IMPORTED_MODULE_0__.SquareDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRzcGFydGljbGVzK3NoYXBlLXNxdWFyZUAzLjguMS9ub2RlX21vZHVsZXMvQHRzcGFydGljbGVzL3NoYXBlLXNxdWFyZS9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFDMUM7QUFDUDtBQUNBLDhCQUE4QiwwREFBWTtBQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy8ucG5wbS9AdHNwYXJ0aWNsZXMrc2hhcGUtc3F1YXJlQDMuOC4xL25vZGVfbW9kdWxlcy9AdHNwYXJ0aWNsZXMvc2hhcGUtc3F1YXJlL2VzbS9pbmRleC5qcz8yMzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNxdWFyZURyYXdlciB9IGZyb20gXCIuL1NxdWFyZURyYXdlci5qc1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRTcXVhcmVTaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgZW5naW5lLmNoZWNrVmVyc2lvbihcIjMuOC4xXCIpO1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShuZXcgU3F1YXJlRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tsparticles+shape-square@3.8.1/node_modules/@tsparticles/shape-square/esm/index.js\n");

/***/ })

};
;
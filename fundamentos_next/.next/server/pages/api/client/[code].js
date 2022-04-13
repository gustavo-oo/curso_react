"use strict";
(() => {
var exports = {};
exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 1529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(request, response) {
    const code = request.query.code;
    response.status(200).json({
        id: code,
        name: `Maria ${code}`
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1529));
module.exports = __webpack_exports__;

})();
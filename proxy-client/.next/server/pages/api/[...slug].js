"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/[...slug]";
exports.ids = ["pages/api/[...slug]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/[...slug].js":
/*!********************************!*\
  !*** ./pages/api/[...slug].js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    const { slug  } = req.query;\n    const args = slug.join(\"/\");\n    console.log(\"logging args\");\n    console.log(args);\n    const httpMethod = req.method?.toLowerCase();\n    (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: httpMethod,\n        url: `http://localhost:5225/${args}`,\n        data: req.body,\n        headers: req.headers\n    }).then((response)=>{\n        console.log(response.data);\n        res.status(200).json({\n            message: response.data\n        });\n    }).catch((error)=>{\n        console.error(error);\n        res.status(500).json({\n            message: \"Internal server error\"\n        });\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRVgsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsTUFBTSxFQUFFQyxLQUFJLEVBQUMsR0FBR0YsSUFBSUcsS0FBSztJQUN6QixNQUFNQyxPQUFPRixLQUFLRyxJQUFJLENBQUM7SUFHekJDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNIO0lBRVosTUFBTUksYUFBYVIsSUFBSVMsTUFBTSxFQUFFQztJQUUvQlosaURBQUtBLENBQUM7UUFDSlcsUUFBUUQ7UUFDUkcsS0FBSyxDQUFDLHNCQUFzQixFQUFFUCxLQUFLLENBQUM7UUFDcENRLE1BQU1aLElBQUlhLElBQUk7UUFDZEMsU0FBU2QsSUFBSWMsT0FBTztJQUN0QixHQUNHQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtRQUNsQlYsUUFBUUMsR0FBRyxDQUFDUyxTQUFTSixJQUFJO1FBQ3pCWCxJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTSCxTQUFTSixJQUFJO1FBQUM7SUFDaEQsR0FDQ1EsS0FBSyxDQUFDLENBQUNDLFFBQVU7UUFDaEJmLFFBQVFlLEtBQUssQ0FBQ0E7UUFDZHBCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBd0I7SUFDMUQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveHktY2xpZW50Ly4vcGFnZXMvYXBpL1suLi5zbHVnXS5qcz81Mjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgc2x1Z30gPSByZXEucXVlcnk7XG4gICAgY29uc3QgYXJncyA9IHNsdWcuam9pbignLycpO1xuXG5cbiAgY29uc29sZS5sb2coJ2xvZ2dpbmcgYXJncycpO1xuICBjb25zb2xlLmxvZyhhcmdzKTtcblxuICBjb25zdCBodHRwTWV0aG9kID0gcmVxLm1ldGhvZD8udG9Mb3dlckNhc2UoKTtcblxuICBheGlvcyh7XG4gICAgbWV0aG9kOiBodHRwTWV0aG9kLFxuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTIyNS8ke2FyZ3N9YCxcbiAgICBkYXRhOiByZXEuYm9keSxcbiAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSk7XG4gICAgfSk7XG4gIH1cbiAgIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNsdWciLCJxdWVyeSIsImFyZ3MiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImh0dHBNZXRob2QiLCJtZXRob2QiLCJ0b0xvd2VyQ2FzZSIsInVybCIsImRhdGEiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/[...slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[...slug].js"));
module.exports = __webpack_exports__;

})();
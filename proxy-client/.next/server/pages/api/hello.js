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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// pages/api/proxy/[...args].ts\n\nfunction handler(req, res) {\n    //take everything from the url after  /api/hello from req.url\n    const args = req.url?.replace(\"/api/proxy/\", \"\");\n    console.log(\"logging args\");\n    console.log(args);\n    // determine the HTTP method based on the request method\n    const httpMethod = req.method?.toLowerCase();\n    // use axios to make the HTTP request to the backend server\n    (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: httpMethod,\n        url: `http://localhost:5225/${args}`,\n        data: req.body,\n        headers: req.headers\n    }).then((response)=>{\n        console.log(response.data);\n        res.status(200).json({\n            message: response.data\n        });\n    }).catch((error)=>{\n        console.error(error);\n        res.status(500).json({\n            message: \"Internal server error\"\n        });\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFHTDtBQU1YLFNBQVNDLFFBQ3RCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFHQSw2REFBNkQ7SUFDN0QsTUFBTUMsT0FBT0YsSUFBSUcsR0FBRyxFQUFFQyxRQUFRLGVBQWU7SUFFN0NDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNKO0lBRVosd0RBQXdEO0lBQ3hELE1BQU1LLGFBQWFQLElBQUlRLE1BQU0sRUFBRUM7SUFFL0IsMkRBQTJEO0lBQzNEWCxpREFBS0EsQ0FBQztRQUNKVSxRQUFRRDtRQUNSSixLQUFLLENBQUMsc0JBQXNCLEVBQUVELEtBQUssQ0FBQztRQUNwQ1EsTUFBTVYsSUFBSVcsSUFBSTtRQUNkQyxTQUFTWixJQUFJWSxPQUFPO0lBQ3RCLEdBQ0dDLElBQUksQ0FBQyxDQUFDQyxXQUFhO1FBQ2xCVCxRQUFRQyxHQUFHLENBQUNRLFNBQVNKLElBQUk7UUFDekJULElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBU0gsU0FBU0osSUFBSTtRQUFDO0lBQ2hELEdBQ0NRLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1FBQ2hCZCxRQUFRYyxLQUFLLENBQUNBO1FBQ2RsQixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBd0I7SUFDMUQ7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveHktY2xpZW50Ly4vcGFnZXMvYXBpL2hlbGxvLnRzPzY1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL3Byb3h5L1suLi5hcmdzXS50c1xuXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG50eXBlIERhdGEgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcblxuXG4gIC8vdGFrZSBldmVyeXRoaW5nIGZyb20gdGhlIHVybCBhZnRlciAgL2FwaS9oZWxsbyBmcm9tIHJlcS51cmxcbiAgY29uc3QgYXJncyA9IHJlcS51cmw/LnJlcGxhY2UoXCIvYXBpL3Byb3h5L1wiLCBcIlwiKTsgXG5cbiAgY29uc29sZS5sb2coJ2xvZ2dpbmcgYXJncycpO1xuICBjb25zb2xlLmxvZyhhcmdzKTtcblxuICAvLyBkZXRlcm1pbmUgdGhlIEhUVFAgbWV0aG9kIGJhc2VkIG9uIHRoZSByZXF1ZXN0IG1ldGhvZFxuICBjb25zdCBodHRwTWV0aG9kID0gcmVxLm1ldGhvZD8udG9Mb3dlckNhc2UoKTtcblxuICAvLyB1c2UgYXhpb3MgdG8gbWFrZSB0aGUgSFRUUCByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kIHNlcnZlclxuICBheGlvcyh7XG4gICAgbWV0aG9kOiBodHRwTWV0aG9kLFxuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTIyNS8ke2FyZ3N9YCxcbiAgICBkYXRhOiByZXEuYm9keSxcbiAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiByZXNwb25zZS5kYXRhIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYXJncyIsInVybCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiaHR0cE1ldGhvZCIsIm1ldGhvZCIsInRvTG93ZXJDYXNlIiwiZGF0YSIsImJvZHkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();
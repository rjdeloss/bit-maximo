/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/bit_maximo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bit_maximo.js":
/*!***************************!*\
  !*** ./lib/bit_maximo.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 1000; \ncanvas.height = 570; \n\nconst img = new Image();\n\nimg.src = \"./assets/background2.png\";\n\n\nwindow.onload = function() {\n    \n    let x = 0; \n        \n\n    const scrollSpeed = 3; \n    \n    const drawDiveObstacle = () => {\n        ctx.beginPath();\n        ctx.fillStyle = \"red\";\n        ctx.fillRect(800,100, 100, 125);\n        ctx.fillStyle = \"rgba(255, 0, 0, 0.5)\";\n        ctx.fillRect(800,225, 100, 175);\n        ctx.fillStyle = \"red\";\n        ctx.fillRect(800, 400, 100, 125);\n        ctx.closePath(); \n    }\n\n    const drawJumpObstacle = () => {\n        ctx.beginPath();\n        ctx.fillStyle = \"rgba(0, 255, 0, 0.5)\";\n        ctx.fillRect(500, 100, 100, 300);\n        ctx.fillStyle = \"green\";\n        ctx.fillRect(500, 400, 100, 125);\n        ctx.closePath(); \n    }\n    const drawSlideObstacle = () => {\n        ctx.fillStyle = \"blue\";\n        ctx.fillRect(200, 100, 100, 300);\n        ctx.fillStyle = \"rgba(0, 0, 255, 0.5)\";\n        ctx.fillRect(200, 400, 100, 125);\n    }\n\n    function loop() {\n        ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0); \n        x -= scrollSpeed; \n\n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(loop);\n        drawDiveObstacle();\n        drawJumpObstacle();\n        drawSlideObstacle();\n    }\n    loop();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEO0FBQ0E7O0FBRUEsb0I7QUFDQSxvQjs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUEsYzs7O0FBR0EsMEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0M7QUFDQSxvRDtBQUNBLHlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9saWIvYml0X21heGltby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY2FudmFzLndpZHRoID0gMTAwMDsgXG5jYW52YXMuaGVpZ2h0ID0gNTcwOyBcblxuY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbmltZy5zcmMgPSBcIi4vYXNzZXRzL2JhY2tncm91bmQyLnBuZ1wiO1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBsZXQgeCA9IDA7IFxuICAgICAgICBcblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gMzsgXG4gICAgXG4gICAgY29uc3QgZHJhd0RpdmVPYnN0YWNsZSA9ICgpID0+IHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDgwMCwxMDAsIDEwMCwgMTI1KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDAsIDAsIDAuNSlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDgwMCwyMjUsIDEwMCwgMTc1KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCg4MDAsIDQwMCwgMTAwLCAxMjUpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7IFxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdKdW1wT2JzdGFjbGUgPSAoKSA9PiB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAyNTUsIDAsIDAuNSlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDUwMCwgMTAwLCAxMDAsIDMwMCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCg1MDAsIDQwMCwgMTAwLCAxMjUpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7IFxuICAgIH1cbiAgICBjb25zdCBkcmF3U2xpZGVPYnN0YWNsZSA9ICgpID0+IHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMjAwLCAxMDAsIDEwMCwgMzAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAyNTUsIDAuNSlcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDIwMCwgNDAwLCAxMDAsIDEyNSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4ICwgMCk7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCArIGNhbnZhcy53aWR0aCArIDQsIDApOyBcbiAgICAgICAgeCAtPSBzY3JvbGxTcGVlZDsgXG5cbiAgICAgICAgaWYgKHggPD0gLWNhbnZhcy53aWR0aCkgeCA9IDA7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgIGRyYXdEaXZlT2JzdGFjbGUoKTtcbiAgICAgICAgZHJhd0p1bXBPYnN0YWNsZSgpO1xuICAgICAgICBkcmF3U2xpZGVPYnN0YWNsZSgpO1xuICAgIH1cbiAgICBsb29wKCk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
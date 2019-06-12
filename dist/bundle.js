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

eval("const canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 1000; \ncanvas.height = 570; \n\nconst img = new Image();\n\nimg.src = \"./assets/background2.png\";\n\n\nwindow.onload = function() {\n    \n    let x = 0; \n        \n\n    const scrollSpeed = 3; \n    const drawDiveObstacle = () => {\n        ctx.beginPath();\n        ctx.fillStyle = \"red\";\n        ctx.fillRect(800,100, 100, 125);\n        ctx.fillStyle = \"rgba(255, 0, 0, 0.5)\";\n        ctx.fillRect(800,225, 100, 175);\n        ctx.fillStyle = \"red\";\n        ctx.fillRect(800, 400, 100, 125);\n        ctx.closePath(); \n    }\n\n    const drawJumpObstacle = () => {\n        ctx.beginPath();\n        ctx.fillStyle = \"rgba(0, 255, 0, 0.5)\";\n        ctx.fillRect(500, 100, 100, 300);\n        ctx.fillStyle = \"green\";\n        ctx.fillRect(500, 400, 100, 125);\n        ctx.closePath(); \n    }\n    const drawSlideObstacle = () => {\n        ctx.fillStyle = \"blue\";\n        ctx.fillRect(200, 100, 100, 300);\n        ctx.fillStyle = \"rgba(0, 0, 255, 0.5)\";\n        ctx.fillRect(200, 400, 100, 125);\n    }\n\n    function loop() {\n        ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0); \n        x -= scrollSpeed; \n\n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(loop);\n        drawDiveObstacle();\n        drawJumpObstacle();\n        drawSlideObstacle();\n    }\n    loop();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEO0FBQ0E7O0FBRUEsb0I7QUFDQSxvQjs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUEsYzs7O0FBR0EsMEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQztBQUNBLG9EO0FBQ0EseUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2xpYi9iaXRfbWF4aW1vLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jYW52YXMud2lkdGggPSAxMDAwOyBcbmNhbnZhcy5oZWlnaHQgPSA1NzA7IFxuXG5jb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuaW1nLnNyYyA9IFwiLi9hc3NldHMvYmFja2dyb3VuZDIucG5nXCI7XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGxldCB4ID0gMDsgXG4gICAgICAgIFxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSAzOyBcbiAgICBjb25zdCBkcmF3RGl2ZU9ic3RhY2xlID0gKCkgPT4ge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoODAwLDEwMCwgMTAwLCAxMjUpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMCwgMC41KVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoODAwLDIyNSwgMTAwLCAxNzUpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDgwMCwgNDAwLCAxMDAsIDEyNSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0p1bXBPYnN0YWNsZSA9ICgpID0+IHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDI1NSwgMCwgMC41KVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoNTAwLCAxMDAsIDEwMCwgMzAwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDUwMCwgNDAwLCAxMDAsIDEyNSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgfVxuICAgIGNvbnN0IGRyYXdTbGlkZU9ic3RhY2xlID0gKCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgyMDAsIDEwMCwgMTAwLCAzMDApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDI1NSwgMC41KVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMjAwLCA0MDAsIDEwMCwgMTI1KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHggLCAwKTsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4ICsgY2FudmFzLndpZHRoICsgNCwgMCk7IFxuICAgICAgICB4IC09IHNjcm9sbFNwZWVkOyBcblxuICAgICAgICBpZiAoeCA8PSAtY2FudmFzLndpZHRoKSB4ID0gMDtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgZHJhd0RpdmVPYnN0YWNsZSgpO1xuICAgICAgICBkcmF3SnVtcE9ic3RhY2xlKCk7XG4gICAgICAgIGRyYXdTbGlkZU9ic3RhY2xlKCk7XG4gICAgfVxuICAgIGxvb3AoKTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
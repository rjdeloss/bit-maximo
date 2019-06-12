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

eval("const canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\n\ncanvas.width = 900; \ncanvas.height = 600; \n\nconst img = new Image();\n\nimg.src = \"./assets/blue_background.jpg\";\n\nwindow.onload = function() {\n    let imgWidth = 0; \n\n    const scrollSpeed = 3; \n\n    function loop() {\n        ctx.drawImage(img,imgWidth, 0); \n        ctx.drawImage(img, imgWidth - canvas.width, 0); \n        imgWidth += scrollSpeed; \n\n        if (imgWidth == canvas.width) imgWidth = 0;\n\n        window.requestAnimationFrame(loop);\n    }\n    \n    loop();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEO0FBQ0E7O0FBRUEsbUI7QUFDQSxvQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCOztBQUVBLDBCOztBQUVBO0FBQ0EsdUM7QUFDQSx1RDtBQUNBLGdDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIuL2xpYi9iaXRfbWF4aW1vLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jYW52YXMud2lkdGggPSA5MDA7IFxuY2FudmFzLmhlaWdodCA9IDYwMDsgXG5cbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG5pbWcuc3JjID0gXCIuL2Fzc2V0cy9ibHVlX2JhY2tncm91bmQuanBnXCI7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaW1nV2lkdGggPSAwOyBcblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gMzsgXG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZyxpbWdXaWR0aCwgMCk7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgaW1nV2lkdGggLSBjYW52YXMud2lkdGgsIDApOyBcbiAgICAgICAgaW1nV2lkdGggKz0gc2Nyb2xsU3BlZWQ7IFxuXG4gICAgICAgIGlmIChpbWdXaWR0aCA9PSBjYW52YXMud2lkdGgpIGltZ1dpZHRoID0gMDtcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH1cbiAgICBcbiAgICBsb29wKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
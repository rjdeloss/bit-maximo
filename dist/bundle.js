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

eval("const canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\ncanvas.width = 640; \ncanvas.height = 400; \n\n// colors\nconst colorArray = ['#0095dd', '#dd1a00', '#63dd00']; \nlet currentColor = 0;\n\n//collision objects\nlet objectArray =[];\n\n// background image\nconst img = new Image();\nimg.src = \"./assets/background2.png\";\n\n//character \nlet character = {\n    height: 112, \n    width: 64,\n    x: 175,\n    y: 250,\n    jumping: false,\n    sliding: true, \n    diving: true, \n    y_velocity: 0, \n};\n\n//character controls\nconst input = {\n     A: false,\n     S: false,\n     D: false,\n     UP: false,\n     DOWN: false,\n     RIGHT: false,\n     M: false,\n     keyListener: (e) => {\n        e.preventDefault();\n\n         let key_state = (e.type == 'keydown') ? true:false;\n         const key = e.keyCode; \n         switch(key){\n             case 65: \n                 input.A = key_state; \n                 break;\n             case 83: \n                 input.S = key_state;\n                 break;\n             case 68: \n                 input.D = key_state;\n                 break;\n             case 38: \n                 input.UP = key_state;\n                 break;\n             case 39: \n                 input.RIGHT = key_state;\n                 break;\n             case 40: \n                 input.DOWN = key_state;\n                 break;\n             case 77: \n                 input.M = key_state;\n                 break;\n             default: return false; \n         }\n     }\n};\n\n//character actions\nconst checkInput = () => {\n    //character jumping\n    if (input.UP && character.jumping == false) {\n        character.y_velocity -= 20; \n        character.jumping = true;\n    }\n\n    //character sliding\n    if (input.DOWN && character.sliding == false) {\n        character.height -= 56; \n        character.width += 32;\n        character.sliding = true;\n    }\n\n    //color switching \n    if (input.A) {\n        input.A = false;\n        currentColor = 0;\n    } else if (input.S) {\n        input.S = false; \n        currentColor = 1; \n    } else if (input.D) {\n        input.D = false; \n        currentColor = 2;\n    }\n\n    //audio \n    if (input.M) {\n        input.M = false; \n        audio.paused ? audio.play() : audio.pause();\n    }\n\n    //physics behind jumping\n    character.y_velocity += 1.1; \n    character.y += character.y_velocity;\n\n    if (character.y > 250 - 16 - 32) {\n        character.jumping = false;\n        character.y = 250 - 16 - 32;\n        character.y_velocity = 0;\n    }\n\n    window.requestAnimationFrame(checkInput);\n}\n\ndrawCharacter = () => {\n    ctx.beginPath();\n    ctx.rect(character.x, character.y, character.width, character.height); \n    ctx.fill(); \n    ctx.fillStyle = '#0095dd';\n    ctx.closePath();\n}\n\ndrawFloor = () => {\n    ctx.strokeStyle = \"#202830\";\n    ctx.lineWidth = 4;\n    ctx.beginPath();\n    ctx.moveTo(0, 312);\n    ctx.lineTo(640, 312);\n    ctx.stroke();\n}\n\n\n\nwindow.addEventListener('keydown', input.keyListener);\nwindow.addEventListener('keyup', input.keyListener);\nwindow.onload = function() {\n    \n    let x = 0; \n        \n\n    const scrollSpeed = 3; \n    \n\n    function loop() {\n        ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0); \n        x -= scrollSpeed; \n\n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(loop);\n        drawCharacter();\n        drawFloor();\n    }\n    loop();\n    checkInput();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEO0FBQ0E7QUFDQSxtQjtBQUNBLG9COztBQUVBO0FBQ0EscUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQjtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCO0FBQ0EseUI7QUFDQSxLQUFLO0FBQ0wsd0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEU7QUFDQSxlO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsYzs7O0FBR0EsMEI7OztBQUdBO0FBQ0E7QUFDQSxrQztBQUNBLG9EO0FBQ0EseUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2xpYi9iaXRfbWF4aW1vLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzLndpZHRoID0gNjQwOyBcbmNhbnZhcy5oZWlnaHQgPSA0MDA7IFxuXG4vLyBjb2xvcnNcbmNvbnN0IGNvbG9yQXJyYXkgPSBbJyMwMDk1ZGQnLCAnI2RkMWEwMCcsICcjNjNkZDAwJ107IFxubGV0IGN1cnJlbnRDb2xvciA9IDA7XG5cbi8vY29sbGlzaW9uIG9iamVjdHNcbmxldCBvYmplY3RBcnJheSA9W107XG5cbi8vIGJhY2tncm91bmQgaW1hZ2VcbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9IFwiLi9hc3NldHMvYmFja2dyb3VuZDIucG5nXCI7XG5cbi8vY2hhcmFjdGVyIFxubGV0IGNoYXJhY3RlciA9IHtcbiAgICBoZWlnaHQ6IDExMiwgXG4gICAgd2lkdGg6IDY0LFxuICAgIHg6IDE3NSxcbiAgICB5OiAyNTAsXG4gICAganVtcGluZzogZmFsc2UsXG4gICAgc2xpZGluZzogdHJ1ZSwgXG4gICAgZGl2aW5nOiB0cnVlLCBcbiAgICB5X3ZlbG9jaXR5OiAwLCBcbn07XG5cbi8vY2hhcmFjdGVyIGNvbnRyb2xzXG5jb25zdCBpbnB1dCA9IHtcbiAgICAgQTogZmFsc2UsXG4gICAgIFM6IGZhbHNlLFxuICAgICBEOiBmYWxzZSxcbiAgICAgVVA6IGZhbHNlLFxuICAgICBET1dOOiBmYWxzZSxcbiAgICAgUklHSFQ6IGZhbHNlLFxuICAgICBNOiBmYWxzZSxcbiAgICAga2V5TGlzdGVuZXI6IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgbGV0IGtleV9zdGF0ZSA9IChlLnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWU6ZmFsc2U7XG4gICAgICAgICBjb25zdCBrZXkgPSBlLmtleUNvZGU7IFxuICAgICAgICAgc3dpdGNoKGtleSl7XG4gICAgICAgICAgICAgY2FzZSA2NTogXG4gICAgICAgICAgICAgICAgIGlucHV0LkEgPSBrZXlfc3RhdGU7IFxuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDgzOiBcbiAgICAgICAgICAgICAgICAgaW5wdXQuUyA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA2ODogXG4gICAgICAgICAgICAgICAgIGlucHV0LkQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgMzg6IFxuICAgICAgICAgICAgICAgICBpbnB1dC5VUCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSAzOTogXG4gICAgICAgICAgICAgICAgIGlucHV0LlJJR0hUID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDQwOiBcbiAgICAgICAgICAgICAgICAgaW5wdXQuRE9XTiA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA3NzogXG4gICAgICAgICAgICAgICAgIGlucHV0Lk0gPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTsgXG4gICAgICAgICB9XG4gICAgIH1cbn07XG5cbi8vY2hhcmFjdGVyIGFjdGlvbnNcbmNvbnN0IGNoZWNrSW5wdXQgPSAoKSA9PiB7XG4gICAgLy9jaGFyYWN0ZXIganVtcGluZ1xuICAgIGlmIChpbnB1dC5VUCAmJiBjaGFyYWN0ZXIuanVtcGluZyA9PSBmYWxzZSkge1xuICAgICAgICBjaGFyYWN0ZXIueV92ZWxvY2l0eSAtPSAyMDsgXG4gICAgICAgIGNoYXJhY3Rlci5qdW1waW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL2NoYXJhY3RlciBzbGlkaW5nXG4gICAgaWYgKGlucHV0LkRPV04gJiYgY2hhcmFjdGVyLnNsaWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgICAgY2hhcmFjdGVyLmhlaWdodCAtPSA1NjsgXG4gICAgICAgIGNoYXJhY3Rlci53aWR0aCArPSAzMjtcbiAgICAgICAgY2hhcmFjdGVyLnNsaWRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vY29sb3Igc3dpdGNoaW5nIFxuICAgIGlmIChpbnB1dC5BKSB7XG4gICAgICAgIGlucHV0LkEgPSBmYWxzZTtcbiAgICAgICAgY3VycmVudENvbG9yID0gMDtcbiAgICB9IGVsc2UgaWYgKGlucHV0LlMpIHtcbiAgICAgICAgaW5wdXQuUyA9IGZhbHNlOyBcbiAgICAgICAgY3VycmVudENvbG9yID0gMTsgXG4gICAgfSBlbHNlIGlmIChpbnB1dC5EKSB7XG4gICAgICAgIGlucHV0LkQgPSBmYWxzZTsgXG4gICAgICAgIGN1cnJlbnRDb2xvciA9IDI7XG4gICAgfVxuXG4gICAgLy9hdWRpbyBcbiAgICBpZiAoaW5wdXQuTSkge1xuICAgICAgICBpbnB1dC5NID0gZmFsc2U7IFxuICAgICAgICBhdWRpby5wYXVzZWQgPyBhdWRpby5wbGF5KCkgOiBhdWRpby5wYXVzZSgpO1xuICAgIH1cblxuICAgIC8vcGh5c2ljcyBiZWhpbmQganVtcGluZ1xuICAgIGNoYXJhY3Rlci55X3ZlbG9jaXR5ICs9IDEuMTsgXG4gICAgY2hhcmFjdGVyLnkgKz0gY2hhcmFjdGVyLnlfdmVsb2NpdHk7XG5cbiAgICBpZiAoY2hhcmFjdGVyLnkgPiAyNTAgLSAxNiAtIDMyKSB7XG4gICAgICAgIGNoYXJhY3Rlci5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIGNoYXJhY3Rlci55ID0gMjUwIC0gMTYgLSAzMjtcbiAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgPSAwO1xuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJbnB1dCk7XG59XG5cbmRyYXdDaGFyYWN0ZXIgPSAoKSA9PiB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KGNoYXJhY3Rlci54LCBjaGFyYWN0ZXIueSwgY2hhcmFjdGVyLndpZHRoLCBjaGFyYWN0ZXIuaGVpZ2h0KTsgXG4gICAgY3R4LmZpbGwoKTsgXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjMDA5NWRkJztcbiAgICBjdHguY2xvc2VQYXRoKCk7XG59XG5cbmRyYXdGbG9vciA9ICgpID0+IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMyMDI4MzBcIjtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAzMTIpO1xuICAgIGN0eC5saW5lVG8oNjQwLCAzMTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5wdXQua2V5TGlzdGVuZXIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaW5wdXQua2V5TGlzdGVuZXIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGxldCB4ID0gMDsgXG4gICAgICAgIFxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSAzOyBcbiAgICBcblxuICAgIGZ1bmN0aW9uIGxvb3AoKSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCAsIDApOyBcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHggKyBjYW52YXMud2lkdGggKyA0LCAwKTsgXG4gICAgICAgIHggLT0gc2Nyb2xsU3BlZWQ7IFxuXG4gICAgICAgIGlmICh4IDw9IC1jYW52YXMud2lkdGgpIHggPSAwO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICBkcmF3Q2hhcmFjdGVyKCk7XG4gICAgICAgIGRyYXdGbG9vcigpO1xuICAgIH1cbiAgICBsb29wKCk7XG4gICAgY2hlY2tJbnB1dCgpO1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
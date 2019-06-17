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

eval("const canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\ncanvas.width = 640; \ncanvas.height = 400; \n\n// colors\nconst colorArray = ['#0095dd', '#dd1a00', '#63dd00']; \nlet currentColor = 0;\n\n//collision objects\nlet objectArray =[];\n\n// background image\nconst img = new Image();\nimg.src = \"./assets/background2.png\";\n\n\n//character \nlet character = {\n    height: 112, \n    width: 64,\n    x: 175,\n    y: 250,\n    jumping: false,\n    sliding: true, \n    diving: true, \n    y_velocity: 0, \n};\n\n//character controls\nconst input = {\n     A: false,\n     S: false,\n     D: false,\n     UP: false,\n     DOWN: false,\n     RIGHT: false,\n     M: false,\n     keyListener: (e) => {\n        e.preventDefault();\n        \n        if (!audioActive) {\n             audioActive = true;\n             audio.play();\n        }\n\n         let key_state = (e.type == 'keydown') ? true:false;\n         const key = e.keyCode; \n         switch(key){\n             case 65: \n                 input.A = key_state; \n                 break;\n             case 83: \n                 input.S = key_state;\n                 break;\n             case 68: \n                 input.D = key_state;\n                 break;\n             case 38: \n                 input.UP = key_state;\n                 break;\n             case 39: \n                 input.RIGHT = key_state;\n                 break;\n             case 40: \n                 input.DOWN = key_state;\n                 break;\n             case 77: \n                 input.M = key_state;\n                 break;\n             default: return false; \n         }\n     }\n};\n\n//character actions\nconst checkInput = () => {\n    //character jumping\n    if (input.UP && character.jumping == false) {\n        character.y_velocity -= 20; \n        character.jumping = true;\n    }\n\n    //character sliding\n    if (input.DOWN && character.sliding == false) {\n        character.height -= 56; \n        character.width += 32;\n        character.sliding = true;\n    }\n\n    //color switching \n    if (input.A) {\n        input.A = false;\n        currentColor = 0;\n    } else if (input.S) {\n        input.S = false; \n        currentColor = 1; \n    } else if (input.D) {\n        input.D = false; \n        currentColor = 2;\n    }\n\n    //audio \n    if (input.M) {\n        input.M = false; \n        audio.paused ? audio.play() : audio.pause();\n    }\n\n    //physics behind jumping\n    character.y_velocity += 1.1; \n    character.y += character.y_velocity;\n\n    if (character.y > 250 - 16 - 32) {\n        character.jumping = false;\n        character.y = 250 - 16 - 32;\n        character.y_velocity = 0;\n    }\n\n    window.requestAnimationFrame(checkInput);\n}\n\ndrawCharacter = () => {\n    ctx.beginPath();\n    ctx.rect(character.x, character.y, character.width, character.height); \n    ctx.fill(); \n    ctx.fillStyle = '#0095dd';\n    ctx.closePath();\n}\n\ndrawFloor = () => {\n    ctx.strokeStyle = \"#202830\";\n    ctx.lineWidth = 4;\n    ctx.beginPath();\n    ctx.moveTo(0, 312);\n    ctx.lineTo(640, 312);\n    ctx.stroke();\n}\n\n\n\nwindow.addEventListener('keydown', input.keyListener);\nwindow.addEventListener('keyup', input.keyListener);\nwindow.onload = function() {\n    \n    let x = 0; \n        \n\n    const scrollSpeed = 3; \n    \n\n    function loop() {\n        ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0); \n        x -= scrollSpeed; \n\n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(loop);\n        drawCharacter();\n        drawFloor();\n    }\n    loop();\n    checkInput();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEO0FBQ0E7QUFDQSxtQjtBQUNBLG9COztBQUVBO0FBQ0EscUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0I7QUFDQTtBQUNBO0FBQ0EscUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QjtBQUNBLHlCO0FBQ0EsS0FBSztBQUNMLHdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFO0FBQ0EsZTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBLGM7OztBQUdBLDBCOzs7QUFHQTtBQUNBO0FBQ0Esa0M7QUFDQSxvRDtBQUNBLHlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9saWIvYml0X21heGltby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDY0MDsgXG5jYW52YXMuaGVpZ2h0ID0gNDAwOyBcblxuLy8gY29sb3JzXG5jb25zdCBjb2xvckFycmF5ID0gWycjMDA5NWRkJywgJyNkZDFhMDAnLCAnIzYzZGQwMCddOyBcbmxldCBjdXJyZW50Q29sb3IgPSAwO1xuXG4vL2NvbGxpc2lvbiBvYmplY3RzXG5sZXQgb2JqZWN0QXJyYXkgPVtdO1xuXG4vLyBiYWNrZ3JvdW5kIGltYWdlXG5jb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbmltZy5zcmMgPSBcIi4vYXNzZXRzL2JhY2tncm91bmQyLnBuZ1wiO1xuXG5cbi8vY2hhcmFjdGVyIFxubGV0IGNoYXJhY3RlciA9IHtcbiAgICBoZWlnaHQ6IDExMiwgXG4gICAgd2lkdGg6IDY0LFxuICAgIHg6IDE3NSxcbiAgICB5OiAyNTAsXG4gICAganVtcGluZzogZmFsc2UsXG4gICAgc2xpZGluZzogdHJ1ZSwgXG4gICAgZGl2aW5nOiB0cnVlLCBcbiAgICB5X3ZlbG9jaXR5OiAwLCBcbn07XG5cbi8vY2hhcmFjdGVyIGNvbnRyb2xzXG5jb25zdCBpbnB1dCA9IHtcbiAgICAgQTogZmFsc2UsXG4gICAgIFM6IGZhbHNlLFxuICAgICBEOiBmYWxzZSxcbiAgICAgVVA6IGZhbHNlLFxuICAgICBET1dOOiBmYWxzZSxcbiAgICAgUklHSFQ6IGZhbHNlLFxuICAgICBNOiBmYWxzZSxcbiAgICAga2V5TGlzdGVuZXI6IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghYXVkaW9BY3RpdmUpIHtcbiAgICAgICAgICAgICBhdWRpb0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgIGxldCBrZXlfc3RhdGUgPSAoZS50eXBlID09ICdrZXlkb3duJykgPyB0cnVlOmZhbHNlO1xuICAgICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlOyBcbiAgICAgICAgIHN3aXRjaChrZXkpe1xuICAgICAgICAgICAgIGNhc2UgNjU6IFxuICAgICAgICAgICAgICAgICBpbnB1dC5BID0ga2V5X3N0YXRlOyBcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA4MzogXG4gICAgICAgICAgICAgICAgIGlucHV0LlMgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgNjg6IFxuICAgICAgICAgICAgICAgICBpbnB1dC5EID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICAgICAgaW5wdXQuVVAgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgMzk6IFxuICAgICAgICAgICAgICAgICBpbnB1dC5SSUdIVCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA0MDogXG4gICAgICAgICAgICAgICAgIGlucHV0LkRPV04gPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgNzc6IFxuICAgICAgICAgICAgICAgICBpbnB1dC5NID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7IFxuICAgICAgICAgfVxuICAgICB9XG59O1xuXG4vL2NoYXJhY3RlciBhY3Rpb25zXG5jb25zdCBjaGVja0lucHV0ID0gKCkgPT4ge1xuICAgIC8vY2hhcmFjdGVyIGp1bXBpbmdcbiAgICBpZiAoaW5wdXQuVVAgJiYgY2hhcmFjdGVyLmp1bXBpbmcgPT0gZmFsc2UpIHtcbiAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgLT0gMjA7IFxuICAgICAgICBjaGFyYWN0ZXIuanVtcGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy9jaGFyYWN0ZXIgc2xpZGluZ1xuICAgIGlmIChpbnB1dC5ET1dOICYmIGNoYXJhY3Rlci5zbGlkaW5nID09IGZhbHNlKSB7XG4gICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgLT0gNTY7IFxuICAgICAgICBjaGFyYWN0ZXIud2lkdGggKz0gMzI7XG4gICAgICAgIGNoYXJhY3Rlci5zbGlkaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL2NvbG9yIHN3aXRjaGluZyBcbiAgICBpZiAoaW5wdXQuQSkge1xuICAgICAgICBpbnB1dC5BID0gZmFsc2U7XG4gICAgICAgIGN1cnJlbnRDb2xvciA9IDA7XG4gICAgfSBlbHNlIGlmIChpbnB1dC5TKSB7XG4gICAgICAgIGlucHV0LlMgPSBmYWxzZTsgXG4gICAgICAgIGN1cnJlbnRDb2xvciA9IDE7IFxuICAgIH0gZWxzZSBpZiAoaW5wdXQuRCkge1xuICAgICAgICBpbnB1dC5EID0gZmFsc2U7IFxuICAgICAgICBjdXJyZW50Q29sb3IgPSAyO1xuICAgIH1cblxuICAgIC8vYXVkaW8gXG4gICAgaWYgKGlucHV0Lk0pIHtcbiAgICAgICAgaW5wdXQuTSA9IGZhbHNlOyBcbiAgICAgICAgYXVkaW8ucGF1c2VkID8gYXVkaW8ucGxheSgpIDogYXVkaW8ucGF1c2UoKTtcbiAgICB9XG5cbiAgICAvL3BoeXNpY3MgYmVoaW5kIGp1bXBpbmdcbiAgICBjaGFyYWN0ZXIueV92ZWxvY2l0eSArPSAxLjE7IFxuICAgIGNoYXJhY3Rlci55ICs9IGNoYXJhY3Rlci55X3ZlbG9jaXR5O1xuXG4gICAgaWYgKGNoYXJhY3Rlci55ID4gMjUwIC0gMTYgLSAzMikge1xuICAgICAgICBjaGFyYWN0ZXIuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICBjaGFyYWN0ZXIueSA9IDI1MCAtIDE2IC0gMzI7XG4gICAgICAgIGNoYXJhY3Rlci55X3ZlbG9jaXR5ID0gMDtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSW5wdXQpO1xufVxuXG5kcmF3Q2hhcmFjdGVyID0gKCkgPT4ge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChjaGFyYWN0ZXIueCwgY2hhcmFjdGVyLnksIGNoYXJhY3Rlci53aWR0aCwgY2hhcmFjdGVyLmhlaWdodCk7IFxuICAgIGN0eC5maWxsKCk7IFxuICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwOTVkZCc7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG5kcmF3Rmxvb3IgPSAoKSA9PiB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMjAyODMwXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMzEyKTtcbiAgICBjdHgubGluZVRvKDY0MCwgMzEyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGlucHV0LmtleUxpc3RlbmVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGlucHV0LmtleUxpc3RlbmVyKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBsZXQgeCA9IDA7IFxuICAgICAgICBcblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gMzsgXG4gICAgXG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHggLCAwKTsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4ICsgY2FudmFzLndpZHRoICsgNCwgMCk7IFxuICAgICAgICB4IC09IHNjcm9sbFNwZWVkOyBcblxuICAgICAgICBpZiAoeCA8PSAtY2FudmFzLndpZHRoKSB4ID0gMDtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgZHJhd0NoYXJhY3RlcigpO1xuICAgICAgICBkcmF3Rmxvb3IoKTtcbiAgICB9XG4gICAgbG9vcCgpO1xuICAgIGNoZWNrSW5wdXQoKTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
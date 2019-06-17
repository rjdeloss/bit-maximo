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

eval("//audio\nconst audio = document.getElementById('audio');\nlet audioActive = false;\n\n//canvas\nconst canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\ncanvas.width = 640; \ncanvas.height = 400; \n\n// background image\nconst img = new Image();\nimg.src = \"./assets/background2.png\";\n\n// colors\nconst colorArray = ['#0095dd', '#dd1a00', '#63dd00']; \nlet currentColor = 0;\nlet color;\n\n//collision objects\nclass Collection {\n    constructor(object) {\n        this.object = object; \n        this.objectArray = [];\n        this.collection =[];\n    }\n\n    // getObject = (parameters) => {\n    //     if (this.collection.length != 0) {\n    //         let object = this.collection.pop(); \n    //         object.reset(parameters); \n    //         this.objectArray.push(object); \n    //     } else {\n    //         this.objects.push(new this.object(parameters.x, parameters.y));\n    //     }\n    // }\n}\n\n\n\n\n\n//character \nlet character = {\n    height: 112, \n    width: 64,\n    x: 175,\n    y: 300,\n    jumping: false,\n    sliding: false, \n    diving: false, \n    y_velocity: 0, \n};\n\n\n//character controls\nconst input = {\n     A: false,\n     S: false,\n     D: false,\n     UP: false,\n     DOWN: false,\n     RIGHT: false,\n     M: false,\n     keyListener: (e) => {\n        // e.preventDefault();\n\n        //  if (!audioActive) {\n        //      audioActive = true;\n        //      audio.play();\n        //  }\n         let key_state = (e.type == 'keydown') ? true:false;\n         const key = e.keyCode; \n         switch(key){\n             case 65: \n                 input.A = key_state; \n                 break;\n             case 83: \n                 input.S = key_state;\n                 break;\n             case 68: \n                 input.D = key_state;\n                 break;\n             case 38: \n                 input.UP = key_state;\n                 break;\n             case 39: \n                 input.RIGHT = key_state;\n                 break;\n             case 40: \n                 input.DOWN = key_state;\n                 break;\n             case 77: \n                 input.M = key_state;\n                 break;\n             default: return false; \n         }\n     }\n};\n\n//character actions\nconst checkInput = () => {\n    //character jumping\n    if (input.UP && character.jumping == false) {\n        character.y_velocity -= 20; \n        character.jumping = true;\n    }\n\n    //character sliding\n    if (input.DOWN && character.sliding == false) {\n        character.height -= 56; \n        character.width += 32;\n        character.sliding = true;\n    }\n\n    //character diving\n    if (input.RIGHT && character.diving == false) {\n        character.height -= 56;\n        character.width += 32;\n        character.sliding = true;\n    }\n\n    //color switching \n    if (input.A) {\n        input.A = false;\n        currentColor = 0;\n        color = colorArray[currentColor];\n    } else if (input.S) {\n        input.S = false; \n        currentColor = 1;\n        color = colorArray[currentColor];\n    } else if (input.D) {\n        input.D = false; \n        currentColor = 2;\n        color = colorArray[currentColor];\n    }\n\n    //audio \n    if (input.M) {\n        input.M = false; \n        audio.paused ? audio.play() : audio.pause();\n    }\n\n    //physics behind jumping\n    character.y_velocity += 1.1; \n    character.y += character.y_velocity;\n\n    if (character.y > 300 - 16 - 32) {\n        character.jumping = false;\n        character.y = 300 - 16 - 32;\n        character.y_velocity = 0;\n    }\n\n    window.requestAnimationFrame(checkInput);\n}\n\n\ndrawCharacter = (color = colorArray[currentColor]) => {\n        debugger\n        ctx.clearRect(character.x, character.y, character.width, character.height);\n        ctx.beginPath();\n        ctx.rect(character.x, character.y, character.width, character.height);\n        ctx.fill();\n        ctx.fillStyle = color;\n        ctx.closePath();  \n}\n\n\ndrawFloor = () => {\n    ctx.strokeStyle = \"#202830\";\n    ctx.lineWidth = 4;\n    ctx.beginPath();\n    ctx.moveTo(0, 365);\n    ctx.lineTo(640, 365);\n    ctx.stroke();\n}\n\n\n\nwindow.addEventListener('keydown', input.keyListener);\nwindow.addEventListener('keyup', input.keyListener);\nwindow.onload = function() {\n    \n    let x = 0; \n        \n\n    const scrollSpeed = 3; \n    \n\n    function loop() {\n        ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0); \n        x -= scrollSpeed; \n\n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(loop);\n        drawCharacter();\n        drawFloor();\n    }\n    loop();\n    checkInput();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEO0FBQ0E7QUFDQSxtQjtBQUNBLG9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0Q7QUFDQSx3QztBQUNBLDZDO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQjtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQSxjOzs7QUFHQSwwQjs7O0FBR0E7QUFDQTtBQUNBLGtDO0FBQ0Esb0Q7QUFDQSx5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbGliL2JpdF9tYXhpbW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2F1ZGlvXG5jb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpbycpO1xubGV0IGF1ZGlvQWN0aXZlID0gZmFsc2U7XG5cbi8vY2FudmFzXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7IFxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA2NDA7IFxuY2FudmFzLmhlaWdodCA9IDQwMDsgXG5cbi8vIGJhY2tncm91bmQgaW1hZ2VcbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9IFwiLi9hc3NldHMvYmFja2dyb3VuZDIucG5nXCI7XG5cbi8vIGNvbG9yc1xuY29uc3QgY29sb3JBcnJheSA9IFsnIzAwOTVkZCcsICcjZGQxYTAwJywgJyM2M2RkMDAnXTsgXG5sZXQgY3VycmVudENvbG9yID0gMDtcbmxldCBjb2xvcjtcblxuLy9jb2xsaXNpb24gb2JqZWN0c1xuY2xhc3MgQ29sbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0OyBcbiAgICAgICAgdGhpcy5vYmplY3RBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPVtdO1xuICAgIH1cblxuICAgIC8vIGdldE9iamVjdCA9IChwYXJhbWV0ZXJzKSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoICE9IDApIHtcbiAgICAvLyAgICAgICAgIGxldCBvYmplY3QgPSB0aGlzLmNvbGxlY3Rpb24ucG9wKCk7IFxuICAgIC8vICAgICAgICAgb2JqZWN0LnJlc2V0KHBhcmFtZXRlcnMpOyBcbiAgICAvLyAgICAgICAgIHRoaXMub2JqZWN0QXJyYXkucHVzaChvYmplY3QpOyBcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyB0aGlzLm9iamVjdChwYXJhbWV0ZXJzLngsIHBhcmFtZXRlcnMueSkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG5cblxuXG5cbi8vY2hhcmFjdGVyIFxubGV0IGNoYXJhY3RlciA9IHtcbiAgICBoZWlnaHQ6IDExMiwgXG4gICAgd2lkdGg6IDY0LFxuICAgIHg6IDE3NSxcbiAgICB5OiAzMDAsXG4gICAganVtcGluZzogZmFsc2UsXG4gICAgc2xpZGluZzogZmFsc2UsIFxuICAgIGRpdmluZzogZmFsc2UsIFxuICAgIHlfdmVsb2NpdHk6IDAsIFxufTtcblxuXG4vL2NoYXJhY3RlciBjb250cm9sc1xuY29uc3QgaW5wdXQgPSB7XG4gICAgIEE6IGZhbHNlLFxuICAgICBTOiBmYWxzZSxcbiAgICAgRDogZmFsc2UsXG4gICAgIFVQOiBmYWxzZSxcbiAgICAgRE9XTjogZmFsc2UsXG4gICAgIFJJR0hUOiBmYWxzZSxcbiAgICAgTTogZmFsc2UsXG4gICAgIGtleUxpc3RlbmVyOiAoZSkgPT4ge1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gIGlmICghYXVkaW9BY3RpdmUpIHtcbiAgICAgICAgLy8gICAgICBhdWRpb0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAvLyAgfVxuICAgICAgICAgbGV0IGtleV9zdGF0ZSA9IChlLnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWU6ZmFsc2U7XG4gICAgICAgICBjb25zdCBrZXkgPSBlLmtleUNvZGU7IFxuICAgICAgICAgc3dpdGNoKGtleSl7XG4gICAgICAgICAgICAgY2FzZSA2NTogXG4gICAgICAgICAgICAgICAgIGlucHV0LkEgPSBrZXlfc3RhdGU7IFxuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDgzOiBcbiAgICAgICAgICAgICAgICAgaW5wdXQuUyA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA2ODogXG4gICAgICAgICAgICAgICAgIGlucHV0LkQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgMzg6IFxuICAgICAgICAgICAgICAgICBpbnB1dC5VUCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSAzOTogXG4gICAgICAgICAgICAgICAgIGlucHV0LlJJR0hUID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDQwOiBcbiAgICAgICAgICAgICAgICAgaW5wdXQuRE9XTiA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA3NzogXG4gICAgICAgICAgICAgICAgIGlucHV0Lk0gPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTsgXG4gICAgICAgICB9XG4gICAgIH1cbn07XG5cbi8vY2hhcmFjdGVyIGFjdGlvbnNcbmNvbnN0IGNoZWNrSW5wdXQgPSAoKSA9PiB7XG4gICAgLy9jaGFyYWN0ZXIganVtcGluZ1xuICAgIGlmIChpbnB1dC5VUCAmJiBjaGFyYWN0ZXIuanVtcGluZyA9PSBmYWxzZSkge1xuICAgICAgICBjaGFyYWN0ZXIueV92ZWxvY2l0eSAtPSAyMDsgXG4gICAgICAgIGNoYXJhY3Rlci5qdW1waW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL2NoYXJhY3RlciBzbGlkaW5nXG4gICAgaWYgKGlucHV0LkRPV04gJiYgY2hhcmFjdGVyLnNsaWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgICAgY2hhcmFjdGVyLmhlaWdodCAtPSA1NjsgXG4gICAgICAgIGNoYXJhY3Rlci53aWR0aCArPSAzMjtcbiAgICAgICAgY2hhcmFjdGVyLnNsaWRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vY2hhcmFjdGVyIGRpdmluZ1xuICAgIGlmIChpbnB1dC5SSUdIVCAmJiBjaGFyYWN0ZXIuZGl2aW5nID09IGZhbHNlKSB7XG4gICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgLT0gNTY7XG4gICAgICAgIGNoYXJhY3Rlci53aWR0aCArPSAzMjtcbiAgICAgICAgY2hhcmFjdGVyLnNsaWRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vY29sb3Igc3dpdGNoaW5nIFxuICAgIGlmIChpbnB1dC5BKSB7XG4gICAgICAgIGlucHV0LkEgPSBmYWxzZTtcbiAgICAgICAgY3VycmVudENvbG9yID0gMDtcbiAgICAgICAgY29sb3IgPSBjb2xvckFycmF5W2N1cnJlbnRDb2xvcl07XG4gICAgfSBlbHNlIGlmIChpbnB1dC5TKSB7XG4gICAgICAgIGlucHV0LlMgPSBmYWxzZTsgXG4gICAgICAgIGN1cnJlbnRDb2xvciA9IDE7XG4gICAgICAgIGNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQuRCkge1xuICAgICAgICBpbnB1dC5EID0gZmFsc2U7IFxuICAgICAgICBjdXJyZW50Q29sb3IgPSAyO1xuICAgICAgICBjb2xvciA9IGNvbG9yQXJyYXlbY3VycmVudENvbG9yXTtcbiAgICB9XG5cbiAgICAvL2F1ZGlvIFxuICAgIGlmIChpbnB1dC5NKSB7XG4gICAgICAgIGlucHV0Lk0gPSBmYWxzZTsgXG4gICAgICAgIGF1ZGlvLnBhdXNlZCA/IGF1ZGlvLnBsYXkoKSA6IGF1ZGlvLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgLy9waHlzaWNzIGJlaGluZCBqdW1waW5nXG4gICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgKz0gMS4xOyBcbiAgICBjaGFyYWN0ZXIueSArPSBjaGFyYWN0ZXIueV92ZWxvY2l0eTtcblxuICAgIGlmIChjaGFyYWN0ZXIueSA+IDMwMCAtIDE2IC0gMzIpIHtcbiAgICAgICAgY2hhcmFjdGVyLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgY2hhcmFjdGVyLnkgPSAzMDAgLSAxNiAtIDMyO1xuICAgICAgICBjaGFyYWN0ZXIueV92ZWxvY2l0eSA9IDA7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja0lucHV0KTtcbn1cblxuXG5kcmF3Q2hhcmFjdGVyID0gKGNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdKSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoY2hhcmFjdGVyLngsIGNoYXJhY3Rlci55LCBjaGFyYWN0ZXIud2lkdGgsIGNoYXJhY3Rlci5oZWlnaHQpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KGNoYXJhY3Rlci54LCBjaGFyYWN0ZXIueSwgY2hhcmFjdGVyLndpZHRoLCBjaGFyYWN0ZXIuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7ICBcbn1cblxuXG5kcmF3Rmxvb3IgPSAoKSA9PiB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMjAyODMwXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgMzY1KTtcbiAgICBjdHgubGluZVRvKDY0MCwgMzY1KTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGlucHV0LmtleUxpc3RlbmVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGlucHV0LmtleUxpc3RlbmVyKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBsZXQgeCA9IDA7IFxuICAgICAgICBcblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gMzsgXG4gICAgXG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHggLCAwKTsgXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4ICsgY2FudmFzLndpZHRoICsgNCwgMCk7IFxuICAgICAgICB4IC09IHNjcm9sbFNwZWVkOyBcblxuICAgICAgICBpZiAoeCA8PSAtY2FudmFzLndpZHRoKSB4ID0gMDtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgZHJhd0NoYXJhY3RlcigpO1xuICAgICAgICBkcmF3Rmxvb3IoKTtcbiAgICB9XG4gICAgbG9vcCgpO1xuICAgIGNoZWNrSW5wdXQoKTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
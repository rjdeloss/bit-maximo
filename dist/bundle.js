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

eval("//audio\nconst audio = document.getElementById('audio');\nlet audioActive = false;\n\n//canvas\nconst canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\ncanvas.width = 640; \ncanvas.height = 400; \n\n// background image\nconst img = new Image();\nimg.src = \"./assets/background2.png\";\n\n// colors\nconst colorArray = ['#0095dd', '#dd1a00', '#63dd00']; \nlet currentColor = 0;\nlet color;\n\n//collision objects\nclass Collection {\n    constructor(object) {\n        this.object = object; \n        this.objectArray = [];\n        this.collection =[];\n    }\n\n    // getObject = (parameters) => {\n    //     if (this.collection.length != 0) {\n    //         let object = this.collection.pop(); \n    //         object.reset(parameters); \n    //         this.objectArray.push(object); \n    //     } else {\n    //         this.objects.push(new this.object(parameters.x, parameters.y));\n    //     }\n    // }\n}\n\n\n\n\n\n//character \nlet character = {\n    height: 112, \n    width: 64,\n    x: 175,\n    y: 300,\n    jumping: false,\n    sliding: false, \n    diving: false, \n    y_velocity: 0, \n};\n\n\n//character controls\nconst input = {\n     A: false,\n     S: false,\n     D: false,\n     UP: false,\n     DOWN: false,\n     RIGHT: false,\n     M: false,\n     keyListener: (e) => {\n        // e.preventDefault();\n\n        //  if (!audioActive) {\n        //      audioActive = true;\n        //      audio.play();\n        //  }\n         let key_state = (e.type == 'keydown') ? true : false;\n         const key = e.keyCode; \n         switch(key){\n             case 65: \n             input.A = key_state; \n             break;\n             case 83: \n             input.S = key_state;\n             break;\n             case 68: \n             input.D = key_state;\n             break;\n             case 38: \n             input.UP = key_state;\n             break;\n             case 39: \n             input.RIGHT = key_state;\n             break;\n             case 40: \n             input.DOWN = key_state;\n             break;\n             case 77: \n             input.M = key_state;\n             break;\n             default: return false; \n            }\n        }\n    };\n    \n    //character actions\n    const checkInput = () => {\n        //character jumping\n        if (input.UP && character.jumping == false) {\n            character.y_velocity -= 20; \n            character.jumping = true;\n        } else if (!input.UP && character.jumping == true) {\n            character.jumping = false;\n        }\n        \n        //character sliding\n        if (input.DOWN && character.sliding == false) {\n            character.height = 64; \n            character.width = 112;\n            character.sliding = true;\n        } else if (!input.DOWN && character.sliding == true) {\n            character.height = 112; \n            character.width = 64;\n            character.sliding = false;\n        }\n        \n        //character diving\n        if (input.RIGHT && character.diving == false) {\n            character.height = 64;\n            character.width = 112;\n            character.diving = true;\n        } else if (!input.RIGHT && character.diving == true) {\n            character.height = 112; \n            character.width = 64;\n            character.diving = false;\n        }\n        \n        //color switching \n        if (input.A) {\n            input.A = false;\n            currentColor = 0;\n            color = colorArray[currentColor];\n        } else if (input.S) {\n            input.S = false; \n            currentColor = 1;\n            color = colorArray[currentColor];\n        } else if (input.D) {\n            input.D = false; \n            currentColor = 2;\n            color = colorArray[currentColor];\n        }\n        \n        //audio \n        if (input.M) {\n            input.M = false; \n            audio.paused ? audio.play() : audio.pause();\n        }\n        \n        //physics behind jumping\n        character.y_velocity += 1.1; \n        character.y += character.y_velocity;\n        \n        if (character.y > 300 - 16 - 32) {\n            character.jumping = false;\n            character.y = 300 - 16 - 32;\n            character.y_velocity = 0;\n            if (character.sliding) {\n                character.y = 300;\n            } else if (character.diving) {\n                character.y = 250;\n            }\n        }\n        \n        \n        window.addEventListener('keydown', input.keyListener);\n        window.addEventListener('keyup', input.keyListener);\n        window.requestAnimationFrame(checkInput);\n    }\n    \n    \n    drawCharacter = (x= character.x, y=character.y, width= character.width, height = character.height, color = colorArray[currentColor]) => {\n        ctx.clearRect(x, y, width, height);\n        ctx.beginPath();\n        ctx.rect(x, y, width, height);\n        ctx.fill();\n        ctx.strokeStyle = '#ffffff';\n        ctx.stroke()\n        ctx.fillStyle = color;\n        ctx.closePath();  \n}\n\n\ndrawFloor = () => {\n    ctx.strokeStyle = \"#202830\";\n    ctx.lineWidth = 4;\n    ctx.beginPath();\n    ctx.moveTo(0, 365);\n    ctx.lineTo(640, 365);\n    ctx.stroke();\n}\n\n\n\n\nwindow.onload = function() {\n    \n    let x = 0; \n        \n\n    const scrollSpeed = 3; \n    \n\n    function loop() {\n        ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0); \n        x -= scrollSpeed; \n\n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(loop);\n        drawCharacter();\n        drawFloor();\n    }\n    loop();\n    checkInput();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEO0FBQ0E7QUFDQSxtQjtBQUNBLG9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0Q7QUFDQSx3QztBQUNBLDZDO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQjtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQSxjOzs7QUFHQSwwQjs7O0FBR0E7QUFDQTtBQUNBLGtDO0FBQ0Esb0Q7QUFDQSx5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbGliL2JpdF9tYXhpbW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2F1ZGlvXG5jb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpbycpO1xubGV0IGF1ZGlvQWN0aXZlID0gZmFsc2U7XG5cbi8vY2FudmFzXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7IFxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA2NDA7IFxuY2FudmFzLmhlaWdodCA9IDQwMDsgXG5cbi8vIGJhY2tncm91bmQgaW1hZ2VcbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9IFwiLi9hc3NldHMvYmFja2dyb3VuZDIucG5nXCI7XG5cbi8vIGNvbG9yc1xuY29uc3QgY29sb3JBcnJheSA9IFsnIzAwOTVkZCcsICcjZGQxYTAwJywgJyM2M2RkMDAnXTsgXG5sZXQgY3VycmVudENvbG9yID0gMDtcbmxldCBjb2xvcjtcblxuLy9jb2xsaXNpb24gb2JqZWN0c1xuY2xhc3MgQ29sbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0OyBcbiAgICAgICAgdGhpcy5vYmplY3RBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPVtdO1xuICAgIH1cblxuICAgIC8vIGdldE9iamVjdCA9IChwYXJhbWV0ZXJzKSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoICE9IDApIHtcbiAgICAvLyAgICAgICAgIGxldCBvYmplY3QgPSB0aGlzLmNvbGxlY3Rpb24ucG9wKCk7IFxuICAgIC8vICAgICAgICAgb2JqZWN0LnJlc2V0KHBhcmFtZXRlcnMpOyBcbiAgICAvLyAgICAgICAgIHRoaXMub2JqZWN0QXJyYXkucHVzaChvYmplY3QpOyBcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG5ldyB0aGlzLm9iamVjdChwYXJhbWV0ZXJzLngsIHBhcmFtZXRlcnMueSkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG5cblxuXG5cbi8vY2hhcmFjdGVyIFxubGV0IGNoYXJhY3RlciA9IHtcbiAgICBoZWlnaHQ6IDExMiwgXG4gICAgd2lkdGg6IDY0LFxuICAgIHg6IDE3NSxcbiAgICB5OiAzMDAsXG4gICAganVtcGluZzogZmFsc2UsXG4gICAgc2xpZGluZzogZmFsc2UsIFxuICAgIGRpdmluZzogZmFsc2UsIFxuICAgIHlfdmVsb2NpdHk6IDAsIFxufTtcblxuXG4vL2NoYXJhY3RlciBjb250cm9sc1xuY29uc3QgaW5wdXQgPSB7XG4gICAgIEE6IGZhbHNlLFxuICAgICBTOiBmYWxzZSxcbiAgICAgRDogZmFsc2UsXG4gICAgIFVQOiBmYWxzZSxcbiAgICAgRE9XTjogZmFsc2UsXG4gICAgIFJJR0hUOiBmYWxzZSxcbiAgICAgTTogZmFsc2UsXG4gICAgIGtleUxpc3RlbmVyOiAoZSkgPT4ge1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gIGlmICghYXVkaW9BY3RpdmUpIHtcbiAgICAgICAgLy8gICAgICBhdWRpb0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAvLyAgfVxuICAgICAgICAgbGV0IGtleV9zdGF0ZSA9IChlLnR5cGUgPT0gJ2tleWRvd24nKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgIGNvbnN0IGtleSA9IGUua2V5Q29kZTsgXG4gICAgICAgICBzd2l0Y2goa2V5KXtcbiAgICAgICAgICAgICBjYXNlIDY1OiBcbiAgICAgICAgICAgICBpbnB1dC5BID0ga2V5X3N0YXRlOyBcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDgzOiBcbiAgICAgICAgICAgICBpbnB1dC5TID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgNjg6IFxuICAgICAgICAgICAgIGlucHV0LkQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSAzODogXG4gICAgICAgICAgICAgaW5wdXQuVVAgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSAzOTogXG4gICAgICAgICAgICAgaW5wdXQuUklHSFQgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA0MDogXG4gICAgICAgICAgICAgaW5wdXQuRE9XTiA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDc3OiBcbiAgICAgICAgICAgICBpbnB1dC5NID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vY2hhcmFjdGVyIGFjdGlvbnNcbiAgICBjb25zdCBjaGVja0lucHV0ID0gKCkgPT4ge1xuICAgICAgICAvL2NoYXJhY3RlciBqdW1waW5nXG4gICAgICAgIGlmIChpbnB1dC5VUCAmJiBjaGFyYWN0ZXIuanVtcGluZyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgLT0gMjA7IFxuICAgICAgICAgICAgY2hhcmFjdGVyLmp1bXBpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dC5VUCAmJiBjaGFyYWN0ZXIuanVtcGluZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2NoYXJhY3RlciBzbGlkaW5nXG4gICAgICAgIGlmIChpbnB1dC5ET1dOICYmIGNoYXJhY3Rlci5zbGlkaW5nID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuaGVpZ2h0ID0gNjQ7IFxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoID0gMTEyO1xuICAgICAgICAgICAgY2hhcmFjdGVyLnNsaWRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dC5ET1dOICYmIGNoYXJhY3Rlci5zbGlkaW5nID09IHRydWUpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgPSAxMTI7IFxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoID0gNjQ7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuc2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2NoYXJhY3RlciBkaXZpbmdcbiAgICAgICAgaWYgKGlucHV0LlJJR0hUICYmIGNoYXJhY3Rlci5kaXZpbmcgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgPSA2NDtcbiAgICAgICAgICAgIGNoYXJhY3Rlci53aWR0aCA9IDExMjtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5kaXZpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dC5SSUdIVCAmJiBjaGFyYWN0ZXIuZGl2aW5nID09IHRydWUpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgPSAxMTI7IFxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoID0gNjQ7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuZGl2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vY29sb3Igc3dpdGNoaW5nIFxuICAgICAgICBpZiAoaW5wdXQuQSkge1xuICAgICAgICAgICAgaW5wdXQuQSA9IGZhbHNlO1xuICAgICAgICAgICAgY3VycmVudENvbG9yID0gMDtcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LlMpIHtcbiAgICAgICAgICAgIGlucHV0LlMgPSBmYWxzZTsgXG4gICAgICAgICAgICBjdXJyZW50Q29sb3IgPSAxO1xuICAgICAgICAgICAgY29sb3IgPSBjb2xvckFycmF5W2N1cnJlbnRDb2xvcl07XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQuRCkge1xuICAgICAgICAgICAgaW5wdXQuRCA9IGZhbHNlOyBcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvciA9IDI7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yQXJyYXlbY3VycmVudENvbG9yXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9hdWRpbyBcbiAgICAgICAgaWYgKGlucHV0Lk0pIHtcbiAgICAgICAgICAgIGlucHV0Lk0gPSBmYWxzZTsgXG4gICAgICAgICAgICBhdWRpby5wYXVzZWQgPyBhdWRpby5wbGF5KCkgOiBhdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL3BoeXNpY3MgYmVoaW5kIGp1bXBpbmdcbiAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgKz0gMS4xOyBcbiAgICAgICAgY2hhcmFjdGVyLnkgKz0gY2hhcmFjdGVyLnlfdmVsb2NpdHk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2hhcmFjdGVyLnkgPiAzMDAgLSAxNiAtIDMyKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgY2hhcmFjdGVyLnkgPSAzMDAgLSAxNiAtIDMyO1xuICAgICAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgaWYgKGNoYXJhY3Rlci5zbGlkaW5nKSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnkgPSAzMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci5kaXZpbmcpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIueSA9IDI1MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5wdXQua2V5TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBpbnB1dC5rZXlMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJbnB1dCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdDaGFyYWN0ZXIgPSAoeD0gY2hhcmFjdGVyLngsIHk9Y2hhcmFjdGVyLnksIHdpZHRoPSBjaGFyYWN0ZXIud2lkdGgsIGhlaWdodCA9IGNoYXJhY3Rlci5oZWlnaHQsIGNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdKSA9PiB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpOyAgXG59XG5cblxuZHJhd0Zsb29yID0gKCkgPT4ge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzIwMjgzMFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDM2NSk7XG4gICAgY3R4LmxpbmVUbyg2NDAsIDM2NSk7XG4gICAgY3R4LnN0cm9rZSgpO1xufVxuXG5cblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbGV0IHggPSAwOyBcbiAgICAgICAgXG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IDM7IFxuICAgIFxuXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4ICwgMCk7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCArIGNhbnZhcy53aWR0aCArIDQsIDApOyBcbiAgICAgICAgeCAtPSBzY3JvbGxTcGVlZDsgXG5cbiAgICAgICAgaWYgKHggPD0gLWNhbnZhcy53aWR0aCkgeCA9IDA7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgIGRyYXdDaGFyYWN0ZXIoKTtcbiAgICAgICAgZHJhd0Zsb29yKCk7XG4gICAgfVxuICAgIGxvb3AoKTtcbiAgICBjaGVja0lucHV0KCk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
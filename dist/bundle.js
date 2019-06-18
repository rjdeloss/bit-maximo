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

eval("//audio\nconst audio = document.getElementById('audio');\nlet audioActive = false;\n\n//canvas\nconst canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\ncanvas.width = 640; \ncanvas.height = 400; \n\n// background image\nconst img = new Image();\nimg.src = \"./assets/background2.png\";\n\n// colors\nconst colorArray = ['#0095dd', '#dd1a00', '#63dd00']; \nlet currentColor = 0;\nlet color;\n\n//collision objects\nclass Collection {\n    constructor(object) {\n        this.object = object; \n        this.objectArray = [];\n        this.collection =[];\n    }\n\n    // getObject = (parameters) => {\n    //     if (this.collection.length != 0) {\n    //         let object = this.collection.pop(); \n    //         object.reset(parameters); \n    //         this.objectArray.push(object); \n    //     } else {\n    //         this.objects.push(new this.object(parameters.x, parameters.y));\n    //     }\n    // }\n}\n\n\n\n\n\n//character \nlet character = {\n    height: 112, \n    width: 64,\n    x: 175,\n    y: 300,\n    jumping: false,\n    sliding: false, \n    diving: false, \n    y_velocity: 0, \n};\n\n\n//character controls\nconst input = {\n     A: false,\n     S: false,\n     D: false,\n     UP: false,\n     DOWN: false,\n     RIGHT: false,\n     M: false,\n     keyListener: (e) => {\n        // e.preventDefault();\n\n        //  if (!audioActive) {\n        //      audioActive = true;\n        //      audio.play();\n        //  }\n         let key_state = (e.type == 'keydown') ? true : false;\n         const key = e.keyCode; \n         switch(key){\n             case 65: \n             input.A = key_state; \n             break;\n             case 83: \n             input.S = key_state;\n             break;\n             case 68: \n             input.D = key_state;\n             break;\n             case 38: \n             input.UP = key_state;\n             break;\n             case 39: \n             input.RIGHT = key_state;\n             break;\n             case 40: \n             input.DOWN = key_state;\n             break;\n             case 77: \n             input.M = key_state;\n             break;\n             default: return false; \n            }\n        }\n    };\n    \n    //character actions\n    const checkInput = () => {\n        //character jumping\n        if (input.UP && character.jumping == false) {\n            character.y_velocity -= 20; \n            character.jumping = true;\n        } else if (!input.UP && character.jumping == true) {\n            character.jumping = false;\n        }\n        \n        //character sliding\n        if (input.DOWN && character.sliding == false) {\n            character.height = 64; \n            character.width = 112;\n            character.sliding = true;\n            debugger\n        } else if (!input.DOWN && character.sliding == true) {\n            character.height = 112; \n            character.width = 64;\n            character.sliding = false;\n        }\n        \n        //character diving\n        if (input.RIGHT && character.diving == false) {\n            character.height = 64;\n            character.width = 112;\n            character.diving = true;\n        } else if (!input.RIGHT && character.diving == true) {\n            character.height = 112; \n            character.width = 64;\n            character.diving = false;\n        }\n        \n        //color switching \n        if (input.A) {\n            input.A = false;\n            currentColor = 0;\n            color = colorArray[currentColor];\n        } else if (input.S) {\n            input.S = false; \n            currentColor = 1;\n            color = colorArray[currentColor];\n        } else if (input.D) {\n            input.D = false; \n            currentColor = 2;\n            color = colorArray[currentColor];\n        }\n        \n        //audio \n        if (input.M) {\n            input.M = false; \n            audio.paused ? audio.play() : audio.pause();\n        }\n        \n        //physics behind jumping\n        character.y_velocity += 1.1; \n        character.y += character.y_velocity;\n        \n        if (character.y > 300 - 16 - 32) {\n            character.jumping = false;\n            character.y = 300 - 16 - 32;\n            character.y_velocity = 0;\n            if (character.sliding) {\n                character.y = 300;\n            } else if (character.diving) {\n                character.y = 250;\n            }\n        }\n        \n        \n        window.addEventListener('keydown', input.keyListener);\n        window.addEventListener('keyup', input.keyListener);\n        window.requestAnimationFrame(checkInput);\n    }\n    \n    \n    drawCharacter = (x= character.x, y=character.y, width= character.width, height = character.height, color = colorArray[currentColor]) => {\n        ctx.clearRect(x, y, width, height);\n        ctx.beginPath();\n        ctx.rect(x, y, width, height);\n        ctx.fill();\n        ctx.strokeStyle = '#ffffff';\n        ctx.stroke()\n        ctx.fillStyle = color;\n        ctx.closePath();  \n}\n\n\ndrawFloor = () => {\n    ctx.strokeStyle = \"#202830\";\n    ctx.lineWidth = 4;\n    ctx.beginPath();\n    ctx.moveTo(0, 365);\n    ctx.lineTo(640, 365);\n    ctx.stroke();\n}\n\n\n\n\nwindow.onload = function() {\n    \n    let x = 0; \n        \n\n    const scrollSpeed = 3; \n    \n\n    function loop() {\n        ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0); \n        x -= scrollSpeed; \n\n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(loop);\n        drawCharacter();\n        drawFloor();\n    }\n    loop();\n    checkInput();\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEO0FBQ0E7QUFDQSxtQjtBQUNBLG9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0Q7QUFDQSx3QztBQUNBLDZDO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQjtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBLGM7OztBQUdBLDBCOzs7QUFHQTtBQUNBO0FBQ0Esa0M7QUFDQSxvRDtBQUNBLHlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9saWIvYml0X21heGltby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vYXVkaW9cbmNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvJyk7XG5sZXQgYXVkaW9BY3RpdmUgPSBmYWxzZTtcblxuLy9jYW52YXNcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNhbnZhcy53aWR0aCA9IDY0MDsgXG5jYW52YXMuaGVpZ2h0ID0gNDAwOyBcblxuLy8gYmFja2dyb3VuZCBpbWFnZVxuY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5pbWcuc3JjID0gXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kMi5wbmdcIjtcblxuLy8gY29sb3JzXG5jb25zdCBjb2xvckFycmF5ID0gWycjMDA5NWRkJywgJyNkZDFhMDAnLCAnIzYzZGQwMCddOyBcbmxldCBjdXJyZW50Q29sb3IgPSAwO1xubGV0IGNvbG9yO1xuXG4vL2NvbGxpc2lvbiBvYmplY3RzXG5jbGFzcyBDb2xsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7IFxuICAgICAgICB0aGlzLm9iamVjdEFycmF5ID0gW107XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9W107XG4gICAgfVxuXG4gICAgLy8gZ2V0T2JqZWN0ID0gKHBhcmFtZXRlcnMpID0+IHtcbiAgICAvLyAgICAgaWYgKHRoaXMuY29sbGVjdGlvbi5sZW5ndGggIT0gMCkge1xuICAgIC8vICAgICAgICAgbGV0IG9iamVjdCA9IHRoaXMuY29sbGVjdGlvbi5wb3AoKTsgXG4gICAgLy8gICAgICAgICBvYmplY3QucmVzZXQocGFyYW1ldGVycyk7IFxuICAgIC8vICAgICAgICAgdGhpcy5vYmplY3RBcnJheS5wdXNoKG9iamVjdCk7IFxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gobmV3IHRoaXMub2JqZWN0KHBhcmFtZXRlcnMueCwgcGFyYW1ldGVycy55KSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cblxuXG5cblxuLy9jaGFyYWN0ZXIgXG5sZXQgY2hhcmFjdGVyID0ge1xuICAgIGhlaWdodDogMTEyLCBcbiAgICB3aWR0aDogNjQsXG4gICAgeDogMTc1LFxuICAgIHk6IDMwMCxcbiAgICBqdW1waW5nOiBmYWxzZSxcbiAgICBzbGlkaW5nOiBmYWxzZSwgXG4gICAgZGl2aW5nOiBmYWxzZSwgXG4gICAgeV92ZWxvY2l0eTogMCwgXG59O1xuXG5cbi8vY2hhcmFjdGVyIGNvbnRyb2xzXG5jb25zdCBpbnB1dCA9IHtcbiAgICAgQTogZmFsc2UsXG4gICAgIFM6IGZhbHNlLFxuICAgICBEOiBmYWxzZSxcbiAgICAgVVA6IGZhbHNlLFxuICAgICBET1dOOiBmYWxzZSxcbiAgICAgUklHSFQ6IGZhbHNlLFxuICAgICBNOiBmYWxzZSxcbiAgICAga2V5TGlzdGVuZXI6IChlKSA9PiB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyAgaWYgKCFhdWRpb0FjdGl2ZSkge1xuICAgICAgICAvLyAgICAgIGF1ZGlvQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgIC8vICB9XG4gICAgICAgICBsZXQga2V5X3N0YXRlID0gKGUudHlwZSA9PSAna2V5ZG93bicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlOyBcbiAgICAgICAgIHN3aXRjaChrZXkpe1xuICAgICAgICAgICAgIGNhc2UgNjU6IFxuICAgICAgICAgICAgIGlucHV0LkEgPSBrZXlfc3RhdGU7IFxuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgODM6IFxuICAgICAgICAgICAgIGlucHV0LlMgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA2ODogXG4gICAgICAgICAgICAgaW5wdXQuRCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICBpbnB1dC5VUCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDM5OiBcbiAgICAgICAgICAgICBpbnB1dC5SSUdIVCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDQwOiBcbiAgICAgICAgICAgICBpbnB1dC5ET1dOID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgNzc6IFxuICAgICAgICAgICAgIGlucHV0Lk0gPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy9jaGFyYWN0ZXIgYWN0aW9uc1xuICAgIGNvbnN0IGNoZWNrSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIC8vY2hhcmFjdGVyIGp1bXBpbmdcbiAgICAgICAgaWYgKGlucHV0LlVQICYmIGNoYXJhY3Rlci5qdW1waW5nID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIueV92ZWxvY2l0eSAtPSAyMDsgXG4gICAgICAgICAgICBjaGFyYWN0ZXIuanVtcGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlucHV0LlVQICYmIGNoYXJhY3Rlci5qdW1waW5nID09IHRydWUpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vY2hhcmFjdGVyIHNsaWRpbmdcbiAgICAgICAgaWYgKGlucHV0LkRPV04gJiYgY2hhcmFjdGVyLnNsaWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgPSA2NDsgXG4gICAgICAgICAgICBjaGFyYWN0ZXIud2lkdGggPSAxMTI7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuc2xpZGluZyA9IHRydWU7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dC5ET1dOICYmIGNoYXJhY3Rlci5zbGlkaW5nID09IHRydWUpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgPSAxMTI7IFxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoID0gNjQ7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuc2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2NoYXJhY3RlciBkaXZpbmdcbiAgICAgICAgaWYgKGlucHV0LlJJR0hUICYmIGNoYXJhY3Rlci5kaXZpbmcgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgPSA2NDtcbiAgICAgICAgICAgIGNoYXJhY3Rlci53aWR0aCA9IDExMjtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5kaXZpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dC5SSUdIVCAmJiBjaGFyYWN0ZXIuZGl2aW5nID09IHRydWUpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5oZWlnaHQgPSAxMTI7IFxuICAgICAgICAgICAgY2hhcmFjdGVyLndpZHRoID0gNjQ7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuZGl2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vY29sb3Igc3dpdGNoaW5nIFxuICAgICAgICBpZiAoaW5wdXQuQSkge1xuICAgICAgICAgICAgaW5wdXQuQSA9IGZhbHNlO1xuICAgICAgICAgICAgY3VycmVudENvbG9yID0gMDtcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0LlMpIHtcbiAgICAgICAgICAgIGlucHV0LlMgPSBmYWxzZTsgXG4gICAgICAgICAgICBjdXJyZW50Q29sb3IgPSAxO1xuICAgICAgICAgICAgY29sb3IgPSBjb2xvckFycmF5W2N1cnJlbnRDb2xvcl07XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQuRCkge1xuICAgICAgICAgICAgaW5wdXQuRCA9IGZhbHNlOyBcbiAgICAgICAgICAgIGN1cnJlbnRDb2xvciA9IDI7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yQXJyYXlbY3VycmVudENvbG9yXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9hdWRpbyBcbiAgICAgICAgaWYgKGlucHV0Lk0pIHtcbiAgICAgICAgICAgIGlucHV0Lk0gPSBmYWxzZTsgXG4gICAgICAgICAgICBhdWRpby5wYXVzZWQgPyBhdWRpby5wbGF5KCkgOiBhdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL3BoeXNpY3MgYmVoaW5kIGp1bXBpbmdcbiAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgKz0gMS4xOyBcbiAgICAgICAgY2hhcmFjdGVyLnkgKz0gY2hhcmFjdGVyLnlfdmVsb2NpdHk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2hhcmFjdGVyLnkgPiAzMDAgLSAxNiAtIDMyKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgY2hhcmFjdGVyLnkgPSAzMDAgLSAxNiAtIDMyO1xuICAgICAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgaWYgKGNoYXJhY3Rlci5zbGlkaW5nKSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnkgPSAzMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci5kaXZpbmcpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIueSA9IDI1MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5wdXQua2V5TGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBpbnB1dC5rZXlMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJbnB1dCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGRyYXdDaGFyYWN0ZXIgPSAoeD0gY2hhcmFjdGVyLngsIHk9Y2hhcmFjdGVyLnksIHdpZHRoPSBjaGFyYWN0ZXIud2lkdGgsIGhlaWdodCA9IGNoYXJhY3Rlci5oZWlnaHQsIGNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdKSA9PiB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpOyAgXG59XG5cblxuZHJhd0Zsb29yID0gKCkgPT4ge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzIwMjgzMFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDM2NSk7XG4gICAgY3R4LmxpbmVUbyg2NDAsIDM2NSk7XG4gICAgY3R4LnN0cm9rZSgpO1xufVxuXG5cblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbGV0IHggPSAwOyBcbiAgICAgICAgXG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IDM7IFxuICAgIFxuXG4gICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4ICwgMCk7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCArIGNhbnZhcy53aWR0aCArIDQsIDApOyBcbiAgICAgICAgeCAtPSBzY3JvbGxTcGVlZDsgXG5cbiAgICAgICAgaWYgKHggPD0gLWNhbnZhcy53aWR0aCkgeCA9IDA7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgIGRyYXdDaGFyYWN0ZXIoKTtcbiAgICAgICAgZHJhd0Zsb29yKCk7XG4gICAgfVxuICAgIGxvb3AoKTtcbiAgICBjaGVja0lucHV0KCk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
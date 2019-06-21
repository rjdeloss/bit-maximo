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

eval("//audio\nconst audio = document.getElementById('audio');\nlet audioActive = false;\n\n//canvas\nconst canvas = document.getElementById('canvas'); \nconst ctx = canvas.getContext('2d');\ncanvas.width = 640; \ncanvas.height = 400; \n\n// background image\nconst img = new Image();\nimg.src = \"./assets/background2.png\";\n\n// colors\nconst colorArray = ['#0095dd', '#dd1a00', '#63dd00']; \nlet currentColor = 0;\nlet randomColor = Math.floor(Math.random() * 3);\nlet color;\nlet randColor;\nlet gameLoop = false;\n\n//character \nlet character = {\n    height: 112,\n    width: 64,\n    x: 175,\n    y: 300,\n    jumping: false,\n    sliding: false,\n    diving: false,\n    y_velocity: 0,\n    color: colorArray[currentColor],\n};\n\n//collision objects\nclass Collection {\n    constructor(amtColor) {\n        this.color = Math.floor(Math.random() * amtColor);\n        this.type =  Math.floor(Math.random() * 3);\n        this.x =  650 //((Math.random() * (100)) + 640);\n        this.counted = false;\n        this.destroy = false; \n        this.drawJumpingObject = this.drawJumpingObject.bind(this)\n        this.drawDivingObject = this.drawDivingObject.bind(this)\n        this.drawSlidingObject = this.drawSlidingObject.bind(this)\n    }\n\n    drawJumpingObject(objX, randColor) {\n        ctx.shadowOffsetX = 5;\n        ctx.shadowOffsetY = 5;\n        ctx.beginPath();\n        ctx.globalAlpha = 0.4;\n        ctx.fillStyle = randColor;\n        ctx.rect(objX, 170, 60, 140)\n        ctx.fill();\n        ctx.closePath();\n        ctx.beginPath();\n        ctx.globalAlpha = 1;\n        ctx.fillStyle = randColor;\n        ctx.rect(objX, 305, 60, 60);\n        ctx.fill();\n        ctx.closePath();\n        ctx.shadowOffsetX = 0;\n        ctx.shadowOffsetY = 0;\n    }\n\n    drawSlidingObject(objX, randColor) {\n        ctx.shadowOffsetX = 5;\n        ctx.shadowOffsetY = 5;\n        ctx.beginPath();\n        ctx.globalAlpha = 0.4;\n        ctx.fillStyle = randColor;\n        ctx.rect(objX, 290, 60, 75);\n        ctx.fill();\n        ctx.closePath();\n        ctx.beginPath();\n        ctx.globalAlpha = 1;\n        ctx.fillStyle = randColor;\n        ctx.rect(objX, 170, 60, 120);\n        ctx.fill();\n        ctx.closePath();\n        ctx.shadowOffsetX = 0;\n        ctx.shadowOffsetY = 0;\n    }\n\n    drawDivingObject (objX, randColor) {\n        ctx.shadowOffsetX = 5;\n        ctx.shadowOffsetY = 5;\n        ctx.beginPath();\n        ctx.globalAlpha = 0.4;\n        ctx.fillStyle = randColor;\n        ctx.rect(objX, 200, 60, 130);\n        ctx.fill();\n        ctx.closePath();\n        ctx.beginPath();\n        ctx.fillStyle = randColor;\n        ctx.globalAlpha = 1;\n        ctx.rect(objX, 325, 60, 40);\n        ctx.fill();\n        ctx.closePath();\n        ctx.beginPath();\n        ctx.globalAlpha = 1;\n        ctx.fillStyle = randColor;\n        ctx.rect(objX, 170, 60, 40);\n        ctx.fill();\n        ctx.closePath();\n        ctx.shadowOffsetX = 0;\n        ctx.shadowOffsetY = 0;\n    }\n\n    //collision detection \n    checkCollision(character) {\n        let obstacleX = this.x; \n\n        if (obstacleX > character.x + character.width || obstacleX < character.x) {\n            return false;\n        } else {\n            if (this.color == currentColor) {\n                if ((character.jumping && this.type == 0) || (character.diving && this.type == 1) || (character.sliding && this.type == 2)) {\n    \n                    return false;\n                }\n            }\n            // debugger\n            return true;\n            \n        }\n    }\n\n    render() {\n        switch (this.type) {\n            case 0:\n                this.drawJumpingObject(this.x, colorArray[this.color]);\n                break; \n            case 1:\n                this.drawDivingObject(this.x, colorArray[this.color]); \n                break;\n            case 2:\n                this.drawSlidingObject(this.x, colorArray[this.color]);\n                break;\n        }\n    }\n    \n}\n\n//character controls\nconst input = {\n     A: false,\n     S: false,\n     D: false,\n     UP: false,\n     DOWN: false,\n     RIGHT: false,\n     M: false,\n     ENTER: false,\n     keyListener: (e) => {\n        // e.preventDefault();\n\n        //  if (!audioActive) {\n        //      audioActive = true;\n        //      audio.play();\n        //  }\n         let key_state = (e.type == 'keydown') ? true : false;\n         const key = e.keyCode; \n         switch(key){\n             case 65: \n             input.A = key_state; \n             break;\n             case 83: \n             input.S = key_state;\n             break;\n             case 68: \n             input.D = key_state;\n             break;\n             case 38: \n             input.UP = key_state;\n             break;\n             case 39: \n             input.RIGHT = key_state;\n             break;\n             case 40: \n             input.DOWN = key_state;\n             break;\n             case 77: \n             input.M = key_state;\n             break;\n             case 13: \n             input.ENTER = key_state;\n             break;\n             default: return false; \n            }\n        }\n    };\n\n//character actions\nconst checkInput = () => {\n    //character jumping\n    if (input.UP && character.jumping == false) {\n        character.y_velocity -= 20; \n        character.jumping = true;\n    } else if (!input.UP && character.jumping == true && character.y == 300) {\n        character.jumping = false;\n    }\n    \n    //character sliding\n    if (input.RIGHT == false) {\n        if (input.DOWN && character.sliding == false) {\n            [character.height, character.width] = [character.width, character.height];\n            character.sliding = true;\n        } else if (!input.DOWN && character.sliding == true) {\n            [character.width, character.height] = [character.height, character.width];\n            character.sliding = false;\n        }\n    }\n    \n    //character diving\n    if (input.DOWN == false) {\n        if (input.RIGHT && character.diving == false) {\n            [character.height, character.width] = [character.width, character.height];\n            character.diving = true;\n        } else if (!input.RIGHT && character.diving == true) {\n            [character.width, character.height] = [character.height, character.width];\n            character.diving = false;\n        }\n    }\n    \n    //color switching \n    if (input.A) {\n        input.A = false;\n        currentColor = 0;\n        // character.color = colorArray[currentColor];\n    } else if (input.S) {\n        input.S = false; \n        currentColor = 1;\n        character.color = colorArray[currentColor];\n    } else if (input.D) {\n        input.D = false; \n        currentColor = 2;\n        character.color = colorArray[currentColor];\n    }\n    \n    //audio \n    if (input.M) {\n        input.M = false; \n        audio.paused ? audio.play() : audio.pause();\n    }\n    \n    //physics behind jumping\n    character.y_velocity += 1.1; \n    character.y += character.y_velocity;\n    \n    if (character.y > 300 - 16 - 32) {\n        character.jumping = false;\n        character.y = 300 - 16 - 32;\n        character.y_velocity = 0;\n        if (character.sliding) {\n            character.y = 300;\n        } else if (character.diving) {\n            character.y = 250;\n        }\n    }\n    \n    \n    window.addEventListener('keydown', input.keyListener);\n    window.addEventListener('keyup', input.keyListener);\n    window.requestAnimationFrame(checkInput);\n}\n\n\ndrawCharacter = (x= character.x, y=character.y, width= character.width, height = character.height, color = colorArray[currentColor]) => {\n    // ctx.clearRect(x, y, width, height);\n    ctx.beginPath();\n    ctx.fillStyle = color;\n    ctx.rect(x, y, width, height);\n    ctx.fill();\n    ctx.strokeStyle = '#ffffff';\n    ctx.stroke();\n    ctx.closePath();  \n}\n\n\ndrawFloor = () => {\n    ctx.beginPath();\n    ctx.strokeStyle = \"#202830\";\n    ctx.lineWidth = 4;\n    ctx.moveTo(0, 365);\n    ctx.lineTo(640, 365);\n    ctx.stroke();\n    ctx.closePath();\n}\n\nwindow.onload = function() {\n    \n    let x = 0; \n    const scrollSpeed = 3; \n    const objCollection = [];\n    let obstacleCounter = 0;\n    let score = 0;\n    let colorChange = 1;\n    let lives = 5;\n    let start = false;\n    \n\n    //sets the speed of obstacle creation and scalability of the game\n    \n    function startGame() {\n        setInterval(() => {\n            if (obstacleCounter === 20 || obstacleCounter === 50)  {\n                colorChange++;\n            }\n            objCollection.push(new Collection(colorChange));\n            obstacleCounter++;\n        }, \n        1300\n        );\n        loop();\n    }\n\n    function gameOver() {\n        x = 0;\n        obstacleCounter = 0;\n        score = 0;\n        colorChange = 1;\n        lives = 5;\n        start = false;\n        document.location.reload();\n        clearInterval(interval);\n        \n    }\n\n    function gameInstructions() {\n        // canvas modal\n        ctx.beginPath();\n        ctx.rect(0,0, canvas.width, canvas.height);\n        ctx.fillStyle = \"rgba(0, 0, 0, 0.3 )\";\n        ctx.fill();\n        ctx.closePath();\n        //container\n        ctx.beginPath();\n        ctx.rect(64, 40, 512, 320);\n        ctx.shadowColor = \"rgba(0,0,0,0.3)\";\n        ctx.shadowOffsetX = 5;\n        ctx.shadowOffsetY = 5;\n        ctx.fillStyle = \"#ffffff\";\n        ctx.fill();\n        ctx.closePath();\n        \n        ctx.beginPath();\n        ctx.strokeRect(64, 40, 512, 320);\n        ctx.strokeStyle =\"#0095dd\"; \n        ctx.lineWidth = 10;\n        ctx.stroke();\n        ctx.closePath();\n        //text\n        ctx.shadowOffsetX = 0;\n        ctx.shadowOffsetY = 0;\n        ctx.beginPath();\n        ctx.font = \"bold 24px Helvetica\";\n        ctx.fillStyle = \"#0095dd\";\n        ctx.fillText(\"Welcome to Bit Maximo!\", 170, 100);\n        ctx.font = \"20px Helvetica\";\n        ctx.fillText(\"Match the obstacle with the correct action\", 120, 150);\n        ctx.fillText(\"using up arrow to jump, right arrow to dive,\", 120, 175);\n        ctx.fillText(\"and down arrow to slide. Change the character\", 120, 200);\n        ctx.fillText(\"color with A S D to match the obstacle color.\", 120, 225);\n        ctx.font = \"bold 24px Helvetica\";\n        ctx.fillText(\"press Enter\", 240, 300);\n        ctx.closePath();\n        \n        if (!gameLoop) {\n            window.requestAnimationFrame(gameInstructions);\n        }\n    }\n\n    function background() {\n        // ctx.clearRect(0,0, canvas.width, canvas.height);\n        ctx.drawImage(img, x , 0); \n        ctx.drawImage(img, x + canvas.width + 4, 0);  \n        x -= scrollSpeed; \n    \n        if (x <= -canvas.width) x = 0;\n        window.requestAnimationFrame(background);\n    }\n\n    function loop() {\n        drawFloor();\n        drawCharacter();\n        //draws the obstacles from the class Collection\n        for (let i = 0; i < objCollection.length; i++) {\n            obstacle = objCollection[i];\n            obstacle.render(); \n            obstacle.x -= 5; \n            \n            if (obstacle.checkCollision(character) && obstacle.counted == false) {\n                console.log(`${obstacleCounter} collided`)\n                ctx.clearRect(character.x, character.y, character.width, character.height);\n                setTimeout(() => clearInterval(characterCollided), 500);\n                const characterCollided = setInterval(() => {\n                }, 400);\n                    console.log(lives);\n                    lives--;\n                    obstacle.counted = true;\n            }\n\n            if (lives == -1) {\n                gameOver();\n                gameLoop = false;\n            }\n\n            if (obstacle.x <= -canvas.width - 100) {\n                obstacle.destroy = true; \n            }\n        }\n        //removes object from array to clean collision detection later\n        for (let i = 0; i < objCollection.length; i++) {\n            obstacle = objCollection[i];\n            if (obstacle.destroy === true) {\n                objCollection.splice(i, 1);\n                i--;\n            }\n        }\n        window.requestAnimationFrame(loop);\n    }\n    background();\n    gameInstructions();\n\n    window.addEventListener('keydown', (e) =>{\n        if (e.keyCode === 13 && start == false) {\n            gameLoop = true;\n            start = true;\n            startGame();\n        }\n    })\n    checkInput();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYml0X21heGltby5qcz9jMjI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEO0FBQ0E7QUFDQSxtQjtBQUNBLG9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQjs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTtBQUNBLHNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0I7QUFDQTtBQUNBO0FBQ0EsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjO0FBQ0EsMEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDO0FBQ0Esb0Q7QUFDQSx5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0EsOEI7QUFDQSw0Qjs7QUFFQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Ii4vbGliL2JpdF9tYXhpbW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2F1ZGlvXG5jb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpbycpO1xubGV0IGF1ZGlvQWN0aXZlID0gZmFsc2U7XG5cbi8vY2FudmFzXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7IFxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jYW52YXMud2lkdGggPSA2NDA7IFxuY2FudmFzLmhlaWdodCA9IDQwMDsgXG5cbi8vIGJhY2tncm91bmQgaW1hZ2VcbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9IFwiLi9hc3NldHMvYmFja2dyb3VuZDIucG5nXCI7XG5cbi8vIGNvbG9yc1xuY29uc3QgY29sb3JBcnJheSA9IFsnIzAwOTVkZCcsICcjZGQxYTAwJywgJyM2M2RkMDAnXTsgXG5sZXQgY3VycmVudENvbG9yID0gMDtcbmxldCByYW5kb21Db2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xubGV0IGNvbG9yO1xubGV0IHJhbmRDb2xvcjtcbmxldCBnYW1lTG9vcCA9IGZhbHNlO1xuXG4vL2NoYXJhY3RlciBcbmxldCBjaGFyYWN0ZXIgPSB7XG4gICAgaGVpZ2h0OiAxMTIsXG4gICAgd2lkdGg6IDY0LFxuICAgIHg6IDE3NSxcbiAgICB5OiAzMDAsXG4gICAganVtcGluZzogZmFsc2UsXG4gICAgc2xpZGluZzogZmFsc2UsXG4gICAgZGl2aW5nOiBmYWxzZSxcbiAgICB5X3ZlbG9jaXR5OiAwLFxuICAgIGNvbG9yOiBjb2xvckFycmF5W2N1cnJlbnRDb2xvcl0sXG59O1xuXG4vL2NvbGxpc2lvbiBvYmplY3RzXG5jbGFzcyBDb2xsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihhbXRDb2xvcikge1xuICAgICAgICB0aGlzLmNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYW10Q29sb3IpO1xuICAgICAgICB0aGlzLnR5cGUgPSAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgICAgIHRoaXMueCA9ICA2NTAgLy8oKE1hdGgucmFuZG9tKCkgKiAoMTAwKSkgKyA2NDApO1xuICAgICAgICB0aGlzLmNvdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXN0cm95ID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmRyYXdKdW1waW5nT2JqZWN0ID0gdGhpcy5kcmF3SnVtcGluZ09iamVjdC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZHJhd0RpdmluZ09iamVjdCA9IHRoaXMuZHJhd0RpdmluZ09iamVjdC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZHJhd1NsaWRpbmdPYmplY3QgPSB0aGlzLmRyYXdTbGlkaW5nT2JqZWN0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBkcmF3SnVtcGluZ09iamVjdChvYmpYLCByYW5kQ29sb3IpIHtcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSA1O1xuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmFuZENvbG9yO1xuICAgICAgICBjdHgucmVjdChvYmpYLCAxNzAsIDYwLCAxNDApXG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmFuZENvbG9yO1xuICAgICAgICBjdHgucmVjdChvYmpYLCAzMDUsIDYwLCA2MCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAgfVxuXG4gICAgZHJhd1NsaWRpbmdPYmplY3Qob2JqWCwgcmFuZENvbG9yKSB7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gNTtcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSA1O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJhbmRDb2xvcjtcbiAgICAgICAgY3R4LnJlY3Qob2JqWCwgMjkwLCA2MCwgNzUpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJhbmRDb2xvcjtcbiAgICAgICAgY3R4LnJlY3Qob2JqWCwgMTcwLCA2MCwgMTIwKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcbiAgICB9XG5cbiAgICBkcmF3RGl2aW5nT2JqZWN0IChvYmpYLCByYW5kQ29sb3IpIHtcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSA1O1xuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmFuZENvbG9yO1xuICAgICAgICBjdHgucmVjdChvYmpYLCAyMDAsIDYwLCAxMzApO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJhbmRDb2xvcjtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY3R4LnJlY3Qob2JqWCwgMzI1LCA2MCwgNDApO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHJhbmRDb2xvcjtcbiAgICAgICAgY3R4LnJlY3Qob2JqWCwgMTcwLCA2MCwgNDApO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSAwO1xuICAgIH1cblxuICAgIC8vY29sbGlzaW9uIGRldGVjdGlvbiBcbiAgICBjaGVja0NvbGxpc2lvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgbGV0IG9ic3RhY2xlWCA9IHRoaXMueDsgXG5cbiAgICAgICAgaWYgKG9ic3RhY2xlWCA+IGNoYXJhY3Rlci54ICsgY2hhcmFjdGVyLndpZHRoIHx8IG9ic3RhY2xlWCA8IGNoYXJhY3Rlci54KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvciA9PSBjdXJyZW50Q29sb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoKGNoYXJhY3Rlci5qdW1waW5nICYmIHRoaXMudHlwZSA9PSAwKSB8fCAoY2hhcmFjdGVyLmRpdmluZyAmJiB0aGlzLnR5cGUgPT0gMSkgfHwgKGNoYXJhY3Rlci5zbGlkaW5nICYmIHRoaXMudHlwZSA9PSAyKSkge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3SnVtcGluZ09iamVjdCh0aGlzLngsIGNvbG9yQXJyYXlbdGhpcy5jb2xvcl0pO1xuICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEaXZpbmdPYmplY3QodGhpcy54LCBjb2xvckFycmF5W3RoaXMuY29sb3JdKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U2xpZGluZ09iamVjdCh0aGlzLngsIGNvbG9yQXJyYXlbdGhpcy5jb2xvcl0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG4vL2NoYXJhY3RlciBjb250cm9sc1xuY29uc3QgaW5wdXQgPSB7XG4gICAgIEE6IGZhbHNlLFxuICAgICBTOiBmYWxzZSxcbiAgICAgRDogZmFsc2UsXG4gICAgIFVQOiBmYWxzZSxcbiAgICAgRE9XTjogZmFsc2UsXG4gICAgIFJJR0hUOiBmYWxzZSxcbiAgICAgTTogZmFsc2UsXG4gICAgIEVOVEVSOiBmYWxzZSxcbiAgICAga2V5TGlzdGVuZXI6IChlKSA9PiB7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyAgaWYgKCFhdWRpb0FjdGl2ZSkge1xuICAgICAgICAvLyAgICAgIGF1ZGlvQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgIC8vICB9XG4gICAgICAgICBsZXQga2V5X3N0YXRlID0gKGUudHlwZSA9PSAna2V5ZG93bicpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgY29uc3Qga2V5ID0gZS5rZXlDb2RlOyBcbiAgICAgICAgIHN3aXRjaChrZXkpe1xuICAgICAgICAgICAgIGNhc2UgNjU6IFxuICAgICAgICAgICAgIGlucHV0LkEgPSBrZXlfc3RhdGU7IFxuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgODM6IFxuICAgICAgICAgICAgIGlucHV0LlMgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSA2ODogXG4gICAgICAgICAgICAgaW5wdXQuRCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICBpbnB1dC5VUCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDM5OiBcbiAgICAgICAgICAgICBpbnB1dC5SSUdIVCA9IGtleV9zdGF0ZTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIDQwOiBcbiAgICAgICAgICAgICBpbnB1dC5ET1dOID0ga2V5X3N0YXRlO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgNzc6IFxuICAgICAgICAgICAgIGlucHV0Lk0gPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSAxMzogXG4gICAgICAgICAgICAgaW5wdXQuRU5URVIgPSBrZXlfc3RhdGU7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbi8vY2hhcmFjdGVyIGFjdGlvbnNcbmNvbnN0IGNoZWNrSW5wdXQgPSAoKSA9PiB7XG4gICAgLy9jaGFyYWN0ZXIganVtcGluZ1xuICAgIGlmIChpbnB1dC5VUCAmJiBjaGFyYWN0ZXIuanVtcGluZyA9PSBmYWxzZSkge1xuICAgICAgICBjaGFyYWN0ZXIueV92ZWxvY2l0eSAtPSAyMDsgXG4gICAgICAgIGNoYXJhY3Rlci5qdW1waW5nID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFpbnB1dC5VUCAmJiBjaGFyYWN0ZXIuanVtcGluZyA9PSB0cnVlICYmIGNoYXJhY3Rlci55ID09IDMwMCkge1xuICAgICAgICBjaGFyYWN0ZXIuanVtcGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvL2NoYXJhY3RlciBzbGlkaW5nXG4gICAgaWYgKGlucHV0LlJJR0hUID09IGZhbHNlKSB7XG4gICAgICAgIGlmIChpbnB1dC5ET1dOICYmIGNoYXJhY3Rlci5zbGlkaW5nID09IGZhbHNlKSB7XG4gICAgICAgICAgICBbY2hhcmFjdGVyLmhlaWdodCwgY2hhcmFjdGVyLndpZHRoXSA9IFtjaGFyYWN0ZXIud2lkdGgsIGNoYXJhY3Rlci5oZWlnaHRdO1xuICAgICAgICAgICAgY2hhcmFjdGVyLnNsaWRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpbnB1dC5ET1dOICYmIGNoYXJhY3Rlci5zbGlkaW5nID09IHRydWUpIHtcbiAgICAgICAgICAgIFtjaGFyYWN0ZXIud2lkdGgsIGNoYXJhY3Rlci5oZWlnaHRdID0gW2NoYXJhY3Rlci5oZWlnaHQsIGNoYXJhY3Rlci53aWR0aF07XG4gICAgICAgICAgICBjaGFyYWN0ZXIuc2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vY2hhcmFjdGVyIGRpdmluZ1xuICAgIGlmIChpbnB1dC5ET1dOID09IGZhbHNlKSB7XG4gICAgICAgIGlmIChpbnB1dC5SSUdIVCAmJiBjaGFyYWN0ZXIuZGl2aW5nID09IGZhbHNlKSB7XG4gICAgICAgICAgICBbY2hhcmFjdGVyLmhlaWdodCwgY2hhcmFjdGVyLndpZHRoXSA9IFtjaGFyYWN0ZXIud2lkdGgsIGNoYXJhY3Rlci5oZWlnaHRdO1xuICAgICAgICAgICAgY2hhcmFjdGVyLmRpdmluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlucHV0LlJJR0hUICYmIGNoYXJhY3Rlci5kaXZpbmcgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgW2NoYXJhY3Rlci53aWR0aCwgY2hhcmFjdGVyLmhlaWdodF0gPSBbY2hhcmFjdGVyLmhlaWdodCwgY2hhcmFjdGVyLndpZHRoXTtcbiAgICAgICAgICAgIGNoYXJhY3Rlci5kaXZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvL2NvbG9yIHN3aXRjaGluZyBcbiAgICBpZiAoaW5wdXQuQSkge1xuICAgICAgICBpbnB1dC5BID0gZmFsc2U7XG4gICAgICAgIGN1cnJlbnRDb2xvciA9IDA7XG4gICAgICAgIC8vIGNoYXJhY3Rlci5jb2xvciA9IGNvbG9yQXJyYXlbY3VycmVudENvbG9yXTtcbiAgICB9IGVsc2UgaWYgKGlucHV0LlMpIHtcbiAgICAgICAgaW5wdXQuUyA9IGZhbHNlOyBcbiAgICAgICAgY3VycmVudENvbG9yID0gMTtcbiAgICAgICAgY2hhcmFjdGVyLmNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQuRCkge1xuICAgICAgICBpbnB1dC5EID0gZmFsc2U7IFxuICAgICAgICBjdXJyZW50Q29sb3IgPSAyO1xuICAgICAgICBjaGFyYWN0ZXIuY29sb3IgPSBjb2xvckFycmF5W2N1cnJlbnRDb2xvcl07XG4gICAgfVxuICAgIFxuICAgIC8vYXVkaW8gXG4gICAgaWYgKGlucHV0Lk0pIHtcbiAgICAgICAgaW5wdXQuTSA9IGZhbHNlOyBcbiAgICAgICAgYXVkaW8ucGF1c2VkID8gYXVkaW8ucGxheSgpIDogYXVkaW8ucGF1c2UoKTtcbiAgICB9XG4gICAgXG4gICAgLy9waHlzaWNzIGJlaGluZCBqdW1waW5nXG4gICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgKz0gMS4xOyBcbiAgICBjaGFyYWN0ZXIueSArPSBjaGFyYWN0ZXIueV92ZWxvY2l0eTtcbiAgICBcbiAgICBpZiAoY2hhcmFjdGVyLnkgPiAzMDAgLSAxNiAtIDMyKSB7XG4gICAgICAgIGNoYXJhY3Rlci5qdW1waW5nID0gZmFsc2U7XG4gICAgICAgIGNoYXJhY3Rlci55ID0gMzAwIC0gMTYgLSAzMjtcbiAgICAgICAgY2hhcmFjdGVyLnlfdmVsb2NpdHkgPSAwO1xuICAgICAgICBpZiAoY2hhcmFjdGVyLnNsaWRpbmcpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci55ID0gMzAwO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci5kaXZpbmcpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlci55ID0gMjUwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaW5wdXQua2V5TGlzdGVuZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGlucHV0LmtleUxpc3RlbmVyKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSW5wdXQpO1xufVxuXG5cbmRyYXdDaGFyYWN0ZXIgPSAoeD0gY2hhcmFjdGVyLngsIHk9Y2hhcmFjdGVyLnksIHdpZHRoPSBjaGFyYWN0ZXIud2lkdGgsIGhlaWdodCA9IGNoYXJhY3Rlci5oZWlnaHQsIGNvbG9yID0gY29sb3JBcnJheVtjdXJyZW50Q29sb3JdKSA9PiB7XG4gICAgLy8gY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmZmZmYnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7ICBcbn1cblxuXG5kcmF3Rmxvb3IgPSAoKSA9PiB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzIwMjgzMFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5tb3ZlVG8oMCwgMzY1KTtcbiAgICBjdHgubGluZVRvKDY0MCwgMzY1KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbGV0IHggPSAwOyBcbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IDM7IFxuICAgIGNvbnN0IG9iakNvbGxlY3Rpb24gPSBbXTtcbiAgICBsZXQgb2JzdGFjbGVDb3VudGVyID0gMDtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGxldCBjb2xvckNoYW5nZSA9IDE7XG4gICAgbGV0IGxpdmVzID0gNTtcbiAgICBsZXQgc3RhcnQgPSBmYWxzZTtcbiAgICBcblxuICAgIC8vc2V0cyB0aGUgc3BlZWQgb2Ygb2JzdGFjbGUgY3JlYXRpb24gYW5kIHNjYWxhYmlsaXR5IG9mIHRoZSBnYW1lXG4gICAgXG4gICAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JzdGFjbGVDb3VudGVyID09PSAyMCB8fCBvYnN0YWNsZUNvdW50ZXIgPT09IDUwKSAge1xuICAgICAgICAgICAgICAgIGNvbG9yQ2hhbmdlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmpDb2xsZWN0aW9uLnB1c2gobmV3IENvbGxlY3Rpb24oY29sb3JDaGFuZ2UpKTtcbiAgICAgICAgICAgIG9ic3RhY2xlQ291bnRlcisrO1xuICAgICAgICB9LCBcbiAgICAgICAgMTMwMFxuICAgICAgICApO1xuICAgICAgICBsb29wKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gICAgICAgIHggPSAwO1xuICAgICAgICBvYnN0YWNsZUNvdW50ZXIgPSAwO1xuICAgICAgICBzY29yZSA9IDA7XG4gICAgICAgIGNvbG9yQ2hhbmdlID0gMTtcbiAgICAgICAgbGl2ZXMgPSA1O1xuICAgICAgICBzdGFydCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdhbWVJbnN0cnVjdGlvbnMoKSB7XG4gICAgICAgIC8vIGNhbnZhcyBtb2RhbFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjMgKVwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIC8vY29udGFpbmVyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoNjQsIDQwLCA1MTIsIDMyMCk7XG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwicmdiYSgwLDAsMCwwLjMpXCI7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gNTtcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFkgPSA1O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoNjQsIDQwLCA1MTIsIDMyMCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9XCIjMDA5NWRkXCI7IFxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTA7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAvL3RleHRcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSAwO1xuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMjRweCBIZWx2ZXRpY2FcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVkZFwiO1xuICAgICAgICBjdHguZmlsbFRleHQoXCJXZWxjb21lIHRvIEJpdCBNYXhpbW8hXCIsIDE3MCwgMTAwKTtcbiAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHggSGVsdmV0aWNhXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChcIk1hdGNoIHRoZSBvYnN0YWNsZSB3aXRoIHRoZSBjb3JyZWN0IGFjdGlvblwiLCAxMjAsIDE1MCk7XG4gICAgICAgIGN0eC5maWxsVGV4dChcInVzaW5nIHVwIGFycm93IHRvIGp1bXAsIHJpZ2h0IGFycm93IHRvIGRpdmUsXCIsIDEyMCwgMTc1KTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiYW5kIGRvd24gYXJyb3cgdG8gc2xpZGUuIENoYW5nZSB0aGUgY2hhcmFjdGVyXCIsIDEyMCwgMjAwKTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwiY29sb3Igd2l0aCBBIFMgRCB0byBtYXRjaCB0aGUgb2JzdGFjbGUgY29sb3IuXCIsIDEyMCwgMjI1KTtcbiAgICAgICAgY3R4LmZvbnQgPSBcImJvbGQgMjRweCBIZWx2ZXRpY2FcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFwicHJlc3MgRW50ZXJcIiwgMjQwLCAzMDApO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoIWdhbWVMb29wKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVJbnN0cnVjdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy8gY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4ICwgMCk7IFxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgeCArIGNhbnZhcy53aWR0aCArIDQsIDApOyAgXG4gICAgICAgIHggLT0gc2Nyb2xsU3BlZWQ7IFxuICAgIFxuICAgICAgICBpZiAoeCA8PSAtY2FudmFzLndpZHRoKSB4ID0gMDtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShiYWNrZ3JvdW5kKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICBkcmF3Rmxvb3IoKTtcbiAgICAgICAgZHJhd0NoYXJhY3RlcigpO1xuICAgICAgICAvL2RyYXdzIHRoZSBvYnN0YWNsZXMgZnJvbSB0aGUgY2xhc3MgQ29sbGVjdGlvblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9ic3RhY2xlID0gb2JqQ29sbGVjdGlvbltpXTtcbiAgICAgICAgICAgIG9ic3RhY2xlLnJlbmRlcigpOyBcbiAgICAgICAgICAgIG9ic3RhY2xlLnggLT0gNTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvYnN0YWNsZS5jaGVja0NvbGxpc2lvbihjaGFyYWN0ZXIpICYmIG9ic3RhY2xlLmNvdW50ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtvYnN0YWNsZUNvdW50ZXJ9IGNvbGxpZGVkYClcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KGNoYXJhY3Rlci54LCBjaGFyYWN0ZXIueSwgY2hhcmFjdGVyLndpZHRoLCBjaGFyYWN0ZXIuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNsZWFySW50ZXJ2YWwoY2hhcmFjdGVyQ29sbGlkZWQpLCA1MDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlckNvbGxpZGVkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpdmVzKTtcbiAgICAgICAgICAgICAgICAgICAgbGl2ZXMtLTtcbiAgICAgICAgICAgICAgICAgICAgb2JzdGFjbGUuY291bnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsaXZlcyA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgZ2FtZUxvb3AgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9ic3RhY2xlLnggPD0gLWNhbnZhcy53aWR0aCAtIDEwMCkge1xuICAgICAgICAgICAgICAgIG9ic3RhY2xlLmRlc3Ryb3kgPSB0cnVlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL3JlbW92ZXMgb2JqZWN0IGZyb20gYXJyYXkgdG8gY2xlYW4gY29sbGlzaW9uIGRldGVjdGlvbiBsYXRlclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iakNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9ic3RhY2xlID0gb2JqQ29sbGVjdGlvbltpXTtcbiAgICAgICAgICAgIGlmIChvYnN0YWNsZS5kZXN0cm95ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgb2JqQ29sbGVjdGlvbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfVxuICAgIGJhY2tncm91bmQoKTtcbiAgICBnYW1lSW5zdHJ1Y3Rpb25zKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PntcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgc3RhcnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGdhbWVMb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBjaGVja0lucHV0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/bit_maximo.js\n");

/***/ })

/******/ });
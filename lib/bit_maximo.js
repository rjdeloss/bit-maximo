//audio
const audio = document.getElementById('audio');
let audioActive = false;

//canvas
const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');
canvas.width = 640; 
canvas.height = 400; 

// background image
const img = new Image();
img.src = "./assets/background2.png";

// colors
const colorArray = ['#0095dd', '#dd1a00', '#63dd00']; 
let currentColor = 0;
let randomColor = Math.floor(Math.random() * 3);
let color;
let randColor;
let gameLoop = false;

//character 
let character = {
    height: 112,
    width: 64,
    x: 175,
    y: 300,
    jumping: false,
    sliding: false,
    diving: false,
    hurt: false,
    y_velocity: 0,
    color: colorArray[currentColor],
};

//collision objects
class Collection {
    constructor(amtColor) {
        this.color = Math.floor(Math.random() * amtColor);
        this.type =  Math.floor(Math.random() * 3);
        this.x =  650 //((Math.random() * (100)) + 640);
        this.collided = false;
        this.destroy = false; 
        this.drawJumpingObject = this.drawJumpingObject.bind(this)
        this.drawDivingObject = this.drawDivingObject.bind(this)
        this.drawSlidingObject = this.drawSlidingObject.bind(this)
    }

    drawJumpingObject(objX, randColor) {
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 170, 60, 140)
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 305, 60, 60);
        ctx.fill();
        ctx.closePath();
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    drawSlidingObject(objX, randColor) {
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 290, 60, 75);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 170, 60, 120);
        ctx.fill();
        ctx.closePath();
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    drawDivingObject (objX, randColor) {
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 200, 60, 130);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = randColor;
        ctx.globalAlpha = 1;
        ctx.rect(objX, 325, 60, 40);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 170, 60, 40);
        ctx.fill();
        ctx.closePath();
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    //collision detection 
    checkCollision(character) {
        let obstacleX = this.x; 

        if (obstacleX > character.x + character.width || obstacleX < character.x) {
            return false;
        } else {
            if (this.color == currentColor) {
                if ((character.jumping && this.type == 0) || (character.diving && this.type == 1) || (character.sliding && this.type == 2)) {
                    return false;
                }
            }
            return true;
        }
    }

    render() {
        switch (this.type) {
            case 0:
                this.drawJumpingObject(this.x, colorArray[this.color]);
                break; 
            case 1:
                this.drawDivingObject(this.x, colorArray[this.color]); 
                break;
            case 2:
                this.drawSlidingObject(this.x, colorArray[this.color]);
                break;
        }
    }
    
}

//character controls
const input = {
     A: false,
     S: false,
     D: false,
     UP: false,
     DOWN: false,
     RIGHT: false,
     M: false,
     ENTER: false,
     keyListener: (e) => {
        e.preventDefault();

         if (!audioActive) {
             audioActive = true;
             audio.play();
         }
         let key_state = (e.type == 'keydown') ? true : false;
         const key = e.keyCode; 
         switch(key){
             case 65: 
             input.A = key_state; 
             break;
             case 83: 
             input.S = key_state;
             break;
             case 68: 
             input.D = key_state;
             break;
             case 38: 
             input.UP = key_state;
             break;
             case 39: 
             input.RIGHT = key_state;
             break;
             case 40: 
             input.DOWN = key_state;
             break;
             case 77: 
             input.M = key_state;
             break;
             case 13: 
             input.ENTER = key_state;
             break;
             default: return false; 
            }
        }
    };

//character actions
const checkInput = () => {
    //character jumping
    if (input.UP && character.jumping == false) {
        character.y_velocity -= 20; 
        character.jumping = true;
    } else if (!input.UP && character.jumping == true && character.y == 300) {
        character.jumping = false;
    }
    
    //character sliding
    if (input.RIGHT == false) {
        if (input.DOWN && character.sliding == false) {
            [character.height, character.width] = [character.width, character.height];
            character.sliding = true;
        } else if (!input.DOWN && character.sliding == true) {
            [character.width, character.height] = [character.height, character.width];
            character.sliding = false;
        }
    }
    
    //character diving
    if (input.DOWN == false) {
        if (input.RIGHT && character.diving == false) {
            [character.height, character.width] = [character.width, character.height];
            character.diving = true;
        } else if (!input.RIGHT && character.diving == true) {
            [character.width, character.height] = [character.height, character.width];
            character.diving = false;
        }
    }
    
    //color switching 
    if (input.A) {
        input.A = false;
        currentColor = 0;
        // character.color = colorArray[currentColor];
    } else if (input.S) {
        input.S = false; 
        currentColor = 1;
        character.color = colorArray[currentColor];
    } else if (input.D) {
        input.D = false; 
        currentColor = 2;
        character.color = colorArray[currentColor];
    }
    
    //audio 
    if (input.M) {
        input.M = false; 
        audio.paused ? audio.play() : audio.pause();
    }
    
    //physics behind jumping
    character.y_velocity += 1.1; 
    character.y += character.y_velocity;
    
    if (character.y > 300 - 16 - 32) {
        character.jumping = false;
        character.y = 300 - 16 - 32;
        character.y_velocity = 0;
        if (character.sliding) {
            character.y = 300;
        } else if (character.diving) {
            character.y = 250;
        }
    }
    
    
    window.addEventListener('keydown', input.keyListener);
    window.addEventListener('keyup', input.keyListener);
    window.requestAnimationFrame(checkInput);
}


drawCharacter = (x= character.x, y=character.y, width= character.width, height = character.height, color = colorArray[currentColor]) => {
   if (character.hurt == true) {
       ctx.beginPath();
       ctx.fillStyle = "orange";
       ctx.rect(x, y, width, height);
       ctx.fill();
       ctx.strokeStyle = '#dd1a00';
       ctx.stroke();
       ctx.closePath();    
   } else {
       ctx.beginPath();
       ctx.fillStyle = color;
       ctx.rect(x, y, width, height);
       ctx.fill();
       ctx.strokeStyle = '#ffffff';
       ctx.stroke();
       ctx.closePath();  
        ctx.beginPath();
   }
}


drawFloor = () => {
    ctx.beginPath();
    ctx.strokeStyle = "#202830";
    ctx.lineWidth = 4;
    ctx.moveTo(0, 365);
    ctx.lineTo(640, 365);
    ctx.stroke();
    ctx.closePath();
}


window.onload = function() {
    
    let x = 0; 
    let scrollSpeed = 3; 
    const objCollection = [];
    let obstacleCounter = 0;
    let score = 0;
    let colorChange = 1;
    let lives = 5;
    let start = false;
    let obstacleSpeed = 5;
    let obstacleGenerate = 1300;
    
    drawScore = () => {
        ctx.font = "bold 18px Helvetica"; 
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(10, 8, 120, 30);
        ctx.fill();
        ctx.closePath();
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = "orange";
        ctx.fillText("Score: " + obstacleCounter, 20, 30);
        window.requestAnimationFrame(drawScore);
    }
    
    drawLives = () => {
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(canvas.width - 100, 8, 90, 30); 
        ctx.fill();
        ctx.closePath();
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.beginPath();
        ctx.font = "bold 18px Helvetica"; 
        ctx.fillStyle = "orange";
        ctx.fillText("LIVES: " + lives, canvas.width - 90, 30);
        ctx.closePath();
        window.requestAnimationFrame(drawLives);
    }
    //sets the speed of obstacle creation and scalability of the game
    
    function startGame() {
        setInterval(() => {
            if (obstacleCounter === 15 || obstacleCounter === 30)  {
                colorChange++;
            } 
            // else if (((obstacleCounter % 10) === 0)) {
            //     obstacleSpeed+= 2;
            //     obstacleGenerate-= 400;
            //     console.log(`scroll speed: ${obstacleSpeed}`)
            // }
            objCollection.push(new Collection(colorChange));
            obstacleCounter++;
        }, 1300);
        loop();
    }

    function gameOver() {
        x = 0;
        obstacleCounter = 0;
        score = 0;
        colorChange = 1;
        lives = 5;
        start = false;
        document.location.reload();
        clearInterval(interval);
        
    }

    function gameInstructions() {
        // canvas modal
        ctx.beginPath();
        ctx.rect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 0, 0, 0.3 )";
        ctx.fill();
        ctx.closePath();
        //container
        ctx.beginPath();
        ctx.rect(64, 40, 512, 320);
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.strokeRect(64, 40, 512, 320);
        ctx.strokeStyle ="#0095dd"; 
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.closePath();
        //text
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.beginPath();
        ctx.font = "bold 24px Helvetica";
        ctx.fillStyle = "#0095dd";
        ctx.fillText("Welcome to Bit Maximo!", 170, 100);
        ctx.font = "20px Helvetica";
        ctx.fillText("Match the obstacle with the correct action", 120, 150);
        ctx.fillText("using up arrow to jump, right arrow to dive,", 120, 175);
        ctx.fillText("and down arrow to slide. Change the character", 120, 200);
        ctx.fillText("color with A S D to match the obstacle color.", 120, 225);
        ctx.font = "bold 24px Helvetica";
        ctx.fillText("press Enter", 240, 300);
        ctx.closePath();
        
        if (!gameLoop) {
            window.requestAnimationFrame(gameInstructions);
        }
    }

    function background() {
        // ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(img, x , 0); 
        ctx.drawImage(img, x + canvas.width + 4, 0);  
        x -= scrollSpeed; 
    
        if (x <= -canvas.width) x = 0;
        window.requestAnimationFrame(background);
    }

    function loop() {
        drawFloor();
        drawCharacter();
        //draws the obstacles from the class Collection
        for (let i = 0; i < objCollection.length; i++) {
            obstacle = objCollection[i];
            obstacle.render(); 
            obstacle.x -= obstacleSpeed; 

            // if (obstacleCounter % 10 === 0) {
            //     obstacleSpeed+= 2;
            //     console.log(obstacleSpeed);
            // }
            
            if (obstacle.checkCollision(character) && obstacle.collided == false) {
                console.log(`${obstacleCounter} collided`)
                character.hurt = true;
                ctx.clearRect(character.x, character.y, character.width, character.height);
                setTimeout(() => {
                    clearInterval();
                    character.hurt = false;
                }, 175);
                
                    console.log(lives);
                    lives--;
                    obstacle.collided = true;
            } else {
                score++;
            }

            if (lives == -1) {
                gameOver();
                gameLoop = false;
            }

            if (obstacle.x <= -canvas.width - 100) {
                obstacle.destroy = true; 
            }
        }
        //removes object from array to clean collision detection later
        for (let i = 0; i < objCollection.length; i++) {
            obstacle = objCollection[i];
            if (obstacle.destroy === true) {
                objCollection.splice(i, 1);
                i--;
            }
        }
        window.requestAnimationFrame(loop);
    }
    background();
    drawScore();
    drawLives();
    gameInstructions();

    window.addEventListener('keydown', (e) =>{
        if (e.keyCode === 13 && start == false) {
            gameLoop = true;
            start = true;
            startGame();
        }
    })
    checkInput();
}
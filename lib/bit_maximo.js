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
const minGap = 200; 
const maxGap = 400; 


//collision objects
class Collection {
    constructor(amtColor) {
        this.color = Math.floor(Math.random() * amtColor);
        this.type =  Math.floor(Math.random() * 3);
        this.x =  650 //((Math.random() * (100)) + 640);
        this.destroy = false; 
        this.drawJumpingObject = this.drawJumpingObject.bind(this)
        this.drawDivingObject = this.drawDivingObject.bind(this)
        this.drawSlidingObject = this.drawSlidingObject.bind(this)
    }

    drawJumpingObject(objX, randColor) {
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 170, 60, 140)
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 305, 60, 60)
        ctx.fill();
        ctx.closePath();
    }

    drawSlidingObject(objX, randColor) {
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 290, 60, 75)
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 170, 60, 120)
        ctx.fill();
        ctx.closePath();
    }

    drawDivingObject (objX, randColor) {
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 200, 60, 130)
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = randColor;
        ctx.globalAlpha = 1;
        ctx.rect(objX, 325, 60, 40)
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = randColor;
        ctx.rect(objX, 170, 60, 40)
        ctx.fill();
        ctx.closePath();
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

//character 
let character = {
    height: 112, 
    width: 64,
    x: 175,
    y: 300,
    jumping: false,
    sliding: false, 
    diving: false, 
    y_velocity: 0, 
    color: colorArray[currentColor],
};

//character controls
const input = {
     A: false,
     S: false,
     D: false,
     UP: false,
     DOWN: false,
     RIGHT: false,
     M: false,
     keyListener: (e) => {
        // e.preventDefault();

        //  if (!audioActive) {
        //      audioActive = true;
        //      audio.play();
        //  }
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
        if (input.DOWN && character.sliding == false) {
            character.height = 64; 
            character.width = 112;
            character.sliding = true;
        } else if (!input.DOWN && character.sliding == true) {
            character.height = 112; 
            character.width = 64;
            character.sliding = false;
        }
        
        //character diving
        if (input.DOWN == false) {
            if (input.RIGHT && character.diving == false) {
                character.height = 64;
                character.width = 112;
                character.diving = true;
            } else if (!input.RIGHT && character.diving == true) {
                character.height = 112; 
                character.width = 64;
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
        ctx.clearRect(x, y, width, height);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x, y, width, height);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.stroke()
        ctx.closePath();  
    }


drawFloor = () => {
    ctx.strokeStyle = "#202830";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 365);
    ctx.lineTo(640, 365);
    ctx.stroke();
}



window.onload = function() {
    
    let x = 0; 
    const scrollSpeed = 3; 
    const objCollection = [];
    let obstacleCounter = 0;
    let colorChange = 1;


    setInterval(() => {
        if (obstacleCounter === 20 || obstacleCounter === 40)  {
            colorChange++;
        }
        objCollection.push(new Collection(colorChange));
        obstacleCounter++;
    }, 
    1200
    )
    

    function loop() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(img, x , 0); 
        ctx.drawImage(img, x + canvas.width + 4, 0);  
        x -= scrollSpeed; 

        if (x <= -canvas.width) x = 0;
        window.requestAnimationFrame(loop);

        drawCharacter();
        drawFloor();

        //draws the obstacles from the class Collection
        for (let i = 0; i < objCollection.length; i++) {
            obstacle = objCollection[i];
            obstacle.render(); 
            obstacle.x -= 5; 
            if (obstacle.x <= -canvas.width - 100) {
                obstacle.destroy = true; 
            }
        }
        //removes object from array to clean collision detection later
        // for (let i = 0; i < objCollection.length; i++) {
        //     obstacle = objCollection[i];
        //     if (obstacle.destroy === true) {
        //         objCollection.splice(i, 1);
        //         i--;
        //     }
        // }

        // console.log(objCollection.length)
    }
    loop();
    checkInput();
}



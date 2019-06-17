//audio
const audio = document.getElementById('audio');
let audioActive = false;

const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');
canvas.width = 640; 
canvas.height = 400; 

// colors
const colorArray = ['#0095dd', '#dd1a00', '#63dd00']; 
let currentColor = 0;

//collision objects
let objectArray =[];

// background image
const img = new Image();
img.src = "./assets/background2.png";

//character 
let character = {
    height: 112, 
    width: 64,
    x: 175,
    y: 300,
    // newH: this.height, 
    // newW: this.width,
    jumping: true,
    sliding: true, 
    diving: true, 
    y_velocity: 0, 
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
        e.preventDefault();

         if (!audioActive) {
             audioActive = true;
             audio.play();
         }
         let key_state = (e.type == 'keydown') ? true:false;
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
    }

    //character sliding
    if (input.DOWN && character.sliding == false) {
        character.height -= 56; 
        character.width += 32;
        character.sliding = true;
        // drawCharacter();
    }

    //character diving
    if (input.RIGHT && character.diving == false) {
        character.height -= 56;
        character.width += 32;
        character.sliding = true;
    }

    //color switching 
    if (input.A) {
        input.A = false;
        currentColor = 0;
    } else if (input.S) {
        input.S = false; 
        currentColor = 1; 
    } else if (input.D) {
        input.D = false; 
        currentColor = 2;
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
    }

    window.requestAnimationFrame(checkInput);
}
// updateCharacter = () => {
//     ctx.clearRect(character.x, character.y, character.height, character.width);
//     ctx.beginPath();
//     ctx.rect(character.x, character.y, character.width, character.height);
//     ctx.fill();
//     ctx.fillStyle = '#0095dd';
//     ctx.closePath();
// }

drawCharacter = () => {
    ctx.clearRect(character.x, character.y, character.width, character.height);
    ctx.beginPath();
    ctx.rect(character.x, character.y, character.width, character.height); 
    ctx.fill(); 
    ctx.fillStyle = '#0095dd';
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



window.addEventListener('keydown', input.keyListener);
window.addEventListener('keyup', input.keyListener);
window.onload = function() {
    
    let x = 0; 
        

    const scrollSpeed = 3; 
    

    function loop() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(img, x , 0); 
        ctx.drawImage(img, x + canvas.width + 4, 0); 
        x -= scrollSpeed; 

        if (x <= -canvas.width) x = 0;
        window.requestAnimationFrame(loop);
        drawCharacter();
        drawFloor();
    }
    loop();
    checkInput();
}



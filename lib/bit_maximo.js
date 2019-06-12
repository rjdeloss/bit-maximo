const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');

canvas.width = 1000; 
canvas.height = 570; 

const img = new Image();

img.src = "./assets/background2.png";


window.onload = function() {
    
    let x = 0; 
        

    const scrollSpeed = 3; 
    const drawDiveObstacle = () => {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(800,100, 100, 125);
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.fillRect(800,225, 100, 175);
        ctx.fillStyle = "red";
        ctx.fillRect(800, 400, 100, 125);
        ctx.closePath(); 
    }

    const drawJumpObstacle = () => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
        ctx.fillRect(500, 100, 100, 300);
        ctx.fillStyle = "green";
        ctx.fillRect(500, 400, 100, 125);
        ctx.closePath(); 
    }
    const drawSlideObstacle = () => {
        ctx.fillStyle = "blue";
        ctx.fillRect(200, 100, 100, 300);
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect(200, 400, 100, 125);
    }

    function loop() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(img, x , 0); 
        ctx.drawImage(img, x + canvas.width + 4, 0); 
        x -= scrollSpeed; 

        if (x <= -canvas.width) x = 0;
        window.requestAnimationFrame(loop);
        drawDiveObstacle();
        drawJumpObstacle();
        drawSlideObstacle();
    }
    loop();
}



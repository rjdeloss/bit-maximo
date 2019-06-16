const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');

canvas.width = 640; 
canvas.height = 400; 

const img = new Image();

img.src = "./assets/background2.png";


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

    }
    loop();
}



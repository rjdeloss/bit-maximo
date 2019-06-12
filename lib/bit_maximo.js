const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');

canvas.width = 900; 
canvas.height = 600; 

const img = new Image();

img.src = "./assets/blue_background.jpg";

window.onload = function() {
    let imgWidth = 0; 

    const scrollSpeed = 3; 

    function loop() {
        ctx.drawImage(img,imgWidth, 0); 
        ctx.drawImage(img, imgWidth - canvas.width, 0); 
        imgWidth += scrollSpeed; 

        if (imgWidth == canvas.width) imgWidth = 0;

        window.requestAnimationFrame(loop);
    }
    
    loop();
}
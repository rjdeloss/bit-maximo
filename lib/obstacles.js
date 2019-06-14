class Obstacles {

    drawDiveObstacle = () => {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(800, 100, 100, 125);
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.fillRect(800, 225, 100, 175);
        ctx.fillStyle = "red";
        ctx.fillRect(800, 400, 100, 125);
        ctx.closePath();
    }

    drawJumpObstacle = () => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
        ctx.fillRect(500, 100, 100, 300);
        ctx.fillStyle = "green";
        ctx.fillRect(500, 400, 100, 125);
        ctx.closePath();
    }

    drawSlideObstacle = () => {
        ctx.fillStyle = "blue";
        ctx.fillRect(200, 100, 100, 300);
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect(200, 400, 100, 125);
    }

    render() {
        
    }
}

export default Obstacles; 
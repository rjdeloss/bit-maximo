//the background obeject that will be scrolling on the canvas
const BACGROUND = {
    src: "./assets/background2.png",
    speed: 3, 
    pos: 0,
    dx: 1600,
};


class Background {
    constructor(ctx) {
        this.background = BACGROUND;
        this.speed = this.background.speed; 
        this.pos = this.background.pos; 
        this.dx = this.background.dx;
        this.ctx = ctx; 

        this.img = new Image();
        this.img.src = this.background.src; 
        this.img.onload = () => {
            this.ctx.drawImage(this.img, 0, 0)
        };

        this.draw = this.draw.bind(this);
        this.render = this.render.bind(this);
        
    }

    draw() {
        this.ctx.drawImage(img, this.pos, 0);
        this.ctx.drawImage(img, this.pos + 1000 + 4, 0); 
    }

    render(speed = 0) {
        this.ctx.clearRect(0, 0, 1000, 570); 
        this.draw();

    }

}

export default Background; 
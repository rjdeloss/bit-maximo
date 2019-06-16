import Background from './background'; 
import Player from './player'; 


class Game {
    constructor(canvas) {
        this.canvas = canvas; 
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 1000; 
        this.canvas.height = 570;

        this.startGame(); 
        this.createElements(); 
        this.startBackground();
    }

    startGame() {

    }

    createElements() {

    }

    startBackground() {
        this.background = new Background(ctx);
    }

    renderBackground() {
        this.background
    }

    render() {
        this.ctx.clearRect(0,0,1000,570); 


    }
}
import Sprite from "./Sprite.js";

class Ball extends Sprite {
    
    bounce(canvasWidth, canvasHeight) {
        if (this.x + this.width > canvasWidth || this.x < 0) {
            this.dx *= -1;
        }
        if (this.y < 0) {
            this.dy *= -1;
        } else if (this.y + this.height > canvasHeight) {
            this.dy = 0;
            return false;
        }
        return true;
    }

    collide(paddle) {
        if (this.intersects(paddle)) {
            this.dy *= -1;
        }

    }
}

export default Ball;
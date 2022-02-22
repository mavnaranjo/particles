import Input from "./input.js";
import Particle from "./particle.js";

const UP = 'KeyW',
    DOWN = 'KeyS',
    LEFT = 'KeyA',
    RIGHT = 'KeyD';

export default class Player extends Particle {
    constructor(position, speed, size, name) {
        super(position, speed, size, name);

        this.input = new Input();

        this.input.add(UP);
        this.input.add(DOWN);
        this.input.add(LEFT);
        this.input.add(RIGHT);
    }

    move(timestamp) {
        if (this.alive) {
            const speed = 2 * timestamp;

            if (this.input.active(UP)) {
                this.speed.y -= speed;
            }
            if (this.input.active(DOWN)) {
                this.speed.y += speed;
            }
            if (this.input.active(LEFT)) {
                this.speed.x -= speed;
            }
            if (this.input.active(RIGHT)) {
                this.speed.x += speed;
            }

            this.position.x += timestamp * this.speed.x / 1000;
            this.position.y += timestamp * this.speed.y / 1000;
        }
    }

    update(timestamp) {
        
    }
}
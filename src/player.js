import Input from "./input.js";
import Particle from "./particle.js";

export default class Player extends Particle {
    constructor(position, speed, size, name) {
        super(position, speed, size, name);

        this.input = new Input();
    }

    move(timestamp) {
        if (this.alive) {
            let speed = 2 * timestamp,
                vector = this.input.vector();

            this.speed.x += speed * vector.x;
            this.speed.y += speed * vector.y;

            this.position.x += timestamp * this.speed.x / 1000;
            this.position.y += timestamp * this.speed.y / 1000;
        }
    }

    update(timestamp) {
        
    }
}
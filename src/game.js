import Camera from './camera.js';
import Particle from './particle.js';

export default class Game {
    constructor(context) {
        this.camera = new Camera(context);

        this.particles = Array.apply(null, Array(10)).map(() => new Particle());

        this.timestamp = 0;

        this.boundLoop = this.loop.bind(this);
    }

    resize(width, height) {
        this.camera.width = width;
        this.camera.height = height;
    }

    loop(timestamp) {
        let delta = timestamp - this.timestamp;
        this.timestamp = timestamp;

        this.update(delta);

        this.draw();

        requestAnimationFrame(this.boundLoop);
    }

    update(delta) {
        this.particles.forEach(particle => {
            particle.update(delta);
        });
    }

    draw() {
        this.camera.width = window.innerWidth;
        this.camera.height = window.innerHeight;
        this.camera.clear();

        this.particles.forEach(particle => {
            this.camera.draw(particle);
        });
    }
}
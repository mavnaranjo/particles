import Camera from './camera.js';
import Particle from './particle.js';
import Player from './player.js';

export default class Game {
    constructor(context) {

        this.particles = Array.apply(null, Array(10)).map(() => new Particle());

        this.player = new Player(
            { x: 0, y: 0},
            { x: 0, y: 0},
            100,
            'Player'
        );

        this.camera = new Camera(context, this.player);

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

        this.player.update(delta);

        this.camera.update(delta);
    }

    draw() {
        this.camera.width = window.innerWidth;
        this.camera.height = window.innerHeight;
        this.camera.clear();

        this.particles.forEach(particle => {
            this.camera.draw(particle);
        });

        this.camera.draw(this.player);
    }
}
import Camera from './camera.js';
import Particle from './particle.js';
import Player from './player.js';
import { circlesCollide } from './physics.js';

export default class Game {
    constructor(context) {

        this.particles = Array.apply(null, Array(10)).map(() => new Particle());

        this.player = new Player(
            { x: 0, y: 0},
            { x: 0, y: 0},
            50,
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

        this.move(delta);

        this.update(delta);

        this.draw();

        requestAnimationFrame(this.boundLoop);
    }

    move(delta) {
        this.particles.forEach(particle => {
            particle.move(delta);
        });

        this.player.move(delta);

        this.camera.move(delta);
    }

    update(delta) {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                if (circlesCollide(this.particles[i], this.particles[j])) {
                    this.particles[i].collided(this.particles[j]);
                }
            }

            if (circlesCollide(this.particles[i], this.player)) {
                this.particles[i].collided(this.player);
            }
        }

        this.particles = this.particles.sort((p1, p2) => p1.size - p2.size);
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
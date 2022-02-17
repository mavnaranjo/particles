export default class Particle {
    constructor(position, speed, size, name) {
        this.name = name;

        this.color = '#' + (Math.random()*0xFFFFFF<<0).toString(16);

        this.position = position ?? {
            x: 1000 * (Math.random() + Math.random()) / 2 - 500,
            y: 1000 * (Math.random() + Math.random()) / 2 - 500
        };

        this.speed = speed ?? {
            x: 50 * Math.random() - 25,
            y: 50 * Math.random() - 25
        };

        this.size = size ?? 50 * Math.random() + 10;
    }

    update(timestamp) {
        this.speed.x += 50 * Math.random() - 25;
        this.speed.y += 50 * Math.random() - 25;

        this.position.x += timestamp * this.speed.x / 1000;
        this.position.y += timestamp * this.speed.y / 1000;
    }

    draw(camera) {
        camera.context.beginPath();

        camera.context.arc(this.position.x, this.position.y, this.size * camera.zoom, 0, 2 * Math.PI, false);

        camera.context.fillStyle = this.color;
        camera.context.fill();

        camera.context.lineWidth = 0.1 * this.size;
        camera.context.strokeStyle = 'black';
        camera.context.stroke();
    }
}
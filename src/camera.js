export default class Camera {
    constructor(context, track, zoom, width, height) {
        this.context = context;

        this.track = track;

        this.zoom = zoom || 1;
        this.width = width;
        this.height = height;

        this.position = {
            x: 0,
            y: 0
        };
    }

    clear() {
        this.context.resetTransform();

        this.context.clearRect(0, 0, this.width, this.height);

        this.context.setTransform(
            this.zoom,
            0,
            0,
            this.zoom,
            this.width / 2 - this.position.x,
            this.height / 2 - this.position.y
        );
    }

    move(timestamp) {
        if (this.track) {
            this.position = this.track.position;
        }
    }

    draw(element) {
        element.draw(this);
    }
}
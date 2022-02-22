export default class Input {
    constructor() {
        document;
        this.keys = {};

        document.addEventListener('keydown', (e) => {
            if (e.code in this.keys) {
                this.keys[e.code] = true;
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.code in this.keys) {
                this.keys[e.code] = false;
            }
        });
    }

    add(code) {
        this.keys[code] = false;
    }

    remove(code) {
        delete this.keys[code];
    }

    active(code) {
        return this.keys[code] ?? false;
    }
}
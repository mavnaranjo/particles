import merge from './utils.js';

export default class Input {

    static Codes = {
        'ArrowLeft':  { x: -1, y:  0 },
        'KeyA':       { x: -1, y:  0 },
        'ArrowRight': { x:  1, y:  0 },
        'KeyD':       { x:  1, y:  0 },
        'ArrowUp':    { x:  0, y: -1 },
        'KeyW':       { x:  0, y: -1 },
        'ArrowDown':  { x:  0, y:  1 },
        'KeyS':       { x:  0, y:  1 },
    };

    constructor() {
        this.vectors = {};

        document.addEventListener('keydown', e => {
            if (e.code in Input.Codes) {
                this.vectors[e.code] = Input.Codes[e.code];
            }
        });

        document.addEventListener('keyup', e => {
            if (e.code in Input.Codes) {
                delete this.vectors[e.code];
            }
        });

        let getVector = e => {
            if (e.pressure > 0) {
                this.vectors['pointer'] = {
                    x: Math.min(1, 2 * (e.x - document.body.clientWidth / 2) / document.body.clientWidth),
                    y: Math.min(1, 2 * (e.y - document.body.clientHeight / 2) / document.body.clientWidth)
                };
            } else {
                delete this.vectors['pointer'];
            }
        };

        document.addEventListener('pointerdown', getVector);

        document.addEventListener('pointermove', getVector);

        document.addEventListener('pointerup', getVector);
    }

    vector() {
        return Object.values(this.vectors).reduce((cum, value) => {
            return {
                x: cum.x + value.x,
                y: cum.y + value.y
            };
        }, { x: 0, y: 0});
    }
}
import Game from './game.js';

import { circleGrow } from "./physics.js";

window.circleGrow = circleGrow;

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const game = new Game(context);

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    game.resize(canvas.width, canvas.height);
}

resizeCanvas();

requestAnimationFrame(game.boundLoop);
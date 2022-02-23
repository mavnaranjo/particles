import Game from './game.js';

// setup game logic

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const game = new Game(context);

// handle resizing

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    game.resize(canvas.width, canvas.height);
}

resizeCanvas();

// full screen for mobile

document.addEventListener(
    'touchend',
    e => {
        e.preventDefault();
        document.documentElement.requestFullscreen();
    },
    { once: true }
);

// go!

requestAnimationFrame(game.boundLoop);
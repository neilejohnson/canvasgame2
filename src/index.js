import Game from './game.js'

var canvas = document.querySelector('canvas');

const gameWidth = 800;
const gameHeight = 600;

canvas.width = gameWidth;
canvas.height = gameHeight;

var ctx = canvas.getContext('2d');

let game = new Game();

let lastTime = 0;

function gameloop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
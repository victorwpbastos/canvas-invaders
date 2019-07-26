import Paddle from './paddle.js';
import Ball from './ball.js';
const container = document.querySelector('.container');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let lastTime = 0;

canvas.width = 600;
canvas.height = 400;
container.appendChild(canvas);

let paddle = new Paddle(canvas, ctx);
let ball = new Ball(canvas, ctx);

document.addEventListener('keydown', e => {
	if (e.keyCode === 32) {
		ball.toggle();
		paddle.toggle();
	}
});

function loop(timestamp) {
	let delta = timestamp - lastTime;

	lastTime = timestamp;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	paddle.draw().update(delta);
	ball.draw().update(delta, paddle);

	requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
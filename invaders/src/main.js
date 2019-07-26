import Enemy from './enemy.js';
import Shooter from './shooter.js';

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');
let lastTime = 0;

canvas.width = 800;
canvas.height = 400;

let enemies = [
	new Enemy(canvas, ctx, 20, 20),
	new Enemy(canvas, ctx, 300, 60),
	new Enemy(canvas, ctx, 600, 100)
];

let shooter = new Shooter(canvas, ctx, enemies);

function loop(timestamp) {
	let delta = timestamp - lastTime;

	lastTime = timestamp;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	enemies = enemies.filter(e => !e.destroyed);
	enemies.forEach(e => e.update(delta));
	shooter.update(delta, enemies);

	requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
import SpriteSheet from './spritesheet.js';

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#screen');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

function loadImage(url) {
	return new Promise(resolve => {
		const img = new Image();

		img.addEventListener('load', () => resolve(img));
		img.src = url;
	});
}

loadImage('src/assets/sprites/girl.png').then(image => {
	const sprites = new SpriteSheet(image, 56, 70);

	sprites.define('girl1', 0, 8);
	sprites.define('girl2', 56, 8);
	sprites.define('girl3', 112, 8);
	sprites.define('girl4', 0, 88);
	sprites.define('girl5', 56, 88);
	sprites.define('girl6', 112, 88);
	sprites.define('girl7', 0, 164);
	sprites.define('girl8', 56, 160);
	sprites.define('girl9', 112, 162);
	// sprites.define('girl8', 56, 168);
	// sprites.define('girl9', 112, 168);

	let posX = 20;
	let posY = 330;

	sprites.draw('girl7', ctx, posX, posY);
	setTimeout(() => {
		sprites.draw('girl8', ctx, posX, posY);
	}, 1000);
	setTimeout(() => {
		sprites.draw('girl9', ctx, posX, posY);
	}, 2000);

	// document.addEventListener('keydown', e => {
	// 	console.log(e.keyCode);
	// 	if (e.keyCode === 38) {
	// 		if (posY <= 0) { return; }
	// 		posY -= 5;
	// 	}

	// 	if (e.keyCode === 40) {
	// 		if (posY >= canvas.height - 72) { return; }
	// 		posY += 5;
	// 	}

	// 	if (e.keyCode === 37) {
	// 		if (posX <= 0) { return; }
	// 		posX -= 5;
	// 	}

	// 	if (e.keyCode === 39) {
	// 		if (posX >= canvas.width - 56) { return; }
	// 		posX += 5;
	// 	}
	// });

	// let arr = ['girl1', 'girl2', 'girl3', 'girl4', 'girl5', 'girl6', 'girl7', 'girl8', 'girl9'];
	// let i = 0;
	// let indo = true;

	// setInterval(() => {
	// 	if (indo) {
	// 		i++;
	// 	} else {
	// 		i--;
	// 	}

	// 	if (i === arr.length - 1) {
	// 		indo = false;
	// 	} else if (i === 0) {
	// 		indo = true;
	// 	}
	// }, 300);

	// function update() {
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	sprites.draw(arr[i], ctx, posX, posY);

	// 	requestAnimationFrame(update);
	// }

	// update();
});
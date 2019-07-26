export default class Bullet {
	constructor(canvas, ctx, posX, posY) {
		/** @type {HTMLCanvasElement} */
		this.canvas = canvas;

		/** @type {CanvasRenderingContext2D} */
		this.ctx = ctx;

		/** @type {Number} */
		this.width = 5;

		/** @type {Number} */
		this.height = 5;

		/** @type {Number} */
		this.posX = posX;

		/** @type {Number} */
		this.posY = posY;

		/** @type {Number} */
		this.speed = 0.5;

		/** @type {Number} */
		this.maxSpeed = 0.5;

		/** @type {Boolean} */
		this.destroyed = false;
	}

	draw() {
		this.ctx.fillStyle = 'red';
		this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
	}

	update(delta, enemies = []) {
		this.posY -= this.speed * delta;

		let topOfBullet = Math.floor(this.posY);
		let leftOfBullet = Math.floor(this.posX);
		let rightOfBullet = Math.floor(this.posX + this.width);

		enemies.forEach(enemy => {
			let bottomOfEnemy = enemy.posY + enemy.height;
			let leftOfEnemy = enemy.posX;
			let rightOfEnemy = enemy.posX + enemy.width;

			if (topOfBullet < bottomOfEnemy && rightOfBullet >= leftOfEnemy && leftOfBullet <= rightOfEnemy) {
				enemy.kill(leftOfBullet, rightOfBullet, leftOfEnemy, rightOfEnemy);
				this.destroyed = true;
				console.log('hi', enemies.length);
			}
		});

		this.draw();
	}
}
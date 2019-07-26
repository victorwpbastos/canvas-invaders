import Bullet from './bullet.js';

export default class Shooter {
	constructor(canvas, ctx) {
		/** @type {HTMLCanvasElement} */
		this.canvas = canvas;

		/** @type {CanvasRenderingContext2D} */
		this.ctx = ctx;

		/** @type {Number} */
		this.width = 40;

		/** @type {Number} */
		this.height = 10;

		/** @type {Number} */
		this.posX = this.canvas.width / 2 - this.width / 2;

		/** @type {Number} */
		this.posY = this.canvas.height - this.height;

		/** @type {Number} */
		this.speed = 0;

		/** @type {Number} */
		this.maxSpeed = 0.3;

		/** @type {Object} */
		this.edges = {
			LEFT: 0,
			RIGHT: this.canvas.width - this.width
		};

		/** @type {Object} */
		this.keyCodes = {
			LEFT: 37,
			RIGHT: 39,
			SHOOT: 32
		};

		/** @type {Bullet[]} */
		this.bullets = [];

		document.addEventListener('keydown', e => this.handleKeys(e));
		document.addEventListener('keyup', e => this.stopMoving(e));
	}

	handleKeys(e) {
		switch (e.keyCode) {
			case this.keyCodes.LEFT:
				this.moveLeft();
				break;
			case this.keyCodes.RIGHT:
				this.moveRight();
				break;
			case this.keyCodes.SHOOT:
				this.shoot();
				break;
		}
	}

	moveLeft() {
		this.speed = -this.maxSpeed;
	}

	moveRight() {
		this.speed = this.maxSpeed;
	}

	stopMoving(e) {
		if (e.keyCode === this.keyCodes.LEFT || e.keyCode === this.keyCodes.RIGHT) {
			this.speed = 0;
		}
	}

	shoot() {
		let bulletPosX = this.posX + 17.5;
		let bulletPosY = this.posY - 15;

		this.bullets.push(new Bullet(this.canvas, this.ctx, bulletPosX, bulletPosY));
	}

	draw() {
		this.ctx.fillStyle = 'seagreen';
		this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
		this.ctx.fillRect(this.posX + 15, this.posY - 10, 10, 10);
	}

	update(delta, enemies) {
		this.posX += this.speed * delta;

		if (this.posX < this.edges.LEFT) {
			this.posX = this.edges.LEFT;
		}

		if (this.posX > this.edges.RIGHT) {
			this.posX = this.edges.RIGHT;
		}

		if (this.bullets.length > 0) {
			this.bullets
				.filter(b => !b.destroyed)
				.forEach(bullet => bullet.update(delta, enemies));
		}

		this.draw();
	}
}
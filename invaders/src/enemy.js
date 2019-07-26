export default class Enemy {
	constructor(canvas, ctx, posX, posY) {
		/** @type {HTMLCanvasElement} */
		this.canvas = canvas;

		/** @type {CanvasRenderingContext2D} */
		this.ctx = ctx;

		/** @type {Number} */
		this.width = 50;

		/** @type {Number} */
		this.height = 5;

		/** @type {Number} */
		this.posX = posX;

		/** @type {Number} */
		this.posY = posY;

		/** @type {Number} */
		this.speed = 0.2;

		/** @type {Object} */
		this.edges = {
			LEFT: 0,
			RIGHT: this.canvas.width - this.width
		};

		/** @type {Boolean} */
		this.destroyed = false;
	}

	kill(a, b, c, d) {
		// console.log(a, b, c, d);
		// this.destroyed = true;
		console.log(this);
	}

	draw() {
		this.ctx.fillStyle = 'lightgreen';
		this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
	}

	update(delta) {
		this.posX += this.speed * delta;

		if (this.posX <= this.edges.LEFT || this.posX >= this.edges.RIGHT) {
			this.speed = -this.speed;
		}

		this.draw();
	}
}
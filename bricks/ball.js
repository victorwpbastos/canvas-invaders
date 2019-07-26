export default class Ball {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.size = 5;
		this.speed = { x: 0.15, y: 0.15 };
		this.maxSpeed = 0.5;
		this.isStopped = false;

		this.position = {
			x: Math.floor(Math.random() * this.canvas.width) + 1,
			y: Math.floor(Math.random() * this.canvas.height) + -20
		};

		this.edges = {
			LEFT: this.size,
			RIGHT: this.canvas.width - this.size,
			TOP: this.size,
			BOTTOM: this.canvas.height - this.size
		};
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
		this.ctx.fillStyle = 'yellow';
		this.ctx.fill();
		this.ctx.closePath();

		return this;
	}

	toggle() {
		this.isStopped = !this.isStopped;
	}

	update(delta, paddle) {
		if (!this.isStopped) {
			this.position.x += this.speed.x * delta;
			this.position.y += this.speed.y * delta;

			if (this.position.x < this.edges.LEFT || this.position.x > this.edges.RIGHT) {
				this.speed.x = -this.speed.x;
			}

			if (this.position.y < this.edges.TOP) {
				this.speed.y = -this.speed.y;
			}

			if (this.position.y > this.edges.BOTTOM) {
				this.position.x = Math.floor(Math.random() * this.canvas.width) + 1;
				this.position.y = 10;
			}

			let topOfBall = this.position.y;
			let bottomOfBall = this.position.y + this.size;
			let topOfPaddle = paddle.position.y;
			let leftOfPaddle = paddle.position.x;
			let rightOfPaddle = paddle.position.x + paddle.width;

			if (bottomOfBall >= topOfPaddle && this.position.x >= leftOfPaddle && this.position.x + this.size <= rightOfPaddle) {
				this.speed.y = -this.speed.y;
				this.position.y = paddle.position.y - this.size;
			}
		}

		return this;
	}
}
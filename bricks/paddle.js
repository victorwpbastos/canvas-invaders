export default class Paddle {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.width = 100;
		this.height = 5;
		this.speed = { x: 0, y: 0 };
		this.maxSpeed = 0.5;
		this.isStopped = false;

		this.position = {
			x: this.canvas.width / 2 - this.width / 2,
			y: this.canvas.height - this.height - 10
		};

		this.edges = {
			LEFT: 0,
			RIGHT: this.canvas.width - this.width,
			TOP: 0,
			BOTTOM: this.canvas.height - this.height
		}

		this.keys = {
			RIGHT: 39,
			LEFT: 37
		};

		document.addEventListener('keydown', e => this.handleKeydown(e));
		document.addEventListener('keyup', e => this.stopMoving());
	}

	draw() {
		this.ctx.fillStyle = '#ffffff';
		this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

		return this;
	}

	update(delta) {
		if (!this.isStopped) {
			this.position.x += this.speed.x * delta;

			if (this.position.x < this.edges.LEFT) {
				this.position.x = this.edges.LEFT;
			}

			if (this.position.x > this.edges.RIGHT) {
				this.position.x = this.edges.RIGHT;
			}
		}

		return this;
	}

	moveLeft() {
		this.speed.x = -this.maxSpeed;
	}

	moveRight() {
		this.speed.x = this.maxSpeed;
	}

	stopMoving() {
		this.speed.x = 0;
		this.speed.y = 0;
	}

	toggle() {
		this.isStopped = !this.isStopped;
	}

	handleKeydown(e) {
		switch (e.keyCode) {
			case this.keys.LEFT:
				this.moveLeft();
				break;
			case this.keys.RIGHT:
				this.moveRight();
				break;
		}
	}
}
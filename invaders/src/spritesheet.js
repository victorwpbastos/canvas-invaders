export default class SpriteSheet {
	constructor(image, width, height) {
		this.image = image;
		this.width = width;
		this.height = height;
		this.sprites = new Map();
	}

	define(name, x, y) {
		this.sprites.set(name, { x, y });
	}

	draw(name, ctx, canvasX, canvasY) {
		const { x, y } = this.sprites.get(name);

		ctx.drawImage(this.image, x, y, this.width, this.height, canvasX, canvasY, this.width, this.height);
	}
}
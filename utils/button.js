export class Button {
	constructor(x, y, xf, yf, d, url, image, p) {
		this.p = p;
		this.xf = xf;
		this.yf = yf;
		this.x = this.xf(x);
		this.y = this.yf(y);
		this.d = d;
		this.url = url;
		this.image = this.p.loadImage(image);
	}
	render() {
		this.p.image(this.image, this.x, this.y, this.d, this.d);
	}
	update(x, y) {
		this.x = this.xf(x);
		this.y = this.yf(y);
	}
	click() {
		let ptr_x = this.p.mouseX || this.p.touchX;
		let ptr_y = this.p.mouseY || this.p.touchY;
		if (
			ptr_x > this.x - (this.image.width/2) &&
			ptr_x < this.x + (this.image.width/2) &&
			ptr_y > this.y - (this.image.height/2) &&
			ptr_y < this.y + (this.image.height/2)
		) 
		{
			window.location.href = this.url;
		}
	}
}

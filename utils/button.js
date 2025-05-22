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
		this.isHovered = false;
	}

	checkHover() {
		const ptr_x = this.p.mouseX;
		const ptr_y = this.p.mouseY;
		const halfD = this.d / 2;
		this.isHovered = (
			ptr_x > this.x - halfD &&
			ptr_x < this.x + halfD &&
			ptr_y > this.y - halfD &&
			ptr_y < this.y + halfD
		);
	}

	render() {
		this.checkHover();
		let scale = this.isHovered ? 1.15 : 1.0;
		this.p.push();
		this.p.translate(this.x, this.y);
		this.p.scale(scale);
		this.p.image(this.image, 0, 0, this.d, this.d);
		this.p.pop();
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

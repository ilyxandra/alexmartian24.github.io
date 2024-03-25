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
    if (
      this.p.mouseX > this.x &&
      this.p.mouseX < this.x + this.image.width &&
      this.p.mouseY > this.y &&
      this.p.mouseY < this.y + this.image.height
    ) {
      window.location.href = this.url;
    }
  }
}

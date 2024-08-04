class SeasonAttributes {
    constructor(image, color) {
	    this.image = image;
	    this.color = color;
    }
}

export const Seasons = {
    Summer: new SeasonAttributes("/static/trees/spring.png", "#f7b8e5"),
    Autumn: new SeasonAttributes("/static/trees/spring.png", "#f7b8e5"),
    Winter: new SeasonAttributes("/static/trees/winter.png", "#ffffff"),
    Spring: new SeasonAttributes("/static/trees/spring.png", "#f7b8e5"),
};

export class Tree {
    constructor(x, y, version, ground, p) {
    	this.p = p;
    	this.x = x;
    	this.y = y;
    	this.image = this.p.loadImage(version.image);
    	this.shedding = new Shedding(version.color, ground, p);
    }
    render() {
    	this.p.image(this.image, this.x, this.y);
    	this.shedding.render();
    }
    update(x, y, ground) {
    	this.x = x;
    	this.y = y;
    	this.shedding.update(ground);
    }
}

class Shedding {
    constructor(color, ground, p) {
    	this.p = p;
    	this.treeArr = [];
    	this.color = color;
    	this.ground = ground;
    } 
    render() {
    	let randint = this.p.random(0, 1);
    	let randomX = this.p.random(0, this.p.width / 2);
    	if (randint < 0.05) {
    	    this.createFlowers(randomX);
    	}
    	this.drawFlowersLoop();
    	this.cleanup();
    }
    update(ground) {
	    this.ground = ground;
    }
    createFlowers(xVal) {
	    let flower = new Flower(xVal, 70, this.color, this.p);
	    this.treeArr.push(flower);
    }
    drawFlowersLoop() {
	    for (let i = 0; i < this.treeArr.length; i++) {
	        this.treeArr[i].drawflower();
	        this.treeArr[i].fall();
	    }
    }
    cleanup() {
	    for (let i = 0; i < this.treeArr.length; i++) {
	        if (this.treeArr[i].y >= this.ground) {
		        this.treeArr.splice(i, 1);
	        }
	    }
    }
}

class Flower {
    constructor(xValue, yValue, color, p) {
	    this.p = p;
    	this.x = xValue;
    	this.y = yValue;
    	this.size = this.p.random(0, 12);
    	this.color = color;
    	this.angle = this.p.random(this.p.TWO_PI);
    	this.amplitude = this.p.random(5, 20);
    	this.speed = this.p.random(1, 3);
    }
    drawflower() {
    	this.p.fill(this.color);
    	this.p.ellipse(this.x, this.y, 8, this.size);
    }
    fall() {
    	this.x += (this.p.cos(this.angle) * this.amplitude) / 5;
    	this.angle += 0.05;
    	this.y += this.speed / 5;
    }
}

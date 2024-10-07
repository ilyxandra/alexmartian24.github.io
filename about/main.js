import { Seasons, Tree } from "../utils/tree.js";
import { Button } from "../utils/button.js";


let backgroundColor = "#5accf1";
var groundColor = "#ffffff";
var groundY = (height) => height - 80;
let treeHeight = (height) => height - 330;
let tree;
let dog;
let profile;
let back_button;

export const main = (p) => {
	p.setup = () => {
		p.createCanvas(window.innerWidth, window.innerHeight);

		tree = new Tree(250, treeHeight(p.height), Seasons.Winter, groundY(p.height), p);

		profile = p.loadImage("../static/me+poopy.jpg");
		
		back_button = new Button(
			p.width,
			p.height,
			(x) => 50,
			(_y) => 50,
			80,
			"../index.html",
			"../static/buttons/back_arrow.png",
			p,
		);
	};

	p.draw = () => {
		p.noStroke();
		p.imageMode(p.CENTER, p.CENTER);
		//background
		p.background(backgroundColor);

		// tree
		tree.render();

		//profile/dog pic
		p.push();
		p.imageMode(p.CENTER, p.CENTER);
		let aspectRatio = profile.width/profile.height;
		p.image(profile, p.width/2, p.height/2, aspectRatio*(p.height/2), p.height/2);
		p.pop();
		//ground
		p.fill(groundColor);
		p.rect(0, groundY(p.height), p.width, p.height);

		// about text
		p.fill(groundColor);
		p.textSize(50);
		p.textAlign(p.CENTER, p.CENTER);
        p.textFont("Garamond");
		p.text("About Page", p.width / 2, 50);
		p.textSize(20);
		p.text("Hello! I'm an NYU Student majoring in", p.width / 2, 100);
		p.text("CS with a minor in Studio Art. I love", p.width / 2, 125);
		p.text("all kinds of puzzles, my dog, Pepper, and", p.width / 2, 150);
		p.text("drawing.", p.width / 2, 175);

		back_button.render();
	};

	p.windowResized = () => {
		p.resizeCanvas(window.innerWidth, window.innerHeight);
		tree.update(250, treeHeight(p.height), groundY(p.height));
	};

	p.mouseClicked = (_) => {
    	back_button.click();
    };
	p.touchStarted = (_) => {
    	back_button.click();
    };
};

new p5(main, document.getElementById("sketch"));


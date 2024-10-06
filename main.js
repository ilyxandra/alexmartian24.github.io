import { Seasons, Tree } from "./utils/tree.js";
import { Button } from "./utils/button.js";

var lightBlue = "#89adf5";
var groundColor = "#4d2600";
var darkPink = "#420431";
var groundY = (height) => height - 80;
var treeHeight = (height) => height - 330;
let profile;
let tree;
let buttonArr = [];

export const main = (p) => {
    p.setup = () => {
    	p.createCanvas(window.innerWidth, window.innerHeight);
    	tree = new Tree(250, treeHeight(p.height), Seasons.Spring, groundY(p.height), p);
        
    	profile = p.loadImage("static/me.jpg");
	    buttonArr.push(
    	    new Button(
        		p.width,
        		p.height,
        		(x) => x / 2 - 200,
        		(_y) => 200,
        		80,
        		"about/index.html",
        		"static/buttons/about.svg",
        		p,
    	    ),
    	    new Button(
        		p.width,
        		p.height,
        		(x) => x / 2 - 100,
        		(_y) => 200,
        		80,
        		"https://github.com/alexmartian24/",
        		"static/buttons/github.svg",
        		p,
    	    ),
	        new Button(
        		p.width,
        		p.height,
        		(x) => x / 2,
        		(_y) => 200,
        		80,
        		"https://www.linkedin.com/in/alexandramartin8024",
        		"static/buttons/linkedin.svg",
        		p,
	        ),
	        new Button(
        		p.width,
        		p.height,
        		(x) => x / 2 + 100,
        		(_y) => 200,
        		80,
        		"https://instagram.com/ilymartian",
        		"static/buttons/instagram.svg",
        		p,
	        ),
	        new Button(
        		p.width,
        		p.height,
        		(x) => x / 2 + 200,
        		(_y) => 200,
        		80,
        		"static/resume.pdf",
        		"static/buttons/resume.svg",
        		p,
	        ),
	    );
    };

    p.draw = () => {
    	p.noStroke();
        p.imageMode(p.CENTER, p.CENTER);
    	//background
    	p.background(lightBlue);
    	// tree
    	tree.render();
    	//profile pic
        
    	p.image(profile, p.width / 2, p.height / 2, p.width/6, (p.height * 3) / 7);
        // title
    	p.fill(darkPink);
    	p.textSize(50);
        p.textAlign(p.CENTER, p.CENTER);
        p.textFont("Garamond");
    	p.text("Alex Martin", p.width / 2, 70);
    	p.textSize(20);
    	p.text("Welcome to my personal website!", p.width / 2, 120);
    	// about page
    	// aboutButton.position(p.width / 2, 175);
    	for (let b of buttonArr) {
	        b.render();
            //console.log(b.url, b.image.width, b.image.height);
	    }
	//ground
    	p.fill(groundColor);
    	p.rect(0, groundY(p.height), p.width, p.height);
    	// bee
    	p.push();
    	p.translate(p.mouseX, p.mouseY);
    	p.fill("white");
    	p.ellipse(-15, -10, 15, 20);
    	p.ellipse(-10, -13, 15, 20);
    	p.fill("yellow");
    	p.ellipse(0, 0, 40, 30);
    	p.fill("black");
    	p.rect(-5, -15, 10, 30);
    	p.pop();
    };

    p.windowResized = () => {
    	p.resizeCanvas(window.innerWidth, window.innerHeight);
    	tree.update(250, treeHeight(p.height), groundY(p.height));
    	for (let b of buttonArr) {
    	    b.update(p.width, p.height);
    	}
    };

    p.mouseClicked = (_) => {
    	for (let b of buttonArr) {
    	    b.click();
    	}
    };
	p.touchStarted = (_) => {
		for (let b of buttonArr) {
    	    b.click();
    	}
	};
};

new p5(main, document.getElementById("sketch"));

import { Seasons, Tree } from "./utils/tree.js";
import { Button } from "./utils/button.js";

var lightBlue = "#89adf5";
var groundColor = "#4d2600";
var darkPink = "#420431";
var groundY = (height) => height - 80;
let profile;
let tree;
let buttonArr = [];

export const main = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    tree = new Tree(0, 50, Seasons.Spring, groundY(p.height), p);

    profile = p.loadImage("static/me.jpg");

    buttonArr.push(
      new Button(
        p.width,
        p.height,
        (x) => x / 2 - 50,
        (_y) => 175,
        80,
        "about/index.html",
        "static/buttons/about.svg",
        p,
      ),
      new Button(
        p.width,
        p.height,
        (x) => x / 2 + 50,
        (_y) => 175,
        80,
        "https://github.com/alexmartian24/",
        "static/buttons/github.svg",
        p,
      ),
      new Button(
        p.width,
        p.height,
        (x) => x / 2 + 150,
        (_y) => 175,
        80,
        "https://www.linkedin.com/in/alexandramartin8024",
        "static/buttons/linkedin.svg",
        p,
      ),
      new Button(
        p.width,
        p.height,
        (x) => x / 2 + 250,
        (_y) => 175,
        80,
        "https://instagram.com/ilymartian",
        "static/buttons/instagram.svg",
        p,
      ),
    );
  };

  p.draw = () => {
    p.noStroke();

    //background
    p.background(lightBlue);

    // tree
    tree.render();

    //profile pic
    p.image(profile, (2 * p.width) / 3, p.height / 4, 300, 400);
    // title
    p.fill(darkPink);
    p.textSize(50);
    p.text("Alex Martin", p.width / 2, 100);
    p.textSize(20);
    p.text("Welcome to my personal website!", p.width / 2, 150);
    // about page
    // aboutButton.position(p.width / 2, 175);
    for (let b of buttonArr) {
      b.render();
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
    tree.update(0, 50, groundY(p.height));
    for (let b of buttonArr) {
      b.update(p.width, p.height);
    }
  };

  p.mouseClicked = (_) => {
    for (let b of buttonArr) {
      b.click();
    }
  };
};

new p5(main, document.getElementById("sketch"));

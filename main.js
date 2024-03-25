import { Seasons, Tree } from "./tree.js";

var lightBlue = "#89adf5";
var groundColor = "#4d2600";
var darkPink = "#420431";
var groundY = (height) => height - 80;
let profile;
let tree;
let aboutButton;

export const main = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    tree = new Tree(0, 50, Seasons.Spring, groundY(p.height), p);

    profile = p.loadImage("images/me.jpg");

    aboutButton = p.createButton("About me");
    aboutButton.position(p.width / 2, 175);
    aboutButton.mousePressed(about_button);
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
    p.text("Alex Martin", p.width / 3 + 25, 100);
    p.textSize(20);
    p.text("Welcome to my personal website!", p.width / 3, 150);
    // about page
    aboutButton.position(p.width / 2, 175);

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
  };
};

function about_button() {
  window.location.href = "about/index.html";
}

new p5(main, document.getElementById("sketch"));

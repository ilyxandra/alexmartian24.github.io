import { Seasons, Tree } from "../utils/tree.js";

let backgroundColor = "#5accf1";
var groundColor = "#ffffff";
var groundY = (height) => height - 80;
let tree;
let dog;
let profile;

export const main = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    tree = new Tree(0, 50, Seasons.Winter, groundY(p.height), p);

    dog = p.loadImage("../static/pepper.jpg");
    profile = p.loadImage("../static/me2.jpg");
  };

  p.draw = () => {
    p.noStroke();

    //background
    p.background(backgroundColor);

    // tree
    tree.render();

    //profile/dog pic
    p.image(dog, (2 * p.width) / 3 - 350, p.height / 4, 300, 400);
    p.image(profile, (2 * p.width) / 3, p.height / 4, 300, 400);
    //ground
    p.fill(groundColor);
    p.rect(0, groundY(p.height), p.width, p.height);

    // about text
    p.fill(groundColor);
    p.textSize(50);
    p.text("About Page", p.width / 2, 100);
    p.textSize(20);
    p.text("Hello! I'm an NYU Student majoring in", p.width / 2, 150);
    p.text("CS with a minor in Studio Art. I love", p.width / 2, 170);
    p.text("all kinds of puzzles, my dog pepper, and", p.width / 2, 190);
    p.text("drawing.", p.width / 2, 210);
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    tree.update(0, 50, groundY(p.height));
  };
};

new p5(main, document.getElementById("sketch"));

import { Seasons, Tree } from "../tree.js";

let backgroundColor = "#5accf1";
var groundColor = "#ffffff";
var groundY = (height) => height - 80;
let tree;

export const main = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    tree = new Tree(0, 50, Seasons.Winter, groundY(p.height), p);
  };

  p.draw = () => {
    p.noStroke();

    //background
    p.background(backgroundColor);

    // tree
    tree.render();

    //ground
    p.fill(groundColor);
    p.rect(0, groundY(p.height), p.width, p.height);
  };

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    tree.update(0, 50, groundY(p.height));
  };
};

new p5(main, document.getElementById("sketch"));

import { Seasons, Tree } from "../utils/tree.js";

let backgroundColor = "#5accf1";
var groundColor = "#ffffff";
var groundY = (height) => height - 80;
let treeHeight = (height) => height - 330;
let tree;

export const main = (p) => {
    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        tree = new Tree(250, treeHeight(p.height), Seasons.Winter, groundY(p.height), p);
    };

    p.draw = () => {
        p.background(backgroundColor);
        
        // Draw tree
        tree.render();
        
        // Draw ground
        p.noStroke();
        p.fill(groundColor);
        p.rect(0, groundY(p.height), p.width, p.height);
    };

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        tree.updateGroundY(groundY(p.height));
        tree.updateY(treeHeight(p.height));
    };
};

new p5(main, document.getElementById("sketch"));

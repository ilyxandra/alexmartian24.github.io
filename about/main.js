import { Seasons, Tree } from "../utils/tree.js";

let backgroundColor = "#5accf1";
var groundColor = "#ffffff";
var groundY = (height) => height - 80;
let tree;
const treeHeight = (height) => height - 330;

export const main = (p) => {
    let treeX, treeY;

    function computeTreePosition() {
        treeX = 250;
        treeY = treeHeight(p.height);
    }

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        computeTreePosition();
        tree = new Tree(treeX, treeY, Seasons.Winter, groundY(p.height), p);
    };

    p.draw = () => {
        p.background(backgroundColor);
        computeTreePosition();
        p.imageMode(p.CENTER, p.CENTER);
        if (tree) {
            tree.x = treeX;
            tree.y = treeY;
            tree.render();
        }
        // Draw ground
        p.noStroke();
        p.fill(groundColor);
        p.rect(0, groundY(p.height), p.width, p.height);
    };

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        computeTreePosition();
        if (tree) {
            tree.x = treeX;
            tree.y = treeY;
            tree.shedding.update(groundY(p.height));
        }
    };
};

new p5(main, document.getElementById("sketch"));

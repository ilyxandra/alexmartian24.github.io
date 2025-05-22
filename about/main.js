import { Seasons, Tree } from "../utils/tree.js";

let backgroundColor = "#5accf1";
var groundColor = "#ffffff";
var groundY = (height) => height - 80;
let tree;

export const main = (p) => {
    let treeX, treeY;
    let treeScale = 1;

    function computeTreePosition() {
        // Center horizontally
        treeX = p.width / 2;
        // Place vertically so it stands on the ground, and is always visible
        // Assume tree image is ~300px tall; adjust as needed
        let treeImgHeight = 300 * treeScale;
        treeY = groundY(p.height) - treeImgHeight / 2;
        // If the canvas is very short, scale the tree down
        if (p.height < 400) {
            treeScale = p.height / 600;
            treeImgHeight = 300 * treeScale;
            treeY = groundY(p.height) - treeImgHeight / 2;
        } else {
            treeScale = 1;
        }
    }

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        computeTreePosition();
        tree = new Tree(treeX, treeY, Seasons.Winter, groundY(p.height), p);
        tree.scale = treeScale;
    };

    p.draw = () => {
        p.background(backgroundColor);
        computeTreePosition();
        if (tree) {
            tree.x = treeX;
            tree.y = treeY;
            tree.scale = treeScale;
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
            tree.scale = treeScale;
            tree.shedding.update(groundY(p.height));
        }
    };
};

new p5(main, document.getElementById("sketch"));

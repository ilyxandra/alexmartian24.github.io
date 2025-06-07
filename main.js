import { Seasons, Tree } from "./utils/tree.js";
import { Button } from "./utils/button.js";

const lightBlue = "#89adf5";
const groundColor = "#1c2902";
const groundY = (height) => height - 80;
const treeHeight = (height) => height - 330;

function drawTooltip(p, text) {
    p.push();
    p.textAlign(p.LEFT, p.BOTTOM);
    p.textSize(18);
    p.fill(30, 30, 30, 240);
    let pad = 8;
    let tw = p.textWidth(text) + pad * 2;
    let th = 32;
    let x = p.mouseX + 12;
    let y = p.mouseY - 8;
    p.noStroke();
    p.rect(x, y - th, tw, th, 7);
    p.fill(255);
    p.text(text, x + pad, y - pad);
    p.pop();
}

export const main = (p) => {
    let tree;
    let aboutButton;
    let projectsButton;

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        tree = new Tree(250, treeHeight(p.height), Seasons.Spring, groundY(p.height), p);

        aboutButton = new Button(
            p.width,
            p.height,
            (x) => x / 2,
            (y) => groundY(y) - 130,
            320,
            "about/index.html",
            "static/pixel_characters/me_character.png",
            p,
        );

        projectsButton = new Button(
            p.width,
            p.height,
            (x) => x / 2 - 53,
            (y) => groundY(y) - 55,
            140,
            "projects/index.html",
            "static/pixel_characters/pep_but.png",
            p,
        );
    };

    p.draw = () => {
        p.noStroke();
        p.imageMode(p.CENTER, p.CENTER);

        // Background
        p.background(lightBlue);

        // Tree
        tree.render();

        // About button
        aboutButton.render();

        // Projects button
        projectsButton.render();

        // Tooltips for pixel characters
        if (aboutButton.isHovered) {
            drawTooltip(p, 'About Me (Alex)');
        }
        if (projectsButton.isHovered) {
            drawTooltip(p, 'Pepper for Projects');
        }

        // Ground
        p.fill(groundColor);
        p.rect(0, groundY(p.height), p.width, p.height);

        // Bee cursor
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
        aboutButton.update(p.width, p.height);
        projectsButton.update(p.width, p.height);
    };

    p.mouseClicked = () => {
        aboutButton.click();
        projectsButton.click();
    };

    p.touchStarted = () => {
        aboutButton.click();
        projectsButton.click();
    };
};

new p5(main, document.getElementById("sketch"));

//i wanna include a picture of pepper with maybe like puzzle background art
var height;
var width;
var deepblue = "#250082";
var imagePath = "well-its-me.png";
var img;
var imageSize = 400;
var aboutMe = 
"Welcome to my website! I'm currently studying Computer Science\
 with a minor in Studio Art at NYU Tandon!\
 I like to do jigsaw puzzles, sudoku, or draw in my freetime.\
 I love video games, table-top roleplaying games, and my schoodle Pepper!";
function drawDesktop(p5) {
  p5.background(deepblue);
  p5.textSize(25);
  p5.image(img, width / 2 - imageSize / 2, 10, imageSize/2, imageSize/2);
  p5.fill("white");
  p5.text("About Me!", width / 2, height/5);
  //Sp5.textAlign(vertAlign);
  p5.text(aboutMe, width/2, height-300)
}
function drawMobile(p5, _) {
  p5.text("This is the mobile about page", width / 3, height - 100);
}

export const genPreload = {};

export const genSetup = (p5) => {
  height = window.innerHeight;
  width = window.innerWidth;

  img = p5.loadImage(imagePath, success, failure);
};

function success(_) {
  console.log("Image Loaded");
}

function failure(event) {
  console.error("Oops!", event);
}

export const draw = (p5) => {
  const mobileConsts = {
    x: width / 2,
    y: height - 100,
    gwidth: 20,
    gheight: 15,
  };
  if (width > 450) {
    drawDesktop(p5);
  } else {
    drawMobile(p5, mobileConsts);
  }
};

export const click = (p5) => {
  console.log("X Coords " + p5.mouseX);
  console.log("Y Coords " + p5.mouseY);
  if (p5.mouseX < width / 2 + 40 && p5.mouseX > width / 2 - 40) {
    console.log("X Coords are correct");
    if (p5.mouseY > height - 315 && p5.mouseY < height + 235) {
      console.log("Y Coords are correct");
      window.open("/About");
    }
  }
};

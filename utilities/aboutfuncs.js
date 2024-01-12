var height;
var width;
var deepblue = "#250082"
var imagePath = "./public/well-it's-me.png"
var img
function drawDesktop(p5) {
  p5.background(deepblue);
  p5.textSize(25);
  p5.fill("white")
  p5.text("This is the about page", width / 3, height - 500);
  
}
function drawMobile(p5, consts) {

  p5.text("This is the mobile about page", width / 3, height - 100);
}

export const genPreload = p5 => {
}

export const genSetup = p5 => {
  height = window.innerHeight;
  width = window.innerWidth;

  p5.loadImage('well-its-me.png', success, failure);
}

function success(img) {
  p5 => {p5.image(img, 0, 0)}
}

function failure(event) {
  console.error('Oops!', event);
}

export const draw = p5 => {
  const mobileConsts = { x: width / 2, y: height - 100, gwidth: 20, gheight: 15 }
  if (width > 450) {
    drawDesktop(p5);
  }
  else {
    drawMobile(p5, mobileConsts);
  }
}

export const click = p5 => {
  console.log("X Coords " + p5.mouseX);
  console.log("Y Coords " + p5.mouseY);
  if (p5.mouseX < (width / 2 + 40) && p5.mouseX > (width / 2 - 40)) {
    console.log("X Coords are correct");
    if (p5.mouseY > (height - 315) && p5.mouseY < (height + 235)) {
      console.log("Y Coords are correct");
      window.open("/About");
    }
  }
}


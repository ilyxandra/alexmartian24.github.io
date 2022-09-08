var skyColor = "#03cafc";
var grassColor = "#09b300";
var mountainColor = "#47464a";
var sunColor = "#ffb300";
// height and width are just filler vals that will be replaced
// when genSetup is called for the first time
var height;
var width;




//three flowers
//one sun
///five mountains (two on one side, three on the other)
//clicking
//name

function flower(p5, consts) {
  p5.noStroke();
  p5.push();
  //stem
  p5.fill(grassColor);
  p5.rect(consts.gx, consts.gy1, consts.gwidth, consts.gy2);

  p5.pop();

  //flowerpetals
  p5.push();
  p5.fill(255);
  p5.translate(consts.gx, consts.gy1);
  for (let i = 0; i < 8; i++) {
    p5.ellipse(0, 5, 100, 15);
    p5.rotate(p5.PI / 4);
  }
  p5.pop();
  p5.fill(sunColor);
  p5.circle(consts.gx, consts.gy1, 40);

  //second flower
  p5.push();
  //stem
  p5.fill(grassColor);
  p5.rect(consts.gx2, consts.gy1, consts.gwidth, consts.gy2);

  p5.pop();

  //flowerpetals
  p5.push();
  p5.fill(0);
  p5.translate(consts.gx2, consts.gy1);
  for (let i = 0; i < 8; i++) {
    p5.ellipse(0, 5, 100, 15);
    p5.rotate(p5.PI / 4);
  }
  p5.pop();
  p5.fill(sunColor);
  p5.circle(consts.gx2, consts.gy1, 40);

  //third flower

  p5.push();
  //stem
  p5.fill(grassColor);
  p5.rect(consts.gx3, consts.gy1, consts.gwidth, consts.gy2);

  p5.pop();

  //flowerpetals
  p5.push();
  p5.fill(0);
  p5.translate(consts.gx3, consts.gy1);
  for (let i = 0; i < 8; i++) {
    p5.ellipse(0, 5, 100, 15);
    p5.rotate(p5.PI / 4);
  }
  p5.pop();
  p5.fill(sunColor);
  p5.circle(consts.gx3, consts.gy1, 40);

}

function mountain(p5, x1, y1, x2, y2, x3, y3) {
  p5.fill(mountainColor);
  p5.triangle(x1, y1, x2, y2, x3, y3);
  p5.fill(255);
}

function sun(p5, sunconsts) {
  p5.fill(sunColor);
  p5.circle(sunconsts.x, sunconsts.y, 100);
  p5.stroke(sunColor);
  p5.strokeWeight(10);
  p5.line(sunconsts.x - 70, 20, sunconsts.x - 130, 20);
  p5.line(sunconsts.x - 70, 60, sunconsts.x - 110, 80);
  p5.line(sunconsts.x - 30, 95, sunconsts.x - 45, 135);
  p5.line(sunconsts.x + 10, 100, sunconsts.x + 10, 150);
}

function drawDesktop(p5) {
  var grassPosY = height - 100;
  var x1 = width + 50;
  var y1 = grassPosY;
  var x2 = width - 220;
  var y2 = grassPosY;
  var x3 = width - 90;
  var y3 = grassPosY - 200;

  const consts = { gx: width / 2, gx2: width / 3, gx3: 2 * width / 3, gy1: grassPosY - 175, gwidth: 10, gy2: grassPosY };
  flower(p5, consts);

  const sunconsts = { x: width - 20, y: 25 }

  p5.noStroke();
  //mountain(x1 + 150, y1, x2 + 150, y2, x3 + 150, y3);
  mountain(p5, x1 - x1, y1, x2 - x1, y2, x3 - x1, y3);
  mountain(p5, x1, y1, x2, y2, x3, y3);
  p5.fill(grassColor);
  p5.rect(0, grassPosY, width);

  sun(p5, sunconsts);
  p5.fill(255)
  p5.noStroke();
  p5.textSize(50)
  p5.text("Alex Martin", width / 3, 50);
}

function mousePressed(consts) {
  if (p5.mouseX < consts.gx + 20 && p5.mouseX > consts.gx - 20) {
    if (p5.mouseY < consts.gy + 20 && p5.mouseY > consts.gy - 20) {
      console.log("help");
    }
  }
}
function aboutPage(p5) {

}
function drawMobile(p5) {

}

export const genSetup = p5 => {
  p5.background(skyColor)
  height = window.innerHeight;
  width = window.innerWidth;
  var randomColor = p5.random(0, 255);
}

export const draw = p5 => {
  if (width > 300) {
    drawDesktop(p5);
  }
  else {
    drawMobile(p5);
  }
}

export const click = p5 => {
  console.log("X Coords" + p5.mouseX);
  console.log("Y Coords" + p5.mouseY);
}

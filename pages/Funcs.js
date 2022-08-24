var skyColor = "#03cafc";
var grassColor = "#09b300";
var mountainColor = "#47464a";
var sunColor = "#ffb300";


function flower() {
  //flower
  const draw = p5 => {
    p5.push();
    p5.fill(grassColor);
    p5.rect(200, 200, 10, 225);
    p5.pop();
    //flowerpetals
    p5.push();
    p5.fill(petalColor);
    p5.translate(205, 200);
    for (let i = 0; i < 8; i++) {
      p5.ellipse(0, 5, 100, 15);
      p5.rotate(PI / 4);
    }
    p5.pop();
    p5.fill(sunColor);
    p5.circle(205, 200, 25);
  }
}

function sun() {
  fill(sunColor);
  circle(375, 25, 100);
  stroke(sunColor);
  strokeWeight(10);
  line(250, 20, 300, 20);
  line(260, 90, 310, 60);
  line(340, 95, 325, 135);
  line(380, 100, 380, 150);
}



export const genSetup = p5 => {
  p5.background(skyColor)
  var randomColor = p5.random(0, 255);

}

export const draw = p5 => {
  var pi = p5.PI
  //var petalColor = p5.color(randomColor, randomColor,       randomColor);
  var width = window.innerWidth
  var height = window.innerHeight
  var x1 = 370;
  var y1 = 200;
  var x2 = 250;
  var y2 = 350;
  var x3 = 490;
  var y3 = 350;
  var grassPosX = 0;
  var grassPosY = 350;
  var grasslength = width;
  p5.noStroke();
  function mountain(x1, y1, x2, y2, x3, y3) {
    //5.noStroke()
    p5.fill(mountainColor);
    p5.triangle(x1, y1, x2, y2, x3, y3);
    p5.fill(255);
  }
  mountain(x1 + 150, y1, x2 + 150, y2, x3 + 150, y3);
  mountain(x1 - 20, y1, x2, y2, x3 - 40, y3)
  mountain(x1 - 350, y1, x2 - 330, y2, x3 - 370, y3)

  p5.fill(grassColor);
  p5.rect(grassPosX, grassPosY, grasslength);

  //flower
  p5.push();
  p5.fill(grassColor);
  p5.rect(200, 200, 10, 225);
  p5.pop();
  //flowerpetals
  p5.push();
  p5.fill(255);
  p5.translate(205, 200);
  for (let i = 0; i < 8; i++) {
    p5.ellipse(0, 5, 100, 15);
    p5.rotate(pi / 4);
  }
  p5.pop();
  p5.fill(sunColor);
  p5.circle(205, 200, 25);
}

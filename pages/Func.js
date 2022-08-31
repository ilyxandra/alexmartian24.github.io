var skyColor = "#03cafc";
var grassColor = "#09b300";
var mountainColor = "#47464a";
var sunColor = "#ffb300";


function flower(){
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
  for (let i = 0; i < 8; i++){
    p5.ellipse(0, 5, 100, 15);
    p5.rotate(PI/4);
  }
  p5.pop();
  p5.fill(sunColor);
  p5.circle(205, 200, 25);
  }
}

function sun(){
  fill (sunColor);
  circle(375, 25, 100);
  stroke (sunColor);
  strokeWeight(10);
  line(250, 20, 300, 20);
  line(260, 90, 310, 60);
  line(340, 95, 325, 135);
  line(380, 100, 380, 150);
}

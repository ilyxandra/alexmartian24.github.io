backgroundColor = "#5accf1"
let snowflakeArr = [];
let width = window.innerWidth;
let height = window.innerHeight;
var groundX = 0;
var groundY = height - 80;
let treeArr = [];
let gravity = 9.81;
let w = 0.1;

function setup() {
  tree = loadImage("/images/WinterTree.png");
  createCanvas(width,height);
}

function draw() {
  noStroke();
  background(backgroundColor);
  image(tree, 0, 60, 500, 500);
  fill("white");
  rect(groundX, groundY, width, height);
}
class Snowmound{}
class Snowflake{
  constructor(x, y){
  this.x = x
  this.y = y
  this.color = "snow";
  this.size = random(0,5);
  this.angle = random(10, 1*PI);
  this.radius = sqrt(random(pow(100 / 1, 2)));
  }
  cleanup(){
    for (i = 0; i < snowflakeArr.length(); i++){
      if (snowflakeArr[i].this.x >=500)
        splice(i, 1);
    }
  }
  fall(w){
    let angle = w * time + this.angle;
    this.posX = 100 / 1 + this.radius * tan(angle); //calculates tangent of the angle the petals fall
    this.posY += pow(this.size, 0.5);
  }
}



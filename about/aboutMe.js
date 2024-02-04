backgroundColor = "#5accf1"
let snowflakeArr = [];
let width = window.innerWidth;
let height = window.innerHeight;
var groundX = 0;
var groundY = height - 80;
let treeArr = [];
let gravity = 9.81;

function setup() {
  tree = loadImage("images/snowyTree.jpg");
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
  this.radius = sqrt(random(pow(width / 1, 2)));
  }
  cleanup(){
    for (i = 0; i < snowflakeArr.length(); i++){
      if (snowflakeArr[i].this.x >=500)
        splice(i, 1);
    }
  }
  fall(){}
}



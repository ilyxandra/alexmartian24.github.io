var lightBlue = "#89adf5";
var groundColor = "#000000";
var wide = window.innerWidth;
var length = window.innerHeight;
var groundX = 0;
var groundY = 540;
let treeArr = [];
let gravity = 9.81;

function setup() {
  createCanvas(wide, length);
  img1 = loadImage("spring_tree.png");
  tree = new Tree(0,50, img1);
  shedding = new SheddingTree();
}

function draw() {
  noStroke();
  background(lightBlue);
  tree.drawImage();
  fill(groundColor);
  rect(groundX, groundY, wide, length);
  let randint = random(0,1);
  let randomX = random(0,wide-100);
  if (randint < 0.01){
    shedding.createFlowers(randomX);
  }
  shedding.drawFlowersLoop();
  shedding.cleanup();
}


class Tree{
  constructor (xVal, yVal, img){
    this.x = xVal;
    this.y = yVal;
    this.image = img;
  }
  drawImage(){
  image(this.image, this.x, this.y);
  }
}

class SheddingTree{
  constructor(){
    let treeArr = [];
  }
  cleanup(){
    for (let i = 0; i < treeArr.length; i++){
      if (treeArr[i].y >= groundY){
        treeArr.splice(i,1);
      }
    }
  }
  drawFlowersLoop(){
  for (let i = 0; i < treeArr.length; i++){
      treeArr[i].drawflower();
      treeArr[i].fall();
    }
  }
  createFlowers(xVal){
  let flower = new Flower(xVal, 70);
    treeArr.push(flower);
  }
}

class Flower {
  constructor(xValue, yValue){//create flowers
    this.x = xValue;
    this.y = yValue;
    this.color = "#ffb6c1";
  }
  drawflower(){
    fill(this.color);
    ellipse(this.x, this.y, 8, 12);
  }
  fall(){//set flowers to fall
    //TODO:use my game making skills ot make a more natural fall
    this.y += 1;
  }
}
//figure out if i can do a time based thing

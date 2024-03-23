let backgroundColor = "#5accf1";

let width = window.innerWidth;
let height = window.innerHeight;
var groundX = 0;
var groundY = height - 80;
let snowflakeArr = [];

function setup() {
  tree = loadImage("/images/trees/winter.png");
  createCanvas(width, height);
  mound = new Snowmound();
}

function draw() {
  noStroke();
  background(backgroundColor);
  image(tree, groundX, 60, 500, 500);
  fill("white");
  rect(groundX, groundY, width, height);
  let randint = random(0, 1);
  if (randint < 0.025) {
    let x = random(0, width / 2);
    let y = random(0, height);
    mound.createSnowflake(x, y);
  }
  mound.drawSnowloop();
  mound.cleanup();
}
class Snowmound {
  constructor() {
    this.snowflakeArr = [];
  }
  cleanup() {
    for (let i = 0; i < this.snowflakeArr.length; i++) {
      if (this.snowflakeArr[i].y >= groundY) splice(i, 1);
    }
  }
  drawSnowloop() {
    for (let i = 0; i < this.snowflakeArr.length; i++) {
      this.snowflakeArr[i].drawSnow();
      this.snowflakeArr[i].fall();
    }
  }
  createSnowflake(x, y) {
    let snowflake = new Snowflake(x, y);
    this.snowflakeArr.push(snowflake);
  }
}
class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "snow";
    this.size = random(0, 5);
    this.angle = random(10, 1 * PI);
  }

  fall() {
    this.y += 1;
  }
  drawSnow() {
    fill(this.color);
    ellipse(this.x, this.y, 8, this.size);
  }
}

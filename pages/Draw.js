import dynamic from 'next/dynamic'
import { genSetup, draw } from './Func';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), { ssr: false })

function Draw() {
  const genSetup = p5 => {
    p5.background(skyColor)
    //var randomColor = p5.random(0,255);

  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
    genSetup(p5)
  }

  const resize = p5 => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
    genSetup(p5)
  }

  const draw = p5 => {
    var pi = p5.PI
    var width = window.innerWidth
    var height = window.innerHeight
    var grassPosX = 0;
    var grassPosY = height - 100;
    var grasslength= width;
    var x1 = width+50;
    var y1 = grassPosY;
    var x2 = width-220;
    var y2 = grassPosY;
    var x3 = width-90;
    var y3 = grassPosY-200;
    p5.noStroke();
    function mountain(x1, y1, x2, y2, x3, y3){
      //5.noStroke()
      p5.fill(mountainColor);
      p5.triangle(x1, y1, x2, y2, x3, y3);
      p5.fill(255);
    }
    //mountain(x1 + 150, y1, x2 + 150, y2, x3 + 150, y3);
    mountain(x1-x1, y1, x2-x1, y2, x3-x1, y3)
    mountain(x1, y1, x2, y2, x3, y3)

    p5.fill(grassColor);
    p5.rect(grassPosX, grassPosY, grasslength);

    //flower
    p5.push();
    p5.fill(grassColor);
    p5.rect(200, grassPosY-175, 10, grassPosY);
    p5.pop();
    //flowerpetals
    p5.push();
    p5.fill(255);
    p5.translate(205, grassPosY-175);
    for (let i = 0; i < 8; i++){
      p5.ellipse(0, 5, 100, 15);
      p5.rotate(pi/4);
    }
    p5.pop();
    p5.fill(sunColor);
    p5.circle(205, grassPosY-175, 25);
  }

  //flower();
  //push();
  //sun();
  //pop();

  return <Sketch setup={setup} draw={draw} windowResized={resize} />
}




export default Draw

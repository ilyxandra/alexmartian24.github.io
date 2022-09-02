import dynamic from 'next/dynamic'
import { genSetup, draw } from './Func';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), { ssr: false })

function Draw() {
  const genSetup = p5 => {
    scenery();
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
    genSetup(p5)
  }

  const resize = p5 => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
    genSetup(p5)
  }

  //flower();
  //push();
  //sun();
  //pop();

  return <Sketch setup={setup} draw={draw} windowResized={resize} />
}




export default Draw

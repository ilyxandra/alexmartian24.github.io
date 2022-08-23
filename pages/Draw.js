import dynamic from 'next/dynamic'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), { ssr: false })

function Draw() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
    p5.background(10, 130, 10)
  }

  const draw = p5 => {
    var width = window.innerWidth
    var height = window.innerHeight
    p5.ellipse(width / 2, height / 2, 200)
    p5.ellipse(width / 1, height / 3, 100)
  }

  const resize = p5 => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }


  return <Sketch setup={setup} draw={draw} windowResized={resize} />
}

export default Draw

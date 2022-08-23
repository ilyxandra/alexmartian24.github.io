import dynamic from 'next/dynamic'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), { ssr: false })

function Draw() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)

    function handleResize() {
      p5.resizeCanvas(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize);

  }

  const renderdraw = (p5, width, height) => {
    p5.background(255, 130, 20)
    p5.ellipse(width / 20, height / 20, 200)
    p5.ellipse(width / 10, height / 30, 100)
    p5.square(300, 10)
  }

  const draw = p5 => {
    renderdraw(p5, window.innerWidth, window.innerHeight)
    function handleResize() {
      renderdraw(p5, window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize);
  }


  return <Sketch setup={setup} draw={draw} />
}

export default Draw

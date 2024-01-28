import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { click, genSetup, draw } from '../utilities/aboutfuncs';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), { ssr: false })
//About javascript into p5.js junk

function About() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
        genSetup(p5, window.innerWidth, window.innerHeight)
    }

    const resize = p5 => {
        p5.clear()
        p5.resizeCanvas(window.innerWidth, window.innerHeight)
        genSetup(p5)
    }

    const handleclick = p5 => {
        click(p5)
    }

    return <Sketch setup={setup} draw={draw} windowResized={resize} mouseClicked={handleclick} touchStarted={handleclick} />
}


export default function Home() {
    return (
        <div className={styles.container}>
            <About />
        </div>

    )
}

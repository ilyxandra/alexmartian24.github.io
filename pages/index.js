import styles from '../styles/Home.module.css'
import Draw from './Draw'
//
export default function Home() {
  return (
    <div className={styles.container}>
      <Draw />
    </div>
  )
}

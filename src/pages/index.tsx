import type { NextPage } from 'next'
import { Header } from '../components/Header'

import styles from '../../styles/Global.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  )
}

export default Home

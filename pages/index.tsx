import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu/Menu'
import TwentyFour from '../components/menu/TwentyFour'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>24 Battle Royale</title>
      </Head>
      <TwentyFour />
      <Menu />

      <p> askjfajsdkfjasdkfjkl</p>
    </div>
  )
}

export default Home

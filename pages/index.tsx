import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu/Menu'
import TwentyFour from '../components/menu/TwentyFour'
import BattleRoyale from '../components/menu/BattleRoyale'
import React from 'react'

const Home = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>24 Battle Royale</title>
      </Head>
      <div className={styles.twentyfour}>
        <TwentyFour/>
      </div>
      <div className={styles.battleroyale}>
        <BattleRoyale />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
      

      <style jsx global>{
        `body{
          background-color: black;
        }`
      }
      </style>
    </div>
  )
}

export default Home

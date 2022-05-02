import styles from '../styles/Login.module.css'
import React from 'react'

const Login = () => {
    return (
    <div className={styles.main}>
        <div className={styles.login}>
            Login
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

export default Login
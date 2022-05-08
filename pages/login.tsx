import styles from '../styles/Login.module.css'
import React from 'react'
import { useAuth } from "../components/auth/AuthUserProvider"
import { signInWithGoogle } from '../util/firebase'

const Login = () => {
    const { user } = useAuth()
    return (
    
    <div className={styles.main}>
        <div className={styles.login}>
            {/**
            {user ? (
                <Login />
            ) : (
            <button
                //onClick={signInWithGoogle}
            >
                Login
            </button>
            )} 

            Login */}
            <button
                onClick={signInWithGoogle}
            >
                Login
            </button>
        </div>
    </div>
    )
}

export default Login
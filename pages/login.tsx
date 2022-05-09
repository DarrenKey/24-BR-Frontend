import styles from '../styles/Login.module.css'
import React from 'react'
import { useAuth } from "../components/auth/AuthUserProvider"
import { signInWithGoogle } from '../util/firebase'

const Login = () => {
    const { user, signOut } = useAuth()
    return (
    
    <div className={styles.main}>
        <div className={styles.login}>
            <button
                onClick={user? signOut : signInWithGoogle}
            >
                {user ? "Logout" : "Login"}
            </button> 
        </div>
    </div>
    )
}

export default Login
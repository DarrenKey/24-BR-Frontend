import subpagestyle from "../styles/Subpages.module.css";
import styles from "../styles/Login.module.css";
import React from "react";
import { useAuth } from "../components/auth/AuthUserProvider";
import { signInWithGoogle } from "../util/firebase";
import Image from "next/image";

const Login = () => {
  const { user, signOut } = useAuth();
  return (
    <div className={subpagestyle.main}>
      <div className={subpagestyle.title}>Login</div>

      <div className = {styles.login}>
        <button onClick={user ? signOut : signInWithGoogle}>
          <Image src = "/logo-google.svg" alt={user ? "Logout" : "Login"} width={30} height={30}/>
        </button>
      </div>
    </div>
  );
};

export default Login;

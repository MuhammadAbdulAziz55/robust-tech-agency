"use client";
import { signIn } from "next-auth/react";
import styles from "./page.module.css";
import Link from "next/link";
const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <span className={styles.or}>- OR -</span>
      <button onClick={() => signIn("google")}>Login with Google</button>
      <Link className={styles.link} href="/dashboard/register ">
        If you dont have an account, Please sign up.
      </Link>
    </div>
  );
};

export default Login;

// import { useEffect } from "react";
import styles from "../styles/Start.module.scss";

export default function Start() {
  //   useEffect(() => {
  //     // const localData = localStorage.getItem("username");
  //     // // if there isn't anything in localStorage then start with an empty array
  //     // return localData ? JSON.parse(localData) : [];
  //     localStorage.setItem("username", JSON.stringify(username));
  //   }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Start a session</h1>
      <div className={styles.card}>
        <form className={styles.form}>
          <label htmlFor="username">Your username:</label>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="your username"
            required
          />
          <label htmlFor="sessionUsername">Session title:</label>
          <input
            className={styles.input}
            type="text"
            id="sessionUsername"
            placeholder="session title"
            required
          />
          <input className={styles.button} type="submit" value="Start" />
        </form>
      </div>
    </div>
  );
}

// function sessionId() {
//   return Math.floor(Math.random() * Date.now());
// }
// console.log(sessionId);

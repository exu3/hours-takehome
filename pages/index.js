import styles from "../styles/Home.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>hours</h1>
      <Link href="/start" passHref>
        <button className={styles.button}>Start a session</button>
      </Link>
    </div>
  );
}

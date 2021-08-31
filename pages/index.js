import styles from "../styles/Home.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <p>Hours Takehome project</p>
      <Link href="/start" passHref>
        <button>Start a session</button>
      </Link>
    </div>
  );
}

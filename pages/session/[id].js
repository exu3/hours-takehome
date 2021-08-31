import Participant from "../../components/Participant";
import styles from "../../styles/Session.module.scss";

export default function SessionPage({ src, name }) {
  return (
    <div style={{ margin: "8px, 20px, 8px, 20px" }}>
      <h1 className={styles.heading}>Session Name</h1>

      <div className={styles.grid}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Participants</h2>
          <Participant src="/default-avatar.jpg" name="Person Name" />
          <Participant src="/default-avatar.jpg" name="Person Name" />
          <Participant src="/default-avatar.jpg" name="Person Name" />
          <Participant src="/default-avatar.jpg" name="Person Name" />
        </div>
        <div className={styles.container}>
          <h2 className={styles.heading}>To-do</h2>
          <p>task list</p>
        </div>
      </div>

      <p>username</p>
    </div>
  );
}

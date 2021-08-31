import Image from "next/image";
import styles from "../styles/Avatar.module.scss";

export default function Participant({ src, name }) {
  return (
    <div className={styles.flex}>
      <Avatar src={src} />
      <p style={{ paddingLeft: "5px" }}>{name}</p>
    </div>
  );
}

function Avatar({ src }) {
  return (
    <div className={styles.image}>
      <Image
        src={src}
        width={40}
        height={40}
        alt="avatar"
        placeholder="/default-avatar.jpg"
      />
    </div>
  );
}

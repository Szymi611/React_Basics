import styles from "./Post.module.css";
export default function Post({ name, message }) {
  return (
    <>
      <li className={styles.post}>
        <p className={styles.author}>{name}</p>
        <p className={styles.text}>{message}</p>
      </li>
    </>
  );
}

import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post name={"Max"} message={"Hello World"} />
        <Post name={"Wojtek"} message={"Hola amigo!"} />
      </ul>
    </>
  );
}

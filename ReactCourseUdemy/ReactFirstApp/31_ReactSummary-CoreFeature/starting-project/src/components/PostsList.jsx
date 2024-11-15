import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

export default function PostsList({isPosting, onClosePost}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onClosePost}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            body={enteredBody}
            author={enteredAuthor}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post name={enteredAuthor} message={enteredBody} />
        <Post name={"Wojtek"} message={"Hola amigo!"} />
      </ul>
    </>
  );
}

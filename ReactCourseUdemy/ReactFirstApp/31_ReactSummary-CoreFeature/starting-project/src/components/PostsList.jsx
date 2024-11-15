import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

export default function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
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

import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useState } from "react";

export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} body={enteredBody} author={enteredAuthor} onAuthorChange={authorChangeHandler}/>
      <ul className={styles.posts}>
        <Post name={enteredAuthor} message={enteredBody} />
        <Post name={"Wojtek"} message={"Hola amigo!"} />
      </ul>
    </>
  );
}

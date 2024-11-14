import { useState } from 'react';
import styles from './NewPost.module.css'

export default function NewPost(){
  const [enteredBody, setEnteredBody] = useState('');

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  return(
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="body" id="body" required rows='3' onChange={bodyChangeHandler}/>
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" required/>
      </p>
    </form>
  );
} 
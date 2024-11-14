import { useState } from 'react';
import styles from './NewPost.module.css'

export default function NewPost({onAuthorChange, onBodyChange, body, author}){

  return(
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="body" id="body" required rows='3' onChange={onBodyChange}/>
      </p>
      <p>{body}</p>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" required onChange={onAuthorChange}/>
      </p>
      <p>{author}</p>
    </form>
  );
} 
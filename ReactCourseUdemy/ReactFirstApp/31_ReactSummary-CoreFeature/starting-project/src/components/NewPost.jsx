import styles from './NewPost.module.css'

export default function NewPost(){
  return(
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="body" id="body" required rows='3'/>
      </p>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" required/>
      </p>
    </form>
  );
} 
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

export default function PostsList({ isPosting, onClosePost }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => {
      return [postData, ...existingPosts];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onClosePost}>
          <NewPost onCancel={onClosePost} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => {
            return (
              <Post key={post.body} name={post.author} message={post.body} />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are not posts yet!</h2>
          <p>Feel free to add one</p>
        </div>
      )}
    </>
  );
}

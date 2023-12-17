import {useState, useEffect} from 'react';
import Post from '../Post/Post';
import NewPost from '../new post/NewPost.jsx';
import Modal from '../modal/Modal.jsx';

import clasess from './PostList.module.css';

const PostList = ({isPosting, onStopPosting}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
    };

    fetchPosts();
  }, []);

  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosts((exsistingPosts) => [postData, ...exsistingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={clasess.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start Adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;

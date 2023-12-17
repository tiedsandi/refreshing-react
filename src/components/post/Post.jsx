import clases from './Post.module.css';

const Post = ({author, body}) => {
  return (
    <li className={clases.post}>
      <p className={clases.author}>{author}</p>
      <p className={clases.text}>{body}</p>
    </li>
  );
};

export default Post;

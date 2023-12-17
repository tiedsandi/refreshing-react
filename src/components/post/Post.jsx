import { Link } from 'react-router-dom';
import clases from './Post.module.css';

const Post = ({ id, author, body }) => {
  return (
    <li className={clases.post}>
      <Link to={id}>
        <p className={clases.author}>{author}</p>
        <p className={clases.text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;

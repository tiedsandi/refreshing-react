import {Outlet} from 'react-router-dom';
import PostList from '../components/post list/PostList';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

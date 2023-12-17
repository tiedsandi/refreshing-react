import {useState} from 'react';
import MainHeader from './components/main header/MainHeader';
import PostList from './components/post list/PostList';

function App() {
  const [modalIsVisible, setModalIsVisivle] = useState(false);

  const showModalHandler = () => {
    setModalIsVisivle(true);
  };

  const hideModalHandler = () => {
    setModalIsVisivle(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;

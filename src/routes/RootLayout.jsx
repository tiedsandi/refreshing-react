import {Outlet} from 'react-router-dom';
import MainHeader from '../components/main header/MainHeader';

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;

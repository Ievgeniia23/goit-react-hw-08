import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet /> {/* Тут рендеряться дочірні маршрути */}
      </main>
    </>
  );
};

export default Layout;

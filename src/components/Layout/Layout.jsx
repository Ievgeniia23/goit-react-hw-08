import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={css.wrap}>
      <AppBar />
      <section className={css.section}>{children}</section>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;

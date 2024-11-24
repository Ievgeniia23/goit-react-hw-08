import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div className={css.navLeft}>
          <Navigation />
        </div>
        <div className={css.navRight}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </nav>
    </header>
  );
};

export default AppBar;

// import Navigation from '../Navigation/Navigation';
// import AuthNav from '../AuthNav/AuthNav';
// import UserMenu from '../UserMenu/UserMenu';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

// const AppBar = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     // <header>
//     <>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </>
//     // </header>
//   );
// };

// export default AppBar;

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const AuthNav = () => {
  return (
    <div className={css.wrap}>
      <nav>
     
        <NavLink className={buildCssClasses} to="/register">
          Register
        </NavLink>

        <NavLink className={buildCssClasses} to="/login">
          Login
        </NavLink>

      </nav>

    </div>
  );
};

export default AuthNav;

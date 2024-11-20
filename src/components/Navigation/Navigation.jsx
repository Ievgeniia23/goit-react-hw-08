
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';


const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
    return (
      <div>
        <header className={css.header}>
          <nav>
            <NavLink className={buildCssClasses} to="/">
              Home
            </NavLink>
            {/* <NavLink className={buildCssClasses} to="/register">
              Register
            </NavLink>

            <NavLink className={buildCssClasses} to="/login">
              Login
            </NavLink> */}

            <NavLink className={buildCssClasses} to="/contacts">
              Contacts
            </NavLink>
          </nav>
        </header>
      </div>
    );
};

export default Navigation;

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
    <div className={css.navLeft}>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildCssClasses} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;

// import { NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// // import AuthNav from '../AuthNav/AuthNav'
// import css from './Navigation.module.css';

// const buildCssClasses = ({ isActive }) =>
//   clsx(css.link, isActive && css.active);

// const Navigation = () => {
//     return (
//       <div>
//         <header className={css.header}>
//           <nav>
//             <div className={css.navLeft}>
//               <NavLink className={buildCssClasses} to="/">
//                 Home
//               </NavLink>
//               {/* <NavLink className={buildCssClasses} to="/register">
//               Register
//             </NavLink>

//             <NavLink className={buildCssClasses} to="/login">
//               Login
//             </NavLink> */}

//               <NavLink className={buildCssClasses} to="/contacts">
//                 Contacts
//               </NavLink>
//             </div>
//             {/* <div className={css.navRight}>
//               <AuthNav/>
//             </div> */}
//           </nav>
//         </header>
//       </div>
//     );
// };

// export default Navigation;

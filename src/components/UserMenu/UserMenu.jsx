import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { apiLogoutUser } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenuWrap}>
      <p className={css.userGreet}>Welcome, {user.name}!</p>
      <button
        type="button"
        className={css.btnLogout}
        onClick={() => dispatch(apiLogoutUser())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

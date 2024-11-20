import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { apiLogoutUser } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button type='button' onClick={() => dispatch(apiLogoutUser())}>Logout</button>
    </div>
  );
};

export default UserMenu;


import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/operations';
import { nanoid } from 'nanoid';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // Додавання унікального ідентифікатора для кожного нового входу
    const loginData = {
      ...values,
      sessionId: nanoid(),
    };
    dispatch(apiLoginUser(loginData));
    actions.resetForm();
  };

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
};

export default LoginPage;

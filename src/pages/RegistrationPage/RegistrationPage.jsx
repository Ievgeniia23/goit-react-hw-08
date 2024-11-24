import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { apiRegisterUser } from '../../redux/auth/operations';
import css from './RegistrationPage.module.css'

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
 
    const newUser = {
      id: nanoid(),
      ...values,
    };

    dispatch(apiRegisterUser(newUser));
    actions.resetForm();
  };

  return (
    <div className={css.registerWrap}>
      <h1>Register</h1>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;

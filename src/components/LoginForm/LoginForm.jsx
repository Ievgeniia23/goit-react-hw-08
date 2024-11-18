import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css';


const LoginUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(15, 'Password must not exceed 15 characters')
    .required('Password is required'),
});

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={LoginUserSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.formWrapper}>
        
        <label className={css.formLabel} htmlFor={emailFieldId}>
          <span>Email:</span>
        </label>
        <Field
          id={emailFieldId}
          type="text"
          name="email"
          className={css.formField}
          placeholder="example@example.com"
        />
        <ErrorMessage name="email" component="span" className={css.error} />

        <label className={css.formLabel} htmlFor={passwordFieldId}>
          <span>Password:</span>
        </label>
        <Field
          id={passwordFieldId}
          type="password"
          name="password"
          className={css.formField}
          placeholder="Enter your password"
        />
        <ErrorMessage name="password" component="span" className={css.error} />

        
        <button type="submit" className={css.btnSubmit}>
           Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

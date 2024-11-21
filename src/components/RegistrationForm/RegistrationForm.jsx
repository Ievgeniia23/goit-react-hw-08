import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux'; // Для доступу до dispatch
import { apiRegisterUser } from '../../redux/auth/operations'; // Операція для реєстрації
import { toast } from 'react-hot-toast'; // Для відображення повідомлень

const RegistrationForm = () => {
  const dispatch = useDispatch(); // Отримуємо dispatch для роботи з Redux

  // Ідентифікатори полів для форми
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  // Схема валідації форми
  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required!'),
    email: Yup.string()
      .trim()
      .email('Email must be in a valid format')
      .required('Required!'),
    password: Yup.string()
      .trim()
      .min(8, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required!'),
  });

  // Початкові значення для форми
  const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
  };

  // Функція обробки відправлення форми
  const handleSubmit = (values, actions) => {
    // Відправка даних на сервер через Redux
    dispatch(apiRegisterUser(values))
      .unwrap()
      .then(response => {
        // Якщо успіх
        toast.success('Registration successful!');
        console.log(response);
      })
      .catch(error => {
        // Якщо помилка
        toast.error('Registration failed. Please try again.');
        console.log(error.message);
      });

    // Очищення форми після відправки
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit} // Використовуємо handleSubmit
      validationSchema={RegistrationSchema}
    >
      <Form className={css.formWrapper}>
        <label className={css.formLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Maria Pasinetti"
          className={css.formField}
        />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label className={css.formLabel} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          type="text"
          name="email"
          id={emailFieldId}
          placeholder="example@example.com"
          className={css.formField}
        />
        <ErrorMessage name="email" component="span" className={css.error} />

        <label className={css.formLabel} htmlFor={passwordFieldId}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordFieldId}
          placeholder="Enter your password"
          className={css.formField}
        />
        <ErrorMessage name="password" component="span" className={css.error} />

        <button className={css.btnForm} type="submit">
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { useId } from "react";
// // import PropTypes from "prop-types";
// import * as Yup from "yup";
// import css from "./RegistrationForm.module.css";

// const RegistrationForm = ({ onSubmit }) => {

//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const passwordFieldId = useId();

//   const RegistrationSchema = Yup.object().shape({
//     name: Yup.string()
//       .trim()
//       .min(3, "Too Short!")
//       .max(30, "Too Long!")
//       .required("Required!"),
//     email: Yup.string()
//       .trim()
//       .email("Email must be in a valid format")
//       .required("Required!"),
//     password: Yup.string()
//       .trim()
//       .min(8, "Too Short!")
//       .max(15, "Too Long!")
//       .required("Required!"),
//   });

//   const INITIAL_VALUES = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   return (
//     <Formik
//       initialValues={INITIAL_VALUES}
//       onSubmit={onSubmit}
//       validationSchema={RegistrationSchema}
//     >
//       <Form className={css.formWrapper}>
//         <label className={css.formLabel} htmlFor={nameFieldId}>
//           Name
//         </label>
//         <Field
//           type="text"
//           name="name"
//           id={nameFieldId}
//           placeholder="Maria Pasinetti"
//           className={css.formField}
//         />
//         <ErrorMessage name="name" component="span" className={css.error} />

//         <label className={css.formLabel} htmlFor={emailFieldId}>
//           Email
//         </label>
//         <Field
//           type="text"
//           name="email"
//           id={emailFieldId}
//           placeholder="example@example.com"
//           className={css.formField}
//         />
//         <ErrorMessage name="email" component="span" className={css.error} />

//         <label className={css.formLabel} htmlFor={passwordFieldId}>
//           Password
//         </label>
//         <Field
//           type="password"
//           name="password"
//           id={passwordFieldId}
//           placeholder="Enter your password"
//           className={css.formField}
//         />
//         <ErrorMessage name="password" component="span" className={css.error} />

//         <button className={css.btnForm} type="submit">
//           Sign up
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// // RegistrationForm.propTypes = {
// //   onSubmit: PropTypes.func.isRequired,
// // };

// export default RegistrationForm;

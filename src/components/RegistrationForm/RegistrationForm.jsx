import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import css from "./RegistrationPage.module.css";

const RegistrationForm = ({ onSubmit }) => {
 
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();


  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required!"),
    email: Yup.string()
      .trim()
      .email("Email must be in a valid format")
      .required("Required!"),
    password: Yup.string()
      .trim()
      .min(8, "Too Short!")
      .max(15, "Too Long!")
      .required("Required!"),
  });

  
  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
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

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;

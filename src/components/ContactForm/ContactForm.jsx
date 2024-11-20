import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { nanoid } from "nanoid";
import * as Yup from 'yup'
import { addContact } from "../../redux/contactsOps";
import css from './ContactForm.module.css'


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required!"),
})

const initialValues = {
  name: '',
  number:''
}

const ContactForm = () => {
  const dispatch = useDispatch();

const nameFieldId = useId();
const numberFieldId = useId();

       
 const handleSubmit = (values, { resetForm }) => {
   dispatch(addContact({
     id: nanoid(),
     name: values.name,
     number: values.number
   }));
		resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formWrapper}>
        <label className={css.formLabel} htmlFor={nameFieldId}>Name</label>
        <Field type='text' name='name'
          id={nameFieldId} placeholder="Maria Pasinetti"
        className={css.formField} />
        <ErrorMessage 
          name="name" component="span" className={css.error}  />
              
        <label htmlFor={numberFieldId} className={css.formLabel}>Number</label>
        <Field type='text' name='number'
          id={numberFieldId} placeholder="111-11-11"
        className={css.formField} />
        <ErrorMessage
          name="number" component="span" className={css.error} />
              
			<button className={css.btnForm} type='submit'>Add contact</button>
		</Form>
    </Formik>
  );
};


export default ContactForm;




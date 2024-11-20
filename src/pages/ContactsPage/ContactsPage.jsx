import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactForm />
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;

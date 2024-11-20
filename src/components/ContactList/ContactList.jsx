import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { selectFilteredContacts } from '../../redux/contacts/selectors'; 

const ContactList = () => {
   const dispatch = useDispatch();
  
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactListWrapper}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;



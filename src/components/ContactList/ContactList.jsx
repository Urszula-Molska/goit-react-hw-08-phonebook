import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts } from '../../redux/selectors.js';
import { getFilter } from '../../redux/selectors.js';
import css from './ContactList.module.css';

const getVisibleContacts = (filter, contacts) => {
  if (filter.length === 0) {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(filter, contacts);

  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <li className={css.listItem} key={contact.id} data-id={contact.id}>
            <span className={css.contactInfo}>
              {contact.name}: {contact.number}
            </span>
            <button
              data-id={contact.id}
              key={contact.id}
              className={css.deleteBtn}
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

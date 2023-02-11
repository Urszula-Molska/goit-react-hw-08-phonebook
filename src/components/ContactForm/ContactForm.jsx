import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from '../../redux/selectors.js';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name;
    const number = form.elements.number;

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === name.value.toLowerCase().trim()
      )
    ) {
      return alert(`${name.value} is already in contacts`);
    } else {
      const contact = {
        name: name.value,
        number: number.value,
        id: nanoid(),
      };

      dispatch(addContact(contact));
      form.reset();
    }
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="name"
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="number in format: 325-152-154"
        />
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

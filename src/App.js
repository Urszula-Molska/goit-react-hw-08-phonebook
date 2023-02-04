import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Section } from './components/Section/Section';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import './index.css';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <Section>
        <a href="https://urszula-molska.github.io/goit-react-hw-07-phonebook/">
          https://urszula-molska.github.io/goit-react-hw-07-phonebook
        </a>
        <a href="https://github.com/Urszula-Molska/goit-react-hw-07-phonebook">
          https://github.com/Urszula-Molska/goit-react-hw-07-phonebook
        </a>
      </Section>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Filter />
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};

import React from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Section } from './components/Section/Section';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import './index.css';

function App() {
  return (
    <div className="App">
      <Section>
        <a href="https://urszula-molska.github.io/goit-react-hw-06-phonebook/">
          https://urszula-molska.github.io/goit-react-hw-06-phonebook
        </a>
        <a href="https://github.com/Urszula-Molska/goit-react-hw-06-phonebook">
          https://github.com/Urszula-Molska/goit-react-hw-06-phonebook
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
}

export default App;

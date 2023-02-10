import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { Section } from '../Section/Section';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth.js';

export const Contacts = () => {
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};

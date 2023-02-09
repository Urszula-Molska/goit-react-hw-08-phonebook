import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth.js';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
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
        <a href="https://urszula-molska.github.io/goit-react-hw-08-phonebook/">
          https://urszula-molska.github.io/goit-react-hw-08-phonebook
        </a>
        <a href="https://github.com/Urszula-Molska/goit-react-hw-08-phonebook">
          https://github.com/Urszula-Molska/goit-react-hw-08-phonebook
        </a>
      </Section>
      <header>
        <nav>
          <NavLink className="navLink" to="/" end>
            Home
          </NavLink>
          <NavLink className="navLink" to="/register">
            Register
          </NavLink>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" /*element={<Contacts />}*/ />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

/*<Section title="Phonebook">
        <ContactForm />
      </Section>
      <Filter />
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>*/

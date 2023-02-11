import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth.js';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute.js';
import { RestrictedRoute } from 'components/RestrictedRoute.js';
import { lazy, Suspense } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { AuthNav } from './components/AuthNav/AuthNav';
import { UserMenu } from './components/userMenu/UserMenu';
import { Section } from './components/Section/Section';
import { Contacts } from './components/Contacts/Contacts';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { refreshUser } from 'redux/auth/operations';
import './index.css';

export const App = () => {
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
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
        <nav className="wrapper">
          <NavLink className="navLink" to="/" end>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className="contactsLink" to="/contacts">
              contacts
            </NavLink>
          )}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
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

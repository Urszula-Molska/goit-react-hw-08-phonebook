import React from 'react';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth.js';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute.js';
import { RestrictedRoute } from 'components/RestrictedRoute.js';
import { Section } from './components/Section/Section.jsx';
import { refreshUser } from 'redux/auth/operations';
import './index.css';

const HomePage = lazy(() => import('./pages/Home/Home.jsx'));
const RegisterPage = lazy(() => import('./pages/Register/Register.jsx'));
const LoginPage = lazy(() => import('./pages/Login/Login.jsx'));
const ContactsPage = lazy(() => import('./pages/Contacts/Contacts.jsx'));

export const App = () => {
  const { isRefreshing } = useAuth();
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<HomePage />}>
            <Route
              path="/goit-react-hw-08-phonebook/register"
              element={
                <RestrictedRoute
                  redirectTo="/goit-react-hw-08-phonebook/phonebook"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/goit-react-hw-08-phonebook/login"
              element={
                <RestrictedRoute
                  redirectTo="/goit-react-hw-08-phonebook/phonebook"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/goit-react-hw-08-phonebook/phonebook"
              element={
                <PrivateRoute
                  redirectTo="/goit-react-hw-08-phonebook/login"
                  component={<ContactsPage />}
                />
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

import { NavLink } from 'react-router-dom';
import { AuthNav } from '..//AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth.js';
import { UserMenu } from '../userMenu/UserMenu.jsx';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <nav className="wrapper">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className="contactsLink" to="/phonebook">
            contacts
          </NavLink>
        )}

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

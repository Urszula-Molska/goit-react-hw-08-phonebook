import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className="navLink" to="/goit-react-hw-08-phonebook/register">
        Register
      </NavLink>
      <NavLink className="navLink" to="/goit-react-hw-08-phonebook/login">
        Log In
      </NavLink>
    </div>
  );
};

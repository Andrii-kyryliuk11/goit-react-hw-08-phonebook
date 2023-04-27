import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className={css.nav}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            .<NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
}

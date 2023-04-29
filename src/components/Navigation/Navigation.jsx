import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import { Suspense, lazy } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Filter } from 'components/Filter/Filter';

const UserMenu = lazy(() => import('components/UserMenu/UserMenu'));

export default function Navigation() {
  const isLoggedIn = useSelector(store => store.authorization.isLoggedIn);

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <div className={css.header}>
          <nav>
            <ul className={css.nav}>
              <li>
                <NavLink to="/">
                  <Button
                    variant="text"
                    sx={{
                      color: '#222222',
                    }}
                  >
                    Home
                  </Button>
                </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/contacts">
                    <Button
                      variant="text"
                      sx={{
                        color: '#222222',
                      }}
                    >
                      Contacts
                    </Button>
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </nav>
          {isLoggedIn ? <Filter /> : null}
          {isLoggedIn ? <UserMenu /> : null}
        </div>
        <section>
          <Outlet />

          <ToastContainer
            position="top-center"
            transition={Zoom}
            hideProgressBar
            theme="colored"
            autoClose={300}
          />
        </section>
      </Suspense>
    </>
  );
}

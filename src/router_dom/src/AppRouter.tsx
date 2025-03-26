import {  NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './components/Site.module.css';
import { PATH } from './routes/router';

export function AppRouter() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              to={PATH.ADIDAS}
            >
              Adidas
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              to={PATH.PUMA}
            >
              Puma
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              to={PATH.ABIBAS}
            >
              Abibas
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              to={PATH.PRICES}
            >
              Prices
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              to={PATH.PROTECTED_PAGE}
            >
              Procected page
            </NavLink>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.HorizontalNavigation}>
            <NavLink className={styles.LinkLikeButton} to={PATH.MAIN}>
              Main Page
            </NavLink>
            <button onClick={navigateHandler} className={styles.LinkLikeButton}>
              Back
            </button>
          </div>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

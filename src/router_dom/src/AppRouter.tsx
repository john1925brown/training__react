import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import styles from './components/Site.module.css';
import { Adidas } from './components/pages/Adidas';
import { Puma } from './components/pages/Puma';
import { PageThree } from './components/pages/PageThree';
import { Error404 } from './components/pages/Error404';
import { Model } from './components/pages/Model';
import { Prices } from './components/pages/Prices';

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  PAGE3: '/abibas',
  PRICES: '/prices',
  ERROR404: '/error404',
} as const;

export function AppRouter() {
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
              to={PATH.PAGE3}
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
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={PATH.ADIDAS} />} />
            <Route path={PATH.ADIDAS} element={<Adidas />} />
            <Route path={PATH.PUMA} element={<Puma />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />
            <Route path={PATH.ERROR404} element={<Error404 />} />
            <Route path={PATH.PRICES} element={<Prices />} />

            <Route path="/:brandName/:modelId" element={<Model />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

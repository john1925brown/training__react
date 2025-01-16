import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import styles from './components/Site.module.css';
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Error404 } from './components/pages/Error404';

const PATH = {
  PAGE1: '/page1',
  PAGE2: '/page2',
  PAGE3: '/page3',
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
              to={PATH.PAGE1}
            >
              page 1
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              to={PATH.PAGE2}
            >
              page 2
            </NavLink>
          </div>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : styles.navLink
              }
              to={PATH.PAGE3}
            >
              page 3
            </NavLink>
          </div>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Navigate to={'/page1'} />} />
            <Route path={PATH.PAGE1} element={<PageOne />} />
            <Route path={PATH.PAGE2} element={<PageTwo />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />
            <Route path={PATH.ERROR404} element={<Error404 />} />
            <Route path="/*" element={<Navigate to={'/error404'} />} />
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

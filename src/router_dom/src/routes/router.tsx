import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
} from 'react-router-dom';
import { Error404 } from '../components/pages/Error404';
import { Adidas } from '../components/pages/Adidas';
import { Puma } from '../components/pages/Puma';
import { Abibas } from '../components/pages/Abibas';
import { Prices } from '../components/pages/Prices';
import App from '../../../App';
import { Model } from '../components/pages/Model';
import { ProtectedPage } from '../components/pages/ProtectedPage';
import { Login } from '../components/pages/Login';
import { useState } from 'react';

export const PATH = {
  MAIN: '',
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PROTECTED_PAGE: '/protected_page',
  PRICES: '/prices',
  ERROR404: '/error404',
  LOGIN: '/login',
  MODEL: '/:brandName/:modelId',
} as const;

const publicRoutes: RouteObject[] = [
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.ADIDAS,
    element: <Adidas />,
  },
  {
    path: PATH.MAIN,
    element: <Adidas />,
  },
  {
    path: PATH.PUMA,
    element: <Puma />,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />,
  },
  {
    path: PATH.PRICES,
    element: <Prices />,
  },
  {
    path: PATH.ERROR404,
    element: <Error404 />,
  },

  {
    path: PATH.MODEL,
    element: <Model />,
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED_PAGE,
    element: <ProtectedPage />,
  },
];

export const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {/* @ts-ignore  */}
      {isAuth ? <Outlet /> : <Navigate to={'/login'} />}
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR404} />,
    children: [
      ...publicRoutes,
      { element: <PrivateRoute />, children: privateRoutes },
    ],
  },
]);

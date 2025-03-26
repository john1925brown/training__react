import { ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {/* @ts-ignore  */}
      {isAuth ? children : <Navigate to={'/login'} />}
    </>
  );
};

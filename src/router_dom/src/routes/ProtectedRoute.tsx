import { ReactNode, useState } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const [logged, setLogged] = useState(false);

  return (
    <>
      {/* @ts-ignore  */}
      {logged ? children : <Navigate to={'/error404'} />}
    </>
  );
};

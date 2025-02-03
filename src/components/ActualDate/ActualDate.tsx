import { useEffect, useState } from 'react';

export const ActualDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalDate = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      return clearInterval(intervalDate);
    };
  }, []);

  const seconds =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  const minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
 
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

  return (
    <>
      <p>
        {hours}:{minutes}:{seconds}
      </p>
    </>
  );
};

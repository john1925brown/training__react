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

  return (
    <>
      <p>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </p>
    </>
  );
};

import { useEffect, useState } from 'react';

export const Storage = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    getLocalStorageHandler();
  }, []);

  useEffect(() => {
    setLocalStorageHandler();
  }, [value]);

  const incHandler = () => {
    setValue(value + 1);
  };

  const setLocalStorageHandler = () => {
    localStorage.setItem('value', JSON.stringify(value));
  };

  const getLocalStorageHandler = () => {
    let valueAsString = localStorage.getItem('value');
    if (valueAsString) {
      let valueFromLocalStorage = JSON.parse(valueAsString);

      setValue(valueFromLocalStorage);
    }
  };

  const removeItemHandler = () => {
    localStorage.removeItem('value');
  };

  const clearAllHandler = () => {
    localStorage.clear();
    setValue(0);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>
      <button onClick={setLocalStorageHandler}>setLocalStorage</button>
      <button onClick={getLocalStorageHandler}>getLocalStorage</button>
      <button onClick={removeItemHandler}>remove</button>
      <button onClick={clearAllHandler}>clear</button>
    </div>
  );
};

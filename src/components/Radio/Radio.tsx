import { useState } from 'react';
import './radio.css';

export const Radio = () => {
  const [isOn, setIsOn] = useState(false);

  const onClickHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div>
        <button className={isOn ? 'on__btn' : ''} onClick={onClickHandler}>
          On
        </button>

        <button className={!isOn ? 'off__btn' : ''} onClick={onClickHandler}>
          Off
        </button>
      </div>
    </>
  );
};

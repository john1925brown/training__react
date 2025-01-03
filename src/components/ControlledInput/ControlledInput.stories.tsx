import { ChangeEvent, useState } from 'react';

export default {};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('sas');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return <input value={parentValue} onChange={onChangeHandler} />;
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(!parentValue);
  };
  return (
    <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />
  );
};

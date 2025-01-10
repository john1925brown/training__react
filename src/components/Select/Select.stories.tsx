import { Select } from './Select';
import { useState } from 'react';

export default {
  title: 'Select',
  component: Select,
};

export const SelectWithValue = () => {
  const [value, setValue] = useState('2');
  return (
    <Select
      onChangeSelectHandler={setValue}
      value={value}
      items={[
        { value: '1', title: 'Minsk' },
        { value: '2', title: 'Kiev' },
        { value: '3', title: 'Wroclaw' },
      ]}
    />
  );
};

export const SelectWithoutValue = () => {
  const [value, setValue] = useState(null);

  return (
    <Select
      onChangeSelectHandler={setValue}
      value={value}
      items={[
        { value: '1', title: 'Minsk' },
        { value: '2', title: 'Kiev' },
        { value: '3', title: 'Wroclaw' },
      ]}
    />
  );
};

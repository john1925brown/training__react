import { useState } from 'react';
import styles from './Select.module.css';

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value?: any;
  onChangeSelectHandler: (value: any) => void;
  items: ItemType[];
};

export const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState<boolean>(false);
  const toggleItems = () => {
    setActive(!active);
  };
  const onItemClick = (value: any) => {
    props.onChangeSelectHandler(value);
    setActive(!active);
  };

  const selectedItem = props.items.find((item) => item.value === props.value);

  return (
    <div className={styles.select}>
      <span className={styles.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active && (
        <div className={styles.items}>
          {props.items.map((item) => (
            <div
              key={item.value}
              className={styles.item}
              onClick={() => {
                onItemClick(item.value);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

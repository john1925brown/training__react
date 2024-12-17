type StarPropsType = {
  selected: boolean;
  setStarsValue: (starsValue: 1 | 2 | 3 | 4 | 5) => void;
  value: 1 | 2 | 3 | 4 | 5;
};

export const Star = (props: StarPropsType) => {
  return (
    <span
      onClick={() => {
        props.setStarsValue(props.value);
      }}
    >
      {props.selected ? <b>star </b> : 'star '}
    </span>
  );
};

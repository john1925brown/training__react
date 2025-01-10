
type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  title: string;
  isCollapsed: boolean;
  collapsedHandler: () => void;
  items: ItemType[];
  onClickHandler: (value: any) => void;
};

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <h3 onClick={props.collapsedHandler}>{props.title}</h3>
      {props.isCollapsed ? (
        ''
      ) : (
        <AccordionBody items={props.items} onClickHandler={props.onClickHandler} />
      )}
    </div>
  );
};

type AccordionBodyPropsType = {
  items: ItemType[];
  onClickHandler: (value: any) => void;
};

const AccordionBody = (props: AccordionBodyPropsType) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li
            onClick={() => {
              props.onClickHandler(item.value);
            }}
            key={index}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

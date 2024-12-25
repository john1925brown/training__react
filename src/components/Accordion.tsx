import { useState } from 'react';

type AccordionPropsType = {
  title: string;
};

export const Accordion = (props: AccordionPropsType) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapsedHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <h3 onClick={collapsedHandler}>{props.title}</h3>
      {isCollapsed ? (
        ''
      ) : (
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      )}
    </div>
  );
};

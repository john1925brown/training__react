import { useState } from 'react';

type AccordeonPropsType = {
  title: string;
};

export const Accordeon = (props: AccordeonPropsType) => {
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

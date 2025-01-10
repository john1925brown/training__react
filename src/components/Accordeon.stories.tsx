import { Accordion } from './Accordion';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
};

const callback = action('isCollapsed want to change');
const onClickCallback = action('Item want to change');

export const collapsedAccordionMode = () => {
  return (
    <Accordion
      title="collapsedAccordionMode"
      isCollapsed={true}
      collapsedHandler={callback}
      items={[
        { title: 'a', value: 1 },
        { title: 's', value: 2 },
        { title: 'q', value: 3 },
      ]}
      onClickHandler={onClickCallback}
    />
  );
};

export const openedAccordionMode = () => {
  return (
    <Accordion
      title="openedAccordionMode"
      isCollapsed={false}
      collapsedHandler={callback}
      items={[
        { title: 'a', value: 1 },
        { title: 's', value: 2 },
        { title: 'q', value: 3 },
      ]}
      onClickHandler={onClickCallback}
    />
  );
};

export const modeChanging = () => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <Accordion
      title="openedAccordionMode"
      items={[
        { title: 'a', value: 1 },
        { title: 's', value: 2 },
        { title: 'q', value: 3 },
      ]}
      onClickHandler={onClickCallback}
      isCollapsed={value}
      collapsedHandler={() => {
        setValue(!value);
      }}
    />
  );
};

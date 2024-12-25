import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    title: 'menu',
  },
};

export const collapsedAccordion = () => {
  return <div>collapsedAccordion</div>;
};

export const openedAccordion = () => {
  return <div>openedAccordion</div>;
};

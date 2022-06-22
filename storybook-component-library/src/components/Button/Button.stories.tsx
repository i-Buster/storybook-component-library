import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';
import { Button, ButtonProps } from './Button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    backgroundColor: { control: 'color' },
    skin: {
      options: ['PRIMARY', 'SECONDARY'],
      control: { type: 'select' },
    },
    text: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Click me!',
      description: 'The text for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Click me!' },
      },
      control: {
        type: 'text'
      }
    }
  },
} as Meta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  skin: 'PRIMARY',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  skin: 'SECONDARY'
};

Primary.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const mainButton = canvas.getByRole("button");
  userEvent.click(mainButton);
  expect(args.onClick).toHaveBeenCalledTimes(1);
  expect(mainButton).toHaveClass('button')
  expect(mainButton).not.toBeDisabled()
  expect(mainButton.textContent).toBe('Book Hotel');
 };
 
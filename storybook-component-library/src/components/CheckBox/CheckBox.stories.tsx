import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { CheckBox } from './CheckBox';
import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>;

//👇 We create a “template” of how args map to rendering
const Template: Story<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const VACheckBox = Template.bind({});


VACheckBox.args = {
    label: 'Label Name',
    name: 'LabelName',
    id: 1,
    value:'',
    checked: true
};

VACheckBox.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const checkBox = canvas.getByRole("checkbox");
  expect(checkBox.checked).toEqual(true)
  fireEvent.click(checkBox)
  expect(checkBox.checked).toEqual(false)
 };
 
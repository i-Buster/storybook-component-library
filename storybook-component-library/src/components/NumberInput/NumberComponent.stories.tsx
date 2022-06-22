import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { NumberComponent } from './NumberComponent';
import { fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/NumberComponent',
  component: NumberComponent,
} as Meta<typeof NumberComponent>;

//👇 We create a “template” of how args map to rendering
const Template: Story<typeof NumberComponent> = (args) => <NumberComponent {...args} />;

export const VANumberInput = Template.bind({});

export const VAAgeInput = Template.bind({});


VANumberInput.args = {
    label: 'Enter Duration',
    name: 'EnterDuration',
    id: 1,
    min:1,
    max:21,
    value:3,
    required: true
};

VAAgeInput.args = {
    label: 'Enter Age',
    name: 'Enter \Age',
    id: 1,
    min:1,
    max:9,
    value:6,
    required: true
};

VANumberInput.play = () => {
  const label = document.querySelector("#numberLabel");
  expect(label.textContent).toBe('Enter Duration');
  
  const input = document.querySelector(".numberInput");
  expect(input.value).toBe('3');
  fireEvent.change(input, { target: { value: '4' } })
  expect(input.value).toBe('4');

 };
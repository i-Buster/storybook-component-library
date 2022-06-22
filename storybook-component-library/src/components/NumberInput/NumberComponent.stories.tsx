import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { NumberComponent } from './NumberComponent';

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
    label: 'Your Component Label',
    name: 'Enter Duration',
    id: 1,
    min:1,
    max:21,
    value:'',
    required: true
};

VAAgeInput.args = {
    label: 'Your Component Label',
    name: 'Enter Age',
    id: 1,
    min:1,
    max:9,
    value:'',
    required: true
};
import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { CheckBox } from './CheckBox';

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


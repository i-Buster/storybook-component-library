import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { DateComponent, DateComponentProps } from './Date';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/Date',
  component: DateComponent,
  argTypes: {
    name: { control: 'text' },
    // value: { control: 'date', description: "Creation date for departure.", name: 'departure date1' },
    required: { control: 'boolean' },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Click me!',
      description: 'Label for date component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Choose' },
      },
      control: {
        type: 'text'
      }
    }
  },
} as Meta<typeof DateComponent>;

//👇 We create a “template” of how args map to rendering
const Template: Story<DateComponentProps> = (args) => <DateComponent {...args} />;

export const VADateComponent = Template.bind({});


VADateComponent.args = {
    label: 'Select departure date', 
    name: 'datePicker',
    id: '1',
    value: '',
    required: true
};

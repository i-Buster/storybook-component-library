import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { SelectComponent } from './SelectComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/SelectComponent',
  component: SelectComponent,
} as Meta<typeof SelectComponent>;

//👇 We create a “template” of how args map to rendering
const Template: Story<typeof SelectComponent> = (args) => <SelectComponent {...args} />;

export const VASelectComponent = Template.bind({});


VASelectComponent.args = {
    label: 'Your Component Label',
    name: 'Enter Name',
    id: 1,
    options: [{
        value: "new-york",
        description: "New York"
    },
    {
        value: "orlando",
        description: "Orlando"
    },
    {
        value: "barbados",
        description: "Barbados"
    },
    {
        value: "toronto",
        description: "Toronto"
    }],
    value: 'Entered Value',
    required: true
};

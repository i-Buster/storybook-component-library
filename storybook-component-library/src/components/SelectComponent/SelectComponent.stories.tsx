import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import { SelectComponent } from './SelectComponent';
import { fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    label: 'Select City',
    name: 'citySelection',
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

VASelectComponent.play = () => {
    const selectLabel = document.querySelector("#selectLabel");
    expect(selectLabel?.textContent).toBe('Select City');
    
    const selectDropdown = document.querySelector(".selectDropdown");
    fireEvent.change(selectDropdown, { target: { value: 'orlando' } })
    expect(selectDropdown?.value).toBe('orlando');
   };
import { h } from 'preact';
import { Story, Meta } from '@storybook/preact';

import {LoadingSpinner}  from './LoadingSpinner';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/LoadingSpinner',
  component: LoadingSpinner,
} as Meta<typeof LoadingSpinner>;

//👇 We create a “template” of how args map to rendering
const Template: Story<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />;

export const VSELoadingSpinner = Template.bind({});
VSELoadingSpinner.args = {};






















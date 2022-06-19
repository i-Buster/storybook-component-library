// Button.stories.ts|tsx

import { h } from 'preact';
// ComponentMeta doesn't exist in @storybook/preact
import { Story, Meta } from '@storybook/preact';
import { Button, ButtonProps } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example/Button',
  component: Button,
} as Meta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  text: 'Search',
};

export const Secondary = Template.bind({});
Secondary.args = {
  skin: 'SECONDARY',
  text: 'Secondary Button',
};
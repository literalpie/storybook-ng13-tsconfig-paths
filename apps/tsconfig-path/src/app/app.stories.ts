import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {TestLibModule} from '@literalpie/test-lib';
export default {
  title: 'Example/Page',
  decorators: [
    moduleMetadata({
      imports: [TestLibModule]
    })
  ],
} as Meta;

const Template: Story = () => ({
  template: '<div>hello</div>'
});

export const LoggedIn = Template.bind({});

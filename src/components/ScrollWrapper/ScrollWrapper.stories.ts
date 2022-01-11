import type { Meta, StoryFn } from '@storybook/vue3';

import ScrollWrapper from './ScrollWrapper.vue';
import Screen from '../Screen/Screen.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>ScrollWrapper:</strong>&nbsp;A wrapper that provides vertical scrolling.', '<p style="margin-top: 10px;">Commonly used as a direct child of the Screen component.</p>');

const ScrollWrapperStories = {
  component: ScrollWrapper,
  title: 'Components/ScrollWrapper',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    position: 0,
    default: `Something to be scrolled
    <p style="margin-top: 20px; height: 800px"> Some really long content</p>
    <p>The bottom</p>`,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    position: { control: 'number' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
} as Meta<typeof ScrollWrapper>;

const defaultExample: StoryFn<typeof ScrollWrapper> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ScrollWrapper,
    Screen,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <Screen>
      <ScrollWrapper :position="position">
        <RenderString :string="defaultSlot" />
      </ScrollWrapper>
    </Screen>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Screen>
  <ScrollWrapper :position="position">
    Something to be scrolled
    <p style="margin-top: 20px; height: 800px"> Some really long content</p>
    <p>The bottom</p>
  </ScrollWrapper>
</Screen>`,
    },
  },
};

export {
  defaultExample,
};

export default ScrollWrapperStories;

import type { Meta, StoryFn } from '@storybook/vue3';

import SpecCard from './SpecCard.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>SpecCard:</strong> The SpecCard');

const SpecCardStories = {
  component: SpecCard,
  title: 'Components/SpecCard',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'EXAMPLE SPECCARD TITLE',
    default: '<TextParagraph>You can add content here...</TextParagraph>',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { control: 'text', name: 'Title' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
} as Meta<typeof SpecCard>;

const defaultExample: StoryFn<typeof SpecCard> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SpecCard,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <div style="margin-top: 20px;">
      <SpecCard :title="title">
        <RenderString :string="defaultSlot" v-if="defaultSlot"/>
      </SpecCard>
    </div>`,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<SpecCard :title="title">
  <TextParagraph>You can add content here...</TextParagraph>
</SpecCard>`,
    },
  },
};

export {
  defaultExample,
};

export default SpecCardStories;

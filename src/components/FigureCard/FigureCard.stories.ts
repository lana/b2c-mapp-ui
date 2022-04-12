import type { Meta, StoryFn } from '@storybook/vue3';

import FigureCard from './FigureCard.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>FigureCard:</strong>&nbsp;The FigureCard looks like a button containing a figure and a caption.');

const FigureCardStories = {
  component: FigureCard,
  title: 'Components/FigureCard',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    titleAbove: false,
    title: 'Example Title',
    imageSource: 'https://source.unsplash.com/random/116x26',
    default: '',
    lazy: false,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    titleAbove: { control: 'boolean', name: 'Title Above' },
    title: { control: 'text', name: 'Title' },
    imageSource: { control: 'text', name: 'Image Source (URL)' },
    lazy: { control: 'boolean', name: 'Is lazy?' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
} as Meta<typeof FigureCard>;

const defaultExample: StoryFn<typeof FigureCard> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    FigureCard,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <div>
      <div style="margin-top: 20px;">
        <FigureCard :title-above="titleAbove"
                    :title="title"
                    :image-source="imageSource"
                    :lazy="lazy"
        >
          <RenderString :string="defaultSlot" v-if="defaultSlot" />
        </FigureCard>
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<FigureCard :title-above="titleAbove"
            :title="title"
            :image-source="imageSource"
            :lazy="lazy"
/>`,
    },
  },
};

export {
  defaultExample,
};

export default FigureCardStories;

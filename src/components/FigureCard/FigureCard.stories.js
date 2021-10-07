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
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    titleAbove: { control: 'boolean', name: 'Title Above' },
    title: { control: 'text', name: 'Title' },
    imageSource: { control: 'text', name: 'Image Source (URL)' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
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
/>`,
    },
  },
};

export {
  defaultExample,
};

export default FigureCardStories;

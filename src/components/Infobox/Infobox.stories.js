import Infobox from './Infobox.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>Infobox:</strong>&nbsp;A simple info box.');

const InfoboxStories = {
  component: Infobox,
  title: 'Components/Infobox',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    default: 'Example Info...',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Infobox,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <Infobox>
      <RenderString :string="defaultSlot" v-if="defaultSlot" />
    </Infobox>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Infobox>
  Example Info...
</Infobox>
`,
    },
  },
};

export {
  defaultExample,
};

export default InfoboxStories;

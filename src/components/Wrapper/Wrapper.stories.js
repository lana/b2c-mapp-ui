import Wrapper from './Wrapper.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>Wrapper:</strong>&nbsp;Container to display information, it could be like a modal');

const WrapperStories = {
  component: Wrapper,
  title: 'Components/Wrapper',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    modal: false,
    default: 'Example wrapped content',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    modal: { control: 'boolean', name: 'Modal style?' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Wrapper,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <Wrapper :modal="modal">
      <RenderString :string="defaultSlot" v-if="defaultSlot" />
    </Wrapper>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Wrapper :modal="modal">
    <RenderString :string="defaultSlot" />
</Wrapper>`,
    },
  },
};

export {
  defaultExample,
};

export default WrapperStories;

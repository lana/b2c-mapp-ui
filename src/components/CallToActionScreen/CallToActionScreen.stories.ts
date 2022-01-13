import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';

import CallToActionScreen from './CallToActionScreen.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>CallToActionScreen:</strong>&nbsp;This can be used as a generic and configurable screen that has the following: title, description, image and button.');

const CallToActionScreenStories = {
  component: CallToActionScreen,
  title: 'Components/CallToActionScreen',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Example Title',
    description: 'Some description',
    buttonText: 'Example Button Text',
    default: '<WorkInProgressIcon/>',
    secondaryAction: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { name: 'Title', control: 'text' },
    description: { name: 'Description', control: 'text' },
    buttonText: { name: 'ButtonText', control: 'text' },
    default: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    secondaryAction: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
} as Meta<typeof CallToActionScreen>;

const defaultExample: StoryFn<typeof CallToActionScreen> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    CallToActionScreen,
    RenderString,
  },
  methods: {
    onClick: action('Click!'),
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
      <CallToActionScreen :title="title"
                          :description="description"
                          :button-text="buttonText"
                          @click="onClick"
      >
        <RenderString :string="defaultSlot" />
        <template v-slot:secondaryAction v-if="secondaryAction"><RenderString :string="secondaryAction" /></template>
      </CallToActionScreen>
`,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<CallToActionScreen :title="title"
                    :description="description"
                    :button-text="buttonText"
                    @click="onClick"
>
  <WorkInProgressIcon/>
</CallToActionScreen>
      `,
    },
  },
};

export {
  defaultExample,
};

export default CallToActionScreenStories;

import type { Meta, StoryFn } from '@storybook/vue3';

import Steps from './Steps.vue';
import Screen from '../Screen/Screen.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>Steps:</strong>&nbsp;A component that lets the user lists elements');

const StepsStories = {
  component: Steps,
  title: 'Components/Steps',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    dataTestId: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    dataTestId: { control: { type: 'text' }, name: 'Data test id' },
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
  },
} as Meta<typeof Steps>;

const defaultExample: StoryFn<typeof Steps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Steps,
    Screen,
    ScrollWrapper,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
  <Screen>
    <ScrollWrapper>
      <Steps :data-test-id="dataTestId">
        <RenderString v-if="defaultSlot" :string="defaultSlot"/>
      </Steps>
    </ScrollWrapper>
  </Screen>
  `,
});
defaultExample.args = {
  default: `<Step><ContentItem title="Title" meta-text="Description" :has-forward-button="false" /></Step>
<Step><ContentItem title="Title" meta-text="Description" :has-forward-button="false" /></Step>
<Step><ContentItem title="Title" meta-text="Description" :has-forward-button="false" /></Step>`,
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
  <Steps>
    <Step><ContentItem title="Title" meta-text="Description" :has-forward-button="false" /></Step>
    <Step><ContentItem title="Title" meta-text="Description" :has-forward-button="false" /></Step>
    <Step><ContentItem title="Title" meta-text="Description" :has-forward-button="false" /></Step>
  </Steps>
      `,
    },
  },
};

const customStepsExample: StoryFn<typeof Steps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Steps,
    Screen,
    ScrollWrapper,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
  <Screen>
    <ScrollWrapper>
      <Steps>
        <RenderString v-if="defaultSlot" :string="defaultSlot"/>
      </Steps>
    </ScrollWrapper>
  </Screen>
  `,
});
customStepsExample.args = {
  default: `<Step>
  <template v-slot:icon>
    <TextParagraph size="xsmall" style="background-color: #fff; width: 12px; text-align: center;">1</TextParagraph>
  </template>
  <ContentItem title="Title" meta-text="Description" :has-forward-button="false" />
</Step>
<SpecCard title="Title"><TextParagraph>You can add content here...</TextParagraph></SpecCard>
<Step style="padding: 16px;"><Button>Button</Button></Step>`,
};
customStepsExample.parameters = {
  docs: {
    source: {
      code: `
  <Steps>
    <Step>
      <template v-slot:icon>
        <TextParagraph size="xsmall" style="background-color: #fff; width: 12px; text-align: center;">1</TextParagraph>
      </template>
      <ContentItem title="Title" meta-text="Description" :has-forward-button="false" />
    </Step>
    <SpecCard title="Title"><TextParagraph>You can add content here...</TextParagraph></SpecCard>
    <Step><Button style="margin: 16px;">Button</Button></Step>
  </Steps>
      `,
    },
  },
};

export {
  defaultExample,
  customStepsExample,
};

export default StepsStories;

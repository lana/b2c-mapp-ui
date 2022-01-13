import type { Meta, StoryFn } from '@storybook/vue3';

import Timeline from './Timeline.vue';
import Screen from '../Screen/Screen.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>Timeline:</strong>&nbsp;A component that lets the user have a line joining elements');

const TimelineStories = {
  component: Timeline,
  title: 'Components/Timeline',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
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
    startPoint: {
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
} as Meta<typeof Timeline>;

const defaultExample: StoryFn<typeof Timeline> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Timeline,
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
      <Timeline>
        <RenderString v-if="defaultSlot" :string="defaultSlot" fragment/>
        <template v-slot:startPoint v-if="startPoint">
          <RenderString v-if="startPoint" :string="startPoint" fragment/>
        </template>
      </Timeline>
    </ScrollWrapper>
  </Screen>
  `,
});
defaultExample.args = {
  default: `<SpecCard key="1"><Progress :percentage="20" /></SpecCard>
<SpecCard key="2"><Progress :percentage="50" /></SpecCard>
<SpecCard key="3"><Progress :percentage="100" color="green" /></SpecCard>`,
  startPoint: '<SheepRunningIcon class="icon" :style="{ width: \'80px\' }" />',
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
  <Timeline>
    <SpecCard key="1"><Progress :percentage="20" /></SpecCard>
    <SpecCard key="2"><Progress :percentage="50" /></SpecCard>
    <SpecCard key="3"><Progress :percentage="100" color="green" /></SpecCard>
    <template v-slot:startPoint>
      <SheepRunningIcon class="icon" :style="{ width: '80px' }" />
    </template>
  </Timeline>
      `,
    },
  },
};

export {
  defaultExample,
};

export default TimelineStories;

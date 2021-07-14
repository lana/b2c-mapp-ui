import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Timeline from './Timeline.vue';
import Screen from '../Screen/Screen.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import RenderString from '../../lib/renderString';

const deviceDecorator = () => ({
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  components: { StorybookMobileDeviceSimulator },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Timeline:</strong>&nbsp;A component that lets the user have a line joining elements</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <story />
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});
deviceDecorator.argTypes = {
  device: { control: { type: 'select', options: [...availableDevices] } },
};

const TimelineStories = {
  component: Timeline,
  title: 'Components/Timeline',
  decorators: [withKnobs, deviceDecorator],
  argTypes: {
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
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
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
  startPoint: '<SheepRunningIcon class="icon" width="80" />',
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
      <SheepRunningIcon class="icon" width="80" />
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

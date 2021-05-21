import { withKnobs, select, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import SpecCard from './SpecCard.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const SpecCardStories = {
  component: SpecCard,
  title: 'Components/SpecCard',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    SpecCard,
    TextParagraph,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'EXAMPLE SPECCARD TITLE'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
    <h2><strong>SpecCard:</strong>&nbsp;The SpecCard.</h2>
    <hr>
    <StorybookMobileDeviceSimulator :device="device">
      <div style="margin-top: 20px;">
        <SpecCard :title="title">
          <TextParagraph>You can add content here...</TextParagraph>
        </SpecCard>
      </div>
    </StorybookMobileDeviceSimulator>
    </div>`,
});

export {
  defaultExample,
};

export default SpecCardStories;

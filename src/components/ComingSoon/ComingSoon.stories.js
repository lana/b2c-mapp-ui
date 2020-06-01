import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ComingSoon from './ComingSoon.vue';

const ComingSoonStories = {
  component: ComingSoon,
  title: 'Components/ComingSoon',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ComingSoon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Próximamente...'),
    },
    description: {
      default: text('Description', 'Estamos trabajando en esta funcionalidad y pronto podrás acceder a ella.'),
    },
    closeButtonText: {
      default: text('CloseButtonText', 'Aceptar'),
    },
  },
  methods: {
    onClose: action('Close!'),
  },
  template: `
  <div style="margin: 10px 50px 10px 50px;">
    <h2><strong>ComingSoon:</strong>&nbsp;This can be used to inform the user that a functionality will be available soon.</h2>
    <hr>
    <StorybookMobileDeviceSimulator :device="device">
      <ComingSoon :title="title"
                  :description="description"
                  :closeButtonText="closeButtonText"
                  @close="onClose"
      >
      </ComingSoon>
    </StorybookMobileDeviceSimulator>
  </div>
`,

});

export {
  defaultExample,
};

export default ComingSoonStories;

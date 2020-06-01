import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import SelfieWebCam from './SelfieWebCam.vue';

const SelfieWebCamStories = {
  component: SelfieWebCam,
  title: 'Components/SelfieWebCam',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    SelfieWebCam,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  data() {
    return {
      deviceId: '',
    };
  },
  methods: {
    onCamerasReady() {
      this.$refs.webcam.startSelfie();
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>SelfieWebCam:</strong>&nbsp;A customized WebCam component for taking Selfies</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin-top: 40px; width: 100%; display: flex; justify-content: center">
          <SelfieWebCam ref="webcam"
                        style="width: 240px; height: 320px; border-radius: 24px"
                        screenshot-format="image/jpeg"
                        :device-id="deviceId"
                        :height="640"
                        :width="480"
                        :resolution="{ height: 640, width: 480 }"
                        @cameras="onCamerasReady"
          />
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default SelfieWebCamStories;

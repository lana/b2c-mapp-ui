import SelfieWebCam from './SelfieWebCam.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>SelfieWebCam:</strong>&nbsp;A customized WebCam component for taking Selfies');

const SelfieWebCamStories = {
  component: SelfieWebCam,
  title: 'Components/SelfieWebCam',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    width: '480',
    height: '640',
    autoplay: true,
    screenshotFormat: 'image/jpeg',
    selectFirstDevice: false,
    deviceId: '',
    playsinline: true,
    resolution: { height: 640, width: 480 },
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    width: { control: 'text', name: 'Width' },
    height: { control: 'text', name: 'Height' },
    autoplay: { control: 'boolean', name: 'Autoplay?' },
    screenshotFormat: { control: 'text', name: 'Screenshot Format' },
    selectFirstDevice: { control: 'boolean', name: 'Select First Device?' },
    deviceId: { control: 'text', name: 'Device Id' },
    playsinline: { control: 'boolean', name: 'Plays Inline?' },
    resolution: { control: 'object', name: 'Resolution' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SelfieWebCam,
  },
  methods: {
    onCamerasReady() {
      this.$refs.webcam.startSelfie();
    },
  },
  template: `
    <SelfieWebCam ref="webcam"
                  style="width: 240px; height: 320px; border-radius: 24px"
                  :screenshot-format="screenshotFormat"
                  :device-id="deviceId"
                  :height="height"
                  :width="height"
                  :resolution="resolution"
                  :autoplay="autoplay"
                  :playsinline="playsinline"
                  :selectFirstDevice="selectFirstDevice"
                  @cameras="onCamerasReady"
    />
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<SelfieWebCam ref="webcam"
              style="width: 240px; height: 320px; border-radius: 24px"
              :screenshot-format="screenshotFormat"
              :device-id="deviceId"
              :height="height"
              :width="height"
              :resolution="resolution"
              :autoplay="autoplay"
              :playsinline="playsinline"
              :select-first-device="selectFirstDevice"
              @cameras="onCamerasReady"
/>`,
    },
  },
};

export {
  defaultExample,
};

export default SelfieWebCamStories;

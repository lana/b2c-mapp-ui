import StorybookMobileDeviceSimulator from '../components/StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../components/StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';

const createDeviceDecorator = (title, subtitle = '') => {
  const deviceDecorator = (story, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { StorybookMobileDeviceSimulator, story },
    template: `
  <div style="margin: 10px 50px 10px 50px; height: 100%;">
    <h2>${title}</h2>
    ${subtitle}
    <hr>
    <StorybookMobileDeviceSimulator :device="device">
      <story/>
    </StorybookMobileDeviceSimulator>
  </div>`,
  });
  deviceDecorator.args = {
    device: availableDevices[0],
  };
  deviceDecorator.argTypes = {
    device: { name: 'Simulated Mobile Device', control: 'select', options: [...availableDevices], defaultValue: availableDevices[0] },
  };
  return deviceDecorator;
};

const createOptionalDeviceDecorator = (title) => {
  const deviceDecorator = (story, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { StorybookMobileDeviceSimulator, story },
    template: `
  <div style="margin: 10px 50px 10px 50px; height: 100%;">
    <h2>${title}</h2>
    <hr>
    <StorybookMobileDeviceSimulator v-if="device" :device="device">
      <story/>
    </StorybookMobileDeviceSimulator>
    <story v-if="!device"/>
  </div>`,
  });
  deviceDecorator.args = {
    device: availableDevices[0],
  };
  deviceDecorator.argTypes = {
    device: { name: 'Simulated Mobile Device', control: 'select', options: [...availableDevices], defaultValue: availableDevices[0] },
  };
  return deviceDecorator;
};

const createScreenDecorator = (title) => {
  const deviceDecorator = (story, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { story },
    template: `
  <div style="margin: 10px 50px 10px 50px; height: 100%;">
    <h2>${title}</h2>
    <hr>
    <story/>
  </div>`,
  });
  return deviceDecorator;
};

export { createDeviceDecorator, createOptionalDeviceDecorator, createScreenDecorator };

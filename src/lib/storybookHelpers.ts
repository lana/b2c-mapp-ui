import type { StoryFn } from '@storybook/vue3';

import StorybookMobileDeviceSimulator from '../components/StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { getAvailableDevices } from '../components/StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.utils';

const availableDevices = getAvailableDevices();

const createDeviceDecorator = (title: string, subtitle = '') => {
  const deviceDecorator: StoryFn = (story, { argTypes, args }) => ({
    props: Object.keys(argTypes),
    components: { StorybookMobileDeviceSimulator, story },
    setup() { return { ...args }; },
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
    device: { name: 'Simulated Mobile Device', control: 'select', options: [...availableDevices] },
  };
  return deviceDecorator;
};

const createOptionalDeviceDecorator = (title: string) => {
  const deviceDecorator: StoryFn = (story, { argTypes, args }) => ({
    props: Object.keys(argTypes),
    components: { StorybookMobileDeviceSimulator, story },
    setup() { return { ...args }; },
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
    device: { name: 'Simulated Mobile Device', control: 'select', options: [...availableDevices] },
  };
  return deviceDecorator;
};

const createScreenDecorator = (title: string) => {
  const deviceDecorator: StoryFn = (story, { argTypes, args }) => ({
    props: Object.keys(argTypes),
    components: { story },
    setup() { return { ...args }; },
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

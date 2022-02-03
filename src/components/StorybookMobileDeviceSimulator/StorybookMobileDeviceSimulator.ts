import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import type { Device, DeviceName } from './StorybookMobileDeviceSimulator.utils';
import { deviceNameToResolutionLookup, getAvailableDevices } from './StorybookMobileDeviceSimulator.utils';

const StorybookMobileDeviceSimulator = defineComponent({
  name: 'StorybookMobileDeviceSimulator',
  props: {
    device: {
      type: String as PropType<DeviceName>,
      default: getAvailableDevices()[0],
      validator: (value: DeviceName) => getAvailableDevices().includes(value),
    },
  },
  computed: {
    resolution(): Device {
      const result = (deviceNameToResolutionLookup[this.device] || deviceNameToResolutionLookup.default);
      return result;
    },
  },
});

export default StorybookMobileDeviceSimulator;

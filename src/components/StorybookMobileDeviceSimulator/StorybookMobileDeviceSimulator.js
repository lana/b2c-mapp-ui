// TODO: Add more devices below (get a list of the most common devices and their resolutions from the Mobile team)

const deviceNameLookup = {
  default: 'default',
  pixel2: 'Pixel 2',
  galaxyS5: 'Galaxy S5',
  iphone5: 'iPhone 5',
};

const availableDevices = Object.values(deviceNameLookup);

const deviceNameToResolutionLookup = {
  [deviceNameLookup.default]: {
    width: '420px',
    height: '640px',
  },
  [deviceNameLookup.pixel2]: {
    width: '411px',
    height: '731px',
  },
  [deviceNameLookup.galaxyS5]: {
    width: '360px',
    height: '640px',
  },
  [deviceNameLookup.iphone5]: {
    width: '320px',
    height: '568px',
  },
};

const props = {
  device: {
    type: String,
    default: deviceNameLookup.default,
    validator(value) { return (availableDevices.includes(value)); },
  },
};

const computed = {
  resolution() {
    const result = (deviceNameToResolutionLookup[this.device] || deviceNameToResolutionLookup[deviceNameLookup.default]);
    return result;
  },
};

const StorybookMobileDeviceSimulator = {
  props,
  computed,
};

export { availableDevices };

export default StorybookMobileDeviceSimulator;

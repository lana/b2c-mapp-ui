interface Device {
  width: string,
  height: string,
}

// TODO: Add more devices below (get a list of the most common devices and their resolutions from the Mobile team)
enum DeviceName {
  default = 'default',
  small = 'Small',
  medium = 'Medium',
  large = 'Large',
  extraLarge = 'Extra Large',
  pixel2 = 'Pixel 2',
  galaxyS5 = 'Galaxy S5',
  iphone5 = 'iPhone 5',
  samsungA30 = 'Samsung A30',
  samsungA50 = 'Samsung A50',
  huaweiMate20Lite = 'Huawei Mate 20 Lite',
}

const deviceNameToResolutionLookup: { [key in DeviceName]: Device } = {
  [DeviceName.default]: {
    width: '420px',
    height: '640px',
  },
  [DeviceName.small]: {
    width: '320px',
    height: '568px',
  },
  [DeviceName.medium]: {
    width: '360px',
    height: '640px',
  },
  [DeviceName.large]: {
    width: '360px',
    height: '780px',
  },
  [DeviceName.extraLarge]: {
    width: '412px',
    height: '892px',
  },
  [DeviceName.pixel2]: {
    width: '411px',
    height: '731px',
  },
  [DeviceName.galaxyS5]: {
    width: '360px',
    height: '640px',
  },
  [DeviceName.iphone5]: {
    width: '320px',
    height: '568px',
  },
  [DeviceName.samsungA30]: {
    width: '412px',
    height: '892px',
  },
  [DeviceName.samsungA50]: {
    width: '412px',
    height: '892px',
  },
  [DeviceName.huaweiMate20Lite]: {
    width: '360px',
    height: '780px',
  },
};

const getAvailableDevices = () => Object.values(DeviceName);

export type { Device, DeviceName };
export { getAvailableDevices, deviceNameToResolutionLookup };

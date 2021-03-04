import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { DocumentFilledIcon, PaymentsIcon, ColorWalletIcon, DiscountIcon } from '@lana/b2c-mapp-ui-assets';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import BoxContentItem from './BoxContentItem.vue';

const BoxContentItemStories = {
  component: BoxContentItem,
  title: 'Components/BoxContentItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    BoxContentItem,
    DocumentFilledIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    metaText: {
      default: text('Meta text', 'Example Metatext'),
    },
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <BoxContentItem :title="title"
                     :meta-text="metaText"
                     :disabled="disabled"
                     @click="onClick"
        >
          <DocumentFilledIcon/>
        </BoxContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withImage = () => ({
  components: {
    BoxContentItem,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;Example With Image</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <BoxContentItem title="Example with Image"
                     meta-text="Example metatext"
        >
          <img src="https://source.unsplash.com/random/48x48"/>
        </BoxContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withIcon = () => ({
  components: {
    BoxContentItem,
    DocumentFilledIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    success: {
      default: boolean('Is in Success state?', false),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    metaText: {
      default: text('Meta text', 'Example Metatext'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;Example With Icon</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <BoxContentItem title="Example with Icon"
                     meta-text="Example metatext"
                     no-border
                     :success="success"
        >
          <DocumentFilledIcon/>
        </BoxContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const successState = () => ({
  components: {
    BoxContentItem,
    DocumentFilledIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    success: {
      default: boolean('Has Success forward icon?', true),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    metaText: {
      default: text('Meta text', 'Example Metatext'),
    },
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;A list item with success state, it does not redirect anywhere, it just provides success/completed information.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <BoxContentItem :title="title"
                     :meta-text="metaText"
                     :disabled="disabled"
                     :success="success"
                     @click="onClick"
        >
          <DocumentFilledIcon/>
        </BoxContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const listExample = () => ({
  components: {
    BoxContentItem,
    PaymentsIcon,
    ColorWalletIcon,
    DiscountIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    metaText: {
      default: text('Meta text', 'Example Metatext'),
    },
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <BoxContentItem :title="title"
                     :meta-text="metaText"
                     :disabled="disabled"
                     @click="onClick"
        >
          <PaymentsIcon/>
        </BoxContentItem>
        <BoxContentItem :title="title"
                     :meta-text="metaText"
                     :disabled="disabled"
                     @click="onClick"
        >
          <ColorWalletIcon/>
        </BoxContentItem>
        <BoxContentItem :title="title"
                     :meta-text="metaText"
                     :disabled="disabled"
                     @click="onClick"
        >
          <DiscountIcon/>
        </BoxContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  withImage,
  withIcon,
  successState,
  listExample,
};

export default BoxContentItemStories;

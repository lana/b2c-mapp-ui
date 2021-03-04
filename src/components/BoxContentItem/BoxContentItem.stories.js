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
      <h2><strong>BoxContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen. <strong>IMPORTANT: </strong> Please note that in order to have the display in boxes, we'll need to use flexbox</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
          <BoxContentItem style="flex-basis: 35%"
                          :title="title"
                          :meta-text="metaText"
                          :disabled="disabled"
                          @click="onClick"
          >
            <DocumentFilledIcon/>
          </BoxContentItem>
        </div>
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
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;Example With Image</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
          <BoxContentItem style="flex-basis: 35%"
                          title="Example with Image"
                          meta-text="Example metatext"
                          @click="onClick"
          >
            <img src="https://source.unsplash.com/random/48x48"/>        
          </BoxContentItem>
        </div>
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
    methods: {
      onClick: action('Click!'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;Example With Icon</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
          <BoxContentItem style="flex-basis: 35%"
                          title="Example with Icon"
                          meta-text="Example metatext"
                          @click="onClick"
          >         
            <DocumentFilledIcon/>
          </BoxContentItem>
        </div>
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
      default: boolean('Is in Success state?', true),
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
       <div style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
         <BoxContentItem style="flex-basis: 35%"
                         :title="title"
                         :meta-text="metaText"
                         :disabled="disabled"
                         :success="success"
                         @click="onClick"
        >
          <DocumentFilledIcon/>
        </BoxContentItem>
       </div>
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
    success: {
      default: boolean('Is in Success state?', true),
    },
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>BoxContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen. In order to have the display in boxes, we'll need to use flex</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
          <BoxContentItem style="flex-basis: 35%" 
                          title="With success state"
                          :meta-text="metaText"
                          :disabled="disabled"
                          :success="success"
                          @click="onClick"
          >
            <PaymentsIcon/>
          </BoxContentItem>
          <BoxContentItem style="flex-basis: 35%" 
                          :title="title"
                          :meta-text="metaText"
                          :disabled="disabled"
                          @click="onClick"
          >
            <ColorWalletIcon/>
          </BoxContentItem>
          <BoxContentItem style="flex-basis: 35%"
                          :title="title"
                          :meta-text="metaText"
                          :disabled="disabled"
                          @click="onClick"
          >
            <DiscountIcon/>
          </BoxContentItem>
        </div>
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

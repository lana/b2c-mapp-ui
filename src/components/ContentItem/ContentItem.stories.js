import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ContentItem from './ContentItem.vue';

const ContentItemStories = {
  component: ContentItem,
  title: 'Components/ContentItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ContentItem,
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
    hasForwardButton: {
      default: boolean('Has Forward Button?', true),
    },
    noBorder: {
      default: boolean('Hide Border?', false),
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
      <h2><strong>ContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ContentItem :title="title"
                     :meta-text="metaText"
                     :has-forward-button="hasForwardButton"
                     :no-border="noBorder"
                     :disabled="disabled"
                     @click="onClick"
        >
          <DocumentFilledIcon/>
        </ContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withImage = () => ({
  components: {
    ContentItem,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ContentItem:</strong>&nbsp;Example With Image</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ContentItem title="Example with Image"
                     meta-text="Example metatext"
        >
          <img src="https://source.unsplash.com/random/48x48"/>
        </ContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withIcon = () => ({
  components: {
    ContentItem,
    DocumentFilledIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    hasForwardButton: {
      default: boolean('Has Forward Button?', true),
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
      <h2><strong>ContentItem:</strong>&nbsp;Example With Icon</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ContentItem title="Example with Icon"
                     meta-text="Example metatext"
                     no-border
                     :success="success"
                     :has-forward-button="hasForwardButton"
        >
          <DocumentFilledIcon/>
        </ContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const successState = () => ({
  components: {
    ContentItem,
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
    hasForwardButton: {
      default: boolean('Has Forward Button?', true),
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
      <h2><strong>ContentItem:</strong>&nbsp;A list item with success state, it does not redirect anywhere, it just provides success/completed information.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ContentItem :title="title"
                     :meta-text="metaText"
                     :has-forward-button="hasForwardButton"
                     no-border
                     :disabled="disabled"
                     :success="success"
                     @click="onClick"
        >
          <DocumentFilledIcon/>
        </ContentItem>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  withImage,
  withIcon,
  successState,
};

export default ContentItemStories;

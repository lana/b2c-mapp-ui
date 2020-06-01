import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ActionItem from './ActionItem.vue';

const ActionItemStories = {
  component: ActionItem,
  title: 'Components/ActionItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ActionItem,
    DocumentFilledIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example ActionItem'),
    },
    highlight: {
      default: boolean('Highlight', false),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ActionItem:</strong>&nbsp;A list item which takes the user to perform an action in another screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ul>
          <ActionItem :title="title"
                      :highlight="highlight"
                      @click="onClick"
          >
            1st
          </ActionItem>
          <ActionItem :title="title"
                      :highlight="highlight"
                      @click="onClick"
          >
            2nd
          </ActionItem>
          <ActionItem :title="title"
                      :highlight="highlight"
                      @click="onClick"
          >
            <div>
              <img src="https://source.unsplash.com/random/48x48"/>
            </div>
          </ActionItem>
          <ActionItem :title="title"
                      :highlight="highlight"
                      @click="onClick"
          >
            <div>
              <DocumentFilledIcon/>
            </div>
          </ActionItem>
        </ul>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default ActionItemStories;

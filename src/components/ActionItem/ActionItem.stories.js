import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ActionItem from './ActionItem.vue';
import RenderString from '../../lib/renderString';

const deviceDecorator = () => ({
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  components: { StorybookMobileDeviceSimulator },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ContentRadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <story />
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});
deviceDecorator.argTypes = {
  device: { control: { type: 'select', options: [...availableDevices] } },
};

const ActionItemStories = {
  component: ActionItem,
  title: 'Components/ActionItem',
  decorators: [withKnobs, deviceDecorator],
  args: {
    title: 'Example ActionItem',
    description: '',
    status: '',
    default: 'Default slot',
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    status: { control: { type: 'text' } },
    highlight: { control: 'boolean' },
    default: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ActionItem,
    RenderString,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <ul>
      <ActionItem :title="title"
                  :description="description"
                  :highlight="highlight"
                  :status="status"
                  @click="onClick"
      >
        <RenderString :string="defaultSlot" />
      </ActionItem>
    </ul>
  `,
});
defaultExample.args = {
  title: 'Example ActionItem',
  default: 'Default slot',
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ul>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    Default slot
  </ActionItem>
</ul>
      `,
    },
  },
};

const fullExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ActionItem,
    DocumentFilledIcon,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
        <ul>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            1st
          </ActionItem>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            2nd
          </ActionItem>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            <div>
              <img src="https://source.unsplash.com/random/48x48"/>
            </div>
          </ActionItem>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            <div>
              <DocumentFilledIcon/>
            </div>
          </ActionItem>
        </ul>
  `,
});
fullExample.argTypes = {
  ...ActionItemStories.argTypes,
  default: { table: { disable: true } },
};
fullExample.parameters = {
  docs: {
    source: {
      code: `
<ul>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    1st
  </ActionItem>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    2nd
  </ActionItem>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    <div>
      <img src="https://source.unsplash.com/random/48x48"/>
    </div>
  </ActionItem>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    <div>
      <DocumentFilledIcon/>
    </div>
  </ActionItem>
</ul>`,
    },
  },
};

export {
  defaultExample,
  fullExample,
};

export default ActionItemStories;

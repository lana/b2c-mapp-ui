import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import { InfoIcon, DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets/dist/index';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import CopyableListItem from './CopyableListItem.vue';
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

const CopyableListItemStories = {
  component: CopyableListItem,
  title: 'Components/CopyableListItem',
  decorators: [withKnobs, deviceDecorator],
  args: {
    title: 'Example Title',
    text: 'Example Text',
    dataTestId: '',
    hideButton: false,
    disabled: false,
    default: '<InfoIcon width="24" />',
  },
  argTypes: {
    hideButton: { name: 'Is copy button hidden?', control: 'boolean' },
    disabled: { name: 'Is disabled?', control: 'boolean' },
    title: { name: 'Title', control: { type: 'text' } },
    text: { name: 'Text', control: { type: 'text' } },
    dataTestId: { control: { type: 'text' } },
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
    CopyableListItem,
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
    <CopyableListItem :title="title"
                      :text="text"
                      :hide-button="hideButton"
                      :disabled="disabled"
                      @click="onClick"
    >
      <RenderString :string="defaultSlot" />
    </CopyableListItem>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<CopyableListItem :title="title"
                  :text="text"
                  :hide-button="hideButton"
                  :disabled="disabled"
                  @click="onClick"
>
  <InfoIcon/>
</CopyableListItem>
      `,
    },
  },
};

const moreExampleStates = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    CopyableListItem,
    InfoIcon,
    DocumentFilledIcon,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
        <ul>
          <CopyableListItem title="An info example"
                            text="Text to be copied"
                            @click="onClick"
          >
            <DocumentFilledIcon width="24"/>
          </CopyableListItem>
          <CopyableListItem title="Random URL (with hidden copy button)"
                            text="https://source.unsplash.com/random/24x24"
                            hide-button
                            @click="onClick"
          >
            <img src="https://source.unsplash.com/random/24x24"/>
          </CopyableListItem>
          <CopyableListItem title="Some Title"
                            text="1234567890ABCDE"
                            @click="onClick"
          >
            <DocumentFilledIcon width="24"/>
          </CopyableListItem>
          <CopyableListItem title="Another Title"
                            text="1234567890ABCDE"
                            @click="onClick"
          >
            <InfoIcon width="24"/>
          </CopyableListItem>
        </ul>
  `,
});
moreExampleStates.argTypes = {
  ...CopyableListItemStories.argTypes,
  default: { table: { disable: true } },
  title: { table: { disable: true } },
  text: { table: { disable: true } },
  disabled: { table: { disable: true } },
  hideButton: { table: { disable: true } },
  dataTestId: { table: { disable: true } },
};
moreExampleStates.parameters = {
  docs: {
    source: {
      code: `
<ul>
  <CopyableListItem title="An info example"
                    text="Text to be copied"
                    @click="onClick"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Random URL (with hidden copy button)"
                    text="https://source.unsplash.com/random/24x24"
                    hide-button
                    @click="onClick"
  >
    <img src="https://source.unsplash.com/random/24x24"/>
  </CopyableListItem>
  <CopyableListItem title="Some Title"
                    text="1234567890ABCDE"
                    @click="onClick"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Another Title"
                    text="1234567890ABCDE"
                    @click="onClick"
  >
    <InfoIcon/>
  </CopyableListItem>
</ul>`,
    },
  },
};

export {
  defaultExample,
  moreExampleStates,
};

export default CopyableListItemStories;

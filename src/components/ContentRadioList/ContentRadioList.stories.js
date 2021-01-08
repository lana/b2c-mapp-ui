import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { CheckBoldIcon } from '@lana/b2c-mapp-ui-assets';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ContentRadioList from './ContentRadioList.vue';

const ContentRadioListStories = {
  component: ContentRadioList,
  title: 'Components/ContentRadioList',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ContentRadioList,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
  },
  data() {
    return {
      selectedValue: 'option2',
      options: [
        {
          title: 'Option 1',
          metaText: 'Description 1',
          value: 'option1',
        },
        {
          title: 'Option 2',
          metaText: 'Description 2',
          value: 'option2',
        },
        {
          title: 'Option 3',
          metaText: 'Description 3',
          value: 'option3',
        },
      ],
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ContentRadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ContentRadioList v-model="selectedValue"
                          id="exampleContentRadioList"
                          :title="title"
                          :options="options"
                          :disabled="disabled"
                          @input="onInput"
        />
        <hr>
        <div style="margin: 20px">
          Bound value: {{ selectedValue }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const withCustomCheckedUncheckedIcons = () => ({
  components: {
    ContentRadioList,
    CheckBoldIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
  },
  data() {
    return {
      selectedValue: 'option1',
      options: [
        {
          title: 'Option 1',
          metaText: 'Description 1',
          value: 'option1',
        },
        {
          title: 'Option 2',
          metaText: 'Description 2',
          value: 'option2',
        },
        {
          title: 'Option 3',
          metaText: 'Description 3',
          value: 'option3',
        },
      ],
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ContentRadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ContentRadioList v-model="selectedValue"
                          id="exampleContentRadioList"
                          :title="title"
                          :options="options"
                          :disabled="disabled"
                          @input="onInput"
        >
          <template v-slot:checked-icon>
            <CheckBoldIcon/>
          </template>
          <template v-slot:unchecked-icon>
            <div />
          </template>
        </ContentRadioList>
        <hr>
        <div style="margin: 20px">
          Bound value: {{ selectedValue }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  withCustomCheckedUncheckedIcons,
};

export default ContentRadioListStories;

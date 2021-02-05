import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import * as AllIcons from '@lana/b2c-mapp-ui-assets/dist/index';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ContentRadioList from './ContentRadioList.vue';
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

const ContentRadioListStories = {
  component: ContentRadioList,
  title: 'Components/ContentRadioList',
  decorators: [withKnobs, deviceDecorator],
  args: {
    id: 'exampleContentRadioList',
    dataTestId: 'content-radio-list',
  },
  argTypes: {
    options: { control: 'object' },
    value: { control: 'text' },
    id: { control: 'text' },
    dataTestId: { control: 'text' },
    checkedIcon: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    uncheckedIcon: {
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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ContentRadioList,
    ...AllIcons,
    RenderString,
  },
  data() {
    return {
      selectedValue: args.value,
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  watch: {
    value() {
      this.selectedValue = this.value;
    },
  },
  template: `
    <div>
      <ContentRadioList v-model="selectedValue"
                        :id="id"
                        :data-test-id="dataTestId"
                        :options="options"
                        @input="onInput"
      >
        <template v-if="checkedIcon" #checkedIcon>
          <RenderString :string="checkedIcon" />
        </template>
        <template v-if="uncheckedIcon" #uncheckedIcon>
          <RenderString :string="uncheckedIcon" />
        </template>
      </ContentRadioList>
      <hr>
      <div style="margin: 20px">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});

const options = [
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
];

const defaultExample = Template.bind({});
defaultExample.args = {
  options,
  value: 'option2',
};
defaultExample.argTypes = {
  value: { control: { type: 'select', options: options.reduce((accumulator, { value, title }) => ({ ...accumulator, [title]: value }), {}) } },
  checkedIcon: { table: { disable: true } },
  uncheckedIcon: { table: { disable: true } },
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ContentRadioList v-model="selectedValue"
                  :id="id"
                  :data-test-id="dataTestId"
                  :options="options"
                  @input="onInput"
/>
      `,
    },
  },
};

const withCustomCheckedUncheckedIcons = Template.bind({});
withCustomCheckedUncheckedIcons.args = {
  options,
  value: 'option1',
  checkedIcon: '<CheckBoldIcon width="24"/>',
  uncheckedIcon: '<div />',
};
withCustomCheckedUncheckedIcons.argTypes = {
  value: { control: { type: 'select', options: options.reduce((accumulator, { value, title }) => ({ ...accumulator, [title]: value }), {}) } },
};
withCustomCheckedUncheckedIcons.parameters = {
  docs: {
    source: {
      code: `
<ContentRadioList v-model="selectedValue"
                  :id="id"
                  :data-test-id="dataTestId"
                  :options="options"
                  @input="onInput"
>
  <template #checkedIcon>
    <CheckBoldIcon />
  </template>
  <template #uncheckedIcon>
    <div />
  </template>
</ContentRadioList>
      `,
    },
  },
};

export {
  defaultExample,
  withCustomCheckedUncheckedIcons,
};

export default ContentRadioListStories;

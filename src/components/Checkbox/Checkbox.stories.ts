import type { Meta, StoryFn } from '@storybook/vue3';

import Checkbox from './Checkbox.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>Checkbox:</strong>&nbsp;A simple Checkbox input.');

const CheckboxStories = {
  component: Checkbox,
  title: 'Components/Checkbox',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    label: 'Example label',
    hasError: false,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    label: { name: 'Label', control: 'text' },
    hasError: { name: 'Has Error?', control: 'boolean' },
  },
} as Meta<typeof Checkbox>;

const defaultExample: StoryFn<typeof Checkbox> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    Checkbox,
  },
  data() {
    return {
      isChecked: false,
    };
  },
  template: `
  <div>
    <div style="margin: 20px">
      <label>
        <p>Enabled:</p>
        <br>
        <Checkbox v-model="isChecked" :label="label" :has-error="hasError"/>
      </label>
    </div>
    <div style="margin: 20px">
      <label>
        <p>Disabled:</p>
        <br>
        <Checkbox v-model="isChecked" :label="label" :has-error="hasError" disabled/>
      </label>
    </div>
    <div style="margin: 20px;">
      Bound value: {{ isChecked }}
    </div>
  </div>
  `,
});

defaultExample.parameters = {
  docs: {
    source: {
      code: `
<div>
  <div style="margin: 20px">
    <label>
      <p>Enabled:</p>
      <br>
      <Checkbox v-model="isChecked" :label="label" :has-error="hasError"/>
    </label>
  </div>
  <div style="margin: 20px">
    <label>
      <p>Disabled:</p>
      <br>
      <Checkbox v-model="isChecked" :label="label" :has-error="hasError" disabled/>
    </label>
  </div>
</div>`,
    },
  },
};

export {
  defaultExample,
};

export default CheckboxStories;

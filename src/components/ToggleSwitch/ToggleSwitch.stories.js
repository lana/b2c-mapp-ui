import ToggleSwitch from './ToggleSwitch.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>ToggleSwitch:</strong>&nbsp;A simple toggle switch input.');

const ToggleSwitchStories = {
  component: ToggleSwitch,
  title: 'Components/ToggleSwitch',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    buttons: false,
    trueButtonLabel: 'True button',
    falseButtonLabel: 'False button',
    disabled: false,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    buttons: { control: 'boolean', name: 'Buttons mode?' },
    trueButtonLabel: { control: 'text', name: 'True button label' },
    falseButtonLabel: { control: 'text', name: 'False button label' },
    disabled: { control: 'boolean', name: 'Is disabled?' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ToggleSwitch,
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
          Default:
          <ToggleSwitch v-model="isChecked"
                        :buttons="buttons"
                        :true-button-label="trueButtonLabel"
                        :false-button-label="falseButtonLabel"
                        :disabled="disabled"
          />
        </label>
      </div>
      <div style="margin: 20px">
        <label>
          Disabled:
          <ToggleSwitch v-model="isChecked"
                        :buttons="buttons"
                        :true-button-label="trueButtonLabel"
                        :false-button-label="falseButtonLabel"
                        disabled
          />
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
<ToggleSwitch v-model="isChecked"
              :buttons="buttons"
              :true-button-label="trueButtonLabel"
              :false-button-label="falseButtonLabel"
              :disabled="disabled"
/>`,
    },
  },
};

export {
  defaultExample,
};

export default ToggleSwitchStories;

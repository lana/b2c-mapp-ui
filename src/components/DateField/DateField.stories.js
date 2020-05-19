import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';

import DateField from './DateField.vue';

const DateFieldStories = {
  component: DateField,
  title: 'Components/DateField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    DateField,
  },
  props: {
    autoformat: {
      default: boolean('Enable autoformatting?', false),
    },
    datePicker: {
      default: boolean('Enable Date Picker?', true),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    readonly: {
      default: boolean('Is Readonly?', false),
    },
    label: {
      default: text('Label', 'Example Date Field'),
    },
    errorLabel: {
      default: text('Error Label', 'Fecha no válida (DD/MM/YYYY)'),
    },
    maxLength: {
      default: number('Max Length', 10),
    },
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onChange: action('Change!'),
    onValidate: action('Validate!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>DateField:</strong>&nbsp;A simple date input field.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <DateField :autoformat="autoformat"
                     :disabled="disabled"
                     :readonly="readonly"
                     :date-picker="datePicker"
                     :label="label"
                     :error-label="errorLabel"
                     :max-length="maxLength"
                     v-model="value"
                     @blur="onBlur"
                     @focus="onFocus"
                     @change="onChange"
                     @validate="onValidate"
          />
          <br>
          <div>
            Bound value: {{ value }}
          </div>
        </div>
      </div>
    </div>
  `,
});

const validation = () => ({
  components: {
    DateField,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>DateField:</strong>&nbsp;Validations.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <label>With Valid Date:</label>
          <DateField value="01/12/1990" label='Enter your DOB' date-picker/>
        </div>
        <br>
        <div style="width: 500px">
          <label>With Invalid Date:</label>
          <DateField value="01/20/1990" label='Enter your DOB' date-picker/>
        </div>
      </div>
    </div>
  `,
});

export {
  defaultExample,
  validation,
};

export default DateFieldStories;

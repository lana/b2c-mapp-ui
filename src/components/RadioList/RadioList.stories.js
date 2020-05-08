import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import RadioList from './RadioList.vue';

const RadioListStories = {
  component: RadioList,
  title: 'RadioList',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    RadioList,
  },
  props: {
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
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
        {
          label: 'Option 3',
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
      <h2><strong>RadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.</h2>
      <hr>
      <div>
        <RadioList v-model="selectedValue"
                   id="exampleRadioList"
                   :title="title"
                   :options="options"
                   :disabled="disabled"
                   @input="onInput"
        />
      </div>
      <hr>
      <div style="margin-top: 20px;">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default RadioListStories;

import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import WrappedButton from './WrappedButton.vue';
import { availableTypes } from './WrappedButton';

const WrappedButtonStories = {
  component: WrappedButton,
  title: 'Components/WrappedButton',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    WrappedButton,
  },
  props: {
    type: {
      default: select('Type', [...availableTypes, ''], ''),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    loading: {
      default: boolean('Is Loading?', false),
    },
    href: {
      default: text('href', ''),
    },
    label: {
      default: text('Button Label', 'Example Wrapped Button Content'),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>WrappedButton:</strong>&nbsp;Wraps a Button component with extra padding to be placed at the bottom of the screen.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <div style="width: 500px">
          <WrappedButton :type="type"
                         :href="href"
                         :loading="loading"
                         :disabled="disabled"
                         @click="onClick"
          >
            {{ label }}
          </WrappedButton>
        </div>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default WrappedButtonStories;

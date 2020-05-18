import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import ForwardButton from './ForwardButton.vue';

const ForwardButtonStories = {
  component: ForwardButton,
  title: 'Components/ForwardButton',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ForwardButton,
  },
  props: {
    disabled: {
      default: boolean('Is Disabled?', false),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ForwardButton:</strong>&nbsp;Wraps a Button component with extra padding to be placed at the bottom of the screen.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <div style="width: 500px">
          <ForwardButton :disabled="disabled"
                         @click="onClick"
          />
        </div>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default ForwardButtonStories;

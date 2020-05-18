import { action } from '@storybook/addon-actions';

import Screen from './Screen.vue';

const ScreenStories = {
  component: Screen,
  title: 'Components/Screen',
};

const defaultExample = () => ({
  components: {
    Screen,
  },
  methods: {
    onKeyboardFocus: action('KeyboardFocus!'),
    onKeyboardBlur: action('KeyboardBlur!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Screen:</strong>&nbsp;A wrapper used by each Screen of a microapp.</h2>
      <hr>
      <div style="margin-top: 20px;">
        <Screen @keyboardFocus="onKeyboardFocus"
                @keyboardBlur="onKeyboardBlur"
        >
          Example Screen Content
        </Screen>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default ScreenStories;

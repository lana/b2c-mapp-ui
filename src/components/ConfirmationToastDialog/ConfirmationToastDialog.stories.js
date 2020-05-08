import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import ConfirmationToastDialog from './ConfirmationToastDialog.vue';

const ConfirmationToastDialogStories = {
  component: ConfirmationToastDialog,
  title: 'ConfirmationToastDialog',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ConfirmationToastDialog,
  },
  props: {
    title: {
      default: text('Title', 'Example Title'),
    },
    description: {
      default: text('Description', 'Example Description'),
    },
    confirmButtonText: {
      default: text('Confirm Button Text', 'Confirm'),
    },
    secondaryButtonText: {
      default: text('Secondary Button Text', 'Secondary'),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    loading: {
      default: boolean('Is Loading?', false),
    },
  },
  data() {
    return {
      isShowing: false,
    };
  },
  computed: {
    showHideTitle() {
      if (this.isShowing) { return 'Hide'; }
      return 'Show';
    },
  },
  methods: {
    onDismiss: action('Dismissed!'),
    onConfirm: action('Confirmed!'),
    onSecondary: action('Secondary button clicked!'),
    toggleIsShowing() {
      this.isShowing = !this.isShowing;
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ConfirmationToastDialog:</strong>&nbsp;A wrapper above an overlay or backdrop that requires a decision from the user or provides critical information.</h2>
      <hr>
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationToastDialog v-model="isShowing"
                                 :title="title"
                                 :description="description"
                                 :confirm-button-text="confirmButtonText"
                                 :secondary-button-text="secondaryButtonText"
                                 :loading="loading"
                                 :disabled="disabled"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @secondary="onSecondary"
        />
      </div>
      <div style="margin-top: 20px;">
        Bound value: {{ isShowing }}
      </div>
      <div style="margin-top: 20px; display: flex; flex-direction: row; width: 100%; justify-content: center">
        <button style="font-size: 20px; color: blue;" @click="toggleIsShowing">{{ showHideTitle }} Dialog</button>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default ConfirmationToastDialogStories;

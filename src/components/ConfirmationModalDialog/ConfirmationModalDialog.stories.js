import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import ConfirmationModalDialog from './ConfirmationModalDialog.vue';

const ConfirmationModalDialogStories = {
  component: ConfirmationModalDialog,
  title: 'Components/ConfirmationModalDialog',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ConfirmationModalDialog,
  },
  props: {
    title: {
      default: text('Title', 'Example Title'),
    },
    description: {
      default: text('Description', 'Example Description'),
    },
    confirmButtonText: {
      default: text('Confirm Button Text', 'Accept'),
    },
    dismissButtonText: {
      default: text('Dismiss Button Text', 'Cancel'),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
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
    onClose: action('Closed!'),
    toggleIsShowing() {
      this.isShowing = !this.isShowing;
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ConfirmationModalDialog:</strong>&nbsp;A modal dialog that requires a decision from the user or provides critical information.</h2>
      <hr>
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationModalDialog v-model="isShowing"
                                 :title="title"
                                 :description="description"
                                 :confirm-button-text="confirmButtonText"
                                 :dismiss-button-text="dismissButtonText"
                                 :disabled="disabled"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @close="onClose"
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


const withCustomContent = () => ({
  components: {
    ConfirmationModalDialog,
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
    onClose: action('Closed!'),
    toggleIsShowing() {
      this.isShowing = !this.isShowing;
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ConfirmationModalDialog:</strong>&nbsp;Custom Content.</h2>
      <hr>
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationModalDialog v-model="isShowing"
                                 title="Custom Content Example"
                                 confirm-button-text="Got it"
                                 dismiss-button-text="Never mind"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @close="onClose"
        >
          <div style="color: deeppink; margin: 20px">
            This is some <strong>custom</strong> content
          </div>
        </ConfirmationModalDialog>
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
  withCustomContent,
};

export default ConfirmationModalDialogStories;

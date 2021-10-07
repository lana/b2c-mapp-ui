import { action } from '@storybook/addon-actions';
import { CloseIcon } from '@lana/b2c-mapp-ui-assets';

import ConfirmationModalDialog from './ConfirmationModalDialog.vue';
import { createScreenDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const screenDecorator = createScreenDecorator('<strong>ConfirmationModalDialog:</strong>');

const ConfirmationModalDialogStories = {
  component: ConfirmationModalDialog,
  title: 'Components/ConfirmationModalDialog',
  decorators: [screenDecorator],
  args: {
    title: 'Example Title',
    description: 'Example Description',
    confirmButtonText: 'Accept',
    dismissButtonText: 'Cancel',
    confirmButtonDisabled: false,
    dismissButtonDisabled: false,
    default: '',
    extraActions: '',
  },
  argTypes: {
    title: { name: 'Title', control: 'text' },
    description: { name: 'Description', control: 'text' },
    confirmButtonText: { name: 'Confirm Button Text', control: 'text' },
    dismissButtonText: { name: 'Dismiss Button Text', control: 'text' },
    confirmButtonDisabled: { name: 'Disable Confirm Button?', control: 'boolean' },
    dismissButtonDisabled: { name: 'Disable Dismiss Button?', control: 'boolean' },
    default: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    extraActions: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'Extra actions slot',
          detail: 'It is binded to `onDismiss` and `onConfirm` methods',
        },
      },
    },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ConfirmationModalDialog,
    RenderString,
  },
  data() {
    return {
      isShowing: false,
    };
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
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
    <div style="min-height: 400px;">
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationModalDialog v-model="isShowing"
                                 :title="title"
                                 :description="description"
                                 :confirm-button-text="confirmButtonText"
                                 :dismiss-button-text="dismissButtonText"
                                 :confirm-button-disabled="confirmButtonDisabled"
                                 :dismiss-button-disabled="dismissButtonDisabled"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @close="onClose"
        >
          <RenderString :string="defaultSlot" />
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
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ConfirmationModalDialog v-model="isShowing"
                         :title="title"
                         :description="description"
                         :confirm-button-text="confirmButtonText"
                         :dismiss-button-text="dismissButtonText"
                         :confirm-button-disabled="confirmButtonDisabled"
                         :dismiss-button-disabled="dismissButtonDisabled"
                         @dismiss="onDismiss"
                         @confirm="onConfirm"
                         @close="onClose"
/>`,
    },
  },
};

const withCustomContent = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ConfirmationModalDialog,
    RenderString,
  },
  data() {
    return {
      isShowing: false,
    };
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
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
    <div style="min-height: 400px;">
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationModalDialog v-model="isShowing"
                                 title="Custom Content Example"
                                 confirm-button-text="Got it"
                                 dismiss-button-text="Never mind"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @close="onClose"
        >
          <RenderString :string="defaultSlot" />
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
withCustomContent.args = {
  description: '',
  default: `<div style="color: deeppink; margin: 20px">
  This is some <strong>custom</strong> content
</div>`,
};
withCustomContent.argTypes = {
  title: { table: { disable: true } },
  description: { table: { disable: true } },
  confirmButtonText: { table: { disable: true } },
  dismissButtonText: { table: { disable: true } },
  confirmButtonDisabled: { table: { disable: true } },
  dismissButtonDisabled: { table: { disable: true } },
  extraActions: { table: { disable: true } },
};
withCustomContent.parameters = {
  docs: {
    source: {
      code: `
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
</ConfirmationModalDialog>`,
    },
  },
};

const withDismissButtonDisabled = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ConfirmationModalDialog,
    RenderString,
  },
  data() {
    return {
      isShowing: false,
    };
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
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
    <div style="min-height: 400px;">
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationModalDialog v-model="isShowing"
                                 title="Custom Content with disabled Dismiss Button Example"
                                 confirm-button-text="Got it"
                                 dismiss-button-text="Never mind"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @close="onClose"
                                 dismissButtonDisabled
        >
          <RenderString :string="defaultSlot" />
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
withDismissButtonDisabled.args = {
  description: '',
  default: `<div style="color: deeppink; margin: 20px">
  This is some <strong>custom</strong> content
</div>`,
};
withDismissButtonDisabled.argTypes = {
  title: { table: { disable: true } },
  description: { table: { disable: true } },
  confirmButtonText: { table: { disable: true } },
  dismissButtonText: { table: { disable: true } },
  confirmButtonDisabled: { table: { disable: true } },
  dismissButtonDisabled: { table: { disable: true } },
  default: { table: { disable: true } },
  extraActions: { table: { disable: true } },
};
withDismissButtonDisabled.parameters = {
  docs: {
    source: {
      code: `
<ConfirmationModalDialog v-model="isShowing"
                         title="Custom Content with disabled Dismiss Button Example"
                         confirm-button-text="Got it"
                         dismiss-button-text="Never mind"
                         @dismiss="onDismiss"
                         @confirm="onConfirm"
                         @close="onClose"
                         dismissButtonDisabled
>
  <div style="color: deeppink; margin: 20px">
    This is some <strong>custom</strong> content
  </div>
</ConfirmationModalDialog>`,
    },
  },
};

const withConfirmButtonDisabled = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ConfirmationModalDialog,
    RenderString,
  },
  data() {
    return {
      isShowing: false,
    };
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
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
    <div style="min-height: 400px;">
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationModalDialog v-model="isShowing"
                                 title="Custom Content with disabled Confirm Button Example"
                                 confirm-button-text="Got it"
                                 dismiss-button-text="Never mind"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 confirmButtonDisabled
                                 @close="onClose"
        >
          <RenderString :string="defaultSlot" />
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
withConfirmButtonDisabled.args = {
  description: '',
  default: `<div style="color: deeppink; margin: 20px">
  This is some <strong>custom</strong> content
</div>`,
};
withConfirmButtonDisabled.argTypes = {
  title: { table: { disable: true } },
  description: { table: { disable: true } },
  confirmButtonText: { table: { disable: true } },
  dismissButtonText: { table: { disable: true } },
  confirmButtonDisabled: { table: { disable: true } },
  dismissButtonDisabled: { table: { disable: true } },
  default: { table: { disable: true } },
  extraActions: { table: { disable: true } },
};
withConfirmButtonDisabled.parameters = {
  docs: {
    source: {
      code: `
<ConfirmationModalDialog v-model="isShowing"
                         title="Custom Content with disabled Confirm Button Example"
                         confirm-button-text="Got it"
                         dismiss-button-text="Never mind"
                         @dismiss="onDismiss"
                         @confirm="onConfirm"
                         confirmButtonDisabled
                         @close="onClose"
>
  <div style="color: deeppink; margin: 20px">
    This is some <strong>custom</strong> content
  </div>
</ConfirmationModalDialog>`,
    },
  },
};

const withCustomActionButton = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ConfirmationModalDialog,
    CloseIcon,
    RenderString,
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
      <h2>Custom action button binded to "onDismiss" example.</h2>
      <div style="margin-top: 20px; width: 100px">
        <ConfirmationModalDialog v-model="isShowing"
                                 title="Custom action button binded to 'onDismiss' Example"
                                 confirm-button-text=""
                                 dismiss-button-text=""
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @close="onClose"
        >
          <template v-slot:extraActions="{ onDismiss, onConfirm }">
            <RenderString :string="extraActions" :customProps="{ onDismiss, onConfirm }" />
          </template>
          <div style="margin: 20px">
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
withCustomActionButton.args = {
  description: '',
  default: `<div style="color: deeppink; margin: 20px">
  This is some <strong>custom</strong> content
</div>`,
  extraActions: '<button style="position: absolute; right: 10%; top: 10%;" @click="onDismiss"><CloseIcon :style="{ width: \'18px\' }" /></button>',
};
withCustomActionButton.argTypes = {
  title: { table: { disable: true } },
  description: { table: { disable: true } },
  confirmButtonText: { table: { disable: true } },
  dismissButtonText: { table: { disable: true } },
  confirmButtonDisabled: { table: { disable: true } },
  dismissButtonDisabled: { table: { disable: true } },
  default: { table: { disable: true } },
};
withCustomActionButton.parameters = {
  docs: {
    source: {
      code: `
<ConfirmationModalDialog v-model="isShowing"
                         title="Custom action button binded to 'onDismiss' Example"
                         confirm-button-text=""
                         dismiss-button-text=""
                         @dismiss="onDismiss"
                         @confirm="onConfirm"
                         @close="onClose"
>
  <template v-slot:extraActions="{ onDismiss, onConfirm }">
    <button style="position: absolute; right: 10%; top: 10%;" @click="onDismiss"><CloseIcon :style="{ width: '18px' }" /></button>
  </template>
  <div style="margin: 20px">
    This is some <strong>custom</strong> content
  </div>
</ConfirmationModalDialog>`,
    },
  },
};

export {
  defaultExample,
  withCustomContent,
  withDismissButtonDisabled,
  withConfirmButtonDisabled,
  withCustomActionButton,
};

export default ConfirmationModalDialogStories;

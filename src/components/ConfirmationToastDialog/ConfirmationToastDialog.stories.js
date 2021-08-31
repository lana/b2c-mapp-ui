import { action } from '@storybook/addon-actions';

import ConfirmationToastDialog from './ConfirmationToastDialog.vue';
import RenderString from '../../lib/renderString';

const ConfirmationToastDialogStories = {
  component: ConfirmationToastDialog,
  title: 'Components/ConfirmationToastDialog',
  decorators: [],
  args: {
    dataTestId: 'bottom-dialog',
    title: 'Example Title',
    description: 'Example Description',
    loadingText: 'Cargando...',
    confirmButtonText: 'Confirm',
    secondaryButtonText: 'Secondary',
  },
  argTypes: {
    title: { control: 'text', name: 'Title' },
    dataTestId: { control: 'text', name: 'DataTestId' },
    description: { control: 'text', name: 'Description' },
    loadingText: { control: 'text', name: 'Loading Text' },
    confirmButtonText: { control: 'text', name: 'Confirm Button Text' },
    secondaryButtonText: { control: 'text', name: 'Secondary Button Text' },
    disabled: { control: 'boolean', name: 'Is disabled?' },
    loading: { control: 'boolean', name: 'Is loading' },
    default: {
      name: 'Default slot',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    actions: {
      name: 'Custom actions slot',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ConfirmationToastDialog,
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
    defaultSlot() {
      return this.default;
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
                                 :loading-text="loadingText"
                                 :disabled="disabled"
                                 @dismiss="onDismiss"
                                 @confirm="onConfirm"
                                 @secondary="onSecondary"
        >
          <RenderString v-if="defaultSlot" :string="defaultSlot" />
          <template v-if="actions" #actions>
            <RenderString :string="actions" />
          </template>
        </ConfirmationToastDialog>
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

const defaultExample = Template.bind({});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ConfirmationToastDialog v-model="isShowing"
                         :title="title"
                         :description="description"
                         :confirm-button-text="confirmButtonText"
                         :secondary-button-text="secondaryButtonText"
                         :loading="loading"
                         :loading-text="loadingText"
                         :disabled="disabled"
                         @dismiss="onDismiss"
                         @confirm="onConfirm"
                         @secondary="onSecondary"
/>
      `,
    },
  },
};

const withChildContent = Template.bind({});
withChildContent.args = {
  default: `<div style="color: deeppink; margin: 20px">
  This is some <strong>custom</strong> content
</div>`,
};
withChildContent.parameters = {
  docs: {
    source: {
      code: `
<ConfirmationToastDialog v-model="isShowing"
                         :title="title"
                         :description="description"
                         :confirm-button-text="confirmButtonText"
                         :secondary-button-text="secondaryButtonText"
                         :loading="loading"
                         :loading-text="loadingText"
                         :disabled="disabled"
                         @dismiss="onDismiss"
                         @confirm="onConfirm"
                         @secondary="onSecondary"
>
  <div style="color: deeppink; margin: 20px">
    This is some <strong>custom</strong> content
  </div>
</ConfirmationToastDialog>
      `,
    },
  },
};

const withCustomActionsContent = Template.bind({});
withCustomActionsContent.args = {
  confirmButtonText: '',
  secondaryButtonText: '',
  actions: `<div>
  <ContentItem title="Edit"
               no-border
               :has-forward-button="false"
  >
    <EditMinimalIcon width="24"/>
  </ContentItem>
  <ContentItem title="Delete"
               no-border
               :has-forward-button="false"
  >
    <DeleteMinimalIcon width="24"/>
  </ContentItem>
</div>`,
};
withCustomActionsContent.parameters = {
  docs: {
    source: {
      code: `
<ConfirmationToastDialog v-model="isShowing"
                         :title="title"
                         :description="description"
                         :confirm-button-text="confirmButtonText"
                         :secondary-button-text="secondaryButtonText"
                         :loading="loading"
                         :loading-text="loadingText"
                         :disabled="disabled"
                         @dismiss="onDismiss"
>
  <template #actions>
    <ContentItem title="Edit"
                 no-border
                 :has-forward-button="false"
                 @click="onConfirm"
    >
      <EditMinimalIcon width="24"/>
    </ContentItem>
    <ContentItem title="Delete"
                 no-border
                 :has-forward-button="false"
                 @click="onDismiss"
    >
      <DeleteMinimalIcon width="24"/>
    </ContentItem>
  </template>
</ConfirmationToastDialog>
      `,
    },
  },
};

export {
  defaultExample,
  withChildContent,
  withCustomActionsContent,
};

export default ConfirmationToastDialogStories;

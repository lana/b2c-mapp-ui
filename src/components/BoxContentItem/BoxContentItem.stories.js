import { action } from '@storybook/addon-actions';
import { DocumentFilledIcon, PaymentsIcon, ColorWalletIcon, DiscountIcon } from '@lana/b2c-mapp-ui-assets';

import BoxContentItem from './BoxContentItem.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>BoxContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen.');

const BoxContentItemStories = {
  component: BoxContentItem,
  title: 'Components/BoxContentItem',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    disabled: false,
    success: false,
    title: 'Example Title',
    metaText: 'Example Metatext',
    default: '<DocumentFilledIcon/>',
    customTitle: '',
    customMetaText: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    disabled: { name: 'Is Disabled?', control: 'boolean' },
    success: { name: 'Is in a Success status?', control: 'boolean' },
    title: { name: 'Title', control: 'text' },
    metaText: { name: 'Meta text', control: 'text' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
    customTitle: { control: { type: 'text' }, table: { type: { summary: null } } },
    customMetaText: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    BoxContentItem,
    RenderString,
  },
  methods: {
    onClick: action('Click!'),
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <div style="margin: 10px;">
      <h3><strong>IMPORTANT: </strong> Please note that in order to have the display in boxes, we'll need to use flexbox</h3>
      <hr>
      <ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
        <BoxContentItem style="flex-basis: 35%"
                        :title="title"
                        :meta-text="metaText"
                        :disabled="disabled"
                        :success="success"
                        @click="onClick"
        >
          <RenderString :string="defaultSlot" />
          <template v-slot:customTitle v-if="customTitle"><RenderString :string="customTitle" /></template>
          <template v-slot:customMetaText v-if="customMetaText"><RenderString :string="customMetaText" /></template>
        </BoxContentItem>
      </ul>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
  <BoxContentItem style="flex-basis: 35%"
                  :title="title"
                  :meta-text="metaText"
                  :disabled="disabled"
                  @click="onClick"
  >
    <DocumentFilledIcon/>
    <template v-slot:customTitle v-if="customTitle">{{customTitle}}</template>
    <template v-slot:customMetaText v-if="customMetaText">{{customMetaText}}</template>
  </BoxContentItem>
</ul>
      `,
    },
  },
};

const withImage = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    BoxContentItem,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px;">
      <h3>Example With Image</h3>
      <hr>
      <ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
        <BoxContentItem style="flex-basis: 35%"
                        title="Example with Image"
                        meta-text="Example metatext"
                        @click="onClick"
        >
          <img src="https://source.unsplash.com/random/48x48"/>        
        </BoxContentItem>
      </ul>
    </div>
  `,
});
withImage.argTypes = {
  title: { table: { disable: true } },
  metaText: { table: { disable: true } },
  default: { table: { disable: true } },
  disabled: { table: { disable: true } },
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
};
withImage.parameters = {
  docs: {
    source: {
      code: `
<ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
  <BoxContentItem style="flex-basis: 35%"
                  title="Example with Image"
                  meta-text="Example metatext"
                  @click="onClick"
  >
    <img src="https://source.unsplash.com/random/48x48"/>        
  </BoxContentItem>
</ul>`,
    },
  },
};

const withIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    BoxContentItem,
    DocumentFilledIcon,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px;">
      <h3>Example With Icon</h3>
      <hr>
      <ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
        <BoxContentItem style="flex-basis: 35%"
                        title="Example with Icon"
                        meta-text="Example metatext"
                        @click="onClick"
        >         
          <DocumentFilledIcon/>
        </BoxContentItem>
      </ul>
    </div>
  `,
});
withIcon.argTypes = {
  title: { table: { disable: true } },
  metaText: { table: { disable: true } },
  disabled: { table: { disable: true } },
  default: { table: { disable: true } },
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
};
withIcon.parameters = {
  docs: {
    source: {
      code: `
<ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
  <BoxContentItem style="flex-basis: 35%"
                  title="Example with Icon"
                  meta-text="Example metatext"
                  @click="onClick"
  >      
    <DocumentFilledIcon/>
  </BoxContentItem>
</ul>`,
    },
  },
};

const successState = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    BoxContentItem,
    DocumentFilledIcon,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px;">
      <h3>A list item with success state, it does not redirect anywhere, it just provides success/completed information.</h3>
      <hr>
      <ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
        <BoxContentItem style="flex-basis: 35%"
                        :title="title"
                        :meta-text="metaText"
                        :disabled="disabled"
                        :success="success"
                        @click="onClick"
        >
          <DocumentFilledIcon/>
        </BoxContentItem>
      </ul>
    </div>
  `,
});
successState.args = {
  success: true,
};
successState.argTypes = {
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
};
successState.parameters = {
  docs: {
    source: {
      code: `
<ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
  <BoxContentItem style="flex-basis: 35%"
                  :title="title"
                  :meta-text="metaText"
                  :disabled="disabled"
                  :success="success"
                  @click="onClick"
  >
    <DocumentFilledIcon/>
  </BoxContentItem>
</ul>`,
    },
  },
};

const listExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    BoxContentItem,
    PaymentsIcon,
    ColorWalletIcon,
    DiscountIcon,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px;">
      <h3>A list item which usually transitions the user to content in another screen. In order to have the display in boxes, we'll need to use flex</h3>
      <hr>
      <ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
        <BoxContentItem style="flex-basis: 35%" 
                        title="With success state"
                        :meta-text="metaText"
                        :disabled="disabled"
                        :success="success"
                        @click="onClick"
        >
          <PaymentsIcon/>
        </BoxContentItem>
        <BoxContentItem style="flex-basis: 35%" 
                        :title="title"
                        :meta-text="metaText"
                        :disabled="disabled"
                        @click="onClick"
        >
          <ColorWalletIcon/>
        </BoxContentItem>
        <BoxContentItem style="flex-basis: 35%"
                        :title="title"
                        :meta-text="metaText"
                        :disabled="disabled"
                        @click="onClick"
        >
          <DiscountIcon/>
        </BoxContentItem>
      </ul>
    </div>
  `,
});
listExample.args = {
  success: true,
};
listExample.argTypes = {
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
};
listExample.parameters = {
  docs: {
    source: {
      code: `
<ul style="display: flex; flex-flow: row wrap; width: auto; justify-content: space-between; align-items: center; padding: 16px;">
  <BoxContentItem style="flex-basis: 35%" 
                  title="With success state"
                  :meta-text="metaText"
                  :disabled="disabled"
                  :success="success"
                  @click="onClick"
  >
    <PaymentsIcon/>
  </BoxContentItem>
  <BoxContentItem style="flex-basis: 35%" 
                  :title="title"
                  :meta-text="metaText"
                  :disabled="disabled"
                  @click="onClick"
  >
    <ColorWalletIcon/>
  </BoxContentItem>
  <BoxContentItem style="flex-basis: 35%"
                  :title="title"
                  :meta-text="metaText"
                  :disabled="disabled"
                  @click="onClick"
  >
    <DiscountIcon/>
  </BoxContentItem>
</ul>`,
    },
  },
};

export {
  defaultExample,
  withImage,
  withIcon,
  successState,
  listExample,
};

export default BoxContentItemStories;

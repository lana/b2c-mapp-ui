import { action } from '@storybook/addon-actions';
import { DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import ContentItem from './ContentItem.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>ContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen.');

const ContentItemStories = {
  component: ContentItem,
  title: 'Components/ContentItem',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    disabled: false,
    hasForwardButton: true,
    noBorder: false,
    success: false,
    title: 'Example Title',
    metaText: 'Example Metatext',
    default: '',
    customTitle: '',
    customMetaText: '',
    forwardIcon: '',
    extraItem: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    disabled: { name: 'Is Disabled?', control: 'boolean' },
    hasForwardButton: { name: 'Has Forward Button?', control: 'boolean' },
    noBorder: { name: 'Hide Border?', control: 'boolean' },
    success: { name: 'Success?', control: 'boolean' },
    title: { name: 'Title', control: 'text' },
    metaText: { name: 'Meta Text', control: 'text' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
    customTitle: { control: { type: 'text' }, table: { type: { summary: null } } },
    customMetaText: { control: { type: 'text' }, table: { type: { summary: null } } },
    forwardIcon: { control: { type: 'text' }, table: { type: { summary: null } } },
    extraItem: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentItem,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
  <ContentItem :title="title"
                :meta-text="metaText"
                :has-forward-button="hasForwardButton"
                :no-border="noBorder"
                :disabled="disabled"
                :success="success"
                @click="onClick"
  >
    <RenderString :string="defaultSlot" fragment/>
    <template v-slot:customTitle v-if="customTitle">
      <RenderString :string="customTitle" />
    </template>
    <template v-slot:customMetaText v-if="customMetaText">
      <RenderString :string="customMetaText" />
    </template>
    <template v-slot:forwardIcon v-if="forwardIcon">
      <RenderString :string="forwardIcon" />
    </template>
    <template v-slot:extraItem v-if="extraItem">
      <RenderString :string="extraItem" />
    </template>
  </ContentItem>
  `,
});
defaultExample.args = {
  default: '<DocumentFilledIcon />',
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ContentItem :title="title"
             :meta-text="metaText"
             :has-forward-button="hasForwardButton"
             :no-border="noBorder"
             :disabled="disabled"
             @click="onClick"
>
  <DocumentFilledIcon/>
</ContentItem>`,
    },
  },
};

const withImage = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentItem,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
  <div>
    <h3>Example With Image</h3>
    <hr>
      <ContentItem title="Example with Image"
                    meta-text="Example metatext"
      >
        <RenderString :string="defaultSlot" fragment />
      </ContentItem>
  </div>
  `,
});
withImage.args = {
  default: '<img src="https://source.unsplash.com/random/48x48"/>',
};
withImage.argTypes = {
  title: { table: { disable: true } },
  disabled: { table: { disable: true } },
  metaText: { table: { disable: true } },
  noBorder: { table: { disable: true } },
  success: { table: { disable: true } },
  hasForwardButton: { table: { disable: true } },
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
  forwardIcon: { table: { disable: true } },
  extraItem: { table: { disable: true } },
};
withImage.parameters = {
  docs: {
    source: {
      code: `
<ContentItem title="Example with Image"
              meta-text="Example metatext"
>
  <img src="https://source.unsplash.com/random/48x48"/>
</ContentItem>`,
    },
  },
};

const withIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentItem,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <div>
      <h3>Example With Icon</h3>
      <hr>
      <ContentItem title="Example with Icon"
                   meta-text="Example metatext"
                   no-border
                   :success="success"
                   :has-forward-button="hasForwardButton"
      >
        <RenderString :string="defaultSlot" fragment />
      </ContentItem>
    </div>
  `,
});
withIcon.args = {
  default: '<DocumentFilledIcon />',
};
withIcon.argTypes = {
  title: { table: { disable: true } },
  metaText: { table: { disable: true } },
  noBorder: { table: { disable: true } },
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
  forwardIcon: { table: { disable: true } },
  extraItem: { table: { disable: true } },
};
withIcon.parameters = {
  docs: {
    source: {
      code: `
<ContentItem :title="title"
             :meta-text="metaText"
             :has-forward-button="hasForwardButton"
             :no-border="noBorder"
             :disabled="disabled"
             @click="onClick"
>
  <DocumentFilledIcon/>
</ContentItem>`,
    },
  },
};

const successState = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentItem,
    DocumentFilledIcon,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div>
      <h3>A list item with success state, it does not redirect anywhere, it just provides success/completed information.</h3>
      <hr>
        <ContentItem :title="title"
                     :meta-text="metaText"
                     :has-forward-button="hasForwardButton"
                     no-border
                     :disabled="disabled"
                     :success="success"
                     @click="onClick"
        >
          <DocumentFilledIcon/>
        </ContentItem>
    </div>
  `,
});
successState.args = {
  success: true,
};
successState.argTypes = {
  noBorder: { table: { disable: true } },
  default: { table: { disable: true } },
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
  forwardIcon: { table: { disable: true } },
  extraItem: { table: { disable: true } },
};
successState.parameters = {
  docs: {
    source: {
      code: `
<ContentItem :title="title"
              :meta-text="metaText"
              :has-forward-button="hasForwardButton"
              no-border
              :disabled="disabled"
              :success="success"
              @click="onClick"
>
  <DocumentFilledIcon/>
</ContentItem>`,
    },
  },
};

const withCustomForwardIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentItem,
    DocumentFilledIcon,
    RenderString,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div>
      <h3>A list item with success state, it does not redirect anywhere, it just provides success/completed information.</h3>
      <hr>
      <ContentItem :title="title"
                    :meta-text="metaText"
                    :has-forward-button="hasForwardButton"
                    no-border
                    :disabled="disabled"
                    :success="success"
                    @click="onClick"
      >
        <DocumentFilledIcon/>
        <template v-slot:forwardIcon>
          <RenderString :string="forwardIcon" />
        </template>
      </ContentItem>
    </div>
  `,
});
withCustomForwardIcon.args = {
  success: true,
  forwardIcon: '<ClockIcon :style="{ width: \'24px\' }"/>',
};
withCustomForwardIcon.argTypes = {
  noBorder: { table: { disable: true } },
  default: { table: { disable: true } },
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
  extraItem: { table: { disable: true } },
};
withCustomForwardIcon.parameters = {
  docs: {
    source: {
      code: `
<ContentItem :title="title"
             :meta-text="metaText"
             :has-forward-button="hasForwardButton"
             no-border
             :disabled="disabled"
             :success="success"
             @click="onClick"
>
  <DocumentFilledIcon/>
  <template v-slot:forwardIcon>
    <ClockIcon/>
  </template>
</ContentItem>`,
    },
  },
};

const noImageAndCustomForwardIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentItem,
    RenderString,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div>
      <h3>A list item with success state, it does not redirect anywhere, it just provides success/completed information.</h3>
      <hr>
      <ContentItem :title="title"
                   :meta-text="metaText"
                   no-border
                   @click="onClick"
      >
        <template v-slot:forwardIcon>
          <RenderString :string="forwardIcon" fragment />
        </template>
      </ContentItem>
    </div>
  `,
});
noImageAndCustomForwardIcon.args = {
  success: true,
  forwardIcon: '<ClockIcon :style="{ width: \'24px\' }"/>',
};
noImageAndCustomForwardIcon.argTypes = {
  noBorder: { table: { disable: true } },
  hasForwardButton: { table: { disable: true } },
  default: { table: { disable: true } },
  success: { table: { disable: true } },
  disabled: { table: { disable: true } },
  customTitle: { table: { disable: true } },
  customMetaText: { table: { disable: true } },
  extraItem: { table: { disable: true } },
};
noImageAndCustomForwardIcon.parameters = {
  docs: {
    source: {
      code: `
<ContentItem :title="title"
             :meta-text="metaText"
             no-border
             @click="onClick"
>
  <template v-slot:forwardIcon>
    <ClockIcon/>
  </template>
</ContentItem>`,
    },
  },
};

const customTitleAndCustomMetaText = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentItem,
    RenderString,
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div>
      <h3>Custom Title and Custom Meta Text</h3>
      <hr>
      <div style="padding: 16px;">
        <ContentItem no-border
                    @click="onClick"
        >
          <template v-slot:customTitle>
            <RenderString :string="customTitle" />
          </template>
          <template v-slot:customMetaText>
            <RenderString :string="customMetaText" />
          </template>
        </ContentItem>
      </div>
    </div>
  `,
});
customTitleAndCustomMetaText.args = {
  customTitle: 'Example <b>Title</b>',
  customMetaText: 'Example <br /> Metatext',
};
customTitleAndCustomMetaText.argTypes = {
  title: { table: { disable: true } },
  metaText: { table: { disable: true } },
  noBorder: { table: { disable: true } },
  hasForwardButton: { table: { disable: true } },
  default: { table: { disable: true } },
  success: { table: { disable: true } },
  disabled: { table: { disable: true } },
  extraItem: { table: { disable: true } },
  forwardIcon: { table: { disable: true } },
};
customTitleAndCustomMetaText.parameters = {
  docs: {
    source: {
      code: `
<ContentItem no-border
            @click="onClick"
>
  <template v-slot:customTitle>
    <span v-if="customTitle" v-html="customTitle" />
  </template>
  <template v-slot:customMetaText>
    <span v-if="customMetaText" v-html="customMetaText" />
  </template>
</ContentItem>`,
    },
  },
};

export {
  defaultExample,
  withImage,
  withIcon,
  successState,
  withCustomForwardIcon,
  noImageAndCustomForwardIcon,
  customTitleAndCustomMetaText,
};

export default ContentItemStories;

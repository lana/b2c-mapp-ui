import { action } from '@storybook/addon-actions';
import { DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import ActionItem from './ActionItem.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>ActionItem:</strong>&nbsp;A list item which takes the user to perform an action in another screen.');

const ActionItemStories = {
  component: ActionItem,
  title: 'Components/ActionItem',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Example ActionItem',
    description: '',
    status: '',
    default: 'Default slot',
    highlight: false,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    status: { control: { type: 'text' } },
    highlight: { control: 'boolean' },
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
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ActionItem,
    RenderString,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <ul>
      <ActionItem :title="title"
                  :description="description"
                  :highlight="highlight"
                  :status="status"
                  @click="onClick"
      >
        <RenderString v-if="defaultSlot" :string="defaultSlot" />
      </ActionItem>
    </ul>
  `,
});
defaultExample.args = {
  title: 'Example ActionItem',
  default: 'Default slot',
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ul>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    Default slot
  </ActionItem>
</ul>
      `,
    },
  },
};

const fullExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ActionItem,
    DocumentFilledIcon,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
        <ul>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            1st
          </ActionItem>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            2nd
          </ActionItem>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            <div>
              <img src="https://source.unsplash.com/random/48x48"/>
            </div>
          </ActionItem>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            <div>
              <DocumentFilledIcon/>
            </div>
          </ActionItem>
          <ActionItem :title="title"
                      :description="description"
                      :highlight="highlight"
                      :status="status"
                      @click="onClick"
          >
            <div v-if="false"/>
          </ActionItem>
        </ul>
  `,
});
fullExample.argTypes = {
  ...ActionItemStories.argTypes,
  default: { table: { disable: true } },
};
fullExample.parameters = {
  docs: {
    source: {
      code: `
<ul>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    1st
  </ActionItem>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    2nd
  </ActionItem>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    <div>
      <img src="https://source.unsplash.com/random/48x48"/>
    </div>
  </ActionItem>
  <ActionItem :title="title"
              :description="description"
              :highlight="highlight"
              :status="status"
              @click="onClick"
  >
    <div>
      <DocumentFilledIcon/>
    </div>
  </ActionItem>
</ul>`,
    },
  },
};

export {
  defaultExample,
  fullExample,
};

export default ActionItemStories;

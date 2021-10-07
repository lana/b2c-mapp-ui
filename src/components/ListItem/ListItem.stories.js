import { action } from '@storybook/addon-actions';

import ListItem from './ListItem.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>ListItem:</strong>&nbsp;A list item which usually takes the user to content in another screen.');

const ListItemStories = {
  component: ListItem,
  title: 'Components/ListItem',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Example Title',
    description: 'Example Description',
    linkTitle: 'Example Link Title',
    hasToggle: true,
    hasCheckbox: false,
    transparent: false,
    disabled: false,
    rightLabel: '',
    default: '<img src="https://source.unsplash.com/random/48x48"/>',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { control: 'text', name: 'Title' },
    description: { control: 'text', name: 'Description' },
    linkTitle: { control: 'text', name: 'Link Title' },
    hasToggle: { control: 'boolean', name: 'Has Toggle Switch' },
    hasCheckbox: { control: 'boolean', name: 'Has Checkbox?' },
    transparent: { control: 'boolean', name: 'Is transparent?' },
    disabled: { control: 'boolean', name: 'Is disabled?' },
    rightLabel: { control: 'text', name: 'Right label' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ListItem,
    RenderString,
  },
  methods: {
    onLinkClick: action('Link Clicked!'),
    onToggleChanged: action('Toggle value changed'),
  },
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  watch: {
    isChecked() {
      this.onToggleChanged(this.isChecked);
    },
  },
  template: `
    <div>
      <ListItem v-model="isChecked"
                :transparent="transparent"
                :title="title"
                :description="description"
                :link-title="linkTitle"
                :has-toggle="hasToggle"
                :has-checkbox="hasCheckbox"
                :right-label="rightLabel"
                :disabled="disabled"
                @linkClick="onLinkClick"
      >
        <RenderString :string="defaultSlot" v-if="defaultSlot"/>
      </ListItem>
      <br>
      <div style="margin: 20px;">
        Bound value: {{ isChecked }}
      </div>
    </div>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ListItem v-model="isChecked"
          :transparent="transparent"
          :title="title"
          :description="description"
          :link-title="linkTitle"
          :has-toggle="hasToggle"
          :has-checkbox="hasCheckbox"
          :right-label="rightLabel"
          :disabled="disabled"
          @linkClick="onLinkClick"
>
  <img src="https://source.unsplash.com/random/48x48"/>
</ListItem>`,
    },
  },
};

export {
  defaultExample,
};

export default ListItemStories;

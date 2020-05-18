import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import ListItem from './ListItem.vue';

const ListItemStories = {
  component: ListItem,
  title: 'Components/ListItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ListItem,
    DocumentFilledIcon,
  },
  props: {
    title: {
      default: text('Title', 'Example Title'),
    },
    description: {
      default: text('Description', 'Example Description'),
    },
    linkTitle: {
      default: text('Link Title', 'Example Link Title'),
    },
    hasToggle: {
      default: boolean('Has Toggle Switch?', false),
    },
    transparent: {
      default: boolean('Is transparent?', false),
    },
    disabled: {
      default: boolean('Is disabled?', false),
    },
    hasImage: {
      default: boolean('Show image?', false),
    },
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
  watch: {
    isChecked() {
      this.onToggleChanged(this.isChecked);
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ListItem:</strong>&nbsp;A list item which usually takes the user to content in another screen.</h2>
      <hr>
      <div style="width: 400px;">
        <ListItem v-model="isChecked"
                  :transparent="transparent"
                  :title="title"
                  :description="description"
                  :link-title="linkTitle"
                  :has-toggle="hasToggle"
                  :disabled="disabled"
                  @linkClick="onLinkClick"
        >
          <img v-if="hasImage" src="https://source.unsplash.com/random/48x48"/>
          <p v-if="!hasImage"><DocumentFilledIcon/></p>
        </ListItem>
      </div>
      <br>
      <br>
      <div>
        Bound value: {{ isChecked }}
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default ListItemStories;

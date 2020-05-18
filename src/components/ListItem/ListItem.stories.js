import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import ListItem from './ListItem.vue';
import { availableColors } from './ListItem';
import { capitalizeFirstLetter } from '../../lib/textHelper';

const ListItemStories = {
  component: ListItem,
  title: 'Components/ListItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ListItem,
  },
  props: {
    color: {
      default: select('Color', [...availableColors, ''], ''),
    },
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
                  :color="color"
                  :transparent="transparent"
                  :title="title"
                  :description="description"
                  :link-title="linkTitle"
                  :has-toggle="hasToggle"
                  :disabled="disabled"
                  @linkClick="onLinkClick"
        >
          <img v-if="hasImage" src="https://source.unsplash.com/random/44x44"/>
          <p v-if="!hasImage">1</p>
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

const colors = () => ({
  components: {
    ListItem,
  },
  data() {
    return {
      availableColors,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-evenly">
        <div>
          <h2>Color Examples</h2>
          <br>
          <ul>
            <ListItem title="Default" description="Color example">1</ListItem>
            <ListItem v-for="(color, index) in availableColors"
                      :key="'color-' + index"
                      :color="color"
                      :title="capitalizeFirstLetter(color)"
                      description="Color example"
            >
              {{ index + 2 }}
            </ListItem>
          </ul>
        </div>
        <div>
          <h2>Transparent Color Examples</h2>
          <br>
          <ul>
            <ListItem title="Default" description="Transparent Color example" transparent>1</ListItem>
            <ListItem v-for="(color, index) in availableColors"
                      :key="'transparent-color-' + index"
                      :color="color"
                      :title="capitalizeFirstLetter(color)"
                      description="Transparent Color example"
                      transparent
            >
              {{ index + 2 }}
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  `,
});

// TODO: Add more stories for this component to showcase the different use-cases

export {
  defaultExample,
  colors,
};

export default ListItemStories;

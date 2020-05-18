import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import { availableColors } from './ContentItem';
import { capitalizeFirstLetter } from '../../lib/textHelper';
import ContentItem from './ContentItem.vue';

const ContentItemStories = {
  component: ContentItem,
  title: 'Components/ContentItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ContentItem,
  },
  props: {
    color: {
      default: select('Color', [...availableColors, ''], ''),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    hasForwardButton: {
      default: boolean('Has Forward Button?', true),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    metaText: {
      default: text('Meta text', 'Example Metatext'),
    },
  },
  methods: {
    onClick: action('Click!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ContentItem:</strong>&nbsp;A list item which usually transitions the user to content in another screen.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <ContentItem :color="color"
                       :title="title"
                       :meta-text="metaText"
                       :has-forward-button="hasForwardButton"
                       :disabled="disabled"
                       @click="onClick"
          >
            Media
          </ContentItem>
        </div>
      </div>
    </div>
  `,
});

const colors = () => ({
  components: {
    ContentItem,
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
      <h2><strong>ContentItem:</strong>&nbsp;Available Colors</h2>
      <hr>
      <div style="width: 500px;">
        <ContentItem title="Default Color Example"
                     meta-text="Example metatext"
        >
          1
        </ContentItem>
        <ContentItem v-for="(color, index) in availableColors"
                     :key="index"
                     :color="color"
                     :title="capitalizeFirstLetter(color) + ' Color Example'"
                     :meta-text="'Example ' + capitalizeFirstLetter(color) + ' metatext'"
        >
          {{ index + 2 }}
        </ContentItem>
      </div>
    </div>
  `,
});

const withImage = () => ({
  components: {
    ContentItem,
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
      <h2><strong>ContentItem:</strong>&nbsp;With Image</h2>
      <hr>
      <div style="width: 500px;">
        <ContentItem title="Example with Image"
                     meta-text="Example metatext"
        >
          <img src="https://source.unsplash.com/random/44x44"/>
        </ContentItem>
      </div>
    </div>
  `,
});

export {
  defaultExample,
  colors,
  withImage,
};

export default ContentItemStories;

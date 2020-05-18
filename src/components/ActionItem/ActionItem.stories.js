import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import ActionItem from './ActionItem.vue';
import { availableColors } from './ActionItem';
import { capitalizeFirstLetter } from '../../lib/textHelper';

const ActionItemStories = {
  component: ActionItem,
  title: 'Components/ActionItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ActionItem,
  },
  props: {
    color: {
      default: select('Color', [...availableColors, ''], ''),
    },
    title: {
      default: text('Title', 'Example ActionItem'),
    },
    highlight: {
      default: boolean('Highlight', false),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ActionItem:</strong>&nbsp;A list item which takes the user to perform an action in another screen.</h2>
      <hr>
      <ul>
        <ActionItem :color="color"
                    :title="title"
                    :highlight="highlight"
                    @click="onClick"
        >
          1st
        </ActionItem>
        <ActionItem :color="color"
                    :title="title"
                    :highlight="highlight"
                    @click="onClick"
        >
          2nd
        </ActionItem>
        <ActionItem :color="color"
                    :title="title"
                    :highlight="highlight"
                    @click="onClick"
        >
          <div>
            <img src="https://source.unsplash.com/random/44x44"/>
          </div>
        </ActionItem>
      </ul>
    </div>
  `,
});

const colors = () => ({
  components: {
    ActionItem,
  },
  data() {
    return {
      availableColors,
    };
  },
  methods: {
    capitalizeFirstLetter,
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <ActionItem title="Default color example"
                  highlight
                  @click="onClick"
      >
        <p style="font-size: 11px;">Default</p>
      </ActionItem>
      <ActionItem v-for="(color, index) in availableColors"
                  :key="index"
                  :color="color"
                  :title="capitalizeFirstLetter(color)"
                  @click="onClick"
      >
        {{ index }}
      </ActionItem>
    </div>
  `,
});

export {
  defaultExample,
  colors,
};

export default ActionItemStories;

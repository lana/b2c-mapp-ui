import * as AllIcons from '@lana/b2c-mapp-ui-assets';
import type { Meta, StoryFn } from '@storybook/vue3';

const IconStories = {
  title: 'Components/Icons',
  args: {
    size: 24,
  },
  argTypes: {
    size: { name: 'Size', control: { type: 'number', min: 12, max: 72 } },
  },
} as Meta;

const defaultExample: StoryFn = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ...AllIcons,
  },
  data() {
    return {
      availableIconNames: Object.keys(AllIcons),
    };
  },
  computed: {
    styleWidth() {
      return { width: `${this.size}px` };
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Icons <small>({{ availableIconNames.length }})</small>:</strong>&nbsp;A gallery of all the available icons.</h2>
      <p style="margin-top: 10px;"><em>NOTE</em>: the icons are maintained in the following repo: <a target="_blank" href="https://github.com/lana/b2c-mapp-ui-assets/"><code>@lana/b2c-mapp-ui-assets</code></a></p>
      <hr>
      <div style="margin-top: 20px; display: flex; flex-direction: column;">
        <template v-for="(icon, index) in availableIconNames">
          <div style="margin: 10px; display: flex; flex-direction: row; justify-content: space-between; align-items: center">
            <label>{{ icon }}</label>
            <component :is="icon"
                       :style="styleWidth"
                       :key="'icon-' + index"
            />
          </div>
        </template>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default IconStories;

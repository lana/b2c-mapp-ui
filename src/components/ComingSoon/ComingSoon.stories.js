import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import ComingSoon from './ComingSoon.vue';

const ComingSoonStories = {
  component: ComingSoon,
  title: 'Components/ComingSoon',
  // Not sure if this is necessary:
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ComingSoon,
  },
  props: {
    title: {
      default: text('Title', 'Example Title'),
    },
    description: {
      default: text('Description', 'Example Description'),
    },
  },
  methods: {
    onClose: action('Close!'),
  },
  template: `
  <div style="margin: 10px 50px 10px 50px;">
    <h2><strong>ComingSoon:</strong>&nbsp;This can be used to inform the user that a functionality will be available soon.</h2>
    <hr>
    <div style="display: flex; flex-direction: column; width: 100%;">
      <div style="width: 500px">
        <ComingSoon :title="metaText"
                    :description="metaText"
                    @click="onClose"
        >
        </ComingSoon>
        
      </div>
    </div>
  </div>
`,

});

export {
  defaultExample,
};

export default ComingSoonStories;

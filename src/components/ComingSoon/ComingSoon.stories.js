import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import ComingSoon from './ComingSoon.vue';

const ComingSoonStories = {
  component: ComingSoon,
  title: 'Components/ComingSoon',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ComingSoon,
  },
  props: {
    title: {
      default: text('Title', 'Próximamente...'),
    },
    description: {
      default: text('Description', 'Estamos trabajando en esta funcionalidad y pronto podrás acceder a ella.'),
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
      <div style="width: 360px">
        <ComingSoon :title="title"
                    :description="description"
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

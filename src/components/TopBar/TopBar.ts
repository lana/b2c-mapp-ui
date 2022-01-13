import { defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';

const TopBar = defineComponent({
  name: 'TopBar',
  components: {
    Heading,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'topbar-header',
    },
    title: {
      type: String,
      default: '',
    },
  },
});

export default TopBar;

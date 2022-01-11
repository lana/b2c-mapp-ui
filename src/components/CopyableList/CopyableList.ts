import { defineComponent } from 'vue';

import Heading from '../Heading/Heading.vue';

const CopyableList = defineComponent({
  name: 'CopyableList',
  components: {
    Heading,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'copyable-list',
    },
    title: {
      type: String,
      default: '',
    },
  },
});

export default CopyableList;

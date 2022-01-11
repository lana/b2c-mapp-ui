import { defineComponent } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const Infobox = defineComponent({
  name: 'Infobox',
  components: {
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'info',
    },
  },
});

export default Infobox;

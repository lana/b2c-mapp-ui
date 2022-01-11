import { defineComponent } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const SpecCard = defineComponent({
  name: 'SpecCard',
  components: {
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'spec-card',
    },
    title: {
      type: String,
      default: '',
    },
    titleAbove: Boolean,
  },
});

export default SpecCard;

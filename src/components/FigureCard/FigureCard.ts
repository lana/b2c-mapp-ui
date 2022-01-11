import { defineComponent } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const FigureCard = defineComponent({
  name: 'FigureCard',
  components: {
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'figure-card',
    },
    title: {
      type: String,
      default: '',
    },
    imageSource: {
      type: String,
      default: '',
    },
    titleAbove: Boolean,
  },
  computed: {
    backgroundStyle() {
      const result = { backgroundImage: `url('${this.imageSource}')` };
      return result;
    },
  },
});

export default FigureCard;

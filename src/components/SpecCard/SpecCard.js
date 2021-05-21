import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'spec-card',
  },
  title: {
    type: String,
    default: '',
  },
  titleAbove: Boolean,
};

const SpecCard = {
  components,
  props,
};

export default SpecCard;

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'info',
  },
};

const Infobox = {
  components,
  props,
};

export default Infobox;

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

const name = 'Infobox';

const Infobox = {
  name,
  components,
  props,
};

export default Infobox;

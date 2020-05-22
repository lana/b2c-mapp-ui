import Button from '../Button/Button.vue';
import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  Button,
  Heading,
  TextParagraph,
};

const props = {
  title: {
    type: String,
    default: 'Próximamente...',
  },

  description: {
    type: String,
    default: 'Estamos trabajando en esta funcionalidad y pronto podrás acceder a ella.',
  },
};

const methods = {
  onClose() {
    this.$emit('close');
  },
};

const ComingSoon = {
  components,
  props,
  methods,
};

export default ComingSoon;

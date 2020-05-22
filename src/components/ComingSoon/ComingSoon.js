import Button from '../Button/Button.vue';
import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import comingSoonImage from '../../assets/img_wip.svg';

const components = {
  Button,
  Heading,
  TextParagraph,
};

const data = function () {
  return {
    image: comingSoonImage,
  };
};

const props = {
  dataTestId: {
    type: String,
    default: 'coming-soon',
  },

  title: {
    type: String,
    default: '',
  },

  description: {
    type: String,
    default: '',
  },
};

const methods = {
  onClose() {
    this.$emit('close');
  },
};

const ComingSoon = {
  components,
  data,
  props,
  methods,
};

export default ComingSoon;

import WrappedButton from '../WrappedButton/WrappedButton.vue';
import Heading from '../Heading/Heading.vue';
import Wrapper from '../Wrapper/Wrapper.vue';
import Screen from '../Screen/Screen.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  WrappedButton,
  Heading,
  Wrapper,
  Screen,
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'call-to-action',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  ButtonText: {
    type: String,
    default: '',
  },
};

const methods = {
  onClick() {
    this.$emit('click');
  },
};

const CallToActionScreen = {
  components,
  props,
  methods,
};

export default CallToActionScreen;

import WrappedButton from '../WrappedButton/WrappedButton.vue';
import Heading from '../Heading/Heading.vue';
import Wrapper from '../Wrapper/Wrapper.vue';
import Screen from '../Screen/Screen.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';

const components = {
  WrappedButton,
  Heading,
  Wrapper,
  Screen,
  TextParagraph,
  ScrollWrapper,
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
  buttonText: {
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

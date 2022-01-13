import { defineComponent } from 'vue';

import WrappedButton from '../WrappedButton/WrappedButton.vue';
import Heading from '../Heading/Heading.vue';
import Wrapper from '../Wrapper/Wrapper.vue';
import Screen from '../Screen/Screen.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';

const CallToActionScreen = defineComponent({
  name: 'CallToActionScreen',
  components: {
    WrappedButton,
    Heading,
    Wrapper,
    Screen,
    TextParagraph,
    ScrollWrapper,
  },
  emits: ['click'],
  props: {
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
    debounce: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick(event: Event) {
      this.$emit('click', event);
    },
  },
});

export default CallToActionScreen;

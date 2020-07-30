import { WorkInProgressIcon } from '@lana/b2c-mapp-ui-assets';

import Button from '../Button/Button.vue';
import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  Button,
  Heading,
  TextParagraph,
  WorkInProgressIcon,
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
  closeButtonText: {
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
  props,
  methods,
};

export default ComingSoon;

import { ChevronRightIcon } from '@lana/b2c-mapp-ui-assets';

import Button from '../Button/Button.vue';

const components = {
  Button,
  ChevronRightIcon,
};

const props = {
  dataTestId: {
    type: String,
    default: 'forward',
  },
  disabled: Boolean,
  id: String,
  name: String,
  debounce: {
    type: Boolean,
    default: false,
  },
  debounceDelay: Number,
};

const methods = {
  onClick(event) {
    this.$emit('click', event);
  },
};

const ForwardButton = {
  components,
  props,
  methods,
};

export default ForwardButton;

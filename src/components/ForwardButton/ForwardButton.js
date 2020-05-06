import { ForwardIcon } from '@lana/b2c-mapp-ui-assets/dist/index';

import Button from '../Button/Button.vue';

const components = {
  Button,
  ForwardIcon,
};

const availableTypes = [
  'dismiss',
  'secondary',
];

const props = {
  dataTestId: {
    type: String,
    default: 'forward',
  },
  type: {
    type: String,
    default: '',
    validator(value) { return (!value || availableTypes.includes(value)); },
  },
  href: String,
  loading: Boolean,
  disabled: Boolean,
  id: String,
  name: String,
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

export {
  availableTypes,
};

export default ForwardButton;

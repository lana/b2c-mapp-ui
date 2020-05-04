import { MopIcon } from '../../../../b2c-mapp-ui-assets/dist/index'; // TODO JASON: Update this path to use the npm package once ready

const components = {
  MopIcon,
};

const availableTypes = [
  'dismiss',
  'secondary',
];

const props = {
  type: {
    type: String,
    default: '',
    validator(value) { return (!value || availableTypes.includes(value)); },
  },
  href: String,
  loading: Boolean,
  dataTestId: String,
  disabled: Boolean,
  id: String,
};

const data = function () {
  return {
    isPressed: false,
  };
};

const computed = {
  componentType() {
    const result = (this.isLinkButton) ? 'a' : 'button';
    return result;
  },
  buttonTypeAttribute() {
    const result = (this.isLinkButton) ? '' : 'button';
    return result;
  },
  baseDataTestIdToUse() {
    const defaultDataTestId = (this.href) ? 'button-link' : 'button';
    const result = (this.dataTestId || defaultDataTestId);
    return result;
  },
  dataTestIdToUse() {
    const result = (this.isLinkButton) ? this.baseDataTestIdToUse : `${this.baseDataTestIdToUse}-button`;
    return result;
  },
  isLinkButton() {
    const result = !!this.href;
    return result;
  },
};

const methods = {
  toggleIsPressed() {
    this.isPressed = !this.isPressed;
  },
  onClick(event) {
    if (this.isPressed) { this.isPressed = false; }
    this.$emit('click', event);
  },
};

const Button = {
  components,
  props,
  data,
  computed,
  methods,
};

export {
  availableTypes,
};

export default Button;

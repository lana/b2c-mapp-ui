import { MopIcon } from '@lana/b2c-mapp-ui-assets';

const components = {
  MopIcon,
};

const availableTypes = [ // TODO: Consider removing this list entirely (in favor of new `secondary` prop) if we don't plan on adding any other types in the near future
  'secondary',
];

const props = {
  type: {
    type: String,
    default: '',
    validator(value) { return (!value || availableTypes.includes(value)); },
  },
  loadingText: {
    type: String,
    default: 'Cargando...',
  },
  href: String,
  link: Boolean,
  loading: Boolean,
  dataTestId: String,
  disabled: Boolean,
  dropShadow: Boolean,
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
    const result = (!!this.href || this.link);
    return result;
  },
};

const methods = {
  toggleIsPressed() {
    this.isPressed = !this.isPressed;
  },
  onClick(event) {
    if (this.disabled || this.loading) { return; }
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

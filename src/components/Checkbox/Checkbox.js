import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from '@lana/b2c-mapp-ui-assets';

const components = {
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
};

const props = {
  dataTestId: {
    type: String,
    default: 'checkbox',
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: Boolean,
  id: String,
  disabled: Boolean,
  hasError: Boolean,
};

const emits = ['update:modelValue'];

const data = function () {
  return {
    isChecked: this.modelValue,
    fallbackId: `${this._uid}checkbox`, // eslint-disable-line no-underscore-dangle
  };
};

const computed = {
  idToUse() {
    const result = (this.id || this.fallbackId);
    return result;
  },
};

const methods = {
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.isChecked);
  },
};

const watch = {
  isChecked() {
    this.emitUpdateModelValueEvent();
  },
  modelValue() {
    this.isChecked = this.modelValue;
  },
};

const Checkbox = {
  components,
  props,
  emits,
  data,
  computed,
  methods,
  watch,
};

export default Checkbox;

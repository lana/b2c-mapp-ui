import { CheckboxChecked, CheckboxUnchecked } from '@lana/b2c-mapp-ui-assets';

const components = {
  CheckboxChecked,
  CheckboxUnchecked,
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
  value: Boolean,
  id: String,
  disabled: Boolean,
};

const data = function () {
  return {
    isChecked: this.value,
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
  emitInputEvent() {
    this.$emit('input', this.isChecked);
  },
};

const watch = {
  isChecked() {
    this.emitInputEvent();
  },
  value() {
    this.isChecked = this.value;
  },
};

const Checkbox = {
  components,
  props,
  data,
  computed,
  methods,
  watch,
};

export default Checkbox;

import { AsYouType, getCountryCallingCode, getCountries } from 'libphonenumber-js/custom';

import FormField from '../FormField/FormField.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import phoneNumberMetadata from '../../../data/libphonenumber-metadata.min.json';

const availableCountryCodes = getCountries(phoneNumberMetadata);

const components = {
  FormField,
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'phone-field',
  },
  value: {
    type: String,
    default: '',
  },
  countryCode: {
    type: String,
    required: true,
    validator(value) { return availableCountryCodes.includes(value); },
  },
  hideCountryCode: Boolean,
  startFocused: Boolean,
  label: String,
  errorLabel: String,
  id: String,
  name: String,
  disabled: Boolean,
  readonly: Boolean,
};

const data = function () {
  return {
    inputValue: this.value,
  };
};

const computed = {
  formattedPhoneNumber() {
    if (!(this.inputValue && this.countryCode)) { return; }
    const asYouType = new AsYouType(this.countryCode, phoneNumberMetadata);
    const result = asYouType.input(this.inputValue);
    return result;
  },
  prefix() {
    if (!this.countryCode) { return; }
    const result = `+${getCountryCallingCode(this.countryCode, phoneNumberMetadata)}`;
    return result;
  },
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.inputValue);
  },
  onFocus(event) {
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.$emit('blur', event);
  },
  focus() {
    this.$refs.field.focus();
  },
};

const watch = {
  inputValue() {
    if (this.inputValue) { this.inputValue = this.formattedPhoneNumber; }
    this.emitInputEvent();
  },
  value() {
    this.inputValue = this.value;
  },
};

const PhoneNumberField = {
  components,
  computed,
  props,
  data,
  methods,
  watch,
};

export {
  availableCountryCodes,
};

export default PhoneNumberField;

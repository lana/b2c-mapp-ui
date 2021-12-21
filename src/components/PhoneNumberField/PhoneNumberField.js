import { AsYouType, getCountryCallingCode, getCountries } from 'libphonenumber-js/custom';

import FormField from '../FormField/FormField.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import phoneNumberMetadata from '../../../data/libphonenumber-metadata.min.json';
import { onlyDigitsRegexp, nonDigitRegexp } from '../../lib/regexHelper';

const getAvailableCountryCodes = () => getCountries(phoneNumberMetadata);

const components = {
  FormField,
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'phone-field',
  },
  modelValue: {
    type: String,
    default: '',
  },
  countryCode: {
    type: String,
    required: true,
    validator(value) { return getAvailableCountryCodes().includes(value); },
  },
  hideCountryCodeUntilFocus: Boolean,
  startFocused: Boolean,
  label: String,
  errorLabel: String,
  id: String,
  name: String,
  disabled: Boolean,
  readonly: Boolean,
  maxLength: Number,
  lengthHint: Number,
  lengthHintLabel: String,
  helpText: String,
  hideClearButton: Boolean,
  maxPhoneNumberLength: {
    type: Number,
    default: 10,
  },
};

const emits = ['update:modelValue', 'update:formattedValue', 'update:isValid', 'focus', 'blur'];

const data = function () {
  return {
    isFocused: false,
    inputValue: this.modelValue,
    isValid: false,
  };
};

const computed = {
  cleanedInputValue() {
    if (!this.inputValue) { return ''; }
    const result = this.inputValue.replace(nonDigitRegexp, '');
    return result;
  },
  formattedPhoneNumber() {
    if (!(this.inputValue && this.countryCode)) { return ''; }
    const asYouType = new AsYouType(this.countryCode, phoneNumberMetadata);
    const result = asYouType.input(this.cleanedInputValue);
    return result;
  },
  prefix() {
    if (!this.countryCode) { return; }
    const result = `+${getCountryCallingCode(this.countryCode, phoneNumberMetadata)}`;
    return result;
  },
  hideCountryCode() {
    if (!this.hideCountryCodeUntilFocus) { return; }
    const result = (!this.isFocused && !this.inputValue);
    return result;
  },
};

const methods = {
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.cleanedInputValue);
  },
  onFocus(event) {
    this.isFocused = true;
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.isFocused = false;
    this.$emit('blur', event);
  },
  supressNonDigitCharacterEntry(event) {
    if (onlyDigitsRegexp.test(event.key)) { return; }
    event.preventDefault();
  },
  focus() {
    this.$refs.field.focus();
  },
  isPhoneNumberValid() {
    if (this.maxPhoneNumberLength && (this.cleanedInputValue.length > this.maxPhoneNumberLength)) { return false; }
    const asYouType = new AsYouType(this.countryCode, phoneNumberMetadata);
    asYouType.input((this.inputValue || ''));
    const result = asYouType.isPossible();
    return result;
  },
};

const watch = {
  inputValue() {
    if (this.inputValue) { this.inputValue = this.formattedPhoneNumber; }
    this.emitUpdateModelValueEvent();
    this.$emit('update:isValid', this.isPhoneNumberValid());
  },
  formattedPhoneNumber() {
    this.$emit('update:formattedValue', this.formattedPhoneNumber);
  },
  modelValue() {
    this.inputValue = this.modelValue;
  },
};

const name = 'PhoneNumberField';

const PhoneNumberField = {
  name,
  components,
  computed,
  props,
  emits,
  data,
  methods,
  watch,
};

export {
  getAvailableCountryCodes,
};

export default PhoneNumberField;

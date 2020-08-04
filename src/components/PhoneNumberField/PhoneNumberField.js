import { AsYouType, getCountryCallingCode, getCountries } from 'libphonenumber-js/custom';

import FormField from '../FormField/FormField.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import phoneNumberMetadata from '../../../data/libphonenumber-metadata.min.json';
import { onlyDigitsRegexp, allSpacesRegexp } from '../../lib/regexHelper';

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
  maxPhoneNumberLength: {
    type: Number,
    default: 10,
  },
};

const data = function () {
  return {
    isFocused: false,
    inputValue: this.value,
  };
};

const computed = {
  formattedPhoneNumber() {
    if (!(this.inputValue && this.countryCode)) { return ''; }
    const asYouType = new AsYouType(this.countryCode, phoneNumberMetadata);
    const result = asYouType.input(this.inputValue);
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
  emitInputEvent() {
    this.$emit('input', this.inputValue);
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
    const inputValueWithoutSpaces = this.inputValue.replace(allSpacesRegexp, '');
    if (this.maxPhoneNumberLength && (inputValueWithoutSpaces.length > this.maxPhoneNumberLength)) { return false; }
    const asYouType = new AsYouType(this.countryCode, phoneNumberMetadata);
    asYouType.input((this.inputValue || ''));
    const result = asYouType.isPossible();
    return result;
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

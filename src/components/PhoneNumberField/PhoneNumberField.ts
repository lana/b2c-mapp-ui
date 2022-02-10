import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';
import type { CountryCode, MetadataJson } from 'libphonenumber-js/custom';
import { AsYouType, getCountryCallingCode, getCountries } from 'libphonenumber-js/custom';

import FormField from '../FormField/FormField.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import { onlyDigitsRegexp, nonDigitRegexp } from '../../lib/regexHelper';
import libphoneNumberMetadata from '../../../data/libphonenumber-metadata.min.json';

const getPhoneNumberMetadata = () => JSON.parse(JSON.stringify(libphoneNumberMetadata)) as MetadataJson;
const getAvailableCountryCodes = () => getCountries(getPhoneNumberMetadata());

const PhoneNumberField = defineComponent({
  name: 'PhoneNumberField',
  components: {
    FormField,
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'phone-field',
    },
    modelValue: {
      type: String,
      default: '',
    },
    countryCode: {
      type: String as PropType<CountryCode>,
      required: true,
      validator: (value: CountryCode) => getAvailableCountryCodes().includes(value),
    },
    hideCountryCodeUntilFocus: Boolean,
    startFocused: Boolean,
    label: {
      type: String,
      default: '',
    },
    errorLabel: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    readonly: Boolean,
    maxLength: {
      type: Number,
      default: null,
    },
    lengthHint: {
      type: Number,
      default: null,
    },
    lengthHintLabel: {
      type: String,
      default: '',
    },
    helpText: {
      type: String,
      default: '',
    },
    hideClearButton: Boolean,
    maxPhoneNumberLength: {
      type: Number,
      default: 10,
    },
  },
  emits: ['update:modelValue', 'update:formattedValue', 'update:isValid', 'focus', 'blur'],
  computed: {
    cleanedInputValue() {
      if (!this.inputValue) { return ''; }
      const result = this.inputValue.replace(nonDigitRegexp, '');
      return result;
    },
    formattedPhoneNumber() {
      if (!(this.inputValue && this.countryCode)) { return ''; }
      const asYouType = new AsYouType(this.countryCode, getPhoneNumberMetadata());
      const result = asYouType.input(this.cleanedInputValue);
      return result;
    },
    prefix() {
      if (!this.countryCode) { return; }
      const result = `+${getCountryCallingCode(this.countryCode, getPhoneNumberMetadata())}`;
      return result;
    },
    hideCountryCode() {
      if (!this.hideCountryCodeUntilFocus) { return; }
      const result = (!this.isFocused && !this.inputValue);
      return result;
    },
    maxLengthWithExtraCharacters() {
      const maxLength = this.maxLength || this.lengthHint;
      if (!maxLength) { return; }
      const charactersAdded = `${this.formattedPhoneNumber}`.length - `${this.modelValue}`.length;
      const result = maxLength + charactersAdded;
      return result;
    },
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.cleanedInputValue);
    },
    onFocus(event: Event) {
      this.isFocused = true;
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
      this.isFocused = false;
      this.$emit('blur', event);
    },
    supressNonDigitCharacterEntry(event: KeyboardEvent) {
      if (onlyDigitsRegexp.test(event.key)) { return; }
      event.preventDefault();
    },
    focus() {
      this.field.focus();
    },
    isPhoneNumberValid() {
      if (this.maxPhoneNumberLength && (this.cleanedInputValue.length > this.maxPhoneNumberLength)) { return false; }
      const asYouType = new AsYouType(this.countryCode, getPhoneNumberMetadata());
      asYouType.input((this.inputValue || ''));
      const result = asYouType.isPossible();
      return result;
    },
  },
  watch: {
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
  },
  setup(props) {
    const field = ref();
    const isFocused = ref(false);
    const inputValue = ref(props.modelValue);
    const isValid = ref(false);
    return {
      field,
      isFocused,
      inputValue,
      isValid,
    };
  },
});

export {
  getAvailableCountryCodes,
};

export default PhoneNumberField;

import FormField from '../FormField/FormField.vue';
import { allSpacesRegexp, nonDigitsRegexp } from '../../lib/regexHelper';
import { bankAccountNumberTemplateLookup, bankAccountNumberFormatter, validateBankAccountNumber } from '../../lib/bankAccountNumberValidator';

const defaultCountryCode = 'MX';

const components = {
  FormField,
};

const props = {
  dataTestId: {
    type: String,
    default: 'bank-account-field',
  },
  modelValue: {
    type: String,
    default: '',
  },
  errorLabel: {
    type: String,
    default: 'Invalid account number',
  },
  label: String,
  countryCode: String,
  name: String,
  disabled: Boolean,
  readonly: Boolean,
  startFocused: Boolean,
  autoformat: Boolean,
  showLengthHint: Boolean,
  lengthHint: Number,
  lengthHintLabel: String,
  helpText: String,
  hideClearButton: Boolean,
};

const emits = ['update:modelValue', 'change', 'focus', 'blur'];

const data = function () {
  return {
    inputValue: this.modelValue,
  };
};

const computed = {
  countryCodeToUse() {
    const result = (this.countryCode || defaultCountryCode);
    return result;
  },
  bankAccountTemplate() {
    const result = bankAccountNumberTemplateLookup[this.countryCodeToUse];
    return result;
  },
  accountNumberWithoutSpaces() {
    if (!this.inputValue) { return ''; }
    const result = this.inputValue.replace(allSpacesRegexp, '');
    return result;
  },
  parsedAccountNumber() {
    const payload = {
      accountNumber: this.accountNumberWithoutSpaces,
      template: this.bankAccountTemplate,
    };
    const result = bankAccountNumberFormatter(payload);
    return result;
  },
  validation() {
    if (!this.inputValue) { return; }
    const templateLength = this.bankAccountTemplate.replace(allSpacesRegexp, '').length;
    if (this.accountNumberWithoutSpaces.length > templateLength) { return; }
    const payload = {
      accountNumber: this.accountNumberWithoutSpaces,
      countryCode: this.countryCodeToUse,
    };
    const result = validateBankAccountNumber(payload);
    return result;
  },
  isValidBankAccount() {
    const result = (this.validation && this.validation.isValid);
    return result;
  },
  errorLabelToShow() {
    if (this.isValidBankAccount || !this.inputValue) { return ''; }
    return this.errorLabel;
  },
  maxLength() {
    const result = this.bankAccountTemplate.length;
    return result;
  },
  lengthHintToUse() {
    if (!this.showLengthHint) { return; }
    const result = (this.lengthHint || this.maxLength);
    return result;
  },
};

const methods = {
  emitUpdateModelValueEvent() {
    const payload = {
      value: this.inputValue,
      validation: this.validation,
    };
    this.$emit('update:modelValue', this.inputValue);
    this.$emit('change', payload);
  },
  focus() {
    this.$refs.field.focus();
  },
  onFocus(event) {
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.$emit('blur', event);
  },
  onPaste(event) {
    const rawPasteValue = (event.clipboardData || window.clipboardData).getData('text');
    const sanitizedValue = (rawPasteValue && rawPasteValue.replace(nonDigitsRegexp, ''));
    this.inputValue = sanitizedValue;
    event.preventDefault();
  },
  updateInputValueWithFormatting() {
    if (!this.autoformat || (this.accountNumberWithoutSpaces.length > this.bankAccountTemplate.length)) { return; }
    this.inputValue = this.parsedAccountNumber;
  },
};

const watch = {
  inputValue() {
    this.emitUpdateModelValueEvent();
    this.updateInputValueWithFormatting();
  },
  modelValue() {
    this.inputValue = this.modelValue;
  },
};

const mounted = function () {
  this.updateInputValueWithFormatting();
};

const BankAccountNumberInputField = {
  components,
  props,
  emits,
  data,
  computed,
  methods,
  watch,
  mounted,
};

export default BankAccountNumberInputField;

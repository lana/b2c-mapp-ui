import FormField from '../FormField/FormField.vue';
import { allSpacesRegexp } from '../../lib/regexHelper';
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
  value: {
    type: String,
    default: '',
  },
  errorLabel: {
    type: String,
    default: 'Invalid account number',
  },
  placeholder: String,
  countryCode: String,
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
};

const methods = {
  emitInputEvent() {
    const payload = {
      value: this.inputValue,
      validation: this.validation,
    };
    this.$emit('input', this.inputValue);
    this.$emit('change', payload);
  },
  onFocus(event) {
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.$emit('blur', event);
  },
  updateInputValueWithFormatting() {
    if (this.accountNumberWithoutSpaces.length > this.bankAccountTemplate.length) { return; }
    this.inputValue = this.parsedAccountNumber;
  },
};

const watch = {
  inputValue() {
    this.emitInputEvent();
    this.updateInputValueWithFormatting();
  },
  value() {
    this.inputValue = this.value;
  },
};

const mounted = function () {
  this.updateInputValueWithFormatting();
};


const BankAccountNumberInputField = {
  components,
  props,
  data,
  computed,
  methods,
  watch,
  mounted,
};

export default BankAccountNumberInputField;

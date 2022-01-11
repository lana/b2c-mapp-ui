import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';

import FormField from '../FormField/FormField.vue';
import { allSpacesRegexp, nonDigitsRegexp } from '../../lib/regexHelper';
import type { BankAccountNumberTemplate } from '../../lib/bankAccountNumberValidator';
import { bankAccountNumberTemplateLookup, bankAccountNumberFormatter, validateBankAccountNumber } from '../../lib/bankAccountNumberValidator';

const defaultCountryCode = 'MX';

const BankAccountNumberInputField = defineComponent({
  name: 'BankAccountNumberInputField',
  components: {
    FormField,
  },
  props: {
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
    label: {
      type: String,
      default: '',
    },
    countryCode: {
      type: String as PropType<BankAccountNumberTemplate>,
      default: 'MX',
      validator: (countryCode: BankAccountNumberTemplate) => Object.keys(bankAccountNumberTemplateLookup).includes(countryCode),
    },
    name: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    readonly: Boolean,
    startFocused: Boolean,
    autoformat: Boolean,
    showLengthHint: Boolean,
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
    inputmode: {
      type: String,
      default: '',
    },
    pattern: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  computed: {
    countryCodeToUse() {
      const result = (this.countryCode || defaultCountryCode);
      return result;
    },
    bankAccountTemplate() {
      const result = bankAccountNumberTemplateLookup[this.countryCodeToUse] || '';
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
  },
  methods: {
    emitUpdateModelValueEvent() {
      const payload = {
        value: this.inputValue,
        validation: this.validation,
      };
      this.$emit('update:modelValue', this.inputValue);
      this.$emit('change', payload);
    },
    focus() {
      if (!this.field) { return; }
      this.field.focus();
    },
    onFocus(event: Event) {
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
      this.$emit('blur', event);
    },
    onPaste(event: ClipboardEvent) {
      const rawPasteValue = event.clipboardData?.getData('text');
      const sanitizedValue = rawPasteValue?.replace(nonDigitsRegexp, '') || '';
      this.inputValue = sanitizedValue;
      event.preventDefault();
    },
    updateInputValueWithFormatting() {
      if (!this.autoformat || (this.accountNumberWithoutSpaces.length > this.bankAccountTemplate.length)) { return; }
      this.inputValue = this.parsedAccountNumber;
    },
  },
  watch: {
    inputValue() {
      this.inputValue = this.inputValue.substring(0, this.maxLength);
      this.emitUpdateModelValueEvent();
      this.updateInputValueWithFormatting();
    },
    modelValue() {
      this.inputValue = this.modelValue;
    },
  },
  setup(props) {
    const field = ref();
    const inputValue = ref(props.modelValue);
    return { field, inputValue };
  },
  mounted() {
    this.updateInputValueWithFormatting();
  },
});

export default BankAccountNumberInputField;

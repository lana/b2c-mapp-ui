import { CalendarIcon } from '@lana/b2c-mapp-ui-assets';

import FormField from '../FormField/FormField.vue';
import { getDateFromDateString, getFormattedStringFromDate, autoformatDate, isDateTextInputValid } from '../../lib/dateHelper';
import { validDateRegexp } from '../../lib/regexHelper';

const expectedDateInputLength = 10;
const invalidDatePart = 'aN';

const components = {
  CalendarIcon,
  FormField,
};

const props = {
  dataTestId: {
    type: String,
    default: 'date-field',
  },
  maxLength: {
    type: Number,
    default: 10,
  },
  modelValue: {
    type: String,
    default: '',
  },
  errorLabel: {
    type: String,
    default: 'Fecha no válida (DD/MM/YYYY)',
  },
  label: {
    type: String,
    default: '',
  },
  id: String,
  name: String,
  autoformat: Boolean,
  datePicker: Boolean,
  readonly: Boolean,
  startFocused: Boolean,
  disabled: Boolean,
  customValidation: Boolean,
  helpText: String,
};

const emits = ['update:modelValue', 'change', 'validate', 'focus', 'blur', 'keypress', 'keyup', 'paste'];

const data = function () {
  return {
    inputValue: this.modelValue,
    datePickerValue: this.formattedDateText,
  };
};

const computed = {
  formFieldId() {
    if (!this.id) { return; }
    const result = `${this.id}-date-input`;
    return result;
  },
  formFieldName() {
    const prefix = 'date-field';
    if (!this.name) { return prefix; }
    const result = `${prefix}-${this.name}`;
    return result;
  },
  calendarInputName() {
    const prefix = 'input-date';
    if (!this.name) { return prefix; }
    const result = `${prefix}-${this.name}`;
    return result;
  },
  errorLabelToShow() {
    if (this.customValidation || !this.isValid) { return this.errorLabel; }
  },
  hasError() {
    return !!this.errorLabelToShow;
  },
  formFieldFormattedDateText() {
    if (!this.datePickerValue) { return ''; }
    const result = getFormattedStringFromDate(new Date(this.datePickerValue));
    return result;
  },
  autoformattedDate() {
    if (!this.autoformat) { return this.inputValue; }
    const result = autoformatDate(this.inputValue);
    return result;
  },
  datePickerValueToUse() {
    if (!this.isValid) { return this.autoformattedDate; }
    const result = getDateFromDateString(this.autoformattedDate);
    return result;
  },
  isExpectedInputValueLength() {
    const result = (this.inputValue.length >= expectedDateInputLength);
    return result;
  },
  isValid() {
    if (!this.inputValue) { return true; }
    const result = (this.isExpectedInputValueLength && validDateRegexp.test(this.autoformattedDate) && isDateTextInputValid(this.autoformattedDate));
    return result;
  },
  uniqueId() {
    const base = (Math.random() + 1).toString(36).substring(7);
    const result = `${Array.from(base).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)}`;
    return result;
  },
};

const methods = {
  emitUpdateModelValueChangeAndValidationEvents() {
    const validationPayload = {
      value: this.inputValue,
      id: this.id,
    };
    this.$emit('update:modelValue', this.inputValue);
    this.$emit('change', this.formFieldFormattedDateText);
    this.$emit('validate', validationPayload);
  },
  updateInputValueWithFormatting() {
    if (!(this.autoformat && this.inputValue)) { return; }
    this.inputValue = this.autoformattedDate;
  },
  updateInputValueFromDatePicker() {
    if (this.formFieldFormattedDateText.includes(invalidDatePart)) { return; }
    this.inputValue = this.formFieldFormattedDateText;
  },
  updateCalendarValueIfNeeded() {
    if (!(this.inputValue && this.isValid)) { return; }
    this.datePickerValue = this.datePickerValueToUse;
  },
  onFocus(event) {
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.$emit('blur', event);
  },
  onKeypress(event) {
    this.$emit('keypress', event);
  },
  onKeyup(event) {
    this.$emit('keyup', event);
  },
  onPaste(event) {
    this.$emit('paste', event);
  },
  focus() {
    if (!this.$refs.field) { return; }
    this.$refs.field.focus();
  },
  blur() {
    if (!this.$refs.field) { return; }
    this.$refs.field.blur();
  },
  updateInputAndCalendarValuesAsNeeded() {
    this.updateInputValueWithFormatting();
    this.updateCalendarValueIfNeeded();
  },
};

const watch = {
  inputValue() {
    this.emitUpdateModelValueChangeAndValidationEvents();
    this.updateInputAndCalendarValuesAsNeeded();
  },
  datePickerValue() {
    this.updateInputValueFromDatePicker();
  },
  modelValue() {
    this.inputValue = this.modelValue;
  },
};

const mounted = function () {
  if (this.inputValue) { this.updateInputAndCalendarValuesAsNeeded(); }
};

const DateField = {
  components,
  props,
  emits,
  data,
  computed,
  mounted,
  methods,
  watch,
};

export default DateField;

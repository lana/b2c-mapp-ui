import { CalendarIcon } from '@lana/b2c-mapp-ui-assets/dist/index'; // TODO: Figure out how to not require adding the `/dist/index` path to the end of these imports

import FormField from '../FormField/FormField.vue';
import { getDateFromDateString, getFormattedStringFromDate, autoformatDate } from '../../lib/dateHelper';
import { validDateRegexp } from '../../lib/regexHelper';

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
  value: {
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
  disabled: Boolean,
};

const data = function () {
  return {
    inputValue: this.value,
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
    if (this.isValid) { return; }
    return this.errorLabel;
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
  isValid() {
    if (!this.inputValue) { return true; }
    const result = validDateRegexp.test(this.autoformattedDate);
    return result;
  },
};

const methods = {
  emitInputChangeAndValidationEvents() {
    const validationPayload = {
      value: this.inputValue,
      id: this.id,
    };
    this.$emit('input', this.inputValue);
    this.$emit('change', this.formFieldFormattedDateText);
    this.$emit('validate', validationPayload);
  },
  onFocus(event) {
    this.$emit('focus', event);
  },
  onBlur(event) {
    this.$emit('blur', event);
  },
  updateInputValueWithFormatting() {
    if (!(this.autoformat && this.inputValue)) { return; }
    this.inputValue = this.autoformattedDate;
  },
  updateInputValueFromDatePicker() {
    this.inputValue = this.formFieldFormattedDateText;
  },
  updateCalendarValueIfNeeded() {
    if (!(this.inputValue && this.isValid)) { return; }
    this.datePickerValue = this.datePickerValueToUse;
  },
};

const watch = {
  inputValue() {
    this.emitInputChangeAndValidationEvents();
    this.updateInputValueWithFormatting();
    this.updateCalendarValueIfNeeded();
  },
  datePickerValue() {
    this.updateInputValueFromDatePicker();
  },
  value() {
    this.inputValue = this.value;
  },
};

const DateField = {
  components,
  props,
  data,
  computed,
  methods,
  watch,
};

export default DateField;

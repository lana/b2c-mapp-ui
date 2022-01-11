import { CalendarIcon } from '@lana/b2c-mapp-ui-assets';
import { defineComponent, ref } from 'vue';

import FormField from '../FormField/FormField.vue';
import { getDateFromDateString, getFormattedStringFromDate, autoformatDate, isDateTextInputValid } from '../../lib/dateHelper';
import { validDateRegexp } from '../../lib/regexHelper';

const expectedDateInputLength = 10;
const invalidDatePart = 'aN';

const DateField = defineComponent({
  name: 'DateField',
  components: {
    CalendarIcon,
    FormField,
  },
  props: {
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
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    autoformat: Boolean,
    datePicker: Boolean,
    readonly: Boolean,
    startFocused: Boolean,
    disabled: Boolean,
    customValidation: Boolean,
    helpText: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change', 'validate', 'focus', 'blur', 'keypress', 'keyup', 'paste'],
  computed: {
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
      return '';
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
  },
  methods: {
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
    onFocus(event: Event) {
      this.$emit('focus', event);
    },
    onBlur(event: Event) {
      this.$emit('blur', event);
    },
    onKeypress(event: Event) {
      this.$emit('keypress', event);
    },
    onKeyup(event: Event) {
      this.$emit('keyup', event);
    },
    onPaste(event: Event) {
      this.$emit('paste', event);
    },
    focus() {
      if (!this.field) { return; }
      this.field.focus();
    },
    blur() {
      if (!this.field) { return; }
      this.field.blur();
    },
    updateInputAndCalendarValuesAsNeeded() {
      this.updateInputValueWithFormatting();
      this.updateCalendarValueIfNeeded();
    },
  },
  watch: {
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
  },
  setup(props) {
    const field = ref();
    const inputValue = ref(props.modelValue);
    const datePickerValue = ref(props.modelValue);
    return { field, inputValue, datePickerValue };
  },
  mounted() {
    if (this.inputValue) { this.updateInputAndCalendarValuesAsNeeded(); }
  },
});

export default DateField;

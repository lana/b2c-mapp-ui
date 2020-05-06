<template>
  <div data-testid="date-field-wrapper" class="calendar-wrapper">
    <FormField :id="formFieldId"
               v-model="inputValue"
               :name="formFieldName"
               :data-test-id="dataTestId"
               :label="label"
               type="text"
               :error-label="errorLabelToShow"
               :readonly="readonly"
               :disabled="disabled"
               :max-length="maxLength"
               @blur="onBlur"
               @focus="onFocus"
    />
    <label v-if="datePicker"
           class="calendar-icon"
           :data-testid="`${dataTestId}-datepicker-label`"
           :htmlFor="`input-date-${_uid}`"
    >
      <CalendarIcon class="icon"/>
      <input :id="`input-date-${_uid}`"
             v-model="datePickerValue"
             class="hidden-input"
             :name="calendarInputName"
             :data-testid="`${dataTestId}-datepicker-input`"
             :disabled="(disabled || readonly)"
             tabindex="-1"
             type="date"
      >
    </label>
  </div>
</template>

<script src="./DateField.js"/>
<style lang="scss" scoped src="./DateField.scss"/>

<template>
  <div data-testid="date-field-wrapper" class="calendar-wrapper">
    <FormField :id="formFieldId"
               ref="field"
               v-model="inputValue"
               hide-clear-button
               :name="formFieldName"
               :data-test-id="dataTestId"
               :label="label"
               type="text"
               :error-label="errorLabelToShow"
               :readonly="readonly"
               :disabled="disabled"
               :max-length="maxLength"
               :start-focused="startFocused"
               :help-text="helpText"
               @focus="onFocus"
               @blur="onBlur"
               @paste="onPaste"
               @keypress="onKeypress"
               @keyup="onKeyup"
    />
    <label v-if="datePicker && !readonly"
           class="calendar-icon"
           :data-testid="`${dataTestId}-datepicker-label`"
           :htmlFor="`input-date-${uniqueId}`"
    >
      <CalendarIcon class="icon" :class="{ 'grey-icon': disabled, 'red-icon': hasError }"/>
      <input :id="`input-date-${uniqueId}`"
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

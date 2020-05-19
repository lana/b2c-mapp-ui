<template>
  <FormField v-model="inputValue"
             :data-test-id="dataTestId"
             :label="label"
             :error-label="errorLabelToShow"
             :disabled="disabled"
             :readonly="readonly"
             type="tel"
             :name="name"
             :max-length="maxLength"
             @blur="onBlur"
             @focus="onFocus"
  />
</template>

<script src="./BankAccountNumberInputField.js"/>

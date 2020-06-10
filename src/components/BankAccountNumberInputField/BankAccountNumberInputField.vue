<template>
  <FormField ref="field"
             v-model="inputValue"
             :data-test-id="dataTestId"
             :label="label"
             :error-label="errorLabelToShow"
             :disabled="disabled"
             :readonly="readonly"
             :start-focused="startFocused"
             type="tel"
             :name="name"
             :max-length="maxLength"
             :length-hint="lengthHint"
             :length-hint-label="lengthHintLabel"
             @blur="onBlur"
             @focus="onFocus"
             @paste="onPaste"
  />
</template>

<script src="./BankAccountNumberInputField.js"/>

<template>
  <FormField ref="field"
             v-model="inputValue"
             type="tel"
             :data-test-id="dataTestId"
             :label="label"
             :error-label="errorLabelToShow"
             :disabled="disabled"
             :readonly="readonly"
             :start-focused="startFocused"
             :name="name"
             :max-length="maxLength"
             :length-hint="lengthHintToUse"
             :length-hint-label="lengthHintLabel"
             :help-text="helpText"
             :hide-clear-button="hideClearButton"
             :inputmode="inputmode"
             :pattern="pattern"
             @blur="onBlur"
             @focus="onFocus"
             @paste="onPaste"
  />
</template>

<script src="./BankAccountNumberInputField.js"/>

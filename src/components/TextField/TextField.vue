<template>
  <div class="wrapper">
    <FormField ref="field"
               v-model="inputValue"
               :data-test-id="dataTestId"
               :label="label"
               :type="type"
               :name="name"
               :error-label="errorLabel"
               :disabled="disabled"
               :readonly="readonly"
               :start-focused="startFocused"
               :max-length="maxLengthToUse"
               :length-hint="lengthHint"
               :length-hint-label="lengthHintLabel"
               :help-text="helpText"
               :hide-clear-button="hideClearButton"
               :inputmode="inputmode"
               :pattern="pattern"
               @focus="onFocus"
               @blur="onBlur"
               @keypress="onKeypress"
               @keyup="onKeyup"
               @paste="onPaste"
    />
  </div>
</template>

<script lang="ts" src="./TextField.ts"></script>
<style lang="scss" scoped src="./TextField.scss"></style>

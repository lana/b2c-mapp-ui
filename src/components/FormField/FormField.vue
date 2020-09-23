<template>
  <div class="outer-field-container">
    <div class="field-container" :class="{ disabled, readonly, focus: isFocused, error: errorLabel }">
      <label :data-testid="`${dataTestId}-label`"
             class="field"
             :class="{ labeled: hasLabel }"
      >
        <slot/>
        <strong class="label">{{ label }}</strong>
        <input :id="inputId"
               ref="input"
               v-model="inputValue"
               :data-testid="`${dataTestId}-input`"
               :type="type"
               class="input"
               autocomplete="off"
               :name="name"
               :maxlength="maxLengthToUse"
               :readonly="readonly"
               :disabled="disabled"
               @focus="onFocus"
               @blur="onBlur"
               @paste="onPaste"
               @keypress="onKeypress"
               @keyup="onKeyup"
        >
        <div v-if="isClearIconShowing" class="clear-icon-container" @mousedown="clearValue">
          <CloseBoldIcon class="clear-icon"/>
        </div>
      </label>
    </div>
    <div class="extra-text-container" :class="{ error: errorLabel }">
      <WarningBoldIcon v-if="errorLabel" class="error-icon"/>
      <TextParagraph v-if="errorLabelOrHelpText" class="help-text" :data-test-id="`${dataTestId}-helptext`">{{ errorLabelOrHelpText }}</TextParagraph>
    </div>
  </div>
</template>

<script src="./FormField.js"/>
<style lang="scss" scoped src="./FormField.scss"/>

<template>
  <div class="outer-field-container">
    <div class="field-container"
         :class="{ disabled, readonly, focus: (isFocused || isClearing), error: errorLabel }"
         :data-testid="`${dataTestId}-container`"
    >
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
               :inputmode="inputmode"
               :pattern="pattern"
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
    <div class="extra-text-container" :class="{ error: errorLabel }" :data-testid="`${dataTestId}-extra-text`">
      <WarningBoldIcon v-if="errorLabel" class="error-icon"/>
      <TextParagraph v-if="errorLabelOrHelpText" class="help-text" :data-test-id="`${dataTestId}-helptext`">
        {{ errorLabelOrHelpText }}
      </TextParagraph>
    </div>
  </div>
</template>

<script lang="ts" src="./FormField.ts"></script>
<style lang="scss" scoped src="./FormField.scss"></style>

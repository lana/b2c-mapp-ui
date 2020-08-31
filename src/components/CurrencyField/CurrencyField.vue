<template>
  <label :data-testid="`${dataTestId}-label`"
         class="field"
         :class="{ labeled: hasLabel, focus: isFocused, error: errorLabel, readonly }"
  >
    <slot/>
    <strong class="label">{{ errorLabelOrPlaceholder }}</strong>
    <input :id="inputId"
           ref="input"
           v-model="inputValue"
           v-currency="currencyOptions"
           class="input"
           autocomplete="off"
           :data-testid="`${dataTestId}-input`"
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
    <TextParagraph v-if="lengthHint"
                   class="hint"
                   :class="{ 'align-top': inputValue }"
                   :data-test-id="`${dataTestId}-rule`"
    >
      {{ lengthHint }} {{ lengthHintLabel }}
    </TextParagraph>
  </label>
</template>

<script src="./CurrencyField.js"/>
<style lang="scss" scoped src="./CurrencyField.scss"/>

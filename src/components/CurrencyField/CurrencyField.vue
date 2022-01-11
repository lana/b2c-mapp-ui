<template>
  <div class="outer-field-container">
    <div class="field-container" :class="{ disabled, readonly, focus: (isFocused || isClearing), error: errorLabel }">
      <label :data-testid="`${dataTestId}-label`"
             class="field"
             :class="{ labeled: hasLabel }"
      >
        <slot/>
        <strong class="label">{{ label }}</strong>
        <CurrencyInput :id="inputId"
                       ref="input"
                       v-model="inputValue"
                       v-model:formattedValue="formattedValue"
                       :options="currencyOptions"
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
        />
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

<script lang="ts" src="./CurrencyField.ts"></script>
<style lang="scss" scoped src="./CurrencyField.scss"></style>

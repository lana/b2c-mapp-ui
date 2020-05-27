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
           :data-testid="`${dataTestId}-input`"
           :type="type"
           class="input"
           autocomplete="off"
           :name="name"
           :maxlength="maxLength"
           :readonly="readonly"
           :disabled="disabled"
           @focus="onFocus"
           @blur="onBlur"
           @paste="onPaste"
    >
  </label>
</template>

<script src="./FormField.js"/>
<style lang="scss" scoped src="./FormField.scss"/>

<template>
  <FormField :id="id"
             ref="field"
             v-model="inputValue"
             class="field"
             :class="{ filled: !hideCountryCode }"
             type="tel"
             :label="label"
             :name="name"
             :error-label="errorLabel"
             :show-prefix="!hideCountryCode"
             :disabled="disabled"
             :readonly="readonly"
             :start-focused="startFocused"
             :data-test-id="dataTestId"
             @blur="onBlur"
             @focus="onFocus"
             @keypress="supressNonDigitCharacterEntry"
  >
    <TextParagraph v-if="!hideCountryCode"
                   class="prefix"
                   :data-test-id="`${dataTestId}-prefix`"
    >
      {{ prefix }}
    </TextParagraph>
  </FormField>
</template>

<script src="./PhoneNumberField.js"/>
<style lang="scss" scoped src="./PhoneNumberField.scss"/>

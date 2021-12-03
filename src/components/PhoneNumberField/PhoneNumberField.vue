<template>
  <FormField :id="id"
             ref="field"
             v-model="inputValue"
             class="phone-field"
             :class="{ filled: !hideCountryCode }"
             type="tel"
             :label="label"
             :name="name"
             :error-label="errorLabel"
             :show-prefix="!hideCountryCode"
             :disabled="disabled"
             :readonly="readonly"
             :start-focused="startFocused"
             :max-length="maxLength"
             :length-hint="lengthHint"
             :length-hint-label="lengthHintLabel"
             :data-test-id="dataTestId"
             :help-text="helpText"
             :hide-clear-button="hideClearButton"
             @blur="onBlur"
             @focus="onFocus"
             @keypress="supressNonDigitCharacterEntry"
  >
    <div v-if="!hideCountryCode" class="prefix-container">
      <TextParagraph :data-test-id="`${dataTestId}-prefix`">
        {{ prefix }}
      </TextParagraph>
    </div>
  </FormField>
</template>

<script src="./PhoneNumberField.js"/>
<style lang="scss" scoped src="./PhoneNumberField.scss"/>

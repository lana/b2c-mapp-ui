<template>
  <div class="outer-select-box-container">
    <div class="select-box-container" :class="{ focus: isFocused, disabled, readonly, 'no-value': (!hasEmptyOption && !value), error: errorLabel }">
      <label class="select-box" :data-testid="`${dataTestId}-label`">
        <strong class="label">{{ label }}</strong>
        <ExpandSmallIcon v-if="!readonly" class="select-icon"/>
        <select :id="id"
                ref="input"
                v-model="selectedValue"
                class="select"
                :class="{ 'grey-text': disabled, 'black-text': !disabled }"
                :name="name"
                :data-testid="`${dataTestId}-select`"
                :disabled="(disabled || readonly)"
                @focus="onFocus"
                @blur="onBlur"
                @paste="onPaste"
                @keypress="onKeypress"
                @keyup="onKeyup"
        >
          <option v-for="({ value: optionValue, disabled: isOptionDisabled, selected, label: optionLabel }, index) in options"
                  :key="`${optionValue}-${index}`"
                  :value="optionValue"
                  :selected="(((selectedValue === optionValue) || (!selectedValue && selected)))"
                  :data-selected="(((selectedValue === optionValue) || (!selectedValue && selected)))"
                  :disabled="isOptionDisabled"
                  :data-testid="`${dataTestId}-option`"
          >
            {{ optionLabel }}
          </option>
        </select>
      </label>
    </div>
    <div class="extra-text-container" :class="{ error: errorLabel }">
      <WarningBoldIcon v-if="errorLabel" class="error-icon"/>
      <TextParagraph v-if="errorLabelOrHelpText" class="help-text" :data-test-id="`${dataTestId}-helptext`">{{ errorLabelOrHelpText }}</TextParagraph>
    </div>
  </div>
</template>

<script src="./SelectBox.js"/>
<style lang="scss" scoped src="./SelectBox.scss"/>

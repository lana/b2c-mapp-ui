<template>
  <div :data-testid="`${dataTestId}-wrapper`"
       class="checkbox-wrapper"
       :class="{ checked: isChecked, error: hasError }"
  >
    <input :id="idToUse"
           v-model="isChecked"
           :data-testid="`${dataTestId}-input`"
           class="checkbox-input"
           type="checkbox"
           :disabled="disabled"
           :name="idToUse"
    >
    <CheckboxCheckedIcon v-if="isChecked"/>
    <CheckboxUncheckedIcon v-if="!isChecked" class="unchecked-icon"/>
    <label class="checkbox-label"
           :data-testid="`${dataTestId}-label`"
           :for="idToUse"
    >
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" src="./Checkbox.ts"></script>
<style lang="scss" scoped src="./Checkbox.scss"></style>

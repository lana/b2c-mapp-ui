<template>
  <label class="select-box-container"
         :class="{ focus: isFocused }"
         :data-testid="`${dataTestId}-label`"
  >
    <strong class="label">{{ label }}</strong>
    <ExpandSmallIcon/>
    <select :id="id"
            v-model="selectedValue"
            class="select"
            :name="name"
            :data-testid="`${dataTestId}-select`"
            :disabled="disabled"
            @focus="toggleFocus"
            @blur="toggleFocus"
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
</template>

<script src="./SelectBox.js"/>
<style lang="scss" scoped src="./SelectBox.scss"/>

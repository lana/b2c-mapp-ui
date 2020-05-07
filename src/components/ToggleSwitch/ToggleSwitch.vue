<template>
  <div :data-testid="`${dataTestId}-wrapper`"
       class="checkbox"
       :class="{ checked: isChecked }"
  >
    <label>
      <span class="track"/>
      <span class="knob"/>
      <input v-model="isChecked"
             type="checkbox"
             :data-testid="`${dataTestId}-input`"
             :disabled="disabled"
      >
    </label>
  </div>
</template>

<script src="./ToggleSwitch.js"/>
<style lang="scss" scoped src="./ToggleSwitch.scss"/>

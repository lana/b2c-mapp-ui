<template>
  <div :data-testid="`${dataTestId}-wrapper`"
       class="checkbox"
       :class="{ checked: isChecked }"
  >
    <label v-if="!buttons">
      <span class="track"/>
      <span class="knob"/>
      <input v-model="isChecked"
             type="checkbox"
             :data-testid="`${dataTestId}-input`"
             :disabled="disabled"
      >
    </label>
    <template v-if="buttons">
      <Button class="toggle-button true-button"
              :class="{ focused: (isChecked === true) }"
              :disabled="disabled"
              type="secondary"
              @click="check"
      >
        {{ trueButtonLabel }}
      </Button>
      <Button class="toggle-button false-button"
              :class="{ focused: (isChecked === false) }"
              :disabled="disabled"
              type="secondary"
              @click="uncheck"
      >
        {{ falseButtonLabel }}
      </Button>
    </template>
  </div>
</template>

<script lang="ts" src="./ToggleSwitch.ts"></script>
<style lang="scss" scoped src="./ToggleSwitch.scss"></style>

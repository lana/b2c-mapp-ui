<template>
  <div class="steps-container" :data-testid="`${dataTestId}-container`">
    <div class="steps" :data-testid="`${dataTestId}`">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" src="./Steps.ts"></script>
<style lang="scss" scoped src="./Steps.scss"></style>

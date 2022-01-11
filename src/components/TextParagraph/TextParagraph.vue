<template>
  <p class="txt"
     :class="[(size && `txt-${size}`), color, weight]"
     :data-testid="dataTestId"
  >
    <slot/>
  </p>
</template>

<script lang="ts" src="./TextParagraph.ts"></script>
<style lang="scss" scoped src="./TextParagraph.scss"></style>

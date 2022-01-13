<template>
  <h1 class="title"
      :class="[weight, `txt-${size}`]"
      :data-testid="dataTestId"
  >
    <slot/>
  </h1>
</template>

<script lang="ts" src="./Heading.ts"></script>
<style lang="scss" scoped src="./Heading.scss"></style>

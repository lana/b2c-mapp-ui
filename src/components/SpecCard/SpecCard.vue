<template>
  <figure class="spec-card">
    <figcaption v-if="title" :data-test-id="`${dataTestId}-title`" class="title">
      {{ title }}
    </figcaption>
    <slot/>
  </figure>
</template>

<script lang="ts" src="./SpecCard.ts"></script>
<style lang="scss" scoped src="./SpecCard.scss"></style>

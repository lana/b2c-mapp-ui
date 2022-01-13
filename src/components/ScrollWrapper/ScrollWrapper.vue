<template>
  <section ref="wrapper"
           class="scroll"
           :data-testid="dataTestId"
  >
    <div>
      <slot/>
    </div>
  </section>
</template>

<script lang="ts" src="./ScrollWrapper.ts"></script>
<style lang="scss" scoped src="./ScrollWrapper.scss"></style>

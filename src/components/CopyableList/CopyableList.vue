<template>
  <section :data-testid="`${dataTestId}-section`" class="section">
    <Heading class="title">
      {{ title }}
    </Heading>
    <ul :data-testid="`${dataTestId}-list`">
      <slot/>
    </ul>
    <slot name="content"/>
  </section>
</template>

<script lang="ts" src="./CopyableList.ts"></script>
<style lang="scss" scoped src="./CopyableList.scss"></style>

<template>
  <section class="section">
    <Heading class="title">{{ title }}</Heading>
    <ul :data-testid="`${dataTestId}-list`">
      <slot/>
    </ul>
    <slot name="content"/>
  </section>
</template>

<script src="./CopyableList.js"/>
<style lang="scss" scoped src="./CopyableList.scss"/>

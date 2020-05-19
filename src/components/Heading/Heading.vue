<template>
  <h1 class="title"
      :class="[weight, `txt-${size}`]"
      :data-testid="dataTestId"
  >
    <slot/>
  </h1>
</template>

<script src="./Heading.js"/>
<style lang="scss" scoped src="./Heading.scss"/>

<template>
  <p class="txt"
     :class="[(size && `txt-${size}`), color, weight]"
     :data-testid="dataTestId"
  >
    <slot/>
  </p>
</template>

<script src="./TextParagraph.js"/>
<style lang="scss" scoped src="./TextParagraph.scss"/>

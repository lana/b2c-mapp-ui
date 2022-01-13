<template>
  <section class="header-info" :data-testid="dataTestId">
    <TextParagraph class="header-info-text">
      <slot/>
    </TextParagraph>
  </section>
</template>

<script lang="ts" src="./Infobox.ts"></script>
<style lang="scss" scoped src="./Infobox.scss"></style>

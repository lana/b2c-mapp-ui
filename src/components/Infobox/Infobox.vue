<template>
  <section class="header-info" :data-testid="dataTestId">
    <TextParagraph class="header-info-text">
      <slot/>
    </TextParagraph>
  </section>
</template>

<script src="./Infobox.js"/>
<style lang="scss" scoped src="./Infobox.scss"/>

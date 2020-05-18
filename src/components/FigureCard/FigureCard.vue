<template>
  <figure class="figure-card">
    <div class="image-wrapper">
      <div class="image"
           :data-testid="`${dataTestId}-image`"
           :style="backgroundStyle"
      />
    </div>
    <figcaption>
      <TextParagraph :data-test-id="`${dataTestId}-title`" size="small" color="black-700">{{ title }}</TextParagraph>
    </figcaption>
  </figure>
</template>

<script src="./FigureCard.js"/>
<style lang="scss" scoped src="./FigureCard.scss"/>

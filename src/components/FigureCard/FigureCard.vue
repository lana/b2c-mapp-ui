<template>
  <figure class="figure-card">
    <figcaption v-show="isTitleUp" v-if="title" :data-test-id="`${dataTestId}-title`">
      <TextParagraph size="small" color="black-700">{{ title }}</TextParagraph>
    </figcaption>
    <div v-if="imageSource" class="image-wrapper">
      <div class="image"
           :data-testid="`${dataTestId}-image`"
           :style="backgroundStyle"
      />
    </div>
    <slot/>
    <figcaption v-show="!isTitleUp" v-if="title" :data-test-id="`${dataTestId}-title`">
      <TextParagraph size="small" color="black-700">{{ title }}</TextParagraph>
    </figcaption>
  </figure>
</template>

<script src="./FigureCard.js"/>
<style lang="scss" scoped src="./FigureCard.scss"/>

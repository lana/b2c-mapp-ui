<template>
  <figure class="figure-card">
    <div class="image-wrapper">
      <div class="image"
           :data-testid="`${dataTestId}-image`"
           :style="backgroundStyle"
      />
    </div>
    <figcaption>
      <TextParagraph :data-test-id="`${dataTestId}-title`" size="small">{{ title }}</TextParagraph>
      <TextParagraph v-if="metaText"
                     :data-test-id="`${dataTestId}-meta`"
                     size="xsmall"
      >
        {{ metaText }}
      </TextParagraph>
    </figcaption>
  </figure>
</template>

<script src="./FigureCard.js"/>
<style lang="scss" scoped src="./FigureCard.scss"/>

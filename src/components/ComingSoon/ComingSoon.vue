<template>
  <section>
    <Heading class="title" size="large" weight="medium">{{ title }}</Heading>
    <div class="text-info">
      <TextParagraph class="description" size="medium"> {{ description }}</TextParagraph>
    </div>
    <!-- <img src="/src/assets/img_wip.svg" alt="Work in progress"> -->
    <div class="image-wrapper">
      <img :src="image" alt="kitten" width="360" height="264">
    </div>
    <Button @click="onClose">
      Aceptar
    </Button>
  </section>
</template>

<script src="./ComingSoon.js"/>
<style lang="scss" scoped src="./ComingSoon.scss"/>

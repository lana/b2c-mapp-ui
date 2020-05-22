<template>
  <section>
    <Heading class="title" size="large" weight="medium">{{ title }}</Heading>
    <div class="text-info">
      <TextParagraph class="description" size="medium"> {{ description }}</TextParagraph>
    </div>
    <!-- <img src="/src/assets/img_wip.svg" alt="Work in progress"> -->
    <div class="image-wrapper">
      <img src="https://images.unsplash.com/photo-1582461198261-b655abb99f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="kitten" width="360" height="264">
    </div>
    <Button @click="onClose">
      Aceptar
    </Button>
  </section>
</template>

<script src="./ComingSoon.js"/>
<style lang="scss" scoped src="./ComingSoon.scss"/>

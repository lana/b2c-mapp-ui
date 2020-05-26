<template>
  <section>
    <Heading class="title" size="xl" weight="medium">{{ title }}</Heading>
    <div class="text-info">
      <TextParagraph class="description" size="medium"> {{ description }}</TextParagraph>
    </div>
    <div class="image-wrapper">
      <WorkInProgress/>
    </div>
    <Button :data-testid="dataTestId" @click="onClose"> {{ closeButtonText }} </Button>
  </section>
</template>

<script src="./ComingSoon.js"/>
<style lang="scss" scoped src="./ComingSoon.scss"/>

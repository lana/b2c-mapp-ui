<template>
  <Screen>
    <Wrapper modal>
      <Heading class="title">{{ title }}</Heading>
      <TextParagraph> {{ description }}</TextParagraph>
    </Wrapper>
    <Wrapper>
      <slot/>
    </Wrapper>
    <div class="button-container">
      <WrappedButton :data-testid="dataTestId" @click="onClick"> {{ ButtonText }} </WrappedButton>
    </div>
  </Screen>
</template>

<script src="./CallToActionScreen.js"/>
<style lang="scss" scoped src="./CallToActionScreen.scss"/>

<template>
  <Screen>
    <ScrollWrapper>
      <Wrapper modal>
        <Heading class="title">{{ title }}</Heading>
        <TextParagraph> {{ description }}</TextParagraph>
      </Wrapper>
      <Wrapper>
        <slot/>
      </Wrapper>
    </ScrollWrapper>
    <slot name="secondaryAction"/>
    <WrappedButton :data-testid="dataTestId" :debounce="debounce" @click="onClick"> {{ buttonText }} </WrappedButton>
  </Screen>
</template>

<script src="./CallToActionScreen.js"/>
<style lang="scss" scoped src="./CallToActionScreen.scss"/>

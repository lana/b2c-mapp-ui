<template>
  <section class="overlay"
           :class="{ visible: isShowing }"
           :data-testid="`${dataTestId}-section`"
  >
    <div :data-testid="`${dataTestId}-dismiss`"
         class="dim"
         @click="dismissDialog"
    />
    <div :data-testid="`${dataTestId}-content`" class="dialog">
      <Wrapper>
        <Heading v-if="title" :data-test-id="`${dataTestId}-title`">
          {{ title }}
        </Heading>
        <TextParagraph v-if="description"
                       class="description"
                       :data-test-id="`${dataTestId}-description`"
        >
          {{ description }}
        </TextParagraph>
        <ScrollWrapper v-if="!description"
                       class="content"
                       :data-test-id="`${dataTestId}-children`"
        >
          <slot/>
        </ScrollWrapper>
      </Wrapper>
      <div class="actions" :data-testid="`${dataTestId}-actions`">
        <slot name="actions"/>
        <Button v-if="confirmButtonText"
                class="confirm"
                :loading="loading"
                :loading-text="loadingText"
                :disabled="disabled"
                :data-test-id="`${dataTestId}-action-confirm`"
                @click="onConfirm"
        >
          {{ confirmButtonText }}
        </Button>
        <Button v-if="secondaryButtonText"
                class="dismiss"
                :disabled="disabled"
                :data-test-id="`${dataTestId}-action-secondary`"
                type="secondary"
                link
                @click="onSecondary"
        >
          {{ secondaryButtonText }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./ConfirmationToastDialog.ts"></script>
<style lang="scss" scoped src="./ConfirmationToastDialog.scss"></style>

<template>
  <section class="overlay"
           :class="{ visible: isShowing }"
           :data-testid="`${dataTestId}-section`"
  >
    <slot v-bind="{ onDismiss, onConfirm }" name="extraActions" />
    <div class="dialog" :data-testid="`${dataTestId}-content`">
      <Heading v-if="title"
               class="title"
               :data-test-id="`${dataTestId}-title`"
      >
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
      <div class="actions" :data-testid="`${dataTestId}-actions`">
        <button v-if="dismissButtonText"
                class="action dismiss"
                :class="{ disabled: dismissButtonDisabled }"
                :disabled="dismissButtonDisabled"
                :data-testid="`${dataTestId}-action-dismiss-button`"
                @click="onDismiss"
        >
          {{ dismissButtonText }}
        </button>
        <button v-if="confirmButtonText"
                class="action"
                :class="{ disabled: confirmButtonDisabled }"
                :disabled="confirmButtonDisabled"
                :data-testid="`${dataTestId}-action-confirm-button`"
                @click="onConfirm"
        >
          {{ confirmButtonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script src="./ConfirmationModalDialog.js"/>
<style lang="scss" scoped src="./ConfirmationModalDialog.scss"/>

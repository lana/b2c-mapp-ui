<template>
  <li :key="uniqueId" class="copyable-list-item" :data-testid="dataTestId">
    <div class="item-icon" :data-testid="`${dataTestId}-icon`">
      <slot/>
    </div>
    <div class="item-text-container" :data-testid="`${dataTestId}-content`">
      <TextParagraph v-if="title"
                     class="title"
                     size="medium"
                     color="black-500"
                     :data-test-id="`${dataTestId}-title`"
      >
        {{ title }}
      </TextParagraph>
      <TextParagraph class="item-text"
                     color="black-700"
                     :data-test-id="`${dataTestId}-text`"
      >
        {{ text }}
      </TextParagraph>
    </div>
    <TextParagraph v-if="!hideButton"
                   class="copy-button-container"
                   :data-test-id="`${dataTestId}-copy-text`"
    >
      <CopyToClipboardButton :value-to-copy="text"
                             :disabled="disabled"
                             :data-test-id="`${dataTestId}-copy-to-clipboard-button`"
                             @click="onClick"
      />
    </TextParagraph>
  </li>
</template>

<script lang="ts" src="./CopyableListItem.ts"></script>
<style lang="scss" scoped src="./CopyableListItem.scss"></style>

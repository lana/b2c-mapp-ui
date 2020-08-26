<template>
  <li class="item"
      :data-testid="dataTestId"
      :disabled="disabled"
      @click="emitClickEvent"
  >
    <div v-if="$slots.default"
         class="media"
         :class="{ 'no-border': noBorder }"
         :data-testid="`${dataTestId}-media-icon`"
    >
      <slot/>
    </div>
    <div :data-testid="`${dataTestId}-heading`" class="body">
      <Heading class="title" size="medium">{{ title }}</Heading>
      <TextParagraph v-if="metaText"
                     class="meta-text"
                     :data-test-id="`${dataTestId}-meta-text`"
      >
        {{ metaText }}
      </TextParagraph>
    </div>
    <ChevronRightIcon v-if="hasForwardButton"
                      class="forward-icon"
                      :data-testid="`${dataTestId}-forward-icon`"
    />
  </li>
</template>

<script src="./ContentItem.js"/>
<style lang="scss" scoped src="./ContentItem.scss"/>

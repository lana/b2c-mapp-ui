<template>
  <li class="item"
      :class="[{ success, pressed: isPressed }]"
      :data-testid="dataTestId"
      :disabled="disabled"
      @click="emitClickEvent"
      @touchStart="toggleIsPressed"
      @touchEnd="toggleIsPressed"
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
    <Component :is="iconName" v-if="hasIcon" class="item-icon" :data-testid="iconDataTestId"/>
  </li>
</template>

<script src="./ContentItem.js"/>
<style lang="scss" scoped src="./ContentItem.scss"/>

<template>
  <li class="item"
      :class="{ success, pressed: isPressed }"
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
      <Heading class="title" size="medium">
        <slot name="customTitle">{{ title }}</slot>
      </Heading>
      <TextParagraph v-if="hasMetaText"
                     class="meta-text"
                     :data-test-id="`${dataTestId}-meta-text`"
      >
        <slot name="customMetaText">{{ metaText }}</slot>
      </TextParagraph>
    </div>
    <slot name="forwardIcon">
      <Component :is="iconName" v-if="hasIcon" class="item-icon" :data-testid="iconDataTestId"/>
    </slot>
    <slot name="extraItem"/>
  </li>
</template>

<script src="./ContentItem.js"/>
<style lang="scss" scoped src="./ContentItem.scss"/>

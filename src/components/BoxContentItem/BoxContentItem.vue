<template>
  <ul class="container">
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
           :data-testid="`${dataTestId}-media-icon`"
      >
        <slot/>
      </div>
      <div :data-testid="`${dataTestId}-heading`" class="body">
        <Heading class="title" :class="{ success }" size="medium">
          <slot name="custom-title">{{ title }}</slot>
        </Heading>
        <TextParagraph v-if="hasMetaText"
                       class="meta-text"
                       :data-test-id="`${dataTestId}-meta-text`"
        >
          <slot name="custom-meta-text">{{ metaText }}</slot>
        </TextParagraph>
      </div>
    </li>
  </ul>
</template>

<script src="./BoxContentItem.js"/>
<style lang="scss" scoped src="./BoxContentItem.scss"/>

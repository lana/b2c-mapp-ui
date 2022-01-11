<template>
  <li class="item"
      :class="{ success, pressed: isPressed }"
      :data-testid="dataTestId"
      :disabled="disabled"
      @click="emitClickEvent"
      @touchStart="toggleIsPressed"
      @touchEnd="toggleIsPressed"
  >
    <div v-if="hasDefaultSlot"
         class="media"
         :data-testid="`${dataTestId}-media-icon`"
    >
      <slot/>
    </div>
    <div :data-testid="`${dataTestId}-heading`" class="body">
      <Heading class="title" :class="{ success }" size="medium">
        <slot name="customTitle">
          {{ title }}
        </slot>
      </Heading>
      <TextParagraph v-if="hasMetaText"
                     class="meta-text"
                     :data-test-id="`${dataTestId}-meta-text`"
      >
        <slot name="customMetaText">
          {{ metaText }}
        </slot>
      </TextParagraph>
    </div>
  </li>
</template>

<script lang="ts" src="./BoxContentItem.ts"></script>
<style lang="scss" scoped src="./BoxContentItem.scss"></style>

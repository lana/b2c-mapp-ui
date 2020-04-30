<template>
  <li :data-testid="dataTestId"
      class="item"
      @click="onClick"
  >
    <div v-if="$slots.default"
         class="media"
         :data-testid="`${dataTestId}-mediacolor`"
         :class="color"
    >
      <slot/>
    </div>
    <div class="body">
      <TextParagraph :data-test-id="`${dataTestId}-highlight`"
                     :class="{ highlight }"
      >
        {{ title }}
      </TextParagraph>
    </div>
  </li>
</template>

<script src="./ActionItem.js"/>
<style lang="scss" scoped src="./ActionItem.scss"/>

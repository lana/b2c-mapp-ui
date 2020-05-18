<template>
  <li :data-testid="dataTestId"
      class="item"
      @click="onClick"
  >
    <div v-if="$slots.default"
         class="media"
         :data-testid="`${dataTestId}-mediacolor`"
    >
      <slot/>
    </div>
    <div class="body">
      <TextParagraph class="title"
                     :class="{ highlight }"
                     :data-testid="`${dataTestId}-highlight`"
      >
        {{ title }}
      </TextParagraph>
    </div>
  </li>
</template>

<script src="./ActionItem.js"/>
<style lang="scss" scoped src="./ActionItem.scss"/>

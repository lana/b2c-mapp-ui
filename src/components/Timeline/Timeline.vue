<template>
  <div class="timeline-container" :data-testid="`${dataTestId}-container`">
    <div class="timeline-begin"  :data-testid="`${dataTestId}-begin`">
      <slot name="startPoint"></slot>
    </div>
    <div class="timeline"  :data-testid="`${dataTestId}`">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./Timeline.js"/>
<style lang="scss" scoped src="./Timeline.scss"/>
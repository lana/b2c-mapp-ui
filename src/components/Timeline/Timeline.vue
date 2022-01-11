<template>
  <div class="timeline-container" :data-testid="`${dataTestId}-container`">
    <div class="timeline-begin" :data-testid="`${dataTestId}-begin`">
      <slot name="startPoint"/>
    </div>
    <div class="timeline" :data-testid="`${dataTestId}`">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" src="./Timeline.ts"></script>
<style lang="scss" scoped src="./Timeline.scss"></style>

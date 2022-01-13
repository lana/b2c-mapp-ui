<template>
  <div class="container">
    <div class="mobile-frame" :style="{ height: resolution.height, width: resolution.width }">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" src="./StorybookMobileDeviceSimulator.ts"></script>
<style lang="scss" scoped src="./StorybookMobileDeviceSimulator.scss"></style>

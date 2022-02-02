<template>
  <div class="step">
    <div class="step-icon">
      <slot name="icon">
        <div class="blue-circle"/>
      </slot>
    </div>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/colors';

.step {
  margin: 16px;
  margin-left: 44px;
  position: relative;
  border: 1px solid $black-300;
  border-radius: 20px;
  overflow: unset;
}
.step-icon {
  left: -28px;
  top: 16px;
  position: absolute;
  display: block;
  z-index: 2;
}
.blue-circle {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: $blue-500;
}
</style>

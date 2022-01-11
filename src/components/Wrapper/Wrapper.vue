<template>
  <div class="wrapper" :class="{ 'wrapper-modal': modal, 'wrapper-content': !modal }">
    <slot/>
  </div>
</template>

<script lang="ts" src="./Wrapper.ts"></script>
<style lang="scss" scoped src="./Wrapper.scss"></style>

<template>
  <div class="wrapper" :class="{ 'wrapper-modal': modal, 'wrapper-content': !modal }">
    <slot/>
  </div>
</template>

<script src="./Wrapper.js"/>
<style lang="scss" scoped src="./Wrapper.scss"/>

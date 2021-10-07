<template>
  <div class="wrapper">
    <Confetti v-for="({ id, color, width, height }) in countOfParticles"
              :key="id"
              :color="color"
              :width="width"
              :height="height"
    />
  </div>
</template>
<script src="./ConfettiOverlay.js"/>
<style lang="scss" scoped src="./ConfettiOverlay.scss"/>

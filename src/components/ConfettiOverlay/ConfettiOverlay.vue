<template>
  <div class="wrapper">
    <div v-for="index in countOfParticles"
         :key="index"
         :class="`confetti-${index}`"
    />
  </div>
</template>
<script src="./ConfettiOverlay.js"/>
<style lang="scss" scoped src="./ConfettiOverlay.scss"/>

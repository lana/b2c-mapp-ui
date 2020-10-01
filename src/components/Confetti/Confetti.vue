<template>
  <div class="wrapper">
    <div v-for="index in confettiParticles"
         :key="index"
         :class="`confetti-${index}`"
    />
  </div>
</template>
<script src="./Confetti.js"/>
<style lang="scss" scoped src="./Confetti.scss"/>

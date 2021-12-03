<template>
  <div class="wrapper">
    <div class="slider-wrapper">
      <div ref="slider" class="slider-track" :class="{ started: (isStarted && !isCompleted), completed: isCompleted }">
        <div ref="overlay" class="overlay" :style="[overlayStyle]"/>
        <div ref="slideButton"
             class="slide-button"
             :style="[slideButtonStyle]"
             @mousedown="startSlide"
             @mousemove="continueSlide"
             @mouseup="endSlide"
             @touchstart="startSlide"
             @touchmove="continueSlide"
             @touchend="endSlide"
        >
          <ChevronsRightIcon class="button-icon"/>
        </div>
        <div class="slide-label">
          {{ instructionLabel }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./SlideButton.js"/>
<style lang="scss" scoped src="./SlideButton.scss"/>

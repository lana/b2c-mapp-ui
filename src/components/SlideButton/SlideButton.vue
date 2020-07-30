<template>
  <div class="wrapper">
    <div class="slider-wrapper">
      <div
        ref="slider"
        :class="`slider-track ${sliderClass}`"
      >
        <div
          ref="overlay"
          class="overlay"
          :style="[overlayStyle]"
        />
        <div
          ref="slideButton"
          class="slide-button"
          :style="[slideButtonStyle]"
          @mousedown="startSlide"
          @mousemove="continueSlide"
          @mouseup="endSlide"
          @touchstart="startSlide"
          @touchmove="continueSlide"
          @touchend="endSlide"
        >
          <ChevronsRight class="button-icon"/>
        </div>
        <div class="slide-text">
          {{ instructionText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./SlideButton.js"/>
<style lang="scss" scoped src="./SlideButton.scss"/>

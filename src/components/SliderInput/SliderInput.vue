<template>
  <div :data-testid="`${dataTestId}-container`" class="slider-container" :class="color">
    <Slider v-model="inputValue"
            :lazy="false"
            :tooltips="false"
            :min="min"
            :max="max"
            :step="step"
    />
    <div class="slider-labels">
      <div class="slider-label-left">
        <p v-if="titleLeft" class="slider-label-title">
          {{ titleLeft }}
        </p>
        <p v-if="descriptionLeft" class="slider-label-description">
          {{ descriptionLeft }}
        </p>
      </div>
      <div class="slider-label-right">
        <p v-if="titleRight" class="slider-label-title">
          {{ titleRight }}
        </p>
        <p v-if="descriptionRight" class="slider-label-description">
          {{ descriptionRight }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SliderInput.ts"></script>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" scoped src="./SliderInput.scss"></style>

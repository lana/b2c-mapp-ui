<template>
  <div :data-testid="`${dataTestId}-container`" class="progress-container">
    <div class="progress-bar-wrapper" :class="color">
      <div class="bar-dot left"
           :class="{ filled: (progressPercentage > 0) }"
      />
      <div class="bar-dot right"/>
      <div v-show="progressPercentage > 0"
           class="circle-filler"
      />
      <div class="circle-container">
        <div class="progress-bar"
             ref="bar"
             :data-testid="`${dataTestId}-progress-bar`"
             :style="progressStyle"
        />
        <div v-show="progressPercentage > 0"
             class="circle-bar"
             ref="circle"
             :data-testid="`${dataTestId}-circle-bar`"
             :style="circleStyle"
        />
      </div>
    </div>
  </div>
</template>

<script src="./LinearProgress.js"/>
<style lang="scss" scoped src="./LinearProgress.scss"/>

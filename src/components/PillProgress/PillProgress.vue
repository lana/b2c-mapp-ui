<template>
  <div :data-testid="`${dataTestId}-container`" class="progress-container">
    <div class="progress-bar-wrapper" :class="color">
      <div class="progress-background"/>
      <div v-show="progressPercentage > 0"
           class="circle-filler left"
      />
      <div v-show="progressPercentage >= 100"
           class="circle-filler right"
      />
      <div class="bar-container">
        <div ref="bar"
             class="progress-bar"
             :data-testid="`${dataTestId}-progress-bar`"
             :style="progressStyle"
        >
          <div class="pill-effect"/>
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script src="./PillProgress.js"/>
<style lang="scss" scoped src="./PillProgress.scss"/>

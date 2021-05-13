<template>
  <div class="carousel" :data-testid="dataTestId">
    <component :is="`ul`"
               ref="carousel"
               class="carousel-wrapper"
               :data-testid="`${dataTestId}-wrapper`"
               @mousedown="handleGestureStart"
               @mousemove="handleGestureMove"
               @mouseup="handleGestureEnd"
               @scroll.passive="handleScroll"
    >
      <slot/>
    </component>
    <slot v-if="!hideArrows"
          name="arrows"
          :data-testid="`${dataTestId}-arrows`"
          :change-item="changeRenderedItem"
          :is-previous-available="isPreviousAvailable"
          :is-next-available="isNextAvailable"
    >
      <button v-show="isPreviousAvailable"
              type="button"
              class="carousel-arrow left"
              :data-testid="`${dataTestId}-left-arrow`"
              :disabled="!isPreviousAvailable"
              :class="{ 'with-icon': arrowIcons }"
              @click="changeRenderedItem(-1)"
      >
        <slot v-if="arrowIcons" name="leftArrowIcon">
          <ChevronLeftIcon v-if="!$slots.leftArrowIcon" class="icon"/>
        </slot>
      </button>
      <button v-show="isNextAvailable"
              type="button"
              class="carousel-arrow right"
              :data-testid="`${dataTestId}-right-arrow`"
              :disabled="!isNextAvailable"
              :class="{ 'with-icon': arrowIcons }"
              @click="changeRenderedItem(1)"
      >
        <slot v-if="arrowIcons" name="rightArrowIcon">
          <ChevronRightIcon v-if="!$slots.rightArrowIcon" class="icon"/>
        </slot>
      </button>
    </slot>
    <slot v-if="!hideNavigation"
          name="navigation"
          :data-testid="`${dataTestId}-navigation`"
          :current-index="currentIndex"
          :total="items.length"
          :click="setCurrentIndex"
    >
      <div class="carousel-controls"
           :data-testid="`${dataTestId}-navigation`"
      >
        <button v-for="index in items.length"
                :key="index"
                :data-testid="`${dataTestId}-navigation-item`"
                @click="setCurrentIndex(index - 1)"
        >
          <slot v-if="(index - 1) !== currentIndex"
                name="navigationItem"
                :index="index"
          >
            <span class="control-item"/>
          </slot>
          <slot v-if="(index - 1) === currentIndex"
                name="navigationItemActive"
                :index="index"
          >
            <span class="control-item active"/>
          </slot>
        </button>
      </div>
    </slot>
  </div>
</template>

<script src="./Carousel.js"/>
<style lang="scss" scoped src="./Carousel.scss"/>

<template>
  <li ref="carouselItem" class="carousel-item" :data-testid="dataTestId">
    <slot/>
  </li>
</template>

<script src="./CarouselItem.js"/>
<style lang="scss" scoped src="./CarouselItem.scss"/>

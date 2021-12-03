<template>
  <Carousel v-model="slide" :hide-arrows="hideArrows" :arrow-icons="arrowIcons" :hide-navigation="hideNavigation">
    <div v-for="n in childAmount" :key="n" style="width: 10px"/>
  </Carousel>
</template>
<script>
import Carousel from '../Carousel.vue';

export default {
  name: 'CarouselTestWrapper',
  components: {
    Carousel,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      slide: this.modelValue || 0,
    };
  },
  watch: {
    slide() {
      this.$emit('update:modelValue', this.slide);
    },
  },
  props: {
    hideArrows: Boolean,
    arrowIcons: Boolean,
    hideNavigation: Boolean,
    modelValue: {
      type: Number,
      default: 0,
    },
    childAmount: {
      type: Number,
      default: 1,
    },
  },
  beforeMount() {
    Element.prototype.scrollTo = () => {};
  },
  beforeUnmount() {
    Element.prototype.scrollTo = undefined;
  },
};

</script>

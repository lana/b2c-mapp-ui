<template>
  <Carousel v-model="slide" :hide-arrows="hideArrows" :arrow-icons="arrowIcons" :hide-navigation="hideNavigation">
    <CarouselItem v-for="n in childAmount" :key="n"><div style="width: 10px"/></CarouselItem>
  </Carousel>
</template>
<script>
import Carousel from '../Carousel.vue';
import CarouselItem from '../../CarouselItem/CarouselItem.vue';

export default {
  name: 'CarouselTestWrapper',
  components: {
    Carousel,
    CarouselItem,
  },
  data() {
    return {
      slide: this.value || 0,
    };
  },
  watch: {
    slide() {
      this.$emit('input', this.slide);
    },
  },
  props: ['hideArrows', 'arrowIcons', 'hideNavigation', 'value', 'childAmount'],
  beforeMount() {
    Element.prototype.scrollTo = () => {};
  },
  beforeDestroy() {
    Element.prototype.scrollTo = undefined;
  },
};

</script>

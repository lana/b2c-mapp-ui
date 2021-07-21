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

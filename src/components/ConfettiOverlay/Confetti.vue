<template>
  <div ref="confettiRef" class="confetti-container" :style="containerStyle">
    <div class="confetti" :class="color" :style="confettiStyle"/>
  </div>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Confetti',
  props: {
    color: {
      type: String,
      default: 'red',
    },
    width: {
      type: Number,
      default: 10,
    },
    height: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const confettiRef = ref();
    const containerStyle = ref<CSSProperties>({
      visibility: 'hidden',
      width: `${props.width}px`,
      height: `${props.width * 0.8}px`,
      left: `${props.height}%`,
      opacity: Math.random() + 0.5,
    });
    const confettiStyle = ref<CSSProperties>({
      transform: `rotate(${Math.random() * 360}deg)`,
    });
    onMounted(() => {
      const plusOrMinus = (Math.random() < 0.5) ? (-1) : (1);
      const animation = [
        {
          visibility: 'visible',
        },
        {
          top: '110%',
          transform: `translateX(${plusOrMinus * props.height * Math.random() * 15}%)`,
        }];
      const animationProps = { duration: (2 + Math.random()) * 1000, delay: Math.random() * 1000, easing: 'ease-in' };
      confettiRef.value.animate(animation, animationProps);
    });
    return { containerStyle, confettiStyle, confettiRef };
  },
});
</script>

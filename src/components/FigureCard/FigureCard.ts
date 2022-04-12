import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue';

import TextParagraph from '../TextParagraph/TextParagraph.vue';

const FigureCard = defineComponent({
  name: 'FigureCard',
  components: {
    TextParagraph,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'figure-card',
    },
    title: {
      type: String,
      default: '',
    },
    imageSource: {
      type: String,
      default: '',
    },
    titleAbove: Boolean,
    lazy: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const image = ref<HTMLDivElement>();
    const backgroundStyle = computed(() => {
      const result = { backgroundImage: `url('${props.imageSource}')` };
      return result;
    });
    const observer = ref<IntersectionObserver>();
    if (props.lazy) {
      const onImageObserved = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) { return; }
          observer.value?.unobserve(target);
          image.value?.classList.remove('lazy');
        });
      };
      observer.value = new IntersectionObserver(
        onImageObserved,
      );
    }

    onMounted(() => {
      if (!image.value || !props.lazy) { return; }
      observer.value?.observe(image.value);
    });
    onUnmounted(() => {
      if (!props.lazy) { return; }
      observer.value?.disconnect();
    });
    return {
      observer,
      backgroundStyle,
      image,
    };
  },
});

export default FigureCard;

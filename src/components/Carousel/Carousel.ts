import { ref, nextTick, defineComponent } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@lana/b2c-mapp-ui-assets';
import { debounce } from 'lodash-es';

const isTouchEvent = (event: MouseEvent | TouchEvent): event is TouchEvent => (event as TouchEvent).touches !== undefined;

const Carousel = defineComponent({
  name: 'Carousel',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    hideArrows: {
      type: Boolean,
      default: false,
    },
    arrowIcons: {
      type: Boolean,
      default: false,
    },
    hideNavigation: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    dataTestId: {
      type: String,
      default: 'carousel',
    },
    scrollDebounce: {
      type: Number,
      default: 200,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    isPreviousAvailable() {
      if (!this.items) { return false; }
      const result = (this.currentIndex - 1 >= 0);
      return result;
    },
    isNextAvailable() {
      if (!this.items) { return false; }
      const result = (this.currentIndex + 1 < this.items.length);
      return result;
    },
  },
  methods: {
    getItems(): HTMLElement[] {
      if (!this.$slots.default) { return []; }
      const items = this.$slots.default().reduce((accumulator, node) => {
        if (!node.component?.refs.componentInstance || !node.component.refs) { return accumulator; }
        if (node.component.refs.carouselItem) {
          accumulator.push(node.component.refs.carouselItem as HTMLElement);
        }
        return accumulator;
      }, [] as HTMLElement[]);
      const result = (items.length) ? items : [...this.carousel.children];
      return result;
    },
    async setItems() {
      await nextTick();
      if (!this.carousel) { return; }
      this.items = this.getItems();
      this.updateScroll(this.currentIndex);
    },
    updateScroll(index: number) {
      if (!this.items[index] || !this.carousel) { return; }
      this.carousel.style.scrollBehavior = 'auto';
      this.carousel.scrollTo({
        left: this.items[index]?.offsetLeft || 0,
      });
      this.carousel.style.scrollBehavior = '';
    },
    changeRenderedItem(direction: number) {
      this.setCurrentIndex(this.currentIndex + direction);
    },
    setCurrentIndex(index: number) {
      if (!this.items[index] || index === this.currentIndex) {
        return;
      }
      this.destinationScrollLeft = this.items[index]?.offsetLeft || 0;
      this.currentIndex = index;
      this.carousel.scrollTo({
        left: this.items[index]?.offsetLeft || 0,
        behavior: 'smooth',
      });
    },
    getMouseXPositionFromEvent(event: MouseEvent | TouchEvent) {
      if (isTouchEvent(event)) {
        const touch = event.touches.item(0);
        const result = touch?.pageX || 0;
        return result;
      }
      const result = (event.clientX);
      return result;
    },
    handleGestureStart(event: MouseEvent | TouchEvent) {
      this.initialX = this.getMouseXPositionFromEvent(event) - this.carousel.offsetLeft;
      this.scrollLeft = this.carousel.scrollLeft;
      this.isScrolling = true;
      this.carousel.style.scrollSnapType = 'none';
    },
    handleGestureMove(event: MouseEvent | TouchEvent) {
      if (!this.isScrolling) { return; }
      const currentX = this.getMouseXPositionFromEvent(event) - this.carousel.offsetLeft;
      const walk = (currentX - this.initialX) * 3;
      this.carousel.scrollLeft = this.scrollLeft - walk;
    },
    handleGestureEnd(event: MouseEvent | TouchEvent) {
      if (!this.isScrolling) { return; }
      this.isScrolling = false;
      this.carousel.style.scrollSnapType = '';
      const currentX = this.getMouseXPositionFromEvent(event) - this.carousel.offsetLeft;
      const walk = (currentX - this.initialX) * 3;
      this.carousel.scrollLeft = this.scrollLeft - walk;
    },
    handleScroll(event: Event) {
      const { scrollLeft, clientLeft } = event.target as HTMLElement;
      const correctedScrollLeft = scrollLeft + clientLeft;
      const index = this.items.findIndex(({ offsetLeft: itemOffsetLeft }) => (Math.abs(itemOffsetLeft - correctedScrollLeft) < 1));
      if (index < 0) { return; }
      if (this.destinationScrollLeft !== null && this.items[index]?.offsetLeft !== this.destinationScrollLeft) { return; }
      this.destinationScrollLeft = -1;
      this.currentIndex = index;
    },
    onObserverEvent() {
      this.updateScroll(this.currentIndex);
    },
    initObserver() {
      const resizeObserver = new ResizeObserver(this.onObserverEvent);
      resizeObserver.observe(this.carousel);
      this.resizeObserver = resizeObserver;
    },
  },
  watch: {
    modelValue() {
      this.setCurrentIndex(this.modelValue || 0);
    },
    currentIndex() {
      this.$emit('update:modelValue', this.currentIndex);
    },
  },
  setup(props) {
    const carousel = ref();
    const items = ref([] as HTMLElement[]);
    const itemsCount = ref(0);
    const currentIndex = ref(props.modelValue);
    const initialX = ref(0);
    const scrollLeft = ref(0);
    const destinationScrollLeft = ref(-1);
    const isScrolling = ref(false);
    const resizeObserver = ref<ResizeObserver>();
    const debouncedChangeRenderedItem = ref<(direction: number) => void>(() => {});
    return {
      carousel,
      items,
      itemsCount,
      currentIndex,
      initialX,
      scrollLeft,
      destinationScrollLeft,
      isScrolling,
      resizeObserver,
      debouncedChangeRenderedItem,
    };
  },
  created() {
    this.debouncedChangeRenderedItem = debounce(this.changeRenderedItem, this.scrollDebounce);
  },
  mounted() {
    this.setItems();
    document.addEventListener('mousemove', this.handleGestureMove);
    document.addEventListener('mouseup', this.handleGestureEnd);
    this.initObserver();
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleGestureMove);
    document.removeEventListener('mouseup', this.handleGestureEnd);
    if (this.resizeObserver) { this.resizeObserver.unobserve(this.carousel); }
  },
});

export default Carousel;

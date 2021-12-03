import { ref, nextTick } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@lana/b2c-mapp-ui-assets';
import { debounce } from 'lodash-es';

const components = {
  ChevronLeftIcon,
  ChevronRightIcon,
};

const props = {
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
};

const emits = ['update:modelValue'];

const data = function () {
  return {
    items: [],
    itemsCount: 0,
    currentIndex: this.modelValue,
    initialX: 0,
    scrollLeft: 0,
    destinationScrollLeft: null,
    isScrolling: false,
    resizeObserver: null,
  };
};

const computed = {
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
};

const methods = {
  getItems() {
    const items = this.$slots.default().reduce((accumulator, node) => {
      if (!node.componentInstance || !node.componentInstance.$refs) { return accumulator; }
      if (node.componentInstance.$refs.carouselItem) {
        accumulator.push(node.componentInstance.$refs.carouselItem);
      }
      return accumulator;
    }, []);
    const result = (items.length) ? items : [...this.carousel.children];
    return result;
  },
  async setItems() {
    await nextTick();
    if (!this.carousel) { return; }
    this.items = this.getItems();
    this.updateScroll(this.currentIndex);
  },
  updateScroll(index) {
    if (!this.items[index] || !this.carousel) { return; }
    this.carousel.style.scrollBehavior = 'auto';
    this.carousel.scrollTo({
      left: this.items[index].offsetLeft,
    });
    this.carousel.style.scrollBehavior = '';
  },
  changeRenderedItem(direction) {
    this.setCurrentIndex(this.currentIndex + direction);
  },
  setCurrentIndex(index) {
    if (!this.items[index] || index === this.currentIndex) {
      return;
    }
    this.destinationScrollLeft = this.items[index].offsetLeft;
    this.currentIndex = index;
    this.carousel.scrollTo({
      left: this.items[index].offsetLeft,
      behavior: 'smooth',
    });
  },
  getMouseXPositionFromEvent(event) {
    const result = (event.clientX || event.touches[0].pageX);
    return result;
  },
  handleGestureStart(event) {
    this.initialX = this.getMouseXPositionFromEvent(event) - this.carousel.offsetLeft;
    this.scrollLeft = this.carousel.scrollLeft;
    this.isScrolling = true;
    this.carousel.style.scrollSnapType = 'none';
  },
  handleGestureMove(event) {
    if (!this.isScrolling) { return; }
    const currentX = this.getMouseXPositionFromEvent(event) - this.carousel.offsetLeft;
    const walk = (currentX - this.initialX) * 3;
    this.carousel.scrollLeft = this.scrollLeft - walk;
  },
  handleGestureEnd(event) {
    if (!this.isScrolling) { return; }
    this.isScrolling = false;
    this.carousel.style.scrollSnapType = '';
    const currentX = this.getMouseXPositionFromEvent(event) - this.carousel.offsetLeft;
    const walk = (currentX - this.initialX) * 3;
    this.carousel.scrollLeft = this.scrollLeft - walk;
  },
  handleScroll(event) {
    const { scrollLeft, clientLeft } = event.target;
    const correctedScrollLeft = scrollLeft + clientLeft;
    const index = this.items.findIndex(({ offsetLeft: itemOffsetLeft }) => (Math.abs(itemOffsetLeft - correctedScrollLeft) < 1));
    if (index < 0) { return; }
    if (this.destinationScrollLeft !== null && this.items[index].offsetLeft !== this.destinationScrollLeft) { return; }
    this.destinationScrollLeft = null;
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
};

const watch = {
  modelValue() {
    this.setCurrentIndex(this.modelValue || 0);
  },
  currentIndex() {
    this.$emit('update:modelValue', this.currentIndex);
  },
};

const setup = function () {
  const carousel = ref(null);
  return { carousel };
};

const created = function () {
  this.debouncedChangeRenderedItem = debounce(this.changeRenderedItem, this.scrollDebounce);
};

const mounted = function () {
  this.setItems();
  document.addEventListener('mousemove', this.handleGestureMove);
  document.addEventListener('mouseup', this.handleGestureEnd);
  this.initObserver();
};

const beforeUnmount = function () {
  document.removeEventListener('mousemove', this.handleGestureMove);
  document.removeEventListener('mouseup', this.handleGestureEnd);
  if (this.resizeObserver) { this.resizeObserver.unobserve(this.carousel); }
};

const Carousel = {
  components,
  props,
  emits,
  data,
  computed,
  methods,
  setup,
  watch,
  created,
  mounted,
  beforeUnmount,
};

export default Carousel;

import { ChevronLeftIcon, ChevronRightIcon } from '@lana/b2c-mapp-ui-assets';

const debounce = require('lodash.debounce');

const SCROLL_DEBOUNCE = 200;

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
  value: {
    type: Number,
    default: 0,
  },
  dataTestId: {
    type: String,
    default: 'carousel',
  },
};

const data = function () {
  return {
    items: [],
    itemsCount: 0,
    currentIndex: this.value,
    initialX: 0,
    scrollLeft: 0,
    destinationScrollLeft: null,
    isScrolling: false,
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
    const items = this.$slots.default.reduce((accumulator, node) => {
      if (!node.componentInstance || !node.componentInstance.$refs) { return accumulator; }
      if (node.componentInstance.$refs.carouselItem) {
        accumulator.push(node.componentInstance.$refs.carouselItem);
      }
      return accumulator;
    }, []);
    const result = (items.length) ? items : [...this.$refs.carousel.children];
    return result;
  },
  async setItems() {
    await this.$nextTick();
    if (!this.$refs.carousel) { return; }
    this.items = this.getItems();
    this.updateScroll(this.currentIndex);
  },
  updateScroll(index) {
    if (!this.items[index]) { return; }
    this.$refs.carousel.style.scrollBehavior = 'auto';
    this.$refs.carousel.scrollTo({
      left: this.items[index].offsetLeft,
    });
    this.$refs.carousel.style.scrollBehavior = '';
  },
  changeRenderedItem: debounce(function changeRenderedItem(direction) {
    this.setCurrentIndex(this.currentIndex + direction);
  }, SCROLL_DEBOUNCE),
  setCurrentIndex(index) {
    if (!this.items[index] || index === this.currentIndex) {
      return;
    }
    this.destinationScrollLeft = this.items[index].offsetLeft;
    this.currentIndex = index;
    this.$refs.carousel.scrollTo({
      left: this.items[index].offsetLeft,
      behavior: 'smooth',
    });
  },
  getMouseXPositionFromEvent(event) {
    const result = (event.clientX || event.touches[0].pageX);
    return result;
  },
  handleGestureStart(event) {
    this.initialX = this.getMouseXPositionFromEvent(event) - this.$refs.carousel.offsetLeft;
    this.scrollLeft = this.$refs.carousel.scrollLeft;
    this.isScrolling = true;
    this.$refs.carousel.style.scrollSnapType = 'none';
  },
  handleGestureMove(event) {
    if (!this.isScrolling) { return; }
    const currentX = this.getMouseXPositionFromEvent(event) - this.$refs.carousel.offsetLeft;
    const walk = (currentX - this.initialX) * 3;
    this.$refs.carousel.scrollLeft = this.scrollLeft - walk;
  },
  handleGestureEnd(event) {
    if (!this.isScrolling) { return; }
    this.isScrolling = false;
    this.$refs.carousel.style.scrollSnapType = '';
    const currentX = this.getMouseXPositionFromEvent(event) - this.$refs.carousel.offsetLeft;
    const walk = (currentX - this.initialX) * 3;
    this.$refs.carousel.scrollLeft = this.scrollLeft - walk;
  },
  handleScroll(event) {
    const { scrollLeft } = event.target;
    const roundedScrollLeft = Math.round(scrollLeft);
    const index = this.items.findIndex(({ offsetLeft: itemOffsetLeft }) => (itemOffsetLeft === roundedScrollLeft));
    if (index < 0) { return; }
    if (this.destinationScrollLeft !== null && this.items[index].offsetLeft !== this.destinationScrollLeft) { return; }
    this.currentIndex = index;
  },
};

const watch = {
  value() {
    this.setCurrentIndex(this.value || 0);
  },
  currentIndex() {
    this.$emit('input', this.currentIndex);
    this.destinationScrollLeft = null;
  },
};

const mounted = function () {
  this.setItems();
  document.addEventListener('mousemove', this.handleGestureMove);
  document.addEventListener('mouseup', this.handleGestureEnd);
};

const beforeDestroy = function () {
  document.removeEventListener('mousemove', this.handleGestureMove);
  document.removeEventListener('mouseup', this.handleGestureEnd);
};

const Carousel = {
  components,
  props,
  data,
  computed,
  methods,
  watch,
  mounted,
  beforeDestroy,
};

export default Carousel;

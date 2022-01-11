import { ChevronsRightIcon } from '@lana/b2c-mapp-ui-assets';
import { defineComponent, ref } from 'vue';

const isTouchEvent = (event: MouseEvent | TouchEvent): event is TouchEvent => (event as TouchEvent).touches !== undefined;

const gapWidth = -25;

const SlideButton = defineComponent({
  name: 'SlideButton',
  components: {
    ChevronsRightIcon,
  },
  props: {
    initialInstructionLabel: {
      type: String,
      default: 'Desliza para confirmar',
    },
    completedLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['actionConfirmed'],
  computed: {
    instructionLabel() {
      if (this.isCompleted) { return this.completedLabel; }
      return this.initialInstructionLabel;
    },
  },
  methods: {
    startSlide(event: MouseEvent | TouchEvent) {
      if (this.isCompleted) { return; }
      this.initialMouseX = this.getMouseXPositionFromEvent(event);
      this.endPoint = this.getEndingPoint();
      this.calculateSliderInitialWidth();
      this.calculateSlideButtonInitialPosition();
      this.updateSlideButton(0);
      this.updateSlider();
      this.isStarted = true;
    },
    getEndingPoint() {
      const [{ right: endingPoint }] = this.slider.getClientRects();
      return endingPoint;
    },
    calculateSliderInitialWidth() {
      const [{ x: leftSliderPosition }] = this.slider.getClientRects();
      this.initialSliderWidth = this.initialMouseX - leftSliderPosition;
      if (this.initialSliderWidth < 0) { this.initialSliderWidth = 0; }
    },
    calculateSlideButtonInitialPosition() {
      const [{ x: sliderPosition }] = this.slider.getClientRects();
      this.initialSlideButtonPosition = sliderPosition;
    },
    continueSlide(event: MouseEvent | TouchEvent) {
      if (!this.isStarted) { return; }
      this.currentMouseX = this.getMouseXPositionFromEvent(event);
      const delta = this.currentMouseX - this.initialMouseX;
      this.updateSlider();
      this.updateSlideButton(delta);
      if (this.hasSliderReachedEndPoint()) { this.endSlide(); }
    },
    endSlide() {
      if (!this.isStarted) { return; }
      this.isStarted = false;
      if (this.hasSliderReachedEndPoint()) {
        const overlayWidth = (this.buttonCenterPoint - gapWidth);
        this.overlayStyle.width = `${overlayWidth}px`;
        this.actionConfirmed();
        return;
      }
      this.sliderClass = '';
      this.overlayStyle.width = '0';
      this.slideButtonStyle.left = '0';
    },
    getMouseXPositionFromEvent(event: MouseEvent | TouchEvent) {
      this.buttonCenterPoint = (this.slideButton.offsetLeft + (this.slideButton.offsetWidth / 2));
      if (isTouchEvent(event)) {
        const touch = event.touches.item(0);
        const result = touch?.pageX || 0;
        return result;
      }
      const result = event.clientX;
      return result;
    },
    updateSlider() {
      const sliderWidth = this.getSliderWidth();
      let newWidth = (this.buttonCenterPoint - gapWidth);
      if (newWidth > sliderWidth) { newWidth = sliderWidth; }
      this.overlayStyle.width = `${newWidth}px`;
    },
    getSliderWidth() {
      const [{ width: sliderWidth }] = this.slider.getClientRects();
      return sliderWidth;
    },
    updateSlideButton(delta: number) {
      if (delta < 0) { return; }
      this.slideButtonStyle.left = `${delta}px`;
      if (!this.hasSliderReachedEndPoint()) { return; }
      const buttonLeftPosition = (this.getSliderWidth() - this.getButtonWidth());
      this.slideButtonStyle.left = `${buttonLeftPosition}px`;
    },
    getButtonWidth() {
      if (!this.slideButton) { return; }
      const [{ width }] = this.slideButton.getClientRects();
      return width;
    },
    hasSliderReachedEndPoint() {
      if (!this.slideButton) { return; }
      const [{ right }] = this.slideButton.getClientRects();
      const result = (right >= this.endPoint);
      return result;
    },
    actionConfirmed() {
      if (this.isCompleted) { return; }
      this.isCompleted = true;
      this.$emit('actionConfirmed');
    },
  },
  setup() {
    const slideButton = ref();
    const slider = ref();
    const initialMouseX = ref(0);
    const currentMouseX = ref(0);
    const isStarted = ref(false);
    const isCompleted = ref(false);
    const endPoint = ref(500);
    const initialSliderWidth = ref(0);
    const initialSlideButtonPosition = ref(0);
    const buttonCenterPoint = ref(0);
    const sliderClass = ref('');
    const overlayStyle = ref({ width: '0' });
    const slideButtonStyle = ref({ left: '0' });
    return {
      slideButton,
      slider,
      initialMouseX,
      currentMouseX,
      isStarted,
      isCompleted,
      endPoint,
      initialSliderWidth,
      initialSlideButtonPosition,
      buttonCenterPoint,
      sliderClass,
      overlayStyle,
      slideButtonStyle,
    };
  },
  mounted() {
    document.addEventListener('mousemove', this.continueSlide);
    document.addEventListener('mouseup', this.endSlide);
  },
  unmounted() {
    document.removeEventListener('mousemove', this.continueSlide);
    document.removeEventListener('mouseup', this.endSlide);
  },
});

export default SlideButton;

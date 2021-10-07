import { ChevronsRightIcon } from '@lana/b2c-mapp-ui-assets';

const gapWidth = -25;

const components = {
  ChevronsRightIcon,
};

const props = {
  initialInstructionLabel: {
    type: String,
    default: 'Desliza para confirmar',
  },
  completedLabel: {
    type: String,
    default: '',
  },
};

const data = function () {
  return {
    initialMouseX: 0,
    currentMouseX: 0,
    isStarted: false,
    isCompleted: false,
    endPoint: 500,
    initialSliderWidth: 0,
    initialSlideButtonPosition: 0,
    buttonCenterPoint: 0,
    overlayStyle: {
      width: '0',
    },
    slideButtonStyle: {
      left: '0',
    },
  };
};

const emits = ['actionConfirmed'];

const computed = {
  instructionLabel() {
    if (this.isCompleted) { return this.completedLabel; }
    return this.initialInstructionLabel;
  },
};

const methods = {
  startSlide(event) {
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
    const [{ right: endingPoint }] = this.$refs.slider.getClientRects();
    return endingPoint;
  },
  calculateSliderInitialWidth() {
    const [{ x: leftSliderPosition }] = this.$refs.slider.getClientRects();
    this.initialSliderWidth = this.initialMouseX - leftSliderPosition;
    if (this.initialSliderWidth < 0) { this.initialSliderWidth = 0; }
  },
  calculateSlideButtonInitialPosition() {
    const [{ x: sliderPosition }] = this.$refs.slider.getClientRects();
    this.initialSlideButtonPosition = sliderPosition;
  },
  continueSlide(event) {
    if (!this.isStarted) { return; }
    this.currentMouseX = this.getMouseXPositionFromEvent(event);
    const delta = this.currentMouseX - this.initialMouseX;
    this.updateSlider();
    this.updateSlideButton(delta);
    if (this.hasSliderReachedEndPoint()) { this.endSlide(); }
  },
  endSlide() {
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
  getMouseXPositionFromEvent(event) {
    this.buttonCenterPoint = (this.$refs.slideButton.offsetLeft + (this.$refs.slideButton.offsetWidth / 2));
    const result = (event.clientX || event.touches[0].pageX);
    return result;
  },
  updateSlider() {
    const sliderWidth = this.getSliderWidth();
    let newWidth = (this.buttonCenterPoint - gapWidth);
    if (newWidth > sliderWidth) { newWidth = sliderWidth; }
    this.overlayStyle.width = `${newWidth}px`;
  },
  getSliderWidth() {
    const [{ width: sliderWidth }] = this.$refs.slider.getClientRects();
    return sliderWidth;
  },
  updateSlideButton(delta) {
    if (delta < 0) { return; }
    this.slideButtonStyle.left = `${delta}px`;
    if (!this.hasSliderReachedEndPoint()) { return; }
    const buttonLeftPosition = (this.getSliderWidth() - this.getButtonWidth());
    this.slideButtonStyle.left = `${buttonLeftPosition}px`;
  },
  getButtonWidth() {
    if (!this.$refs.slideButton) { return; }
    const [{ width }] = this.$refs.slideButton.getClientRects();
    return width;
  },
  hasSliderReachedEndPoint() {
    if (!this.$refs.slideButton) { return; }
    const [{ right }] = this.$refs.slideButton.getClientRects();
    const result = (right >= this.endPoint);
    return result;
  },
  actionConfirmed() {
    if (this.isCompleted) { return; }
    this.isCompleted = true;
    this.$emit('actionConfirmed');
  },
};

const mounted = function () {
  document.addEventListener('mousemove', this.continueSlide);
  document.addEventListener('mouseup', this.endSlide);
};

const unmounted = function () {
  document.removeEventListener('mousemove', this.continueSlide);
  document.removeEventListener('mouseup', this.endSlide);
};

const WrappedButton = {
  components,
  props,
  emits,
  data,
  computed,
  methods,
  mounted,
  unmounted,
};

export default WrappedButton;

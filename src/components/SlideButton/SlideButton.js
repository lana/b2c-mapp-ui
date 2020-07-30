import { ChevronsRightIcon } from '@lana/b2c-mapp-ui-assets';

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
    default: 'Confirmado',
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
    overlayStyle: {
      width: '0px',
    },
    slideButtonStyle: {
      left: '0px',
    },
  };
};

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
    this.updateSlider(0);
    this.isStarted = true;
  },
  getEndingPoint() {
    const [{ right: endingPoint }] = this.$refs.slider.getClientRects();
    return endingPoint;
  },
  calculateSliderInitialWidth() {
    const [{ x: leftSliderPosition }] = this.$refs.slider.getClientRects();
    this.initialSliderWidth = this.initialMouseX - leftSliderPosition;
    if (this.initialSliderWidth < 0) {
      this.initialSliderWidth = 0;
    }
  },
  calculateSlideButtonInitialPosition() {
    const [{ x: sliderPosition }] = this.$refs.slider.getClientRects();
    this.initialSlideButtonPosition = sliderPosition;
  },
  continueSlide(event) {
    if (!this.isStarted) { return; }
    this.currentMouseX = this.getMouseXPositionFromEvent(event);
    const delta = this.currentMouseX - this.initialMouseX;
    this.updateSlider(delta);
    this.updateSlideButton(delta);
    if (this.sliderReachedEndPoint()) { this.endSlide(); }
  },
  endSlide() {
    this.isStarted = false;
    if (this.sliderReachedEndPoint()) {
      const [{ width: overlayWidth }] = this.$refs.slider.getClientRects();
      this.overlayStyle.width = `${overlayWidth}px`;
      this.actionConfirmed();
      return;
    }
    this.sliderClass = '';
    this.overlayStyle.width = '0px';
    this.slideButtonStyle.left = '0px';
  },
  getMouseXPositionFromEvent(event) {
    return event.clientX || event.touches[0].pageX;
  },
  updateSlider(delta) {
    const sliderWidth = this.getSliderWidth();
    let newWidth = this.initialSliderWidth + delta;
    if (newWidth > sliderWidth) {
      newWidth = sliderWidth;
    }
    this.overlayStyle.width = `${newWidth}px`;
  },
  getSliderWidth() {
    const [{ width: sliderWidth }] = this.$refs.slider.getClientRects();
    return sliderWidth;
  },
  updateSlideButton(delta) {
    if (delta < 0) { return; }
    this.slideButtonStyle.left = `${delta}px`;
    if (this.sliderReachedEndPoint()) {
      const buttonLeftPos = this.getSliderWidth() - this.getButtonWidth();
      this.slideButtonStyle.left = `${buttonLeftPos}px`;
    }
  },
  getButtonWidth() {
    const [{ width }] = this.$refs.slideButton.getClientRects();
    return width;
  },
  sliderReachedEndPoint() {
    const [{ right }] = this.$refs.slideButton.getClientRects();
    return right >= this.endPoint;
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

const destroyed = function () {
  document.removeEventListener('mousemove', this.continueSlide);
  document.removeEventListener('mouseup', this.endSlide);
};

const WrappedButton = {
  components,
  props,
  data,
  computed,
  methods,
  mounted,
  destroyed,
};

export default WrappedButton;

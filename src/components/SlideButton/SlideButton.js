import { ChevronsRight } from '@lana/b2c-mapp-ui-assets';

const components = {
  ChevronsRight,
};

const props = {
  initialInstructionText: {
    type: String,
    default: 'Desliza para confirmar',
  },
  completedText: {
    type: String,
    default: 'Confirmado',
  },
};

const methods = {
  startSlide(event) {
    if (this.completed) { return; }
    this.initialMouseX = this.getMouseXPosFromEvent(event);
    this.endPoint = this.getEndingPoint();
    this.calculateSliderInitialWidth();
    this.calculateSlideButtonInitialPosition();
    this.updateSlideButton(0);
    this.updateSlider(0);
    this.startDrag = true;
    this.sliderClass = 'started';
  },
  getEndingPoint() {
    const clientRects = this.$refs.slider.getClientRects()[0];
    return clientRects.right;
  },
  calculateSliderInitialWidth() {
    const sliderLeftPos = this.$refs.slider.getClientRects()[0].x;
    this.initialSliderWidth = this.initialMouseX - sliderLeftPos;
    if (this.initialSliderWidth < 0) {
      this.initialSliderWidth = 0;
    }
  },
  calculateSlideButtonInitialPosition() {
    this.initialSlideButtonPosition = this.$refs.slider.getClientRects()[0].x;
  },
  continueSlide(event) {
    if (!this.startDrag) { return; }
    this.currentMouseX = this.getMouseXPosFromEvent(event);
    const delta = this.currentMouseX - this.initialMouseX;
    this.updateSlider(delta);
    this.updateSlideButton(delta);
    if (this.sliderReachedEndPoint()) { this.endSlide(); }
  },
  endSlide() {
    this.startDrag = false;
    if (this.sliderReachedEndPoint()) {
      this.sliderClass = 'completed';
      this.overlayStyle.width = `${this.$refs.slider.getClientRects()[0].width}px`;
      this.actionConfirmed();
    } else {
      this.sliderClass = '';
      this.overlayStyle.width = '0px';
      this.slideButtonStyle.left = '0px';
    }
  },
  getMouseXPosFromEvent(event) {
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
    return this.$refs.slider.getClientRects()[0].width;
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
    const slideButtonRect = this.$refs.slideButton.getClientRects()[0];
    return slideButtonRect.width;
  },
  sliderReachedEndPoint() {
    const slideButtonRect = this.$refs.slideButton.getClientRects()[0];
    return slideButtonRect.right >= this.endPoint;
  },
  actionConfirmed() {
    if (!this.completed) {
      this.completed = true;
      this.instructionText = this.completedText;
      this.$emit('actionConfirmed');
    }
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

const data = function () {
  return {
    initialMouseX: 0,
    currentMouseX: 0,
    startDrag: false,
    endPoint: 500,
    initialSliderWidth: 0,
    initialSlideButtonPosition: 0,
    instructionText: this.initialInstructionText,
    overlayStyle: {
      width: '0px',
    },
    slideButtonStyle: {
      left: '0px',
    },
    sliderClass: '',
    completed: false,
  };
};

const WrappedButton = {
  components,
  props,
  methods,
  mounted,
  destroyed,
  data,
};

export default WrappedButton;

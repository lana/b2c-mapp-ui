const name = 'SignaturePad';

const props = {
  modelValue: {
    type: [String, null],
    required: true,
  },
};

const data = function () {
  return {
    context: null,
    isStarted: false,
    previousX: 0,
    previousY: 0,
    image: null,
    canvasWidth: 300,
    canvasHeight: 200,
  };
};

const methods = {
  getMouseXPositionFromEvent(event) {
    const { offsetX, touches = [{ clientX: this.$refs.canvasContainer.offsetLeft }] } = event;
    const result = (offsetX || (touches[0].clientX - this.$refs.canvasContainer.offsetLeft));
    return result;
  },
  getMouseYPositionFromEvent(event) {
    const { offsetY, touches = [{ clientY: this.$refs.canvasContainer.offsetTop }] } = event;
    const result = (offsetY || (touches[0].clientY - this.$refs.canvasContainer.offsetTop));
    return result;
  },
  startDraw(event) {
    this.isStarted = true;
    this.previousX = this.getMouseXPositionFromEvent(event);
    this.previousY = this.getMouseYPositionFromEvent(event);
  },
  continueDraw(event) {
    if (!this.isStarted) { return; }
    const currentX = this.getMouseXPositionFromEvent(event);
    const currentY = this.getMouseYPositionFromEvent(event);
    const initial = { x: this.previousX, y: this.previousY };
    const destination = { x: currentX, y: currentY };
    this.draw(initial, destination);
    this.previousX = currentX;
    this.previousY = currentY;
  },
  endDraw() {
    this.isStarted = false;
  },
  draw({ x: initialX, y: initialY }, { x: destinationX, y: destinationY }) {
    this.context.beginPath();
    this.context.moveTo(initialX, initialY);
    this.context.lineTo(destinationX, destinationY);
    this.context.closePath();
    this.context.stroke();

    this.image = this.$refs.signatureCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  },
};

const watch = {
  modelValue() {
    if (this.modelValue) { return; }
    this.context.clearRect(0, 0, this.$refs.signatureCanvas.width, this.$refs.signatureCanvas.height);
  },
  image() {
    this.$emit('update:modelValue', this.image);
  },
};

const mounted = function () {
  this.canvasWidth = this.$refs.signatureCanvas.clientWidth;
  this.canvasHeight = this.$refs.signatureCanvas.clientHeight;
  this.context = this.$refs.signatureCanvas.getContext('2d');
  this.context.strokeStyle = 'black';
  this.context.lineWidth = 2;
  document.addEventListener('mousemove', this.continueSlide);
  document.addEventListener('mouseup', this.endSlide);
};

const unmounted = function () {
  document.removeEventListener('mousemove', this.continueSlide);
  document.removeEventListener('mouseup', this.endSlide);
};

const SignaturePad = {
  name,
  props,
  data,
  methods,
  watch,
  mounted,
  unmounted,
};

export default SignaturePad;

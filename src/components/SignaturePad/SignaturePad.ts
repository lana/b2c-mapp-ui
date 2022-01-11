import { defineComponent, ref, watchEffect } from 'vue';

interface Coordinates {
  x: number,
  y: number,
}

const isTouchEvent = (event: MouseEvent | TouchEvent): event is TouchEvent => (event as TouchEvent).touches !== undefined;

const SignaturePad = defineComponent({
  name: 'SignaturePad',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    getMouseXPositionFromEvent(event: MouseEvent | TouchEvent) {
      if (isTouchEvent(event)) {
        const touch = event.touches.item(0);
        const result = ((touch?.clientX || 0) - this.canvasContainer.offsetLeft);
        return result;
      }
      const result = event.offsetX;
      return result;
    },
    getMouseYPositionFromEvent(event: MouseEvent | TouchEvent) {
      if (isTouchEvent(event)) {
        const touch = event.touches.item(0);
        const result = ((touch?.clientY || 0) - this.canvasContainer.offsetLeft);
        return result;
      }
      const result = event.offsetY;
      return result;
    },
    startDraw(event: MouseEvent | TouchEvent) {
      this.isStarted = true;
      this.previousX = this.getMouseXPositionFromEvent(event);
      this.previousY = this.getMouseYPositionFromEvent(event);
    },
    continueDraw(event: MouseEvent | TouchEvent) {
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
    draw({ x: initialX, y: initialY }: Coordinates, { x: destinationX, y: destinationY }: Coordinates) {
      if (!this.context || !this.signatureCanvas) { return; }
      this.context.beginPath();
      this.context.moveTo(initialX, initialY);
      this.context.lineTo(destinationX, destinationY);
      this.context.closePath();
      this.context.stroke();

      this.image = this.signatureCanvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    },
  },
  watch: {
    modelValue() {
      if (this.modelValue || !this.context || !this.signatureCanvas) { return; }
      this.context.clearRect(0, 0, this.signatureCanvas.width, this.signatureCanvas.height);
    },
    image() {
      this.$emit('update:modelValue', this.image);
    },
  },
  setup() {
    const signatureCanvas = ref();
    const canvasContainer = ref();
    const context = ref();
    const isStarted = ref(false);
    const previousX = ref(0);
    const previousY = ref(0);
    const image = ref('');
    const canvasWidth = ref(300);
    const canvasHeight = ref(200);

    watchEffect(() => {
      if (!signatureCanvas.value) { return; }
      canvasWidth.value = signatureCanvas.value.clientWidth;
      canvasHeight.value = signatureCanvas.value.clientHeight;
      context.value = signatureCanvas.value.getContext('2d');
      context.value.strokeStyle = 'black';
      context.value.lineWidth = 2;
    },
    {
      flush: 'post',
    });

    return {
      signatureCanvas,
      canvasContainer,
      context,
      isStarted,
      previousX,
      previousY,
      image,
      canvasWidth,
      canvasHeight,
    };
  },
  mounted() {
    document.addEventListener('mousemove', this.continueDraw);
    document.addEventListener('mouseup', this.endDraw);
  },
  unmounted() {
    document.removeEventListener('mousemove', this.continueDraw);
    document.removeEventListener('mouseup', this.endDraw);
  },
});

export default SignaturePad;

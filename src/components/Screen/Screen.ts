import { defineComponent } from 'vue';

interface ScreenKeyboardEvent {
  screenHeight: number,
  viewport: {
    width: number,
    height: number,
  },
  lastClick: {
    x: number,
    y: number,
  },
}

const Screen = defineComponent({
  name: 'Screen',
  emits: ['keyboardFocus', 'keyboardBlur'],
  data() {
    return {
      lastClick: {
        x: 0,
        y: 0,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  },
  methods: {
    recordClick({ clientX, clientY }: MouseEvent) {
      this.lastClick.x = clientX;
      this.lastClick.y = clientY;
    },
    onWindowResize({ target }: UIEvent) {
      const { innerHeight: screenHeight } = target as Window;
      const payload: ScreenKeyboardEvent = {
        screenHeight,
        viewport: this.viewport,
        lastClick: this.lastClick,
      };
      if (this.viewport.height > screenHeight) {
        this.$emit('keyboardFocus', payload);
        return;
      }
      this.$emit('keyboardBlur', payload);
    },
  },
  mounted() {
    window.addEventListener('resize', this.onWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  },
});

export type { ScreenKeyboardEvent };

export default Screen;

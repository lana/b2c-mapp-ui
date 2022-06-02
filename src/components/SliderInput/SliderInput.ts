import { defineComponent, ref } from 'vue';
import Slider from '@vueform/slider';

const availableColors = ['blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'];

const SliderInput = defineComponent({
  name: 'SliderInput',
  components: {
    Slider,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'slider-input',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    step: {
      type: Number,
      default: null,
    },
    titleLeft: {
      type: String,
      default: '',
    },
    descriptionLeft: {
      type: String,
      default: '',
    },
    titleRight: {
      type: String,
      default: '',
    },
    descriptionRight: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'blue',
      validator: (value: string) => (!value || availableColors.includes(value)),
    },
  },
  emits: ['update:modelValue'],
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.inputValue);
    },
  },
  watch: {
    inputValue() {
      this.emitUpdateModelValueEvent();
    },
    modelValue() {
      this.inputValue = this.modelValue;
    },
  },
  setup(props) {
    const inputValue = ref(props.modelValue);
    return {
      inputValue,
    };
  },
});

export default SliderInput;

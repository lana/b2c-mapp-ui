import { defineComponent } from 'vue';

import Button from '../Button/Button.vue';

const ToggleSwitch = defineComponent({
  name: 'ToggleSwitch',
  components: {
    Button,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'toggle',
    },
    modelValue: Boolean,
    disabled: Boolean,
    buttons: Boolean,
    trueButtonLabel: {
      type: String,
      default: '',
    },
    falseButtonLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isChecked: this.modelValue,
    };
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.isChecked);
    },
    uncheck() {
      this.isChecked = false;
    },
    check() {
      this.isChecked = true;
    },
  },
  watch: {
    isChecked() {
      this.emitUpdateModelValueEvent();
    },
    modelValue() {
      this.isChecked = this.modelValue;
    },
  },
});

export default ToggleSwitch;

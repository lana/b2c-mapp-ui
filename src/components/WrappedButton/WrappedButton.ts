import { defineComponent } from 'vue';

import Button from '../Button/Button.vue';

const availableTypes = [
  'secondary',
];

const WrappedButton = defineComponent({
  name: 'WrappedButton',
  components: {
    Button,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'button-wrapped',
    },
    type: {
      type: String,
      default: '',
      validator(value: string) { return (!value || availableTypes.includes(value)); },
    },
    href: {
      type: String,
      default: '',
    },
    loading: Boolean,
    loadingText: {
      type: String,
      default: 'Cargando...',
    },
    disabled: Boolean,
    debounce: {
      type: Boolean,
      default: false,
    },
    debounceDelay: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  methods: {
    onClick(event: Event) {
      this.$emit('click', event);
    },
  },
});

export {
  availableTypes,
};

export default WrappedButton;

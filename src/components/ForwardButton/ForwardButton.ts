import { ChevronRightIcon } from '@lana/b2c-mapp-ui-assets';
import { defineComponent } from 'vue';

import Button from '../Button/Button.vue';

const ForwardButton = defineComponent({
  name: 'ForwardButton',
  components: {
    Button,
    ChevronRightIcon,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'forward',
    },
    disabled: Boolean,
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    debounce: {
      type: Boolean,
      default: false,
    },
    debounceDelay: {
      type: Number,
      default: 0,
    },
  },
  emits: ['click'],
  methods: {
    onClick(event: Event) {
      this.$emit('click', event);
    },
  },
});

export default ForwardButton;

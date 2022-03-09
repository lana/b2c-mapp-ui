import { defineComponent, ref } from 'vue';
import { MopIcon } from '@lana/b2c-mapp-ui-assets';
import { debounce } from 'lodash-es';

const debounceSettings = { leading: true, trailing: false };

const availableTypes = [ // TODO: Consider removing this list entirely (in favor of new `secondary` prop) if we don't plan on adding any other types in the near future
  'secondary',
];

const Button = defineComponent({
  name: 'UiButton',
  components: {
    MopIcon,
  },
  props: {
    type: {
      type: String,
      default: '',
      validator(value: string) { return (!value || availableTypes.includes(value)); },
    },
    loadingText: {
      type: String,
      default: 'Cargando...',
    },
    href: {
      type: String,
      default: undefined,
    },
    link: Boolean,
    loading: Boolean,
    dataTestId: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    dropShadow: Boolean,
    id: {
      type: String,
      default: '',
    },
    debounce: {
      type: Boolean,
      default: false,
    },
    debounceDelay: {
      type: Number,
      default: 400,
    },
  },
  emits: ['click'],
  computed: {
    componentType() {
      const result = (this.isLinkButton) ? 'a' : 'button';
      return result;
    },
    buttonTypeAttribute() {
      const result = (this.isLinkButton) ? '' : 'button';
      return result;
    },
    baseDataTestIdToUse() {
      const defaultDataTestId = (this.href) ? 'button-link' : 'button';
      const result = (this.dataTestId || defaultDataTestId);
      return result;
    },
    dataTestIdToUse() {
      const result = (this.isLinkButton) ? this.baseDataTestIdToUse : `${this.baseDataTestIdToUse}-button`;
      return result;
    },
    isLinkButton() {
      const result = (!!this.href || this.link);
      return result;
    },
    clickMethod() {
      const result = (this.debounce) ? debounce(this.onClick, this.debounceDelay, debounceSettings) : this.onClick;
      return result;
    },
  },
  methods: {
    setIsPressed(isPressed: boolean) {
      this.isPressed = isPressed;
    },
    onClick(event: Event) {
      if (this.disabled || this.loading) { return; }
      if (this.isPressed) { this.isPressed = false; }
      this.$emit('click', event);
    },
  },
  setup() {
    const isPressed = ref(false);
    return {
      isPressed,
    };
  },
});

export {
  availableTypes,
};

export default Button;

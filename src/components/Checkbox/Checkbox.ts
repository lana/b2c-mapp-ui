import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from '@lana/b2c-mapp-ui-assets';
import { defineComponent, getCurrentInstance, ref } from 'vue';

const Checkbox = defineComponent({
  name: 'Checkbox',
  components: {
    CheckboxCheckedIcon,
    CheckboxUncheckedIcon,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'checkbox',
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: Boolean,
    id: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    hasError: Boolean,
  },
  emits: ['update:modelValue'],
  setup(props) {
    const isChecked = ref(props.modelValue);
    const fallbackId = `checkbox-${getCurrentInstance()?.uid}`;
    return {
      isChecked,
      fallbackId,
    };
  },
  computed: {
    idToUse() {
      const result = (this.id || this.fallbackId);
      return result;
    },
  },
  methods: {
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.isChecked);
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

export default Checkbox;

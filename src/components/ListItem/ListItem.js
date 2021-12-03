import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.vue';
import Checkbox from '../Checkbox/Checkbox.vue';

const components = {
  Checkbox,
  Heading,
  TextParagraph,
  ToggleSwitch,
};

const props = {
  dataTestId: {
    type: String,
    default: 'list-item',
  },
  title: String,
  description: String,
  modelValue: Boolean,
  transparent: Boolean,
  linkTitle: String,
  hasToggle: Boolean,
  hasCheckbox: Boolean,
  disabled: Boolean,
  rightLabel: String,
};

const emits = ['update:modelValue', 'linkClick'];

const data = function () {
  return {
    isChecked: this.modelValue,
  };
};

const methods = {
  emitUpdateModelValueEvent() {
    this.$emit('update:modelValue', this.isChecked);
  },
  onLinkClick(event) {
    if (this.disabled) { return; }
    this.$emit('linkClick', event);
  },
};

const watch = {
  isChecked() {
    this.emitUpdateModelValueEvent();
  },
  modelValue() {
    this.isChecked = this.modelValue;
  },
};

const computed = {
  isRightLabelShowing() {
    const result = (!this.hasToggle && this.rightLabel);
    return result;
  },
};

const name = 'ListItem';

const ListItem = {
  name,
  components,
  props,
  emits,
  data,
  methods,
  watch,
  computed,
};

export default ListItem;

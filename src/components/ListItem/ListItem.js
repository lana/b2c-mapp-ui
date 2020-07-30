import Heading from '../Heading/Heading.vue';
import TextParagraph from '../TextParagraph/TextParagraph.vue';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.vue';

const components = {
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
  value: Boolean,
  transparent: Boolean,
  linkTitle: String,
  hasToggle: Boolean,
  disabled: Boolean,
  itemValue: String,
};

const data = function () {
  return {
    isChecked: this.value,
  };
};

const methods = {
  emitInputEvent() {
    this.$emit('input', this.isChecked);
  },
  onLinkClick(event) {
    if (this.disabled) { return; }
    this.$emit('linkClick', event);
  },
};

const watch = {
  isChecked() {
    this.emitInputEvent();
  },
  value() {
    this.isChecked = this.value;
  },
};

const ListItem = {
  components,
  props,
  data,
  methods,
  watch,
};

export default ListItem;

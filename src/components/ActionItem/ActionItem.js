import TextParagraph from '../TextParagraph/TextParagraph.vue';

const errorStatuses = [
  'rejected',
  'expired',
];

const components = {
  TextParagraph,
};

const props = {
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: '',
  },
  highlight: Boolean,
  dataTestId: {
    type: String,
    default: 'action-item',
  },
};

const computed = {
  hasErrorStatus() {
    if (!this.status) { return; }
    const result = errorStatuses.includes(this.status.toLowerCase());
    return result;
  },
  descriptionTextColor() {
    if (!this.hasErrorStatus) { return; }
    return 'red-500';
  },
};

const methods = {
  onClick(event) {
    this.$emit('click', event);
  },
};

const ActionItem = {
  components,
  computed,
  props,
  methods,
};

export default ActionItem;

import Heading from '../Heading/Heading.vue';

const components = {
  Heading,
};

const props = {
  dataTestId: {
    type: String,
    default: 'copyable-list',
  },
  title: String,
};

const CopyableList = {
  components,
  props,
};

export default CopyableList;

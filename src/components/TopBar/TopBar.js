import Heading from '../Heading/Heading.vue';

const components = {
  Heading,
};

const props = {
  dataTestId: {
    type: String,
    default: 'topbar-header',
  },
  title: {
    type: String,
    default: '',
  },
};

const TopBar = {
  components,
  props,
};

export default TopBar;

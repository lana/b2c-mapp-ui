import { h } from 'vue';
import * as AllIcons from '@lana/b2c-mapp-ui-assets';

import * as AllComponents from '../library';

const RenderString = {
  props: {
    string: {
      required: true,
      type: String,
    },
    fragment: {
      type: Boolean,
      default: false,
    },
    customProps: Object,
  },
  render() {
    const render = {
      components: {
        ...AllIcons,
        ...AllComponents,
      },
      props: Object.keys(this.customProps || {}),
      template: this.string,
    };
    return h(render, { ...this.customProps });
  },
};

export default RenderString;

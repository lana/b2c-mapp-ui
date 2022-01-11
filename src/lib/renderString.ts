import { defineComponent, h } from 'vue';
import * as AllIcons from '@lana/b2c-mapp-ui-assets';

import * as AllComponents from '../library';

const RenderString = defineComponent({
  props: {
    string: {
      required: true,
      type: String,
    },
    fragment: {
      type: Boolean,
      default: false,
    },
    customProps: {
      type: Object,
      default: () => ({}),
    },
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
});

export default RenderString;

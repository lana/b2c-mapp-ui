import frag from 'vue-frag';
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
  render(createElement) {
    const render = {
      components: {
        ...AllIcons,
        ...AllComponents,
      },
      directives: {
        frag,
      },
      props: Object.keys(this.customProps || {}),
      template: `<div${(this.fragment) ? ' v-frag' : ''}>${this.string}</div>`,
    };
    return createElement(render, { props: this.customProps });
  },
};

export default RenderString;

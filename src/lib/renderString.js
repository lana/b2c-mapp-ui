import * as AllIcons from '@lana/b2c-mapp-ui-assets/dist/index';

import * as AllComponents from '../library';

const RenderString = {
  props: {
    string: {
      required: true,
      type: String,
    },
  },
  render(createElement) {
    const render = {
      components: {
        ...AllIcons,
        ...AllComponents,
      },
      template: `<div>${this.string}</div>`,
    };
    return createElement(render);
  },
};

export default RenderString;

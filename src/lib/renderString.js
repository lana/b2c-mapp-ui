import * as AllIcons from '@lana/b2c-mapp-ui-assets/dist/index';

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
      },
      template: `<div>${this.string}</div>`,
    };
    return createElement(render);
  },
};

export default RenderString;

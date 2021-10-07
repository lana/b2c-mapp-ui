import TopBar from './TopBar.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>TopBar:</strong>&nbsp;A custom native AppBar replacement.', '<p style="margin-top: 10px;">It only renders the title, all actions should be placed by the Android native bridge.</p>');

const TopBarStories = {
  component: TopBar,
  title: 'Components/TopBar',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Example custom title',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { control: 'text', name: 'Title' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    TopBar,
  },
  template: '<TopBar :title="title"/>',
});
defaultExample.parameters = {
  docs: {
    source: {
      code: '<TopBar :title="title"/>',
    },
  },
};

export {
  defaultExample,
};

export default TopBarStories;

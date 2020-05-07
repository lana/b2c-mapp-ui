import { withKnobs, text } from '@storybook/addon-knobs';

import TopBar from './TopBar.vue';

const TopBarStories = {
  component: TopBar,
  title: 'TopBar',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    TopBar,
  },
  props: {
    title: {
      default: text('Title', 'Example custom title'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>TopBar:</strong>&nbsp;A custom native AppBar replacement.</h2>
      <p style="margin-top: 10px;">It only renders the title, all actions should be placed by the Android native bridge.</p>
      <hr>
      <div style="margin-top: 20px;">
        <TopBar :title="title"/>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default TopBarStories;

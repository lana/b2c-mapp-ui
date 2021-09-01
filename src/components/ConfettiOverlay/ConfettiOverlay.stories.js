import ConfettiOverlay from './ConfettiOverlay.vue';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper.vue';
import Screen from '../Screen/Screen.vue';
import Heading from '../Heading/Heading.vue';
import Button from '../Button/Button.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>ConfettiOverlay:</strong>');

const ConfettiStories = {
  component: ConfettiOverlay,
  title: 'Components/ConfettiOverlay',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    particles: 50,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    particles: { name: 'Count of Particles', control: 'number' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ConfettiOverlay,
    Button,
    Heading,
    Screen,
    ScrollWrapper,
  },
  data() {
    return {
      isConfettiShowing: true,
    };
  },
  methods: {
    async restartConfetti() {
      this.isConfettiShowing = false;
      await this.$nextTick();
      this.isConfettiShowing = true;
    },
  },
  template: `
    <Screen>
      <ScrollWrapper>
        <ConfettiOverlay v-if="isConfettiShowing" :particles="particles"/>
        <Button style="margin-bottom: 10px;" @click="restartConfetti">
          <p>Restart Confetti</p>
        </Button>
        <Heading style="text-align: center;"
                size="xxxl"
                weight="semibold"
        >
          DEAL WITH IT
        </Heading>
      </ScrollWrapper>
      <img style="margin: auto; width: 200px; height: auto;" src="https://img.pngio.com/dancing-gifs-get-the-best-gif-on-giphy-dancing-people-png-gif-350_497.gif">
    </Screen>
   `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<Screen>
  <ScrollWrapper>
    <ConfettiOverlay v-if="isConfettiShowing" :particles="particles"/>
  </ScrollWrapper>
</Screen>`,
    },
  },
};

export {
  defaultExample,
};

export default ConfettiStories;

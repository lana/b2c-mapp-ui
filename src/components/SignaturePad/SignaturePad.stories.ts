import type { Meta, StoryFn } from '@storybook/vue3';

import SignaturePad from './SignaturePad.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>SignaturePad:</strong>&nbsp;Canvas where user could draw his signature.');

const SignaturePadStories = {
  component: SignaturePad,
  title: 'Components/SignaturePad',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
  },
} as Meta<typeof SignaturePad>;

const defaultExample: StoryFn<typeof SignaturePad> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    SignaturePad,
  },
  data() {
    return {
      image: null,
    };
  },
  template: `
    <SignaturePad v-model="image" style="margin: 16px; height: 300px"/>
    Bound value: <img :src="image" style="max-height: 100px"/>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: '<SignaturePad v-model="image"/>',
    },
  },
};

export {
  defaultExample,
};

export default SignaturePadStories;

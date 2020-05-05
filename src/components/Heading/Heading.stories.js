import { withKnobs, select } from '@storybook/addon-knobs';

import { availableSizes, availableWeights } from './Heading';
import Heading from './Heading.vue';
import { capitalizeFirstLetter } from '../../lib/textHelper';

const HeadingStories = {
  component: Heading,
  title: 'Heading',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Heading,
  },
  props: {
    size: {
      default: select('Size', [...availableSizes, ''], 'xl'),
    },
    weight: {
      default: select('Weight', [...availableWeights, ''], 'normal'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Heading:</strong>&nbsp;A text view that represents a heading/title.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <Heading :size="size"
                   :weight="weight"
          >
            Example Heading
          </Heading>
        </div>
      </div>
    </div>
  `,
});

const weights = () => ({
  components: {
    Heading,
  },
  data() {
    return {
      availableWeights,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Heading:</strong>&nbsp;Available Weights</h2>
      <hr>
      <Heading>Default weight example</Heading>
      <Heading v-for="(weight, index) in availableWeights"
                     :key="index"
                     :weight="weight"
      >
        {{ capitalizeFirstLetter(weight) }} weight example
      </Heading>
    </div>
  `,
});

const sizes = () => ({
  components: {
    Heading,
  },
  data() {
    return {
      availableSizes,
    };
  },
  methods: {
    capitalizeFirstLetter,
  },
  template: `
    <div style="margin: 50px">
      <h2><strong>Heading:</strong>&nbsp;Available Sizes</h2>
      <hr>
      <Heading>Default size example</Heading>
      <Heading v-for="(size, index) in availableSizes"
               :key="index"
               :size="size"
      >
        {{ capitalizeFirstLetter(size) }} size example
      </Heading>
    </div>
  `,
});

export {
  defaultExample,
  weights,
  sizes,
};

export default HeadingStories;

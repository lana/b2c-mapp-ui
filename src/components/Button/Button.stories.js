import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import Button from './Button.vue';
import { availableTypes } from './Button';
import { capitalizeFirstLetter } from '../../lib/textHelper';

const ButtonStories = {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    Button,
  },
  props: {
    type: {
      default: select('Type', [...availableTypes, ''], ''),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    loading: {
      default: boolean('Is Loading?', false),
    },
    dropShadow: {
      default: boolean('Has Drop Shadow?', false),
    },
    href: {
      default: text('href', ''),
    },
    contents: {
      default: text('Button Contents', 'Example Button'),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Button:</strong>&nbsp;A simple call to action button.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <div style="width: 500px">
          <Button :type="type"
                  :href="href"
                  :loading="loading"
                  :drop-shadow="dropShadow"
                  :disabled="disabled"
                  @click="onClick"
          >
            {{ contents }}
          </Button>
        </div>
      </div>
    </div>
  `,
});

const types = () => ({
  components: {
    Button,
  },
  data() {
    return {
      availableTypes,
    };
  },
  methods: {
    capitalizeFirstLetter,
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <div style="width: 500px; display: flex; flex-direction: column;">
          <Button @click="onClick('Default')">Default type example</Button>
          <br>
          <Button disabled @click="onClick('Disabled')">Disabled Example</Button>
          <br>
          <Button disabled href="http://lana.xyz" @click="onClick('Disabled Link')">Disabled Link Button Example</Button>
          <br>
          <Button loading @click="onClick('Loading')">Loading Example</Button>
          <br>
          <Button href="http://lana.xyz" type="secondary" @click="onClick('Link')">Link Button Example</Button>
          <br>
          <Button drop-shadow @click="onClick('Drop Shadow')">With Drop Shadow</Button>
          <br>
          <template v-for="(type, index) in availableTypes">
            <Button :key="index"
                    :type="type"
                    @click="onClick(type)"
            >
              {{ capitalizeFirstLetter(type) }} type example
            </Button>
            <br>
          </template>
        </div>
      </div>
    </div>
  `,
});

export {
  defaultExample,
  types,
};

export default ButtonStories;

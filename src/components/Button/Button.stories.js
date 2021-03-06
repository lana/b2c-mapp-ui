import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
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
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
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
    debounce: {
      default: boolean('Has debounce?', false),
    },
    debounceDelay: {
      default: number('Debounce Delay', 400, { step: 100 }),
    },
    href: {
      default: text('href', ''),
    },
    contents: {
      default: text('Button Contents', 'Example Button'),
    },
    loadingText: {
      default: text('Loading Text', 'Cargando...'),
    },
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Button:</strong>&nbsp;A simple call to action button.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <div style="margin: 20px;">
          <Button :type="type"
                  :href="href"
                  :loading="loading"
                  :loading-text="loadingText"
                  :drop-shadow="dropShadow"
                  :disabled="disabled"
                  :debounce="debounce"
                  :debounce-delay="debounceDelay"
                  @click="onClick"
          >
            {{ contents }}
          </Button>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const types = () => ({
  components: {
    Button,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
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
      <StorybookMobileDeviceSimulator :device="device">
        <div style="display: flex; flex-direction: column; margin-top: 10px; margin-left: 5px; margin-right: 5px;">
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
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
  types,
};

export default ButtonStories;

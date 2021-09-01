import { action } from '@storybook/addon-actions';

import Button from './Button.vue';
import { availableTypes } from './Button';
import { capitalizeFirstLetter } from '../../lib/textHelper';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>Button:</strong>&nbsp;A simple call to action button.');

const ButtonStories = {
  component: Button,
  title: 'Components/Button',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    type: '',
    disabled: false,
    loading: false,
    dropShadow: false,
    debounce: false,
    debounceDelay: 400,
    href: '',
    loadingText: 'Cargando...',
    default: 'Example Button',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    type: { name: 'Type', control: 'select', options: [...availableTypes, ''] },
    disabled: { name: 'Is Disabled?', control: 'boolean' },
    loading: { name: 'Is Loading?', control: 'boolean' },
    dropShadow: { name: 'Has Drop Shadow?', control: 'boolean' },
    debounce: { name: 'Has debounce?', control: 'boolean' },
    debounceDelay: { name: 'Debounce Delay', control: { type: 'number', step: 100 } },
    href: { name: 'href', control: 'text' },
    loadingText: { name: 'Loading Text', control: 'text' },
    default: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    Button,
    RenderString,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
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
      <RenderString :string="defaultSlot" />
    </Button>
  </div>
  `,
});

defaultExample.parameters = {
  docs: {
    source: {
      code: `
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
  <RenderString :string="defaultSlot" />
</Button>`,
    },
  },
};

const types = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
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
  `,
});

types.parameters = {
  docs: {
    source: {
      code: `
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
</div>`,
    },
  },
};

export {
  defaultExample,
  types,
};

export default ButtonStories;

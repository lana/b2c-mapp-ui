import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/vue3';
import * as AllIcons from '@lana/b2c-mapp-ui-assets';

import ContentRadioList from './ContentRadioList.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>ContentRadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.');

const ContentRadioListStories = {
  component: ContentRadioList,
  title: 'Components/ContentRadioList',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    id: 'exampleContentRadioList',
    dataTestId: 'content-radio-list',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    options: { control: 'object' },
    value: { control: 'text' },
    id: { control: 'text' },
    dataTestId: { control: 'text' },
    checkedIcon: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    uncheckedIcon: {
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
} as Meta<typeof ContentRadioList>;

const Template: StoryFn<typeof ContentRadioList> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    ContentRadioList,
    RenderString,
    ...AllIcons,
  },
  data() {
    return {
      selectedValue: args.value,
    };
  },
  methods: {
    onInput: action('Changed!'),
  },
  watch: {
    value() {
      this.selectedValue = this.value;
    },
  },
  template: `
    <div>
      <ContentRadioList v-model="selectedValue"
                        :id="id"
                        :data-test-id="dataTestId"
                        :options="options"
                        @input="onInput"
      >
        <template v-slot:media="{ title, icon, mediaClass }">
          <div class="media" :class="mediaClass" v-if="(icon || mediaClass)" style="width: 48px; height: 48px; border-radius: 14px; display: flex; justify-content: center; margin-right: 16px; border: 1px solid #EBECF0">
            <component :is="icon" width="24"/>
          </div>
        </template>
        <template v-if="checkedIcon" v-slot:checkedIcon>
          <RenderString :string="checkedIcon" />
        </template>
        <template v-if="uncheckedIcon" v-slot:uncheckedIcon>
          <RenderString :string="uncheckedIcon" />
        </template>
      </ContentRadioList>
      <hr>
      <div style="margin: 20px">
        Bound value: {{ selectedValue }}
      </div>
    </div>
  `,
});

const options = [
  {
    title: 'Option 1',
    metaText: 'Description 1',
    value: 'option1',
  },
  {
    title: 'Option 2',
    metaText: 'Description 2',
    value: 'option2',
  },
  {
    title: 'Option 3',
    metaText: 'Description 3',
    value: 'option3',
  },
];

const optionsValues = options.map(({ value }) => value);
const optionsLabels = options.reduce((accumulator, { value, title }) => ({ ...accumulator, [value]: title }), {});

const defaultExample = Template.bind({});
defaultExample.args = {
  options,
  value: 'option2',
};
defaultExample.argTypes = {
  value: { control: { type: 'select', labels: optionsLabels }, options: optionsValues },
  checkedIcon: { table: { disable: true } },
  uncheckedIcon: { table: { disable: true } },
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<ContentRadioList v-model="selectedValue"
                  :id="id"
                  :data-test-id="dataTestId"
                  :options="options"
                  @input="onInput"
/>
      `,
    },
  },
};

const withCustomCheckedUncheckedIcons = Template.bind({});
withCustomCheckedUncheckedIcons.args = {
  options,
  value: 'option1',
  checkedIcon: '<CheckBoldIcon :style="{ width: \'24px\' }"/>',
  uncheckedIcon: '<div />',
};
withCustomCheckedUncheckedIcons.argTypes = {
  value: { control: { type: 'select', labels: optionsLabels }, options: optionsValues },
};
withCustomCheckedUncheckedIcons.parameters = {
  docs: {
    source: {
      code: `
<ContentRadioList v-model="selectedValue"
                  :id="id"
                  :data-test-id="dataTestId"
                  :options="options"
                  @input="onInput"
>
  <template v-slot:checkedIcon>
    <CheckBoldIcon :style="{ width: '24px' }" />
  </template>
  <template v-slot:uncheckedIcon>
    <div />
  </template>
</ContentRadioList>
      `,
    },
  },
};

const optionsWithIcons = [
  {
    title: 'Option 1',
    metaText: 'Description 1',
    value: 'option1',
    icon: 'MopIcon',
  },
  {
    title: 'Option 2',
    metaText: 'Description 2',
    value: 'option2',
    icon: 'MopSuccessIcon',
  },
  {
    title: 'Option 3',
    metaText: 'Description 3',
    value: 'option3',
    icon: 'CardIcon',
  },
];

const optionsWithIconsValues = options.map(({ value }) => value);
const optionsWithIconsLabels = options.reduce((accumulator, { value, title }) => ({ ...accumulator, [value]: title }), {});

const withCustomMediaIcon = Template.bind({});
withCustomMediaIcon.args = {
  options: optionsWithIcons,
  value: 'option1',
};
withCustomMediaIcon.argTypes = {
  value: { control: { type: 'select', labels: optionsWithIconsLabels }, options: optionsWithIconsValues },
};
withCustomMediaIcon.parameters = {
  docs: {
    source: {
      code: `
<ContentRadioList v-model="selectedValue"
                  :id="id"
                  :data-test-id="dataTestId"
                  :options="options"
                  @input="onInput"
>
  <template v-slot:media="{ icon, mediaClass }">
    <div class="media" :class="mediaClass" v-if="(icon || mediaClass)">
      <component :is="icon" class="media-icon"/>
    </div>
  </template>
</ContentRadioList>
      `,
    },
  },
};

export {
  defaultExample,
  withCustomCheckedUncheckedIcons,
  withCustomMediaIcon,
};

export default ContentRadioListStories;

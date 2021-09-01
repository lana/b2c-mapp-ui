import { action } from '@storybook/addon-actions';
import { InfoIcon, DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import CopyableListItem from './CopyableListItem.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>ContentRadioList:</strong>&nbsp;A control that allows a user to select an option by showing all available options as a list of radio buttons.');

const CopyableListItemStories = {
  component: CopyableListItem,
  title: 'Components/CopyableListItem',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Example Title',
    text: 'Example Text',
    dataTestId: '',
    hideButton: false,
    disabled: false,
    default: '<InfoIcon width="24" />',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    hideButton: { name: 'Is copy button hidden?', control: 'boolean' },
    disabled: { name: 'Is disabled?', control: 'boolean' },
    title: { name: 'Title', control: { type: 'text' } },
    text: { name: 'Text', control: { type: 'text' } },
    dataTestId: { control: { type: 'text' } },
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
    CopyableListItem,
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
    <CopyableListItem :title="title"
                      :text="text"
                      :hide-button="hideButton"
                      :disabled="disabled"
                      @click="onClick"
    >
      <RenderString :string="defaultSlot" />
    </CopyableListItem>
  `,
});
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<CopyableListItem :title="title"
                  :text="text"
                  :hide-button="hideButton"
                  :disabled="disabled"
                  @click="onClick"
>
  <InfoIcon/>
</CopyableListItem>
      `,
    },
  },
};

const moreExampleStates = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    CopyableListItem,
    InfoIcon,
    DocumentFilledIcon,
  },
  methods: {
    onClick: action('Clicked!'),
  },
  template: `
        <ul>
          <CopyableListItem title="An info example"
                            text="Text to be copied"
                            @click="onClick"
          >
            <DocumentFilledIcon width="24"/>
          </CopyableListItem>
          <CopyableListItem title="Random URL (with hidden copy button)"
                            text="https://source.unsplash.com/random/24x24"
                            hide-button
                            @click="onClick"
          >
            <img src="https://source.unsplash.com/random/24x24"/>
          </CopyableListItem>
          <CopyableListItem title="Some Title"
                            text="1234567890ABCDE"
                            @click="onClick"
          >
            <DocumentFilledIcon width="24"/>
          </CopyableListItem>
          <CopyableListItem title="Another Title"
                            text="1234567890ABCDE"
                            @click="onClick"
          >
            <InfoIcon width="24"/>
          </CopyableListItem>
        </ul>
  `,
});
moreExampleStates.argTypes = {
  ...CopyableListItemStories.argTypes,
  default: { table: { disable: true } },
  title: { table: { disable: true } },
  text: { table: { disable: true } },
  disabled: { table: { disable: true } },
  hideButton: { table: { disable: true } },
  dataTestId: { table: { disable: true } },
};
moreExampleStates.parameters = {
  docs: {
    source: {
      code: `
<ul>
  <CopyableListItem title="An info example"
                    text="Text to be copied"
                    @click="onClick"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Random URL (with hidden copy button)"
                    text="https://source.unsplash.com/random/24x24"
                    hide-button
                    @click="onClick"
  >
    <img src="https://source.unsplash.com/random/24x24"/>
  </CopyableListItem>
  <CopyableListItem title="Some Title"
                    text="1234567890ABCDE"
                    @click="onClick"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Another Title"
                    text="1234567890ABCDE"
                    @click="onClick"
  >
    <InfoIcon/>
  </CopyableListItem>
</ul>`,
    },
  },
};

export {
  defaultExample,
  moreExampleStates,
};

export default CopyableListItemStories;

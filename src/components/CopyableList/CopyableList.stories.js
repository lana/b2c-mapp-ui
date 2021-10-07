import CopyableList from './CopyableList.vue';
import { createDeviceDecorator } from '../../lib/storybookHelpers';
import RenderString from '../../lib/renderString';

const deviceDecorator = createDeviceDecorator('<strong>CopyableList:</strong>&nbsp;A list of items with a copy to clipboard button.');

const CopyableListStories = {
  component: CopyableList,
  title: 'Components/CopyableList',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    title: 'Example Title',
    default: '',
    content: '',
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    title: { name: 'Title', control: 'text' },
    default: { control: { type: 'text' }, table: { type: { summary: null } } },
    content: { control: { type: 'text' }, table: { type: { summary: null } } },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  components: {
    CopyableList,
    RenderString,
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  template: `
    <CopyableList :title="title">
      <RenderString :string="defaultSlot" />
      <template v-slot:content v-if="content">
        <RenderString :string="content" />
      </template>
    </CopyableList>
  `,
});
defaultExample.args = {
  default: `
  <CopyableListItem title="An info example"
                    text="Text to be copied"
                    key="info"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Random URL (with hidden copy button)"
                    text="https://source.unsplash.com/random/24x24"
                    key="url"
                    hide-button
  >
    <img src="https://source.unsplash.com/random/24x24"/>
  </CopyableListItem>
  <CopyableListItem title="Example Title"
                    text="1234567890ABCDE"
                    key="icon"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Some other title"
                    text="1234567890ABCDE"
                    key="other"
  >
    <InfoIcon/>
  </CopyableListItem>`,
  content: '<p style="margin: 20px">Some example extra content</p>',
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
<CopyableList :title="title">
  <CopyableListItem title="An info example"
                    text="Text to be copied"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Random URL (with hidden copy button)"
                    text="https://source.unsplash.com/random/24x24"
                    hide-button
  >
    <img src="https://source.unsplash.com/random/24x24"/>
  </CopyableListItem>
  <CopyableListItem title="Example Title"
                    text="1234567890ABCDE"
  >
    <DocumentFilledIcon/>
  </CopyableListItem>
  <CopyableListItem title="Some other title"
                    text="1234567890ABCDE"
  >
    <InfoIcon/>
  </CopyableListItem>
  <div slot="content">
    <p style="margin: 20px">Some example extra content</p>
  </div>
</CopyableList>`,
    },
  },
};

export {
  defaultExample,
};

export default CopyableListStories;

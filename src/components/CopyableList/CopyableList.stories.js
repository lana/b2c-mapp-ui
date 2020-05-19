import { withKnobs, text } from '@storybook/addon-knobs';
import { InfoIcon, DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets/dist/index';

import CopyableList from './CopyableList.vue';
import CopyableListItem from '../CopyableListItem/CopyableListItem.vue';

const CopyableListStories = {
  component: CopyableList,
  title: 'Components/CopyableList',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    CopyableList,
    CopyableListItem,
    InfoIcon,
    DocumentFilledIcon,
  },
  props: {
    title: {
      default: text('Title', 'Example Title'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>CopyableList:</strong>&nbsp;A list of items with a copy to clipboard button.</h2>
      <hr>
      <div style="width: 500px;">
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
        </CopyableList>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default CopyableListStories;

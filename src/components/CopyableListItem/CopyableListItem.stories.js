import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { InfoIcon, FaceIdIcon, TouchIdIcon } from '@lana/b2c-mapp-ui-assets/dist/index';

import CopyableListItem from './CopyableListItem.vue';

const CopyableListItemStories = {
  component: CopyableListItem,
  title: 'CopyableListItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    CopyableListItem,
    InfoIcon,
  },
  props: {
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    hideButton: {
      default: boolean('Is copy button hidden?', false),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    text: {
      default: text('Text', 'Example Text'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>CopyableListItem:</strong>&nbsp;A list item with a convenient copy button.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <CopyableListItem :title="title"
                            :text="text"
                            :hide-button="hideButton"
                            :disabled="disabled"

          >
            <InfoIcon/>
          </CopyableListItem>
        </div>
      </div>
    </div>
  `,
});

const moreExampleStates = () => ({
  components: {
    CopyableListItem,
    InfoIcon,
    FaceIdIcon,
    TouchIdIcon,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>CopyableListItem:</strong>&nbsp;More example states.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <ul style="width: 500px">
          <CopyableListItem title="An info example"
                            text="Text to be copied"
          >
            <InfoIcon/>
          </CopyableListItem>
          <CopyableListItem title="Random URL (with hidden copy button)"
                            text="https://source.unsplash.com/random/24x24"
                            hide-button
          >
            <img src="https://source.unsplash.com/random/24x24"/>
          </CopyableListItem>
          <CopyableListItem title="FaceID"
                            text="1234567890ABCDE"
          >
            <FaceIdIcon/>
          </CopyableListItem>
          <CopyableListItem title="Touch ID"
                            text="1234567890ABCDE"
          >
            <TouchIdIcon/>
          </CopyableListItem>
        </ul>
      </div>
    </div>
  `,
});

export {
  defaultExample,
  moreExampleStates,
};

export default CopyableListItemStories;

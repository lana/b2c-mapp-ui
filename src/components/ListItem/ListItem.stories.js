import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { DocumentFilledIcon } from '@lana/b2c-mapp-ui-assets';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import ListItem from './ListItem.vue';

const ListItemStories = {
  component: ListItem,
  title: 'Components/ListItem',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    ListItem,
    DocumentFilledIcon,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    description: {
      default: text('Description', 'Example Description'),
    },
    linkTitle: {
      default: text('Link Title', 'Example Link Title'),
    },
    hasToggle: {
      default: boolean('Has Toggle Switch?', true),
    },
    transparent: {
      default: boolean('Is transparent?', false),
    },
    disabled: {
      default: boolean('Is disabled?', false),
    },
    hasImage: {
      default: boolean('Show image?', false),
    },
  },
  methods: {
    onLinkClick: action('Link Clicked!'),
    onToggleChanged: action('Toggle value changed'),
  },
  data() {
    return {
      isChecked: false,
    };
  },
  watch: {
    isChecked() {
      this.onToggleChanged(this.isChecked);
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ListItem:</strong>&nbsp;A list item which usually takes the user to content in another screen.</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <ListItem v-model="isChecked"
                  :transparent="transparent"
                  :title="title"
                  :description="description"
                  :link-title="linkTitle"
                  :has-toggle="hasToggle"
                  :disabled="disabled"
                  @linkClick="onLinkClick"
        >
          <img v-if="hasImage" src="https://source.unsplash.com/random/48x48"/>
          <p v-if="!hasImage"><DocumentFilledIcon/></p>
        </ListItem>
        <br>
        <div style="margin: 20px;">
          Bound value: {{ isChecked }}
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

export {
  defaultExample,
};

export default ListItemStories;

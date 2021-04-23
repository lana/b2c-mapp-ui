import { withKnobs, select } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import Carousel from './Carousel.vue';
import CarouselItem from '../CarouselItem/CarouselItem.vue';
import RenderString from '../../lib/renderString';

const deviceDecorator = () => ({
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
  },
  components: { StorybookMobileDeviceSimulator },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Carousel:</strong>&nbsp;A component that lets the user show different things through a slide presentation screen</h2>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <story />
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});
deviceDecorator.argTypes = {
  device: { control: { type: 'select', options: [...availableDevices] } },
};

const CarouselStories = {
  component: Carousel,
  title: 'Components/Carousel',
  decorators: [withKnobs, deviceDecorator],
  args: {
    hideArrows: false,
    arrowIcons: false,
    hideNavigation: false,
    value: 0,
  },
  argTypes: {
    hideArrows: { control: { type: 'boolean' } },
    arrowIcons: { control: { type: 'boolean' } },
    hideNavigation: { control: { type: 'boolean' } },
    value: { control: { type: 'number' } },
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
    arrows: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    leftArrowIcon: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    rightArrowIcon: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    navigation: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    navigationItem: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: null,
        },
      },
    },
    navigationItemActive: {
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

const simpleExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    Carousel,
    CarouselItem,
  },
  data() {
    return {
      slide: this.value,
    };
  },
  watch: {
    value() {
      this.slide = this.value;
    },
  },
  template: `
    <div>
      <Carousel v-model="slide"
                :hide-arrows="hideArrows"
                :arrow-icons="arrowIcons"
                :hide-navigation="hideNavigation"
                :key="value"
      >
        <CarouselItem key="green"><div style="height: 110px; width: 85%; background-color: green" /></CarouselItem>
        <CarouselItem key="blue"><div style="height: 130px; width: 90%; background-color: blue" /></CarouselItem>
        <CarouselItem key="red"><div style="height: 120px; width: 100%; background-color: red" /></CarouselItem>
        <CarouselItem key="yellow"><div style="height: 100px; width: 95%; background-color: yellow" /></CarouselItem>
      </Carousel>
      <p>Bound value: {{ slide }}</p>
    </div>
  `,
});
simpleExample.argTypes = {
  ...CarouselStories.argTypes,
  default: { table: { disable: true } },
  arrows: { table: { disable: true } },
  leftArrowIcon: { table: { disable: true } },
  rightArrowIcon: { table: { disable: true } },
  navigation: { table: { disable: true } },
  navigationItem: { table: { disable: true } },
  navigationItemActive: { table: { disable: true } },
};
simpleExample.parameters = {
  docs: {
    source: {
      code: `
<Carousel v-model="slide"
          :hide-arrows="hideArrows"
          :arrow-icons="arrowIcons"
          :hide-navigation="hideNavigation"
>
  <CarouselItem key="green">
    <div style="height: 110px; width: 85%; background-color: green" />
  </CarouselItem>
  <CarouselItem key="blue">
    <div style="height: 130px; width: 90%; background-color: blue" />
  </CarouselItem>
  <CarouselItem key="red">
    <div style="height: 120px; width: 100%; background-color: red" />
  </CarouselItem>
  <CarouselItem key="yellow">
    <div style="height: 100px; width: 95%; background-color: yellow" />
  </CarouselItem>
</Carousel>
      `,
    },
  },
};

const customizedExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    Carousel,
    RenderString,
  },
  data() {
    return {
      slide: this.value,
    };
  },
  computed: {
    defaultSlot() {
      return this.default;
    },
  },
  watch: {
    value() {
      this.slide = this.value;
    },
  },
  template: `
    <div>
      <Carousel v-model="slide"
                :hide-arrows="hideArrows"
                :arrow-icons="arrowIcons"
                :hide-navigation="hideNavigation"
                :key="value"
      >
        <RenderString v-if="defaultSlot" :string="defaultSlot" fragment/>
        <template #arrows v-if="arrows">
          <RenderString v-if="arrows" :string="arrows" />
        </template>
        <template #leftArrowIcon v-if="leftArrowIcon">
          <RenderString v-if="leftArrowIcon" :string="leftArrowIcon" />
        </template>
        <template #rightArrowIcon v-if="rightArrowIcon">
          <RenderString v-if="rightArrowIcon" :string="rightArrowIcon" />
        </template>
        <template #navigation v-if="navigation">
          <RenderString v-if="navigation" :string="navigation" />
        </template>
        <template #navigationItem="{ index }" v-if="navigationItem">
          <RenderString v-if="navigationItem" :string="navigationItem" :custom-props="{ index }" />
        </template>
        <template #navigationItemActive="{ index }" v-if="navigationItemActive">
          <RenderString v-if="navigationItemActive" :string="navigationItemActive" :custom-props="{ index }" />
        </template>
      </Carousel>
      <p>Bound value: {{ slide }}</p>
    </div>
  `,
});
customizedExample.args = {
  arrowIcons: true,
  default: `<CarouselItem key="1"><Progress :percentage="20" /></CarouselItem>
<CarouselItem key="2"><Progress :percentage="50" /></CarouselItem>
<CarouselItem key="3"><Progress :percentage="100" color="green" /></CarouselItem>`,
  leftArrowIcon: '<BackIcon class="icon" width="18" />',
  rightArrowIcon: '<ForwardIcon class="icon" width="18" />',
  navigationItem: '<span style="margin: 4px;" v-html="index" />',
  navigationItemActive: '<span style="margin: 4px; background-color: #00a0df" v-html="index" />',
};
customizedExample.parameters = {
  docs: {
    source: {
      code: `
  <Carousel v-model="slide"
            :hide-arrows="hideArrows"
            :arrow-icons="arrowIcons"
            :hide-navigation="hideNavigation"
            :key="value"
  >
    <CarouselItem key="1"><Progress :percentage="20" /></CarouselItem>
    <CarouselItem key="2"><Progress :percentage="50" /></CarouselItem>
    <CarouselItem key="3"><Progress :percentage="100" color="green" /></CarouselItem>
    <template #leftArrowIcon>
      <BackIcon class="icon" width="18" />
    </template>
    <template #rightArrowIcon>
      <ForwardIcon class="icon" width="18" />
    </template>
    <template #navigationItem="{ index }">
      <span style="margin: 4px;" v-html="index" />
    </template>
    <template #navigationItemActive="{ index }">
      <span style="margin: 4px; background-color: #00a0df" v-html="index" />
    </template>
  </Carousel>
      `,
    },
  },
};

export {
  customizedExample,
  simpleExample,
};

export default CarouselStories;

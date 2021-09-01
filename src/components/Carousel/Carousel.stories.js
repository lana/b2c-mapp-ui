import Carousel from './Carousel.vue';
import RenderString from '../../lib/renderString';
import { createDeviceDecorator } from '../../lib/storybookHelpers';

const deviceDecorator = createDeviceDecorator('<strong>Carousel:</strong>&nbsp;A component that lets the user show different things through a slide presentation screen');

const CarouselStories = {
  component: Carousel,
  title: 'Components/Carousel',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    hideArrows: false,
    arrowIcons: false,
    hideNavigation: false,
    value: 0,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
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

const defaultExample = (args, { argTypes }) => ({
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
defaultExample.args = {
  arrowIcons: true,
  value: 1,
  default: `<div key="1"><Progress :percentage="20" /></div>
<div key="2"><Progress :percentage="50" /></div>
<div key="3"><Progress :percentage="100" color="green" /></div>`,
  leftArrowIcon: '<BackIcon class="icon" width="18" />',
  rightArrowIcon: '<ForwardIcon class="icon" width="18" />',
  navigationItem: '<span style="margin: 4px;" v-html="index" />',
  navigationItemActive: '<span style="margin: 4px; background-color: #00a0df" v-html="index" />',
};
defaultExample.parameters = {
  docs: {
    source: {
      code: `
  <Carousel v-model="slide"
            :hide-arrows="hideArrows"
            :arrow-icons="arrowIcons"
            :hide-navigation="hideNavigation"
            :key="value"
  >
    <div key="1"><Progress :percentage="20" /></div>
    <div key="2"><Progress :percentage="50" /></div>
    <div key="3"><Progress :percentage="100" color="green" /></div>
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

const simpleExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    Carousel,
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
      >
        <div key="green" style="align-items: center; justify-content: center"><div style="height: 110px; width: 85%; background-color: green" /></div>
        <div key="blue" style="align-items: center; justify-content: center"><div style="height: 130px; width: 90%; background-color: blue" /></div>
        <div key="red" style="align-items: center; justify-content: center"><div style="height: 120px; width: 100%; background-color: red" /></div>
        <div key="yellow" style="align-items: center; justify-content: center"><div style="height: 100px; width: 95%; background-color: yellow" /></div>
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
  <div key="green" style="align-items: center; justify-content: center">
    <div style="height: 110px; width: 85%; background-color: green" />
  </div>
  <div key="blue" style="align-items: center; justify-content: center">
    <div style="height: 130px; width: 90%; background-color: blue" />
  </div>
  <div key="red" style="align-items: center; justify-content: center">
    <div style="height: 120px; width: 100%; background-color: red" />
  </div>
  <div key="yellow" style="align-items: center; justify-content: center">
    <div style="height: 100px; width: 95%; background-color: yellow" />
  </div>
</Carousel>
      `,
    },
  },
};

const innerWidthItemExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    Carousel,
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
      >
        <div key="green" style="flex-basis: auto">
          <div style="height: 110px; width: 200px; background-color: green; margin: 0 5px" />
        </div>
        <div key="blue" style="flex-basis: auto">
          <div style="height: 130px; width: 300px; background-color: blue; margin: 0 5px" />
        </div>
        <div key="red" style="flex-basis: auto">
          <div style="height: 120px; width: 250px; background-color: red; margin: 0 5px" />
        </div>
        <div key="yellow" style="flex-basis: auto">
          <div style="height: 100px; width: 450px; background-color: yellow; margin: 0 5px" />
        </div>
      </Carousel>
      <p>Bound value: {{ slide }}</p>
    </div>
  `,
});
innerWidthItemExample.argTypes = {
  ...CarouselStories.argTypes,
  default: { table: { disable: true } },
  arrows: { table: { disable: true } },
  leftArrowIcon: { table: { disable: true } },
  rightArrowIcon: { table: { disable: true } },
  navigation: { table: { disable: true } },
  navigationItem: { table: { disable: true } },
  navigationItemActive: { table: { disable: true } },
};
innerWidthItemExample.parameters = {
  docs: {
    source: {
      code: `
<Carousel v-model="slide"
          :hide-arrows="hideArrows"
          :arrow-icons="arrowIcons"
          :hide-navigation="hideNavigation"
>
  <div key="green" style="flex-basis: auto">
    <div style="height: 110px; width: 200px; background-color: green; margin: 0 5px" />
  </div>
  <div key="blue" style="flex-basis: auto">
    <div style="height: 130px; width: 300px; background-color: blue; margin: 0 5px" />
  </div>
  <div key="red" style="flex-basis: auto">
    <div style="height: 120px; width: 250px; background-color: red; margin: 0 5px" />
  </div>
  <div key="yellow" style="flex-basis: auto">
    <div style="height: 100px; width: 450px; background-color: yellow; margin: 0 5px" />
  </div>
</Carousel>
      `,
    },
  },
};

export {
  defaultExample,
  simpleExample,
  innerWidthItemExample,
};

export default CarouselStories;

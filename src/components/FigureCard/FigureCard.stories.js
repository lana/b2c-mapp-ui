import { withKnobs, text } from '@storybook/addon-knobs';

import FigureCard from './FigureCard.vue';

const FigureCardStories = {
  component: FigureCard,
  title: 'FigureCard',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    FigureCard,
  },
  props: {
    metaText: {
      default: text('Meta text', 'Example Metatext'),
    },
    title: {
      default: text('Title', 'Example Title'),
    },
    imageSource: {
      default: text('Image Source (URL)', 'https://source.unsplash.com/random/44x44'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>FigureCard:</strong>&nbsp;The FigureCard looks like a button containing a figure and a caption.</h2>
      <hr>
      <FigureCard :title="title"
                  :meta-text="metaText"
                  :image-source="imageSource"
      />
    </div>
  `,
});

export {
  defaultExample,
};

export default FigureCardStories;

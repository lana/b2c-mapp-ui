import { withKnobs, text } from '@storybook/addon-knobs';

import FigureCard from './FigureCard.vue';

const FigureCardStories = {
  component: FigureCard,
  title: 'Components/FigureCard',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    FigureCard,
  },
  props: {
    title: {
      default: text('Title', 'Example Title'),
    },
    imageSource: {
      default: text('Image Source (URL)', 'https://source.unsplash.com/random/116x26'),
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>FigureCard:</strong>&nbsp;The FigureCard looks like a button containing a figure and a caption.</h2>
      <hr>
      <div style="width: 160px;">
        <FigureCard :title="title"
                    :image-source="imageSource"
        />
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default FigureCardStories;

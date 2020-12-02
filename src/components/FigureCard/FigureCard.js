import TextParagraph from '../TextParagraph/TextParagraph.vue';

const components = {
  TextParagraph,
};

const props = {
  dataTestId: {
    type: String,
    default: 'figure-card',
  },
  title: {
    type: String,
    default: '',
  },
  imageSource: {
    type: String,
    default: '',
  },
  isTitleUp: Boolean,
};

const computed = {
  backgroundStyle() {
    const result = { backgroundImage: `url('${this.imageSource}')` };
    return result;
  },
};

const FigureCard = {
  components,
  props,
  computed,
};

export default FigureCard;

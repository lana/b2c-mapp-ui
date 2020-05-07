// TODO JASON: Finish updating this file to export all the library components

// TODO JASON: Add Rollup back once ready, and then update the `module` and `main` entries inside of package.json

// TODO JASON: Add a storybook story for showing all icons

// TODO JASON: Ask Rahul about configuring auto-deploy of static-storybook to GH (and make sure to add the needed package.json script for that too)

// TODO JASON: Alpha-sort these imports
import ActionItem from './components/ActionItem/ActionItem.vue';
import BankAccountNumberInputField from './components/BankAccountNumberInputField/BankAccountNumberInputField.vue';
import Button from './components/Button/Button.vue';
import CopyToClipboardButton from './components/CopyToClipboardButton/CopyToClipboardButton.vue';
import ContentItem from './components/ContentItem/ContentItem.vue';
import DateField from './components/DateField/DateField.vue';
import FigureCard from './components/FigureCard/FigureCard.vue';
import FormField from './components/FormField/FormField.vue';
import ForwardButton from './components/ForwardButton/ForwardButton.vue';
import Heading from './components/Heading/Heading.vue';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.vue';
import Screen from './components/Screen/Screen.vue';
import ScrollWrapper from './components/ScrollWrapper/ScrollWrapper.vue';
import TextParagraph from './components/TextParagraph/TextParagraph.vue';
import Wrapper from './components/Wrapper/Wrapper.vue';
import WrappedButton from './components/WrappedButton/WrappedButton.vue';
import './styles/normalize.scss';

const libraryComponents = { // TODO JASON: Alpha-sort these
  ActionItem,
  BankAccountNumberInputField,
  Button,
  CopyToClipboardButton,
  ContentItem,
  DateField,
  FigureCard,
  FormField,
  ForwardButton,
  Heading,
  LoadingSpinner,
  Screen,
  ScrollWrapper,
  TextParagraph,
  Wrapper,
  WrappedButton,
};

export default libraryComponents;

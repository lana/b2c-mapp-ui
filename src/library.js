// TODO JASON: Add Rollup back once ready (copy the config from the ui-assets repo and compare with the old ui libs config), and then update the `module` and `main` entries inside of package.json

import ActionItem from './components/ActionItem/ActionItem.vue';
import BankAccountNumberInputField from './components/BankAccountNumberInputField/BankAccountNumberInputField.vue';
import Button from './components/Button/Button.vue';
import ConfirmationModalDialog from './components/ConfirmationModalDialog/ConfirmationModalDialog.vue';
import ConfirmationToastDialog from './components/ConfirmationToastDialog/ConfirmationToastDialog.vue';
import ContentItem from './components/ContentItem/ContentItem.vue';
import CopyableList from './components/CopyableList/CopyableList.vue';
import CopyableListItem from './components/CopyableListItem/CopyableListItem.vue';
import CopyToClipboardButton from './components/CopyToClipboardButton/CopyToClipboardButton.vue';
import DateField from './components/DateField/DateField.vue';
import FigureCard from './components/FigureCard/FigureCard.vue';
import FormField from './components/FormField/FormField.vue';
import ForwardButton from './components/ForwardButton/ForwardButton.vue';
import Heading from './components/Heading/Heading.vue';
import ListItem from './components/ListItem/ListItem.vue';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.vue';
import PhoneNumberField from './components/PhoneNumberField/PhoneNumberField.vue';
import RadioList from './components/RadioList/RadioList.vue';
import Screen from './components/Screen/Screen.vue';
import ScrollWrapper from './components/ScrollWrapper/ScrollWrapper.vue';
import SelectBox from './components/SelectBox/SelectBox.vue';
import Stepper from './components/Stepper/Stepper.vue';
import TextField from './components/TextField/TextField.vue';
import TextParagraph from './components/TextParagraph/TextParagraph.vue';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch.vue';
import TopBar from './components/TopBar/TopBar.vue';
import WrappedButton from './components/WrappedButton/WrappedButton.vue';
import Wrapper from './components/Wrapper/Wrapper.vue';
import './styles/normalize.scss';

const libraryComponents = {
  ActionItem,
  BankAccountNumberInputField,
  Button,
  ConfirmationModalDialog,
  ConfirmationToastDialog,
  ContentItem,
  CopyableList,
  CopyableListItem,
  CopyToClipboardButton,
  DateField,
  FigureCard,
  FormField,
  ForwardButton,
  Heading,
  ListItem,
  LoadingSpinner,
  PhoneNumberField,
  RadioList,
  Screen,
  ScrollWrapper,
  SelectBox,
  Stepper,
  TextField,
  TextParagraph,
  ToggleSwitch,
  TopBar,
  WrappedButton,
  Wrapper,
};

export default libraryComponents;

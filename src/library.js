import './styles/normalize.scss';

const ActionItem = () => import(/* webpackChunkName: "actionitem" */ './components/ActionItem/ActionItem.vue');
const AmountInput = () => import(/* webpackChunkName: "amountinput" */ './components/AmountInput/AmountInput.vue');
const BankAccountNumberInputField = () => import(/* webpackChunkName: "backaccountnumberinputfield" */ './components/BankAccountNumberInputField/BankAccountNumberInputField.vue');
const BoxContentItem = () => import(/* webpackChunkName: "boxcontentitem" */ './components/BoxContentItem/BoxContentItem.vue');
const Button = () => import(/* webpackChunkName: "button" */ './components/Button/Button.vue');
const CallToActionScreen = () => import(/* webpackChunkName: "calltoactionscreen" */ './components/CallToActionScreen/CallToActionScreen.vue');
const Carousel = () => import(/* webpackChunkName: "carousel" */ './components/Carousel/Carousel.vue');
const CarouselItem = () => import(/* webpackChunkName: "carouselitem" */ './components/CarouselItem/CarouselItem.vue');
const Checkbox = () => import(/* webpackChunkName: "checkbox" */ './components/Checkbox/Checkbox.vue');
const CodeInputField = () => import(/* webpackChunkName: "codeinputfield" */ './components/CodeInputField/CodeInputField.vue');
const ConfettiOverlay = () => import(/* webpackChunkName: "confettioverload" */ './components/ConfettiOverlay/ConfettiOverlay.vue');
const ConfirmationModalDialog = () => import(/* webpackChunkName: "confirmationmodaldialog" */ './components/ConfirmationModalDialog/ConfirmationModalDialog.vue');
const ConfirmationToastDialog = () => import(/* webpackChunkName: "confirmationtoastdialog" */ './components/ConfirmationToastDialog/ConfirmationToastDialog.vue');
const ContentItem = () => import(/* webpackChunkName: "contentitem" */ './components/ContentItem/ContentItem.vue');
const ContentRadioList = () => import(/* webpackChunkName: "contentradiolist" */ './components/ContentRadioList/ContentRadioList.vue');
const CopyableList = () => import(/* webpackChunkName: "copyablelist" */ './components/CopyableList/CopyableList.vue');
const CopyableListItem = () => import(/* webpackChunkName: "copyablelistitem" */ './components/CopyableListItem/CopyableListItem.vue');
const CopyToClipboardButton = () => import(/* webpackChunkName: "copytoclipboardbutton" */ './components/CopyToClipboardButton/CopyToClipboardButton.vue');
const CurrencyField = () => import(/* webpackChunkName: "currencyfield" */ './components/CurrencyField/CurrencyField.vue');
const DateField = () => import(/* webpackChunkName: "datefield" */ './components/DateField/DateField.vue');
const FigureCard = () => import(/* webpackChunkName: "figurecard" */ './components/FigureCard/FigureCard.vue');
const FormField = () => import(/* webpackChunkName: "formfield" */ './components/FormField/FormField.vue');
const ForwardButton = () => import(/* webpackChunkName: "forwardbutton" */ './components/ForwardButton/ForwardButton.vue');
const Heading = () => import(/* webpackChunkName: "heading" */ './components/Heading/Heading.vue');
const Infobox = () => import(/* webpackChunkName: "infobox" */ './components/Infobox/Infobox.vue');
const ListItem = () => import(/* webpackChunkName: "listitem" */ './components/ListItem/ListItem.vue');
const LoadingSpinner = () => import(/* webpackChunkName: "loadingspinner" */ './components/LoadingSpinner/LoadingSpinner.vue');
const PhoneNumberField = () => import(/* webpackChunkName: "phonenumberfield" */ './components/PhoneNumberField/PhoneNumberField.vue');
const Progress = () => import(/* webpackChunkName: "progress" */ './components/Progress/Progress.vue');
const RadioList = () => import(/* webpackChunkName: "radiolist" */ './components/RadioList/RadioList.vue');
const Screen = () => import(/* webpackChunkName: "screen" */ './components/Screen/Screen.vue');
const ScrollWrapper = () => import(/* webpackChunkName: "scrollwrapper" */ './components/ScrollWrapper/ScrollWrapper.vue');
const SelectBox = () => import(/* webpackChunkName: "selectbox" */ './components/SelectBox/SelectBox.vue');
const SelfieWebCam = () => import(/* webpackChunkName: "selfiewebcam" */ './components/SelfieWebCam/SelfieWebCam.vue');
const SlideButton = () => import(/* webpackChunkName: "slidebutton" */ './components/SlideButton/SlideButton.vue');
const SpecCard = () => import(/* webpackChunkName: "speccard" */ './components/SpecCard/SpecCard.vue');
const Stepper = () => import(/* webpackChunkName: "stepper" */ './components/Stepper/Stepper.vue');
const StorybookMobileDeviceSimulator = () => import(/* webpackChunkName: "storybookmobiledevicesimulator" */ './components/StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue');
const { availableDevices: availableSimulatedMobileDevices } = () => import(/* webpackChunkName: "availabledevices" */ './components/StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator');
const TextField = () => import(/* webpackChunkName: "textfield" */ './components/TextField/TextField.vue');
const TextParagraph = () => import(/* webpackChunkName: "textparagraph" */ './components/TextParagraph/TextParagraph.vue');
const ToggleSwitch = () => import(/* webpackChunkName: "toggleswitch" */ './components/ToggleSwitch/ToggleSwitch.vue');
const TopBar = () => import(/* webpackChunkName: "topbar" */ './components/TopBar/TopBar.vue');
const WrappedButton = () => import(/* webpackChunkName: "wrappedbutton" */ './components/WrappedButton/WrappedButton.vue');
const Wrapper = () => import(/* webpackChunkName: "wrapper" */ './components/Wrapper/Wrapper.vue');

export {
  ActionItem,
  AmountInput,
  BankAccountNumberInputField,
  BoxContentItem,
  Button,
  ConfettiOverlay,
  CallToActionScreen,
  Carousel,
  CarouselItem,
  Checkbox,
  CodeInputField,
  ConfirmationModalDialog,
  ConfirmationToastDialog,
  ContentItem,
  ContentRadioList,
  CopyableList,
  CopyableListItem,
  CopyToClipboardButton,
  CurrencyField,
  DateField,
  FigureCard,
  FormField,
  ForwardButton,
  Heading,
  Infobox,
  ListItem,
  LoadingSpinner,
  PhoneNumberField,
  Progress,
  RadioList,
  Screen,
  ScrollWrapper,
  SelectBox,
  SelfieWebCam,
  SlideButton,
  SpecCard,
  Stepper,
  StorybookMobileDeviceSimulator,
  availableSimulatedMobileDevices,
  TextField,
  TextParagraph,
  ToggleSwitch,
  TopBar,
  WrappedButton,
  Wrapper,
};

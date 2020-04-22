/* eslint-disable react/prop-types */

import { MDXProvider } from '@mdx-js/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';
import * as Icons from '@lana/b2c-mapp-ui-assets';
import '@lana/b2c-mapp-ui-assets/dist/index.css';

import Navigation from './Navigation/Navigation';
import CSS from './App.css';
import { Button, WrappedButton, CopyToClipboardButton, FigureCard, ForwardButton, ModalConfirmationDialog, ConfirmationToastDialog, FormField, PhoneNumberInputField, BankAccountNumberInputField, SelectBox, RadioList, ActionItem, ContentItem, ListItem, LoadingSpinner, Stepper, Screen, ScrollWrapper, Heading, TextParagraph, TextField, TextFieldWithValidation, TopBar, DateField, CopyableList, ToggleSwitch } from '../src';
import IndexDoc from '../README.md';
import ButtonDoc from '../src/components/Button/Readme.md';
import WrappedButtonDoc from '../src/components/WrappedButton/Readme.md';
import CopyToClipboardButtonDoc from '../src/components/CopyToClipboardButton/Readme.md';
import FigureCardDoc from '../src/components/FigureCard/Readme.md';
import ForwardButtonDoc from '../src/components/ForwardButton/Readme.md';
import ModalConfirmationDialogDoc from '../src/components/ModalConfirmationDialog/Readme.md';
import ConfirmationToastDialogDoc from '../src/components/ConfirmationToastDialog/Readme.md';
import FormFieldDoc from '../src/components/FormField/Readme.md';
import PhoneNumberInputFieldDoc from '../src/components/PhoneNumberInputField/Readme.md';
import BankAccountNumberInputFieldDoc from '../src/components/BankAccountNumberInputField/Readme.md';
import DateFieldDoc from '../src/components/DateField/Readme.md';
import SelectBoxDoc from '../src/components/SelectBox/Readme.md';
import RadioListDoc from '../src/components/RadioList/Readme.md';
import ToggleSwitchDoc from '../src/components/ToggleSwitch/Readme.md';
import ActionItemDoc from '../src/components/ActionItem/Readme.md';
import ContentItemDoc from '../src/components/ContentItem/Readme.md';
import ListItemDoc from '../src/components/ListItem/Readme.md';
import LoadingSpinnerDoc from '../src/components/LoadingSpinner/Readme.md';
import StepperDoc from '../src/components/Stepper/Readme.md';
import ScreenDoc from '../src/components/Screen/Readme.md';
import ScrollWrapperDoc from '../src/components/ScrollWrapper/Readme.md';
import HeadingDoc from '../src/components/Heading/Readme.md';
import TextParagraphDoc from '../src/components/TextParagraph/Readme.md';
import TextFieldDoc from '../src/components/TextField/Readme.md';
import TextFieldWithValidationDoc from '../src/components/TextFieldWithValidation/Readme.md';
import TopBarDoc from '../src/components/TopBar/Readme.md';
import CopyableListDoc from '../src/components/CopyableList/Readme.md';
import IconDoc from './icons/Readme.md';

const App = () => {
  const aliases = [
    { path: '/', doc: <IndexDoc /> },
    { path: '/buttons/Button', doc: <ButtonDoc /> },
    { path: '/buttons/WrappedButton', doc: <WrappedButtonDoc /> },
    { path: '/buttons/CopyToClipboardButton', doc: <CopyToClipboardButtonDoc /> },
    { path: '/buttons/FigureCard', doc: <FigureCardDoc /> },
    { path: '/buttons/ForwardButton', doc: <ForwardButtonDoc /> },
    { path: '/overlays/ModalConfirmationDialog', doc: <ModalConfirmationDialogDoc /> },
    { path: '/overlays/ConfirmationToastDialog', doc: <ConfirmationToastDialogDoc /> },
    { path: '/forms/FormField', doc: <FormFieldDoc /> },
    { path: '/forms/PhoneNumberInputField', doc: <PhoneNumberInputFieldDoc /> },
    { path: '/forms/BankAccountNumberInputField', doc: <BankAccountNumberInputFieldDoc /> },
    { path: '/forms/DateField', doc: <DateFieldDoc /> },
    { path: '/forms/SelectBox', doc: <SelectBoxDoc /> },
    { path: '/forms/ToggleSwitch', doc: <ToggleSwitchDoc /> },
    { path: '/forms/RadioList', doc: <RadioListDoc /> },
    { path: '/forms/TextField', doc: <TextFieldDoc /> },
    { path: '/forms/TextFieldWithValidation', doc: <TextFieldWithValidationDoc /> },
    { path: '/lists/ActionItem', doc: <ActionItemDoc /> },
    { path: '/lists/ContentItem', doc: <ContentItemDoc /> },
    { path: '/lists/ListItem', doc: <ListItemDoc /> },
    { path: '/lists/CopyableList', doc: <CopyableListDoc /> },
    { path: '/loading/LoadingSpinner', doc: <LoadingSpinnerDoc /> },
    { path: '/navigation/Stepper', doc: <StepperDoc /> },
    { path: '/navigation/TopBar', doc: <TopBarDoc /> },
    { path: '/structure/Screen', doc: <ScreenDoc /> },
    { path: '/structure/ScrollWrapper', doc: <ScrollWrapperDoc /> },
    { path: '/typography/Heading', doc: <HeadingDoc /> },
    { path: '/typography/TextParagraph', doc: <TextParagraphDoc /> },
    { path: '/icons/Icon', doc: <IconDoc /> },
  ];

  const components = {
    h1: ({ children }) => <h1 className={CSS.h1}>{children}</h1>,
    h2: ({ children }) => <h2 className={CSS.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={CSS.h3}>{children}</h3>,
    p: ({ children }) => <p className={CSS.p}>{children}</p>,
    ul: ({ children }) => <ul className={CSS.ul}>{children}</ul>,
    ol: ({ children }) => <ol className={CSS.ol}>{children}</ol>,
    li: ({ children }) => <li className={CSS.li}>{children}</li>,
    table: ({ children }) => <table className={CSS.table}>{children}</table>,
    a: ({ href, children }) => <a href={href} className={CSS.a}>{children}</a>,
    code: ({ metaString, children }) => {
      const scope = {
        Button,
        WrappedButton,
        CopyToClipboardButton,
        FigureCard,
        ForwardButton,
        ModalConfirmationDialog,
        ConfirmationToastDialog,
        FormField,
        PhoneNumberInputField,
        SelectBox,
        ActionItem,
        ContentItem,
        ListItem,
        LoadingSpinner,
        Stepper,
        Screen,
        ScrollWrapper,
        Heading,
        TextParagraph,
        TopBar,
        RadioList,
        BankAccountNumberInputField,
        TextField,
        TextFieldWithValidation,
        DateField,
        CopyableList,
        ToggleSwitch,
        ...Icons,
      };
      if (metaString == null) {
        return (
          <LiveProvider code={children} scope={scope}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        );
      }
      if (metaString === 'readonly') { return <div>{children}</div>; }
    },
  };

  return (
    <MDXProvider components={components}>
      <div className="doc-app">
        <Navigation />
        <Router history={createHashHistory()}>
          {aliases.map(({ path, doc }, index) => (
            <Screen key={`${index}-${path}`} className="doc-screen" displayMode="overlay" path={path}>
              <ScrollWrapper>{doc}</ScrollWrapper>
            </Screen>
          ))}
        </Router>
      </div>
    </MDXProvider>
  );
};

export default App;

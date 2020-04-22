import { useState } from 'preact/hooks';
import { Link } from 'preact-router';

import '../../src/components/Theme/Theme';
import CSS from './Navigation.css';
import ScrollWrapper from '../../src/components/ScrollWrapper/ScrollWrapper';
import TextField from '../../src/components/TextField/TextField';
import Logo from '../images/logo.icon';

const defaultLinks = [
  { link: <li><Link href="/lists/ActionItem">ActionItem</Link></li>, keywords: 'lists actionitem' },
  { link: <li><Link href="/forms/BankAccountNumberInputField">BankAccountNumberInputField</Link></li>, keywords: 'forms bankaccountnumberinputfield input' },
  { link: <li><Link href="/buttons/Button">Button</Link></li>, keywords: 'buttons' },
  { link: <li><Link href="/overlays/ConfirmationToastDialog">ConfirmationToastDialog</Link></li>, keywords: 'overlays dialog confirmationtoastdialog' },
  { link: <li><Link href="/lists/ContentItem">ContentItem</Link></li>, keywords: 'lists contentitem' },
  { link: <li><Link href="/lists/CopyableList">CopyableList</Link></li>, keywords: 'lists copyable copyablelist' },
  { link: <li><Link href="/buttons/CopyToClipboardButton">CopyToClipboardButton</Link></li>, keywords: 'buttons copytoclipboard' },
  { link: <li><Link href="/forms/DateField">DateField</Link></li>, keywords: 'forms datefield input' },
  { link: <li><Link href="/buttons/FigureCard">FigureCard</Link></li>, keywords: 'buttons figurecard' },
  { link: <li><Link href="/forms/FormField">FormField</Link></li>, keywords: 'forms field input formfield' },
  { link: <li><Link href="/buttons/ForwardButton">ForwardButton</Link></li>, keywords: 'buttons forward' },
  { link: <li><Link href="/typography/Heading">Heading</Link></li>, keywords: 'typography heading' },
  { link: <li><Link href="/icons/Icon">Icons</Link></li>, keywords: 'icons' },
  { link: <li><Link href="/lists/ListItem">ListItem</Link></li>, keywords: 'lists item' },
  { link: <li><Link href="/loading/LoadingSpinner">LoadingSpinner</Link></li>, keywords: 'loadingspinner' },
  { link: <li><Link href="/overlays/ModalConfirmationDialog">ModalConfirmationDialog</Link></li>, keywords: 'overlays dialog modalconfirmationdialog' },
  { link: <li><Link href="/forms/PhoneNumberInputField">PhoneNumberInputField</Link></li>, keywords: 'forms phonefield phonenumberinputfield input' },
  { link: <li><Link href="/forms/RadioList">RadioList</Link></li>, keywords: 'forms selectionlist radiolist input' },
  { link: <li><Link href="/forms/SelectBox">SelectBox</Link></li>, keywords: 'forms selector selectbox input' },
  { link: <li><Link href="/structure/Screen">Screen</Link></li>, keywords: 'structure screen' },
  { link: <li><Link href="/structure/ScrollWrapper">ScrollWrapper</Link></li>, keywords: 'structure scroll scrollwrapper' },
  { link: <li><Link href="/navigation/Stepper">Stepper</Link></li>, keywords: 'navigation stepper' },
  { link: <li><Link href="/forms/TextField">TextField</Link></li>, keywords: 'forms textfield input' },
  { link: <li><Link href="/forms/TextFieldWithValidation">TextFieldWithValidation</Link></li>, keywords: 'forms textfieldrule textfieldwithvalidation input' },
  { link: <li><Link href="/typography/TextParagraph">TextParagraph</Link></li>, keywords: 'typography text textparagraph label' },
  { link: <li><Link href="/forms/ToggleSwitch">ToggleSwitch</Link></li>, keywords: 'forms toggle toggleswitch input' },
  { link: <li><Link href="/navigation/TopBar">TopBar</Link></li>, keywords: 'navigation topbar' },
  { link: <li><Link href="/buttons/WrappedButton">WrappedButton</Link></li>, keywords: 'buttons wrapped' },
];

const Navigation = () => {
  const [links, setLinks] = useState(defaultLinks);
  const [filterValue, setFilterValue] = useState('');

  const filterItems = (newFilterValue) => {
    const upperFilterValue = ((newFilterValue && newFilterValue.toUpperCase()) || '');
    setFilterValue(newFilterValue);
    const newLinks = defaultLinks.filter(({ keywords }) => upperFilterValue.includes(keywords.toUpperCase()));
    setLinks(newLinks);
  };

  return (
    <nav className={CSS.navigation}>
      <Logo className={CSS.logo} />
      <ul>
        <li>
          <TextField
            placeholder="Filter..."
            onChange={filterItems}
            value={filterValue}
          />
        </li>
      </ul>
      <ScrollWrapper>
        <h2 className={CSS.heading}>Home</h2>
        <ul>
          <li><Link href="/">Getting started</Link></li>
        </ul>
        <h2 className={CSS.heading}>UI</h2>
        <ul>
          {
            links.map(({ link }) => (link))
          }
        </ul>
      </ScrollWrapper>
    </nav>
  );
};

export default Navigation;

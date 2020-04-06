import { useState } from 'preact/hooks'
import { Link } from 'preact-router';
import 'src/Theme'
import CSS from './Navigation.css'

import Scroll from 'src/structure/Scroll'
import Logo from  'docs/images/img_logo'
import TextField from 'src/forms/TextField';

const Navigation = () => {

	const defaultLinks = [
		{ link: <li><Link href='/buttons/Button'>Button</Link></li>, keywords: 'buttons'},
		{ link: <li><Link href='/buttons/WrappedButton'>WrappedButton</Link></li>, keywords: 'buttons wrapped'},
		{ link: <li><Link href='/buttons/CopyToClipboard'>CopyToClipboard</Link></li>, keywords: 'buttons copytoclipboard'},
		{ link: <li><Link href='/buttons/FigureCard'>FigureCard</Link></li>, keywords: 'buttons figurecard'},
		{ link: <li><Link href='/buttons/Forward'>Forward</Link></li>, keywords: 'buttons forward'},
		{ link: <li><Link href='/overlays/Dialog'>Dialog</Link></li>, keywords: 'overlays dialog'},
		{ link: <li><Link href='/overlays/BottomDialog'>BottomDialog</Link></li>, keywords: 'overlays bottomdialog'},
		{ link: <li><Link href='/forms/Field'>Field</Link></li>, keywords: 'forms field input'},
		{ link: <li><Link href='/forms/PhoneField'>PhoneField</Link></li>, keywords: 'forms phonefield input'},
		{ link: <li><Link href='/forms/BankAccountField'>BankAccountField</Link></li>, keywords: 'forms bankaccountfield input'},
		{ link: <li><Link href='/forms/Selector'>Selector</Link></li>, keywords: 'forms selector input'},
		{ link: <li><Link href='/forms/SelectionList'>SelectionList</Link></li>, keywords: 'forms selectionlist input'},
		{ link: <li><Link href='/forms/TextField'>TextField</Link></li>, keywords: 'forms textfield input'},
		{ link: <li><Link href='/forms/TextFieldRule'>TextFieldRule</Link></li>, keywords: 'forms textfieldrule input'},
		{ link: <li><Link href='/forms/DateField'>DateField</Link></li>, keywords: 'forms datefield input'},
		{ link: <li><Link href='/lists/ActionItem'>ActionItem</Link></li>, keywords: 'lists actionitem'},
		{ link: <li><Link href='/lists/ContentItem'>ContentItem</Link></li>, keywords: 'lists contentitem'},
		{ link: <li><Link href='/lists/ListItem'>ListItem</Link></li>, keywords: 'lists item'},
		{ link: <li><Link href='/lists/CopyableList'>CopyableList</Link></li>, keywords: 'lists copyable'},
		{ link: <li><Link href='/loading/Spinner'>Spinner</Link></li>, keywords: 'loadingspinner'},
		{ link: <li><Link href='/navigation/Stepper'>Stepper</Link></li>, keywords: 'navigation stepper'},
		{ link: <li><Link href='/navigation/TopBar'>TopBar</Link></li>, keywords: 'navigation topbar'},
		{ link: <li><Link href='/structure/Screen'>Screen</Link></li>, keywords: 'structure screen'},
		{ link: <li><Link href='/structure/Scroll'>Scroll</Link></li>, keywords: 'structure scroll'},
		{ link: <li><Link href='/typography/Heading'>Heading</Link></li>, keywords: 'typography heading'},
		{ link: <li><Link href='/typography/Text'>Text</Link></li>, keywords: 'typography text label'},
		{ link: <li><Link href='/icons/Icon'>Icons</Link></li>, keywords: 'icons'},
	]

	const [links, setLinks] = useState(defaultLinks);
	const [filterValue, setFilterValue] = useState('');

	const filterItems = (newFilterValue) => {
		setFilterValue(newFilterValue);
		const newLinks = defaultLinks.filter(({keywords}) => keywords.includes(newFilterValue));
		setLinks(newLinks);
	}

		return (
			<nav className={CSS.navigation}>
				<Logo className={CSS.logo} />
				<ul>
					<li><TextField 
						placeholder='Filter...'
						onChange={filterItems}
						value={filterValue}
					/></li>
				</ul>
				<Scroll>
					<h2 className={CSS.heading}>Home</h2>
					<ul>
						<li><Link href='/'>Getting started</Link></li>
					</ul>
					<h2 className={CSS.heading}>UI</h2>
					<ul>
						{
							links.map(({link}) => (link))
						}
					</ul>
				</Scroll>
			</nav>
		)
}
export default Navigation;

import { Component } from 'preact'
import { Link } from 'preact-router';
import 'src/Theme'
import CSS from './Navigation.css'

import Scroll from 'src/structure/Scroll'
import Logo from  'docs/images/img_logo'

export default class Navigation extends Component {

	render() {
		return (
			<nav className={CSS.navigation}>
				<Logo className={CSS.logo} />
				<Scroll>
					<h2 className={CSS.heading}>Home</h2>
					<ul>
						<li><Link href='/'>Getting started</Link></li>
					</ul>
					<h2 className={CSS.heading}>UI</h2>
					<ul>
						<li><Link href='/buttons/Button'>Button</Link></li>
						<li><Link href='/buttons/ButtonWrapped'>ButtonWrapped</Link></li>
						<li><Link href='/buttons/Forward'>Forward</Link></li>
						<li><Link href='/overlays/Dialog'>Dialog</Link></li>
						<li><Link href='/overlays/BottomDialog'>BottomDialog</Link></li>
						<li><Link href='/forms/Field'>Field</Link></li>
						<li><Link href='/forms/PhoneField'>PhoneField</Link></li>
						<li><Link href='/forms/BankAccountField'>BankAccountField</Link></li>
						<li><Link href='/forms/Selector'>Selector</Link></li>
						<li><Link href='/forms/SelectionList'>SelectionList</Link></li>
						<li><Link href='/forms/TextField'>TextField</Link></li>
						<li><Link href='/forms/TextFieldRule'>TextFieldRule</Link></li>
						<li><Link href='/lists/ActionItem'>ActionItem</Link></li>
						<li><Link href='/lists/ContentItem'>ContentItem</Link></li>
						<li><Link href='/lists/ListItem'>ListItem</Link></li>
						<li><Link href='/loading/Spinner'>Spinner</Link></li>
						<li><Link href='/navigation/Stepper'>Stepper</Link></li>
						<li><Link href='/navigation/TopBar'>TopBar</Link></li>
						<li><Link href='/structure/Screen'>Screen</Link></li>
						<li><Link href='/structure/Scroll'>Scroll</Link></li>
						<li><Link href='/typography/Heading'>Heading</Link></li>
						<li><Link href='/typography/Text'>Text</Link></li>
						<li><Link href='/icons/Icon'>Icons</Link></li>
					</ul>
				</Scroll>
			</nav>
		)
	}
}

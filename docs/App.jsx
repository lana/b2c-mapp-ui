import { Component } from 'preact'
import { MDXProvider } from '@mdx-js/react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css'
import { Router } from 'preact-router'
import { createHashHistory } from 'history'
import * as Icons from '@lana/b2c-mapp-ui-assets'

import Navigation from 'docs/Navigation'
import CSS from './App.css'
import '@lana/b2c-mapp-ui-assets/dist/index.css'

import {
	Button,
	ButtonWrapped,
	Forward,
	Dialog,
	BottomDialog,
	Field,
	PhoneField,
	BankAccountField,
	Selector,
	SelectionList,
	ActionItem,
	ContentItem,
	ListItem,
	Spinner,
	Stepper,
	Screen,
	Scroll,
	Heading,
	Text,
	TextField,
	TextFieldRule,
	TopBar,
} from 'src'

import IndexDoc from '../README.md'
import ButtonDoc from 'src/buttons/Button/Readme.md'
import ButtonWrappedDoc from 'src/buttons/ButtonWrapped/Readme.md'
import ForwardDoc from 'src/buttons/Forward/Readme.md'
import DialogDoc from 'src/overlays/Dialog/Readme.md'
import BottomDialogDoc from 'src/overlays/BottomDialog/Readme.md'
import FieldDoc from 'src/forms/Field/Readme.md'
import PhoneFieldDoc from 'src/forms/PhoneField/Readme.md'
import BankAccountFieldDoc from 'src/forms/BankAccountField/Readme.md'
import SelectorDoc from 'src/forms/Selector/Readme.md'
import SelectionListDoc from 'src/forms/SelectionList/Readme.md'
import ActionItemDoc from 'src/lists/ActionItem/Readme.md'
import ContentItemDoc from 'src/lists/ContentItem/Readme.md'
import ListItemDoc from 'src/lists/ListItem/Readme.md'
import SpinnerDoc from 'src/loading/Spinner/Readme.md'
import StepperDoc from 'src/navigation/Stepper/Readme.md'
import ScreenDoc from 'src/structure/Screen/Readme.md'
import ScrollDoc from 'src/structure/Scroll/Readme.md'
import HeadingDoc from 'src/typography/Heading/Readme.md'
import TextDoc from 'src/typography/Text/Readme.md'
import TextFieldDoc from 'src/forms/TextField/Readme.md'
import TextFieldRuleDoc from 'src/forms/TextFieldRule/Readme.md'
import TopBarDoc from 'src/navigation/TopBar/Readme.md'
import IconDoc from 'docs/icons/Readme.md'

export default class App extends Component {
	aliases = {
		index: '/',
		button: '/buttons/Button',
		buttonWrapped: '/buttons/ButtonWrapped',
		forward: '/buttons/Forward',
		dialog: '/overlays/Dialog',
		bottomDialog: '/overlays/BottomDialog',
		field: '/forms/Field',
		phoneField: '/forms/PhoneField',
		bankAccountField: '/forms/BankAccountField',
		selector: '/forms/Selector',
		selectionList: '/forms/SelectionList',
		textField: '/forms/TextField',
		textFieldRule: '/forms/TextFieldRule',
		actionItem: '/lists/ActionItem',
		contentItem: '/lists/ContentItem',
		listItem: '/lists/ListItem',
		spinner: '/loading/Spinner',
		stepper: '/navigation/Stepper',
		topbar: '/navigation/TopBar',
		screen: '/structure/Screen',
		scroll: '/structure/Scroll',
		heading: '/typography/Heading',
		text: '/typography/Text',
		icons: '/icons/Icon',
	}

	components = {
		h1: props => <h1 className={CSS.h1}>{props.children}</h1>,
		h2: props => <h2 className={CSS.h2}>{props.children}</h2>,
		h3: props => <h3 className={CSS.h3}>{props.children}</h3>,
		p: props => <p className={CSS.p}>{props.children}</p>,
		ul: props => <ul className={CSS.ul}>{props.children}</ul>,
		ol: props => <ol className={CSS.ol}>{props.children}</ol>,
		li: props => <li className={CSS.li}>{props.children}</li>,
		table: props => <table className={CSS.table}>{props.children}</table>,
		a: props => (
			<a href={props.href} className={CSS.a}>
				{props.children}
			</a>
		),
		code: props => {
			let scope = {
				Button,
				ButtonWrapped,
				Forward,
				Dialog,
				BottomDialog,
				Field,
				PhoneField,
				Selector,
				ActionItem,
				ContentItem,
				ListItem,
				Spinner,
				Stepper,
				Screen,
				Scroll,
				Heading,
				Text,
				TopBar,
				SelectionList,
				BankAccountField,
				TextField,
				TextFieldRule,
				...Icons,
			}

			if (props.metaString == null) {
				return (
					<LiveProvider code={props.children} scope={scope}>
						<LiveEditor />
						<LiveError />
						<LivePreview />
					</LiveProvider>
				)
			} else if (props.metaString == 'readonly') {
				return <div>{props.children}</div>
			}
		},
	}

	componentDidMount() {}

	render() {
		return (
			<MDXProvider components={this.components}>
				<div className="doc-app">
					<Navigation />
					<Router history={createHashHistory()}>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.index}>
							<Scroll>
								<IndexDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.button}>
							<Scroll>
								<ButtonDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.buttonWrapped}>
							<Scroll>
								<ButtonWrappedDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.forward}>
							<Scroll>
								<ForwardDoc />
							</Scroll>
						</Screen>
						<Screen
							className="doc-screen doc-full-viewport"
							displayMode="overlay"
							path={this.aliases.dialog}
						>
							<Scroll>
								<DialogDoc />
							</Scroll>
						</Screen>
						<Screen
							className="doc-screen doc-full-viewport"
							displayMode="overlay"
							path={this.aliases.bottomDialog}
						>
							<Scroll>
								<BottomDialogDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.field}>
							<Scroll>
								<FieldDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.phoneField}>
							<Scroll>
								<PhoneFieldDoc />
							</Scroll>
						</Screen>
						<Screen
							className="doc-screen"
							displayMode="overlay"
							path={this.aliases.bankAccountField}
						>
							<Scroll>
								<BankAccountFieldDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.selector}>
							<Scroll>
								<SelectorDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.selectionList}>
							<Scroll>
								<SelectionListDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.textField}>
							<Scroll>
								<TextFieldDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.textFieldRule}>
							<Scroll>
								<TextFieldRuleDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.actionItem}>
							<Scroll>
								<ActionItemDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.contentItem}>
							<Scroll>
								<ContentItemDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.listItem}>
							<Scroll>
								<ListItemDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.spinner}>
							<Scroll>
								<SpinnerDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.stepper}>
							<Scroll>
								<StepperDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.topbar}>
							<Scroll>
								<TopBarDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.icons}>
							<Scroll>
								<IconDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.screen}>
							<Scroll>
								<ScreenDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.scroll}>
							<Scroll>
								<ScrollDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.heading}>
							<Scroll>
								<HeadingDoc />
							</Scroll>
						</Screen>
						<Screen className="doc-screen" displayMode="overlay" path={this.aliases.text}>
							<Scroll>
								<TextDoc />
							</Scroll>
						</Screen>
					</Router>
				</div>
			</MDXProvider>
		)
	}
}

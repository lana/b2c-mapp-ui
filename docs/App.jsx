import { Component } from 'preact'
import { useState } from 'preact/hooks'
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
	WrappedButton,
	CopyToClipboard,
	FigureCard,
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
	DateField,
	CopyableList,
} from 'src'

import IndexDoc from '../README.md'
import ButtonDoc from 'src/buttons/Button/Readme.md'
import WrappedButtonDoc from 'src/buttons/WrappedButton/Readme.md'
import CopyToClipboardDoc from 'src/buttons/CopyToClipboard/Readme.md'
import FigureCardDoc from 'src/buttons/FigureCard/Readme.md'
import ForwardDoc from 'src/buttons/Forward/Readme.md'
import DialogDoc from 'src/overlays/Dialog/Readme.md'
import BottomDialogDoc from 'src/overlays/BottomDialog/Readme.md'
import FieldDoc from 'src/forms/Field/Readme.md'
import PhoneFieldDoc from 'src/forms/PhoneField/Readme.md'
import BankAccountFieldDoc from 'src/forms/BankAccountField/Readme.md'
import DateFieldDoc from 'src/forms/DateField/Readme.md'
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
import CopyableListDoc from 'src/lists/CopyableList/Readme.md'
import IconDoc from 'docs/icons/Readme.md'

const App = () => {

	const aliases = [
		{ path: '/', doc: <IndexDoc /> },

		{ path: '/buttons/Button', doc: <ButtonDoc />},
		{
			path: '/buttons/WrappedButton',
			doc: <WrappedButtonDoc />
		},
		{
			path: '/buttons/CopyToClipboard',
			doc: <CopyToClipboardDoc />
		},
		{ path: '/buttons/FigureCard', doc: <FigureCardDoc />},
		{ path: '/buttons/Forward', doc: <ForwardDoc />},
		{ path: '/overlays/Dialog', doc: <DialogDoc />},
		{
			path: '/overlays/BottomDialog',
			doc: <BottomDialogDoc />},
		{ path: '/forms/Field', doc: <FieldDoc />},
		{ path: '/forms/PhoneField', doc: <PhoneFieldDoc /> },
		{
			path: '/forms/BankAccountField',
			doc: <BankAccountFieldDoc />,
		},
		{ path: '/forms/DateField', doc: <DateFieldDoc />},
		{ path: '/forms/Selector', doc: <SelectorDoc /> },
		{
			path: '/forms/SelectionList',
			doc: <SelectionListDoc />
		},
		{ path: '/forms/TextField', doc: <TextFieldDoc /> },
		{
			path: '/forms/TextFieldRule',
			doc: <TextFieldRuleDoc />
		},
		{ path: '/lists/ActionItem', doc: <ActionItemDoc />},
		{ path: '/lists/ContentItem', doc: <ContentItemDoc />},
		{ path: '/lists/ListItem', doc: <ListItemDoc />},
		{ path: '/lists/CopyableList', doc: <CopyableListDoc />},
		{ path: '/loading/Spinner', doc: <SpinnerDoc />},
		{ path: '/navigation/Stepper', doc: <StepperDoc />},
		{ path: '/navigation/TopBar', doc: <TopBarDoc />},
		{ path: '/structure/Screen', doc: <ScreenDoc />},
		{ path: '/structure/Scroll', doc: <ScrollDoc />},
		{ path: '/typography/Heading', doc: <HeadingDoc /> },
		{ path: '/typography/Text', doc: <TextDoc />},
		{ path: '/icons/Icon', doc: <IconDoc /> },
	]

	const components = {
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
				WrappedButton,
				CopyToClipboard,
				FigureCard,
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
				DateField,
				CopyableList,
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



	return (
		<MDXProvider components={components}>
			<div className="doc-app">
				<Navigation/>
				<Router history={createHashHistory()}>
					{aliases.map(({ path, doc }) => (
						<Screen className="doc-screen" displayMode="overlay" path={path}>
							<Scroll>{doc}</Scroll>
						</Screen>
					))}
				</Router>
			</div>
		</MDXProvider>
	)
}

export default App;
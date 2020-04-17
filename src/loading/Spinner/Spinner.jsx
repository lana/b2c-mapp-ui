import { Component } from 'preact'

import CSS from './styles.css'
import { MopSpinnerIcon } from '@lana/b2c-mapp-ui-assets'

export default class Spinner extends Component {
	render() {
		return <MopSpinnerIcon className={CSS.spinner} />
	}
}
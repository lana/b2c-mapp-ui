import { Component } from 'preact'

import CSS from './Spinner.css'
import { MopSpinnerIcon } from '../../Icons'

export default class Spinner extends Component {
	render() {
		return <MopSpinnerIcon className={CSS.spinner} />
	}
}

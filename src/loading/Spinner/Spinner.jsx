import { Component } from "preact"

import CSS from './Spinner.css'
import Icon from '../../icons/ic_mop_spinner'

export default class Spinner extends Component {
	render() {
		return (
			<Icon className={CSS.spinner} />
		)
	}
}

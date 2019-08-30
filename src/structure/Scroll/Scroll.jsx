import { Component } from "preact"

import CSS from './Scroll.css'

export default class Scroll extends Component {

	node = null

	componentDidMount() {
		this.scrollTo(this.props.position)
	}

	scrollTo(position) {
		if (typeof position == 'number') this.node.scrollTop = position
	}

	render() {
		return <section {...this.props} ref={elem => this.node = elem || null} className={`${CSS.scroll} ${this.props.className || ''}`}>{this.props.children}</section>
	}

}

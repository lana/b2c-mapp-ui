import { Component } from 'preact'

import CSS from './styles.css'

export default class Scroll extends Component {
	node = null

	componentDidMount() {
		this.scrollTo(this.props.position)
	}

	scrollTo(position) {
		if (typeof position == 'number') { this.node.scrollTop = position; }
	}

	render() {
		return (
			<section
				{...this.props}
				data-testid={this.props.dataTestId}
				ref={elem => (this.node = elem || null)}
				className={`${CSS.scroll} ${this.props.className || ''}`}
			>
				<div> {this.props.children} </div>
			</section>
		)
	}
}

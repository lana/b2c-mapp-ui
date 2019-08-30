import { Component } from 'preact'

import Heading from '../../typography/Heading'
import Text from '../../typography/Text'
import Scroll from '../../structure/Scroll'
import CSS from './Dialog.css'

export default class Dialog extends Component {

	onDismiss(e) {
		if (this.props.onDismiss) this.props.onDismiss(e)
	}

	onConfirm(e) {
		if (this.props.onConfirm) this.props.onConfirm(e)
	}

	render() {
		let visibleClass = (this.props.visible) ? CSS.visible : ''
		return (
			<section className={`${CSS.overlay} ${visibleClass}`}>
				<div className={CSS.dialog}>
					{ this.props.title && <Heading type='title2' className={CSS.title}>{this.props.title}</Heading> }
					{
						(this.props.description)
						? <Text color='concrete' className={CSS.description}>{this.props.description}</Text>
						: <Scroll className={CSS.content}>{this.props.children}</Scroll>
					}

					<div className={CSS.actions}>
						{ this.props.dismiss && <button onClick={e => this.onDismiss(e)} className={`${CSS.action} ${CSS.dismiss}`}>{this.props.dismiss}</button> }
						{ this.props.confirm && <button onClick={e => this.onConfirm(e)} className={CSS.action}>{this.props.confirm}</button> }
					</div>
				</div>
			</section>
		)
	}
}

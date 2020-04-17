import { Component } from 'preact'

import Heading from '../../typography/Heading/Heading'
import Text from '../../typography/Text/Text'
import Scroll from '../../structure/Scroll/Scroll'
import CSS from './styles.css'

export default class Dialog extends Component {
	onDismiss(e) {
		if (this.props.onDismiss) this.props.onDismiss(e)
	}

	onConfirm(e) {
		if (this.props.onConfirm) this.props.onConfirm(e)
	}

	render() {
		let visibleClass = this.props.visible ? CSS.visible : ''
		const testId = this.props.dataTestId || 'dialog'

		return (
			<section data-testid={testId} className={`${CSS.overlay} ${visibleClass}`}>
				<div data-testid={`${testId}-content`} className={CSS.dialog}>
					{this.props.title && (
						<Heading type="title2" className={CSS.title}>
							{this.props.title}
						</Heading>
					)}
					{this.props.description ? (
						<Text dataTestId={`${testId}-description`} color="concrete" className={CSS.description}>
							{this.props.description}
						</Text>
					) : (
						<Scroll className={CSS.content}>{this.props.children}</Scroll>
					)}

					<div data-testid={`${testId}-actions`} className={CSS.actions}>
						{this.props.dismiss && (
							<button
								data-testid={`${testId}-action-dismiss`}
								onClick={e => this.onDismiss(e)}
								className={`${CSS.action} ${CSS.dismiss}`}
							>
								{this.props.dismiss}
							</button>
						)}
						{this.props.confirm && (
							<button
								data-testid={`${testId}-action-confirm`}
								onClick={e => this.onConfirm(e)}
								className={CSS.action}
							>
								{this.props.confirm}
							</button>
						)}
					</div>
				</div>
			</section>
		)
	}
}

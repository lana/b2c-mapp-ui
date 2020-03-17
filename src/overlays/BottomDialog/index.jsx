import { Component } from 'preact'

import Wrapper from '../../structure/Wrapper'
import Heading from '../../typography/Heading'
import Text from '../../typography/Text'
import Scroll from '../../structure/Scroll'
import Button from '../../buttons/Button'
import CSS from './styles.css'

export default class Dialog extends Component {
	onDismiss() {
		if (this.props.onDismiss) this.props.onDismiss()
	}

	onSecondary(e) {
		if (this.props.onSecondary) this.props.onSecondary(e)
	}

	onConfirm(e) {
		if (this.props.onConfirm) this.props.onConfirm(e)
	}

	render(props) {
		let visibleClass = props.visible ? CSS.visible : ''
		const testId = props.dataTestId || 'bottom-dialog'

		return (
			<section data-testid={testId} className={`${CSS.overlay} ${visibleClass}`}>
				<div
					data-testid={`${testId}-dismiss`}
					className={CSS.dim}
					onClick={() => this.onDismiss()}
				/>
				<div data-testid={`${testId}-content`} className={CSS.dialog}>
					<Wrapper>
						{props.title && <Heading>{props.title}</Heading>}
						{props.description ? (
							<Text dataTestId={`${testId}-description`} className={CSS.description}>
								{props.description}
							</Text>
						) : (
							<Scroll className={CSS.content}>{props.children}</Scroll>
						)}
					</Wrapper>
					<div data-testid={`${testId}-actions`} className={CSS.actions}>
						{props.confirm && (
							<Button
								dataTestId={`${testId}-action-confirm`}
								className={CSS.confirm}
								onClick={e => this.onConfirm(e)}
								loading={props.loading ? props.loading : false}
							>
								{props.confirm}
							</Button>
						)}
						{props.secondary && (
							<Button
								dataTestId={`${testId}-action-secondary`}
								type="secondary"
								className={CSS.dismiss}
								onClick={e => this.onSecondary(e)}
							>
								{props.secondary}
							</Button>
						)}
					</div>
				</div>
			</section>
		)
	}
}

import { Component } from 'preact'

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
		let visibleClass = (props.visible) ? CSS.visible : ''
		return (
			<section className={`${CSS.overlay} ${visibleClass}`}>
				<div className={CSS.dim} onClick={() => this.onDismiss()}/>
				<div className={CSS.dialog}>
					{ props.title && <Text className={CSS.title}>{props.title}</Text> }
					{
						(props.description)
						? <Text color='concrete' className={CSS.description}>{props.description}</Text>
						: <Scroll className={CSS.content}>{props.children}</Scroll>
					}
					<div className={CSS.actions}>
						{ props.confirm &&
							<Button
								className={CSS.confirm}
								onClick={e => this.onConfirm(e)}
								loading={props.loading ? props.loading : false}>{props.confirm}
							</Button>
						}
						{ props.secondary &&
							<div onClick={e => this.onSecondary(e)} className={CSS.dismiss}>
								<Text type='callout' color='dblue'>
									{props.secondary}
								</Text>
							</div>
						}
					</div>
				</div>
			</section>
		)
	}
}

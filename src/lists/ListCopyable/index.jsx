import Text from '../../typography/Text'
import Heading from '../../typography/Heading'
import withCopyBehavior from '../../hocs/withCopyBehaviour'
import CSS from './ListCopyable.css'

const CopyLink = withCopyBehavior(props => {
	const { dataTestId, text } = this.props

	return (
		<a data-testid={`${dataTestId}-copy-link`} href={text} {...props} role="button">
			copiar
		</a>
	)
})

export default ({ options, title, children, dataTestId }) => {
	const testId = dataTestId || 'list-copyable'

	return (
		<section data-testid={`${testId}-section`} className={CSS.section}>
			<Heading className={CSS.title} type="callout">
				{title}
			</Heading>
			<ul data-testid={`${testId}-list`}>
				{options.map(({ icon, text, itemTitle, hide = false, single }, i) => {
					return (
						<li data-testid={`${testId}-element`} key={i} className={CSS.items}>
							<div className={CSS.item_icon} data-testid={`${testId}-element-icon`}>
								{icon}
							</div>
							<div className={CSS.itemText} data-testid={`${testId}-element-content`}>
								{itemTitle && (
									<Text dataTestId={`${testId}-element-title`} type="txt-medium" color="black-500">
										{itemTitle}
									</Text>
								)}
								<Text
									dataTestId={`${testId}-element-text`}
									className={CSS.item_text}
									type="callout"
									color="black-700"
								>
									{text}
								</Text>
							</div>
							{!hide && (
								<Text
									dataTestId={`${testId}-element-copy-text`}
									className={CSS.item_copy}
									type="callout"
								>
									<CopyLink dataTestId={testId} value={text} single={single} />
									<input data-testid={`${testId}-copy-input`} type="hidden" value={text} />
								</Text>
							)}
						</li>
					)
				})}
			</ul>
			{children}
		</section>
	)
}

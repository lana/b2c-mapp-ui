import Text from '../../typography/Text'
import Heading from '../../typography/Heading'
import withCopyBehavior from '../../hocs/withCopyBehaviour'
import CSS from './ListCopyable.css'

const CopyLink = withCopyBehavior(props => (
	<a href={props.text} {...props} role="button">
		copiar
	</a>
))

export default ({ options, title, children }) => (
	<section className={CSS.section}>
		<Heading className={CSS.title} type="callout">
			{title}
		</Heading>
		<ul>
			{options.map(({ icon, text, itemTitle, hide = false, single }, i) => {
				return (
					<li key={i} className={CSS.items}>
						<div className={CSS.item_icon}>{icon}</div>
						<div className={CSS.itemText}>
							{itemTitle && (
								<Text type="txt-medium" color="black-500">
									{itemTitle}
								</Text>
							)}
							<Text className={CSS.item_text} type="callout" color="black-700">
								{text}
							</Text>
						</div>
						{!hide && (
							<Text className={CSS.item_copy} type="callout">
								<CopyLink value={text} single={single} />
								<input type="hidden" value={text} />
							</Text>
						)}
					</li>
				)
			})}
		</ul>
		{children}
	</section>
)

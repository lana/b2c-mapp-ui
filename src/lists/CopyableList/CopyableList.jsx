import PropTypes from 'prop-types';

import Text from '../../typography/Text/Text';
import Heading from '../../typography/Heading/Heading';
import CopyToClipboard from '../../buttons/CopyToClipboard/CopyToClipboard';
import CSS from './styles.css';

const CopyableList = ({ options, title, children, dataTestId }) => (
	<section className={CSS.section}>
		<Heading className={CSS.title} type="callout">
			{title}
		</Heading>
		<ul data-testid={`${dataTestId}-list`}>
			{options.map(({ icon, text, itemTitle, hide = false }, index) => {
				return (
					<li data-testid={`${dataTestId}-element`} key={index} className={CSS.items}>
						<div className={CSS.item_icon} data-testid={`${dataTestId}-element-icon`}>
							{icon}
						</div>
						<div className={CSS.itemText} data-testid={`${dataTestId}-element-content`}>
							{itemTitle && (
								<Text dataTestId={`${dataTestId}-element-title`} type="txt-medium" color="black-500">
									{itemTitle}
								</Text>
							)}
							<Text dataTestId={`${dataTestId}-element-text`} className={CSS.item_text} type="callout" color="black-700">
								{text}
							</Text>
						</div>
						{!hide && (
							<Text dataTestId={`${dataTestId}-element-copy-text`} className={CSS.item_copy} type="callout">
								<CopyToClipboard dataTestId={`${dataTestId}-copy-to-clipboard-button`} toCopyValue={text} />
							</Text>
						)}
					</li>
				);
			})}
		</ul>
		{children}
	</section>
);

CopyableList.defaultProps = {
	children: '',
	dataTestId: 'list-copyable',
};

CopyableList.propTypes = {
	children: PropTypes.node,
	dataTestId: PropTypes.String,
	title: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.node,
			text: PropTypes.string,
			itemTitle: PropTypes.string,
			hide: PropTypes.bool,
		}).isRequired,
	).isRequired,
};

export default CopyableList;

import CSS from './styles.css';
import Heading from '../../typography/Heading/Heading';
import Text from '../../typography/Text/Text';
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets';

export default ({ mediaColor, media, meta, onClick, className, title, dataTestId }) => {
	const testId = dataTestId || 'content-item';
	const mediaColorClass = mediaColor ? CSS[mediaColor] : '';
	const mediaIcon = media ? (
		<div data-testid={`${testId}-media-icon`} className={`${CSS.media} ${mediaColorClass}`}>
			{media}
		</div>
	) : (
		''
	);
	const metaInfo = meta ? <Text dataTestId={`${testId}-meta-text`}>{meta}</Text> : '';

	const forwardIcon = onClick ? <ForwardIcon data-testid={`${testId}-forward-icon`} color="inactive" className={CSS.icon} /> : null;

	return (
		<li data-testid={testId} onClick={onClick ? e => onClick(e) : false} className={`${CSS.item} ${className || ''}`}>
			{mediaIcon}
			<div data-testid={`${testId}-heading`} className={CSS.body}>
				<Heading type="txt-medium">{title}</Heading>
				{metaInfo}
			</div>
			{forwardIcon}
		</li>
	);
};

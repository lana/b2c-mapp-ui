import { useState, useEffect } from 'preact/hooks';
import PropTypes from 'prop-types';

import CSS from './styles.css';
import copyToClipboard from '../../utils/copy-to-clipboard';

const CopyToClipboardButton = ({ dataTestId, toCopyValue, toCopyLabel, copyingLabel, copiedLabel, toCopyClass, copyingClass, copiedClass, copyingFeedbackTime, copiedFeedbackTime }) => {
	
	const [copyStatusLabel, setCopyStatusLabel] = useState('');
	const [copyStatusClass, setCopyStatusClass] = useState('');

	useEffect(() => {
		setCopyStatusLabel(toCopyLabel);
		setCopyStatusClass(toCopyClass);
	}, []);

	const afterCopy = () => {
		setCopyStatusLabel(copiedLabel);
		setCopyStatusClass(copiedClass);
		setTimeout(() => {
			setCopyStatusLabel(toCopyLabel);
			setCopyStatusClass(toCopyClass);
		}, copiedFeedbackTime);
	};

	const handleOnClick = textToCopy => {
		setCopyStatusLabel(copyingLabel);
		setCopyStatusClass(copyingClass);
		setTimeout(() => {
			copyToClipboard(textToCopy, afterCopy);
		}, copyingFeedbackTime);
	};

	return (
		<button data-testid={`${dataTestId}-button`} className={`${CSS.clipboard} ${CSS[copyStatusClass]}`} onClick={() => { handleOnClick(toCopyValue); }}>
			{copyStatusLabel}
		</button>
	);
};

CopyToClipboardButton.defaultProps = {
	dataTestId: 'copy-to-clipboard',
	toCopyLabel: 'Copiar',
	copyingLabel: 'Copiando...',
	copiedLabel: 'Copiado!',
	toCopyClass: 'tocopy',
	copyingClass: 'copying',
	copiedClass: 'copied',
	copyingFeedbackTime: 1000,
	copiedFeedbackTime: 2500,
};

CopyToClipboardButton.propTypes = {
	dataTestId: PropTypes.string,
	toCopyValue: PropTypes.string.isRequired,
	toCopyLabel: PropTypes.string,
	copyingLabel: PropTypes.string,
	copiedLabel: PropTypes.string,
	toCopyClass: PropTypes.string,
	copyingClass: PropTypes.string,
	copiedClass: PropTypes.string,
	copyingFeedbackTime: PropTypes.number,
	copiedFeedbackTime: PropTypes.number,
};

export default CopyToClipboardButton;

import { useState } from 'preact/hooks';
import PropTypes from 'prop-types';

import CSS from './styles.css';
import copyToClipboard from '../../utils/copy-to-clipboard';

const CopyToClipboard = ({ dataTestId, toCopyValue, toCopyLabel, copyingLabel, copiedLabel, toCopyClass, copyingClass, copiedClass, copyingFeedbackTime, copiedFeedbackTime }) => {
	const copyStatusLookup = {
		toCopy: { 
		  class: toCopyClass,
		  label: toCopyLabel,
		},
		copied: {
		  class: copiedClass,
		  label: copiedLabel,
		},
		copying: {
		  class: copyingClass,
		  label: copyingLabel,
		},
	  };

	const copyTimeout = copyingFeedbackTime;
	const copiedTimeout = copiedFeedbackTime;

	const [copyStatus, setCopyStatus] = useState(copyStatusLookup.toCopy);

	const afterCopy = () => {
		setCopyStatus(copyStatusLookup.copied);
		setTimeout(() => {
			setCopyStatus(copyStatusLookup.toCopy);
		}, copiedTimeout);
	};

	const handleOnClick = textToCopy => {
		setCopyStatus(copyStatusLookup.copying);
		setTimeout(() => {
			copyToClipboard(textToCopy, afterCopy);
		}, copyTimeout);
	};

	return (
		<button data-testid={`${dataTestId}-button`} className={`${CSS.clipboard} ${CSS[copyStatus.class]}`} onClick={() => handleOnClick(toCopyValue)}>
			{copyStatus.label}
		</button>
	);
};

CopyToClipboard.defaultProps = {
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

CopyToClipboard.propTypes = {
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

export default CopyToClipboard;

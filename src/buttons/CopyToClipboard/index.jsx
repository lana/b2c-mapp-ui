import { useState } from 'preact/hooks'
import PropTypes from 'prop-types'
import CSS from './styles.css'

import copyToClipboard from './../../utils/copy-to-clipboard'

const CopyToClipboard = ({
	dataTestId,
	valueToCopy,
	labelToCopy,
	labelCopying,
	labelCopied,
	classToCopy,
	classCopying,
	classCopied,
	copyingFeedbackTime,
	copiedFeedbackTime,
}) => {
	const TO_COPY = { class: classToCopy, label: labelToCopy }
	const COPYING = { class: classCopying, label: labelCopying }
	const COPIED = { class: classCopied, label: labelCopied }

	const COPY_TIMEOUT = copyingFeedbackTime
	const COPIED_TIMEOUT = copiedFeedbackTime

	const [copyStatus, setCopyStatus] = useState(TO_COPY)

	const afterCopy = () => {
		setCopyStatus(COPIED)
		setTimeout(() => {
			setCopyStatus(TO_COPY)
		}, COPIED_TIMEOUT)
	}

	const handleOnClick = textToCopy => {
		setCopyStatus(COPYING)
		setTimeout(() => {
			copyToClipboard(textToCopy, afterCopy)
		}, COPY_TIMEOUT)
	}

	return (
		<button
			data-testid={`${dataTestId}-button`}
			className={`${CSS.toclipboard} ${CSS[copyStatus.class]}`}
			onClick={() => handleOnClick(valueToCopy)}
		>
			{copyStatus.label}
		</button>
	)
}

export default CopyToClipboard

CopyToClipboard.defaultProps = {
	dataTestId: 'copy-to-clipboard',
	labelToCopy: 'Copiar',
	labelCopying: 'Copiando...',
	labelCopied: 'Copiado!',
	classNameToCopy: 'tocopy',
	classNameCopying: 'copying',
	classNameCopied: 'copied',
	copyingFeedbackTime: 1000,
	copiedFeedbackTime: 2500,
}

CopyToClipboard.propTypes = {
	dataTestId: PropTypes.string,
	valueToCopy: PropTypes.string.isRequired,
	labelToCopy: PropTypes.string,
	labelCopying: PropTypes.string,
	labelCopied: PropTypes.string,
	classNameToCopy: PropTypes.string,
	classNameCopying: PropTypes.string,
	classNameCopied: PropTypes.string,
	copyingFeedbackTime: PropTypes.number,
	copiedFeedbackTime: PropTypes.number,
}

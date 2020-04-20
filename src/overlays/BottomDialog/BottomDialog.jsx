import { useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';

import Wrapper from '../../structure/Wrapper/Wrapper';
import Heading from '../../typography/Heading/Heading';
import Text from '../../typography/Text/Text';
import Scroll from '../../structure/Scroll/Scroll';
import Button from '../../buttons/Button/Button';
import CSS from './styles.css';

const BottomDialog = ({ dataTestId, confirm, secondary, loading, visible, title, description, children, onDismiss, onConfirm, onSecondary }) => {
	const handleOnDismiss = event => {
		if (onDismiss) { onDismiss(); }
	};

	const handleOnSecondary = event => {
		if (onSecondary) { onSecondary(event); }
	};

	const handleOnConfirm = event => {
		if (onConfirm) { onConfirm(event); }
	};

	return useMemo(() => {
		const visibleClass = visible ? CSS.visible : '';

		return (
			<section data-testid={`${dataTestId}-section`} className={`${CSS.overlay} ${visibleClass}`}>
				<div data-testid={`${dataTestId}-dismiss`} className={CSS.dim} onClick={handleOnDismiss} />
				<div data-testid={`${dataTestId}-content`} className={CSS.dialog}>
					<Wrapper>
						{title && <Heading dataTestId={`${dataTestId}-title`}>{title}</Heading>}
						{description ? (
							<Text dataTestId={`${dataTestId}-description`} className={CSS.description}>
								{description}
							</Text>
						) : (
							<Scroll dataTestId={`${dataTestId}-children`} className={CSS.content}>
								{children}
							</Scroll>
						)}
					</Wrapper>
					<div data-testid={`${dataTestId}-actions`} className={CSS.actions}>
						{confirm && (
							<Button dataTestId={`${dataTestId}-action-confirm`} className={CSS.confirm} onClick={handleOnConfirm} loading={loading}>
								{confirm}
							</Button>
						)}
						{secondary && (
							<Button dataTestId={`${dataTestId}-action-secondary`} type="secondary" className={CSS.dismiss} onClick={handleOnSecondary}>
								{secondary}
							</Button>
						)}
					</div>
				</div>
			</section>
		);
	}, [loading, visible, children, confirm, secondary, title, description]);
};

BottomDialog.defaultProps = {
	dataTestId: 'bottom-dialog',
	loading: false,
	visible: false,
	title: '',
	description: '',
	children: null,
	onDismiss: null,
	onConfirm: null,
	onSecondary: null,
	confirm: null,
	secondary: null,
};

BottomDialog.propTypes = {
	dataTestId: PropTypes.string,
	confirm: PropTypes.string,
	secondary: PropTypes.string,
	loading: PropTypes.bool,
	visible: PropTypes.bool,
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.node,
	onDismiss: PropTypes.func,
	onConfirm: PropTypes.func,
	onSecondary: PropTypes.func,
};

export default BottomDialog;

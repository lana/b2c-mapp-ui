import { useMemo } from 'preact/hooks';
import PropTypes from 'prop-types';

import Heading from '../Heading/Heading';
import TextParagraph from '../TextParagraph/TextParagraph';
import ScrollWrapper from '../ScrollWrapper/ScrollWrapper';
import CSS from './styles.css';

const ModalConfirmationDialog = ({ dataTestId, confirm, dismiss, visible, title, description, children, onDismiss, onConfirm }) => {
  const handleOnDismiss = (event) => { if (onDismiss) { onDismiss(event); } };
  const handleOnConfirm = (event) => { if (onConfirm) { onConfirm(event); } };
  const result = useMemo(() => {
    const visibleClass = (visible) ? CSS.visible : '';
    return (
      <section data-testid={`${dataTestId}-section`} className={`${CSS.overlay} ${visibleClass}`}>
        <div data-testid={`${dataTestId}-content`} className={CSS.dialog}>
          {(title) && <Heading dataTestId={`${dataTestId}-title`} type="title2" className={CSS.title}>{title}</Heading>}
          {(description) ? (
            <TextParagraph dataTestId={`${dataTestId}-description`} color="concrete" className={CSS.description}>{description}</TextParagraph>
          ) : (
            <ScrollWrapper dataTestId={`${dataTestId}-children`} className={CSS.content}>{children}</ScrollWrapper>
          )}
          <div data-testid={`${dataTestId}-actions`} className={CSS.actions}>
            {(dismiss) && (
              <button
                data-testid={`${dataTestId}-action-dismiss-button`}
                onClick={handleOnDismiss}
                className={`${CSS.action} ${CSS.dismiss}`}
              >
                {dismiss}
              </button>
            )}
            {confirm && (
              <button
                data-testid={`${dataTestId}-action-confirm-button`}
                onClick={handleOnConfirm}
                className={CSS.action}
              >
                {confirm}
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }, [visible, title, description, dismiss, children, confirm]);
  return result;
};

ModalConfirmationDialog.defaultProps = {
  dataTestId: 'dialog',
  visible: false,
  title: '',
  description: '',
  children: null,
  onDismiss: null,
  onConfirm: null,
  confirm: null,
  dismiss: null,
};

ModalConfirmationDialog.propTypes = {
  dataTestId: PropTypes.string,
  confirm: PropTypes.string,
  dismiss: PropTypes.string,
  visible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  onDismiss: PropTypes.func,
  onConfirm: PropTypes.func,
};

export default ModalConfirmationDialog;

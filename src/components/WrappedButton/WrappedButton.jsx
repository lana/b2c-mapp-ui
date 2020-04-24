import PropTypes from 'prop-types';

import CSS from './styles.css';
import Button from '../Button/Button';

const WrappedButton = ({ dataTestId, id, href, onClick, type, loading, children, className }) => (
  <section data-testid={`${dataTestId}-wrapper`} className={`${CSS.wrapper} ${className}`}>
    <Button dataTestId={dataTestId} id={id} href={href} onClick={onClick} type={type} loading={loading}>
      {children}
    </Button>
  </section>
);

WrappedButton.defaultProps = {
  dataTestId: 'button-wrapped',
  href: null,
  id: null,
  loading: false,
  className: '',
  type: null,
};

WrappedButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default WrappedButton;

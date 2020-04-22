import PropTypes from 'prop-types';
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets';

import Button from '../Button/Button';
import CSS from './styles.css';

const ForwardButton = ({ children, className, dataTestId, href, id, loading, onClick, type }) => (
  <section data-testid={`${dataTestId}-section`} className={`${CSS.wrapper} ${className}`}>
    <Button dataTestId={dataTestId} id={id} href={href} onClick={onClick} type={type} loading={loading}>
      <ForwardIcon color="black-100" />
      {children}
    </Button>
  </section>
);

ForwardButton.defaultProps = {
  className: '',
  dataTestId: 'forward',
  href: null,
  id: null,
  loading: false,
  type: null,
  children: '',
};

ForwardButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default ForwardButton;

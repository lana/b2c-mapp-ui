import PropTypes from 'prop-types';

import '../Theme/Theme';
import CSS from './styles.css';

const TextParagraph = ({ type, color, weight, className, dataTestId, children }) => {
  const typeClassName = (CSS[type] || '');
  const colorClassName = (CSS[color] || '');
  const weightClassName = (CSS[weight] || '');
  return (
    <p data-testid={dataTestId} className={`${CSS.txt} ${typeClassName} ${colorClassName} ${weightClassName} ${className}`}>
      {children}
    </p>
  );
};

TextParagraph.defaultProps = {
  type: '',
  color: '',
  weight: '',
  className: '',
  dataTestId: 'text',
};

TextParagraph.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TextParagraph;

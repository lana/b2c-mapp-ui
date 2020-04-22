import PropTypes from 'prop-types';

import CSS from './styles.css';

const Wrapper = ({ type, children }) => {
  const classType = (type === 'modal') ? CSS.wrapperModal : CSS.wrapperContent;
  return (
    <div className={`${classType} ${CSS.wrapper}`}>{children}</div>
  );
};

Wrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Wrapper;

import PropTypes from 'prop-types';
import { ForwardIcon } from '@lana/b2c-mapp-ui-assets';

import Heading from '../Heading/Heading';
import TextParagraph from '../TextParagraph/TextParagraph';
import CSS from './styles.css';

const ContentItem = ({ mediaColor, media, meta, onClick, className = '', title, dataTestId }) => {
  const mediaColorClass = (mediaColor) ? CSS[mediaColor] : '';
  const mediaIcon = (media) ? (<div data-testid={`${dataTestId}-media-icon`} className={`${CSS.media} ${mediaColorClass}`}>{media}</div>) : '';
  const metaInfo = (meta) ? <TextParagraph dataTestId={`${dataTestId}-meta-text`}>{meta}</TextParagraph> : '';
  const forwardIcon = (onClick) ? <ForwardIcon data-testid={`${dataTestId}-forward-icon`} color="inactive" className={CSS.icon} /> : null;
  const invokeOnClickIfPresent = (event) => {
    if (!onClick) { return; }
    onClick(event);
  };
  return (
    <li data-testid={dataTestId} onClick={invokeOnClickIfPresent} className={`${CSS.item} ${className}`}>
      {mediaIcon}
      <div data-testid={`${dataTestId}-heading`} className={CSS.body}>
        <Heading type="txt-medium">{title}</Heading>
        {metaInfo}
      </div>
      {forwardIcon}
    </li>
  );
};

ContentItem.defaultProps = {
  mediaColor: false,
  media: null,
  meta: null,
  onClick: () => {},
  className: '',
  title: '',
  dataTestId: 'content-item',
};

ContentItem.propTypes = {
  mediaColor: PropTypes.bool,
  media: PropTypes.node,
  meta: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default ContentItem;

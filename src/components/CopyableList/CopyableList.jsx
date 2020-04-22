import PropTypes from 'prop-types';

import TextParagraph from '../TextParagraph/TextParagraph';
import Heading from '../Heading/Heading';
import CopyToClipboardButton from '../CopyToClipboardButton/CopyToClipboardButton';
import CSS from './styles.css';

const CopyableList = ({ options, title, children, dataTestId }) => (
  <section className={CSS.section}>
    <Heading className={CSS.title} type="callout">{title}</Heading>
    <ul data-testid={`${dataTestId}-list`}>
      {options.map(({ icon, text, itemTitle, hide = false }, index) => (
        <li data-testid={`${dataTestId}-element`} key={index} className={CSS.items}>
          <div className={CSS.item_icon} data-testid={`${dataTestId}-element-icon`}>{icon}</div>
          <div className={CSS.itemText} data-testid={`${dataTestId}-element-content`}>
            {itemTitle && <TextParagraph dataTestId={`${dataTestId}-element-title`} type="txt-medium" color="black-500">{itemTitle}</TextParagraph>}
            <TextParagraph dataTestId={`${dataTestId}-element-text`} className={CSS.item_text} type="callout" color="black-700">{text}</TextParagraph>
          </div>
          {!hide && (
            <TextParagraph dataTestId={`${dataTestId}-element-copy-text`} className={CSS.item_copy} type="callout">
              <CopyToClipboardButton dataTestId={`${dataTestId}-copy-to-clipboard-button`} toCopyValue={text} />
            </TextParagraph>
          )}
        </li>
      ))}
    </ul>
    {children}
  </section>
);

CopyableList.defaultProps = {
  children: '',
  dataTestId: 'list-copyable',
};

CopyableList.propTypes = {
  children: PropTypes.node,
  dataTestId: PropTypes.string,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      text: PropTypes.string,
      itemTitle: PropTypes.string,
      hide: PropTypes.bool,
    }).isRequired,
  ).isRequired,
};

export default CopyableList;

// TODO NO-CLASS: Refactor this file to stop using `class`

import { Component } from 'preact';
import PropTypes from 'prop-types';

import CSS from './styles.css';

class ScrollWrapper extends Component { // eslint-disable-line fp/no-class
  constructor(props) {
    super(props);
    this.node = null;
  }

  componentDidMount() {
    this.scrollTo(this.props.position);
  }

  scrollTo(position) {
    if (typeof position === 'number') { this.node.scrollTop = position; }
  }

  render() {
    return (
      <section
        {...this.props}
        data-testid={this.props.dataTestId}
        ref={(element) => { this.node = (element || null); }}
        className={`${CSS.scroll} ${this.props.className || ''}`}
      >
        <div> {this.props.children} </div>
      </section>
    );
  }
}

ScrollWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  position: PropTypes.number,
};

export default ScrollWrapper;

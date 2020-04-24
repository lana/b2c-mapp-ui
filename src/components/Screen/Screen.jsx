// TODO NO-CLASS: Refactor this file to stop using `class`

import { Component } from 'preact';
import PropTypes from 'prop-types';

import '../Theme/Theme';
import CSS from './styles.css';

// WARNING: Refactoring this component to a functional one, breaks some things like timeouts in CopyToClipBoardButton. The state updates are not being triggered somehow due to converting this component to a functional one. (Needs investigation)
class Screen extends Component { // eslint-disable-line fp/no-class
  constructor(props) {
    super(props);
    this.lastClick = {
      x: 0,
      y: 0,
    };
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  recordClick = ({ clientX, clientY }) => {
    this.lastClick.x = clientX;
    this.lastClick.y = clientY;
  }

  onKeyboardFocus = (screenHeight, viewport) => {
    if (this.props.onKeyboardFocus) { this.props.onKeyboardFocus(screenHeight, viewport, this.lastClick); }
  }

  onKeyboardBlur = (screenHeight, viewport) => {
    if (this.props.onKeyboardBlur) { this.props.onKeyboardBlur(screenHeight, viewport, this.lastClick); }
  }

  onWindowResize = ({ target: { innerHeight } }) => {
    if (this.viewport.height > innerHeight) {
      this.onKeyboardFocus(innerHeight, this.viewport);
      return;
    }
    this.onKeyboardBlur(innerHeight, this.viewport);
  };

  render() {
    const result = (
      <section className={`${CSS.screen} ${this.props.className || ''}`} onClick={this.recordClick}>
        {this.props.children}
      </section>
    );
    return result;
  }
}

Screen.propTypes = {
  onKeyboardBlur: PropTypes.func,
  onKeyboardFocus: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Screen;

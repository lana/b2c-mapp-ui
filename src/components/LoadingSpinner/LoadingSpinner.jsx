// TODO NO-CLASS: Refactor this file to stop using `class`

import { Component } from 'preact';
import { MopSpinnerIcon } from '@lana/b2c-mapp-ui-assets';

import CSS from './styles.css';

class LoadingSpinner extends Component { // eslint-disable-line fp/no-class, react/prefer-stateless-function
  render() {
    return <MopSpinnerIcon className={CSS.spinner} />;
  }
}

export default LoadingSpinner;

import { render } from 'preact';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';

const root = document.body;

const app = <App />;

render(app, root);

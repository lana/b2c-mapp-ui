import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.document.execCommand = () => {};
global.window = dom.window;

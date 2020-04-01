import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.document.execCommand = (comm) => {}
global.window = dom.window
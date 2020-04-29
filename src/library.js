// TODO JASON: Follow this guide to enable building as a lib https://cli.vuejs.org/guide/build-targets.html#library

// TODO JASON: Update this file to export all the library components

// TODO JASON: Remove everything that's not needed and then move these bits over into the b2c-mapp-ui repo

import ActionItem from './components/ActionItem/ActionItem.vue';
import TextParagraph from './components/TextParagraph/TextParagraph.vue';
import './styles/normalize.scss';

const libraryComponents = {
  ActionItem,
  TextParagraph,
};

export default libraryComponents;

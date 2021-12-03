import { mount } from '@vue/test-utils';

import TextParagraph from './TextParagraph.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('TextPargraph unit test:', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  it('Should apply allowed given size as a classname', async () => {
    const wrapper = mount(TextParagraph, { slots: { default: 'inner text' }, props: { size: 'xsmall' } });
    await wrapper.vm.$nextTick();
    const sizeApplied = wrapper.find('p').element.className.includes('txt-xsmall');
    expect(sizeApplied).toBeTruthy();
  });

  it('Should apply allowed given color as a classname', async () => {
    const wrapper = mount(TextParagraph, { slots: { default: 'inner text' }, props: { color: 'brown-700' } });
    await wrapper.vm.$nextTick();
    const sizeApplied = wrapper.find('p').element.className.includes('brown-700');
    expect(sizeApplied).toBeTruthy();
  });

  it('Should apply allowed given weight as a classname', async () => {
    const wrapper = mount(TextParagraph, { slots: { default: 'inner text' }, props: { weight: 'bold' } });
    await wrapper.vm.$nextTick();
    const sizeApplied = wrapper.find('p').element.className.includes('bold');
    expect(sizeApplied).toBeTruthy();
  });
});

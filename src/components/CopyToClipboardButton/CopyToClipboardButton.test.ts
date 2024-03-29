import { mount } from '@vue/test-utils';

import CopyToClipboardButton from './CopyToClipboardButton.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('CopyToClipboardButton unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  jest.mock('../../lib/copyToClipboard', () => ({
    copyTextToClipboard: jest.fn(),
  }));

  it('Should emit a click event when its clicked', async () => {
    jest.useFakeTimers();
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue' } });
    const button = wrapper.find('button[data-testid="copy-to-clipboard-button"]');
    await button.trigger('click');
    jest.runAllTimers();
    await wrapper.vm.$nextTick();
    const clickIsEmitted = wrapper.emitted().click;
    expect(clickIsEmitted).toBeTruthy();
  });

  it('Should display given toCopyLabel by default status', () => {
    const givenLabel = 'copiar';
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue', toCopyLabel: givenLabel } });
    const givenLabelIsShown = wrapper.find('button[data-testid="copy-to-clipboard-button"]').text().includes(givenLabel);
    expect(givenLabelIsShown).toBeTruthy();
  });

  it('Should add given toCopyClass by default status', () => {
    const givenClass = 'my-custom-class';
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue', toCopyClass: givenClass } });
    const givenClassIsApplied = wrapper.find('button[data-testid="copy-to-clipboard-button"]').classes().includes(givenClass);
    expect(givenClassIsApplied).toBeTruthy();
  });

  it('Should apply given copyingLabel when is copying', async () => {
    const givenLabel = 'copiando';
    jest.useFakeTimers();
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue', copyingLabel: givenLabel } });
    const button = wrapper.find('button[data-testid="copy-to-clipboard-button"]');
    await button.trigger('click');
    await wrapper.vm.$forceUpdate();
    jest.advanceTimersByTime(1000);
    const givenLabelIsShown = button.text().includes(givenLabel);
    expect(givenLabelIsShown).toBeTruthy();
  });

  it('Should not emit a click event when is copying and its clicked', async () => {
    const givenLabel = 'copiando';
    jest.useFakeTimers();
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue', copyingLabel: givenLabel } });
    const button = wrapper.find('button[data-testid="copy-to-clipboard-button"]');
    await button.trigger('click');
    await wrapper.vm.$forceUpdate();
    await button.trigger('click');
    jest.advanceTimersByTime(1000);
    const onlyOneClickEmitted = wrapper.emitted('click')?.length === 1;
    expect(onlyOneClickEmitted).toBeTruthy();
  });

  it('Should apply given copyingClass when is copying', async () => {
    const givenClass = 'my-custom-class';
    jest.useFakeTimers();
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue', copyingClass: givenClass } });
    const button = wrapper.find('button[data-testid="copy-to-clipboard-button"]');
    await button.trigger('click');
    await wrapper.vm.$forceUpdate();
    jest.advanceTimersByTime(1000);
    const givenClassIsShown = button.classes().includes(givenClass);
    expect(givenClassIsShown).toBeTruthy();
  });

  it('Should show given copiedLabel when copy is done', async () => {
    const givenLabel = 'copiar';
    jest.useFakeTimers();
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue', copiedLabel: givenLabel } });
    const button = wrapper.find('button[data-testid="copy-to-clipboard-button"]');
    await button.trigger('click');
    jest.advanceTimersByTime(1500);
    await wrapper.vm.$nextTick();
    const givenLabelIsShown = button.text().includes(givenLabel);
    expect(givenLabelIsShown).toBeTruthy();
  });

  it('Should apply given copiedClass when copy is done', async () => {
    const givenClass = 'my-custom-class';
    jest.useFakeTimers();
    const wrapper = mount(CopyToClipboardButton, { props: { toCopyValue: 'myValue', copiedClass: givenClass } });
    const button = wrapper.find('button[data-testid="copy-to-clipboard-button"]');
    await button.trigger('click');
    jest.advanceTimersByTime(1500);
    await wrapper.vm.$nextTick();
    const givenClassIsApplied = button.classes().includes(givenClass);
    expect(givenClassIsApplied).toBeTruthy();
  });
});

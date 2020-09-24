import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';

import Screen from './Screen.vue';
import { silenceDeprecationErrorsAndInnerComponentWarnings } from '../../lib/testUtils';

describe('Screen unit test', () => {
  beforeAll(() => {
    silenceDeprecationErrorsAndInnerComponentWarnings(jest);
  });

  it('Should show given slot', () => {
    const { queryAllByTestId } = render(Screen, { slots: { default: '<h1 data-testid="screen-content">Content</h1>' } });
    const slotFound = queryAllByTestId('screen-content').length;
    expect(slotFound).toBeTruthy();
  });

  it('Should emit keyboardBlur when window is resized', () => {
    const { emitted } = render(Screen, { slots: { default: '<h1 data-testid="screen-content">Content</h1>' } });
    window.dispatchEvent(new Event('resize'));
    const keyboardBlurEvent = emitted().keyboardBlur;
    expect(keyboardBlurEvent).toBeTruthy();
  });

  it('Should emit current screenHeight & lastClick values as payload for keyboardBlur event when window is resized', () => {
    const { emitted } = render(Screen, { slots: { default: '<h1 data-testid="screen-content">Content</h1>' } });
    window.dispatchEvent(new Event('resize'));
    const keyboardBlurEvent = emitted().keyboardBlur[0][0];
    const hasScreenHeight = keyboardBlurEvent.screenHeight;
    const hasLastClick = keyboardBlurEvent.lastClick;
    const hasViewport = keyboardBlurEvent.viewport;
    const rightEventPayload = hasScreenHeight && hasLastClick && hasViewport;
    expect(rightEventPayload).toBeTruthy();
  });

  it('Should record last click when its clicked', () => {
    const wrapper = mount(Screen, { slots: { default: '<h1 data-testid="screen-content">Content</h1>' } });
    const section = wrapper.find('section');
    section.trigger('click', { clientX: 200, clientY: 200 });
    const dataFromLastClick = wrapper.vm.$data.lastClick;
    const savedLastClickX = dataFromLastClick.x === 200;
    const savedLastClickY = dataFromLastClick.y === 200;
    const savedLastClick = savedLastClickX && savedLastClickY;
    expect(savedLastClick).toBeTruthy();
  });

  it('Should send recorded last clicks as payload for emitted event when window is resized', () => {
    const wrapper = mount(Screen, { slots: { default: '<h1 data-testid="screen-content">Content</h1>' } });
    const section = wrapper.find('section');
    section.trigger('click', { clientX: 200, clientY: 200 });
    window.dispatchEvent(new Event('resize'));
    const emittedLastClickX = wrapper.emitted().keyboardBlur[0][0].lastClick.x;
    const emittedLastClickY = wrapper.emitted().keyboardBlur[0][0].lastClick.y;
    const emittedRecordedValues = (emittedLastClickX === 200) && (emittedLastClickY === 200);
    expect(emittedRecordedValues).toBeTruthy();
  });

  it('Should emit keyboardFocus event when viewport.height is great than given screenHight on resize', async () => {
    window.innerHeight = 900;
    const wrapper = mount(Screen, { slots: { default: '<h1 data-testid="screen-content">Content</h1>' } });
    await wrapper.vm.$nextTick();
    window.innerHeight = 200;
    const event = new UIEvent('resize');
    window.dispatchEvent(event);
    const keyboardFocusEvent = wrapper.emitted().keyboardFocus;
    expect(keyboardFocusEvent).toBeTruthy();
  });
});

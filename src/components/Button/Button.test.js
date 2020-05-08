import { render, fireEvent } from '@testing-library/vue';

import Button from './Button.vue';
import ActionItem from '../ActionItem/ActionItem';

describe('UI/buttons/Button', () => {
  beforeAll(() => {
    // Silence deprecation error logs from vue-test-utils. Remove this in future versions of this library:
    console.error = jest.fn(); // eslint-disable-line no-console
  });

  const defaultButtonProps = {
    type: 'secondary',
    loading: false,
    href: null,
  };

  const defaultLinkProps = {
    type: 'primary',
    loading: false,
    href: '#',
  };

  describe('Button behavior', () => {

    it('Should apply given class', () => {
      const { getByTestId } = render(Button, { propsData: { ...defaultButtonProps, class: 'my-class' } });
      const itsHasMyClass = getByTestId('button-button').className.includes('my-class');
      expect(itsHasMyClass).toBeTruthy();
    });

    it('Should render a button if href is not provided', () => {
      const { getByTestId } = render(Button, { propsData: { ...defaultButtonProps } });
      const itsAButton = getByTestId('button-button');
      expect(itsAButton).toBeTruthy();
    });

    it('Should NOT render an anchor if href is not provided', () => {
      const { queryAllByTestId } = render(Button, { propsData: { ...defaultButtonProps } });
      const itsNotALink = !queryAllByTestId('button-link').length > 0;
      expect(itsNotALink).toBeTruthy();
    });

    it('Should add "secondary" className if "secondary" type is given', () => {
      const { getByTestId } = render(Button, { propsData: { type: 'secondary', loading: false } });
      const hasSecondaryClassName = getByTestId('button-button').className.includes('secondary');
      expect(hasSecondaryClassName).toBeTruthy();
    });

    it('Should add "disabled" className if "disabled" type is given', () => {
      const { getByTestId } = render(Button, { propsData: { type: 'disabled', loading: false } });
      const hasDisabledClassName = getByTestId('button-button').className.includes('disabled');
      expect(hasDisabledClassName).toBeTruthy();
    });

    it('Should add "dismiss" className if "dismiss" type is given', () => {
      const { getByTestId } = render(Button, { propsData: { type: 'dismiss', loading: false } });
      const hasDismissClassName = getByTestId('button-button').className.includes('dismiss');
      expect(hasDismissClassName).toBeTruthy();
    });

    it('Should add "dismiss" className if "dismiss" type is given', () => {
      const { getByTestId } = render(Button, { propsData: { type: 'not-valid', loading: false, class: 'class' } });
      const hasNotWrongClassName = !getByTestId('button-button').className.includes('not-valid');
      expect(hasNotWrongClassName).toBeTruthy();
    });

    it('Should emit a click event when its clicked', () => {
      const { getByTestId, emitted } = render(Button, { propsData: { type: 'primary', loading: false } });
      const button = getByTestId('button-button');
      fireEvent.click(button);
      const clicked = emitted().click;
      expect(clicked).toBeTruthy();
    });
  });

  describe('Loading behavior', () => {
    it('Should show button-children if is NOT loading', () => {
      const { getByTestId } = render(Button, { slots: { default: '<div>Children</div>' }, propsData: { type: 'primary', loading: false } });
      const childrenExists = getByTestId('button-children');
      expect(childrenExists).toBeTruthy();
    });

    it('Should NOT show button-loading if is NOT loading', () => {
      const { queryAllByTestId } = render(Button, { propsData: { type: 'primary', loading: false } });
      const withoutLoadingContent = queryAllByTestId('button-loading').length === 0;
      expect(withoutLoadingContent).toBeTruthy();
    });

    it('Should NOT add loadingClass if given loading is false', () => {
      const { getByTestId } = render(Button, { propsData: { type: 'primary', loading: false } });
      const loadingClassNotApplied = !getByTestId('button-button').className.includes('loading');
      expect(loadingClassNotApplied).toBeTruthy();
    });

    it('Should add loading class if given loading is true', () => {
      const { getByTestId } = render(Button, { propsData: { type: 'primary', loading: true } });
      const loadingClassApplied = getByTestId('button-button').className.includes('loading');
      expect(loadingClassApplied).toBeTruthy();
    });

    it('Should NOT show button-children if is loading', () => {
      const { queryAllByTestId } = render(Button, { slots: { default: '<div>Children</div>' }, propsData: { type: 'primary', loading: true } });
      const childrenNotExsist = queryAllByTestId('button-children').length === 0;
      expect(childrenNotExsist).toBeTruthy();
    });

    it('Should show loading content if given loading is true', () => {
      const { getByTestId } = render(Button, { propsData: { type: 'primary', loading: true } });
      const loadingContentExist = getByTestId('button-loading');
      expect(loadingContentExist).toBeTruthy();
    });
  });

  describe('Link behavior', () => {
    it('Should render a link if href is provided', () => {
      const { getByTestId } = render(Button, { propsData: { ...defaultLinkProps } });
      const itsALink = getByTestId('button-link');
      expect(itsALink).toBeTruthy();
    });

    it('Should NOT render a button if href is provided', () => {
      const { queryAllByTestId } = render(Button, { propsData: { ...defaultLinkProps } });
      const itsNotAButton = queryAllByTestId('button-button').length === 0;
      expect(itsNotAButton).toBeTruthy();
    });

    it('Should call onClick when is clicked', () => {
      const { getByTestId, emitted } = render(Button, { propsData: { ...defaultLinkProps } });
      const link = getByTestId('button-link');
      fireEvent.click(link);
      const clicked = emitted().click;
      expect(clicked).toBeTruthy();
    });
  });
});
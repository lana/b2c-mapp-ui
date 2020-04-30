import { shallowMount } from '@vue/test-utils';

import ActionItem from './ActionItem.vue';

describe('UI/lists/ActionItem', () => {
  const defaultClassname = 'CLASSNAME';
  const defaultProps = {
    dataTestId: 'action-item',
    class: defaultClassname,
    color: 'blue',
    highlight: true,
    title: 'TITLE',
  };

  // TODO: Update the following lines to work with Vue and then uncomment them
  // const withoutMediaContentProps = {
  //   dataTestId: 'action-item',
  //   class: 'CLASSNAME',
  //   color: 'RED',
  //   title: 'TITLE',
  // };

  it('Should apply given className class', () => {
    const wrapper = shallowMount(ActionItem, { propsData: { ...defaultProps } });
    expect(wrapper.classes()).toContain(defaultClassname);
  });

  // TODO: Uncomment the below tests after updating them to work with Vue
  //
  // it('Should apply mediaColorClassname if mediaContent and mediaColor prop is given', () => {
  //   const { getByTestId } = render(<ActionItem {...defaultProps} />);
  //   const mediaColorClassApplied = getByTestId('action-item-mediacolor').className.includes('RED');
  //   expect(mediaColorClassApplied).toBeTruthy();
  // });
  // it('Should NOT include action-item-mediacolor item if mediaContent is NOT given', () => {
  //   const { queryAllByTestId } = render(<ActionItem {...withoutMediaContentProps} />);
  //   const mediaColorNotExist = queryAllByTestId('action-item-mediacolor').length === 0;
  //   expect(mediaColorNotExist).toBeTruthy();
  // });
  //
  // it('Should apply given highlight class to inner text', () => {
  //   const { getByTestId } = render(<ActionItem {...defaultProps} />);
  //   const highlightApplied = getByTestId('action-item-highlight').className.includes('highlight');
  //   expect(highlightApplied).toBe(true);
  // });
  //
  // it('Should NOT apply given highlight class to action-item-highlight if highlight is NOT given', () => {
  //   const { getByTestId } = render(<ActionItem {...defaultProps} highlight={false} />);
  //   const highlightNotApplied = !getByTestId('action-item-highlight').className.includes('highlight');
  //   expect(highlightNotApplied).toBeTruthy();
  // });
  //
  // it('should trigger components onClick', () => {
  //   const mockClick = jest.fn();
  //   const { getByTestId } = render(<ActionItem {...defaultProps} onClick={mockClick} />);
  //   const element = getByTestId('action-item');
  //   fireEvent.click(element);
  //   expect(mockClick).toHaveBeenCalled();
  // });
});

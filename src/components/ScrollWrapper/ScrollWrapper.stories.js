import ScrollWrapper from './ScrollWrapper.vue';
import Screen from '../Screen/Screen.vue';

const ScrollWrapperStories = {
  component: ScrollWrapper,
  title: 'ScrollWrapper',
};

const defaultExample = () => ({ // TODO: Update this story so that we can actually demonstrate scrolling within the wrapper
  components: {
    ScrollWrapper,
    Screen,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ScrollWrapper:</strong>&nbsp;A wrapper that provides vertical scrolling.</h2>
      <p style="margin-top: 10px;">Commonly used as a direct child of the Screen component.</p>
      <hr>
      <div style="margin-top: 20px;">
        <Screen>
          <ScrollWrapper>
            Something to be scrolled
          </ScrollWrapper>
        </Screen>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default ScrollWrapperStories;

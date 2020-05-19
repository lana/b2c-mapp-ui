import Wrapper from './Wrapper.vue';

const WrapperStories = {
  component: Wrapper,
  title: 'Components/Wrapper',
};

const defaultExample = () => ({
  components: {
    Wrapper,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Wrapper:</strong>&nbsp;Description TBD</h2> <!-- TODO: Add a better description for this component-->
      <hr>
      <div style="margin-top: 20px;">
        <Wrapper modal>
          Example wrapped content (modal style)
        </Wrapper>
      </div>
      <div style="margin-top: 20px;">
        <Wrapper>
          Example wrapped content
        </Wrapper>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default WrapperStories;

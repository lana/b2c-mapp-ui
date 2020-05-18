import LoadingSpinner from './LoadingSpinner.vue';

const LoadingSpinnerStories = {
  component: LoadingSpinner,
  title: 'Components/LoadingSpinner',
};

const defaultExample = () => ({
  components: {
    LoadingSpinner,
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>LoadingSpinner:</strong>&nbsp;A loading spinner to inform users about a pending task.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; align-items: center; width: 100%; margin-top: 20px;">
        <LoadingSpinner/>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default LoadingSpinnerStories;

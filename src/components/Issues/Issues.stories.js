const IssuesStories = {
  title: 'How to file issues',
  args: {},
  argTypes: {},
};

const howToFileIssues = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  setup() { return { ...args }; },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2>How to file issues for this UI Library</h2>
      <hr>
      <p>
      Please file any issues/suggestions here 👉 <a target="_blank" href="https://github.com/lana/b2c-mapp-ui/issues">b2c-mapp-ui issues</a>
      </p>
    </div>
  `,
});

export {
  howToFileIssues,
};

export default IssuesStories;

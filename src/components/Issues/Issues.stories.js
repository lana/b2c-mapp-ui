const TopBarStories = {
  title: 'How to file issues',
};

const defaultExample = () => ({
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2>How to file issues</h2>
      <hr>
      <p>
      Please file any issues/suggestions here 👉 <a target="_blank" href="https://github.com/lana/b2c-mapp-ui/issues">b2c-mapp-ui issues</a>
      </p>
      <div style="margin-top: 20px; display: flex; flex-direction: column;">
        <template v-for="(icon, index) in availableIconNames">
          <div style="margin: 10px; display: flex; flex-direction: row; justify-content: space-between">
            <label>{{ icon }}</label>
            <component :is="icon"
                       :key="'icon-' + index"
            />
          </div>
        </template>
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default TopBarStories;

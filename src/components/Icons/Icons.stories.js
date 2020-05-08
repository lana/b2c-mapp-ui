import AllIcons from '@lana/b2c-mapp-ui-assets/dist/index';

const TopBarStories = {
  title: 'Icons',
};

const defaultExample = () => ({
  components: {
    ...AllIcons,
  },
  data() {
    return {
      availableIconNames: Object.keys(AllIcons),
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>Icons <small>({{ availableIconNames.length }})</small>:</strong>&nbsp;A gallery of all the available icons.</h2>
      <p style="margin-top: 10px;"><em>NOTE</em>: the icons are maintained in the following repo: <a target="_blank" href="https://github.com/lana/b2c-mapp-ui-assets/"><code>@lana/b2c-mapp-ui-assets</code></a></p>
      <hr>
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

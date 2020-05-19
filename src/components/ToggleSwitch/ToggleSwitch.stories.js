import ToggleSwitch from './ToggleSwitch.vue';

const ToggleSwitchStories = {
  component: ToggleSwitch,
  title: 'Components/ToggleSwitch',
};

const defaultExample = () => ({
  components: {
    ToggleSwitch,
  },
  data() {
    return {
      isChecked: false,
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>ToggleSwitch:</strong>&nbsp;A simple toggle switch input.</h2>
      <hr>
      <div style="margin-top: 20px; width: 100px">
        <label>
          Enabled:
          <ToggleSwitch v-model="isChecked"/>
        </label>
      </div>
      <div style="margin-top: 20px; width: 100px">
        <label>
          Disabled:
          <ToggleSwitch v-model="isChecked" disabled/>
        </label>
      </div>
      <div style="margin-top: 20px;">
        Bound value: {{ isChecked }}
      </div>
    </div>
  `,
});

export {
  defaultExample,
};

export default ToggleSwitchStories;

import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select, number } from '@storybook/addon-knobs';

import StorybookMobileDeviceSimulator from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator.vue';
import { availableDevices } from '../StorybookMobileDeviceSimulator/StorybookMobileDeviceSimulator';
import PhoneNumberField from './PhoneNumberField.vue';
import { availableCountryCodes } from './PhoneNumberField';

const defaultCountryCode = 'MX';

const PhoneNumberFieldStories = {
  component: PhoneNumberField,
  title: 'Components/PhoneNumberField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    PhoneNumberField,
    StorybookMobileDeviceSimulator,
  },
  props: {
    device: {
      default: select('Simulated Mobile Device', [...availableDevices], availableDevices[0]),
    },
    label: {
      default: text('Label', 'Example Phone Field'),
    },
    errorLabel: {
      default: text('Error Label', ''),
    },
    countryCode: {
      default: select('Country Code', [...availableCountryCodes], defaultCountryCode),
    },
    hideCountryCodeUntilFocus: {
      default: boolean('Hide Country Code until focus?', false),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    readonly: {
      default: boolean('Is Readonly?', false),
    },
    maxLength: {
      default: number('Max Lenth'),
    },
    lengthHint: {
      default: number('Length Hint'),
    },
    lengthHintLabel: {
      default: text('Length Hint Label'),
    },
  },
  data() {
    return {
      value: '',
      isValid: false,
    };
  },
  methods: {
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onInput: action('Changed!'),
  },
  watch: {
    value() {
      this.isValid = this.$refs.field.isPhoneNumberValid();
    },
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>PhoneNumberField:</strong>&nbsp;An international phone-number formatting field.</h2>
      <br>
      <p>To use the PhoneNumberInputField component you need to provide your custom metadata for validating the phones.</p>
      <br>
      <p>
        Metadata can be generated using the command <code>npm run libphonenumber-metadata</code> (using
        <a href="https://github.com/lana/lana-mapp-template" target="_blank">lana-µapp-template</a>).
      </p>
      <br>
      <p>
        Edit the <code>package.json</code> task to supply your custom options.
        <br>
        This approach allows us to have a minimal impact in the final build size when using <code>libphonenumber-js</code>.
      </p>
      <hr>
      <StorybookMobileDeviceSimulator :device="device">
        <PhoneNumberField v-model="value"
                          ref="field"
                          :country-code="countryCode"
                          :hide-country-code-until-focus="hideCountryCodeUntilFocus"
                          :disabled="disabled"
                          :readonly="readonly"
                          :label="label"
                          :error-label="errorLabel"
                          :max-length="maxLength"
                          :length-hint="lengthHint"
                          :length-hint-label="lengthHintLabel"
                          @blur="onBlur"
                          @focus="onFocus"
                          @input="onInput"
        />
        <br>
        <div style="margin: 20px;">
          <div>Bound value: {{ value }}</div>
          <br>
          <div>Is Valid?: {{ isValid }}</div>
        </div>
      </StorybookMobileDeviceSimulator>
    </div>
  `,
});

const countryCodes = () => ({
  components: {
    PhoneNumberField,
  },
  data() {
    return {
      defaultCountryCode,
      availableCountryCodes,
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>PhoneNumberField:</strong>&nbsp;Available Country Codes.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div v-for="(countryCode, index) in availableCountryCodes" style="width: 500px">
          <PhoneNumberField :country-code="countryCode"
                            :label="countryCode + ' Country Code Example'"
          />
        </div>
      </div>
    </div>
  `,
});

const moreExamples = () => ({
  components: {
    PhoneNumberField,
  },
  data() {
    return {
      defaultCountryCode,
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px;">
      <h2><strong>PhoneNumberField:</strong>&nbsp;More examples.</h2>
      <hr>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <p>Default State</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            label="Default State"
          />
        </div>
        <div style="width: 500px">
          <p>With Hidden Country Code (until focused)</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            hide-country-code-until-focus
                            label="With hidden Country Code (until focused)"
          />
        </div>
        <div style="width: 500px">
          <p>With Error</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            value="55 1234 1234"
                            error-label="Invalid phone number"
          />
        </div>
        <div style="width: 500px">
          <p>Disabled</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            disabled
                            label="Disabled Example"
                            value="55 1234 1234"
          />
        </div>
        <div style="width: 500px">
          <p>Readonly</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            readonly
                            label="Readonly"
                            value="55 1234 1234"
          />
        </div>
      </div>
    </div>
  `,
});

export {
  defaultExample,
  moreExamples,
  countryCodes,
};

export default PhoneNumberFieldStories;

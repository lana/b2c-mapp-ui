import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import PhoneNumberField from './PhoneNumberField.vue';
import { availableCountryCodes } from './PhoneNumberField';

const defaultCountryCode = 'MX';

const PhoneNumberFieldStories = {
  component: PhoneNumberField,
  title: 'PhoneNumberField',
  decorators: [withKnobs],
};

const defaultExample = () => ({
  components: {
    PhoneNumberField,
  },
  props: {
    label: {
      default: text('Label', 'Example Text Field'),
    },
    errorLabel: {
      default: text('Error Label', ''),
    },
    countryCode: {
      default: select('Country Code', [...availableCountryCodes], defaultCountryCode),
    },
    hideCountryCode: {
      default: boolean('Hide Country Code?', false),
    },
    disabled: {
      default: boolean('Is Disabled?', false),
    },
    readonly: {
      default: boolean('Is Readonly?', false),
    },
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onBlur: action('Blur!'),
    onFocus: action('Focus!'),
    onInput: action('Changed!'),
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
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 500px">
          <PhoneNumberField v-model="value"
                            :country-code="countryCode"
                            :hide-country-code="hideCountryCode"
                            :disabled="disabled"
                            :readonly="readonly"
                            :label="label"
                            :error-label="errorLabel"
                            @blur="onBlur"
                            @focus="onFocus"
                            @input="onInput"
          />
          <br>
          <div>
            Bound value: {{ value }}
          </div>
        </div>
      </div>
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
          <p>With Hidden Country Code</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            hide-country-code
                            label="With hidden Country Code"
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

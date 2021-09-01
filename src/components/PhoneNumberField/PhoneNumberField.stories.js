import { action } from '@storybook/addon-actions';

import PhoneNumberField from './PhoneNumberField.vue';
import { availableCountryCodes } from './PhoneNumberField';
import { createOptionalDeviceDecorator } from '../../lib/storybookHelpers';

const defaultCountryCode = 'MX';

const deviceDecorator = createOptionalDeviceDecorator('<strong>PhoneNumberField:</strong>&nbsp;An international phone-number formatting field.');

const PhoneNumberFieldStories = {
  component: PhoneNumberField,
  title: 'Components/PhoneNumberField',
  decorators: [deviceDecorator],
  args: {
    ...deviceDecorator.args,
    label: 'Example Phone Field',
    errorLabel: '',
    countryCode: defaultCountryCode,
    hideCountryCodeUntilFocus: false,
    disabled: false,
    readonly: false,
    maxLength: null,
    maxPhoneNumberLength: 10,
    lengthHint: null,
    lengthHintLabel: '',
    helpText: '',
    hideClearButton: false,
  },
  argTypes: {
    ...deviceDecorator.argTypes,
    label: { control: 'text', name: 'Label' },
    errorLabel: { control: 'text', name: 'Error Label' },
    countryCode: { control: 'select', name: 'Country Code', options: [...availableCountryCodes] },
    hideCountryCodeUntilFocus: { control: 'boolean', name: 'Hide Country Code until focus?' },
    disabled: { control: 'boolean', name: 'Is Disabled?' },
    readonly: { control: 'boolean', name: 'Is Readonly?' },
    maxLength: { control: 'number', name: 'Max Lenth' },
    maxPhoneNumberLength: { control: 'number', name: 'Max Phone Number Length' },
    lengthHint: { control: 'number', name: 'Length Hint' },
    lengthHintLabel: { control: 'text', name: 'Length Hint Label' },
    helpText: { control: 'text', name: 'Help Text' },
    hideClearButton: { control: 'boolean', name: 'Hide Clear Button?' },
  },
};

const defaultExample = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    PhoneNumberField,
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
    <div>
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
      <PhoneNumberField v-model="value"
                        ref="field"
                        :country-code="countryCode"
                        :hide-country-code-until-focus="hideCountryCodeUntilFocus"
                        :disabled="disabled"
                        :readonly="readonly"
                        :label="label"
                        :error-label="errorLabel"
                        :max-length="maxLength"
                        :max-phone-number-length="maxPhoneNumberLength"
                        :length-hint="lengthHint"
                        :length-hint-label="lengthHintLabel"
                        :help-text="helpText"
                        :hide-clear-button="hideClearButton"
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
    </div>
  `,
});

const countryCodes = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
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
      <h3>Available Country Codes.</h3>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div v-for="(countryCode, index) in availableCountryCodes" style="width: 500px; margin-bottom: 20px;">
          <PhoneNumberField :country-code="countryCode"
                            :label="countryCode + ' Country Code Example'"
          />
        </div>
      </div>
    </div>
  `,
});
countryCodes.args = {
  device: '',
};
countryCodes.argTypes = {
  device: { table: { disable: true } },
  label: { table: { disable: true } },
  errorLabel: { table: { disable: true } },
  countryCode: { table: { disable: true } },
  hideCountryCodeUntilFocus: { table: { disable: true } },
  disabled: { table: { disable: true } },
  readonly: { table: { disable: true } },
  maxLength: { table: { disable: true } },
  maxPhoneNumberLength: { table: { disable: true } },
  lengthHint: { table: { disable: true } },
  lengthHintLabel: { table: { disable: true } },
  helpText: { table: { disable: true } },
  hideClearButton: { table: { disable: true } },
};
countryCodes.parameters = {
  docs: {
    source: {
      code: availableCountryCodes.map((countryCode) => `<PhoneNumberField country-code="${countryCode}" label="${countryCode} Country Code Example" />`).join('\n'),
    },
  },
};

const moreExamples = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    PhoneNumberField,
  },
  data() {
    return {
      defaultCountryCode,
    };
  },
  template: `
    <div style="margin: 10px 50px 10px 50px; min-heigth: 600px;">
      <h3>More examples</h3>
      <div style="display: flex; flex-direction: column; width: 100%;">
        <div style="width: 600px">
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
          <p>With Help Text</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            label="With Help Text"
                            help-text="Example Help Text"
          />
        </div>
        <div style="width: 500px">
          <p>With Hidden Clear Button</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            label="With hidden clear button"
                            hide-clear-button
          />
        </div>
        <div style="width: 500px">
          <p>With Error</p>
          <PhoneNumberField :country-code="defaultCountryCode"
                            value="55 1234 1234"
                            error-label="Invalid phone number"
                            label="Example"
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
moreExamples.args = {
  device: '',
};
moreExamples.argTypes = {
  device: { table: { disable: true } },
  label: { table: { disable: true } },
  errorLabel: { table: { disable: true } },
  countryCode: { table: { disable: true } },
  hideCountryCodeUntilFocus: { table: { disable: true } },
  disabled: { table: { disable: true } },
  readonly: { table: { disable: true } },
  maxLength: { table: { disable: true } },
  maxPhoneNumberLength: { table: { disable: true } },
  lengthHint: { table: { disable: true } },
  lengthHintLabel: { table: { disable: true } },
  helpText: { table: { disable: true } },
  hideClearButton: { table: { disable: true } },
};
moreExamples.parameters = {
  docs: {
    source: {
      code: `
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
    <p>With Help Text</p>
    <PhoneNumberField :country-code="defaultCountryCode"
                      label="With Help Text"
                      help-text="Example Help Text"
    />
  </div>
  <div style="width: 500px">
    <p>With Hidden Clear Button</p>
    <PhoneNumberField :country-code="defaultCountryCode"
                      label="With hidden clear button"
                      hide-clear-button
    />
  </div>
  <div style="width: 500px">
    <p>With Error</p>
    <PhoneNumberField :country-code="defaultCountryCode"
                      value="55 1234 1234"
                      error-label="Invalid phone number"
                      label="Example"
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
      `,
    },
  },
};

export {
  defaultExample,
  moreExamples,
  countryCodes,
};

export default PhoneNumberFieldStories;

import { CloseBoldIcon } from '@lana/b2c-mapp-ui-assets';

import TextParagraph from '../TextParagraph/TextParagraph.vue';
import { singleDigitRegexp } from '../../lib/regexHelper';

const isValidDigit = (digit) => singleDigitRegexp.test(digit);
const availableTypesLookup = {
  smsCode: 'smsCode',
  cardPin: 'cardPin',
};
const availableTypes = [
  availableTypesLookup.cardPin,
  availableTypesLookup.smsCode,
];
const codeLengthByTypeLookup = {
  [availableTypesLookup.cardPin]: 4,
  [availableTypesLookup.smsCode]: 6,
};

const components = {
  TextParagraph,
  CloseBoldIcon,
};

const props = {
  dataTestId: {
    type: String,
    default: 'code-input',
  },
  type: {
    type: String,
    default: availableTypesLookup.smsCode,
    validator(value) { return (!value || availableTypes.includes(value)); },
  },
  value: {
    type: String,
    default: '',
  },
  id: String,
  disabled: Boolean,
  errorMessage: String,
  errorDescription: String,
};

const data = function () {
  return {
    codeInput: this.value,
  };
};

const computed = {
  codeDigits() {
    const result = this.codeInput.split('');
    return result;
  },
  expectedCodeLength() {
    const result = codeLengthByTypeLookup[this.type];
    return result;
  },
  isCodeReadyToCheck() {
    const result = !!(this.codeDigits && (this.codeDigits.length === this.expectedCodeLength) && this.codeDigits.every(isValidDigit));
    return result;
  },
  isSmsCode() {
    const result = (this.type === availableTypesLookup.smsCode);
    return result;
  },
  isCardPin() {
    const result = (this.type === availableTypesLookup.cardPin);
    return result;
  },
};

const methods = {
  focus() {
    this.$refs.oneTimeCodeField.focus();
  },
  onAnimationEnd() {
    this.$emit('animationend');
  },
  onReadyToCheckChanged() {
    this.$emit('readyToCheckChanged', this.isCodeReadyToCheck);
  },
  emitInputEvent() {
    this.$emit('input', this.codeInput);
  },
};

const watch = {
  codeInput() {
    this.emitInputEvent();
  },
  value() {
    this.codeInput = this.value;
  },
  isCodeReadyToCheck() {
    this.onReadyToCheckChanged();
  },
};

const CodeInputField = {
  components,
  props,
  data,
  computed,
  methods,
  watch,
};

export {
  availableTypes,
  availableTypesLookup,
};

export default CodeInputField;

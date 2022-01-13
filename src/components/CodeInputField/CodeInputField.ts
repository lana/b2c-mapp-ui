import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';
import { CloseBoldIcon } from '@lana/b2c-mapp-ui-assets';

import TextParagraph from '../TextParagraph/TextParagraph.vue';
import { singleDigitRegexp } from '../../lib/regexHelper';

const isValidDigit = (digit: string) => singleDigitRegexp.test(digit);

enum CodeType {
  smsCode = 'smsCode',
  cardPin = 'cardPin',
}
const availableTypesLookup: { [key: string]: CodeType } = {
  smsCode: CodeType.smsCode,
  cardPin: CodeType.cardPin,
};

const availableTypes = [
  availableTypesLookup.cardPin,
  availableTypesLookup.smsCode,
];
const codeLengthByTypeLookup: { [key in CodeType]: number } = {
  [CodeType.cardPin]: 4,
  [CodeType.smsCode]: 6,
};

const CodeInputField = defineComponent({
  name: 'CodeInputField',
  components: {
    TextParagraph,
    CloseBoldIcon,
  },
  props: {
    dataTestId: {
      type: String,
      default: 'code-input',
    },
    type: {
      type: String as PropType<CodeType>,
      default: availableTypesLookup.smsCode,
      validator: (code: CodeType) => availableTypes.includes(code),
    },
    modelValue: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    errorMessage: {
      type: String,
      default: '',
    },
    errorDescription: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
  },
  emits: ['animationend', 'readyToCheckChanged', 'update:modelValue'],
  computed: {
    codeDigits() {
      const result = this.codeInput?.split('');
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
      const result = (this.type === CodeType.smsCode);
      return result;
    },
    isCardPin() {
      const result = (this.type === CodeType.cardPin);
      return result;
    },
  },
  methods: {
    focus() {
      this.oneTimeCodeField.focus();
    },
    onAnimationEnd() {
      this.$emit('animationend');
    },
    onReadyToCheckChanged() {
      this.$emit('readyToCheckChanged', this.isCodeReadyToCheck);
    },
    emitUpdateModelValueEvent() {
      this.$emit('update:modelValue', this.codeInput);
    },
  },
  watch: {
    codeInput() {
      this.emitUpdateModelValueEvent();
    },
    modelValue() {
      this.codeInput = this.modelValue;
    },
    isCodeReadyToCheck() {
      this.onReadyToCheckChanged();
    },
  },
  setup(props) {
    const oneTimeCodeField = ref();
    const codeInput = ref(props.modelValue);
    return { oneTimeCodeField, codeInput };
  },
});

export type {
  CodeType,
};

export {
  availableTypes,
  availableTypesLookup,
};

export default CodeInputField;

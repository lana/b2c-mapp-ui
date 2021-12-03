import { copyTextToClipboard } from '../../lib/copyToClipboard';

const copyStatesLookup = {
  toCopy: 'toCopy',
  copying: 'copying',
  copied: 'copied',
};

const props = {
  dataTestId: {
    type: String,
    default: 'copy-to-clipboard',
  },
  valueToCopy: {
    type: String,
    required: true,
  },
  toCopyLabel: {
    type: String,
    default: 'Copiar',
  },
  copyingLabel: {
    type: String,
    default: 'Copiando...',
  },
  copiedLabel: {
    type: String,
    default: 'Copiado!',
  },
  toCopyClass: {
    type: String,
    default: 'tocopy',
  },
  copyingClass: {
    type: String,
    default: 'copying',
  },
  copiedClass: {
    type: String,
    default: 'copied',
  },
  copyingFeedbackDelay: {
    type: Number,
    default: 1000,
  },
  copiedFeedbackDelay: {
    type: Number,
    default: 2500,
  },
  disabled: Boolean,
  id: String,
  name: String,
};

const emits = ['click'];

const data = function () {
  return {
    currentCopyState: copyStatesLookup.toCopy,
  };
};

const computed = {
  copyStatusTextAndClass() {
    switch (this.currentCopyState) {
      case (copyStatesLookup.copying): return { text: this.copyingLabel, class: this.copyingClass };
      case (copyStatesLookup.copied): return { text: this.copiedLabel, class: this.copiedClass };
      default:
      case (copyStatesLookup.toCopy): return { text: this.toCopyLabel, class: this.toCopyClass };
    }
  },
  copyStatusText() {
    const { text: result } = this.copyStatusTextAndClass;
    return result;
  },
  copyStatusClass() {
    const { class: result } = this.copyStatusTextAndClass;
    return result;
  },
};

const methods = {
  resetCopyState() {
    this.currentCopyState = copyStatesLookup.toCopy;
  },
  updateTextAfterCopying() {
    this.currentCopyState = copyStatesLookup.copied;
    setTimeout(this.resetCopyState, this.copiedFeedbackDelay);
  },
  copyValueToClipBoard() {
    copyTextToClipboard(this.valueToCopy);
    this.updateTextAfterCopying();
  },
  onClick(event) {
    if (this.currentCopyState === copyStatesLookup.copying) { return; }
    this.currentCopyState = copyStatesLookup.copying;
    setTimeout(this.copyValueToClipBoard, this.copyingFeedbackDelay);
    this.$emit('click', event);
  },
};

const name = 'CopyToClipboardButton';

const CopyToClipboardButton = {
  name,
  props,
  emits,
  data,
  computed,
  methods,
};

export default CopyToClipboardButton;

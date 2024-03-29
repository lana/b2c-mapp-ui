import { defineComponent } from 'vue';

import { copyTextToClipboard } from '../../lib/copyToClipboard';

const copyStatesLookup = {
  toCopy: 'toCopy',
  copying: 'copying',
  copied: 'copied',
};

const CopyToClipboardButton = defineComponent({
  name: 'CopyToClipboardButton',
  props: {
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
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
  data() {
    return {
      currentCopyState: copyStatesLookup.toCopy,
    };
  },
  computed: {
    copyStatusTextAndClass() {
      switch (this.currentCopyState) {
        case (copyStatesLookup.copying): return { text: this.copyingLabel, class: this.copyingClass };
        case (copyStatesLookup.copied): return { text: this.copiedLabel, class: this.copiedClass };
        case (copyStatesLookup.toCopy):
        default: return { text: this.toCopyLabel, class: this.toCopyClass };
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
  },
  methods: {
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
    onClick(event: Event) {
      if (this.currentCopyState === copyStatesLookup.copying) { return; }
      this.currentCopyState = copyStatesLookup.copying;
      setTimeout(this.copyValueToClipBoard, this.copyingFeedbackDelay);
      this.$emit('click', event);
    },
  },
});

export default CopyToClipboardButton;

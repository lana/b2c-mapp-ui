<template>
  <div data-testid="wrapper">
    <ConfirmationToastDialog v-model="isShowing"
                             title="title"
                             confirm-button-text="confirmButtonText"
                             dismiss-button-text="dismissButtonText"
    />
    <span data-testid="open-modal" @click="openModal">Click Me</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import ConfirmationToastDialog from '../ConfirmationToastDialog.vue';

export default defineComponent({
  name: 'ConfirmationToastDialogWrapper',
  components: {
    ConfirmationToastDialog,
  },
  methods: {
    openModal() {
      this.isShowing = true;
    },
  },
  setup() {
    const isShowing = ref(false);
    return {
      isShowing,
    };
  },
});

</script>

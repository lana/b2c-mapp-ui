<template>
  <div data-testid="wrapper">
    <ConfirmationModalDialog v-model="isShowing"
                             title="title"
                             description="description"
                             confirm-button-text="confirmButtonText"
                             dismiss-button-text="dismissButtonText"
    />
    <span data-testid="open-modal" @click="openModal">Click Me</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import ConfirmationModalDialog from '../ConfirmationModalDialog.vue';

export default defineComponent({
  name: 'ConfirmationModalDialogWrapper',
  components: {
    ConfirmationModalDialog,
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

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
<script>
import ConfirmationModalDialog from '../ConfirmationModalDialog.vue';

export default {
  name: 'ConfirmationModalDialogWrapper',
  components: {
    ConfirmationModalDialog,
  },
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    openModal() {
      this.isShowing = true;
    },
  },
};

</script>

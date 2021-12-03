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
<script>
import ConfirmationToastDialog from '../ConfirmationToastDialog.vue';

export default {
  name: 'ConfirmationToastDialogWrapper',
  components: {
    ConfirmationToastDialog,
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

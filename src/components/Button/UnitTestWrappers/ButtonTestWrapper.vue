<template>
  <div :data-testid="`button-test-case-wrapper`">
    <Button :type="type" :disabled="disabled" :loading="loading" :class="additionalClass" :href="href"/>
  </div>
</template>

<script>
import Button from '../Button.vue';

export default {
  name: 'ButtonCases',
  components: {
    Button,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
    loading: Boolean,
    additionalClass: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    href: {
      type: String,
      default: null,
    },
  },
};

</script>

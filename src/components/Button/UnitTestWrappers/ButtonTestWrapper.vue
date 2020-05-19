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
    type: String,
    loading: Boolean,
    additionalClass: String,
    disabled: Boolean,
    href: String,
  },
};

</script>

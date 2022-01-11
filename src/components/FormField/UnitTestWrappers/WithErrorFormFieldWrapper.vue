<template>
  <div>
    <FormField id="test-id" label="Test example" value="234" placeholder="My Placeholder" error-label="Error Label"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import FormField from '../FormField.vue';

export default defineComponent({
  name: 'WithErrorFormFieldWrapper',
  components: {
    FormField,
  },
});
</script>

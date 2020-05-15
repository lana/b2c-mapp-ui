<template>
  <div>
    <FormField id="test-id" label="Test example" value="234" placeholder="My Placeholder" error-label="Error Label"/>
  </div>
</template>
<script>
import FormField from '../FormField.vue';

export default {
  name: 'WithErrorFormFieldWrapper',
  components: {
    FormField,
  },
};
</script>

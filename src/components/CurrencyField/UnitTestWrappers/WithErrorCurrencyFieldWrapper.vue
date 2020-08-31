<template>
  <div>
    <CurrencyField id="test-id" label="Test example" value="234" placeholder="My Placeholder" error-label="Error Label"/>
  </div>
</template>
<script>
import CurrencyField from '../CurrencyField.vue';

export default {
  name: 'WithErrorCurrencyFieldWrapper',
  components: {
    CurrencyField,
  },
};
</script>

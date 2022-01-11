<template>
  <div>
    <CurrencyField id="test-id" label="Test example" value="234" placeholder="My Placeholder" error-label="Error Label"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import CurrencyField from '../CurrencyField.vue';

export default defineComponent({
  name: 'WithErrorCurrencyFieldWrapper',
  components: {
    CurrencyField,
  },
});
</script>

<template>
  <section class="wrapper" :data-testid="`${dataTestId}-wrapper`">
    <Button :id="id"
            :data-test-id="dataTestId"
            :href="href"
            :type="type"
            :loading="loading"
            :loading-text="loadingText"
            :disabled="disabled"
            :debounce="debounce"
            :debounce-delay="debounceDelay"
            @click="onClick"
    >
      <slot/>
    </Button>
  </section>
</template>

<script lang="ts" src="./WrappedButton.ts"></script>
<style lang="scss" scoped src="./WrappedButton.scss"></style>

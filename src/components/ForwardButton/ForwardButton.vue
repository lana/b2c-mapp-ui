<template>
  <section class="wrapper" :data-testid="`${dataTestId}-section`">
    <Button :id="id"
            :data-test-id="dataTestId"
            :name="name"
            :disabled="disabled"
            drop-shadow
            :debounce="debounce"
            :debounce-delay="debounceDelay"
            @click="onClick"
    >
      <ChevronRightIcon class="forward-icon"/>
      <slot/>
    </Button>
  </section>
</template>

<script lang="ts" src="./ForwardButton.ts"></script>
<style lang="scss" scoped src="./ForwardButton.scss"></style>

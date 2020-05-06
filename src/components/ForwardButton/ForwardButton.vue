<template>
  <section class="wrapper" :data-testid="`${dataTestId}-section`">
    <Button :id="id"
            :data-test-id="dataTestId"
            :name="name"
            :disabled="disabled"
            :loading="loading"
            :href="href"
            :type="type"
            @click="onClick"
    >
      <ForwardIcon class="forward-icon"/>
      <slot/>
    </Button>
  </section>
</template>

<script src="./ForwardButton.js"/>
<style lang="scss" scoped src="./ForwardButton.scss"/>

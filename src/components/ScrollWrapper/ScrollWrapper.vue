<template>
  <section ref="wrapper"
           class="scroll"
           :data-testid="dataTestId"
  >
    <div>
      <slot/>
    </div>
  </section>
</template>

<script src="./ScrollWrapper.js"/>
<style lang="scss" scoped src="./ScrollWrapper.scss"/>

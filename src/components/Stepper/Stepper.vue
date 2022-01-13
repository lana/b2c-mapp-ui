<template>
  <nav :data-testid="`${dataTestId}-navigation`" class="stepper">
    <Heading v-if="title" type="callout">
      {{ title }}
    </Heading>
    <ol :data-testid="`${dataTestId}-list`" class="steps">
      <li v-for="({ stepNumber, isActive, isInactive }) in availableSteps"
          :key="stepNumber"
          class="step"
          :class="{ active: isActive, inactive: isInactive }"
          :data-testid="`${dataTestId}-element`"
      >
        Paso {{ stepNumber }}
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" src="./Stepper.ts"></script>
<style lang="scss" scoped src="./Stepper.scss"></style>

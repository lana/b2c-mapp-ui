<template>
  <div :data-testid="`${dataTestId}-container`" class="progress-container" :style="cssVars">
    <div class="progress-bar-wrapper" :class="color">
      <div class="bar-container">
        <div ref="bar"
             class="progress-bar"
             :data-testid="`${dataTestId}-progress`"
             :style="progressStyle"
        />
        <div ref="outsideBorder" class="progress-border outside" :style="progressStyle"/>
        <div ref="insideBorder" class="progress-border inside" :style="progressStyle"/>
      </div>
      <div class="bar-circle left"
           :class="{ filled: (progressPercentage > 0) }"
      />
      <div class="bar-circle right"/>
      <div v-show="progressPercentage !== 0"
           ref="circle"
           class="progress-circle-container"
           :data-testid="`${dataTestId}-circle`"
           :style="progressCircle"
      >
        <div class="progress-circle"/>
      </div>
    </div>
    <div class="text-container">
      <slot name="customTitle">
        <Heading color="purple-500"
                 weight="semibold"
                 size="xxxl"
                 :data-testid="`${dataTestId}-title`"
        >
          {{ title }}
        </Heading>
      </slot>
      <slot name="customDescription">
        <TextParagraph :data-testid="`${dataTestId}-description`"
                       size="small"
        >
          {{ progressText }}
        </TextParagraph>
      </slot>
    </div>
  </div>
</template>

<script src="./CircularProgress.js"/>
<style lang="scss" scoped src="./CircularProgress.scss"/>

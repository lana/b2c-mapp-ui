<template>
  <component :is="componentType"
             :id="id"
             class="button"
             :class="[{ loading, pressed: (!isLinkButton && isPressed), 'link-button': isLinkButton, 'drop-shadow': dropShadow }, type]"
             :type="buttonTypeAttribute"
             :href="href"
             :disabled="(disabled) ? 'disabled': null"
             :data-testid="dataTestIdToUse"
             @click="clickMethod"
             @touchstart="setIsPressed(true)"
             @touchend="setIsPressed(false)"
  >
    <span v-if="isLinkButton" class="default-wrapper">
      <slot/>
    </span>
    <template v-if="!isLinkButton">
      <em v-if="loading"
          class="loading-wrapper"
          :data-testid="`${baseDataTestIdToUse}-loading`"
      >
        <!-- TODO: Implement progress filling the background (See: https://www.figma.com/file/7qn2DSkgoUT5i9hIt4FL1C/Storybook?node-id=1%3A2) once we've discussed further with the design team -->
        {{ loadingText }}
      </em>
      <span v-if="!loading"
            class="default-wrapper"
            :data-testid="`${baseDataTestIdToUse}-children`"
      >
        <slot/>
      </span>
    </template>
  </component>
</template>

<script lang="ts" src="./Button.ts"></script>
<style lang="scss" scoped src="./Button.scss"></style>

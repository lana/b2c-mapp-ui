<template>
  <component :is="componentType"
             :id="id"
             class="button"
             :class="[{ loading, pressed: (!isLinkButton && isPressed) }, type]"
             :type="buttonTypeAttribute"
             :disabled="disabled"
             :data-testid="dataTestIdToUse"
             @click="onClick"
             @touchStart="toggleIsPressed"
             @touchEnd="toggleIsPressed"
  >
    <slot v-if="isLinkButton"/>
    <template v-if="!isLinkButton">
      <em v-if="loading"
          class="loading-wrapper"
          :data-testid="`${baseDataTestIdToUse}-loading`"
      >
        <MopIcon class="loading-icon"/>
        ...
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

<script src="./Button.js"/>
<style lang="scss" scoped src="./Button.scss"/>

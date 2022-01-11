<template>
  <button :id="id"
          class="clipboard-button"
          :class="copyStatusClass"
          :data-testid="`${dataTestId}-button`"
          :name="name"
          :disabled="disabled"
          @click="onClick"
  >
    {{ copyStatusText }}
  </button>
</template>

<script lang="ts" src="./CopyToClipboardButton.ts"></script>
<style lang="scss" scoped src="./CopyToClipboardButton.scss"></style>

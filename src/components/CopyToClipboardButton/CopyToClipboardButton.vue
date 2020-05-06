<template>
  <button :id="id"
          class="clipboard"
          :class="copyStatusClass"
          :data-testid="`${dataTestId}-button`"
          :name="name"
          :disabled="disabled"
          @click="onClick"
  >
    {{ copyStatusText }}
  </button>
</template>

<script src="./CopyToClipboardButton.js"/>
<style lang="scss" scoped src="./CopyToClipboardButton.scss"/>

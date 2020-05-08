<template>
  <li class="list-item" :data-testid="dataTestId">
    <div v-if="$slots.default"
         class="media"
         :class="[color, { transparent }]"
         :data-testid="`${dataTestId}-icon`"
    >
      <slot/>
    </div>
    <div :data-testid="`${dataTestId}-heading`" class="body">
      <Heading size="medium">{{ title }}</Heading>
      <TextParagraph v-if="description" :data-test-id="`${dataTestId}-description`">{{ description }}</TextParagraph>
      <span v-if="linkTitle"
            class="link"
            :data-testid="`${dataTestId}-heading-link`"
            :disabled="disabled"
            @click="onLinkClick"
      >
        {{ linkTitle }}
      </span>
    </div>
    <ToggleSwitch v-if="hasToggle"
                  v-model="isChecked"
                  :data-test-id="`${dataTestId}-toggle`"
                  :disabled="disabled"
    />
  </li>
</template>

<script src="./ListItem.js"/>
<style lang="scss" scoped src="./ListItem.scss"/>

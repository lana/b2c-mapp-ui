<template>
  <li class="list-item" :data-testid="dataTestId">
    <div v-if="hasDefaultSlot"
         class="media"
         :data-testid="`${dataTestId}-icon`"
    >
      <slot/>
    </div>
    <div :data-testid="`${dataTestId}-heading`" class="body">
      <Heading size="medium">
        {{ title }}
      </Heading>
      <TextParagraph v-if="description"
                     class="description"
                     :data-test-id="`${dataTestId}-description`"
      >
        {{ description }}
      </TextParagraph>
      <span v-if="linkTitle"
            class="link"
            :data-testid="`${dataTestId}-heading-link`"
            :disabled="disabled"
            @click="onLinkClick"
      >
        {{ linkTitle }}
      </span>
    </div>
    <ToggleSwitch v-if="hasToggle && !hasCheckbox"
                  v-model="isChecked"
                  :data-test-id="`${dataTestId}-toggle`"
                  :disabled="disabled"
    />
    <Checkbox v-if="hasCheckbox && !hasToggle"
              v-model="isChecked"
              :data-test-id="`${dataTestId}-checkbox`"
              :disabled="disabled"
    />
    <strong v-if="isRightLabelShowing" class="right-label">{{ rightLabel }}</strong>
  </li>
</template>

<script src="./ListItem.js"/>
<style lang="scss" scoped src="./ListItem.scss"/>

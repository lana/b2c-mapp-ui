<template>
  <div class="wrapper">
    <FormField v-model="inputValue"
               :data-test-id="dataTestId"
               :label="label"
               :type="type"
               :name="name"
               :error-label="errorLabel"
               :disabled="disabled"
               :readonly="readonly"
               :start-focused="startFocused"
               :max-length="maxLengthToUse"
               @focus="onFocus"
               @blur="onBlur"
    />
    <TextParagraph v-if="lengthHint"
                   class="hint"
                   :class="{ 'align-top': inputValue }"
                   :data-test-id="`${dataTestId}-rule`"
    >
      {{ lengthHint }}
    </TextParagraph>
  </div>
</template>

<script src="./TextField.js"/>
<style lang="scss" scoped src="./TextField.scss"/>

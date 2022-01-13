<template>
  <section class="wrapper">
    <ul :data-testid="`${dataTestId}-select`">
      <li v-for="({ title, metaText, value: optionValue, disabled }) in options"
          :key="`${optionValue}`"
          class="item"
          :class="{ checked: (selectedValue === optionValue) }"
          :data-testid="`${dataTestId}-option`"
          :disabled="disabled"
      >
        <label :class="{ checked: (selectedValue === optionValue) }"
               class="label"
               :data-testid="`${dataTestId}-option-label`"
               :for="`${optionValue}`"
        >
          <input :id="`${optionValue}`"
                 v-model="selectedValue"
                 :data-testid="`${dataTestId}-option-input`"
                 type="radio"
                 class="hidden"
                 :name="`${optionValue}`"
                 :value="optionValue"
                 :disabled="disabled"
          >
          <div :data-testid="`${dataTestId}-heading`" class="body">
            <Heading class="title" size="medium" v-html="title"/>
            <TextParagraph v-if="metaText"
                           class="meta-text"
                           :data-test-id="`${dataTestId}-meta-text`"
                           v-html="metaText"
            />
          </div>
          <!-- @slot Custom checked icon, default to radio div -->
          <slot v-if="(selectedValue === optionValue)"
                name="checkedIcon"
          >
            <div class="radio"/>
          </slot>
          <!-- @slot Custom unchecked icon, default to radio div -->
          <slot v-if="(selectedValue !== optionValue)"
                name="uncheckedIcon"
          >
            <div class="radio"/>
          </slot>
        </label>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" src="./ContentRadioList.ts"></script>
<style lang="scss" scoped src="./ContentRadioList.scss"></style>

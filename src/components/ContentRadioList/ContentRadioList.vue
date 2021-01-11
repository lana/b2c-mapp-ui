<template>
  <section class="wrapper">
    <ul :data-testid="`${dataTestId}-select`">
      <li v-for="({ title, metaText, value: optionValue, disabled }, index) in options"
          :key="`${optionValue}-${index}`"
          class="item"
          :class="{ checked: (selectedValue === optionValue) }"
          :data-testid="`${dataTestId}-option`"
          :disabled="disabled"
      >
        <label
          :class="{ checked: (selectedValue === optionValue) }"
          class="label"
          :data-testid="`${dataTestId}-option-label`"
          :for="`${id}-${index}`"
        >
          <input :id="`${id}-${index}`"
                 v-model="selectedValue"
                 :data-testid="`${dataTestId}-option-input`"
                 type="radio"
                 class="hidden"
                 :name="`${id}-${index}`"
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
          <slot v-if="(selectedValue === optionValue)"
                name="checked-icon"
          >
            <div class="radio"/>
          </slot>
          <slot v-if="(selectedValue !== optionValue)"
                name="unchecked-icon"
          >
            <div class="radio"/>
          </slot>
        </label>
      </li>
    </ul>
  </section>
</template>

<script src="./ContentRadioList.js"/>
<style lang="scss" scoped src="./ContentRadioList.scss"/>

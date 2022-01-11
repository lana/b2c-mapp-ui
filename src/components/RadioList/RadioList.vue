<template>
  <section class="radio-wrapper">
    <Heading v-if="title" class="title">
      {{ title }}
    </Heading>
    <ul :data-testid="`${dataTestId}-select`" :class="{ buttons: buttonMode}">
      <li v-for="({ label, htmlLabel, value: optionValue }, index) in options"
          :key="`${optionValue}-${index}`"
          class="item"
          :class="{ checked: (selectedValue === optionValue) }"
          :data-testid="`${dataTestId}-option`"
      >
        <input :id="`${id}-${index}`"
               v-model="selectedValue"
               :data-testid="`${dataTestId}-option-input`"
               type="radio"
               class="radio"
               :name="`${id}-${index}`"
               :value="optionValue"
               :disabled="disabled"
        >
        <div class="content">
          <label v-if="label"
                 class="label"
                 :data-testid="`${dataTestId}-option-label`"
                 :for="`${id}-${index}`"
          >
            {{ label }}
          </label>
          <label v-if="htmlLabel"
                 class="label"
                 :data-testid="`${dataTestId}-option-label`"
                 :for="`${id}-${index}`"
                 v-html="htmlLabel"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" src="./RadioList.ts"></script>
<style lang="scss" scoped src="./RadioList.scss"></style>

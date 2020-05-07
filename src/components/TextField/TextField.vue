<template>
  <FormField v-model="inputValue"
             :data-test-id="dataTestId"
             :label="label"
             :type="type"
             :name="name"
             :error-label="errorLabel"
             :disabled="disabled"
             :readonly="readonly"
             :start-focused="startFocused"
             @focus="onFocus"
             @blur="onBlur"
  />
</template>

<script src="./TextField.js"/>

<template>
  <div class="wrapper-container">
    <div class="input-container"
         :data-testid="`${dataTestId}-container`"
    >
      <span class="symbol">{{ symbol }}</span>
      <ContentEditable :id="inputId"
                       ref="content"
                       v-model="inputValue"
                       tag="div"
                       class="input"
                       tabindex="0"
                       no-n-l
                       inputmode="numeric"
                       pattern="\d*"
                       :data-testid="`${dataTestId}-input`"
                       :contenteditable="!(readonly || disabled)"
                       @keypress="onKeypress"
                       @keyup="onKeyup"
                       @focus.native="onFocus"
                       @blur.native="onBlur"
                       @paste="onPaste"
      />
      <input ref="input"
             v-model="currencyValue"
             v-currency="currencyOptions"
             class="hidden"
             :readonly="readonly"
             :disabled="disabled"
      >
    </div>
  </div>
</template>

<script src="./AmountInput.js"/>
<style lang="scss" scoped src="./AmountInput.scss"/>

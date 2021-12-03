<template>
  <div class="wrapper-container">
    <div class="input-container"
         :data-testid="`${dataTestId}-container`"
    >
      <span class="symbol">{{ currencySymbol }}</span>
      <ContentEditable :id="inputId"
                       ref="content"
                       v-model="inputValue"
                       tag="div"
                       class="input"
                       tabindex="0"
                       no-n-l
                       :no-h-t-m-l="false"
                       inputmode="numeric"
                       pattern="\d*"
                       :data-testid="`${dataTestId}-input`"
                       :contenteditable="!(readonly || disabled)"
                       @keypress="onKeypress"
                       @keyup="onKeyup"
                       @focus="onFocus"
                       @blur="onBlur"
                       @paste="onPaste"
      />
      <CurrencyInput ref="inputRef"
                     v-model="currencyValue"
                     v-model:formattedValue="formattedValue"
                     :options="currencyOptions"
                     class="hidden"
                     :readonly="readonly"
                     :disabled="disabled"
      />
    </div>
  </div>
</template>

<script src="./AmountInput.js"/>
<style lang="scss" scoped src="./AmountInput.scss"/>

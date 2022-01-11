<template>
  <div class="code-input-wrapper">
    <input :id="id"
           ref="oneTimeCodeField"
           v-model="codeInput"
           class="field"
           type="tel"
           :autocomplete="autocomplete"
           :maxlength="expectedCodeLength"
           :disabled="disabled"
           :data-testid="dataTestId"
    >
    <ol class="code"
        :class="{ 'code-error': errorMessage }"
        @animationend="onAnimationEnd"
        @click="focus"
    >
      <li class="code-item" data-testid="code-input-field" :class="{ filled: codeInput[0], 'sms-code-item': isSmsCode }">
        {{ (codeInput[0] || '') }}
      </li>
      <li class="code-item" data-testid="code-input-field" :class="{ filled: codeInput[1], 'sms-code-item': isSmsCode }">
        {{ (codeInput[1] || '') }}
      </li>
      <li class="code-item" data-testid="code-input-field" :class="{ filled: codeInput[2], 'sms-code-item': isSmsCode }">
        {{ (codeInput[2] || '') }}
      </li>
      <li v-if="(isCardPin)" class="code-item" data-testid="code-input-field" :class="{ filled: codeInput[3] }">
        {{ (codeInput[3] || '') }}
      </li>
      <template v-if="(isSmsCode)">
        <li class="slash-item">
          -
        </li>
        <li class="code-item sms-code-item" data-testid="code-input-field" :class="{ filled: codeInput[3] }">
          {{ (codeInput[3] || '') }}
        </li>
        <li class="code-item sms-code-item" data-testid="code-input-field" :class="{ filled: codeInput[4] }">
          {{ (codeInput[4] || '') }}
        </li>
        <li class="code-item sms-code-item" data-testid="code-input-field" :class="{ filled: codeInput[5] }">
          {{ (codeInput[5] || '') }}
        </li>
      </template>
    </ol>
    <p v-if="errorMessage">
      <TextParagraph class="error" :data-test-id="`${dataTestId}-error-message`">
        <CloseBoldIcon class="error-icon"/>
        {{ errorMessage }}
      </TextParagraph>
      <TextParagraph v-if="errorDescription" class="error-description" :data-test-id="`${dataTestId}-error-description`">
        {{ errorDescription }}
      </TextParagraph>
    </p>
  </div>
</template>

<script lang="ts" src="./CodeInputField.ts"></script>
<style lang="scss" scoped src="./CodeInputField.scss"></style>

<template>
  <div ref="canvasContainer" class="canvas-container">
    <canvas ref="signatureCanvas"
            class="signature-pad"
            :width="canvasWidth"
            :height="canvasHeight"
            @mousedown.prevent="startDraw"
            @mousemove.prevent="continueDraw"
            @mouseup="endDraw"
            @touchstart.prevent="startDraw"
            @touchmove.prevent="continueDraw"
            @touchend="endDraw"
    />
  </div>
</template>

<script lang="ts" src="./SignaturePad.ts"></script>
<style lang="scss" scoped src="./SignaturePad.scss"></style>

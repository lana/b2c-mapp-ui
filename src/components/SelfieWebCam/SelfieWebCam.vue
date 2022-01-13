<template>
  <video ref="video"
         :width="width"
         :height="height"
         :src="source"
         :autoplay="autoplay"
         :playsinline="playsinline"
  />
</template>

<script lang="ts" src="./SelfieWebCam.ts"></script>

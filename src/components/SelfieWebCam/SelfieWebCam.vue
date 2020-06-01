<template>
  <video ref="video"
         :width="width"
         :height="height"
         :src="source"
         :autoplay="autoplay"
         :playsinline="playsinline"
  />
</template>

<script src="./SelfieWebCam.js"/>

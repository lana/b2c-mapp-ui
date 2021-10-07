// NOTE: This is a customized fork from the `vue-web-cam` NPM package (see: https://github.com/VinceG/vue-web-cam) which was required in order to add support for selfie constraints

const getGetUserMediaFromBrowser = () => (
  navigator.getUserMedia
  || navigator.webkitGetUserMedia
  || navigator.mozGetUserMedia
  || navigator.msGetUserMedia
  || navigator.oGetUserMedia
);

const props = {
  width: {
    type: [Number, String],
    default: '100%',
  },
  height: {
    type: [Number, String],
    default: 500,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  screenshotFormat: {
    type: String,
    default: 'image/jpeg',
  },
  selectFirstDevice: {
    type: Boolean,
    default: false,
  },
  deviceId: {
    type: String,
    default: '',
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  resolution: {
    type: Object,
    default: null,
    validator: (value) => (value.height && value.width),
  },
};

const emits = ['cameras', 'notsupported', 'camera-change', 'video-live', 'started', 'stopped', 'error'];

const data = function () {
  return {
    source: null,
    canvas: null,
    wasCamerasListEmitted: false,
    cameras: [],
    device: null,
  };
};

const computed = {
  hasActiveVideo() {
    const result = ((this.$refs.video !== null) && this.$refs.video.srcObject);
    return result;
  },
};

const methods = {
  legacyGetUserMediaSupport() {
    const result = (constraints) => {
      const getUserMedia = getGetUserMediaFromBrowser();
      if (!getUserMedia) { return Promise.reject(new Error('getUserMedia is not implemented in this browser')); }
      return new Promise(((resolve, reject) => { getUserMedia.call(navigator, constraints, resolve, reject); }));
    };
    return result;
  },
  setupMedia() {
    if (navigator.mediaDevices === undefined) { navigator.mediaDevices = {}; }
    if (navigator.mediaDevices.getUserMedia === undefined) { navigator.mediaDevices.getUserMedia = this.legacyGetUserMediaSupport(); }
    this.testMediaAccess();
  },
  async loadCameras() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const filterVideoInputDevices = ({ kind }) => (kind === 'videoinput');
      devices.filter(filterVideoInputDevices).forEach((device) => { this.cameras.push(device); });
      if (this.wasCamerasListEmitted) { return; }
      if (this.selectFirstDevice && (this.cameras.length > 0)) { this.device = this.cameras[0].deviceId; }
      this.$emit('cameras', this.cameras);
      this.wasCamerasListEmitted = true;
    } catch (error) {
      this.$emit('notsupported', error);
    }
  },
  changeCamera(deviceId) {
    this.stop();
    this.$emit('camera-change', deviceId);
    this.loadCamera(deviceId);
  },
  loadSourceStream(stream) {
    if ('srcObject' in this.$refs.video) { // new browsers api
      this.$refs.video.srcObject = stream;
    } else { // old browsers
      this.source = window.HTMLMediaElement.srcObject(stream);
    }
    this.$refs.video.onloadedmetadata = () => { this.$emit('video-live', stream); };
    this.$emit('started', stream);
  },
  stopStreamedVideo({ srcObject: stream }) {
    const tracks = stream.getTracks();
    const stopTrack = (track) => {
      track.stop();
      this.$emit('stopped', stream);
      this.$refs.video.srcObject = null;
      this.source = null;
    };
    tracks.forEach(stopTrack);
  },
  stop() {
    if (!this.hasActiveVideo) { return; }
    this.stopStreamedVideo(this.$refs.video);
  },
  start() {
    if (!this.device && !this.deviceId) { return; }
    this.loadCamera(this.device || this.deviceId);
  },
  startSelfie() {
    this.loadSelfieCamera();
  },
  pause() {
    if (!this.hasActiveVideo) { return; }
    this.$refs.video.pause();
  },
  resume() {
    if (!this.hasActiveVideo) { return; }
    this.$refs.video.play();
  },
  async testMediaAccess() {
    const constraints = { video: true };
    if (this.resolution) {
      constraints.video = {
        height: this.resolution.height,
        width: this.resolution.width,
      };
    }
    try {
      const stopTrack = (track) => { track.stop(); };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const tracks = stream.getTracks();
      tracks.forEach(stopTrack);
      await this.loadCameras();
    } catch (error) {
      this.$emit('error', error);
    }
  },
  async loadSelfieCamera() {
    const constraints = {
      audio: false,
      video:
        {
          facingMode: 'user',
        },
    };
    if (this.resolution) {
      constraints.video.height = this.resolution.height;
      constraints.video.width = this.resolution.width;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.loadSourceStream(stream);
    } catch (error) {
      this.$emit('error', error);
    }
  },
  async loadCamera(device) {
    const constraints = {
      video:
        {
          deviceId: {
            exact: device,
          },
        },
    };
    if (this.resolution) {
      constraints.video.height = this.resolution.height;
      constraints.video.width = this.resolution.width;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.loadSourceStream(stream);
    } catch (error) {
      this.$emit('error', error);
    }
  },
  capture() {
    const result = this.getCanvas().toDataURL(this.screenshotFormat);
    return result;
  },
  getCanvas() {
    const { video } = this.$refs;
    if (!this.ctx) {
      const canvas = document.createElement('canvas');
      canvas.height = video.videoHeight;
      canvas.width = video.videoWidth;
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
    }
    const { ctx, canvas } = this;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas;
  },
};

const watch = {
  deviceId(id) {
    this.changeCamera(id);
  },
};

const mounted = function () {
  this.setupMedia();
};

const beforeUnmount = function () {
  this.stop();
};

const SelfieWebCam = {
  props,
  emits,
  data,
  computed,
  methods,
  watch,
  mounted,
  beforeUnmount,
};

export default SelfieWebCam;

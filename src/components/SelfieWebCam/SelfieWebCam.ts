// NOTE: This is a customized fork from the `vue-web-cam` NPM package (see: https://github.com/VinceG/vue-web-cam) which was required in order to add support for selfie constraints
import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';

interface CamResolution {
  width: number,
  height: number,
}

const SelfieWebCam = defineComponent({
  name: 'SelfieWebCam',
  props: {
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
      type: Object as PropType<CamResolution | null>,
      default: null,
      validator: (value: CamResolution) => (!!value.height && !!value.width),
    },
  },
  emits: ['cameras', 'notsupported', 'camera-change', 'video-live', 'started', 'stopped', 'error'],
  computed: {
    hasActiveVideo(): boolean {
      const result = ((this.video !== null) && !!this.video.srcObject);
      return result;
    },
  },
  methods: {
    setupMedia() {
      this.testMediaAccess();
    },
    async loadCameras() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const filterVideoInputDevices = ({ kind }: MediaDeviceInfo) => (kind === 'videoinput');
        devices.filter(filterVideoInputDevices).forEach((device) => { this.cameras.push(device); });
        if (this.wasCamerasListEmitted) { return; }
        if (this.selectFirstDevice && (Array.isArray(this.cameras) && this.cameras.length > 0)) { this.device = this.cameras[0]?.deviceId || ''; }
        this.$emit('cameras', this.cameras);
        this.wasCamerasListEmitted = true;
      } catch (error) {
        this.$emit('notsupported', error);
      }
    },
    changeCamera(deviceId: string) {
      this.stop();
      this.$emit('camera-change', deviceId);
      this.loadCamera(deviceId);
    },
    loadSourceStream(stream: MediaStream) {
      if ('srcObject' in this.video) { // new browsers api
        this.video.srcObject = stream;
      } else { // old browsers
        this.source = `${stream}`;
      }
      this.video.onloadedmetadata = () => { this.$emit('video-live', stream); };
      this.$emit('started', stream);
    },
    stopStreamedVideo({ srcObject: stream }: HTMLVideoElement) {
      const tracks = (stream as MediaStream).getTracks();
      const stopTrack = (track: MediaStreamTrack) => {
        track.stop();
        this.$emit('stopped', stream);
        this.video.srcObject = null;
        this.source = '';
      };
      tracks.forEach(stopTrack);
    },
    stop() {
      if (!this.hasActiveVideo) { return; }
      this.stopStreamedVideo(this.video);
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
      this.video.pause();
    },
    resume() {
      if (!this.hasActiveVideo) { return; }
      this.video.play();
    },
    async testMediaAccess() {
      const constraints = { video: true } as MediaStreamConstraints;
      if (this.resolution) {
        constraints.video = {
          ...constraints.video as MediaTrackConstraints,
          height: this.resolution.height,
          width: this.resolution.width,
        };
      }
      try {
        const stopTrack = (track: MediaStreamTrack) => { track.stop(); };
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
      } as MediaStreamConstraints;
      if (this.resolution) {
        constraints.video = {
          ...constraints.video as MediaTrackConstraints,
          height: this.resolution.height,
          width: this.resolution.width,
        };
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        this.loadSourceStream(stream);
      } catch (error) {
        this.$emit('error', error);
      }
    },
    async loadCamera(device: string) {
      const constraints = {
        video:
        {
          deviceId: {
            exact: device,
          },
        },
      } as MediaStreamConstraints;
      if (this.resolution) {
        constraints.video = {
          ...constraints.video as MediaTrackConstraints,
          height: this.resolution.height,
          width: this.resolution.width,
        };
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
    getCanvas(): HTMLCanvasElement {
      if (!this.ctx) {
        const canvas = document.createElement('canvas');
        canvas.height = this.video.videoHeight;
        canvas.width = this.video.videoWidth;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
      }
      this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
      return this.canvas;
    },
  },
  watch: {
    deviceId(id) {
      this.changeCamera(id);
    },
  },
  setup() {
    const video = ref();
    const canvas = ref();
    const ctx = ref();
    const source = ref('');
    const wasCamerasListEmitted = ref(false);
    const cameras = ref<MediaDeviceInfo[]>([]);
    const device = ref('');
    return {
      video,
      canvas,
      ctx,
      source,
      wasCamerasListEmitted,
      cameras,
      device,
    };
  },
  mounted() {
    this.setupMedia();
  },
  beforeUnmount() {
    this.stop();
  },
});

export default SelfieWebCam;

<template>
  <div class="url-input">
    <el-input
        placeholder="https://www.youtube.com/watch?v="
        prefix-icon="el-icon-video-play"
        v-model="inputUrl">
    </el-input>
    <el-button @click="getTranscript">Get Transcript</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getAvailableTranscriptList, getTranscript, parseUrl } from '@/youtube-api/api';

@Options({})
export default class UrlInput extends Vue {
  private inputUrl: string = '';
  private videoId: string = '';

  private getTranscript() {
    this.videoId = parseUrl(this.inputUrl);
    getTranscript(this.videoId).then(r => this.$emit('transcript', r));
    getAvailableTranscriptList(this.videoId).then(r => console.log(r));
  }
}
</script>

<style>
.url-input {
  width: max(500px, 70%);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
}

.el-input {
  padding-bottom: 1rem;
}
</style>

<template>
  <div class="url-input">
    <el-input
        placeholder="https://youtube.com/watch?v="
        prefix-icon="el-icon-video-play"
        v-model="inputUrl">
    </el-input>
    <el-button @click="getTranscript">Get Transcript</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getTranscript } from '@/youtube-api/api';

@Options({})
export default class UrlInput extends Vue {
  private inputUrl: string = '';

  private getTranscript() {
    getTranscript(this.inputUrl).then(r => this.$emit('transcript', r));
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

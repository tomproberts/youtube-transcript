<template>
  <div class="url-input">
    <el-input
        placeholder="https://youtube.com/watch?v="
        prefix-icon="el-icon-video-play"
        v-model="inputUrl">
    </el-input>
    <el-button @click="alertPls">Get</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class UrlInput extends Vue {
  private inputUrl: string = '';

  private alertPls() {
    alert(this.inputUrl);
  }
}
</script>

<style>
.url-input {
  padding: 1rem;
}

.el-input {
  padding-bottom: 1rem;
}
</style>

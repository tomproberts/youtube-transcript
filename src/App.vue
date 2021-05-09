<template>
  <div class="auto-width">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="YouTube Transcript Downloader"/>
    <UrlInput/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import UrlInput from '@/UrlInput.vue';

@Options({
  components: {
    HelloWorld,
    UrlInput
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.auto-width {
  width: min(700px, 70%);
  margin-left: auto;
  margin-right: auto;
}
</style>

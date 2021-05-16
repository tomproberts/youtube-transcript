<template>
  <div class="subtitle">
    <h4>{{ subtitle.text }}</h4>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Subtitle } from '@/types';

@Options({
  props: {
    subtitle: Object as () => Subtitle
  }
})
export default class SubtitleComponent extends Vue {
  subtitle!: Subtitle;
}
</script>

<style>
.subtitle {
  text-align: left;
}
</style>

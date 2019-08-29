<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Article />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/components/Article.vue';

@Component({
  components: {
    Article,
  },
})
export default class Main extends Vue {}
</script>

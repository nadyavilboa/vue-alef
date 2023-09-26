<template>
  <div
    class="app"
    id="app"
  >
    <v-header></v-header>
    <v-main-wrapper></v-main-wrapper>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue';
import vMainWrapper from './components/v-main-wrapper.vue';
import vFooter from './components/v-footer.vue';

export default {
  name: 'App',
  components: {
    vHeader,
    vMainWrapper,
    vFooter
  }
}
</script>

<style>

</style>

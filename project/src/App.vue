<template>
  <div
    class="app"
    id="app"
  >
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue';
import vFooter from './components/v-footer.vue';

export default {
  name: 'App',
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style>

</style>

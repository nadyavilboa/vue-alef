<template>
    <div class="v-main-wrapper">
        <v-user-data />
        <v-children />
    </div>
  </template>
  
  <script>
  import vUserData from './v-user-data.vue';
  import vChildren from './v-children.vue';
  
  export default {
    name: 'v-main-wrapper',
    components: {
        vUserData,
        vChildren
    }
  }
  </script>
  
  <style>
    .v-main-wrapper {
        margin: 0 auto;
        width: fit-content;
    }
  </style>
  
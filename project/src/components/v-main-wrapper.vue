<template>
    <div class="v-main-wrapper">
        <v-user-data />
        <v-children />
        <v-btn-save />
    </div>
  </template>
  
  <script>
  import vUserData from './v-user-data.vue';
  import vChildren from './v-children.vue';
  import vBtnSave from './v-btn-save.vue';
  
  export default {
    name: 'v-main-wrapper',
    components: {
        vUserData,
        vChildren,
        vBtnSave
    }
  }
  </script>
  
  <style>
    .v-main-wrapper {
        margin: 0 auto;
        padding: 0 20px;
        width: 100%;

        @media(min-width: 768px) {
          max-width: 616px;
          padding: 0;
        }
    }
  </style>
  
<template>
    <div class="v-user-data">
        <p class="v-user-data__title text text-title">
            Персональные данные
        </p>
        <div class="v-user-data__inputs-group">
            <v-input />
            <v-input />
        </div>
    </div>
  </template>
  
  <script>
  import vInput from './v-input.vue';
  
  export default {
    name: 'v-user-data',
    components: {
        vInput
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .v-user-data {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__inputs-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
  </style>
  
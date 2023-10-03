<template>
    <button
        class="v-btn-save blue-btn-bg"
        @click="dataSaving"
    >
        Сохранить
    </button>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'v-btn-save',
    components: {
  
    },
    methods: {
        ...mapActions([
            'DATA_SAVING',
        ]),
        dataSaving() {
            console.log('data saving');
            this.DATA_SAVING();
        }
    }
  }
  </script>
  
  <style>
    .v-btn-save {
        border: 2px solid transparent;
        border-radius: 100px;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
    }
  </style>
  
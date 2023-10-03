<template>
    <div class="v-input-wrapper input">
        <label
          class="label text text-label"
          :for="getIdInput"
        >
          {{ textLabel }}
        </label>
        <input
            class="v-input"
            :id="getIdInput"
            type="text"
            :value="value"
            @change="changeInputVal($event.target.value)"
        />
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'v-input-wrapper',
    components: {
  
    },
    props: {
      textLabel: {
        type: String,
        default() {
          return ''
        }
      },
      inputName: {
        type: String,
        default() {
          return ''
        }
      },
      id: {
        type: Number,
        default() {
          return -1
        }
      },
      value: {
        type: String,
        default() {
          return ''
        }
      }

    },
    computed: {
      getIdInput() {
        return this.id >= 0 ? this.inputName + String(this.id) : this.inputName
      }
    },
    methods: {
      changeInputVal(value) {
        this.$emit('changeInputVal', value, this.inputName);
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>

  </style>
  
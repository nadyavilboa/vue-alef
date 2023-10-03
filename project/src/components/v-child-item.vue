<template>
    <div class="v-child-item">
        <vInputVue
            textLabel="Имя"
            inputName="childName"
            :value="child.childName"
            :id="id"
            @changeInputVal="changeInputVal"
        />
        <vInputVue
            textLabel="Возраст"
            inputName="childAge"
            :value="child.childAge"
            :id="id"
            @changeInputVal="changeInputVal"
        />
        <button
            class="v-child-item__btn-del blue-btn"
            @click="deleteChild"
        >
            Удалить
        </button>
    </div>
  </template>
  
  <script>
  import vInputVue from './v-input.vue';
  
  export default {
    name: 'v-child-item',
    components: {
        vInputVue
    },
    props: {
        id: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    data() {
        return {
            child: {
                childName: '',
                childAge: ''
            }
        }
    },
    methods: {
        changeInputVal(value, inputName) {
            this.child[inputName] = value;
            this.$emit('changeChildData', this.child, this.id);
        },
        deleteChild(id) {
            this.$emit('deleteChild', id);
        }
    }
  }
  </script>
  
  <style lang="scss">
    .v-child-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 18px;
        flex-wrap: wrap;

        @media(min-width: 768px) {
            flex-wrap: nowrap;
        }

        &__btn-del {
            border: none;
            background: transparent;
            font-size: 14px;
            line-height: 24px;
        }
    }
  </style>
  
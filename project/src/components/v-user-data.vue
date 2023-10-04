<template>
    <div class="v-user-data">
        <p class="v-user-data__title text text-title">
            Персональные данные
        </p>
        <div class="v-user-data__inputs-group">
            <v-input
                textLabel="Имя"
                inputName="userName"
                :value="getActualUserData(USER).userName"
                @changeInputVal="changeInputVal"
            />
            <v-input
                textLabel="Возраст"
                inputName="userAge"
                :value="getActualUserData(USER).userAge"
                @changeInputVal="changeInputVal"
            />
        </div>
    </div>
  </template>
  
  <script>
  import vInput from './v-input.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'v-user-data',
    components: {
        vInput
    },
    data() {
        return {
            userData: {
                userName: '',
                userAge: ''
            },
            saving: false
        }
    },
    computed: {
        ...mapGetters([
            'SAVING',
            'USER'
        ])
    },
    methods: {
        ...mapActions([
            'SAVE_USER_DATA'
        ]),
        changeInputVal(value, inputName) {
            this.userData[inputName] = value;
        },
        getActualUserData(USER) {
            if (USER && Object.keys(USER).length !== 0) {
                return USER;
            }

            return this.userData;
        }
    },
    created() {
        this.$store.subscribe(() => {
            this.saving = this.SAVING;
            if (this.saving) {
                this.SAVE_USER_DATA(this.userData);
            }
        })
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
  
<template>
    <div class="v-preview">
        <div class="v-preview__user-wrapper">
            <p class="v-preview__title text text-title">
                Персональные данные
            </p>

            <div
                v-if="USER && Object.keys(USER).length !== 0"
                class="v-preview__user-info"
            >
                <span class="user-text">{{ USER.userName }}, </span>
                <span class="user-text">{{ USER.userAge }}</span>
            </div>

            <p v-else class="v-preview__title text text-center">
                Нет данных о пользователе
            </p>
        </div>

        <div class="v-preview__children-wrapper">
            <p class="v-preview__title text text-title">
                Дети
            </p>

            <div
                v-if="CHILDREN.length"
                class="v-preview__children-info"
            >
                <div class="v-preview__list-children">
                    <div
                        class="v-preview__child-item text child-text"
                        v-for="child in CHILDREN"
                        :key="child.id"
                    >
                        {{ child.childName }}, {{ child.childAge }} лет
                    </div>
                </div>
            </div>

            <p v-else class="v-preview__title text text-center">
                Нет данных о детях
            </p>
        </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'v-preview',
    components: {

    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            'USER',
            'CHILDREN'
        ])
    }
  }
  </script>
  
  <style>
    .v-preview {
        margin: 0 auto;
        padding: 30px 20px;
        width: 100%;

        @media(min-width: 768px) {
            max-width: 616px;
            padding: 30px 0;
        }
    }

    .v-preview__user-wrapper,
    .v-preview__children-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 60px;
    }

    .v-preview__user-info {
        width: fit-content;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
    }

    .v-preview__list-children {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .v-preview__child-item {
        width: fit-content;
    }
  </style>
  
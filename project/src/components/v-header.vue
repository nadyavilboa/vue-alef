<template>
    <div class="v-header">
        <div class="v-header__container">
            <router-link
                :to="{ path: '/'}"
                class="v-header__logotype"
            >
                <img
                    class="logo"
                    src="../assets/images/logo.png"
                    width="93"
                    height="29"
                    alt="alef logotype"
                />
            </router-link>
            <nav class="v-header__menu">
                <router-link
                    :to="{ path: '/'}"
                    class="v-header__link text-link"
                >
                    Форма
                </router-link>
                <router-link
                    :to="{ path: '/preview'}"
                    class="v-header__link text-link"
                >
                    Превью
                </router-link>
            </nav>
        </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'v-header',
    components: {
  
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .v-header {
        padding: 22px;
        width: 100%;
        box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.10);
    }

    .v-header__container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .v-header__menu {
        display: flex;
        gap: 24px;
        align-items: center;

        @media(min-width: 1200px) {
            position: absolute;
            left: calc(50% - 134px / 2);
            top: calc(50% - 9px);
        }
    }
  </style>
  
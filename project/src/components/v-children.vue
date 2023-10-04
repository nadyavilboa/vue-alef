<template>
    <div class="v-children">
        <div class="v-children__header">
            <div class="v-children__title text text-title">Дети (макс. 5)</div>
            <v-btn-add-child
              v-if="allowedAddingChild"
              @addChild="addChild"
            />
        </div>
        <div class="v-children__list">
          <vChildItem
            v-for="child in this.children"
            :key="child.id"
            :id="child.id"
            @changeChildData="changeChildData"
            @deleteChild="deleteChild"
          />
        </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import vBtnAddChild from './v-btn-add-child.vue';
  import vChildItem from './v-child-item.vue';
  
  const MAX_AMOUNT_CHILDREN = 5;

  export default {
    name: 'v-children',
    components: {
      vBtnAddChild,
      vChildItem
    },
    data() {
      return {
        children: [],
        amountChild: 0,
        child: {
          id: 0,
          childName: '',
          childAge: '',
        },
        childCopy: {}
      }
    },
    computed: {
      ...mapGetters([
        'SAVING',
        'CHILDREN'
      ]),
      allowedAddingChild() {
          return this.children.length < MAX_AMOUNT_CHILDREN;
      },
      getActualArrayChildren(CHILDREN) {
        if (CHILDREN && this.CHILDREN.length !== 0) {
                return CHILDREN;
            }

        return this.children;
      }
    },
    methods: {
      ...mapActions([
        'SAVE_CHILDREN_DATA',
      ]),
      addChild() {
        this.amountChild++;
        this.childCopy = { ...this.child, id: this.amountChild };
        this.children.push(this.childCopy);
      },
      changeChildData(child, id) {
        const changeElementIndex = this.children.findIndex((child) => child.id === id);
        this.children[changeElementIndex] = { ...this.children[changeElementIndex], ...child };
      },
      deleteChild(id) {
        const deleteElementIndex = this.children.findIndex((child) => child.id === id);
        this.children.splice(deleteElementIndex, 1);
      }
    },
    created() {
        this.$store.subscribe(() => {
            this.saving = this.SAVING;
            if (this.saving) {
                this.SAVE_CHILDREN_DATA(this.children);
            }
        })
    }
  }
  </script>
  
  <style>
  .v-children__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 11px;
  }

  .v-children__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }

  .v-children__btn-save {
    border: 2px solid transparent;
    border-radius: 100px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }

  </style>
  
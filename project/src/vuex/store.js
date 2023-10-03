import { createStore } from 'vuex';

const store = createStore({
    state: {
        userData: {},
        children: [],
        dataSaving: false,
    },
    mutations: {
        DATA_SAVING: (state) => {
            state.dataSaving = true;
        },
        SAVE_USER_DATA: (state, dataObject) => {
            state.userData = { ...dataObject };
        },
        SAVE_CHILDREN_DATA: (state, childrenArray) => {
            state.children = [ ...childrenArray ];
        }
    },
    actions: {
        DATA_SAVING({commit}) {
            commit('DATA_SAVING')
        },
        SAVE_USER_DATA({commit}, dataObject) {
            if (JSON.stringify(this.state.userData) === JSON.stringify(dataObject)) {
                return;
            }

            commit('SAVE_USER_DATA', dataObject)
        },
        SAVE_CHILDREN_DATA({commit}, childrenArray) {
            console.log(this.state.children);
            console.log(childrenArray);
            if (this.state.children.toString() === childrenArray.toString()) {
                return;
            }

            commit('SAVE_CHILDREN_DATA', childrenArray)
        }
    },
    getters: {
        SAVING(state) {
            return state.dataSaving
        }
    },
});

export default store;
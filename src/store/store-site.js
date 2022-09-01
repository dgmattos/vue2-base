import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        causas: [],
    },
    mutations: {
        has_causa(state, n) {
            state.forma_pg = n;
        },
    },
    getters: {
        has_causa: state => {
            return state.forma_pg
        },
    },
    actions: {
        get_causas: function ({commit}, action) {
            axios.post(action).then(res => {
                commit('causas', res.data.itens)
            }).catch(err => {
                console.error(err);
            }).finally(() => {

            })
        }
    }
});


export default store;

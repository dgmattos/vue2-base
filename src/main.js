import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex);


Vue.component("v-example", require('./components/ExampleComponent.vue').default);

var money_currency_locale = function (value) {
    value = Number(value);
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
};

Vue.filter("money_real", function (value) {
    return money_currency_locale(value);
});

const store = new Vuex.Store({
    state: {
        search:'Bucar...'
    },
    mutations: {
        search(state, value) {
            state.search = value;
        }
    },
    getters: {
        search: state => {
            return state.search
        }
    },
});


var app = new Vue({
    el: '#wrapper',
    store,
});
